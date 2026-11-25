// Module ID: 10990
// Function ID: 10991
// Name: useMuteStates
// Dependencies: [4818, 502, 2131, 4845, 5561, 1071, 504, 2]
// Exports: default

// Module 10990 (useMuteStates)
import Constants from "Constants" /* 1071 */;
import ImpersonateStore_mod from "ImpersonateStore" /* 4818 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore_mod from "MediaEngineStore" /* 2131 */;
import PermissionStore_mod from "PermissionStore" /* 4845 */;
import VoiceStateStore_mod from "VoiceStateStore" /* 5561 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getMuteStates(VoiceStateStore) {
  let channel;
  let flag;
  let suppress;
  ({ channel, AuthenticationStore } = VoiceStateStore);
  VoiceStateStore = VoiceStateStore.VoiceStateStore;
  MediaEngineStore = VoiceStateStore.MediaEngineStore;
  PermissionStore = VoiceStateStore.PermissionStore;
  ImpersonateStore = VoiceStateStore.ImpersonateStore;
  let voiceState = null;
  if (null != channel) {
    const getVoiceState = VoiceStateStore.getVoiceState;
    const guildId = channel.getGuildId();
    voiceState = getVoiceState(guildId, AuthenticationStore.getId());
  }
  let guildId1;
  const tmp3 = MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const obj = { selfMute: tmp3, suppress, mute: flag };
  suppress = undefined;
  const isViewingRolesResult = ImpersonateStore.isViewingRoles(guildId1) && !PermissionStore.can(Permissions.SPEAK, channel);
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
let ImpersonateStore = ImpersonateStore_mod;
let MediaEngineStore = MediaEngineStore_mod;
let PermissionStore = PermissionStore_mod;
let VoiceStateStore = VoiceStateStore_mod;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/video_calls/useMuteStates.tsx");

export default function useMuteStates(channel) {
  _require = channel;
  let obj = require("get initialized");
  const items = [AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { channel, AuthenticationStore, VoiceStateStore, MediaEngineStore, PermissionStore, ImpersonateStore };
    return getMuteStates(obj);
  });
};
export { getMuteStates };
