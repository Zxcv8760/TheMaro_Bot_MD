let handler = async (m, { conn, command, text }) => {
let love = `
let videoUrl = 'https://telegra.ph/file/3782975aafc54e78e9d0c.mp4'
m.react('🔮')
*⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*

𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑻𝑶 𝑴𝑽𝑹𝑶_𝑩𝑶𝑻🙈

𝑩𝒀 𝑴𝑽𝑹𝑶-𝑨𝑳𝑴𝑹𝑱𝑨𝑾𝒀

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*⌬〘 مرحبا بك في بوت مارو 〙⌬*

*⌬〘 اليك قائمه الاعضاء البوت 〙⌬*

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*≼🗿≽ ⇇╎  /السورس*
*≼🗿≽ ⇇╎  /الخصوصيه*
*≼🗿≽ ⇇╎  /انطق*
*≼🗿≽ ⇇╎  /باركود*
*≼🗿≽ ⇇╎  /التوقيت*
*≼🗿≽ ⇇╎  /الاستماره*
*≼🗿≽ ⇇╎  /اختفاء*

*⎔⋅• ┗╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┛ •⋅⎔*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م١|م1|اوامر الاعضاء|الاوامر الاعضاء)$/i
export default handler
