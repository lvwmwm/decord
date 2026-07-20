// Module ID: 12500
// Function ID: 95825
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12500 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getOrCreateSearchCountState(query) {
  let value = map.get(query);
  if (null == value) {
    const prototype = ctor.prototype;
    value = new ctor();
  }
  const result = map.set(query, value);
  return value;
}
function withSearchCountState(arg0, arg1) {
  const value = map.get(arg0);
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
const map = new Map();
let closure_8 = () => {
  class SearchCountState {
    constructor() {
      tmp = closure_5(this, SearchCountState);
      this.isInitialFetchComplete = false;
      this.isFetching = false;
      this.error = null;
      this.counts = null;
      return;
    }
  }
  const arg1 = SearchCountState;
  let obj = {
    key: "handleSearchCountStart",
    value() {
      this.error = null;
      this.isFetching = true;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handleSearchCountSuccess",
    value(counts) {
      this.counts = counts;
      this.isFetching = false;
      this.isInitialFetchComplete = true;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleSearchCountFailure",
    value(arg0) {
      const aPIError = new SearchCountState(closure_1[5]).APIError(arg0);
      this.error = aPIError;
      this.isFetching = false;
    }
  };
  items[2] = obj;
  return callback2(SearchCountState, items);
}();
let tmp3 = (Store) => {
  class GlobalDiscoveryServersSearchCountStore {
    constructor() {
      self = this;
      tmp = closure_5(this, GlobalDiscoveryServersSearchCountStore);
      obj = closure_3(GlobalDiscoveryServersSearchCountStore);
      tmp2 = closure_2;
      if (closure_9()) {
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
  const arg1 = GlobalDiscoveryServersSearchCountStore;
  callback(GlobalDiscoveryServersSearchCountStore, Store);
  let obj = {
    key: "getIsInitialFetchComplete",
    value(arg0) {
      return callback4(arg0, (isInitialFetchComplete) => isInitialFetchComplete.isInitialFetchComplete);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getIsFetchingCounts",
    value(arg0) {
      return callback4(arg0, (isFetching) => isFetching.isFetching);
    }
  };
  items[1] = obj;
  obj = {
    key: "getCounts",
    value(arg0) {
      return callback4(arg0, (counts) => counts.counts);
    }
  };
  items[2] = obj;
  return callback2(GlobalDiscoveryServersSearchCountStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp3.displayName = "GlobalDiscoveryServersSearchCountStore";
tmp3 = new tmp3(importDefault(dependencyMap[7]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function handleGlobalDiscoveryServersSearchCountStart(query) {
    const result = getOrCreateSearchCountState(query.query).handleSearchCountStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    const result = getOrCreateSearchCountState(query.query).handleSearchCountSuccess(query.categoryCounts);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function handleGlobalDiscoveryServersSearchCountFailure(query) {
    const result = getOrCreateSearchCountState(query.query).handleSearchCountFailure(query.error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    const arg1 = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((arg0, arg1) => {
      if (!set.has(arg1)) {
        set.delete(arg1);
      }
    });
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx");

export default tmp3;
