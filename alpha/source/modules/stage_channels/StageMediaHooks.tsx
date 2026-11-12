// Module ID: 6876
// Function ID: 6877
// Name: StageMediaHooks
// Dependencies: [5114, 5918, 6877, 504, 6880, 2]
// Exports: getStageHasMedia, getStageHasStream, isStageVideoEnabled, useIsStageVideoEnabled, useStageHasMedia, useStageHasStream

// Module 6876 (StageMediaHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 6880 */;
import GuildStore from "GuildStore" /* 5114 */;
import VoiceStateStore from "VoiceStateStore" /* 5918 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6877 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f91853 = () => {
  mutableParticipants = mutableParticipants.getMutableParticipants(closure_0, closure_0(dependencyMap[4]).StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find((type) => type.type === closure_1_0(closure_1_1[4]).StageChannelParticipantTypes.STREAM);
};
const f91854 = (type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM;
const result = size.fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export function useStageHasMedia(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f91853, items1);
  const items2 = [VoiceStateStore];
  const items3 = [id];
  const obj2 = require("get initialized");
  const tmp2 = obj2.useStateFromStores(items2, () => VoiceStateStore.hasVideo(id), items3) || stateFromStores;
  return tmp2;
}
export function useStageHasStream(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f91853, items1);
}
export function getStageHasMedia(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const hasVideoResult = null != mutableParticipants.find(f91854) || VoiceStateStore.hasVideo(id);
  return hasVideoResult;
}
export function getStageHasStream(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find(f91854);
}
export function useIsStageVideoEnabled(guild_id) {
  _require = guild_id;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id));
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
}
export function isStageVideoEnabled(guild_id) {
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
}
