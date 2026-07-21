// Module ID: 10024
// Function ID: 77435
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10024 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = [];
let closure_8 = {};
let closure_9 = {};
let tmp2 = (Store) => {
  class GuildDirectorySearchStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildDirectorySearchStore);
      obj = closure_5(GuildDirectorySearchStore);
      tmp2 = closure_4;
      if (closure_10()) {
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
  const arg1 = GuildDirectorySearchStore;
  callback2(GuildDirectorySearchStore, Store);
  let obj = {
    key: "getSearchState",
    value(arg0) {
      let obj = closure_8[arg0];
      if (null == obj) {
        obj = {};
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getSearchResults",
    value(arg0, arg1) {
      let results;
      if (null != closure_9[arg0]) {
        if (null != tmp[arg1]) {
          results = tmp4.results;
        }
      }
      if (null == results) {
        results = closure_7;
      }
      return results;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldFetch",
    value(arg0, arg1) {
      let lastSearchedAt;
      if (null != closure_9[arg0]) {
        if (null != tmp[arg1]) {
          lastSearchedAt = tmp4.lastSearchedAt;
        }
      }
      let tmp5 = null == lastSearchedAt;
      if (!tmp5) {
        const _Date = Date;
        tmp5 = Date.now() - lastSearchedAt > 120000;
      }
      return tmp5;
    }
  };
  items[2] = obj;
  return callback(GuildDirectorySearchStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "GuildDirectorySearchStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  GUILD_DIRECTORY_SEARCH_START: function handleSearchStart(mostRecentQuery) {
    closure_8[mostRecentQuery.channelId] = { fetching: true, mostRecentQuery: mostRecentQuery.query };
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function handleSearchSuccess(query, messages) {
    let channelId;
    let results;
    ({ channelId, results } = query);
    let obj = {};
    const merged = Object.assign(closure_8[channelId]);
    obj["fetching"] = false;
    closure_8[channelId] = obj;
    const items = [];
    messages = items;
    const item = results.forEach((entry) => {
      items.push(items(closure_1[5]).guildDirectoryEntryFromServer(entry));
    });
    obj = {};
    const merged1 = Object.assign(closure_9[channelId]);
    obj = { results: messages(dependencyMap[5]).orderByTotalMemberCount(items), lastSearchedAt: Date.now() };
    obj[query.query] = obj;
    closure_9[channelId] = obj;
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function handleSearchFailure(error) {
    const channelId = error.channelId;
    const obj = {};
    const merged = Object.assign(closure_8[channelId]);
    obj["fetching"] = false;
    closure_8[channelId] = obj;
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function handleSearchClear(channelId) {
    closure_8[channelId.channelId] = { "Bool(true)": null, "Bool(true)": false };
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function handleUpdateQuery(mostRecentQuery) {
    closure_8[mostRecentQuery.channelId] = { fetching: false, mostRecentQuery: mostRecentQuery.query };
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    let channelId;
    ({ channelId, guildId: closure_0 } = arg0);
    let mostRecentQuery;
    if (null != closure_8[channelId]) {
      mostRecentQuery = tmp.mostRecentQuery;
    }
    if (null != mostRecentQuery) {
      if (null != closure_9[channelId][mostRecentQuery]) {
        const results = tmp4.results;
        let obj = {};
        const found = results.filter((guildId) => guildId.guildId !== closure_0);
        const merged = Object.assign(closure_9[channelId]);
        obj = {};
        const merged1 = Object.assign(tmp4);
        obj["results"] = found;
        obj[closure_8[channelId].mostRecentQuery] = obj;
        closure_9[channelId] = obj;
      }
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/directory_channels/GuildDirectorySearchStore.tsx");

export default tmp2;
