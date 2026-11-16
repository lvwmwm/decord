// Module ID: 19669
// Function ID: 19670
// Name: useCanConnect
// Dependencies: [5019, 5041, 5102, 5835, 1083, 504, 6210, 2]
// Exports: default

// Module 19669 (useCanConnect)
import Constants from "Constants" /* 1083 */;
import ChannelUtils from "ChannelUtils" /* 6210 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
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
