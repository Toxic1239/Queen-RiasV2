


const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Owner Menu 』
┃🤤 ${prefix}autoread 
┃🤤 ${prefix}autobio 
┃🤤 ${prefix}autotype 
┃🤤 ${prefix}unavailable 
┃🤤 ${prefix}autorecord 
┃🤤 ${prefix}autorecordtype 
┃🤤 ${prefix}autoswview 
┃🤤 ${prefix}autoreact 
┃🤤 ${prefix}setautoblock 
┃🤤 ${prefix}setantiforeign 
┃🤤 ${prefix}autoblock 
┃🤤 ${prefix}onlygc 
┃🤤 ${prefix}onlypc 
┃🤤 ${prefix}onlyindia 
┃🤤 ${prefix}onlyindo 
┃🤤 ${prefix}anticall 
┃🤤 ${prefix}self 
┃🤤 ${prefix}public 
┃🤤 ${prefix}join 
┃🤤 ${prefix}poll 
┃🤤 ${prefix}spam 
┃🤤 ${prefix}bc 
┃🤤 ${prefix}bcgroup 
┃🤤 ${prefix}setmenu 
┃🤤 ${prefix}setimgmenu 
┃🤤 ${prefix}setvidmenu 
┃🤤 ${prefix}setgifmenu 
┃🤤 ${prefix}setreply 
┃🤤 ${prefix}setprefix 
┃🤤 ${prefix}addlimit 
┃🤤 ${prefix}dellimit 
┃🤤 ${prefix}resethit 
┃🤤 ${prefix}resetuser 
┃🤤 ${prefix}creategc 
┃🤤 ${prefix}setexif 
┃🤤 ${prefix}userjid 
┃🤤 ${prefix}setbotbio 
┃🤤 ${prefix}delppbot 
┃🤤 ${prefix}shutdown 
┃🤤 ${prefix}setppbot 
┃🤤 ${prefix}addprem 
┃🤤 ${prefix}delprem 
┃🤤 ${prefix}addowner 
┃🤤 ${prefix}delowner 
┃🤤 ${prefix}addvn 
┃🤤 ${prefix}addapk 
┃🤤 ${prefix}addzip 
┃🤤 ${prefix}addpdf 
┃🤤 ${prefix}delapk 
┃🤤 ${prefix}delzip 
┃🤤 ${prefix}delpdf 
┃🤤 ${prefix}delvn 
┃🤤 ${prefix}addsticker 
┃🤤 ${prefix}delsticker 
┃🤤 ${prefix}addimage 
┃🤤 ${prefix}delimage 
┃🤤 ${prefix}addvideo 
┃🤤 ${prefix}delvideo 
┃🤤 ${prefix}addtitle 
┃🤤 ${prefix}deltitle 
┃🤤 ${prefix}upswtext 
┃🤤 ${prefix}upswvideo 
┃🤤 ${prefix}upswimage 
┃🤤 ${prefix}upswaudio 
┃🤤 ${prefix}autosticker 
┃🤤 ${prefix}block 
┃🤤 ${prefix}unblock 
┃🤤 ${prefix}leavegc 
┃🤤 ${prefix}pushcontact 
┃🤤 ${prefix}pushcontactv2 
┃🤤 ${prefix}pushcontactv3 
┃🤤 ${prefix}jpm 
┃🤤 ${prefix}post 
┃🤤 ${prefix}clearall 
┃🤤 ${prefix}pinchat 
┃🤤 ${prefix}unpinchat 
┃🤤 ${prefix}addcase 
┃🤤 ${prefix}getcase 
┃🤤 ${prefix}delcase 
┃🤤 ${prefix}listcase 
┗❐

┏❐『 Group Menu 』
┃🤤 ${prefix}antibot 
┃🤤 ${prefix}antivv 
┃🤤 ${prefix}vv 
┃🤤 ${prefix}welcome 
┃🤤 ${prefix}adminevent 
┃🤤 ${prefix}groupevent 
┃🤤 ${prefix}antiforeign 
┃🤤 ${prefix}antimedia 
┃🤤 ${prefix}antiaudio 
┃🤤 ${prefix}antivideo 
┃🤤 ${prefix}antiimage 
┃🤤 ${prefix}antidocument 
┃🤤 ${prefix}antilocation 
┃🤤 ${prefix}anticontact 
┃🤤 ${prefix}antisticker 
┃🤤 ${prefix}antipoll 
┃🤤 ${prefix}antilink 
┃🤤 ${prefix}antilinkgc 
┃🤤 ${prefix}antipromotion 
┃🤤 ${prefix}antivirtex 
┃🤤 ${prefix}grouplink 
┃🤤 ${prefix}listadmin 
┃🤤 ${prefix}invite 
┃🤤 ${prefix}ephemeral 
┃🤤 ${prefix}delete 
┃🤤 ${prefix}setppgroup 
┃🤤 ${prefix}delppgroup 
┃🤤 ${prefix}setnamegc 
┃🤤 ${prefix}setdesc 
┃🤤 ${prefix}add 
┃🤤 ${prefix}kick 
┃🤤 ${prefix}promote 
┃🤤 ${prefix}demote 
┃🤤 ${prefix}kickall 
┃🤤 ${prefix}promoteall 
┃🤤 ${prefix}demoteall 
┃🤤 ${prefix}getcontact 
┃🤤 ${prefix}savecontact 
┃🤤 ${prefix}sendcontact 
┃🤤 ${prefix}contactag 
┃🤤 ${prefix}hidetag 
┃🤤 ${prefix}totag 
┃🤤 ${prefix}tagall 
┃🤤 ${prefix}editinfo 
┃🤤 ${prefix}opentime 
┃🤤 ${prefix}closetime 
┃🤤 ${prefix}resetlink 
┃🤤 ${prefix}getbio 
┃🤤 ${prefix}vote 
┃🤤 ${prefix}upvote 
┃🤤 ${prefix}downvote 
┃🤤 ${prefix}checkvote 
┃🤤 ${prefix}delvote 
┃🤤 ${prefix}antivirus 
┃🤤 ${prefix}antitoxic 
┃🤤 ${prefix}nsfw 
┃🤤 ${prefix}react 
┃🤤 ${prefix}getjoinrequest 
┗❐

┏❐『 Search 』
┃🤤 ${prefix}google 
┃🤤 ${prefix}wikipedia 
┃🤤 ${prefix}ytsearch 
┃🤤 ${prefix}xnxxsearch 
┃🤤 ${prefix}xvideosearch 
┃🤤 ${prefix}apksearch 
┃🤤 ${prefix}stickersearch 
┃🤤 ${prefix}imdb 
┃🤤 ${prefix}drakor 
┃🤤 ${prefix}detaildrakor 
┃🤤 ${prefix}streamingdrakor 
┃🤤 ${prefix}film 
┃🤤 ${prefix}detailfilm 
┃🤤 ${prefix}streamingfilm 
┃🤤 ${prefix}anime 
┃🤤 ${prefix}detailanime 
┃🤤 ${prefix}streaminganime 
┃🤤 ${prefix}donghua 
┃🤤 ${prefix}detaildonghua 
┃🤤 ${prefix}streamingdonghua 
┃🤤 ${prefix}wanumber 
┃🤤 ${prefix}friend 
┃🤤 ${prefix}lyrics 
┗❐

┏❐『 Ddos Menu 』
┃🤤 ${prefix}ddos [mix, tls, ninja] 
┃🤤 ${prefix}ddos-lol 
┃🤤 ${prefix}ddos-mix 
┃🤤 ${prefix}ddos-brow 
┃🤤 ${prefix}ddos-tls 
┃🤤 ${prefix}ddos-tls-v2 
┃🤤 ${prefix}ddos-kilua 
┃🤤 ${prefix}ddos-tls-bypass 
┃🤤 ${prefix}ddos-bypass-cf 
┃🤤 ${prefix}ddos-tls-vip 
┃🤤 ${prefix}ddos-floods 
┃🤤 ${prefix}ddos-egao 
┃🤤 ${prefix}ddos-xchrome 
┃🤤 ${prefix}ddos-fetch 
┃🤤 ${prefix}proxy 
┃🤤 ${prefix}ua 
┗❐

┏❐『 Download Menu 』
┃🤤 ${prefix}xnxxdl 
┃🤤 ${prefix}xvideodl 
┃🤤 ${prefix}itunes 
┃🤤 ${prefix}play 
┃🤤 ${prefix}ytmp3 
┃🤤 ${prefix}ytmp4 
┃🤤 ${prefix}tiktok 
┃🤤 ${prefix}tiktokaudio 
┃🤤 ${prefix}tiktokvideo 
┃🤤 ${prefix}tiktokslide 
┃🤤 ${prefix}igvideo 
┃🤤 ${prefix}igimage 
┃🤤 ${prefix}facebook 
┃🤤 ${prefix}twitter 
┃🤤 ${prefix}capcut 
┃🤤 ${prefix}apk 
┃🤤 ${prefix}mega 
┃🤤 ${prefix}mediafire 
┃🤤 ${prefix}google 
┃🤤 ${prefix}gimage 
┃🤤 ${prefix}weather 
┃🤤 ${prefix}spotify 
┃🤤 ${prefix}gitclone 
┃🤤 ${prefix}happymod 
┃🤤 ${prefix}gdrive 
┃🤤 ${prefix}pinterest 
┃🤤 ${prefix}ringtone 
┃🤤 ${prefix}autodownload 
┗❐

