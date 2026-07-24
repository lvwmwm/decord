// Module ID: 9105
// Function ID: 71386
// Name: getUserVoiceState
// Dependencies: [1348, 3758, 4146, 482, 566, 2]
// Exports: canViewUserVoiceChannel, default

// Module 9105 (getUserVoiceState)
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import importDefaultResult2 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
function getUserVoiceState(arg0, arg1) {
  let guildId;
  let userId;
  let tmp = arg1;
  ({ userId, guildId } = arg0);
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      const VoiceStateStore2 = tmp.VoiceStateStore;
      let discoverableVoiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
    }
    return discoverableVoiceState;
  }
  if (null != userId) {
    const VoiceStateStore = tmp.VoiceStateStore;
    discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
  }
}
function getUserVoiceChannel(voiceState, arg1) {
  let tmp = arg1;
  voiceState = voiceState.voiceState;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  let channelId;
  if (null != voiceState) {
    channelId = voiceState.channelId;
  }
  if (null != channelId) {
    const ChannelStore = tmp.ChannelStore;
    return ChannelStore.getChannel(voiceState.channelId);
  }
}
function canViewVoiceChannel(voiceChannel, arg1) {
  let tmp = arg1;
  voiceChannel = voiceChannel.voiceChannel;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  let tmp2 = null != voiceChannel.voiceState;
  if (tmp2) {
    let isPrivateResult;
    if (null != voiceChannel) {
      isPrivateResult = voiceChannel.isPrivate();
    }
    if (!isPrivateResult) {
      const PermissionStore = tmp.PermissionStore;
      isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, voiceChannel);
    }
    tmp2 = isPrivateResult;
  }
  return tmp2;
}
function getVisibleUserVoiceActivity(arg0) {
  let guildId;
  let userId;
  let tmp = arg1;
  ({ userId, guildId } = arg0);
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  const voiceState = getUserVoiceState({ userId, guildId }, tmp);
  const voiceChannel = getUserVoiceChannel({ voiceState }, tmp);
  if (canViewVoiceChannel({ voiceState, voiceChannel }, tmp)) {
    const obj = { voiceState, voiceChannel };
    let tmp4 = obj;
  } else {
    tmp4 = closure_7;
  }
  return tmp4;
}
let closure_6 = { ChannelStore: importDefaultResult, PermissionStore: importDefaultResult1, VoiceStateStore: importDefaultResult2 };
let closure_7 = Object.freeze({ voiceState: undefined, voiceChannel: undefined });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default function useUserVoiceActivity(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  const items = [closure_2, importDefaultResult1, importDefaultResult2];
  const items1 = [guildId, userId];
  return userId(guildId[4]).useStateFromStoresObject(items, () => {
    let obj = { userId, guildId };
    obj = { ChannelStore: outer1_2, PermissionStore: outer1_3, VoiceStateStore: outer1_4 };
    return outer1_11(obj, obj);
  }, items1);
};
export { getUserVoiceState };
export const canViewUserVoiceChannel = function canViewUserVoiceChannel(arg0) {
  let guildId;
  let userId;
  let tmp = arg1;
  ({ userId, guildId } = arg0);
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  const tmp2 = getUserVoiceState({ userId, guildId }, tmp);
  const obj = { voiceState: tmp2, voiceChannel: getUserVoiceChannel({ voiceState: tmp2 }, tmp) };
  return canViewVoiceChannel(obj, tmp);
};
export { getVisibleUserVoiceActivity };
