// Module ID: 15524
// Function ID: 15525
// Name: isGuildsBarGuildDataEqual
// Dependencies: [2]
// Exports: default

// Module 15524 (isGuildsBarGuildDataEqual)
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
