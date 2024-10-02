const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? ''Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdLNElLS2R3aCtPV1lXY1R6d1ZkV2ZaMnEzWWRTS2NxQitCNkRJT1FGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2EvSVp6RnBYSXE1bGdGNHhYaUxwMUpUbmxzN2FXeW9mbzhqamFkS1hHYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSEtNY2UzK0xPR1Jtek5CcWVNR1RYVURkVVREaEF1K0h5ckhhTll0d204PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsdTExLzVVS0tzR1RLbFpsYzBNSHo5ZW9vY1d5MDkxQTZpMmJ6WTdrUUJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDcjVGUlJuZ21mUi9VU2doeEYwYzJuMGxRZFozWDM2ZDhGdmpFaytDV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJraWgwWS9yQ3RFbEFxSHV3UDRHRlBIa2c5Rit5UklUdzh5UFk4UVppMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZVQWF1K2FoSHRwdTNqRUdTV090REk4clFmRXF5QkZYVXllZEJMYUhIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzk5Rys3cHAzbkRib2NNWUdtT29YV1V2Rml2aW5sRzRVZ2VGVTBJcCtRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE4REtnRHJ3a1ZpTFlNUWw3Nzd3ekRzU0JFbUxmTW04WUZEb1ZGS1NXdWZhSVRFUE1ZUHU2MWkwY2g0STZLbFIvM3RDUjMzYWdET256YmlibEw5ZUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJhNWM5dmZJdHlSVjRjKzMyL00xN1Z4aGY1MEgwZFRpQnhXRnRTYnFiZXlVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKdTBVclJya1NFbW4zZWJSLW1MVHpBIiwicGhvbmVJZCI6IjNkOTBhNDAxLTM4ZDEtNGE0OS1hMTBhLTU4YTIwZGRiY2FkNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMjJjeEdtbk1PaTVyK3dGR2g4bFZscGd4K0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEVkZW1mY0UxQ3VuM2VBeVJHaURxVmUxbHRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFIVFQxWVBOIiwibWUiOnsiaWQiOiI0NDc3ODk3NjYxNDY6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiwq7vuI/wn4W+77iP4pOC77iPw4gw77iP4oOjIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV3l0WnNDRUxDVjlMY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3bnVFQ2t4ZTM2UUpjcUhxQ3p1TTdjQlFqanVvcDdmVzh3bHhlb1FGdmk4PSIsImFjY291bnRTaWduYXR1cmUiOiIwQWNFUVkzRjBySTVpVXNKaU1pWFlCYUlVZzczYnp5V2ozZGgxREpsa0hnc2x5TnRzVG5kbHVYZGFsQ1JSRitqOVdtMzlxSUp0SkROOEhZb0YreTRCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlpRZGpjZFBiOXljbEJScko4VTRnbmpTZ0liQmQvZDgvMHZZdll5UFc3ODQ5TTlOckxiM0hsTG0zd3RLUnNlRVV3NEphb0MrdjBVcjhKOTZSUk5zQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0NDc3ODk3NjYxNDY6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0o3aEFwTVh0K2tDWEtoNmdzN2pPM0FVSTQ3cUtlMzF2TUpjWHFFQmI0diJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzg1OTM4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLMzMifQ== : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
