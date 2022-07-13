const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('5555711433:AAG0MdueDwzzv0ZwQNUUPq97OIuCMj8oJds');

bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name} ${ctx.message.from.last_name}
This is the official bot of the SleeFi project. 
Here you can find out everything about the project.
`,      Markup.keyboard([
            ['info', 'offical-link'],
            ['roadmap', 'sneak-peek'],
            ['team']
        ])
        .resize()
    )
);

bot.hears('info', (ctx) => ctx.reply(`
Info

SleeFi is an Sleep2Earn project.
Token: $SLGT
`));

bot.hears('team', (ctx) => ctx.reply(`
Megumi Hayashida
Founder
https://twitter.com/Megumi_sleefi

Derek Cao
Token Manager

Karen Darwish
Product Manager

Bokota Schröder
Community Manager

George McKinley
Advisor
`));

bot.hears('offical-link', (ctx) => ctx.reply(`
Offical link

Website: https://sleefi.com/en/

White Paper: https://sleefi.gitbook.io/whitepaper/

Medium: https://medium.com/@SleeFi

Telegram(announcement): https://t.me/+JoUIhyiTgflkYjA1

Telegram(discussion): https://t.me/sleefi_official_discussion

Reddit: https://www.reddit.com/r/SleeFi/

Twitter: https://twitter.com/SleeFi_official

Discord: ...
`));

bot.hears('roadmap', (ctx) => ctx.reply(`
Roadmap

• Phase 0 - Team creation; Official website design; Community development launch
• Phase 1 - Marketing Campaign; Community Creation; Mint NFT genesis; Issue of $SLFT token; Whitelisting; Community Events; Launch of Open Beta testing
• Phase 2 - IDO of the Management Token; Improvement of the algorithm of the sleep app; Measurement of sleep using wearable devices (Apple Watch, etc.); Release of new NFTs; CEX listings; Strategic partnerships with companies
• Phase 3 - Implementation of the trophy and quest system; Implementation of the rental system; DAO Management; Multi-network modernization
`));

bot.hears('sneak-peek', (ctx) => ctx.reply(`
Sneak-peek


`));




bot.on('sticker', (ctx) => ctx.reply('👍🏼'));

bot.hears('hi', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('Hi', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('hello', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('Hello', (ctx) => ctx.reply(`🤚🏼`));

bot.hears('How are you?', (ctx) => ctx.reply(`I'm fine😁`));
bot.hears('how are you?', (ctx) => ctx.reply(`I'm fine😁`));

bot.hears('Thank', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('thank', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('Thanks', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('thanks', (ctx) => ctx.reply(`You are very welcome😌`));

bot.hears('Goodbye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('goodbye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('Bye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('bye', (ctx) => ctx.reply(`👋🏼`));

bot.launch();
