let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender);
  let name = conn.getName(who);
  let mentionedUsername = `@${who.replace(/@.+/, '')}`; // اسم المستخدم المنشن

  let imgurl = 'https://telegra.ph/file/819f256bb20e0f2f5691b.jpg'; // رابط الصورة
  let filename = 'imgerror.jpg'; // اسم الملف

  // رسالة مع التعديل المطلوب
await conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })
  let msg = `*اهــلا ⌊ ${mentionedUsername} ⌉ انـا بـوت مـارو يـحـب • ،لـقـائـمـه الاوامـر اكـتـب﹙.اوامــر﹚*\n\n> *الـبـوت يـعـمـل فـي الـخـاص وفـي الـجـروبـات*\n\n*يـمـنـع شـتـم البـوت نـهـائـيـاً*\n\n*لانـك لـو شـتـمـت الـبـوت اكـنـك شـتـمـت الـمـطـور*`;

  conn.sendFile(m.chat, imgurl, filename, msg, m, false, { thumbnail: Buffer.alloc(0), mentions: [who] });
};

handler.customPrefix = /^(بوت|bot|)$/i;
handler.command = new RegExp;

export default handler;