┏❐『 Convert 』
┃🤤 ${prefix}obfuscate 
┃🤤 ${prefix}styletext 
┃🤤 ${prefix}fliptext 
┃🤤 ${prefix}tts 
┃🤤 ${prefix}say 
┃🤤 ${prefix}togif 
┃🤤 ${prefix}toqr 
┃🤤 ${prefix}bass 
┃🤤 ${prefix}blown 
┃🤤 ${prefix}deep 
┃🤤 ${prefix}earrape 
┃🤤 ${prefix}fast 
┃🤤 ${prefix}fat 
┃🤤 ${prefix}nightcore 
┃🤤 ${prefix}reverse 
┃🤤 ${prefix}robot 
┃🤤 ${prefix}slow 
┃🤤 ${prefix}smooth 
┃🤤 ${prefix}squirrel 
┃🤤 ${prefix}tinyurl 
┃🤤 ${prefix}tovn 
┃🤤 ${prefix}toaudio 
┃🤤 ${prefix}tomp3 
┃🤤 ${prefix}tomp4
┃🤤 ${prefix}toimg 
┃🤤 ${prefix}toonce 
┃🤤 ${prefix}sticker 
┃🤤 ${prefix}smeme 
┃🤤 ${prefix}smeta 
┃🤤 ${prefix}take 
┃🤤 ${prefix}emoji 
┃🤤 ${prefix}volaudio 
┃🤤 ${prefix}volvideo 
┃🤤 ${prefix}ebinary 
┃🤤 ${prefix}dbinary 
┃🤤 ${prefix}ssweb 
┃🤤 ${prefix}quoted 
┃🤤 ${prefix}translate 
┗❐

┏❐『 List 』
┃🤤 ${prefix}listprem 
┃🤤 ${prefix}listowner 
┃🤤 ${prefix}liststicker 
┃🤤 ${prefix}listimage 
┃🤤 ${prefix}listvideo 
┃🤤 ${prefix}listvn 
┃🤤 ${prefix}listapk 
┃🤤 ${prefix}listzip 
┃🤤 ${prefix}listpdf 
┃🤤 ${prefix}listbadword 
┃🤤 ${prefix}listpc 
┃🤤 ${prefix}listgc 
┗❐

┏❐『 Random Photo 』
┃🤤 ${prefix}aesthetic 
┃🤤 ${prefix}coffee 
┃🤤 ${prefix}wikimedia 
┃🤤 ${prefix}wallpaper 
┃🤤 ${prefix}art 
┃🤤 ${prefix}bts 
┃🤤 ${prefix}dogwoof 
┃🤤 ${prefix}catmeow 
┃🤤 ${prefix}lizardpic 
┃🤤 ${prefix}goosebird 
┃🤤 ${prefix}8ballpool 
┃🤤 ${prefix}cosplay 
┃🤤 ${prefix}hacker 
┃🤤 ${prefix}cyber 
┃🤤 ${prefix}gamewallpaper 
┃🤤 ${prefix}islamic 
┃🤤 ${prefix}jennie 
┃🤤 ${prefix}jiso 
┃🤤 ${prefix}satanic 
┃🤤 ${prefix}justina 
┃🤤 ${prefix}cartoon 
┃🤤 ${prefix}pentol 
┃🤤 ${prefix}cat 
┃🤤 ${prefix}kpop 
┃🤤 ${prefix}exo 
┃🤤 ${prefix}lisa 
┃🤤 ${prefix}space 
┃🤤 ${prefix}car 
┃🤤 ${prefix}technology 
┃🤤 ${prefix}bike 
┃🤤 ${prefix}shortquote 
┃🤤 ${prefix}antiwork 
┃🤤 ${prefix}hacking 
┃🤤 ${prefix}boneka 
┃🤤 ${prefix}rose 
┃🤤 ${prefix}ryujin 
┃🤤 ${prefix}ulzzangboy 
┃🤤 ${prefix}ulzzanggirl 
┃🤤 ${prefix}wallml 
┃🤤 ${prefix}wallphone 
┃🤤 ${prefix}mountain 
┃🤤 ${prefix}goose 
┃🤤 ${prefix}profilepic 
┃🤤 ${prefix}couplepp 
┃🤤 ${prefix}programming 
┃🤤 ${prefix}pubg 
┃🤤 ${prefix}blackpink 
┃🤤 ${prefix}randomboy   
┃🤤 ${prefix}randomgirl 
┃🤤 ${prefix}hijab   
┃🤤 ${prefix}chinese 
┃🤤 ${prefix}indo 
┃🤤 ${prefix}japanese 
┃🤤 ${prefix}korean 
┃🤤 ${prefix}malay 
┃🤤 ${prefix}thai 
┃🤤 ${prefix}vietnamese 
┗❐

┏❐『 Random Video 』
┃🤤 ${prefix}tiktokgirl 
┃🤤 ${prefix}tiktoknukthy 
┃🤤 ${prefix}tiktokkayes 
┃🤤 ${prefix}tiktokpanrika 
┃🤤 ${prefix}tiktoknotnot 
┃🤤 ${prefix}tiktokghea 
┃🤤 ${prefix}tiktoksantuy 
┃🤤 ${prefix}tiktokbocil 
┗❐

┏❐『 Stalker 』
┃🤤 ${prefix}tiktokstalk 
┃🤤 ${prefix}mlstalk 
┃🤤 ${prefix}npmstalk 
┃🤤 ${prefix}ghstalk 
┃🤤 ${prefix}genshin-stalk 
┃🤤 ${prefix}honkai-stalk 
┃🤤 ${prefix}photo-stalk 
┗❐

┏❐『 𝐑𝐢𝐚𝐬 𝐒𝐨𝐮𝐧𝐝𝐬 』
┃🤤 ${prefix}araara
┃🤤 ${prefix}baka
┃🤤 ${prefix}dosa
┃🤤 ${prefix}gambare
┃🤤 ${prefix}heeh
┃🤤 ${prefix}hello
┃🤤 ${prefix}konnichiwa
┃🤤 ${prefix}luvu
┃🤤 ${prefix}luvu2
┃🤤 ${prefix}moshi
┃🤤 ${prefix}moshi2
┃🤤 ${prefix}ohayo
┃🤤 ${prefix}ohayoghosaimase
┃🤤 ${prefix}oy
┃🤤 ${prefix}oyasumi
┃🤤 ${prefix}oyasuminasai
┃🤤 ${prefix}yareyare
┃🤤 ${prefix}yowaimo
┗❐

┏❐『 OpenAI 』
┃🤤 ${prefix}animate 
┃🤤 ${prefix}diffusion-anime 
┃🤤 ${prefix}bingai 
┃🤤 ${prefix}blackboxai 
┃🤤 ${prefix}travel-assistant 
┃🤤 ${prefix}guru-ai
┃🤤 ${prefix}rias-ai 
┃🤤 ${prefix}emi-ai 
┃🤤 ${prefix}claude-ai 
┃🤤 ${prefix}costume-ai 
┃🤤 ${prefix}herc-ai 
┃🤤 ${prefix}hercaiv1 
┃🤤 ${prefix}hercai-cartoon 
┃🤤 ${prefix}hercai-animefy 
┃🤤 ${prefix}hercai-lexica 
┃🤤 ${prefix}hercai-prodia 
┃🤤 ${prefix}hercai-simurg 
┃🤤 ${prefix}hercai-raava 
┃🤤 ${prefix}hercai-shonin 
┃🤤 ${prefix}realistic 
┃🤤 ${prefix}3dmodel 
┃🤤 ${prefix}openai-indo 
┃🤤 ${prefix}indo-ai 
┃🤤 ${prefix}diffusion 
┃🤤 ${prefix}photoleap 
┃🤤 ${prefix}openai 
┃🤤 ${prefix}dalle 
┃🤤 ${prefix}ai 
┃🤤 ${prefix}remini 
┃🤤 ${prefix}simi 
┃🤤 ${prefix}removebg 
┃🤤 ${prefix}tozombie 
┃🤤 ${prefix}toanime 
┗❐

┏❐『 Game 』
┃🤤 ${prefix}truth 
┃🤤 ${prefix}dare 
┃🤤 ${prefix}dice
┃🤤 ${prefix}coin
┃🤤 ${prefix}suit 
┃🤤 ${prefix}tictactoe 
┃🤤 ${prefix}werewolf 
┃🤤 ${prefix}math 
┃🤤 ${prefix}mc 
┃🤤 ${prefix}freefire_pet 
┃🤤 ${prefix}freefire_character 
┃🤤 ${prefix}freefire_news 
┃🤤 ${prefix}genshin-sheets 
┃🤤 ${prefix}honkai-sheets 
┃🤤 ${prefix}wuwa-sheets 
┃🤤 ${prefix}wuwa-cards 
┃🤤 ${prefix}samp-info 
┃🤤 ${prefix}valorant-maps 
┃🤤 ${prefix}valorant-weapons 
┃🤤 ${prefix}osu-profile 
┗❐

