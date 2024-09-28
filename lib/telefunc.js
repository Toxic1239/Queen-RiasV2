require("../settings")
const fetch = require('node-fetch')
const axios = require("axios");
const {
    Telegraf
} = require('telegraf')
const bot = new Telegraf(BOT_TOKEN)

class Function {
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    runtime(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor(seconds % (3600 * 24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
    }
    async fetchJson(url, options = {}) {
        try {
            let data = await axios(url, {
                method: "get",
                headers: {
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
                    origin: url,
                    referer: url
                },
                responseType: 'json'
            })

            return data?.data
        } catch (e) {
            return e
        }
    }
    async getLink(file_id){ 
      try {
        return ( await bot.telegram.getFileLink(file_id)).href 
      } catch { 
        throw "Error while get url" } 
    }


    getUserName(user) {
        try {
            var last_name = user["last_name"] || ""
            var full_name = user.first_name + " " + last_name
            user["full_name"] = full_name.trim()
            return user
        } catch (e) {
            throw e
        }
    }
    isUrl(url) {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'gi'))
    }
    range(start, stop, step) {
        if (typeof stop == 'undefined') {
            stop = start;
            start = 0;
        }
        if (typeof step == 'undefined') {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    }
    getUser(user){
    try {
        var last_name = user["last_name"] || ""
        var full_name = user.first_name + " " + last_name
        user["full_name"] = full_name.trim()
        return user
    } catch (e) { throw e }
}
    async getPhotoProfile(id){
    try {
        var url_default = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        if (String(id).startsWith("-100")) {
            var pp = await bot.telegram.getChat(id)
            if (!pp.hasOwnProperty("photo")) return url_default
            var file_id = pp.photo.big_file_id
        } else {
            var pp = await bot.telegram.getUserProfilePhotos(id)
            if (pp.total_count == 0) return url_default
            var file_id = pp.photos[0][2].file_id
        }
        return await this.getLink(file_id)
    } catch (e) { throw e }
}
}

exports.simple = new Function()