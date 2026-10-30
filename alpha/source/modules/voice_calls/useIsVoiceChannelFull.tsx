// Module ID: 11870
// Function ID: 11871
// Name: useIsVoiceChannelFull
// Dependencies: [4880, 4941, 5674, 1083, 504, 6041, 2]
// Exports: default, useIsVoiceChannelLocked

// Module 11870 (useIsVoiceChannelFull)
import Constants from "Constants" /* 1083 */;
import ChannelUtils from "ChannelUtils" /* 6041 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
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
