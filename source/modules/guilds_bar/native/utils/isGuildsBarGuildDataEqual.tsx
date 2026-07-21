// Module ID: 14731
// Function ID: 111089
// Name: isGuildsBarGuildDataEqual
// Dependencies: [284214097]
// Exports: default

// Module 14731 (isGuildsBarGuildDataEqual)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
