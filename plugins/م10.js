let handler = async (m, { conn, command, text }) => {
let videoUrl = 'https://telegra.ph/file/84d3d1282e59501fde522.mp4'
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
let love = `
*⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*

𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑻𝑶 𝑴𝑽𝑹𝑶_𝑩𝑶𝑻🙈

𝑩𝒀 𝑴𝑽𝑹𝑶-𝑨𝑳𝑴𝑹𝑱𝑨𝑾𝒀

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*⌬〘 مرحبا بك في بوت مارو 〙⌬*

*⌬〘 اليك قائمه بالانجليزي البوت 〙⌬*

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*≼❗≽ ⇇╎  /hd*
*≼❗≽ ⇇╎  /song*
*≼❗≽ ⇇╎  /sfull*
*≼❗≽ ⇇╎  /Instagramdl*
*≼❗≽ ⇇╎  /logo*
*≼❗≽ ⇇╎  /kick*
*≼❗≽ ⇇╎  /antilink*

*⎔⋅• ┗╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┛ •⋅⎔*
 `.trim()
conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: love,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م١٠|م10)$/i
export default handler
