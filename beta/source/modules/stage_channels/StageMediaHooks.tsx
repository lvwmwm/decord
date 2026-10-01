// Module ID: 5729
// Function ID: 5730
// Name: StageMediaHooks
// Dependencies: [2067, 4855, 5730, 504, 5737, 2]
// Exports: getStageHasMedia, getStageHasStream, isStageVideoEnabled, useIsStageVideoEnabled, useStageHasMedia, useStageHasStream

// Module 5729 (StageMediaHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import GuildStore from "GuildStore" /* 2067 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5730 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f80781 = () => {
  mutableParticipants = mutableParticipants.getMutableParticipants(closure_0, closure_0(dependencyMap[4]).StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find((type) => type.type === closure_1_0(closure_1_1[4]).StageChannelParticipantTypes.STREAM);
};
const f80782 = (type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM;
const result = size.fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = function useStageHasMedia(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f80781, items1);
  const items2 = [VoiceStateStore];
  const items3 = [id];
  const obj2 = require("get initialized");
  const tmp2 = obj2.useStateFromStores(items2, () => VoiceStateStore.hasVideo(id), items3) || stateFromStores;
  return tmp2;
};
export const useStageHasStream = function useStageHasStream(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f80781, items1);
};
export const getStageHasMedia = function getStageHasMedia(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const hasVideoResult = null != mutableParticipants.find(f80782) || VoiceStateStore.hasVideo(id);
  return hasVideoResult;
};
export const getStageHasStream = function getStageHasStream(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find(f80782);
};
export const useIsStageVideoEnabled = function useIsStageVideoEnabled(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
export const isStageVideoEnabled = function isStageVideoEnabled(guild_id) {
  const guild = GuildStore.getGuild(guild_id);
  let tmp2 = null != guild;
  if (tmp2) {
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
