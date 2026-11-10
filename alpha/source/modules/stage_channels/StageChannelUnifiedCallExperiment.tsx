// Module ID: 11336
// Function ID: 11337
// Name: StageChannelUnifiedCallExperiment
// Dependencies: [1072, 1449, 2]
// Exports: isStageUnifiedCall, useIsStageUnifiedCall

// Module 11336 (StageChannelUnifiedCallExperiment)
import Constants from "Constants" /* 1072 */;
import ApexExperiment_mod from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let ApexExperiment = ApexExperiment_mod;
let obj = { kind: "guild", name: "2026-10-stage-unified-call", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { kind: "user", name: "2026-10-stage-unified-call-user", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelUnifiedCallExperiment.tsx");

export function useIsStageUnifiedCall(stateFromStores1, VoicePanelFloatingCTA) {
  let flag;
  if (stateFromStores1 != null) {
    flag = stateFromStores1.isGuildStageVoice();
  }
  if (flag == null) {
    flag = false;
  }
  let guild_id;
  const useConfig = config.useConfig;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj = { guildId: guild_id, location: VoicePanelFloatingCTA };
  let enabled = useConfig(obj).enabled;
  const obj2 = { location: VoicePanelFloatingCTA };
  if (flag) {
    if (!enabled) {
      enabled = closure_2.useConfig(obj2).enabled;
    }
    flag = enabled;
  }
  return flag;
}
export function isStageUnifiedCall(channel, VoicePanelController) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp3 = !(null == guild_id || !channel.isGuildStageVoice());
  null == guild_id || !channel.isGuildStageVoice();
  if (tmp3) {
    const obj = { guildId: channel.guild_id, location: VoicePanelController };
    let enabled = config.getConfig(obj).enabled;
    if (!enabled) {
      const obj2 = { location: VoicePanelController };
      enabled = closure_2.getConfig(obj2).enabled;
    }
    tmp3 = enabled;
  }
  return tmp3;
}
