// Module ID: 9863
// Function ID: 9864
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 9863 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
