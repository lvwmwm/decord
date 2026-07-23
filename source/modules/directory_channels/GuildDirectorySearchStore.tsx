// Module ID: 10033
// Function ID: 77499
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10034, 566, 686, 2]

// Module 10033 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = [];
let closure_8 = {};
let closure_9 = {};
let tmp2 = ((Store) => {
  class GuildDirectorySearchStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildDirectorySearchStore);
      obj = outer1_5(GuildDirectorySearchStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildDirectorySearchStore, Store);
  let obj = {
    key: "getSearchState",
    value(arg0) {
      let obj = outer1_8[arg0];
      if (null == obj) {
        obj = { mostRecentQuery: "", fetching: false };
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getSearchResults",
    value(arg0, arg1) {
      let results;
      if (null != outer1_9[arg0]) {
        if (null != tmp[arg1]) {
          results = tmp4.results;
        }
      }
      if (null == results) {
        results = outer1_7;
      }
      return results;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldFetch",
    value(arg0, arg1) {
      let lastSearchedAt;
      if (null != outer1_9[arg0]) {
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
})(require("initialize").Store);
tmp2.displayName = "GuildDirectorySearchStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_DIRECTORY_SEARCH_START: function handleSearchStart(mostRecentQuery) {
    closure_8[mostRecentQuery.channelId] = { fetching: true, mostRecentQuery: mostRecentQuery.query };
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function handleSearchSuccess(query, messages) {
    let channelId;
    let results;
    ({ channelId, results } = query);
    let obj = {};
    const merged = Object.assign(dependencyMap[channelId]);
    obj["fetching"] = false;
    dependencyMap[channelId] = obj;
    const items = [];
    const item = results.forEach((entry) => {
      items.push(items(outer1_1[5]).guildDirectoryEntryFromServer(entry));
    });
    obj = {};
    const merged1 = Object.assign(dependencyMap2[channelId]);
    obj = { results: items(10034).orderByTotalMemberCount(items), lastSearchedAt: Date.now() };
    obj[query.query] = obj;
    dependencyMap2[channelId] = obj;
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function handleSearchFailure(error) {
    const channelId = error.channelId;
    const obj = {};
    const merged = Object.assign(dependencyMap[channelId]);
    obj["fetching"] = false;
    dependencyMap[channelId] = obj;
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function handleSearchClear(channelId) {
    closure_8[channelId.channelId] = { fetching: false, mostRecentQuery: "" };
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function handleUpdateQuery(mostRecentQuery) {
    closure_8[mostRecentQuery.channelId] = { fetching: false, mostRecentQuery: mostRecentQuery.query };
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    let channelId;
    let require;
    ({ channelId, guildId: require } = arg0);
    let mostRecentQuery;
    if (null != dependencyMap[channelId]) {
      mostRecentQuery = tmp.mostRecentQuery;
    }
    if (null != mostRecentQuery) {
      if (null != dependencyMap2[channelId][mostRecentQuery]) {
        const results = tmp4.results;
        let obj = {};
        const found = results.filter((guildId) => guildId.guildId !== closure_0);
        const merged = Object.assign(dependencyMap2[channelId]);
        obj = {};
        const merged1 = Object.assign(tmp4);
        obj["results"] = found;
        obj[dependencyMap[channelId].mostRecentQuery] = obj;
        dependencyMap2[channelId] = obj;
      }
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/directory_channels/GuildDirectorySearchStore.tsx");

export default tmp2;
