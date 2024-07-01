𝑩𝒀 𝑷𝑨𝑷𝑳𝑶 𝑩𝑳𝑨𝑪𝑲😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
} else(/|شرس$/i.test(m.text)) { 
     responses = [ 
       'لُاَ تِـحٌـاَؤلُ اَلُاَقِـتِـرِاَبِ ، هُـشِـخِـرِلُـڪٰك',  
     ]; 
 }else if (/^زاك من عمك|زاك عمك$/i.test(m.text)) { 
     responses = [ 
'*بابلو اككيد😩❤‍🔥*'
     ]; 
   }else if (/^زاك مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ولا أريد الارتباط🏌🏻‍♂💔*'
   ]; 
   }else if (/^زاك تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^تكرهني$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بيض/i.test(m.text)) { 
     responses = [ 
       '*زيك يحب*',  
     ]; 
   }else if (/^منين يبوتي$/i.test(m.text)) { 
     responses = [ 
'❤🇪🇬مصر'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
  'ثانيه اوف اح🐸',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الجمال يعرص',  

     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^طرد$/i.test(m.text)) { 
     responses = [ 
       'هتوحشني',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;