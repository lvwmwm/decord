// Module ID: 5740
// Function ID: 49371
// Name: getMuteStates
// Dependencies: [1909, 1194, 4177, 3758, 4146, 653, 566, 2]
// Exports: default

// Module 5740 (getMuteStates)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
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
    impersonateStore = _isNativeReflectConstruct;
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_6, closure_4, closure_5, _isNativeReflectConstruct];
  return _require(566).useStateFromStoresObject(items, () => outer1_8({ channel: closure_0, authenticationStore: outer1_3, voiceStateStore: outer1_6, mediaEngineStore: outer1_4, permissionStore: outer1_5, impersonateStore: outer1_2 }));
};
export { getMuteStates };
