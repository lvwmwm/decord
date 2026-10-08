// Module ID: 18013
// Function ID: 18014
// Name: guild_automod/ExperimentUtils
// Dependencies: [558, 576, 18014, 6934, 2]

// Module 18013 (guild_automod/ExperimentUtils)
import react from "react" /* 576 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6934 */;
import AutomodExperiment from "AutomodExperiment" /* 18014 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsApplicationRuleEnabled(guildId) {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] !== guildId) {
    const obj2 = { guildId, location: "automod_settings" };
    cResult[0] = guildId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const AutomodApplicationRules = tmp(18014).AutomodApplicationRules;
  let enabled = AutomodApplicationRules.useConfig(tmp4).enabled;
  if (cResult[2] !== guildId) {
    const obj3 = { guildId, location: "automod_settings" };
    cResult[2] = guildId;
    cResult[3] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[3];
  }
  const tmpResult = ConjureGuildExperiment;
  if (!enabled) {
    enabled = tmpResult.useIsConjureGuildEnabled(tmp5);
  }
  return enabled;
}) : (function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  const obj = { guildId, location: "automod_settings" };
  let enabled = AutomodApplicationRules.useConfig(obj).enabled;
  const obj2 = ConjureGuildExperiment;
  const obj3 = { guildId, location: "automod_settings" };
  if (!enabled) {
    enabled = obj2.useIsConjureGuildEnabled(obj3);
  }
  return enabled;
});
const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const useIsApplicationRuleEnabled = tmp2;
