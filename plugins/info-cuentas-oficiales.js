let media = 'https://qu.ax/NqZN.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `𝐕𝐚𝐜𝐢𝐨
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
**\n
**`
await conn.sendButton(m.chat, str, wm, media, [
['', '.grupos'],
['𝐎𝐰𝐧𝐞𝐫', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́', '/menu']], null, [
['𝐊𝐚𝐫-𝐁𝐨𝐭', md]], fkontak)}
//conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝐊𝐚𝐫-𝐁𝐨𝐭', null, null, [
['', '.grupos'],
['𝐎𝐰𝐧𝐞𝐫', '#owner'],
['𝐌𝐞𝐧𝐮́', '/menu']
], m,)}*/
handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
