// Module ID: 10395
// Function ID: 10396
// Name: guild_automod/ExperimentUtils
// Dependencies: [10396, 2]
// Exports: isInMentionRaidExperiment, useIsApplicationRuleEnabled, useIsMentionRaidExperimentEnabled

// Module 10395 (guild_automod/ExperimentUtils)
import AutomodExperiment from "AutomodExperiment" /* 10396 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(guildId, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.useExperiment({ guildId, location: "988d4e_4" }, { autoTrackExposure }).enabled;
};
export const useIsApplicationRuleEnabled = function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  return AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
};
