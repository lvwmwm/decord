// Module ID: 17656
// Function ID: 17657
// Name: guild_automod/ExperimentUtils
// Dependencies: [558, 576, 17657, 6748, 2]

// Module 17656 (guild_automod/ExperimentUtils)
import react from "react" /* 576 */;
import VibegrationsGuildExperiment from "VibegrationsGuildExperiment" /* 6748 */;
import AutomodExperiment from "AutomodExperiment" /* 17657 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
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
  const AutomodApplicationRules = tmp(17657).AutomodApplicationRules;
  let enabled = AutomodApplicationRules.useConfig(tmp4).enabled;
  if (cResult[2] !== guildId) {
    const obj3 = { guildId, location: "automod_settings" };
    cResult[2] = guildId;
    cResult[3] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[3];
  }
  const tmpResult = VibegrationsGuildExperiment;
  if (!enabled) {
    enabled = tmpResult.useIsVibegrationsGuildEnabled(tmp5);
  }
  return enabled;
}) : ((guildId) => {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  const obj = { guildId, location: "automod_settings" };
  let enabled = AutomodApplicationRules.useConfig(obj).enabled;
  const obj2 = VibegrationsGuildExperiment;
  const obj3 = { guildId, location: "automod_settings" };
  if (!enabled) {
    enabled = obj2.useIsVibegrationsGuildEnabled(obj3);
  }
  return enabled;
});
const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const useIsApplicationRuleEnabled = tmp2;
