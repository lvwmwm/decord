// Module ID: 10110
// Function ID: 78275
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10110 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = Object.freeze({});
let closure_10 = {};
let closure_11 = {};
let closure_12 = null;
let tmp2 = (PersistedStore) => {
  class ChannelMemberCountStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ChannelMemberCountStore);
      obj = closure_5(ChannelMemberCountStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ChannelMemberCountStore;
  callback2(ChannelMemberCountStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      this.waitFor(closure_7, closure_8);
      if (null == arg0) {
        tmp = closure_10;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMemberCount",
    value(arg0) {
      let tmp = closure_11[arg0];
      if (null == tmp) {
        tmp = closure_9;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "requestCount",
    value(guildId, channelId) {
      let closure_12 = { guildId, channelId };
      const socket = socket.getSocket();
      const channelMemberCount = socket.requestChannelMemberCount(guildId, channelId);
    }
  };
  return callback(ChannelMemberCountStore, items);
}(importDefault(dependencyMap[8]).PersistedStore);
tmp2.displayName = "ChannelMemberCountStore";
tmp2.persistKey = "channelMemberCounts";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (null != _null) {
      const socket = socket.getSocket();
      const channelMemberCount = socket.requestChannelMemberCount(_null.guildId, _null.channelId);
    }
    const keys = importDefault(dependencyMap[7]).keys(closure_11);
    const item = keys.forEach((channelId) => {
      if (null == channel.getChannel(channelId)) {
        delete r0[r1];
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
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/channel/ChannelMemberCountStore.tsx");

export default tmp2;
