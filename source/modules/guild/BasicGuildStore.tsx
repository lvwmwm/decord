// Module ID: 7733
// Function ID: 61486
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 7733 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = 0;
let closure_6 = {};
let tmp2 = ((Store) => {
  class BasicGuildStore {
    constructor() {
      self = this;
      tmp = BasicGuildStore(this, BasicGuildStore);
      obj = outer1_3(BasicGuildStore);
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
  callback2(BasicGuildStore, Store);
  let obj = {
    key: "getGuild",
    value(arg0) {
      if (null != outer1_6[arg0]) {
        if (!("type" in tmp)) {
          return tmp;
        }
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isGuildFetching",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = "type" in tmp;
      }
      if (tmp2) {
        tmp2 = "loading" === tmp.type;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildOrStatus",
    value(arg0) {
      return outer1_6[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVersion",
    value() {
      return outer1_5;
    }
  };
  return callback(BasicGuildStore, items);
})(require("initialize").Store);
tmp2.displayName = "BasicGuildStore";
tmp2 = new tmp2(require("dispatcher"), {
  BASIC_GUILD_FETCH: function handleBasicGuildFetch(guildId) {
    closure_6[guildId.guildId] = { type: "loading" };
    return false;
  },
  BASIC_GUILD_FETCH_SUCCESS: function handleBasicGuildFetchSuccess(guildId) {
    closure_6[guildId.guildId] = guildId.guildInfo;
    closure_5 = closure_5 + 1;
  },
  BASIC_GUILD_FETCH_FAILURE: function handleBasicGuildFetchFailure(guildId) {
    closure_6[guildId.guildId] = { type: "failed" };
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild/BasicGuildStore.tsx");

export default tmp2;
