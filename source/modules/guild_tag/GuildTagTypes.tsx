// Module ID: 9675
// Function ID: 9676
// Name: toServerGuildProfile
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 9675 (toServerGuildProfile)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
