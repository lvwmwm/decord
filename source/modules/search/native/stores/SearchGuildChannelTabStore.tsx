// Module ID: 11436
// Function ID: 88919
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 1907, 4142, 5043, 4974, 22, 21, 566, 686, 2]

// Module 11436 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_6 from "_isNativeReflectConstruct";
import HeaderRecord from "HeaderRecord";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";

let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ GUILD_VOCAL_CHANNELS_KEY: closure_8, GUILD_SELECTABLE_CHANNELS_KEY: closure_9 } = _isNativeReflectConstruct);
require("HeaderRecord").AutocompleterResultTypes;
let closure_12 = [];
let closure_13 = [];
let closure_14 = (() => {
  class GuildChannelSearchManager {
    constructor() {
      tmp = outer1_6(this, GuildChannelSearchManager);
      this.count = null;
      this.textChannels = [];
      this.voiceChannels = [];
      return;
    }
  }
  let obj = {
    key: "search",
    value(query, guildId) {
      const self = this;
      let obj = GuildChannelSearchManager(outer1_2[8]);
      const boosterMap = obj.getBoosterMap(outer1_11.TEXT_CHANNEL);
      let obj1 = GuildChannelSearchManager(outer1_2[8]);
      obj = {
        query,
        guildId,
        limit: 1000,
        allowEmptyQueries: true,
        allowSnowflake: true,
        fuzzy: false,
        filter() {
          return true;
        }
      };
      const boosterMap1 = obj1.getBoosterMap(outer1_11.VOICE_CHANNEL);
      obj = {};
      const merged = Object.assign(obj);
      obj["type"] = outer1_9;
      obj["boosters"] = boosterMap;
      const obj4 = outer1_1(outer1_2[8]);
      const queryChannelsResult = outer1_1(outer1_2[8]).queryChannels(obj);
      obj1 = {};
      const merged1 = Object.assign(obj);
      obj1["type"] = outer1_8;
      obj1["boosters"] = boosterMap1;
      const obj6 = outer1_1(outer1_2[8]);
      this.voiceChannels = outer1_1(outer1_2[8]).queryChannels(obj1).map((channel) => ({ channel: channel.record }));
      const queryChannelsResult1 = outer1_1(outer1_2[8]).queryChannels(obj1);
      const obj8 = GuildChannelSearchManager(outer1_2[9]);
      const mapped = GuildChannelSearchManager(outer1_2[9]).chain(queryChannelsResult).map((channel) => {
        const obj = { channel: channel.record };
        let lastMessageId = outer2_10.lastMessageId(channel.record.id);
        if (null == lastMessageId) {
          lastMessageId = channel.record.lastMessageId;
        }
        obj.lastMessageId = lastMessageId;
        return obj;
      });
      const chainResult = GuildChannelSearchManager(outer1_2[9]).chain(queryChannelsResult);
      this.textChannels = mapped.sort((lastMessageId, lastMessageId2) => outer2_1(outer2_2[10]).compare(lastMessageId2.lastMessageId, lastMessageId.lastMessageId)).value();
      if (query.length > 0) {
        self.count = self.textChannels.length + self.voiceChannels.length;
      } else {
        self.count = null;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getTextChannels",
    value() {
      return this.textChannels;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceChannels",
    value() {
      return this.voiceChannels;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCount",
    value() {
      return this.count;
    }
  };
  return callback2(GuildChannelSearchManager, items);
})();
const map = new Map();
let tmp4 = ((Store) => {
  class SearchGuildChannelTabStore {
    constructor() {
      self = this;
      tmp = outer1_6(this, SearchGuildChannelTabStore);
      obj = outer1_4(SearchGuildChannelTabStore);
      tmp2 = outer1_3;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(SearchGuildChannelTabStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getTextChannels",
    value(arg0) {
      const value = outer1_15.get(arg0);
      let textChannels;
      if (null != value) {
        textChannels = value.getTextChannels();
      }
      if (null == textChannels) {
        textChannels = outer1_12;
      }
      return textChannels;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceChannels",
    value(arg0) {
      const value = outer1_15.get(arg0);
      let voiceChannels;
      if (null != value) {
        voiceChannels = value.getVoiceChannels();
      }
      if (null == voiceChannels) {
        voiceChannels = outer1_13;
      }
      return voiceChannels;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCount",
    value(arg0) {
      const value = outer1_15.get(arg0);
      let count;
      if (null != value) {
        count = value.getCount();
      }
      let tmp2 = null;
      if (null != count) {
        tmp2 = count;
      }
      return tmp2;
    }
  };
  return callback2(SearchGuildChannelTabStore, items);
})(require("initialize").Store);
tmp4.displayName = "SearchGuildChannelTabStore";
tmp4 = new tmp4(require("dispatcher"), {
  SEARCH_GUILD_CHANNEL_TAB_SEARCH: function handleSearchGuildChannelTabSearch(id) {
    let guildId;
    let searchQueryString;
    id = id.id;
    ({ guildId, searchQueryString } = id);
    let value = map.get(id);
    if (null == value) {
      const prototype = ctor.prototype;
      value = new ctor();
    }
    const result = map.set(id, value);
    value.search(searchQueryString, guildId);
  },
  SEARCH_GUILD_CHANNEL_TAB_CLEANUP: function handleSearchGuildChannelTabCleanup(id) {
    return map.delete(id.id);
  }
});
let result = require("_inherits").fileFinishedImporting("modules/search/native/stores/SearchGuildChannelTabStore.tsx");

export default tmp4;
