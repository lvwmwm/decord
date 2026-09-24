// Module ID: 17556
// Function ID: 17557
// Name: useCanConnect
// Dependencies: [2045, 2067, 4431, 4809, 1089, 558, 568, 4935, 504, 2]

// Module 17556 (useCanConnect)
import ChannelUtils from "ChannelUtils" /* 4935 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import VoiceStateStore from "VoiceStateStore" /* 4809 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1089).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore, GuildStore, VoiceStateStore];
    cResult[0] = items;
    let first = items;
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
    let tmp10 = items1;
    const tmp9 = C;
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
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp9, tmp10);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelStore, PermissionStore, GuildStore, VoiceStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
      }
      tmp = isPrivateResult;
    }
    const obj = { canConnect: tmp, isAtMaxCapacity: null };
    let isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      isChannelFullResult = ChannelUtils.isChannelFull(channel, VoiceStateStore, GuildStore);
    }
    obj.isAtMaxCapacity = isChannelFullResult;
    return obj;
  }, items1);
});
