const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('frogbot')
		.setDescription('frog does something'),
	async execute(interaction) {
		await interaction.reply(`<@${interaction.user.id}> wat moet je?`);
	},
};
