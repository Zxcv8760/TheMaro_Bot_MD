let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*『 ${pickRandom(global.kt)} 』*`, m)
}
handler.help = ['bzmzjdks']
handler.tags = ['fun']
handler.command = /كت/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.kt = [ 
 '  جيرايا ',
 '  ناروتو  ',
'  تسونادي  ',
'  اينيوشا  ',
'  فاي ',
 '  ساتاشي ', 
'  امورو ',
 '  موكومو ',
 '  شيبوسا ',
 '  سورا ',
 '  ارين ',
 ' ايدوارد ',
'  ناروتو ',
  ' ارمين ',
    ' ناروتو ',
      ' باكيرا ',
' باسكال ',
  ' ايزوكو ',
    ' بيجيتا ',
      ' بيكولا ',
        ' بيكو ',
       ' بولما ',
' ترانكس ',
' جوزيف ',
 ' راينر',
 ' زيف',
  ' زاماسو ',
 ' سوزاكو',
 ' غيندو',
 ' جارو',
' فيتان',
' كرولو',
' غون',
' فريكس',
  ' فانكوك ',
    ' موزان', 
      ' ميرلين ', 
        ' موجين',
          ' كوتا',
            ' كايتو',
              ' هيسوكا',
                ' كيلوا',
                  ' رينغوكو',
   ' تانجيرو',
     ' نيزوكو',
       ' زينيتسو',
         ' ارمين',
           ' اينوسكي',
             ' يوجي',
               ' ايتادوري',
                 ' نوبارا',
                   ' كاغورا',
                     ' هيناتا',
                       ' جورا',
                         ' جوتارو',
                           ' آني',
                             ' ساكوراكو',
                               ' كوهاكو',
                                 ' سينكو',
                                   ' ميزوكي',
                                     ' هيوري',
                                       ' ميامورا',
                                         ' افيليو',
                                           ' انجيلو',
                                             ' ريمي',
                                               ' ايميليا',
                                                 ' فايوليت',
                                                   ' جينجر',
' ماكيما',
  ' ميدوريا',
    ' اوراراكا',
      ' شوتو',
        ' باكوغو',
          ' تودوروكي',
            ' اول مايت',
              ' اكيرا',
                ' هيرو',
                  ' كونان',
                    ' ران',
                      ' جين',
                        ' غراي',
                          ' جوفيا',
' ناتسو',
  ' يوميكو',
    ' روكيا',
      ' زاراكي',
        ' كيسكي',
          ' ايتشيغو',
            ' اوزوماكي',
              ' باين',
                ' كازيكاجي',
                  ' هوكاجي',
                  ' ايرين',
                  ' ليفاي',
                  ' ايروين',
                  ' زيك',
                  ' ارثر',
                  ' لولوش',
                  ' صوفيا',
                  ' برولي',
                  ' فيجيتا',
                  ' غوكو',
                  ' بلاك',
                  ' سانجي',
                  ' كانيتشي',
                  ' مايكي',
' تاكيميتشي',
                  ' شويو',
                  ' جوكر',
                  ' تاداشي',
                  ' هوتارو',
                  ' هوكورو',
                  ' كون',
                  ' كينتا',
                  ' راديتز',
                  ' شيينوبو ',
                  ' ايكا', 
                  ' ايما', 
                  ' نورمان',
                  ' كين',
                  ' سوسومو',
                  ' شيهارو',
                  ' نوري',
                  ' ميراجين',
                  ' ايرزا',
                  ' جيلال',
                  ' زيريف',
                  ' اكنولوجيا',
                  ' بيير',
                  ' سيبر',
                  ' هيدن',
                  ' بيل',
                  ' ترين',
                  ' ماسايوكا ',
                  ' يو',
                  ' ريزي',
                  ' كانيكي',
                  ' ساترو',
                  ' ايسا',
                  ' ناتسومي',
                  ' ليوناردو',
                  ' ريتسو',
                  ' اينا',
                  ' انيا',
                  ' سايتاما',
                  ' ساتان',
                  ' سوزو',
                  ' ويندي',
                  ' روميو',
                  ' فوميو',
                  ' استا',
                  ' نويل',
                  ' يامي ',
                  ' يونو',
                  ' فانجاس',
                  ' ويليام',
                  ' ناخت',
                  ' ليخت',
                  ' لاك',
                  ' ماغنا ',
                  ' غاتس',
                  ' موساشي',
                  ' هوكس',
                  ' شيغاراكي',
                  ' هانجي',
                  ' البيدو',
                  ' بينمارو',
                  ' ايشيكي',
                  ' كوما',
                  ' يور',
                  ' يورو',
                  ' تيا',
                  ' يوريتشي',
                  ' غيومي',
                  ' ميتسوري',
                  ' بيروس',
                  ' ويس',
                  ' زينو',
                  ' موب',
                  ' ديكو',
                  ' اوبا',
                  ' ميدوريا',
                  ' فيغابانك',
                  ' روب',
                  ' لوتشي',
                  ' دراكين',
                  ' هانما',
                  ' تشيفويو',
                  ' كيساكي',
                  ' ناوتو', 
                  ' تاكاشي',
                  ' ريوغاكي',
                  ' اكاشي',
                  ' اكاي ',
                  ' مايفيس',
                  ' كيكيو',
                  ' رينجي',
                  ' ايتشيمارو',
                  ' ايزن',
                  ' شادو',
                  ' اينوي',
                  ' اباري',
                  ' ايشيدا',
                  ' بياكويا',
                  ' توشيرو',
                  ' بازارد',
                  ' زاهارد',
                  ' لويد',
                  ' بيكاتشو',
                  ' ماتسودا',
                  ' تاكوجو',
                  ' اماري',
                  ' شينيتشي',
                  ' هايبارا',
                  ' مارلين ',
                  ' ايسكانور',
                  ' بان',
                  ' ايليزابيث',
                  ' ميليوداس',
                  ' زيلدريس',
                  ' ثورفين',
                  ' ثوركيل',
                  ' الفونس',
 ] 