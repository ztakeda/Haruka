exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 🛐`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✓ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  😌🍺`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│ あ ${prefix}menu
│ あ ${prefix}help
│ あ ${prefix}haruka
│
├ *Download*
│ あ ${prefix}play [query]
│ あ ${prefix}song [judul lagu]
│ あ ${prefix}pinterest [query]
│ あ ${prefix}ytmp3 [url]
│ あ ${prefix}ytmp4 [url]
│ あ ${prefix}tiktok [url]
│ あ ${prefix}tiktoknowm [url]
│ あ ${prefix}tiktokwm [url]
│ あ ${prefix}tiktokaudio [url]
│ あ ${prefix}soundcloud [url]
│ あ ${prefix}telesticker [url]
│
├ *Convert*
│ ✘ ${prefix}stiker [video/image]
│ ✘ ${prefix}semoji 😎
│ ✘ ${prefix}smeme [text]
│ ✘ ${prefix}memegen [text|text2]
│ ✘ ${prefix}fast [video/vn]
│ ✘ ${prefix}tupai [video/vn]
│ ✘ ${prefix}vibra [video/vn]
│ ✘ ${prefix}robot [video/vn]
│ ✘ ${prefix}slow [video/vn]
│ ✘ ${prefix}bass [video/vn]
│ ✘ ${prefix}nightcore [video/vn]
│
├ *Education*
│ ✿ ${prefix}nuliskiri [text]
│ ✿ ${prefix}nuliskanan [text]
│ ✿ ${prefix}foliokiri [text]
│ ✿ ${prefix}foliokanan [text]
│
├ *Game*
│ ❕ ${prefix}tebakgambar 
│
├ *Info*
│ 友 ${prefix}owner
│ 友 ${prefix}daftar
│
├ *Owner*
│ シ ${prefix}broadcast [text]
│ シ ${prefix}leave
│ シ >
│ シ $
│ シ  => 
│
├ *Group*
│ 友 ${prefix}antilink 1 / 0
│ 友 ${prefix}hidetag [text]
│ 友 ${prefix}linkgrup
│ 友 ${prefix}tagall
│ 友 ${prefix}kick @tag
│ 友 ${prefix}setdesc [text] 
│ 友 ${prefix}setname [text] 
╰─⬣
`
	}
