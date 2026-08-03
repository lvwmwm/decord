// Module ID: 8621
// Function ID: 8622
// Name: toServerGuildProfile
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 8621 (toServerGuildProfile)
const result = require("set").fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
