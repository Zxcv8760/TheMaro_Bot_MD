let handler = async (m, { conn, command, text }) => {
let videoUrl = 'https://telegra.ph/file/84d3d1282e59501fde522.mp4'
await conn.sendMessage(m.chat, { react: { text: '🔞', key: m.key } })
let love = `
*⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*

𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑻𝑶 𝑴𝑽𝑹𝑶_𝑩𝑶𝑻🙈

𝑩𝒀 𝑴𝑽𝑹𝑶-𝑨𝑳𝑴𝑹𝑱𝑨𝑾𝒀

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*⌬〘 مرحبا بك في بوت مارو 〙⌬*

*⌬〘 اليك قائمه السكس البوت 〙⌬*

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*≼🔞≽ ⇇╎  /باك*
*≼🔞≽ ⇇╎  /باك2*
*≼🔞≽ ⇇╎  /باك3*
*≼🔞≽ ⇇╎  /فيديوxxx*
*≼🔞≽ ⇇╎  /فيديوليزبيان*
*≼🔞≽ ⇇╎  /فيديوليزبيان2*
*≼🔞≽ ⇇╎  /بورنو-ليزبيان-فيديو*
*≼🔞≽ ⇇╎  /بورنو-ليزبيان-فيديو2*
*≼🔞≽ ⇇╎  /بورنو-ليزبيان-فيديو3*
*≼🔞≽ ⇇╎  /بورنو-ليزبيان-فيديو4*
*≼🔞≽ ⇇╎  /بورنو-ليزبيان-فيديو5*

*⎔⋅• ┗╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┛ •⋅⎔*
 `.trim()
conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: love,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م.سكس)$/i
export default handler
