// Module ID: 5735
// Function ID: 49333
// Name: getMuteStates
// Dependencies: []
// Exports: default

// Module 5735 (getMuteStates)
function getMuteStates(voiceStateStore) {
  let authenticationStore;
  let channel;
  ({ channel, authenticationStore } = voiceStateStore);
  if (authenticationStore === undefined) {
    authenticationStore = closure_3;
  }
  voiceStateStore = voiceStateStore.voiceStateStore;
  if (voiceStateStore === undefined) {
    voiceStateStore = closure_6;
  }
  let mediaEngineStore = voiceStateStore.mediaEngineStore;
  if (mediaEngineStore === undefined) {
    mediaEngineStore = closure_4;
  }
  let permissionStore = voiceStateStore.permissionStore;
  if (permissionStore === undefined) {
    permissionStore = closure_5;
  }
  let impersonateStore = voiceStateStore.impersonateStore;
  if (impersonateStore === undefined) {
    impersonateStore = closure_2;
  }
  let voiceState = null;
  if (null != channel) {
    const guildId = channel.getGuildId();
    voiceState = voiceStateStore.getVoiceState(guildId, authenticationStore.getId());
  }
  let guildId1;
  if (null != channel) {
    guildId1 = channel.getGuildId();
  }
  let isViewingRolesResult = impersonateStore.isViewingRoles(guildId1);
  if (isViewingRolesResult) {
    isViewingRolesResult = !permissionStore.can(Permissions.SPEAK, channel);
  }
  const obj = { selfMute: mediaEngineStore.isSelfMute() || mediaEngineStore.isSelfMutedTemporarily() };
  let suppress;
  if (null != voiceState) {
    suppress = voiceState.suppress;
  }
  if (!suppress) {
    suppress = isViewingRolesResult;
  }
  obj.suppress = suppress;
  let mute;
  if (null != voiceState) {
    mute = voiceState.mute;
  }
  obj.mute = null != mute && mute;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const Permissions = arg1(dependencyMap[5]).Permissions;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_6, closure_4, closure_5, closure_2];
  return arg1(dependencyMap[6]).useStateFromStoresObject(items, () => callback({ channel: arg0, authenticationStore: closure_3, voiceStateStore: closure_6, mediaEngineStore: closure_4, permissionStore: closure_5, impersonateStore: closure_2 }));
};
export { getMuteStates };
