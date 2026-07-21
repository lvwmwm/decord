// Module ID: 10228
// Function ID: 79043
// Name: isInMentionRaidExperiment
// Dependencies: []
// Exports: isInMentionRaidExperiment, useIsMentionRaidExperimentEnabled

// Module 10228 (isInMentionRaidExperiment)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = require(dependencyMap[0]).AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const AutomodMentionRaidLimit = require(dependencyMap[0]).AutomodMentionRaidLimit;
  let obj = { guildId: id, location: "988d4e_4" };
  obj = { autoTrackExposure: flag };
  return AutomodMentionRaidLimit.useExperiment(obj, obj).enabled;
};
