// Module ID: 12516
// Function ID: 95933
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12516 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getSearchStateId(query) {
  const items = [closure_7, query.query, closure_8, query.categoryId, closure_9, query.languageCode];
  return items.join("-");
}
function getOrCreateSearchState(query) {
  const tmp = getSearchStateId(query);
  let value = map.get(tmp);
  if (null == value) {
    const obj = { query: query.query };
    const prototype = ctor.prototype;
    value = new ctor(obj);
  }
  const result = map.set(tmp, value);
  return value;
}
function withSearchState(query) {
  const value = map.get(getSearchStateId(query));
  let tmp2 = null;
  if (null != value) {
    tmp2 = arg1(value);
  }
  return tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ SEARCH_RESULTS_QUERY_PREFIX: closure_7, SEARCH_RESULTS_CATEGORY_PREFIX: closure_8, SEARCH_RESULTS_LANGUAGE_CODE_PREFIX: closure_9 } = arg1(dependencyMap[5]));
const map = new Map();
const map1 = new Map();
let closure_12 = () => {
  class SearchState {
    constructor(arg0) {
      tmp = closure_5(this, SearchState);
      this.guildIds = [];
      this.error = null;
      this.offset = null;
      this.total = null;
      this.isFetching = false;
      this.isInitialFetchComplete = false;
      this.lastFetchTimestamp = null;
      this.query = arg0.query;
      return;
    }
  }
  const arg1 = SearchState;
  let obj = {
    key: "handleSearchStart",
    value() {
      this.error = null;
      this.isFetching = true;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handleSearchFailure",
    value(arg0) {
      this.isFetching = false;
      this.isInitialFetchComplete = true;
      const aPIError = new SearchState(closure_1[6]).APIError(arg0);
      this.error = aPIError;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleSearchSuccess",
    value(arg0) {
      let guilds;
      let total;
      const self = this;
      ({ total, guilds } = arg0);
      let SearchState;
      this.error = null;
      this.isFetching = false;
      this.isInitialFetchComplete = true;
      this.lastFetchTimestamp = Date.now();
      if (null != total) {
        self.total = total;
      }
      const items = [...self.guildIds];
      SearchState = items;
      const item = guilds.forEach((id) => items.push(id.id));
      self.guildIds = items;
      self.offset = items.length;
    }
  };
  items[2] = obj;
  return callback2(SearchState, items);
}();
let tmp5 = (Store) => {
  class GlobalDiscoveryServersSearchResultsStore {
    constructor() {
      self = this;
      tmp = closure_5(this, GlobalDiscoveryServersSearchResultsStore);
      obj = closure_3(GlobalDiscoveryServersSearchResultsStore);
      tmp2 = closure_2;
      if (closure_13()) {
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
  const arg1 = GlobalDiscoveryServersSearchResultsStore;
  callback(GlobalDiscoveryServersSearchResultsStore, Store);
  let obj = {
    key: "getGuild",
    value(arg0) {
      return closure_11.get(arg0);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getGuildIds",
    value(arg0) {
      return callback4(arg0, (guildIds) => guildIds.guildIds);
    }
  };
  items[1] = obj;
  obj = {
    key: "getIsFetching",
    value(arg0) {
      return callback4(arg0, (isFetching) => isFetching.isFetching);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsInitialFetchComplete",
    value(arg0) {
      return callback4(arg0, (isInitialFetchComplete) => isInitialFetchComplete.isInitialFetchComplete);
    }
  };
  items[4] = {
    key: "getOffset",
    value(arg0) {
      return callback4(arg0, (offset) => offset.offset);
    }
  };
  items[5] = {
    key: "getTotal",
    value(arg0) {
      return callback4(arg0, (total) => total.total);
    }
  };
  items[6] = {
    key: "getLastFetchTimestamp",
    value(arg0) {
      return callback4(arg0, (lastFetchTimestamp) => lastFetchTimestamp.lastFetchTimestamp);
    }
  };
  items[7] = {
    key: "getError",
    value(arg0) {
      return callback4(arg0, (error) => error.error);
    }
  };
  items[8] = {
    key: "getErrorMessage",
    value(arg0) {
      return callback4(arg0, (error) => {
        error = error.error;
        let anyErrorMessage;
        if (null != error) {
          anyErrorMessage = error.getAnyErrorMessage();
        }
        return anyErrorMessage;
      });
    }
  };
  return callback2(GlobalDiscoveryServersSearchResultsStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp5.displayName = "GlobalDiscoveryServersSearchResultsStore";
tmp5 = new tmp5(importDefault(dependencyMap[8]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function handleGlobalDiscoveryServersSearchStart(reset) {
    let categoryId;
    let languageCode;
    let query;
    ({ query, categoryId, languageCode } = reset);
    if (reset.reset) {
      map.delete(tmp);
    }
    getOrCreateSearchState({ query, categoryId, languageCode }).handleSearchStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function handleGlobalDiscoveryServersSearchSuccess(total) {
    const guilds = total.guilds;
    getOrCreateSearchState({ query: total.query, categoryId: total.categoryId, languageCode: total.languageCode }).handleSearchSuccess({ total: total.total, guilds });
    const item = guilds.forEach((id) => {
      const result = closure_11.set(id.id, id);
    });
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function handleGlobalDiscoveryServersSearchFailure(query) {
    getOrCreateSearchState({ query: query.query, categoryId: query.categoryId, languageCode: query.languageCode }).handleSearchFailure(query.error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    const arg1 = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((query) => {
      if (null != query.query) {
        if (!set.has(query.query)) {
          set.delete(arg1);
        }
      }
    });
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleGuildProfileFetchSuccess(arg0) {
    let guildId;
    let profile;
    ({ guildId, profile } = arg0);
    const value = map1.get(guildId);
    if (null == value) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(value);
      let memberCount = profile.memberCount;
      if (null == memberCount) {
        memberCount = value.memberCount;
      }
      obj["memberCount"] = memberCount;
      let presenceCount = profile.onlineCount;
      if (null == presenceCount) {
        presenceCount = value.presenceCount;
      }
      obj["presenceCount"] = presenceCount;
      const result = map1.set(guildId, obj);
    }
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function handleGlobalDiscoveryServersSearchStart(reset) {
    let categoryId;
    let languageCode;
    let query;
    ({ query, categoryId, languageCode } = reset);
    if (reset.reset) {
      map.delete(tmp);
    }
    getOrCreateSearchState({ query, categoryId, languageCode }).handleSearchStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function handleGlobalDiscoveryServersSearchSuccess(total) {
    const guilds = total.guilds;
    getOrCreateSearchState({ query: total.query, categoryId: total.categoryId, languageCode: total.languageCode }).handleSearchSuccess({ total: total.total, guilds });
    const item = guilds.forEach((id) => {
      const result = closure_11.set(id.id, id);
    });
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function handleGlobalDiscoveryServersSearchFailure(query) {
    getOrCreateSearchState({ query: query.query, categoryId: query.categoryId, languageCode: query.languageCode }).handleSearchFailure(query.error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    const arg1 = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((query) => {
      if (null != query.query) {
        if (!set.has(query.query)) {
          set.delete(arg1);
        }
      }
    });
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleGuildProfileFetchSuccess(arg0) {
    let guildId;
    let profile;
    ({ guildId, profile } = arg0);
    const value = map1.get(guildId);
    if (null == value) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(value);
      let memberCount = profile.memberCount;
      if (null == memberCount) {
        memberCount = value.memberCount;
      }
      obj["memberCount"] = memberCount;
      let presenceCount = profile.onlineCount;
      if (null == presenceCount) {
        presenceCount = value.presenceCount;
      }
      obj["presenceCount"] = presenceCount;
      const result = map1.set(guildId, obj);
    }
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx");

export default tmp5;
