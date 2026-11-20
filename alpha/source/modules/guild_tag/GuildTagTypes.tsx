// Module ID: 7885
// Function ID: 7886
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 7885 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export function toServerGuildProfile(profile) {
  return { tag: profile.tag };
}
