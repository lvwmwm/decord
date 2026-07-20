// Module ID: 9054
// Function ID: 71094
// Name: getUserVoiceState
// Dependencies: []
// Exports: canViewUserVoiceChannel, default

// Module 9054 (getUserVoiceState)
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
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResult1 = importDefault(dependencyMap[1]);
const importDefaultResult2 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
let closure_6 = { ChannelStore: importDefaultResult, PermissionStore: importDefaultResult1, VoiceStateStore: importDefaultResult2 };
let closure_7 = Object.freeze({ voiceState: undefined, voiceChannel: undefined });
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default function useUserVoiceActivity(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const guildId = userId.guildId;
  const dependencyMap = guildId;
  const items = [importDefaultResult, importDefaultResult1, importDefaultResult2];
  const items1 = [guildId, userId];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    let obj = { userId, guildId };
    obj = { ChannelStore: closure_2, PermissionStore: closure_3, VoiceStateStore: closure_4 };
    return callback(obj, obj);
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
