// Module ID: 8440
// Function ID: 67351
// Name: toServerGuildProfile
// Dependencies: []
// Exports: toServerGuildProfile

// Module 8440 (toServerGuildProfile)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
