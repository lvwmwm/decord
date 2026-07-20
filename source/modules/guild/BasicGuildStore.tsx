// Module ID: 7633
// Function ID: 61129
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7633 (_isNativeReflectConstruct)
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
let closure_5 = 0;
let closure_6 = {};
let tmp2 = (Store) => {
  class BasicGuildStore {
    constructor() {
      self = this;
      tmp = BasicGuildStore(this, BasicGuildStore);
      obj = closure_3(BasicGuildStore);
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
  let closure_0 = BasicGuildStore;
  callback2(BasicGuildStore, Store);
  let obj = {
    key: "getGuild",
    value(arg0) {
      if (null != closure_6[arg0]) {
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
      return closure_6[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVersion",
    value() {
      return closure_5;
    }
  };
  return callback(BasicGuildStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "BasicGuildStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
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
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild/BasicGuildStore.tsx");

export default tmp2;
