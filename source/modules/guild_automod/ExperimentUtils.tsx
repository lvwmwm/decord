// Module ID: 10241
// Function ID: 79128
// Name: isInMentionRaidExperiment
// Dependencies: [10242, 2]
// Exports: isInMentionRaidExperiment, useIsMentionRaidExperimentEnabled

// Module 10241 (isInMentionRaidExperiment)
const result = require("set").fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = require(10242) /* items */.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const AutomodMentionRaidLimit = require(10242) /* items */.AutomodMentionRaidLimit;
  let obj = { guildId: id, location: "988d4e_4" };
  obj = { autoTrackExposure: flag };
  return AutomodMentionRaidLimit.useExperiment(obj, obj).enabled;
};
