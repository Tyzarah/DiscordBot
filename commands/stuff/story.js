const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('story')
		.setDescription('the frog tells a story'),
	async execute(interaction) {
		await interaction.reply('One day I was sad, then I bought chicken nuggies and that made me very happy');
	},
};