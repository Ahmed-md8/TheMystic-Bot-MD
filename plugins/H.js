let handler = async (m, { conn, args, usedPrefix, command }) => {
   conn.relayMessage(m.chat, {
     viewOnceMessage: {
        message: {
          interactiveMessage: {
            title: '*𝐸𝐿𝐴𝐾𝑅𝐴𝐵 𝐸𝐿𝑌𝛩𝑇𝑈𝐵𝐸𝑅*',
            description: '*مرحبا بكم في بوت العقرب اليوتيوبر تحياتي لكم جميعا اليكم قائمة الاوامر اضغط بالاسفل 🐍✨*',
            button: [
              {
                buttonText: 'اضغط هنا',
                sections: [
                  {
                    title: 'اوامر',
                    rows: [
                      {
                        title: '📜 قـسـم الـنـظـام 📜',
                        description: 'يعرض لك الاوامر 🐍✨',
                        rowId: '.اوامر'
                      },
                      {
                        title: '📜 قـسـم الـمـطـور',
                        description: '',
                        rowId: '.المطور'
                      },
                      {
                        title: 'سوال',
                        description: '',
                        rowId: '.سوال'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    }, {})
}

handler.help = ['main']
handler.tags = ['info']
handler.command =/^الازرار$/i

export default handler
