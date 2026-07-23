// Module ID: 5724
// Function ID: 49200
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 566, 686, 2]

// Module 5724 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { users: {} };
let tmp2 = ((DeviceSettingsStore) => {
  class ChannelSpoilerAgreeStore {
    constructor() {
      self = this;
      tmp = ChannelSpoilerAgreeStore(this, ChannelSpoilerAgreeStore);
      obj = outer1_3(ChannelSpoilerAgreeStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelSpoilerAgreeStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(users) {
      this.waitFor(outer1_5);
      if (null != users) {
        if (null != users.users) {
          const obj = { users: users.users };
        }
        const outer1_6 = { users: {} };
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "didAgree",
    value(arg0) {
      if (null == arg0) {
        return false;
      } else {
        const id = outer1_5.getId();
        let tmp3 = null != id;
        if (tmp3) {
          let flag;
          if (null != outer1_6.users[id]) {
            flag = tmp5.channels[arg0];
          }
          if (!flag) {
            flag = false;
          }
          tmp3 = flag;
        }
        return tmp3;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return outer1_6;
    }
  };
  return callback(ChannelSpoilerAgreeStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "ChannelSpoilerAgreeStore";
tmp2.persistKey = "ChannelSpoilerAgreeStore";
tmp2 = new tmp2(require("dispatcher"), {
  CHANNEL_SPOILER_AGREE: function handleChannelSpoilerAgree(channelId) {
    const id = store.getId();
    if (null == id) {
      return false;
    } else {
      if (null == closure_6.users[id]) {
        const obj = { channels: {} };
        closure_6.users[id] = obj;
      }
      closure_6.users[id].channels[channelId.channelId] = true;
    }
  },
  CHANNEL_SPOILER_AGREE_CLEAR: function handleChannelSpoilerAgreeClear(arg0) {
    const id = store.getId();
    let tmp4 = null != id;
    if (tmp4) {
      if (null != closure_6.users[id]) {
        const channels = closure_6.users[id].channels;
        delete tmp[tmp2];
      }
      tmp4 = tmp6;
    }
    return tmp4;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/spoiler_channels/ChannelSpoilerAgreeStore.tsx");

export default tmp2;
