// Module ID: 17568
// Function ID: 17569
// Name: guild_automod/ExperimentUtils
// Dependencies: [17569, 2]
// Exports: useIsApplicationRuleEnabled

// Module 17568 (guild_automod/ExperimentUtils)
import AutomodExperiment from "AutomodExperiment" /* 17569 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const useIsApplicationRuleEnabled = function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  return AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
};
