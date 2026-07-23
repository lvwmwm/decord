// Module ID: 16252
// Function ID: 126550
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 16253, 3947, 1362, 664, 566, 686, 2]

// Module 16252 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import priv from "priv";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult from "priv";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = {};
let closure_8 = {};
let c9 = 0;
let obj = { max: 5, maxAge: require("set").Millis.HOUR };
importDefaultResult = new importDefaultResult(obj);
let tmp4 = ((Store) => {
  class GuildSettingsEmojiStore {
    constructor() {
      self = this;
      tmp = GuildSettingsEmojiStore(this, GuildSettingsEmojiStore);
      obj = outer1_3(GuildSettingsEmojiStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
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
  callback2(GuildSettingsEmojiStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_6);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isUploadingEmoji",
    value() {
      return outer1_9 > 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "getEmojiRevision",
    value(arg0) {
      let num = 0;
      if (null != outer1_7[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEmojis",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  items[4] = {
    key: "getEmojiRawAsset",
    value(arg0) {
      return outer1_10.get(arg0);
    }
  };
  return callback(GuildSettingsEmojiStore, items);
})(require("initialize").Store);
tmp4.displayName = "GuildSettingsEmojiStore";
obj = {
  EMOJI_DELETE: function handleEmojiDelete(arg0) {
    let _isNativeReflectConstruct;
    let guildId;
    ({ guildId, emojiId: _isNativeReflectConstruct } = arg0);
    table2[guildId] = table2[guildId].filter((id) => id.id !== _isNativeReflectConstruct);
  },
  EMOJI_FETCH_SUCCESS: function handleFetchSuccess(emojis) {
    emojis = emojis.emojis;
    closure_8[emojis.guildId] = emojis.map((arg0) => new outer1_5(arg0));
  },
  EMOJI_FETCH_FAILURE: function handleFetchFailure(guildId) {
    closure_8[guildId.guildId] = [];
  },
  EMOJI_UPLOAD_START: function handleStartUploading() {
    closure_9 = closure_9 + 1;
  },
  EMOJI_UPLOAD_STOP: function handleStopUploading() {
    closure_9 = closure_9 - 1;
  },
  EMOJI_CACHE_RAW_EMOJI_ASSET: function handleCacheRawEmojiAsset(emojiId) {
    const result = importDefaultResult.set(emojiId.emojiId, emojiId.userImage);
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdate(guildId) {
    guildId = guildId.guildId;
    let num = 0;
    if (null != table[guildId]) {
      num = tmp2;
    }
    table[guildId] = num + 1;
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/GuildSettingsEmojiStore.tsx");

export default tmp4;
