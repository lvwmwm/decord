// Module ID: 15688
// Function ID: 15689
// Name: isGuildsBarGuildDataEqual
// Dependencies: [2]
// Exports: default

// Module 15688 (isGuildsBarGuildDataEqual)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
