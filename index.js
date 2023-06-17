const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = ""; // MESAJLARIN GONDERILECEĞI KANAL ID BURAYA
var sahip = ""; // KENDI ID'NIZ BURAYA

client.on("ready",()=>{
	console.log("CGNUSL => OWO PARA KASMA BOTU AKTIF");
});

const cgnuslrandom = ["40000", "50000", "30000","45000","35000","29000"]
const cgnuslrandomsayı = cgnuslrandom[Math.floor(Math.random() * cgnuslrandom.length)];
var cgnuslrandommesaj = Math.floor(Math.random() * 999999999) + 1;
var cgnuslrandommesaj1 = Math.floor(Math.random() * 999999999) + 1;
var cgnuslrandommesaj2 = Math.floor(Math.random() * 999999999) + 1;

const cgnuslrandom1 = ["30000", "32000", "28000", "26000","22000","20000","35000"]
const cgnuslrandomsayı1 = cgnuslrandom1[Math.floor(Math.random() * cgnuslrandom1.length)];

const ardademrrandom2 = ["24000", "29000", "30000"]
const cgnuslrandomsayı2 = cgnuslrandom2[Math.floor(Math.random() * cgnuslrandom2.length)];


setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo");
		client.channels.get(kanal).send(cgnuslrandommesaj);
	};
},cgnuslrandomsayı);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
		client.channels.get(kanal).send(cgnuslrandommesaj1);
	};
},cgnuslrandomsayı1);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo b");
		client.channels.get(kanal).send(cgnuslrandommesaj2);
	};
},cgnuslrandomsayı2);

client.on("message",message=>{
	if(message.channel.id==kanal){
		if(message.author.id=="408785106942164992"){ // BURAYI ELLEMEYIN
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("to check that you are a human!")){
				db.set("owodg","1");
				message.channel.send("CGNUSL owo para kasma sistemi bot koruma açıldı.");
			};
		};
	};


	if(message.author.id == sahip){
		if(message.content == "!aç"){
			db.set("owodg","0");
			message.channel.send("CGNUSL owo para kasma sistemi bütün korumalarla birlikte açıldı 🥷.");
			console.log("CGNUSL owo para kasma sistemi başlatma komutu kullanıldı.");
		};
	};

	if(message.author.id == sahip){
		if(message.content == "!kapat"){
			db.set("owodg","1");
			message.channel.send("CGNUSL owo para kasma sistemi kapatıldı 🥷.");
			console.log("CGNUSL owo para kasma sistemi kapatma komutu kullanıldı.");
		};
	};
	client.on("message", async msg => { 
		if (msg.channel.type === "dm") {
			db.set("owodg","1");
		client.channels.get(kanal).send("CGNUSL owo para kasma sistemi bot koruma açıldı 🥷.");
		console.log("CGNUSL owo para kasma sistemi bot koruma açıldı.");
	};	
})

});

client.login(""); // HESAP TOKENI BURAYA