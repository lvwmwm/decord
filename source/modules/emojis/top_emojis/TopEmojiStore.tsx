// Module ID: 5263
// Function ID: 44720
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5263 (_isNativeReflectConstruct)
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
let obj = { topEmojisByGuildId: {} };
let closure_7 = {};
let tmp2 = (PersistedStore) => {
  class TopEmojiStore {
    constructor() {
      self = this;
      tmp = TopEmojiStore(this, TopEmojiStore);
      obj = closure_3(TopEmojiStore);
      tmp2 = closure_2;
      if (closure_8()) {
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
  let closure_0 = TopEmojiStore;
  callback2(TopEmojiStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_5;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTopEmojiIdsByGuildId",
    value(arg0) {
      return topEmojisByGuildId.topEmojisByGuildId[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsFetching",
    value(arg0) {
      return closure_7[arg0];
    }
  };
  return callback(TopEmojiStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "TopEmojiStore";
tmp2.persistKey = "TopEmojiStore";
obj = {
  LOGOUT: function handleLogout() {
    let closure_6 = obj;
    let closure_7 = {};
  },
  TOP_EMOJIS_FETCH: function handleTopEmojiFetching(guildId) {
    closure_7[guildId.guildId] = true;
  },
  TOP_EMOJIS_FETCH_SUCCESS: function handleTopEmojisLoaded(arg0) {
    let guildId;
    let topEmojisMetadata;
    ({ guildId, topEmojisMetadata } = arg0);
    obj.topEmojisByGuildId[guildId] = topEmojisMetadata.map((emojiId) => emojiId.emojiId);
    closure_7[guildId] = false;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/emojis/top_emojis/TopEmojiStore.tsx");

export default tmp2;