┏❐『 Fun Menu 』
┃🤤 ${prefix}define 
┃🤤 ${prefix}readmore 
┃🤤 ${prefix}fact 
┃🤤 ${prefix}couple 
┃🤤 ${prefix}soulmate 
┃🤤 ${prefix}stupidcheck 
┃🤤 ${prefix}handsomecheck 
┃🤤 ${prefix}uncleancheck 
┃🤤 ${prefix}hotcheck 
┃🤤 ${prefix}smartcheck 
┃🤤 ${prefix}greatcheck 
┃🤤 ${prefix}evilcheck 
┃🤤 ${prefix}dogcheck 
┃🤤 ${prefix}coolcheck 
┃🤤 ${prefix}waifucheck 
┃🤤 ${prefix}awesomecheck 
┃🤤 ${prefix}gaycheck 
┃🤤 ${prefix}cutecheck 
┃🤤 ${prefix}lesbiancheck 
┃🤤 ${prefix}hornycheck 
┃🤤 ${prefix}prettycheck 
┃🤤 ${prefix}lovelycheck 
┃🤤 ${prefix}uglycheck 
┃🤤 ${prefix}pick 
┃🤤 ${prefix}pickupline 
┃🤤 ${prefix}quotes 
┃🤤 ${prefix}can 
┃🤤 ${prefix}is 
┃🤤 ${prefix}when 
┃🤤 ${prefix}where 
┃🤤 ${prefix}what 
┃🤤 ${prefix}how 
┃🤤 ${prefix}rate 
┃🤤 ${prefix}cry 
┃🤤 ${prefix}kill 
┃🤤 ${prefix}hug 
┃🤤 ${prefix}pat 
┃🤤 ${prefix}lick  
┃🤤 ${prefix}kiss 
┃🤤 ${prefix}bite 
┃🤤 ${prefix}yeet 
┃🤤 ${prefix}bully 
┃🤤 ${prefix}bonk 
┃🤤 ${prefix}wink 
┃🤤 ${prefix}poke 
┃🤤 ${prefix}nom 
┃🤤 ${prefix}slap 
┃🤤 ${prefix}smile  
┃🤤 ${prefix}wave 
┃🤤 ${prefix}awoo 
┃🤤 ${prefix}blush 
┃🤤 ${prefix}smug 
┃🤤 ${prefix}glomp  
┃🤤 ${prefix}happy 
┃🤤 ${prefix}dance 
┃🤤 ${prefix}cringe 
┃🤤 ${prefix}cuddle 
┃🤤 ${prefix}highfive  
┃🤤 ${prefix}handhold 
┃🤤 ${prefix}spank 
┃🤤 ${prefix}tickle 
┃🤤 ${prefix}feed 
┃🤤 ${prefix}checkme 
┃🤤 ${prefix}sound1 - sound161 
┗❐

┏❐『 Sticker 』
┃🤤 ${prefix}goose 
┃🤤 ${prefix}woof 
┃🤤 ${prefix}8ball 
┃🤤 ${prefix}lizard 
┃🤤 ${prefix}meow 
┃🤤 ${prefix}gura 
┃🤤 ${prefix}telestick 
┃🤤 ${prefix}ttp 
┗❐

┏❐『 Anime 』
┃🤤 ${prefix}stickhandhold 
┃🤤 ${prefix}stickshinobu 
┃🤤 ${prefix}stickcuddle 
┃🤤 ${prefix}stickhighfive 
┃🤤 ${prefix}stickdance 
┃🤤 ${prefix}stickcringe 
┃🤤 ${prefix}stickhappy 
┃🤤 ${prefix}stickglomp 
┃🤤 ${prefix}sticksmug 
┃🤤 ${prefix}stickblush 
┃🤤 ${prefix}stickawoo 
┃🤤 ${prefix}stickwave 
┃🤤 ${prefix}sticksmile 
┃🤤 ${prefix}stickslap 
┃🤤 ${prefix}stickpoke 
┃🤤 ${prefix}stickwink 
┃🤤 ${prefix}stickbonk 
┃🤤 ${prefix}stickbully 
┃🤤 ${prefix}stickyeet 
┃🤤 ${prefix}stickbike 
┃🤤 ${prefix}stickkiss 
┃🤤 ${prefix}sticklick 
┃🤤 ${prefix}stickpat 
┃🤤 ${prefix}stickhug 
┃🤤 ${prefix}stickkill 
┃🤤 ${prefix}stickcry 
┃🤤 ${prefix}stickspank 
┃🤤 ${prefix}sticktickle 
┃🤤 ${prefix}traceanime 
┃🤤 ${prefix}animesearch 
┃🤤 ${prefix}akira 
┃🤤 ${prefix}akiyama 
┃🤤 ${prefix}ana 
┃🤤 ${prefix}asuna 
┃🤤 ${prefix}ayuzawa 
┃🤤 ${prefix}boruto 
┃🤤 ${prefix}chiho 
┃🤤 ${prefix}chitoge 
┃🤤 ${prefix}cosplayloli 
┃🤤 ${prefix}cosplaysagiri 
┃🤤 ${prefix}deidara 
┃🤤 ${prefix}doraemon 
┃🤤 ${prefix}elaina 
┃🤤 ${prefix}emilia 
┃🤤 ${prefix}erza 
┃🤤 ${prefix}gremory 
┃🤤 ${prefix}hestia 
┃🤤 ${prefix}husbu 
┃🤤 ${prefix}inori 
┃🤤 ${prefix}isuzu 
┃🤤 ${prefix}itachi 
┃🤤 ${prefix}itori 
┃🤤 ${prefix}kaga 
┃🤤 ${prefix}kagura 
┃🤤 ${prefix}kakasih 
┃🤤 ${prefix}kaori 
┃🤤 ${prefix}keneki 
┃🤤 ${prefix}kotori 
┃🤤 ${prefix}kurumi 
┃🤤 ${prefix}loli 
┃🤤 ${prefix}loli2 
┃🤤 ${prefix}madara 
┃🤤 ${prefix}megumin 
┃🤤 ${prefix}mikasa 
┃🤤 ${prefix}mikey 
┃🤤 ${prefix}miku 
┃🤤 ${prefix}minato 
┃🤤 ${prefix}naruto 
┃🤤 ${prefix}neko 
┃🤤 ${prefix}nekonime 
┃🤤 ${prefix}nezuko 
┃🤤 ${prefix}onepiece 
┃🤤 ${prefix}pokemon 
┃🤤 ${prefix}randomnime 
┃🤤 ${prefix}randomnime2 
┃🤤 ${prefix}rize 
┃🤤 ${prefix}sagiri 
┃🤤 ${prefix}sakura 
┃🤤 ${prefix}sasuke 
┃🤤 ${prefix}shina 
┃🤤 ${prefix}shinka 
┃🤤 ${prefix}shinomiya 
┃🤤 ${prefix}shizuka 
┃🤤 ${prefix}shota 
┃🤤 ${prefix}tejina 
┃🤤 ${prefix}toukachan 
┃🤤 ${prefix}tsunade 
┃🤤 ${prefix}waifu 
┃🤤 ${prefix}waifu2 
┃🤤 ${prefix}animewall 
┃🤤 ${prefix}yotsuba 
┃🤤 ${prefix}yuki 
┃🤤 ${prefix}yulibocil 
┃🤤 ${prefix}yumeko 
┃🤤 ${prefix}8ball 
┃🤤 ${prefix}animeawoo 
┃🤤 ${prefix}animemegumin 
┃🤤 ${prefix}animeshinobu 
┃🤤 ${prefix}animehandhold 
┃🤤 ${prefix}animehighfive 
┃🤤 ${prefix}animecringe 
┃🤤 ${prefix}animedance 
┃🤤 ${prefix}animehappy 
┃🤤 ${prefix}animeglomp 
┃🤤 ${prefix}animeblush 
┃🤤 ${prefix}animesmug 
┃🤤 ${prefix}animewave 
┃🤤 ${prefix}animesmille 
┃🤤 ${prefix}animepoke 
┃🤤 ${prefix}animewink 
┃🤤 ${prefix}animebonk 
┃🤤 ${prefix}animebully 
┃🤤 ${prefix}animeyeet 
┃🤤 ${prefix}animebite 
┃🤤 ${prefix}animelick 
┃🤤 ${prefix}animekill 
┃🤤 ${prefix}animecry 
┃🤤 ${prefix}animewlp 
┃🤤 ${prefix}animekiss 
┃🤤 ${prefix}animehug 
┃🤤 ${prefix}animeneko 
┃🤤 ${prefix}animepat 
┃🤤 ${prefix}animeslap 
┃🤤 ${prefix}animecuddle 
┃🤤 ${prefix}animewaifu 
┃🤤 ${prefix}animenom 
┃🤤 ${prefix}animefoxgirl 
┃🤤 ${prefix}animegecg 
┃🤤 ${prefix}animetickle 
┃🤤 ${prefix}animefeed 
┃🤤 ${prefix}animeavatar 
┃🤤 ${prefix}animesearch 
┃🤤 ${prefix}anime-tierlist 
┃🤤 ${prefix}animeorder 
┃🤤 ${prefix}avatar 
┃🤤 ${prefix}husbando 
┃🤤 ${prefix}kitsune 
┃🤤 ${prefix}shinobu 
┃🤤 ${prefix}fox_girl 
┃🤤 ${prefix}gecg 
┗❐

