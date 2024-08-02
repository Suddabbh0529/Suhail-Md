const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_09_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklRWm85SXQ0emIyanFkQUxvTkRtVlRPWERyNk5WdWFqWmxITHYyMFdOSVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDYzMTUyNTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVFREIwODdGMzBCMzdFMTREOEIyQzQ2MTg0NEE2OEEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyMjE2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUMzhPbWIzWVNhZUg4c0ItbW5PWDRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkwZWE5YjBhLWRkZWItNDcxNi1hNjI1LTU0NTc2ZmI0ZTkxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAxNzQsXG4gICAgICAyOCxcbiAgICAgIDIzNSxcbiAgICAgIDkxLFxuICAgICAgMTkxLFxuICAgICAgMjUsXG4gICAgICA2MyxcbiAgICAgIDI1LFxuICAgICAgODcsXG4gICAgICA5NyxcbiAgICAgIDExNixcbiAgICAgIDEwOSxcbiAgICAgIDIzNixcbiAgICAgIDE5NixcbiAgICAgIDkyLFxuICAgICAgMjIsXG4gICAgICA5OCxcbiAgICAgIDE4NSxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDY3LFxuICAgICAgNzQsXG4gICAgICAyNCxcbiAgICAgIDI0OSxcbiAgICAgIDEyNixcbiAgICAgIDIwLFxuICAgICAgMCxcbiAgICAgIDE3MSxcbiAgICAgIDE2MixcbiAgICAgIDIzNSxcbiAgICAgIDE1MSxcbiAgICAgIDIzNyxcbiAgICAgIDEwMyxcbiAgICAgIDIwNSxcbiAgICAgIDY2LFxuICAgICAgMTgzLFxuICAgICAgNCxcbiAgICAgIDE2NyxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxUN0ZNS1BFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNjMxNTI1MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDUxNzk4MjMyNzIwOTc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbXh1NU1GRU12QnRMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZQVkpQTGVwRjM0RzNWcWR0ckFGdzRsK29UZ2ZrUXJ3WFI1REtEY3g0Qkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaWVtdzB2VHRQMlNpYmFaRFdqaHZicUgxMGtpb0wraUs1WmxXU1RZanJYcllkbEl4ZXlCbE5YdkVYVk9lZE1tY21nOGNUUkV6MzVwRU4wL21pTnRHQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYVUza2lWd1lxSytRNTVPOE9kZG9EbVlMaVgrWVhjeHJ1V3lPZ2NqN3MvZ3lrVGlCdFdkWWZCUi9yZVZkNVQ1dWRua2t2eGw3bU1Ic0tiSWtjMlJtQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDYzMTUyNTI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjIyMTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVNEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFU0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvKzZuQW16VHhqcFlzZjV1VUtwa216cnBmQUxRa1pvbGNSUUZkT0pPNTFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODI5OTYxNTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjYyMDM5NjQ4MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
