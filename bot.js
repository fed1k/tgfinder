const TelegramBot = require('node-telegram-bot-api');
const token = "7192572376:AAFb9AHh1ysKzuYIz-Pazf3xBhV4NpZyZ7w"
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const input = msg.text; // Get the user's message
  const formatted = input.replace(/[^+\d]/g, ""); // Format the input
  const response = "t.me/" + formatted; // Generate the t.me link

  bot.sendMessage(msg.chat.id, response); // Send the response back to the user
});
