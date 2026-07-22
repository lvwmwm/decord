// Module ID: 4799
// Function ID: 41713
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4799 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function guildDimensionFactory(guildId) {
  const obj = { textAlign: "mn", marginVertical: "description", paddingHorizontal: "Array", guildId };
  return obj;
}
function _isAtBottom(channelId) {
  if (null != closure_7[channelId]) {
    return closure_7[channelId].scrollTop === closure_7[channelId].scrollHeight - closure_7[channelId].offsetHeight;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = {};
let closure_8 = {};
let closure_9 = { scrollTop: 0 };
let tmp2 = (Store) => {
  class DimensionStore {
    constructor() {
      self = this;
      tmp = closure_2(this, DimensionStore);
      obj = closure_5(DimensionStore);
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
  const importDefault = DimensionStore;
  callback2(DimensionStore, Store);
  let obj = {
    key: "percentageScrolled",
    value(arg0) {
      if (null != closure_7[arg0]) {
        return closure_7[arg0].scrollTop / closure_7[arg0].scrollHeight;
      } else {
        return 1;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getChannelDimensions",
    value(arg0) {
      return closure_7[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildDimensions",
    value(arg0) {
      let tmp = closure_8[arg0];
      if (null == tmp) {
        tmp = callback4(arg0);
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildListDimensions",
    value() {
      return closure_9;
    }
  };
  items[4] = {
    key: "isAtBottom",
    value(arg0) {
      return callback5(arg0);
    }
  };
  return callback(DimensionStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "DimensionStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  UPDATE_CHANNEL_DIMENSIONS: function handleChannelScroll(arg0) {
    let channelId;
    let offsetHeight;
    let scrollHeight;
    let scrollTop;
    ({ channelId, scrollTop, scrollHeight, offsetHeight } = arg0);
    if (null != scrollTop) {
      if (null != scrollHeight) {
        if (null != offsetHeight) {
          const obj = { channelId, scrollTop, scrollHeight, offsetHeight };
          if (null != tmp) {
            if (importDefault(dependencyMap[5])(tmp, obj)) {
              return false;
            }
          }
          closure_7[channelId] = obj;
        }
      }
    }
    if (null == closure_7[channelId]) {
      return false;
    } else {
      delete r0[r1];
    }
  },
  UPDATE_CHANNEL_LIST_DIMENSIONS: function handleGuildUpdate(arg0) {
    let guildId;
    let scrollTo;
    let scrollTop;
    ({ guildId, scrollTop, scrollTo } = arg0);
    if (null == closure_8[guildId]) {
      closure_8[guildId] = guildDimensionFactory(guildId);
    }
    if (undefined !== scrollTop) {
      closure_8[guildId].scrollTop = scrollTop;
    }
    let flag = false;
    if (undefined !== scrollTo) {
      flag = closure_8[guildId].scrollTo !== scrollTo;
      closure_8[guildId].scrollTo = scrollTo;
    }
    return null != scrollTo || flag;
  },
  UPDATE_GUILD_LIST_DIMENSIONS: function handleGuildListUpdate(scrollTop) {
    closure_9.scrollTop = scrollTop.scrollTop;
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    if (_isAtBottom(channelId.channelId)) {
      delete r1[r2];
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/DimensionStore.tsx");

export default tmp2;
