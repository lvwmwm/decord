// Module ID: 11390
// Function ID: 88581
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11390 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ GUILD_VOCAL_CHANNELS_KEY: closure_8, GUILD_SELECTABLE_CHANNELS_KEY: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[6]);
arg1(dependencyMap[7]).AutocompleterResultTypes;
let closure_12 = [];
let closure_13 = [];
let closure_14 = () => {
  class GuildChannelSearchManager {
    constructor() {
      tmp = closure_6(this, GuildChannelSearchManager);
      this.count = null;
      this.textChannels = [];
      this.voiceChannels = [];
      return;
    }
  }
  const arg1 = GuildChannelSearchManager;
  let obj = {
    key: "search",
    value(query, guildId) {
      const self = this;
      let obj = GuildChannelSearchManager(closure_2[8]);
      const boosterMap = obj.getBoosterMap(constants.TEXT_CHANNEL);
      let obj1 = GuildChannelSearchManager(closure_2[8]);
      obj = {
        query,
        guildId,
        filter() {
          return true;
        }
      };
      const boosterMap1 = obj1.getBoosterMap(constants.VOICE_CHANNEL);
      obj = {};
      const merged = Object.assign(obj);
      obj["type"] = closure_9;
      obj["boosters"] = boosterMap;
      const obj4 = callback(closure_2[8]);
      const queryChannelsResult = callback(closure_2[8]).queryChannels(obj);
      obj1 = {};
      const merged1 = Object.assign(obj);
      obj1["type"] = closure_8;
      obj1["boosters"] = boosterMap1;
      const obj6 = callback(closure_2[8]);
      this.voiceChannels = callback(closure_2[8]).queryChannels(obj1).map((channel) => ({ channel: channel.record }));
      const queryChannelsResult1 = callback(closure_2[8]).queryChannels(obj1);
      const obj8 = GuildChannelSearchManager(closure_2[9]);
      const mapped = GuildChannelSearchManager(closure_2[9]).chain(queryChannelsResult).map((channel) => {
        const obj = { channel: channel.record };
        let lastMessageId = closure_10.lastMessageId(channel.record.id);
        if (null == lastMessageId) {
          lastMessageId = channel.record.lastMessageId;
        }
        obj.lastMessageId = lastMessageId;
        return obj;
      });
      const chainResult = GuildChannelSearchManager(closure_2[9]).chain(queryChannelsResult);
      this.textChannels = mapped.sort((lastMessageId, lastMessageId2) => callback(closure_2[10]).compare(lastMessageId2.lastMessageId, lastMessageId.lastMessageId)).value();
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
}();
const map = new Map();
let tmp4 = (Store) => {
  class SearchGuildChannelTabStore {
    constructor() {
      self = this;
      tmp = closure_6(this, SearchGuildChannelTabStore);
      obj = closure_4(SearchGuildChannelTabStore);
      tmp2 = closure_3;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SearchGuildChannelTabStore;
  callback(SearchGuildChannelTabStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getTextChannels",
    value(arg0) {
      const value = store.get(arg0);
      let textChannels;
      if (null != value) {
        textChannels = value.getTextChannels();
      }
      if (null == textChannels) {
        textChannels = closure_12;
      }
      return textChannels;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceChannels",
    value(arg0) {
      const value = store.get(arg0);
      let voiceChannels;
      if (null != value) {
        voiceChannels = value.getVoiceChannels();
      }
      if (null == voiceChannels) {
        voiceChannels = closure_13;
      }
      return voiceChannels;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCount",
    value(arg0) {
      const value = store.get(arg0);
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
}(importDefault(dependencyMap[11]).Store);
tmp4.displayName = "SearchGuildChannelTabStore";
tmp4 = new tmp4(importDefault(dependencyMap[12]), {
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
const obj = {
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
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/search/native/stores/SearchGuildChannelTabStore.tsx");

export default tmp4;