┏❐『 Anime NSFW 』
┃🤤 ${prefix}hentai 
┃🤤 ${prefix}gifblowjob 
┃🤤 ${prefix}hentaivid 
┃🤤 ${prefix}hneko 
┃🤤 ${prefix}nwaifu 
┃🤤 ${prefix}animespank 
┃🤤 ${prefix}trap 
┃🤤 ${prefix}blowjob 
┃🤤 ${prefix}cuckold 
┃🤤 ${prefix}milf 
┃🤤 ${prefix}eba 
┃🤤 ${prefix}pussy 
┃🤤 ${prefix}yuri 
┃🤤 ${prefix}zettai 
┃🤤 ${prefix}genshin 
┃🤤 ${prefix}swimsuit 
┃🤤 ${prefix}ero 
┃🤤 ${prefix}schoolswimsuit 
┃🤤 ${prefix}white 
┃🤤 ${prefix}barefoot 
┃🤤 ${prefix}touhou 
┃🤤 ${prefix}gamecg 
┃🤤 ${prefix}hololive 
┃🤤 ${prefix}uncensored 
┃🤤 ${prefix}sunglasses 
┃🤤 ${prefix}glasses 
┃🤤 ${prefix}weapon 
┃🤤 ${prefix}shirtlift 
┃🤤 ${prefix}chain 
┃🤤 ${prefix}fingering 
┃🤤 ${prefix}flatchest 
┃🤤 ${prefix}torncloth 
┃🤤 ${prefix}bondage 
┃🤤 ${prefix}demon 
┃🤤 ${prefix}pantypull 
┃🤤 ${prefix}headdress 
┃🤤 ${prefix}headphone 
┃🤤 ${prefix}anusview 
┃🤤 ${prefix}shorts 
┃🤤 ${prefix}stokings 
┃🤤 ${prefix}topless 
┃🤤 ${prefix}beach 
┃🤤 ${prefix}bunnygirl 
┃🤤 ${prefix}bunnyear 
┃🤤 ${prefix}vampire 
┃🤤 ${prefix}nobra 
┃🤤 ${prefix}bikini 
┃🤤 ${prefix}whitehair 
┃🤤 ${prefix}blonde 
┃🤤 ${prefix}pinkhair 
┃🤤 ${prefix}bed 
┃🤤 ${prefix}oppai 
┃🤤 ${prefix}ponytail 
┃🤤 ${prefix}nude 
┃🤤 ${prefix}dress 
┃🤤 ${prefix}underwear 
┃🤤 ${prefix}foxgirl 
┃🤤 ${prefix}uniform 
┃🤤 ${prefix}skirt 
┃🤤 ${prefix}breast 
┃🤤 ${prefix}twintail  
┃🤤 ${prefix}spreadpussy  
┃🤤 ${prefix}seethrough 
┃🤤 ${prefix}breasthold 
┃🤤 ${prefix}fateseries 
┃🤤 ${prefix}spreadlegs 
┃🤤 ${prefix}openshirt 
┃🤤 ${prefix}headband 
┃🤤 ${prefix}nipples 
┃🤤 ${prefix}erectnipples 
┃🤤 ${prefix}greenhair 
┃🤤 ${prefix}wolfgirl 
┃🤤 ${prefix}catgirl 
┃🤤 ${prefix}rule34 
┃🤤 ${prefix}kcrandom 
┗❐

┏❐『 Database 』
┃🤤 ${prefix}setcmd 
┃🤤 ${prefix}delcmd 
┃🤤 ${prefix}listcmd 
┃🤤 ${prefix}lockcmd 
┃🤤 ${prefix}addmsg 
┃🤤 ${prefix}delmsg 
┃🤤 ${prefix}getmsg 
┃🤤 ${prefix}listmsg 
┗❐

┏❐『 Pterodactyl 』
┃🤤 ${prefix}1gb 
┃🤤 ${prefix}2gb 
┃🤤 ${prefix}3gb 
┃🤤 ${prefix}4gb 
┃🤤 ${prefix}5gb 
┃🤤 ${prefix}6gb 
┃🤤 ${prefix}7gb 
┃🤤 ${prefix}8gb 
┃🤤 ${prefix}9gb 
┃🤤 ${prefix}10gb 
┃🤤 ${prefix}11gb 
┃🤤 ${prefix}12gb 
┃🤤 ${prefix}13gb 
┃🤤 ${prefix}14gb 
┃🤤 ${prefix}15gb 
┃🤤 ${prefix}panel 
┃🤤 ${prefix}cpanel 
┃🤤 ${prefix}reinstall 
┃🤤 ${prefix}delusr 
┃🤤 ${prefix}detusr 
┃🤤 ${prefix}listsrv 
┃🤤 ${prefix}listusr 
┃🤤 ${prefix}delsrv 
┃🤤 ${prefix}delusr 
┃🤤 ${prefix}updatesrv 
┃🤤 ${prefix}addusr 
┃🤤 ${prefix}addsrv 
┃🤤 ${prefix}listadmin 
┃🤤 ${prefix}suspend 
┃🤤 ${prefix}unsuspend 
┃🤤 ${prefix}startsrv 
┃🤤 ${prefix}restartsrv 
┃🤤 ${prefix}stopsrv 
┗❐

┏❐『 Share Rias 』
┃🤤 ${prefix}sharerias-pairing
┃🤤 ${prefix}start-sharerias 
┃🤤 ${prefix}stop-sharerias
┃🤤 ${prefix}list-sharerias 
┗❐

┏❐『 Religon 』
┃🤤 ${prefix}bible 
┃🤤 ${prefix}quran 
┃🤤 ${prefix}hadist 
┃🤤 ${prefix}gita 
┗❐

┏❐『 Library 』
┃🤤 ${prefix}cerpen-anak 
┃🤤 ${prefix}cerpen-bahasadaerah 
┃🤤 ${prefix}cerpen-bahasainggris 
┃🤤 ${prefix}cerpen-bahasajawa 
┃🤤 ${prefix}cerpen-bahasasunda
┃🤤 ${prefix}cerpen-budaya 
┃🤤 ${prefix}cerpen-cinta 
┃🤤 ${prefix}cerpen-cintaislami 
┃🤤 ${prefix}cerpen-cintapertama 
┃🤤 ${prefix}cerpen-cintaromantis 
┃🤤 ${prefix}cerpen-cintasedih 
┃🤤 ${prefix}cerpen-cintasegitiga 
┃🤤 ${prefix}cerpen-cintasejati 
┃🤤 ${prefix}cerpen-galau 
┃🤤 ${prefix}cerpen-gokil 
┃🤤 ${prefix}cerpen-inspiratif 
┃🤤 ${prefix}cerpen-jepang 
┃🤤 ${prefix}cerpen-kehidupan
┃🤤 ${prefix}cerpen-keluarga 
┃🤤 ${prefix}cerpen-kisahnyata 
┃🤤 ${prefix}cerpen-korea 
┃🤤 ${prefix}cerpen-kristen 
┃🤤 ${prefix}cerpen-liburan 
┃🤤 ${prefix}cerpen-malaysia 
┃🤤 ${prefix}cerpen-mengharukan 
┃🤤 ${prefix}cerpen-misteri 
┃🤤 ${prefix}cerpen-motivasi 
┃🤤 ${prefix}cerpen-nasihat 
┃🤤 ${prefix}cerpen-nasionalisme 
┃🤤 ${prefix}cerpen-olahraga 
┃🤤 ${prefix}cerpen-patahhati
┃🤤 ${prefix}cerpen-penantian 
┃🤤 ${prefix}cerpen-pendidikan 
┃🤤 ${prefix}cerpen-pengalaman 
┃🤤 ${prefix}cerpen-pengorbanan 
┃🤤 ${prefix}cerpen-penyesalan 
┃🤤 ${prefix}cerpen-perjuangan 
┃🤤 ${prefix}cerpen-perpisahan 
┃🤤 ${prefix}cerpen-persahabatan 
┃🤤 ${prefix}cerpen-petualangan 
┃🤤 ${prefix}cerpen-ramadhan 
┃🤤 ${prefix}cerpen-remaja 
┃🤤 ${prefix}cerpen-rindu 
┃🤤 ${prefix}cerpen-rohani 
┃🤤 ${prefix}cerpen-romantis 
┃🤤 ${prefix}cerpen-sastra 
┃🤤 ${prefix}cerpen-sedih 
┃🤤 ${prefix}cerpen-sejarah 
┗❐

┏❐『 DESTROY ALL 』
┃🤤 ${prefix}riascrash 
┃🤤 ${prefix}x 
┃🤤 ${prefix}xiphone 
┃🤤 ${prefix}xcrash 
┃🤤 ${prefix}xvirus 
┃🤤 ${prefix}beta-new 
┃🤤 ${prefix}beta-old 
┃🤤 ${prefix}wa-busins 
┃🤤 ${prefix}wa-mod 
┃🤤 ${prefix}wa-ori 
┃🤤 ${prefix}xreact 
┃🤤 ${prefix}🦖 
┃🤤 ${prefix}🐜 
┃🤤 ${prefix}🐉 
┃🤤 ${prefix}🌷 
┃🤤 ${prefix}lockotp 
┗❐
┏❐『 VIDEO BUG 』
┃🤤 ${prefix}vidcrash 234xx
┃🤤 ${prefix}vidkill 234xx
┗❐


