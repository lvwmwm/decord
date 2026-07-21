// Module ID: 8439
// Function ID: 67339
// Name: toServerGuildProfile
// Dependencies: []
// Exports: toServerGuildProfile

// Module 8439 (toServerGuildProfile)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
