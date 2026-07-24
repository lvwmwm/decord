// Module ID: 10157
// Function ID: 78551
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4808, 1348, 21, 566, 686, 2]

// Module 10157 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_9 = Object.freeze({ online: null, total: null });
let closure_10 = {};
let closure_11 = {};
let c12 = null;
let tmp2 = ((PersistedStore) => {
  class ChannelMemberCountStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ChannelMemberCountStore);
      obj = outer1_5(ChannelMemberCountStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelMemberCountStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      this.waitFor(outer1_7, outer1_8);
      if (null == arg0) {
        tmp = outer1_10;
      }
      const outer1_11 = tmp;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMemberCount",
    value(arg0) {
      let tmp = outer1_11[arg0];
      if (null == tmp) {
        tmp = outer1_9;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "requestCount",
    value(guildId, channelId) {
      const outer1_12 = { guildId, channelId };
      const socket = outer1_7.getSocket();
      const channelMemberCount = socket.requestChannelMemberCount(guildId, channelId);
    }
  };
  return callback(ChannelMemberCountStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "ChannelMemberCountStore";
tmp2.persistKey = "channelMemberCounts";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (null != _null) {
      socket = socket.getSocket();
      const channelMemberCount = socket.requestChannelMemberCount(_null.guildId, _null.channelId);
    }
    const keys = importDefault(21).keys(closure_11);
    const item = keys.forEach((channelId) => {
      if (null == outer1_8.getChannel(channelId)) {
        delete tmp[tmp2];
      }
    });
  },
  CHANNEL_MEMBER_COUNT_UPDATE: function handleMemberCountUpdate(channelId) {
    let online;
    let total;
    ({ online, total } = channelId);
    let tmp = null == online;
    if (tmp) {
      tmp = null == total;
    }
    if (!tmp) {
      const obj = { online, total };
      closure_11[channelId.channelId] = obj;
    }
    return true;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/channel/ChannelMemberCountStore.tsx");

export default tmp2;
