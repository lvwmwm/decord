// Module ID: 6759
// Function ID: 52745
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 21, 566, 686, 2]

// Module 6759 (_isNativeReflectConstruct)
import DISCORD_EPOCH from "DISCORD_EPOCH";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  const obj = importDefault(21);
  const keys = obj.keys(obj);
  const item = keys.forEach((channelId) => {
    if (null == outer1_7.getChannel(channelId)) {
      delete tmp[tmp2];
    }
  });
}
let obj = {};
let tmp2 = ((PersistedStore) => {
  class CollapsedVoiceChannelStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, CollapsedVoiceChannelStore);
      obj = outer1_5(CollapsedVoiceChannelStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(CollapsedVoiceChannelStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      this.waitFor(outer1_7);
      if (null == arg0) {
        tmp = outer1_8;
      }
      const outer1_9 = tmp;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCollapsed",
    value() {
      return outer1_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isCollapsed",
    value(arg0) {
      return outer1_9[arg0] || false;
    }
  };
  return callback(CollapsedVoiceChannelStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "CollapsedVoiceChannelStore";
tmp2.persistKey = "collapsedChannels";
obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CHANNEL_COLLAPSE: function handleChannelCollapse(channelId) {
    channelId = channelId.channelId;
    if (obj[channelId]) {
      delete tmp[tmp2];
    } else {
      tmp3[channelId] = true;
    }
    obj = {};
    const merged = Object.assign(obj);
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/CollapsedVoiceChannelStore.tsx");

export default tmp2;
