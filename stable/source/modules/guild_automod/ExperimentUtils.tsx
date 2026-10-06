// Module ID: 12226
// Function ID: 12227
// Name: guild_automod/ExperimentUtils
// Dependencies: [12227, 558, 576, 2]
// Exports: isInMentionRaidExperiment

// Module 12226 (guild_automod/ExperimentUtils)
import react from "react" /* 576 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const AutomodExperiment = tmp(12227);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, arg1) => {
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] !== guildId) {
    const obj2 = { guildId, location: "988d4e_4" };
    cResult[0] = guildId;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== (undefined === arg1 || arg1)) {
    const obj3 = { autoTrackExposure: undefined === arg1 || arg1 };
    cResult[2] = undefined === arg1 || arg1;
    cResult[3] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.useExperiment(tmp5, tmp6).enabled;
}) : ((guildId) => {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  const obj = { guildId, location: "988d4e_4" };
  return AutomodMentionRaidLimit.useExperiment(obj, { autoTrackExposure }).enabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== guildId) {
    const obj2 = { guildId, location: "automod_settings" };
    cResult[0] = guildId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  return AutomodApplicationRules.useConfig(tmp4).enabled;
}) : ((guildId) => {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  const obj = { guildId, location: "automod_settings" };
  return AutomodApplicationRules.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  const obj = { guildId, location: "988d4e_3" };
  return AutomodMentionRaidLimit.getCurrentConfig(obj).enabled;
};
export const useIsMentionRaidExperimentEnabled = tmp2;
export const useIsApplicationRuleEnabled = tmp3;
