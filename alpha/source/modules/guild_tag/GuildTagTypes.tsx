// Module ID: 9012
// Function ID: 9013
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 9012 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
