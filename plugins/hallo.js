let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *ADA APA* ${htka}

        YT FANGZ BOT
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Chat', url: 'https://wa.me/6282135905896'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(woi|hallo|p)$/i
handler.command = new RegExp

export default handler