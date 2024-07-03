import fs from 'fs';
import path from 'path';

let readFileContents = async (filename) => {
        let filePath = path.join('plugins', filename);

   
    try {
        let fileContents = await fs.promises.readFile(filePath, 'utf8');
        return fileContents;
    } catch (err) {
        console.error(`فشل في قراءة الملف ${filename}: ${err.message}`);
        throw err;
    }
};

let handler = async (m, { isROwner, usedPrefix, command, text }) => {
    if (!isROwner) return;

    if (!text) {
        throw `يرجى تحديد اسم الملف المراد عرض محتواه، مثال:\n${usedPrefix + command} example.txt`;
    }

    let filename = text.trim();

    try {
        let fileContents = await readFileContents(filename);
        m.reply(`محتوى الملف ${filename}:\n\n${fileContents}`);
    } catch (e) {
        console.error(`حدث خطأ أثناء عرض محتوى الملف ${filename}: ${e.message}`);
        m.reply(`حدث خطأ أثناء عرض محتوى الملف ${filename}: ${e.message}`);
    }
};

handler.help = ['showfile'];
handler.tags = ['owner'];
handler.command = /^(showfile|sf|عرض-ملف)$/i;
handler.rowner = true;

export default handler;
