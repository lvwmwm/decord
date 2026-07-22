// Module ID: 16135
// Function ID: 124377
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16135 (_isNativeReflectConstruct)
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
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = {};
let closure_8 = {};
let closure_9 = 0;
let importDefaultResult = importDefault(dependencyMap[7]);
let obj = { max: 5, maxAge: importDefault(dependencyMap[8]).Millis.HOUR };
importDefaultResult = new importDefaultResult(obj);
let tmp4 = (Store) => {
  class GuildSettingsEmojiStore {
    constructor() {
      self = this;
      tmp = GuildSettingsEmojiStore(this, GuildSettingsEmojiStore);
      obj = closure_3(GuildSettingsEmojiStore);
      tmp2 = closure_2;
      if (closure_11()) {
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
  let closure_0 = GuildSettingsEmojiStore;
  callback2(GuildSettingsEmojiStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_6);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isUploadingEmoji",
    value() {
      return closure_9 > 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "getEmojiRevision",
    value(arg0) {
      let num = 0;
      if (null != closure_7[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEmojis",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  items[4] = {
    key: "getEmojiRawAsset",
    value(arg0) {
      return closure_10.get(arg0);
    }
  };
  return callback(GuildSettingsEmojiStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp4.displayName = "GuildSettingsEmojiStore";
obj = {
  EMOJI_DELETE: function handleEmojiDelete(arg0) {
    let guildId;
    ({ guildId, emojiId: closure_0 } = arg0);
    closure_8[guildId] = closure_8[guildId].filter((id) => id.id !== closure_0);
  },
  EMOJI_FETCH_SUCCESS: function handleFetchSuccess(emojis) {
    emojis = emojis.emojis;
    closure_8[emojis.guildId] = emojis.map((arg0) => new closure_5(arg0));
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
    if (null != closure_7[guildId]) {
      num = tmp2;
    }
    closure_7[guildId] = num + 1;
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[10]), obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_settings/GuildSettingsEmojiStore.tsx");

export default tmp4;
