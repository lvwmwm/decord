// Module ID: 19957
// Function ID: 19958
// Name: guild_automod/ExperimentUtils
// Dependencies: [19958, 7014, 2]
// Exports: useIsApplicationRuleEnabled

// Module 19957 (guild_automod/ExperimentUtils)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 7014 */;
import AutomodExperiment from "AutomodExperiment" /* 19958 */;
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
