const TelegramBot = require('node-telegram-bot-api');

const token = '1875410677:AAGh5Xi5-xJmaYOduOYqECvkBZr58y8WiFc';

const bot = new TelegramBot(token, {polling: true});

const replici = [
    'La caterincă, ăăă?',
    'Ce, ai draci pe tine de arăți cu degetul ăla ăăă?',
    'hahaha, băi băiatule băi, sub orice critică',
    'Ce faceți băi, băi nebunilor',
    'ia sanki, da, așa, la mișto',
    'ce faceți băăăi, băăi capușilor, ah ăă?',
    'bine, astea sunt șuste, nu? berșuste',
    'ce draci aveți pe voi, sanki, ăăăh?',
    'putem să băgăm așa? mujdeiul asta așa, un pic, la mișto? să întindem ? ăăăh ? din colțișorul asta care te iubește soacra sau socrul, nu?',
    'heeei, ce draci ai pe tine, băi băiatule băi',
    'vă place la balamuc? ăăăh?',
    
]

const getRandom = (size) => {
    return Math.floor(Math.random() * size);
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.first_name;
    bot.sendMessage(chatId, replici[getRandom(replici.length)]);
})