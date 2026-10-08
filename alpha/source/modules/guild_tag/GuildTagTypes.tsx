// Module ID: 8621
// Function ID: 8622
// Name: GuildTagTypes
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 8621 (GuildTagTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
