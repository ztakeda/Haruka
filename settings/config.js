const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = false
global.anti_delete = false

// setting
global.ownername ="ztakeda"
global.ownernumber = "6285704347763"
global.botname = "ChizuruBot"
global.thumbnail = fs.readFileSync("./settings/logo.png") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/b4f44e6c8451e457183d6.jpg"
global.lolkey = 'e966d3aac613b61dabd35cc6' //register lolhuman.xyz klo mau apikey
global.zenzkey = '8423e19c13' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
