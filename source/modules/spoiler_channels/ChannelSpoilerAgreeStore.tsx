// Module ID: 5720
// Function ID: 49157
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5720 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = { users: {} };
let tmp2 = (DeviceSettingsStore) => {
  class ChannelSpoilerAgreeStore {
    constructor() {
      self = this;
      tmp = ChannelSpoilerAgreeStore(this, ChannelSpoilerAgreeStore);
      obj = closure_3(ChannelSpoilerAgreeStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ChannelSpoilerAgreeStore;
  callback2(ChannelSpoilerAgreeStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(users) {
      this.waitFor(closure_5);
      if (null != users) {
        if (null != users.users) {
          const obj = { users: users.users };
        }
        let closure_6 = { users: {} };
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
        const id = id.getId();
        let tmp3 = null != id;
        if (tmp3) {
          let flag;
          if (null != users.users[id]) {
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
      return closure_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return closure_6;
    }
  };
  return callback(ChannelSpoilerAgreeStore, items);
}(importDefault(dependencyMap[6]).DeviceSettingsStore);
tmp2.displayName = "ChannelSpoilerAgreeStore";
tmp2.persistKey = "ChannelSpoilerAgreeStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
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
    let tmp2 = null != id;
    if (tmp2) {
      if (null != closure_6.users[id]) {
        const channels = closure_6.users[id].channels;
        delete r2[r3];
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/spoiler_channels/ChannelSpoilerAgreeStore.tsx");

export default tmp2;
