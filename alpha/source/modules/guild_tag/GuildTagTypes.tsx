// Module ID: 8863
// Function ID: 8864
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 8863 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
