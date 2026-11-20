// Module ID: 10806
// Function ID: 10807
// Name: useIsVoiceChannelFull
// Dependencies: [4665, 4726, 5442, 1082, 504, 5829, 2]
// Exports: default, useIsVoiceChannelLocked

// Module 10806 (useIsVoiceChannelFull)
import Constants from "Constants" /* 1082 */;
import ChannelUtils from "ChannelUtils" /* 5829 */;
import GuildStore from "GuildStore" /* 4665 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import VoiceStateStore from "VoiceStateStore" /* 5442 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [VoiceStateStore, GuildStore];
  return obj.useStateFromStores(items, () => {
    const obj = ChannelUtils;
    return obj.isChannelFull(closure_0, VoiceStateStore, GuildStore);
  });
};
export function useIsVoiceChannelLocked(channel) {
  _require = channel;
  const items = [PermissionStore];
  const items1 = [channel];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const tmp2 = null == channel || !PermissionStore.can(Permissions.CONNECT, tmp);
    return tmp2;
  }, items1);
}
