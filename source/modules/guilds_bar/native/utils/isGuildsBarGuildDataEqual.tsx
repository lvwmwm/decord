// Module ID: 15542
// Function ID: 15543
// Name: isGuildsBarGuildDataEqual
// Dependencies: [2]
// Exports: default

// Module 15542 (isGuildsBarGuildDataEqual)
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