┏❐『 Other Menu 』
┃🤤 ${prefix}update 
┃🤤 ${prefix}ping 
┃🤤 ${prefix}menu 
┃🤤 ${prefix}alive
┃🤤 ${prefix}myip 
┃🤤 ${prefix}repo 
┃🤤 ${prefix}reportbug 
┃🤤 ${prefix}idgroup 
┃🤤 ${prefix}owner 
┃🤤 ${prefix}rentbot 
┃🤤 ${prefix}donate 
┃🤤 ${prefix}runtime 
┃🤤 ${prefix}systeminfo
┃🤤 ${prefix}generatepassword
┃🤤 ${prefix}checkaccount 
┗❐
`}

global.animemenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Anime 』
┃🤤 ${prefix}stickhandhold 
┃🤤 ${prefix}stickshinobu 
┃🤤 ${prefix}stickcuddle 
┃🤤 ${prefix}stickhighfive 
┃🤤 ${prefix}stickdance 
┃🤤 ${prefix}stickcringe 
┃🤤 ${prefix}stickhappy 
┃🤤 ${prefix}stickglomp 
┃🤤 ${prefix}sticksmug 
┃🤤 ${prefix}stickblush 
┃🤤 ${prefix}stickawoo 
┃🤤 ${prefix}stickwave 
┃🤤 ${prefix}sticksmile 
┃🤤 ${prefix}stickslap 
┃🤤 ${prefix}stickpoke 
┃🤤 ${prefix}stickwink 
┃🤤 ${prefix}stickbonk 
┃🤤 ${prefix}stickbully 
┃🤤 ${prefix}stickyeet 
┃🤤 ${prefix}stickbike 
┃🤤 ${prefix}stickkiss 
┃🤤 ${prefix}sticklick 
┃🤤 ${prefix}stickpat 
┃🤤 ${prefix}stickhug 
┃🤤 ${prefix}stickkill 
┃🤤 ${prefix}stickcry 
┃🤤 ${prefix}stickspank 
┃🤤 ${prefix}sticktickle 
┃🤤 ${prefix}traceanime 
┃🤤 ${prefix}animesearch 
┃🤤 ${prefix}akira 
┃🤤 ${prefix}akiyama 
┃🤤 ${prefix}ana 
┃🤤 ${prefix}asuna 
┃🤤 ${prefix}ayuzawa 
┃🤤 ${prefix}boruto 
┃🤤 ${prefix}chiho 
┃🤤 ${prefix}chitoge 
┃🤤 ${prefix}cosplayloli 
┃🤤 ${prefix}cosplaysagiri 
┃🤤 ${prefix}deidara 
┃🤤 ${prefix}doraemon 
┃🤤 ${prefix}elaina 
┃🤤 ${prefix}emilia 
┃🤤 ${prefix}erza 
┃🤤 ${prefix}gremory 
┃🤤 ${prefix}hestia 
┃🤤 ${prefix}husbu 
┃🤤 ${prefix}inori 
┃🤤 ${prefix}isuzu 
┃🤤 ${prefix}itachi 
┃🤤 ${prefix}itori 
┃🤤 ${prefix}kaga 
┃🤤 ${prefix}kagura 
┃🤤 ${prefix}kakasih 
┃🤤 ${prefix}kaori 
┃🤤 ${prefix}keneki 
┃🤤 ${prefix}kotori 
┃🤤 ${prefix}kurumi 
┃🤤 ${prefix}loli 
┃🤤 ${prefix}loli2 
┃🤤 ${prefix}madara 
┃🤤 ${prefix}megumin 
┃🤤 ${prefix}mikasa 
┃🤤 ${prefix}mikey 
┃🤤 ${prefix}miku 
┃🤤 ${prefix}minato 
┃🤤 ${prefix}naruto 
┃🤤 ${prefix}neko 
┃🤤 ${prefix}nekonime 
┃🤤 ${prefix}nezuko 
┃🤤 ${prefix}onepiece 
┃🤤 ${prefix}pokemon 
┃🤤 ${prefix}randomnime 
┃🤤 ${prefix}randomnime2 
┃🤤 ${prefix}rize 
┃🤤 ${prefix}sagiri 
┃🤤 ${prefix}sakura 
┃🤤 ${prefix}sasuke 
┃🤤 ${prefix}shina 
┃🤤 ${prefix}shinka 
┃🤤 ${prefix}shinomiya 
┃🤤 ${prefix}shizuka 
┃🤤 ${prefix}shota 
┃🤤 ${prefix}tejina 
┃🤤 ${prefix}toukachan 
┃🤤 ${prefix}tsunade 
┃🤤 ${prefix}waifu 
┃🤤 ${prefix}waifu2 
┃🤤 ${prefix}animewall 
┃🤤 ${prefix}yotsuba 
┃🤤 ${prefix}yuki 
┃🤤 ${prefix}yulibocil 
┃🤤 ${prefix}yumeko 
┃🤤 ${prefix}8ball 
┃🤤 ${prefix}feed 
┃🤤 ${prefix}animeawoo 
┃🤤 ${prefix}animemegumin 
┃🤤 ${prefix}animeshinobu 
┃🤤 ${prefix}animehandhold 
┃🤤 ${prefix}animehighfive 
┃🤤 ${prefix}animecringe 
┃🤤 ${prefix}animedance 
┃🤤 ${prefix}animehappy 
┃🤤 ${prefix}animeglomp 
┃🤤 ${prefix}animeblush 
┃🤤 ${prefix}animesmug 
┃🤤 ${prefix}animewave 
┃🤤 ${prefix}animesmille 
┃🤤 ${prefix}animepoke 
┃🤤 ${prefix}animewink 
┃🤤 ${prefix}animebonk 
┃🤤 ${prefix}animebully 
┃🤤 ${prefix}animeyeet 
┃🤤 ${prefix}animebite 
┃🤤 ${prefix}animelick 
┃🤤 ${prefix}animekill 
┃🤤 ${prefix}animecry 
┃🤤 ${prefix}animewlp 
┃🤤 ${prefix}animekiss 
┃🤤 ${prefix}animehug 
┃🤤 ${prefix}animeneko 
┃🤤 ${prefix}animepat 
┃🤤 ${prefix}animeslap 
┃🤤 ${prefix}animecuddle 
┃🤤 ${prefix}animewaifu 
┃🤤 ${prefix}animenom 
┃🤤 ${prefix}animefoxgirl 
┃🤤 ${prefix}animegecg 
┃🤤 ${prefix}animetickle 
┃🤤 ${prefix}animefeed 
┃🤤 ${prefix}animeavatar 
┃🤤 ${prefix}animesearch 
┃🤤 ${prefix}anime-tierlist 
┃🤤 ${prefix}animeorder 
┃🤤 ${prefix}animequote 
┃🤤 ${prefix}avatar 
┃🤤 ${prefix}husbando 
┃🤤 ${prefix}kitsune 
┃🤤 ${prefix}shinobu 
┃🤤 ${prefix}fox_girl 
┃🤤 ${prefix}gecg 
┗❐
`}

global.ownermenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Owner Menu 』
┃🤤 ${prefix}autoread 
┃🤤 ${prefix}autobio 
┃🤤 ${prefix}autotype 
┃🤤 ${prefix}unavailable 
┃🤤 ${prefix}autorecord 
┃🤤 ${prefix}autorecordtype 
┃🤤 ${prefix}autoswview 
┃🤤 ${prefix}autoreact 
┃🤤 ${prefix}setautoblock 
┃🤤 ${prefix}setantiforeign 
┃🤤 ${prefix}autoblock 
┃🤤 ${prefix}onlygc 
┃🤤 ${prefix}onlypc 
┃🤤 ${prefix}onlyindia 
┃🤤 ${prefix}onlyindo 
┃🤤 ${prefix}anticall 
┃🤤 ${prefix}self 
┃🤤 ${prefix}public 
┃🤤 ${prefix}join 
┃🤤 ${prefix}poll 
┃🤤 ${prefix}spam 
┃🤤 ${prefix}bc 
┃🤤 ${prefix}bcgroup 
┃🤤 ${prefix}setmenu 
┃🤤 ${prefix}setimgmenu 
┃🤤 ${prefix}setvidmenu 
┃🤤 ${prefix}setgifmenu 
┃🤤 ${prefix}setreply 
┃🤤 ${prefix}setprefix 
┃🤤 ${prefix}addlimit 
┃🤤 ${prefix}dellimit 
┃🤤 ${prefix}resethit 
┃🤤 ${prefix}resetuser 
┃🤤 ${prefix}creategc 
┃🤤 ${prefix}userjid 
┃🤤 ${prefix}setexif 
┃🤤 ${prefix}setbotbio 
┃🤤 ${prefix}delppbot 
┃🤤 ${prefix}shutdown 
┃🤤 ${prefix}setppbot 
┃🤤 ${prefix}addprem 
┃🤤 ${prefix}delprem 
┃🤤 ${prefix}addowner 
┃🤤 ${prefix}delowner 
┃🤤 ${prefix}addvn 
┃🤤 ${prefix}addapk 
┃🤤 ${prefix}addzip 
┃🤤 ${prefix}addpdf 
┃🤤 ${prefix}delapk 
┃🤤 ${prefix}delzip 
┃🤤 ${prefix}delpdf 
┃🤤 ${prefix}delvn 
┃🤤 ${prefix}addsticker 
┃🤤 ${prefix}delsticker 
┃🤤 ${prefix}addimage 
┃🤤 ${prefix}delimage 
┃🤤 ${prefix}addvideo 
┃🤤 ${prefix}delvideo 
┃🤤 ${prefix}addtitle 
┃🤤 ${prefix}deltitle 
┃🤤 ${prefix}upswtext 
┃🤤 ${prefix}upswvideo 
┃🤤 ${prefix}upswimage 
┃🤤 ${prefix}upswaudio 
┃🤤 ${prefix}autosticker 
┃🤤 ${prefix}block 
┃🤤 ${prefix}unblock 
┃🤤 ${prefix}leavegc 
┃🤤 ${prefix}pushcontact 
┃🤤 ${prefix}pushcontactv2 
┃🤤 ${prefix}pushcontactv3 
┃🤤 ${prefix}jpm 
┃🤤 ${prefix}post 
┃🤤 ${prefix}clearall 
┃🤤 ${prefix}pinchat 
┃🤤 ${prefix}unpinchat 
┃🤤 ${prefix}addcase 
┃🤤 ${prefix}getcase 
┃🤤 ${prefix}delcase 
┃🤤 ${prefix}listcase 
┗❐
`}

global.othermenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Other Menu 』
┃🤤 ${prefix}update 
┃🤤 ${prefix}ping 
┃🤤 ${prefix}menu 
┃🤤 ${prefix}alive
┃🤤 ${prefix}myip 
┃🤤 ${prefix}repo 
┃🤤 ${prefix}reportbug 
┃🤤 ${prefix}idgroup 
┃🤤 ${prefix}owner 
┃🤤 ${prefix}rentbot 
┃🤤 ${prefix}donate 
┃🤤 ${prefix}checkaccount 
┃🤤 ${prefix}runtime 
┃🤤 ${prefix}systeminfo
┃🤤 ${prefix}generatepassword
┗❐
`}

