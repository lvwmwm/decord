// Module ID: 10262
// Function ID: 10263
// Name: isInMentionRaidExperiment
// Dependencies: [10263, 2]
// Exports: isInMentionRaidExperiment, useIsMentionRaidExperimentEnabled

// Module 10262 (isInMentionRaidExperiment)
const result = require("set").fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = require(10263) /* experiment */.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(id, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const AutomodMentionRaidLimit = require(10263) /* experiment */.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.useExperiment({ guildId: id, location: "988d4e_4" }, { autoTrackExposure }).enabled;
};
