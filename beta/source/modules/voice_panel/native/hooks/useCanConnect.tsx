// Module ID: 16905
// Function ID: 16906
// Name: useCanConnect
// Dependencies: [2051, 2073, 4472, 4856, 1097, 558, 576, 4982, 504, 2]

// Module 16905 (useCanConnect)
import Constants from "Constants" /* 1097 */;
import ChannelUtils from "ChannelUtils" /* 4982 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2073 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import VoiceStateStore from "VoiceStateStore" /* 4856 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, obj1, tmp3, tmp4, tmp6, tmp7, tmp8;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, , , ];
    items[1] = PermissionStore;
    items[2] = GuildStore;
    items[3] = VoiceStateStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class C {
      constructor() {
        channel = closure_2.getChannel(closure_0);
        tmp = null != channel;
        if (tmp) {
          isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            tmp3 = closure_4;
            tmp4 = Permissions;
            isPrivateResult = closure_4.can(Permissions.CONNECT, channel);
          }
          tmp = isPrivateResult;
        }
        obj1 = { canConnect: tmp, isAtMaxCapacity: null };
        isChannelFullResult = null == channel;
        if (!isChannelFullResult) {
          tmp6 = closure_0;
          tmp7 = closure_1;
          obj3 = closure_0(closure_1[7]);
          tmp8 = closure_5;
          tmp9 = closure_3;
          isChannelFullResult = obj3.isChannelFull(channel, closure_5, closure_3);
        }
        obj1.isAtMaxCapacity = isChannelFullResult;
        return obj1;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = C;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = C;
  } else {
    class C {
      constructor() {
        channel = closure_2.getChannel(closure_0);
        tmp = null != channel;
        if (tmp) {
          isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            tmp3 = closure_4;
            tmp4 = Permissions;
            isPrivateResult = closure_4.can(Permissions.CONNECT, channel);
          }
          tmp = isPrivateResult;
        }
        obj1 = { canConnect: tmp, isAtMaxCapacity: null };
        isChannelFullResult = null == channel;
        if (!isChannelFullResult) {
          tmp6 = closure_0;
          tmp7 = closure_1;
          obj3 = closure_0(closure_1[7]);
          tmp8 = closure_5;
          tmp9 = closure_3;
          isChannelFullResult = obj3.isChannelFull(channel, closure_5, closure_3);
        }
        obj1.isAtMaxCapacity = isChannelFullResult;
        return obj1;
      }
    }
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp9, tmp10);
}) : ((arg0) => {
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
});
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default tmp2;
