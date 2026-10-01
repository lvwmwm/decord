// Module ID: 9559
// Function ID: 9560
// Name: guild_automod/ExperimentUtils
// Dependencies: [9560, 2]
// Exports: isInMentionRaidExperiment, useIsApplicationRuleEnabled, useIsMentionRaidExperimentEnabled

// Module 9559 (guild_automod/ExperimentUtils)
import AutomodExperiment from "AutomodExperiment" /* 9560 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  const obj = { guildId, location: "988d4e_3" };
  return AutomodMentionRaidLimit.getCurrentConfig(obj).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(guildId, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  const obj = { guildId, location: "988d4e_4" };
  return AutomodMentionRaidLimit.useExperiment(obj, { autoTrackExposure }).enabled;
};
export const useIsApplicationRuleEnabled = function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  const obj = { guildId, location: "automod_settings" };
  return AutomodApplicationRules.useConfig(obj).enabled;
};
