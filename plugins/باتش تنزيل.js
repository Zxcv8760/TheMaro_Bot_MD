import axios from 'axios';
import fs from 'fs';
import path from 'path';

let downloadFile = async (url, filename) => {
    let filePath = path.join('downloads', filename);

    const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
    });

    // إنشاء دستريم لكتابة البيانات إلى الملف المحلي
    const writer = fs.createWriteStream(filePath);

    // كتابة البيانات المستلمة من الطلب إلى الملف المحلي
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

let handler = async (m, { isROwner, usedPrefix, command, args }) => {
    await m.reply(global.wait);
    if (!isROwner) return;

    if (args.length < 2) {
        throw `يرجى تحديد رابط الملف واسم الملف المراد تحميله، مثال:\n${usedPrefix + command} https://example.com/file.zip example.zip`;
    }

    let url = args[0];
    let filename = args[1];

    try {
        await downloadFile(url, filename);
        m.reply(`تم تحميل الملف ${filename} بنجاح.`);
    } catch (e) {
        console.error(`حدث خطأ أثناء تحميل الملف ${filename}: ${e.message}`);
        m.reply(`حدث خطأ أثناء تحميل الملف ${filename}: ${e.message}`);
    }
};

handler.help = ['downloadfile'];
handler.tags = ['owner'];
handler.command = /^(downloadfile|df|تحميل-ملف)$/i;
handler.rowner = true;

export default handler;
