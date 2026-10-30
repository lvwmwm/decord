// Module ID: 9062
// Function ID: 9063
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 9062 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export function toServerGuildProfile(profile) {
  return { tag: profile.tag };
}
