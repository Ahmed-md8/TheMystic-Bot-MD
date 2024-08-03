import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

  const interactiveMessage = {
    body: { text: `*—◉ Resultados obtenidos:* ${results.videos.length}\n*—◉ Video aleatorio:*\n*-› Title:* ${randomVideo.title}\n*-› Author:* ${randomVideo.author.name}\n*-› Views:* ${randomVideo.views}\n*-› ${traductor.texto2[0]}:* ${randomVideo.url}\n*-› Imagen:* ${randomVideo.thumbnail}`.trim() },
    footer: { text: `${global.wm}`.trim() },  
      header: {
          title: `*< YouTube Search />*\n`,
          hasMediaAttachment: true,
          imageMessage: messa.imageMessage,
      },
    nativeFlowMessage: {
      buttons: [
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'اختار',
              title: video.title,
              rows: [
                {
                  header: video.title,
                  title: video.author.name,
                  description: 'صوت',
                },
                {
                  header: video.title,
                  title: video.author.name,
                  description: 'فديو',
                }
              ]
            }))
          })
        }
      ],
      messageParamsJson: ''
    }
  };

handler.help = ['main']
handler.tags = ['info']
handler.command =/^الازرار$/i

export default handler
