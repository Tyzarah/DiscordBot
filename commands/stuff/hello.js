const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hoi')
		.setDescription('frog says hello'),
	async execute(interaction) {
		await interaction.reply(`Halloooooooooo <@${interaction.user.id}>`);
	},
};