//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, areJidsSameUser, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝑬𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔 :D`, m) 
m.reply(`ℝ𝔼𝕍𝕀𝕊𝕀𝕆ℕ 𝔻𝔼 𝕀ℕ𝔸ℂ𝕋𝕀𝕍𝕆𝕊\n\n𝐆𝐫𝐮𝐩𝐨: ${await conn.getName(m.chat)}\n*𝐌𝐢𝐞𝐦𝐛𝐫𝐨𝐬:* ${sum}\n\n*[ 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝙎𝙚𝙖𝙣 𝙢𝙖𝙨 𝙖𝙘𝙩𝙞𝙫𝙤𝙨 𝙥𝙖𝙧𝙖 𝙣𝙤 𝙨𝙚𝙧 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨*`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
        if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝑬𝒍 𝒈𝒓𝒖𝒑𝒐 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔 :D`, m) 
       await m.reply(`𝐄𝐥𝐢𝐦𝐢𝐧𝐚𝐜𝐢𝐨𝐧 𝐝𝐞 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨𝐬\n\n𝐆𝐫𝐮𝐩𝐨: ${await conn.getName(m.chat)}\n𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐞: ${sum}\n\n[ 𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚 𝐄𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨 𝐱𝐝 ]\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*𝐴 𝑝𝑎𝑟𝑡𝑖𝑟 𝑑𝑒 𝑒𝑠𝑡𝑒 𝑚𝑜𝑚𝑒𝑛𝑡𝑜 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟𝑒́ 𝑙𝑎 𝑙𝑖𝑠𝑡𝑎 𝑚𝑒𝑛𝑐𝑖𝑜𝑛𝑎𝑓𝑎, 𝐶𝑜𝑚𝑒𝑛𝑧𝑎𝑛𝑑𝑜 𝑒𝑛 20 𝑠𝑒𝑔𝑢𝑛𝑑𝑜𝑠, 𝑦 𝑐𝑎𝑑𝑎 10 𝑠𝑒𝑔𝑢𝑛𝑑𝑜𝑠 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟𝑒 𝑎 𝑢𝑛 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑒*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
        chat.welcome = true
       }
break            
}}
handler.command = /^(fantasmas|kickfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/


