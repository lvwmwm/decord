// Module ID: 8918
// Function ID: 8919
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 8918 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
