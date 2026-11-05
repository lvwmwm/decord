// Module ID: 12115
// Function ID: 12116
// Name: useIsVoiceChannelFull
// Dependencies: [5014, 5075, 5815, 1083, 504, 6184, 2]
// Exports: default, useIsVoiceChannelLocked

// Module 12115 (useIsVoiceChannelFull)
import Constants from "Constants" /* 1083 */;
import ChannelUtils from "ChannelUtils" /* 6184 */;
import GuildStore from "GuildStore" /* 5014 */;
import PermissionStore from "PermissionStore" /* 5075 */;
import VoiceStateStore from "VoiceStateStore" /* 5815 */;
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
