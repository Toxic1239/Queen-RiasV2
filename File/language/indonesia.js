var link = "https://t.me/lorenzobotinc"
exports.noToken = "Bot token tidak boleh kosong, silahkan buat bot melalui https://t.me/BotFather"

exports.first_chat = (botname, pushname) => {
    return `Halo ${pushname}! Nama saya ${botname} - Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot ini.

Bergabunglah dengan [channel saya](https://t.me/lorenzobotinc) untuk mendapatkan informasi tentang semua pembaruan terbaru.

Kirim perintah /privacy untuk melihat syarat dan ketentuan penggunaan bot.
`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. isi sendiri"
exports.getStyle = (style, style2) => {
    return `**${style2} Yg Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yg Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Mohon tunggu sebentar`"
exports.ok = `Done ✅`
exports.menu = async (alpha, thumbnail, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
    var ini_anu = `Hi ${pushname}

╭─❒ 「 Bot Info 」 
├ Creator :  [@${OWNER_NAME}](${OWNER[0]})
├ Sponsored :  [@BotFather](https://t.me/BotFather)
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${simple.runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Profile : [@${pushname}](https://t.me/${username})
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
    var button = [
        [{
                text: '🃏 Anime',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
                text: '👧 Cecan',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Cogan️ 👦',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
                text: '📥 Download',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'Ephoto 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            },
        ],
        [{
                text: '🖼️ Logo Maker',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            },
        ],
        [{
                text: '👙 Nsfw & Sfw',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Photooxy 🖼️',
                callback_data: 'photooxycmd ' + user_id
            },
        ],
        [{
                text: '👦 Owner',
                callback_data: 'owner ' + user_id
            },
            {
                text: 'Text Pro 🖌️',
                callback_data: 'textprocmd ' + user_id
            },
        ],
    ]
    try {
        await alpha.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await alpha.replyWithPhoto({
            source: thumbnail
        }, {
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}
exports.animecmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ANIME 」 
» [/akame](${link})
» [/anna](${link})
» [/asuna-yuki](${link})
» [/ayuzawa](${link})
» [/chitoge](${link})
» [/emilia](${link})
» [/erza](${link})
» [/hinata](${link})
» [/inori](${link})
» [/kaga-kouko](${link})
» [/kaori-miyazono](${link})
» [/kotori-minami](${link})
» [/killua](${link})
» [/mikasa](${link})
» [/mio-akiyama](${link})
» [/mizore-sirayuki](${link})
» [/nakiri-alice](${link})
» [/naruto](${link})
» [/riyas-gremori](${link})
» [/sakura](${link})
» [/sento-isuzu](${link})
» [/shana](${link})
» [/shiina](${link})
» [/shinka](${link})
» [/winry](${link})
» [/yukino](${link})
» [/yuzuki](${link})
» [/mikosiba](${link})
» [/luffy](${link})
» [/zoro](${link})
» [/ussop](${link})
» [/sanji](${link})
» [/minato](${link})
» [/boruto](${link})
» [/sarada](${link})
» [/mitsuki](${link})
» [/orochimaru](${link})
» [/tsunade](${link})
» [/kakashi](${link})
» [/rimuru](${link})
» [/sagiri](${link})
» [/natsu](${link})
» [/tanjirou](${link})
» [/loli](${link})
» [/picre](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "Markdown",
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.asupancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Cecan 👧',
                callback_data: 'cecancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ASUPAN 」 
» [/chika](${link})
» [/rikagusriani](${link})
» [/bocil](${link})
» [/geayubi](${link})
» [/santuy](${link})
» [/ukhty](${link})
» [/asupan](${link})
» [/delvira](${link})
» [/ayu](${link})
» [/bunga](${link})
» [/aura](${link})
» [/nisa](${link})
» [/ziva](${link})
» [/yana](${link})
» [/viona](${link})
» [/syania](${link})
» [/riri](${link})
» [/syifa](${link})
» [/mama-gina](${link})
» [/alcakenya](${link})
» [/mangayutri](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cecancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'asupancmd ' + user_id
            },
            {
                text: 'Cogan️ 👦',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 CECAN 」 
» [/china](${link})
» [/indonesia](${link})
» [/malaysia](${link})
» [/thailand](${link})
» [/korea](${link})
» [/japan](${link})
» [/vietnam](${link})
» [/jenni](${link})
» [/jiiso](${link})
» [/lisa](${link})
» [/rose](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cogancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Download 📥 ',
                callback_data: 'downloadcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 COGAN 」 
» [/wuyifan](${link})
» [/suga](${link})
» [/parkchanyeol](${link})
» [/ohsehun](${link})
» [/luhan](${link})
» [/kimtaehyung](${link})
» [/kimseok](${link})
» [/kimnanjoon](${link})
» [/kimminseok](${link})
» [/kimjunmyeon](${link})
» [/kimjong](${link})
» [/kimjondae](${link})
» [/jungkook](${link})
» [/jimin](${link})
» [/jhope](${link})
» [/huangzitao](${link})
» [/dohkyungsoo](${link})
» [/baekhyung](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.downloadcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'cogancmd ' + user_id
            },
            {
                text: 'Ephoto 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 DOWNLOAD 」 
» [/ytmp4](${link})
» [/ytmp3](${link})
» [/play](${link})
» [/ytsearch](${link})
» [/igdl](${link})
» [/igphoto](${link})
» [/igvideo](${link})
» [/igreels](${link})
» [/pinterest](${link})
» [/mediafire](${link})
» [/tiktok](${link})
» [/tiktokaudio](${link})
» [/danboorudl](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.ephotocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'ephotocmd2 ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 EPHOTO 360 」 
» [/1917text](${link})
» [/angelwing](${link})
» [/announofwin](${link})
» [/birthdaycake](${link})
» [/capercut](${link})
» [/cardhalloween](${link})
» [/christmascard](${link})
» [/christmasseason](${link})
» [/covergamepubg](${link})
» [/covergraffiti](${link})
» [/dragonfire](${link})
» [/embroider](${link})
» [/fabrictext](${link})
» [/facebookgold](${link})
» [/facebooksilver](${link})
» [/funnyanimations](${link})
» [/funnyhalloween](${link})
» [/galaxybat](${link})
» [/galaxywallpaper](${link})
» [/generalexam](${link})
» [/glowingtext](${link})
» [/graffiti3d](${link})
» [/graffititext](${link})
» [/graffititext2](${link})
» [/graffititext3](${link})
» [/greetingcardvideo](${link})
» [/halloweenbats](${link})
» [/heartcup](${link})
» [/heartflashlight](${link})
» [/horrorletter](${link})
» [/icetext](${link})
» [/instagramgold](${link})
» [/instagramsilver](${link})
» [/lightningpubg](${link})
» [/lovecard](${link})
» [/lovelycute](${link})
» [/masteryavatar](${link})
» [/merrycard](${link})
» [/messagecoffee](${link})
» [/metalstar](${link})
» [/milkcake](${link})
» [/modengold3](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.ephotocmd2 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Logo Maker 🎨',
                callback_data: 'logocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 EPHOTO 360 」 
» [/moderngold](${link})
» [/moderngold2](${link})
» [/moderngoldsilver](${link})
» [/nameonheart](${link})
» [/noeltext](${link})
» [/projectyasuo](${link})
» [/pubgbirthday](${link})
» [/pubgglicthvideo](${link})
» [/pubgmascotlogo](${link})
» [/puppycute](${link})
» [/realembroidery](${link})
» [/retrotext](${link})
» [/rosebirthday](${link})
» [/snowontext](${link})
» [/starsnight](${link})
» [/summerbeach](${link})
» [/sunglightshadow](${link})
» [/textcakes](${link})
» [/texthalloween](${link})
» [/textonglass](${link})
» [/textsky](${link})
» [/thundertext](${link})
» [/twittergold](${link})
» [/twittersilver](${link})
» [/viettel](${link})
» [/vintagetelevision](${link})
» [/watercolor2](${link})
» [/womansday](${link})
» [/writeblood](${link})
» [/writegalaxy](${link})
» [/writehorror](${link})
» [/youtubegold](${link})
» [/youtubesilver](${link})
» [/zombie3d](${link})
» [/shirtclub](${link})
» [/steellettering](${link})
» [/letterstext](${link})
» [/barcashirt](${link})
» [/premiercup](${link})
» [/stylepoligon](${link})
» [/lifebuoys](${link})
» [/juventusshirt](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'logocmd2 ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 LOGO MAKER 」 
» [/anonymous2](${link})
» [/astronotspace](${link})
» [/avatar3q360](${link})
» [/avatarff](${link})
» [/avatarleagueofking](${link})
» [/avatarlolbyname](${link})
» [/avataroverwatch](${link})
» [/bannerofaov](${link})
» [/bannerofaov2](${link})
» [/bannerofapex](${link})
» [/banneroffreefire](${link})
» [/banneroflol](${link})
» [/bannerofoverwatch](${link})
» [/bannerofpubg](${link})
» [/bannerytcsgo](${link})
» [/beautifulgalaxylol](${link})
» [/beautifulshimmering](${link})
» [/blueneon](${link})
» [/circlemarcotteam](${link})
» [/colorfulpubg](${link})
» [/companylogo](${link})
» [/companylogo2](${link})
» [/coverbannerlol](${link})
» [/coverdota2](${link})
» [/coverfblol](${link})
» [/coverfreefirefb](${link})
» [/coverleagueofking](${link})
» [/coverloknew](${link})
» [/coverofwarface](${link})
» [/coveronepiecefb](${link})
» [/crossfirecover](${link})
» [/crossfirestyle](${link})
» [/csgocover](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd2 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 LOGO MAKER 」 
» [/cutegirlgamer](${link})
» [/cyberhunterfb](${link})
» [/dragonballfb](${link})
» [/effect3donbeach](${link})
» [/elegantrotation](${link})
» [/fbgamepubgcover](${link})
» [/footballteam](${link})
» [/gaminglogo4fvs](${link})
» [/gamingmascot](${link})
» [/gradientlogo](${link})
» [/gunlogogaming](${link})
» [/introvideomaker](${link})
» [/letterlogos ](${link})
» [/logoaccording ](${link})
» [/logogamingassasin ](${link})
» [/lolcoverbyname ](${link})
» [/lolpentakill ](${link})
» [/lolwallpaper ](${link})
» [/maketeamlogo ](${link})
» [/mascotstyle ](${link})
» [/metalmascot ](${link})
» [/newlolavatar ](${link})
» [/overwatchcover ](${link})
» [/overwatchwallpaper ](${link})
» [/pencilsketch ](${link})
» [/pubgcutelogo ](${link})
» [/pubglogomaker](${link})
» [/rovwallpaper ](${link})
» [/rovwallpaperhd ](${link})
» [/teamlogo ](${link})
» [/wallpaperaov ](${link})
» [/wallpaperml](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.islamcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'Nsfw & Sfw 👙',
                callback_data: 'nsfwcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ISLAMIC 」 
» [/asmaulhusna](${link})
» [/kisahnabi](${link})
» [/jadwalshalat](${link})
» [/randomquran](${link})
» [/randomquran2](${link})
» [/listsurah](${link})
» [/tafsirsurah](${link})
» [/alquranaudio](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.nsfwcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'islamcmd ' + user_id
            },
            {
                text: 'Photooxy 🖼️',
                callback_data: 'photooxycmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 NSFW & SFW 」 
» [/baka](${link})
» [/smug](${link})
» [/neko-sfw](${link})
» [/hentai-gif](${link})
» [/spank](${link})
» [/blowjob](${link})
» [/cumarts](${link})
» [/eroyuri](${link})
» [/eroneko](${link})
» [/erokemonomimi](${link})
» [/erokitsune](${link})
» [/ero](${link})
» [/feet](${link})
» [/erofeet](${link})
» [/feetgif](${link})
» [/femdom](${link})
» [/futanari](${link})
» [/hentai](${link})
» [/holoero](${link})
» [/holo](${link})
» [/keta](${link})
» [/kitsune](${link})
» [/kemonomimi](${link})
» [/pussyart](${link})
» [/pussywankgif](${link})
» [/girl-solo](${link})
» [/girl-solo-gif](${link})
» [/tits](${link})
» [/trap](${link})
» [/yuri](${link})
» [/avatar2](${link})
» [/anal](${link})
» [/bj](${link})
» [/boobs](${link})
» [/classic](${link})
» [/cumsluts](${link})
» [/kuni](${link})
» [/lesbian](${link})
» [/neko](${link})
» [/neko-gif](${link})
» [/ahegao](${link})
» [/bdsm](${link})
» [/cuckold](${link})
» [/cum](${link})
» [/foot](${link})
» [/gangbang](${link})
» [/glasses](${link})
» [/jahy](${link})
» [/masturbation](${link})
» [/nsfw-neko](${link})
» [/orgy](${link})
» [/panties](${link})
» [/tentacles](${link})
» [/thighs](${link})
» [/zettai](${link})
» [/cuddle](${link})
» [/foxgirl](${link})
» [/kemonomimi2](${link})
» [/woof](${link})
» [/holo2](${link})
» [/hug](${link})
» [/kiss](${link})
» [/lizard](${link})
» [/meowi](${link})
» [/neko2](${link})
» [/pat](${link})
» [/poke](${link})
» [/slap](${link})
» [/tickle](${link})
» [/rule34](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.photooxycmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Text Pro 🖌️',
                callback_data: 'textprocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 NSFW & SFW 」 
» [/typography-flower](${link})
» [/under-flower](${link})
» [/bevel-text](${link})
» [/silk-text](${link})
» [/sweet-andy](${link})
» [/smoke-typography](${link})
» [/carvedwood](${link})
» [/scary-cemetery](${link})
» [/royallook](${link})
» [/coffeecup2](${link})
» [/illuminated](${link})
» [/harry-potter2](${link})
» [/birthday-cake](${link})
» [/embroidery](${link})
» [/flaming](${link})
» [/furtext](${link})
» [/nightsky](${link})
» [/glow-rainbow](${link})
» [/gradient-avatar](${link})
» [/white-cube](${link})
» [/graffiti-cover](${link})
» [/rainbow-shine](${link})
» [/smoky-neon](${link})
» [/quotes-underfall](${link})
» [/vector-nature](${link})
» [/yellow-rose](${link})
» [/love-text](${link})
» [/underwater-ocean](${link})
» [/nature-text](${link})
» [/wolf-metal](${link})
» [/summer-text](${link})
» [/wooden-board](${link})
» [/quote-wood](${link})
» [/love-text](${link})
» [/quotes-undergrass](${link})
» [/naruto-banner](${link})
» [/love-message](${link})
» [/textoncup2](${link})
» [/burn-paper](${link})
» [/smoke](${link})
» [/romantic-messages](${link})
» [/shadow-sky](${link})
» [/text-cup](${link})
» [/coffecup](${link})
» [/battlegrounds-logo](${link})
» [/battlefield4](${link})
» [/text-8bit](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'photooxycmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'textprocmd2 ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「  TEXT PRO 」 
» [/3dbox](${link})
» [/3dchrome](${link})
» [/3dglue](${link})
» [/3dstone](${link})
» [/abstra](${link})
» [/advanced](${link})
» [/bear](${link})
» [/berry](${link})
» [/biscuit](${link})
» [/black-metal](${link})
» [/blackpink](${link})
» [/blood](${link})
» [/blood2](${link})
» [/blue-balloon](${link})
» [/blue-gem](${link})
» [/blue-glass](${link})
» [/blue-glitter](${link})
» [/blue-jewelry](${link})
» [/blue-metal](${link})
» [/blue-sparkling](${link})
» [/bokeh](${link})
» [/bread](${link})
» [/broken](${link})
» [/bronze-glitter](${link})
» [/candy](${link})
» [/captain-as2](${link})
» [/carbon](${link})
» [/chocolate](${link})
» [/chrismast](${link})
» [/christmas](${link})
» [/cloudsky](${link})
» [/cyan-balloon](${link})
» [/cyan-glass](${link})
» [/cyan-jewelry](${link})
» [/cyan-sparkling](${link})
» [/dark-gold](${link})
» [/decorate](${link})
» [/decorate-purple](${link})
» [/decorative](${link})
» [/deluxe-gold](${link})
» [/demon](${link})
» [/denim](${link})
» [/discovery](${link})
» [/dropwater](${link})
» [/drug](${link})
» [/embossed](${link})
» [/engraved](${link})
» [/equalizer](${link})
» [/eroded-metal](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd2 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'textprocmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'textprocmd3 ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「  TEXT PRO 」 
» [/fabric](${link})
» [/fiction](${link})
» [/firework](${link})
» [/glitch](${link})
» [/gloss](${link})
» [/glossy](${link})
» [/glossy-blue](${link})
» [/glossy-carbon](${link})
» [/gold-balloon](${link})
» [/gold-glitter](${link})
» [/gold-sparkling](${link})
» [/golden](${link})
» [/gradient](${link})
» [/gradient2](${link})
» [/green-balloon](${link})
» [/green-glass](${link})
» [/green-glitter](${link})
» [/green-jewelry](${link})
» [/green-neon](${link})
» [/green-sparkling](${link})
» [/halloween](${link})
» [/halloween2](${link})
» [/holographic](${link})
» [/honey2](${link})
» [/hot-metal](${link})
» [/ice](${link})
» [/joker](${link})
» [/juice](${link})
» [/koifish](${link})
» [/luxury2](${link})
» [/magma](${link})
» [/marble](${link})
» [/marble2](${link})
» [/matrix](${link})
» [/metal-silver](${link})
» [/metaldark](${link})
» [/metallic2](${link})
» [/minion](${link})
» [/multicolor](${link})
» [/natural](${link})
» [/neon](${link})
» [/neon-devil](${link})
» [/neon-light](${link})
» [/neon2](${link})
» [/neonc](${link})
» [/neonlight](${link})
» [/neonligth2](${link})
» [/newyear](${link})
» [/newyear2](${link})
» [/orange-glass](${link})
» [/orange-jewelry](${link})
» [/oscar](${link})
» [/papercut](${link})
» [/peridot](${link})
» [/pink-balloon](${link})
» [/pink-glitter](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd3 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'textprocmd2 ' + user_id
            },
            {
                text: 'Anime 🃏',
                callback_data: 'animecmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「  TEXT PRO 」 
» [/pink-sparkling](${link})
» [/purple](${link})
» [/purple-balloon](${link})
» [/purple-gem](${link})
» [/purple-glass](${link})
» [/purple-glitter](${link})
» [/purple-jewelry](${link})
» [/purple-shiny-glass](${link})
» [/purple-sparkling](${link})
» [/rainbow2](${link})
» [/red-balloon](${link})
» [/red-glass](${link})
» [/red-jewelry](${link})
» [/red-sparkling](${link})
» [/road-warning](${link})
» [/robot](${link})
» [/rock](${link})
» [/rusty](${link})
» [/scifi](${link})
» [/shiny](${link})
» [/silver-glitter](${link})
» [/silver-jewelry](${link})
» [/sircuit](${link})
» [/skeleton](${link})
» [/sketch](${link})
» [/snow](${link})
» [/steel](${link})
» [/strawberry](${link})
» [/summer](${link})
» [/summery](${link})
» [/thunder](${link})
» [/thunder2](${link})
» [/toxic](${link})
» [/transformer](${link})
» [/underwater](${link})
» [/wall](${link})
» [/water-pipe](${link})
» [/watercolor](${link})
» [/wicker](${link})
» [/wonderful-graffiti](${link})
» [/wood](${link})
» [/writing](${link})
» [/xmas](${link})
» [/yellow-glass](${link})
» [/yellow-jewelry](${link})
» [/horror](${link})
» [/game8bit](${link})
» [/layered](${link})
» [/glitch2](${link})
» [/cool-graffiti](${link})
» [/cool-wall-graffiti](${link})
» [/realistic](${link})
» [/space3d](${link})
» [/glitch-tiktok](${link})
» [/stone](${link})
» [/marvel](${link})
» [/marvel2](${link})
» [/metal-rose-gold](${link})
» [/pornhub](${link})
» [/avengers](${link})
» [/metal-rainbow](${link})
» [/metal-gold](${link})
» [/metal-galaxy](${link})
» [/lion](${link})
» [/wolf-black-white](${link})
» [/wolf-galaxy](${link})
» [/ninja](${link})
» [/3dsteel](${link})
» [/horror2](${link})
» [/lava](${link})
» [/bagel](${link})
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption,
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
    }, {
        reply_markup: {
            inline_keyboard: button
        }
    })
}