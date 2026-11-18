// Module ID: 7916
// Function ID: 7917
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 7916 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export function toServerGuildProfile(profile) {
  return { tag: profile.tag };
}
