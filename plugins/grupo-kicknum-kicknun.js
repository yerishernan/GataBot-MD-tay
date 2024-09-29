/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`${lenguajeGB['smsAvisoMG']()}${mid.smsMalused7} ${usedPrefix + command} 593*`) 
if (isNaN(args[0])) return m.reply(`${lenguajeGB['smsAvisoMG']()}${mid.smsMalused7} ${usedPrefix + command} 593*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`${lenguajeGB['smsAvisoAG']()}𝑁𝑜 𝑠𝑒 𝑒𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑎 𝑛𝑖𝑛𝑔𝑢𝑛 𝑛𝑢𝑚𝑒𝑟𝑜 𝑐𝑜𝑛 𝑒𝑠𝑒 𝑝𝑟𝑒𝑓𝑖𝑗𝑜 +${lol}*`)
let numeros = ps.map(v=> '➥ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `𝐴𝑞𝑢𝑖 𝑡𝑖𝑒𝑛𝑒 𝑙𝑎 𝑙𝑖𝑠𝑡𝑎 𝑑𝑒 𝑛𝑢𝑚𝑒𝑟𝑜𝑠 𝑐𝑜𝑛 𝑒𝑙 𝑝𝑟𝑒𝑓𝑖𝑗𝑜 +${lol} 𝑞𝑢𝑒 𝑠𝑒 𝑒𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑎𝑛 𝑒𝑛 𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsSoloOwner']()}`) 
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsAllAdmin']()}`)          
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}𝑰𝒏𝒊𝒄𝒊𝒂𝒏𝒅𝒐 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒄𝒊𝒐𝒏 𝒅𝒆 𝒏𝒖𝒎𝒆𝒓𝒐𝒔 𝒒𝒖𝒆 𝒄𝒐𝒏𝒕𝒆𝒏𝒈𝒂𝒏 𝒆𝒍 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒑𝒓𝒆𝒇𝒊𝒋𝒐 +${lol}, 𝒄𝒂𝒅𝒂 10 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓𝒆 𝒂 𝒖𝒏 𝒖𝒔𝒖𝒂𝒓𝒊𝒐`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} 𝒀𝒂 𝒔𝒆 𝒉𝒂 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐 𝒐 𝒏𝒐 𝒔𝒆 𝒉𝒂 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒅𝒐 𝒆𝒔𝒆 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 :v`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply(`${lenguajeGB['smsAvisoFG']()}`)}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
