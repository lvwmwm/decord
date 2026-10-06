// Module ID: 7104
// Function ID: 7105
// Name: SlowmodeStore
// Dependencies: [2051, 4472, 7105, 2046, 585, 1103, 504, 2]

// Module 7104 (SlowmodeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import DurationsDefault from "Durations" /* 1103 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function setCooldown(channel, SendMessage, cooldownMs) {
  let timeout;
  _require = channel;
  const slowmodeType = SendMessage;
  let tmp = closure_6;
  if (null != closure_6[SendMessage][channel.id]) {
    const timer = tmp[SendMessage][channel.id].timer;
    timer.stop();
    delete tmp[SendMessage][channel.id];
  }
  let obj = require("SlowmodeUtils");
  const tmp3 = _require;
  if (!obj.canBypassSlowmode(channel)) {
    if (cooldownMs > 0) {
      const _Date = Date;
      const sum = cooldownMs + Date.now();
      dependencyMap = sum;
      const id = channel.id;
      const self = this;
      const self2 = this;
      const obj2 = { rateLimitPerUser: channel.rateLimitPerUser, cooldownMs, cooldownEndTimestamp: sum, timer: timeout };
      const tmp8 = tmp[SendMessage];
      timeout = new tmp3(2046).Timeout();
      tmp8[id] = obj2;
      const timer2 = tmp[SendMessage][channel.id].timer;
      timer2.start(1000, () => {
        const dispatch = DispatcherDefault.dispatch;
        const obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: channel.id, slowmodeType, cooldownMs: Math.max(dependencyMap - Date.now(), 0) };
        dispatch(obj);
      }, true);
    }
  }
}
function handleUploadCancel(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  if (null != channel) {
    setCooldown(channel, obj.SendMessage, 0);
  }
  return null != channel;
}
const SlowmodeType = { SendMessage: 0, [0]: "SendMessage", CreateThread: 1, [1]: "CreateThread" };
let closure_6 = { [SlowmodeType.SendMessage]: {}, [SlowmodeType.CreateThread]: {} };
const Store = get_initializedDefault.Store;
class SlowmodeStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, PermissionStore);
  }
  getSlowmodeCooldownGuess(id, slowmodeType) {
    let SendMessage = slowmodeType;
    const tmp = closure_6;
    if (slowmodeType == null) {
      SendMessage = obj.SendMessage;
    }
    let num = 0;
    if (null != tmp[SendMessage][id]) {
      num = tmp3.cooldownMs;
    }
    return num;
  }
  isChannelOnCooldown(channel, slowmodeType) {
    const tmp = this.getSlowmodeCooldownGuess(channel.id, slowmodeType) > 0 && channel.rateLimitPerUser > 0;
    return tmp;
  }
}
const prototype = SlowmodeStore.prototype;
SlowmodeStore.displayName = "SlowmodeStore";
let obj2 = {
  SLOWMODE_RESET_COOLDOWN: function handleSlowmodeResetCooldown(slowmodeType) {
    slowmodeType = slowmodeType.slowmodeType;
    const channel = ChannelStore.getChannel(slowmodeType.channelId);
    if (null != channel) {
      let num2 = 0;
      const tmp2 = setCooldown;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * DurationsDefault.Millis.SECOND + 100;
      }
      tmp2(channel, slowmodeType, num2);
    }
    return false;
  },
  SLOWMODE_SET_COOLDOWN: function handleSlowmodeSetCooldown(cooldownMs) {
    cooldownMs = cooldownMs.cooldownMs;
    const slowmodeType = cooldownMs.slowmodeType;
    const channel = ChannelStore.getChannel(cooldownMs.channelId);
    if (null == channel) {
      return false;
    } else {
      let num2 = 0;
      const tmp2 = setCooldown;
      if (0 !== cooldownMs) {
        num2 = cooldownMs + 100;
      }
      tmp2(channel, slowmodeType, num2);
    }
  },
  UPLOAD_START: function handleUploadStart(channelId) {
    const SendMessage = obj.SendMessage;
    const channel = ChannelStore.getChannel(channelId.channelId);
    if (null != channel) {
      let num2 = 0;
      const tmp2 = setCooldown;
      if (0 !== channel.rateLimitPerUser) {
        num2 = channel.rateLimitPerUser * DurationsDefault.Millis.SECOND + 100;
      }
      tmp2(channel, SendMessage, num2);
    }
    return false;
  },
  UPLOAD_FAIL: handleUploadCancel,
  UPLOAD_CANCEL_REQUEST: handleUploadCancel,
  CHANNEL_UPDATES: function handleUpdateCooldown(channels) {
    channels = channels.channels;
    const items = [, ];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    const item = items.forEach((item) => {
      const iter = channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = closure_6[item][nextResult.id];
        let tmp6 = tmp5;
        let rateLimitPerUser = nextResult.rateLimitPerUser;
        if (null != tmp5) {
          if (tmp6.rateLimitPerUser !== rateLimitPerUser) {
            let num;
            let tmp9 = setCooldown;
            let _Math = Math;
            if (tmp6 != null) {
              num = tmp6.cooldownMs;
            }
            if (num == null) {
              num = 0;
            }
            let tmp9Result = tmp9(tmp3, item, min(num, rateLimitPerUser * DurationsDefault.Millis.SECOND));
          }
        }
        continue;
      }
    });
  },
  LOGOUT: function clear() {
    const items = [, ];
    ({ SendMessage: arr[0], CreateThread: arr[1] } = obj);
    let item = items.forEach((item) => {
      let closure_0 = item;
      const keys = Object.keys(closure_6[item]);
      item = keys.forEach((item) => {
        const timer = closure_2_6[item][item].timer;
        return timer.stop();
      });
      closure_6[item] = {};
    });
  }
};
const slowmodeStore = new SlowmodeStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/SlowmodeStore.tsx");

export default slowmodeStore;
export { SlowmodeType };
