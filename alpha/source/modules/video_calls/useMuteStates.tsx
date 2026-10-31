// Module ID: 7526
// Function ID: 7527
// Name: useMuteStates
// Dependencies: [4919, 502, 2006, 4946, 5679, 1072, 504, 2]
// Exports: default

// Module 7526 (useMuteStates)
import Constants from "Constants" /* 1072 */;
import ImpersonateStore from "ImpersonateStore" /* 4919 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getMuteStates(voiceStateStore) {
  let authenticationStore;
  let channel;
  let flag;
  let suppress;
  ({ channel, authenticationStore } = voiceStateStore);
  if (authenticationStore === undefined) {
    authenticationStore = AuthenticationStore;
  }
  voiceStateStore = voiceStateStore.voiceStateStore;
  if (voiceStateStore === undefined) {
    voiceStateStore = VoiceStateStore;
  }
  let mediaEngineStore = voiceStateStore.mediaEngineStore;
  if (mediaEngineStore === undefined) {
    mediaEngineStore = MediaEngineStore;
  }
  let permissionStore = voiceStateStore.permissionStore;
  if (permissionStore === undefined) {
    permissionStore = PermissionStore;
  }
  let impersonateStore = voiceStateStore.impersonateStore;
  if (impersonateStore === undefined) {
    impersonateStore = ImpersonateStore;
  }
  let voiceState = null;
  if (null != channel) {
    const getVoiceState = voiceStateStore.getVoiceState;
    const guildId = channel.getGuildId();
    voiceState = getVoiceState(guildId, authenticationStore.getId());
  }
  let guildId1;
  const tmp3 = mediaEngineStore.isSelfMute() || mediaEngineStore.isSelfMutedTemporarily();
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const obj = { selfMute: tmp3, suppress, mute: flag };
  suppress = undefined;
  const isViewingRolesResult = impersonateStore.isViewingRoles(guildId1) && !permissionStore.can(Permissions.SPEAK, channel);
  if (voiceState != null) {
    suppress = voiceState.suppress;
  }
  if (!suppress) {
    suppress = isViewingRolesResult;
  }
  flag = undefined;
  if (voiceState != null) {
    flag = voiceState.mute;
  }
  if (flag == null) {
    flag = false;
  }
  return obj;
}
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(channel) {
  _require = channel;
  let obj = require("get initialized");
  const items = [AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { channel, authenticationStore: AuthenticationStore, voiceStateStore: VoiceStateStore, mediaEngineStore: MediaEngineStore, permissionStore: PermissionStore, impersonateStore: ImpersonateStore };
    return getMuteStates(obj);
  });
};
export { getMuteStates };
