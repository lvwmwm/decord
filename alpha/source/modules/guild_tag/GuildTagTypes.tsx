// Module ID: 8348
// Function ID: 8349
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 8348 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export function toServerGuildProfile(profile) {
  return { tag: profile.tag };
}
