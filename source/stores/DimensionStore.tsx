// Module ID: 4802
// Function ID: 41731
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 620, 566, 686, 2]

// Module 4802 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function guildDimensionFactory(guildId) {
  const obj = { guildId, scrollTop: null, scrollTo: null };
  return obj;
}
function _isAtBottom(channelId) {
  if (null != dependencyMap[channelId]) {
    return dependencyMap[channelId].scrollTop === dependencyMap[channelId].scrollHeight - dependencyMap[channelId].offsetHeight;
  }
}
let closure_7 = {};
let closure_8 = {};
let closure_9 = { scrollTop: 0 };
let tmp2 = ((Store) => {
  class DimensionStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, DimensionStore);
      obj = outer1_5(DimensionStore);
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
  callback2(DimensionStore, Store);
  let obj = {
    key: "percentageScrolled",
    value(arg0) {
      if (null != outer1_7[arg0]) {
        return outer1_7[arg0].scrollTop / outer1_7[arg0].scrollHeight;
      } else {
        return 1;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getChannelDimensions",
    value(arg0) {
      return outer1_7[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildDimensions",
    value(arg0) {
      let tmp = outer1_8[arg0];
      if (null == tmp) {
        tmp = outer1_11(arg0);
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildListDimensions",
    value() {
      return outer1_9;
    }
  };
  items[4] = {
    key: "isAtBottom",
    value(arg0) {
      return outer1_12(arg0);
    }
  };
  return callback(DimensionStore, items);
})(require("initialize").Store);
tmp2.displayName = "DimensionStore";
tmp2 = new tmp2(require("dispatcher"), {
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
          if (null != tmp3) {
            if (importDefault(620)(tmp3, obj)) {
              return false;
            }
          }
          dependencyMap[channelId] = obj;
        }
      }
    }
    if (null == dependencyMap[channelId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  UPDATE_CHANNEL_LIST_DIMENSIONS: function handleGuildUpdate(arg0) {
    let guildId;
    let scrollTo;
    let scrollTop;
    ({ guildId, scrollTop, scrollTo } = arg0);
    if (null == dependencyMap2[guildId]) {
      dependencyMap2[guildId] = guildDimensionFactory(guildId);
    }
    if (undefined !== scrollTop) {
      dependencyMap2[guildId].scrollTop = scrollTop;
    }
    let flag = false;
    if (undefined !== scrollTo) {
      flag = dependencyMap2[guildId].scrollTo !== scrollTo;
      dependencyMap2[guildId].scrollTo = scrollTo;
    }
    return null != scrollTo || flag;
  },
  UPDATE_GUILD_LIST_DIMENSIONS: function handleGuildListUpdate(scrollTop) {
    closure_9.scrollTop = scrollTop.scrollTop;
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    if (_isAtBottom(channelId.channelId)) {
      delete tmp[tmp2];
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/DimensionStore.tsx");

export default tmp2;
