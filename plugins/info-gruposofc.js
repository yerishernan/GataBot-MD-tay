let handler = async (m, { conn, command }) => {
let media = gataVidMenu
let str = `
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅  ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ **
🐈 *${canal1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${canal2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
🐈 *${canal3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 
*${soporteGB}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈
*${grupo1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 
*${grupo2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈
*${grupo3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈
*${grupo4}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 
*${grupo5}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ ** ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
🐈 
*${grupo_collab1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 
*${grupo_collab2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 
*${grupo_collab3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 
*${grupo_collab4}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*https://chat.whatsapp.com/*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
**\n
**`
await conn.sendButton(m.chat, str, `\n${asistencia}\n\n` + wm, media, [
['', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́', '/menu']], null, [
['𝐊𝐚𝐫-𝐁𝐨𝐭', `${md}`]], fkontak)}
/*conn.sendHydrated(m.chat, str, `\n${asistencia}\n\n` + wm, ', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
