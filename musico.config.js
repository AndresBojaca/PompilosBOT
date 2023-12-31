/**
 * @typedef {Object} Config
 * @property {string} [botId] => Your's bot's client id
 * @property {string} [botToken] => The bot's token
 * @property {string} [ownerId] => The bot's owner's / developer's id
 * @note you can add other properties to this object by yourself and access them in your code using `client.config.<your-property>`
 */
const config = {
	botId: "1033132156375011429",
	botToken: process.env.token,
	ownerId: "705148967146750024",
};
module.exports = config;
