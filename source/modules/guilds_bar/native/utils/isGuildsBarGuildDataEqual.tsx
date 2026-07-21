// Module ID: 14734
// Function ID: 111123
// Name: isGuildsBarGuildDataEqual
// Dependencies: []
// Exports: default

// Module 14734 (isGuildsBarGuildDataEqual)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
