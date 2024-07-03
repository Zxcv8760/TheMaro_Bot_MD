import fs from 'fs';
import path from 'path';

// دالة لقراءة آخر الأخطاء من ملف السجل
let getErrorLogs = async () => {
    let logFilePath = path.join('logs', 'error.log');

    try {
        // التحقق من وجود ملف السجل
        await fs.promises.access(logFilePath, fs.constants.F_OK);

        // قراءة محتوى ملف السجل
        let logData = await fs.promises.readFile(logFilePath, 'utf8');
        return logData.split('\n').slice(-10).join('\n'); // قراءة آخر 10 سطور فقط
    } catch (err) {
        throw new Error(`فشل في قراءة ملف السجل: ${err.message}`);
    }
};

let handler = async (m, { isROwner, usedPrefix, command, text }) => {
    await m.reply(global.wait);
    if (!isROwner) return;

    try {
        let errorLogs = await getErrorLogs();
        m.reply(`آخر الأخطاء:\n\n${errorLogs}`);
    } catch (e) {
        console.error(`حدث خطأ أثناء عرض الأخطاء: ${e.message}`);
        m.reply(`حدث خطأ أثناء عرض الأخطاء: ${e.message}`);
    }
};

handler.help = ['errorlogs'];
handler.tags = ['owner'];
handler.command = /^(errorlogs|el|باتش-ايرور)$/i;
handler.rowner = true;

export default handler;
