let handler = async (m, { conn, command, text }) => {
let love = `
**⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*

𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑻𝑶 𝑴𝑽𝑹𝑶_𝑩𝑶𝑻🙈

𝑩𝒀 𝑴𝑽𝑹𝑶-𝑨𝑳𝑴𝑹𝑱𝑨𝑾𝒀

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*⌬〘 مرحبا بك في بوت مارو 〙⌬*

*⌬〘 اليك قائمه التسليه البوت 〙⌬*

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*≼🎮≽ ⇇╎  /اسال*
*≼🎮≽ ⇇╎  /اكس*
*≼🎮≽ ⇇╎  /حذفف*
*≼🎮≽ ⇇╎  /بنك*
*≼🎮≽ ⇇╎  /حروف*
*≼🎮≽ ⇇╎  /زواج*
*≼🎮≽ ⇇╎  /طلاق*
*≼🎮≽ ⇇╎  /ذكاء*
*≼🎮≽ ⇇╎  /غباء*
*≼🎮≽ ⇇╎  /جمال*
*≼🎮≽ ⇇╎  /ارسم*
*≼🎮≽ ⇇╎  /تحدي*
*≼🎮≽ ⇇╎  /خروف*
*≼🎮≽ ⇇╎  /صراحه*
*≼🎮≽ ⇇╎  /خيروك*
*≼🎮≽ ⇇╎  /هل*
*≼🎮≽ ⇇╎  /ورع*
*≼🎮≽ ⇇╎  /هديه*
*≼🎮≽ ⇇╎  /صداقه*
*≼🎮≽ ⇇╎  /شاذ*
*≼🎮≽ ⇇╎  /الحب*
*≼🎮≽ ⇇╎  /شخصيه*
*≼🎮≽ ⇇╎  /توب*
*≼🎮≽ ⇇╎  /بوستات*
*≼🎮≽ ⇇╎  /بنت*
*≼🎮≽ ⇇╎  /كت*
*≼🎮≽ ⇇╎  /كتت*
*≼🎮≽ ⇇╎  /بلاك-بينك*
*≼🎮≽ ⇇╎  /لولي*
*≼🎮≽ ⇇╎  /الدون*
*≼🎮≽ ⇇╎  /ميسي*
*≼🎮≽ ⇇╎  /لولي-فيديو*
*≼🎮≽ ⇇╎  /كيوت*
*≼🎮≽ ⇇╎  /قطه*
*≼🎮≽ ⇇╎  /كلب*
*≼🎮≽ ⇇╎  /عيد*

*⎔⋅• ┗╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┛ •⋅⎔*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م8|م٨)$/i
export default handler
