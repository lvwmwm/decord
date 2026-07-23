// Module ID: 4994
// Function ID: 43196
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 4994 (_isNativeReflectConstruct)
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
let obj = { topEmojisByGuildId: {} };
let closure_7 = {};
let tmp2 = ((PersistedStore) => {
  class TopEmojiStore {
    constructor() {
      self = this;
      tmp = TopEmojiStore(this, TopEmojiStore);
      obj = outer1_3(TopEmojiStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(TopEmojiStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = outer1_5;
      }
      const outer1_6 = tmp;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTopEmojiIdsByGuildId",
    value(arg0) {
      return outer1_6.topEmojisByGuildId[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsFetching",
    value(arg0) {
      return outer1_7[arg0];
    }
  };
  return callback(TopEmojiStore, items);
})(require("initialize").PersistedStore);
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
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/emojis/top_emojis/TopEmojiStore.tsx");

export default tmp2;