global.downloadmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Download Menu 』
┃🤤 ${prefix}xnxxdl 
┃🤤 ${prefix}xvideodl 
┃🤤 ${prefix}itunes 
┃🤤 ${prefix}play 
┃🤤 ${prefix}ytmp3 
┃🤤 ${prefix}ytmp4 
┃🤤 ${prefix}tiktok 
┃🤤 ${prefix}tiktokaudio 
┃🤤 ${prefix}tiktokvideo 
┃🤤 ${prefix}tiktokslide 
┃🤤 ${prefix}igvideo 
┃🤤 ${prefix}igimage 
┃🤤 ${prefix}facebook 
┃🤤 ${prefix}twitter 
┃🤤 ${prefix}capcut 
┃🤤 ${prefix}apk
┃🤤 ${prefix}mega 
┃🤤 ${prefix}mediafire 
┃🤤 ${prefix}google 
┃🤤 ${prefix}gimage 
┃🤤 ${prefix}weather 
┃🤤 ${prefix}spotify 
┃🤤 ${prefix}gitclone 
┃🤤 ${prefix}happymod 
┃🤤 ${prefix}gdrive 
┃🤤 ${prefix}pinterest 
┃🤤 ${prefix}ringtone 
┃🤤 ${prefix}autodownload 
┗❐
`}

global.groupmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Group Menu 』
┃🤤 ${prefix}antibot 
┃🤤 ${prefix}vv 
┃🤤 ${prefix}antivv 
┃🤤 ${prefix}welcome 
┃🤤 ${prefix}adminevent 
┃🤤 ${prefix}groupevent 
┃🤤 ${prefix}antiforeign 
┃🤤 ${prefix}antimedia 
┃🤤 ${prefix}antiaudio 
┃🤤 ${prefix}antivideo 
┃🤤 ${prefix}antiimage 
┃🤤 ${prefix}antidocument 
┃🤤 ${prefix}antilocation 
┃🤤 ${prefix}anticontact 
┃🤤 ${prefix}antisticker 
┃🤤 ${prefix}antipoll 
┃🤤 ${prefix}antilink 
┃🤤 ${prefix}antilinkgc 
┃🤤 ${prefix}antipromotion 
┃🤤 ${prefix}antivirtex 
┃🤤 ${prefix}grouplink 
┃🤤 ${prefix}listadmin 
┃🤤 ${prefix}invite 
┃🤤 ${prefix}ephemeral 
┃🤤 ${prefix}delete 
┃🤤 ${prefix}setppgroup 
┃🤤 ${prefix}delppgroup 
┃🤤 ${prefix}setnamegc 
┃🤤 ${prefix}setdesc 
┃🤤 ${prefix}add 
┃🤤 ${prefix}kick 
┃🤤 ${prefix}promote 
┃🤤 ${prefix}demote 
┃🤤 ${prefix}kickall 
┃🤤 ${prefix}promoteall 
┃🤤 ${prefix}demoteall 
┃🤤 ${prefix}getcontact 
┃🤤 ${prefix}savecontact 
┃🤤 ${prefix}sendcontact 
┃🤤 ${prefix}contactag 
┃🤤 ${prefix}hidetag 
┃🤤 ${prefix}totag 
┃🤤 ${prefix}tagall 
┃🤤 ${prefix}editinfo 
┃🤤 ${prefix}opentime 
┃🤤 ${prefix}closetime 
┃🤤 ${prefix}resetlink 
┃🤤 ${prefix}getbio 
┃🤤 ${prefix}vote 
┃🤤 ${prefix}upvote 
┃🤤 ${prefix}downvote 
┃🤤 ${prefix}checkvote 
┃🤤 ${prefix}delvote 
┃🤤 ${prefix}antivirus 
┃🤤 ${prefix}antitoxic 
┃🤤 ${prefix}nsfw 
┃🤤 ${prefix}react 
┃🤤 ${prefix}getjoinrequest 
┗❐
`}

global.funmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Fun Menu 』
┃🤤 ${prefix}define 
┃🤤 ${prefix}readmore 
┃🤤 ${prefix}fact 
┃🤤 ${prefix}couple 
┃🤤 ${prefix}soulmate 
┃🤤 ${prefix}stupidcheck 
┃🤤 ${prefix}handsomecheck 
┃🤤 ${prefix}uncleancheck 
┃🤤 ${prefix}hotcheck 
┃🤤 ${prefix}smartcheck 
┃🤤 ${prefix}greatcheck 
┃🤤 ${prefix}evilcheck 
┃🤤 ${prefix}dogcheck 
┃🤤 ${prefix}coolcheck 
┃🤤 ${prefix}waifucheck 
┃🤤 ${prefix}awesomecheck 
┃🤤 ${prefix}gaycheck 
┃🤤 ${prefix}cutecheck 
┃🤤 ${prefix}lesbiancheck 
┃🤤 ${prefix}hornycheck 
┃🤤 ${prefix}prettycheck 
┃🤤 ${prefix}lovelycheck 
┃🤤 ${prefix}uglycheck 
┃🤤 ${prefix}pick 
┃🤤 ${prefix}pickupline 
┃🤤 ${prefix}quotes 
┃🤤 ${prefix}can 
┃🤤 ${prefix}is 
┃🤤 ${prefix}when 
┃🤤 ${prefix}where 
┃🤤 ${prefix}what 
┃🤤 ${prefix}how 
┃🤤 ${prefix}rate 
┃🤤 ${prefix}cry 
┃🤤 ${prefix}kill 
┃🤤 ${prefix}hug 
┃🤤 ${prefix}pat 
┃🤤 ${prefix}lick  
┃🤤 ${prefix}kiss 
┃🤤 ${prefix}bite 
┃🤤 ${prefix}yeet 
┃🤤 ${prefix}bully 
┃🤤 ${prefix}bonk 
┃🤤 ${prefix}wink 
┃🤤 ${prefix}poke 
┃🤤 ${prefix}nom 
┃🤤 ${prefix}slap 
┃🤤 ${prefix}smile  
┃🤤 ${prefix}wave 
┃🤤 ${prefix}awoo 
┃🤤 ${prefix}blush 
┃🤤 ${prefix}smug 
┃🤤 ${prefix}glomp  
┃🤤 ${prefix}happy 
┃🤤 ${prefix}dance 
┃🤤 ${prefix}cringe ??
┃🤤 ${prefix}cuddle 
┃🤤 ${prefix}highfive  
┃🤤 ${prefix}handhold 
┃🤤 ${prefix}spank 
┃🤤 ${prefix}tickle 
┃🤤 ${prefix}feed 
┃🤤 ${prefix}checkme 
┃🤤 ${prefix}sound1 - sound161 
┗❐
`}

global.stalkermenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Stalker 』
┃🤤 ${prefix}tiktokstalk 
┃🤤 ${prefix}mlstalk 
┃🤤 ${prefix}npmstalk 
┃🤤 ${prefix}ghstalk 
┃🤤 ${prefix}genshin-stalk 
┃🤤 ${prefix}honkai-stalk 
┃🤤 ${prefix}photo-stalk 
┗❐
`}

global.stickermenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Sticker 』
┃🤤 ${prefix}goose 
┃🤤 ${prefix}woof 
┃🤤 ${prefix}8ball 
┃🤤 ${prefix}lizard 
┃🤤 ${prefix}meow 
┃🤤 ${prefix}gura 
┃🤤 ${prefix}telestick 
┃🤤 ${prefix}ttp 
┗❐
`}

global.databasemenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Database 』
┃🤤 ${prefix}setcmd 
┃🤤 ${prefix}delcmd 
┃🤤 ${prefix}listcmd 
┃🤤 ${prefix}lockcmd 
┃🤤 ${prefix}addmsg 
┃🤤 ${prefix}delmsg 
┃🤤 ${prefix}getmsg 
┃🤤 ${prefix}listmsg 
┗❐
`}

global.pterodactylmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Pterodactyl 』
┃🤤 ${prefix}1gb 
┃🤤 ${prefix}2gb 
┃🤤 ${prefix}3gb 
┃🤤 ${prefix}4gb 
┃🤤 ${prefix}5gb 
┃🤤 ${prefix}6gb 
┃🤤 ${prefix}7gb 
┃🤤 ${prefix}8gb 
┃🤤 ${prefix}9gb 
┃🤤 ${prefix}10gb 
┃🤤 ${prefix}11gb 
┃🤤 ${prefix}12gb 
┃🤤 ${prefix}13gb 
┃🤤 ${prefix}14gb 
┃🤤 ${prefix}15gb 
┃🤤 ${prefix}panel 
┃🤤 ${prefix}cpanel 
┃🤤 ${prefix}reinstall 
┃🤤 ${prefix}delusr 
┃🤤 ${prefix}detusr 
┃🤤 ${prefix}listsrv 
┃🤤 ${prefix}listusr 
┃🤤 ${prefix}delsrv 
┃🤤 ${prefix}delusr 
┃🤤 ${prefix}updatesrv 
┃🤤 ${prefix}addusr 
┃🤤 ${prefix}addsrv 
┃🤤 ${prefix}listadmin 
┃🤤 ${prefix}suspend 
┃🤤 ${prefix}unsuspend 
┃🤤 ${prefix}startsrv 
┃🤤 ${prefix}restartsrv 
┃🤤 ${prefix}stopsrv 
┗❐
`}

global.sharemenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Share Rias 』
┃🤤 ${prefix}sharerias-pairing
┃🤤 ${prefix}start-sharerias 
┃🤤 ${prefix}stop-sharerias
┃🤤 ${prefix}list-sharerias 
┗❐
`}

