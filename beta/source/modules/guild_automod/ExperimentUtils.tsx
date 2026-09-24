// Module ID: 13000
// Function ID: 13001
// Name: guild_automod/ExperimentUtils
// Dependencies: [13001, 558, 568, 2]
// Exports: isInMentionRaidExperiment

// Module 13000 (guild_automod/ExperimentUtils)
import c from "c" /* 568 */;
import AutomodExperiment from "AutomodExperiment" /* 13001 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, arg1) => {
  const cResult = c.c(4);
  if (cResult[0] !== guildId) {
    const obj2 = { guildId, location: "988d4e_4" };
    cResult[0] = guildId;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== (undefined === arg1 || arg1)) {
    const obj3 = { autoTrackExposure: tmp4 };
    cResult[2] = tmp4;
    cResult[3] = obj3;
    let tmp6 = obj3;
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
  return AutomodMentionRaidLimit.useExperiment({ guildId, location: "988d4e_4" }, { autoTrackExposure }).enabled;
});
const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = tmp2;
export const useIsApplicationRuleEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = c.c(2);
  if (cResult[0] !== guildId) {
    const obj2 = { guildId, location: "automod_settings" };
    cResult[0] = guildId;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  return AutomodApplicationRules.useConfig(tmp4).enabled;
}) : ((guildId) => {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  return AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
});
