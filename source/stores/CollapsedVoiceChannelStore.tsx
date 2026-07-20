// Module ID: 6748
// Function ID: 52645
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6748 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  const obj = importDefault(dependencyMap[6]);
  const keys = obj.keys(obj);
  const item = keys.forEach((channelId) => {
    if (null == channel.getChannel(channelId)) {
      delete r0[r1];
    }
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let obj = {};
let tmp2 = (PersistedStore) => {
  class CollapsedVoiceChannelStore {
    constructor() {
      self = this;
      tmp = closure_2(this, CollapsedVoiceChannelStore);
      obj = closure_5(CollapsedVoiceChannelStore);
      tmp2 = closure_4;
      if (closure_10()) {
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
  const importDefault = CollapsedVoiceChannelStore;
  callback2(CollapsedVoiceChannelStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      this.waitFor(closure_7);
      if (null == arg0) {
        tmp = closure_8;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCollapsed",
    value() {
      return closure_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isCollapsed",
    value(arg0) {
      return closure_9[arg0] || false;
    }
  };
  return callback(CollapsedVoiceChannelStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp2.displayName = "CollapsedVoiceChannelStore";
tmp2.persistKey = "collapsedChannels";
obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CHANNEL_COLLAPSE: function handleChannelCollapse(channelId) {
    channelId = channelId.channelId;
    if (obj[channelId]) {
      delete r0[r2];
    } else {
      tmp[channelId] = true;
    }
    const obj = {};
    const merged = Object.assign(obj);
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/CollapsedVoiceChannelStore.tsx");

export default tmp2;
