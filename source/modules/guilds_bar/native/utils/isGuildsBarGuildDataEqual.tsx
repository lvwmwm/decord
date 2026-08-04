// Module ID: 15325
// Function ID: 15326
// Name: isGuildsBarGuildDataEqual
// Dependencies: [2]
// Exports: default

// Module 15325 (isGuildsBarGuildDataEqual)
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
