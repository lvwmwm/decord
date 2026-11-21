// Module ID: 19720
// Function ID: 19721
// Name: guild_automod/ExperimentUtils
// Dependencies: [19721, 6657, 2]
// Exports: useIsApplicationRuleEnabled

// Module 19720 (guild_automod/ExperimentUtils)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6657 */;
import AutomodExperiment from "AutomodExperiment" /* 19721 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  const obj = { guildId, location: "automod_settings" };
  let enabled = AutomodApplicationRules.useConfig(obj).enabled;
  const obj2 = ConjureGuildExperiment;
  const obj3 = { guildId, location: "automod_settings" };
  if (!enabled) {
    enabled = obj2.useIsConjureGuildEnabled(obj3);
  }
  return enabled;
}
