// Module ID: 8645
// Function ID: 8646
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 8645 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