global.aimenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 OpenAI 』
┃🤤 ${prefix}animate 
┃🤤 ${prefix}diffusion-anime 
┃🤤 ${prefix}bingai 
┃🤤 ${prefix}blackboxai 
┃🤤 ${prefix}travel-assistant 
┃🤤 ${prefix}guru-ai
┃🤤 ${prefix}rias-ai  
┃🤤 ${prefix}emi-ai 
┃🤤 ${prefix}claude-ai 
┃🤤 ${prefix}costume-ai 
┃🤤 ${prefix}herc-ai 
┃🤤 ${prefix}hercaiv1 
┃🤤 ${prefix}hercai-cartoon 
┃🤤 ${prefix}hercai-animefy 
┃🤤 ${prefix}hercai-lexica 
┃🤤 ${prefix}hercai-prodia 
┃🤤 ${prefix}hercai-simurg 
┃🤤 ${prefix}hercai-raava 
┃🤤 ${prefix}hercai-shonin 
┃🤤 ${prefix}realistic 
┃🤤 ${prefix}3dmodel 
┃🤤 ${prefix}openai-indo 
┃🤤 ${prefix}indo-ai 
┃🤤 ${prefix}diffusion 
┃🤤 ${prefix}photoleap 
┃🤤 ${prefix}openai 
┃🤤 ${prefix}dalle 
┃🤤 ${prefix}ai 
┃🤤 ${prefix}remini 
┃🤤 ${prefix}simi 
┃🤤 ${prefix}removebg 
┃🤤 ${prefix}tozombie 
┃🤤 ${prefix}toanime 
┗❐
`}

global.bugmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 DESTROY ALL 』
┃🤤 ${prefix}riascrash 
┃🤤 ${prefix}goodnight
┃🤤 ${prefix}xiphone 
┃🤤 ${prefix}xcrash 
┃🤤 ${prefix}xvirus 
┃🤤 ${prefix}beta-new 
┃🤤 ${prefix}beta-old 
┃🤤 ${prefix}wa-busins 
┃🤤 ${prefix}wa-mod 
┃🤤 ${prefix}wa-ori 
┃🤤 ${prefix}xreaxt
┃🤤 ${prefix}🦖 
┃🤤 ${prefix}🐜 
┃🤤 ${prefix}🐉 
┃🤤 ${prefix}🌷 
┃🤤 ${prefix}lockotp 
┗❐
┏❐『 VIDEO BUG 』
┃🤤 ${prefix}vidcrash 234xx
┃🤤 ${prefix}vidkill 234xx
┗❐
`}

global.randphotomenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Random Photo 』
┃🤤 ${prefix}aesthetic 
┃🤤 ${prefix}coffee 
┃🤤 ${prefix}wikimedia 
┃🤤 ${prefix}wallpaper 
┃🤤 ${prefix}art 
┃🤤 ${prefix}bts 
┃🤤 ${prefix}dogwoof 
┃🤤 ${prefix}catmeow 
┃🤤 ${prefix}lizardpic 
┃🤤 ${prefix}goosebird 
┃🤤 ${prefix}8ballpool 
┃🤤 ${prefix}cosplay 
┃🤤 ${prefix}hacker 
┃🤤 ${prefix}cyber 
┃🤤 ${prefix}gamewallpaper 
┃🤤 ${prefix}islamic 
┃🤤 ${prefix}jennie 
┃🤤 ${prefix}jiso 
┃🤤 ${prefix}satanic 
┃🤤 ${prefix}justina 
┃🤤 ${prefix}cartoon 
┃🤤 ${prefix}pentol 
┃🤤 ${prefix}cat 
┃🤤 ${prefix}kpop 
┃🤤 ${prefix}exo 
┃🤤 ${prefix}lisa 
┃🤤 ${prefix}space 
┃🤤 ${prefix}car 
┃🤤 ${prefix}technology 
┃🤤 ${prefix}bike 
┃🤤 ${prefix}shortquote 
┃🤤 ${prefix}antiwork 
┃🤤 ${prefix}hacking 
┃🤤 ${prefix}boneka 
┃🤤 ${prefix}rose 
┃🤤 ${prefix}ryujin 
┃🤤 ${prefix}ulzzangboy 
┃🤤 ${prefix}ulzzanggirl 
┃🤤 ${prefix}wallml 
┃🤤 ${prefix}wallphone 
┃🤤 ${prefix}mountain 
┃🤤 ${prefix}goose 
┃🤤 ${prefix}profilepic 
┃🤤 ${prefix}couplepp 
┃🤤 ${prefix}programming 
┃🤤 ${prefix}pubg 
┃🤤 ${prefix}blackpink 
┃🤤 ${prefix}randomboy   
┃🤤 ${prefix}randomgirl 
┃🤤 ${prefix}hijab   
┃🤤 ${prefix}chinese 
┃🤤 ${prefix}indo 
┃🤤 ${prefix}japanese 
┃🤤 ${prefix}korean 
┃🤤 ${prefix}malay 
┃🤤 ${prefix}thai 
┃🤤 ${prefix}vietnamese 
┗❐
`}

global.randvideomenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Random Video 』
┃🤤 ${prefix}tiktokgirl 
┃🤤 ${prefix}tiktoknukthy 
┃🤤 ${prefix}tiktokkayes 
┃🤤 ${prefix}tiktokpanrika 
┃🤤 ${prefix}tiktoknotnot 
┃🤤 ${prefix}tiktokghea 
┃🤤 ${prefix}tiktoksantuy 
┃🤤 ${prefix}tiktokbocil 
┗❐
`}

global.nsfwmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Anime NSFW 』
┃🤤 ${prefix}hentai 
┃🤤 ${prefix}gifblowjob 
┃🤤 ${prefix}hentaivid 
┃🤤 ${prefix}hneko 
┃🤤 ${prefix}nwaifu 
┃🤤 ${prefix}animespank 
┃🤤 ${prefix}trap 
┃🤤 ${prefix}blowjob 
┃🤤 ${prefix}cuckold 
┃🤤 ${prefix}milf 
┃🤤 ${prefix}eba 
┃🤤 ${prefix}pussy 
┃🤤 ${prefix}yuri 
┃🤤 ${prefix}zettai 
┃🤤 ${prefix}genshin 
┃🤤 ${prefix}swimsuit 
┃🤤 ${prefix}ero 
┃🤤 ${prefix}schoolswimsuit 
┃🤤 ${prefix}white 
┃🤤 ${prefix}barefoot 
┃🤤 ${prefix}touhou 
┃🤤 ${prefix}gamecg 
┃🤤 ${prefix}hololive 
┃🤤 ${prefix}uncensored 
┃🤤 ${prefix}sunglasses 
┃🤤 ${prefix}glasses 
┃🤤 ${prefix}weapon 
┃🤤 ${prefix}shirtlift 
┃🤤 ${prefix}chain 
┃🤤 ${prefix}fingering 
┃🤤 ${prefix}flatchest 
┃🤤 ${prefix}torncloth 
┃🤤 ${prefix}bondage 
┃🤤 ${prefix}demon 
┃🤤 ${prefix}pantypull 
┃🤤 ${prefix}headdress 
┃🤤 ${prefix}headphone 
┃🤤 ${prefix}anusview 
┃🤤 ${prefix}shorts 
┃🤤 ${prefix}stokings 
┃🤤 ${prefix}topless 
┃🤤 ${prefix}beach 
┃🤤 ${prefix}bunnygirl 
┃🤤 ${prefix}bunnyear 
┃🤤 ${prefix}vampire 
┃🤤 ${prefix}nobra 
┃🤤 ${prefix}bikini 
┃🤤 ${prefix}whitehair 
┃🤤 ${prefix}blonde 
┃🤤 ${prefix}pinkhair 
┃🤤 ${prefix}bed 
┃🤤 ${prefix}oppai 
┃🤤 ${prefix}ponytail 
┃🤤 ${prefix}nude 
┃🤤 ${prefix}dress 
┃🤤 ${prefix}underwear 
┃🤤 ${prefix}foxgirl 
┃🤤 ${prefix}uniform 
┃🤤 ${prefix}skirt 
┃🤤 ${prefix}breast 
┃🤤 ${prefix}twintail  
┃🤤 ${prefix}spreadpussy  
┃🤤 ${prefix}seethrough 
┃🤤 ${prefix}breasthold 
┃🤤 ${prefix}fateseries 
┃🤤 ${prefix}spreadlegs 
┃🤤 ${prefix}openshirt 
┃🤤 ${prefix}headband 
┃🤤 ${prefix}nipples 
┃🤤 ${prefix}erectnipples 
┃🤤 ${prefix}greenhair 
┃🤤 ${prefix}wolfgirl 
┃🤤 ${prefix}catgirl 
┃🤤 ${prefix}rule34 
┃🤤 ${prefix}kcrandom 
┗❐
`}

global.gamemenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Game 』
┃🤤 ${prefix}truth 
┃🤤 ${prefix}dare 
┃🤤 ${prefix}dice
┃🤤 ${prefix}coin
┃🤤 ${prefix}suit 
┃🤤 ${prefix}tictactoe 
┃🤤 ${prefix}werewolf 
┃🤤 ${prefix}math 
┃🤤 ${prefix}mc 
┃🤤 ${prefix}freefire_pet 
┃🤤 ${prefix}freefire_character 
┃🤤 ${prefix}freefire_news 
┃🤤 ${prefix}genshin-sheets 
┃🤤 ${prefix}honkai-sheets 
┃🤤 ${prefix}wuwa-sheets 
┃🤤 ${prefix}wuwa-cards 
┃🤤 ${prefix}samp-info 
┃🤤 ${prefix}valorant-maps 
┃🤤 ${prefix}valorant-weapons 
┃🤤 ${prefix}osu-profile 
┗❐
`}

