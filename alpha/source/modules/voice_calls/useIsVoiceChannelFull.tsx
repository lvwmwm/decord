// Module ID: 10864
// Function ID: 10865
// Name: useIsVoiceChannelFull
// Dependencies: [4663, 4724, 5440, 1083, 504, 5827, 2]
// Exports: default, useIsVoiceChannelLocked

// Module 10864 (useIsVoiceChannelFull)
import Constants from "Constants" /* 1083 */;
import ChannelUtils from "ChannelUtils" /* 5827 */;
import GuildStore from "GuildStore" /* 4663 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import VoiceStateStore from "VoiceStateStore" /* 5440 */;
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
