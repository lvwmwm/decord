// Module ID: 11398
// Function ID: 88639
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11398 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const Permissions = arg1(dependencyMap[6]).Permissions;
let closure_11 = [];
let closure_12 = () => {
  class GuildMemberSearchManager {
    constructor() {
      GuildMemberSearchManager = this;
      tmp = closure_7(this, GuildMemberSearchManager);
      this.count = null;
      this.isFetching = false;
      this.searchQueryString = "";
      this.targetChannelId = null;
      this.results = [];
      this.onAutocompleterResultsChange = (arr) => {
        if (arg1 === self.searchQueryString) {
          self.isFetching = false;
          let items = [];
          const self = items;
          const channel2 = channel.getChannel(self.targetChannelId);
          const item = arr.forEach((type) => {
            if (type.type === items(closure_3[7]).AutocompleterResultTypes.USER) {
              if (null != closure_1) {
                let obj = callback(closure_3[8]);
                obj = { permission: constants.VIEW_CHANNEL, user: type.record, context: closure_1 };
              }
              items.push(type);
            }
          });
          self.results = items;
          if (self.searchQueryString.length > 0) {
            self.count = items.length;
          } else {
            self.count = null;
          }
          items = closure_14;
          closure_14.emitChange();
        }
      };
      tmp2 = closure_1(closure_3[7]);
      items = [];
      items[0] = GuildMemberSearchManager(closure_3[7]).AutocompleterResultTypes.USER;
      tmp2 = new tmp2(this.onAutocompleterResultsChange, items, 50);
      this.autocompleter = tmp2;
      autocompleter = this.autocompleter;
      searchContext = autocompleter.createSearchContext();
      return;
    }
  }
  const arg1 = GuildMemberSearchManager;
  let obj = {
    key: "setAutocompleteOptions",
    value(arg0) {
      const autocompleter = this.autocompleter;
      autocompleter.setOptions(arg0);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "teardown",
    value() {
      const autocompleter = this.autocompleter;
      autocompleter.clean();
    }
  };
  items[1] = obj;
  obj = {
    key: "search",
    value(arg0, targetChannelId, str) {
      this.targetChannelId = targetChannelId;
      this.isFetching = true;
      const trimmed = str.toLowerCase().trim();
      this.searchQueryString = trimmed;
      str = str.toLowerCase();
      const members = callback(closure_3[9]).requestMembers(arg0, trimmed, 50);
      const autocompleter = this.autocompleter;
      autocompleter.search(trimmed);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getResults",
    value() {
      return this.results;
    }
  };
  items[4] = {
    key: "getCount",
    value() {
      return this.count;
    }
  };
  items[5] = {
    key: "getIsFetching",
    value() {
      return this.isFetching;
    }
  };
  return callback2(GuildMemberSearchManager, items);
}();
const map = new Map();
let tmp3 = (Store) => {
  class SearchGuildMemberTabStoreImpl {
    constructor() {
      self = this;
      tmp = closure_7(this, SearchGuildMemberTabStoreImpl);
      obj = closure_5(SearchGuildMemberTabStoreImpl);
      tmp2 = closure_4;
      if (closure_15()) {
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
  const arg1 = SearchGuildMemberTabStoreImpl;
  callback(SearchGuildMemberTabStoreImpl, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getResults",
    value(arg0) {
      const value = store.get(arg0);
      let results;
      if (null != value) {
        results = value.getResults();
      }
      if (null == results) {
        results = closure_11;
      }
      return results;
    }
  };
  items[1] = obj;
  obj = {
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
  items[2] = obj;
  items[3] = {
    key: "getIsFetching",
    value(arg0) {
      const value = store.get(arg0);
      let isFetching;
      if (null != value) {
        isFetching = value.getIsFetching();
      }
      return null != isFetching && isFetching;
    }
  };
  return callback2(SearchGuildMemberTabStoreImpl, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "SearchGuildMemberTabStore";
tmp3 = new tmp3(importDefault(dependencyMap[11]), {
  SEARCH_GUILD_MEMBER_TAB_SEARCH: function handleSearchGuildMemberTabSearch(arg0) {
    let channelId;
    let guildId;
    let id;
    let searchQueryString;
    let threadId;
    ({ id, guildId, threadId } = arg0);
    ({ channelId, searchQueryString } = arg0);
    let value = map.get(id);
    if (null == value) {
      const prototype = ctor.prototype;
      value = new ctor();
    }
    const result = map.set(id, value);
    let obj = { radius: null, withMutualGuilds: null };
    obj = { guild: guildId, strict: true };
    let tmp5;
    if (null != threadId) {
      tmp5 = threadId;
    }
    obj.thread = tmp5;
    obj.userFilters = obj;
    const result1 = value.setAutocompleteOptions(obj);
    value.search(guildId, channelId, searchQueryString);
  },
  SEARCH_GUILD_MEMBER_TAB_CLEANUP: function handleSearchGuildMemberTabCleanup(id) {
    id = id.id;
    const value = map.get(id);
    if (null != value) {
      value.teardown();
    }
    map.delete(id);
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/search/native/stores/SearchMemberTabStore.tsx");

export default tmp3;
