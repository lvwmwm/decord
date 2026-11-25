// Module ID: 19273
// Function ID: 19274
// Name: useCanConnect
// Dependencies: [4762, 4784, 4845, 5561, 1082, 504, 5948, 2]
// Exports: default

// Module 19273 (useCanConnect)
import Constants from "Constants" /* 1082 */;
import ChannelUtils from "ChannelUtils" /* 5948 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import VoiceStateStore from "VoiceStateStore" /* 5561 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ChannelStore, PermissionStore, GuildStore, VoiceStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let isChannelFullResult;
    const channel = ChannelStore.getChannel(closure_0);
    let tmp = null != channel;
    if (tmp) {
      tmp = channel.isPrivate() || PermissionStore.can(Permissions.CONNECT, channel);
      const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.CONNECT, channel);
    }
    const obj = { canConnect: tmp, isAtMaxCapacity: isChannelFullResult };
    isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      const obj3 = ChannelUtils;
      isChannelFullResult = obj3.isChannelFull(channel, VoiceStateStore, GuildStore);
    }
    return obj;
  }, items1);
};
