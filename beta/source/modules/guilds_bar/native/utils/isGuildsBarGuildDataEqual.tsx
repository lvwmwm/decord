// Module ID: 16679
// Function ID: 16680
// Name: isGuildsBarGuildDataEqual
// Dependencies: [2]
// Exports: default

// Module 16679 (isGuildsBarGuildDataEqual)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};
