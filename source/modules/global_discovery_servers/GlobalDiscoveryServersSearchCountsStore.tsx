// Module ID: 12628
// Function ID: 98054
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 4029, 566, 686, 2]

// Module 12628 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import initialize from "initialize";
import dispatcher from "dispatcher";

const require = arg1;
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
const map = new Map();
let closure_8 = (() => {
  class SearchCountState {
    constructor() {
      tmp = outer1_5(this, SearchCountState);
      this.isInitialFetchComplete = false;
      this.isFetching = false;
      this.error = null;
      this.counts = null;
      return;
    }
  }
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
      const aPIError = new SearchCountState(outer1_1[5]).APIError(arg0);
      this.error = aPIError;
      this.isFetching = false;
    }
  };
  items[2] = obj;
  return callback2(SearchCountState, items);
})();
let tmp3 = ((Store) => {
  class GlobalDiscoveryServersSearchCountStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, GlobalDiscoveryServersSearchCountStore);
      obj = outer1_3(GlobalDiscoveryServersSearchCountStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
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
  callback(GlobalDiscoveryServersSearchCountStore, Store);
  let obj = {
    key: "getIsInitialFetchComplete",
    value(arg0) {
      return outer1_11(arg0, (isInitialFetchComplete) => isInitialFetchComplete.isInitialFetchComplete);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getIsFetchingCounts",
    value(arg0) {
      return outer1_11(arg0, (isFetching) => isFetching.isFetching);
    }
  };
  items[1] = obj;
  obj = {
    key: "getCounts",
    value(arg0) {
      return outer1_11(arg0, (counts) => counts.counts);
    }
  };
  items[2] = obj;
  return callback2(GlobalDiscoveryServersSearchCountStore, items);
})(require("initialize").Store);
tmp3.displayName = "GlobalDiscoveryServersSearchCountStore";
tmp3 = new tmp3(require("dispatcher"), {
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
    const set = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((arg0, arg1) => {
      if (!set.has(arg1)) {
        outer1_7.delete(arg1);
      }
    });
  }
});
let result = require("_inherits").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx");

export default tmp3;
