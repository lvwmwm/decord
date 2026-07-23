// Module ID: 14858
// Function ID: 113334
// Name: isGuildsBarGuildDataEqual
// Dependencies: [2]
// Exports: default

// Module 14858 (isGuildsBarGuildDataEqual)
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