global.religionmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Religon 』
┃🤤 ${prefix}bible 
┃🤤 ${prefix}quran 
┃🤤 ${prefix}hadist 
┃🤤 ${prefix}gita 
┃🤤 ${prefix}gacha-Member
┗❐
`}

global.searchmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Search 』
┃🤤 ${prefix}google 
┃🤤 ${prefix}wikipedia 
┃🤤 ${prefix}ytsearch 
┃🤤 ${prefix}xnxxsearch 
┃🤤 ${prefix}xvideosearch 
┃🤤 ${prefix}apksearch 
┃🤤 ${prefix}stickersearch 
┃🤤 ${prefix}imdb 
┃🤤 ${prefix}drakor 
┃🤤 ${prefix}detaildrakor 
┃🤤 ${prefix}streamingdrakor 
┃🤤 ${prefix}film 
┃🤤 ${prefix}detailfilm 
┃🤤 ${prefix}streamingfilm 
┃🤤 ${prefix}anime 
┃🤤 ${prefix}detailanime 
┃🤤 ${prefix}streaminganime 
┃🤤 ${prefix}donghua 
┃🤤 ${prefix}detaildonghua 
┃🤤 ${prefix}streamingdonghua 
┃🤤 ${prefix}wanumber 
┃🤤 ${prefix}friend 
┃🤤 ${prefix}lyrics 
┗❐
`}

global.ddosmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Ddos Menu 』
┃🤤 ${prefix}ddos [mix, tls, ninja] 
┃🤤 ${prefix}ddos-lol 
┃🤤 ${prefix}ddos-mix 
┃🤤 ${prefix}ddos-brow 
┃🤤 ${prefix}ddos-tls 
┃🤤 ${prefix}ddos-tls-v2 
┃🤤 ${prefix}ddos-kilua 
┃🤤 ${prefix}ddos-tls-bypass 
┃🤤 ${prefix}ddos-bypass-cf 
┃🤤 ${prefix}ddos-tls-vip 
┃🤤 ${prefix}ddos-floods 
┃🤤 ${prefix}ddos-egao 
┃🤤 ${prefix}ddos-xchrome 
┃🤤 ${prefix}ddos-fetch 
┃🤤 ${prefix}proxy 
┃🤤 ${prefix}ua 
┗❐
`}

global.riasmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 𝐑𝐢𝐚𝐬 𝐒𝐨𝐮𝐧𝐝𝐬 』
┃🤤 ${prefix}araara
┃🤤 ${prefix}baka
┃🤤 ${prefix}dosa
┃🤤 ${prefix}gambare
┃🤤 ${prefix}heeh
┃🤤 ${prefix}hello
┃🤤 ${prefix}konnichiwa
┃🤤 ${prefix}luvu
┃🤤 ${prefix}luvu2
┃🤤 ${prefix}moshi
┃🤤 ${prefix}moshi2
┃🤤 ${prefix}ohayo
┃🤤 ${prefix}ohayoghosaimase
┃🤤 ${prefix}oy
┃🤤 ${prefix}oyasumi
┃🤤 ${prefix}oyasuminasai
┃🤤 ${prefix}yareyare
┃🤤 ${prefix}yowaimo
┗❐
`}

global.convertmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Convert 』
┃🤤 ${prefix}obfuscate 
┃🤤 ${prefix}styletext 
┃🤤 ${prefix}fliptext 
┃🤤 ${prefix}tts 
┃🤤 ${prefix}say 
┃🤤 ${prefix}togif 
┃🤤 ${prefix}toqr 
┃🤤 ${prefix}bass 
┃🤤 ${prefix}blown 
┃🤤 ${prefix}deep 
┃🤤 ${prefix}earrape 
┃🤤 ${prefix}fast 
┃🤤 ${prefix}fat 
┃🤤 ${prefix}nightcore 
┃🤤 ${prefix}reverse 
┃🤤 ${prefix}robot 
┃🤤 ${prefix}slow 
┃🤤 ${prefix}smooth 
┃🤤 ${prefix}squirrel 
┃🤤 ${prefix}tinyurl 
┃🤤 ${prefix}tovn 
┃🤤 ${prefix}toaudio 
┃🤤 ${prefix}tomp3 
┃🤤 ${prefix}tomp4
┃🤤 ${prefix}toimg 
┃🤤 ${prefix}toonce 
┃🤤 ${prefix}sticker 
┃🤤 ${prefix}smeme 
┃🤤 ${prefix}smeta 
┃🤤 ${prefix}take 
┃🤤 ${prefix}emoji 
┃🤤 ${prefix}volaudio 
┃🤤 ${prefix}volvideo 
┃🤤 ${prefix}ebinary 
┃🤤 ${prefix}dbinary 
┃🤤 ${prefix}ssweb 
┃🤤 ${prefix}quoted 
┃🤤 ${prefix}translate 
┗❐
`}

global.listmenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 List 』
┃🤤 ${prefix}listprem 
┃🤤 ${prefix}listowner 
┃🤤 ${prefix}liststicker 
┃🤤 ${prefix}listimage 
┃🤤 ${prefix}listvideo 
┃🤤 ${prefix}listvn 
┃🤤 ${prefix}listapk 
┃🤤 ${prefix}listzip 
┃🤤 ${prefix}listpdf 
┃🤤 ${prefix}listbadword 
┃🤤 ${prefix}listpc 
┃🤤 ${prefix}listgc 
┗❐
`}

global.librarymenu = (prefix) => {
return ` 
 👑 *𝒉𝒆𝒍𝒍𝒐*  

   𝐐𝐔𝐄𝐄𝐍 𝐑𝐈𝐀𝐒 𝐆𝐑𝐄𝐌𝐎𝐑𝐘 𝐕𝟐
<!> 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐓𝐎𝐗𝐗𝐈𝐂 <!>
ᯤ  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
ᯤ  𝐌𝐨𝐝𝐞 : *${ToxxicTechInc.public ? 'Public' : 'Self'}*
ᯤ  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${xprefix} ]*
ᯤ  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
ᯤ  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
ᯤ  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝑻𝒐𝒙𝒙𝒊𝒄 𝑩𝒐𝒚
❍──────────◙
│ 🤤 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 🤤 𝗔𝗹𝗶𝘃𝗲
❍──────────◙
❍──────────◙
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟮.𝟬
❍──────────◙
┏❐『 Library 』
┃🤤 ${prefix}cerpen-anak 
┃🤤 ${prefix}cerpen-bahasadaerah 
┃🤤 ${prefix}cerpen-bahasainggris 
┃🤤 ${prefix}cerpen-bahasajawa 
┃🤤 ${prefix}cerpen-bahasasunda
┃🤤 ${prefix}cerpen-budaya 
┃🤤 ${prefix}cerpen-cinta 
┃🤤 ${prefix}cerpen-cintaislami 
┃🤤 ${prefix}cerpen-cintapertama 
┃🤤 ${prefix}cerpen-cintaromantis 
┃🤤 ${prefix}cerpen-cintasedih 
┃🤤 ${prefix}cerpen-cintasegitiga 
┃🤤 ${prefix}cerpen-cintasejati 
┃🤤 ${prefix}cerpen-galau 
┃🤤 ${prefix}cerpen-gokil 
┃🤤 ${prefix}cerpen-inspiratif 
┃🤤 ${prefix}cerpen-jepang 
┃🤤 ${prefix}cerpen-kehidupan
┃🤤 ${prefix}cerpen-keluarga 
┃🤤 ${prefix}cerpen-kisahnyata 
┃🤤 ${prefix}cerpen-korea 
┃🤤 ${prefix}cerpen-kristen 
┃🤤 ${prefix}cerpen-liburan 
┃🤤 ${prefix}cerpen-malaysia 
┃🤤 ${prefix}cerpen-mengharukan 
┃🤤 ${prefix}cerpen-misteri 
┃🤤 ${prefix}cerpen-motivasi 
┃🤤 ${prefix}cerpen-nasihat 
┃🤤 ${prefix}cerpen-nasionalisme 
┃🤤 ${prefix}cerpen-olahraga 
┃🤤 ${prefix}cerpen-patahhati
┃🤤 ${prefix}cerpen-penantian 
┃🤤 ${prefix}cerpen-pendidikan 
┃🤤 ${prefix}cerpen-pengalaman 
┃🤤 ${prefix}cerpen-pengorbanan 
┃🤤 ${prefix}cerpen-penyesalan 
┃🤤 ${prefix}cerpen-perjuangan 
┃🤤 ${prefix}cerpen-perpisahan 
┃🤤 ${prefix}cerpen-persahabatan 
┃🤤 ${prefix}cerpen-petualangan 
┃🤤 ${prefix}cerpen-ramadhan 
┃🤤 ${prefix}cerpen-remaja 
┃🤤 ${prefix}cerpen-rindu 
┃🤤 ${prefix}cerpen-rohani 
┃🤤 ${prefix}cerpen-romantis 
┃🤤 ${prefix}cerpen-sastra 
┃🤤 ${prefix}cerpen-sedih 
┃🤤 ${prefix}cerpen-sejarah 
┗❐
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})