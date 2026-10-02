// Module ID: 13249
// Function ID: 13250
// Name: GlobalDiscoveryServersSearchCountsStore
// Dependencies: [4737, 504, 585, 2]

// Module 13249 (GlobalDiscoveryServersSearchCountsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4737 */;
import size from "module_2" /* 2 */;

let set;

const map = new Map();
class SearchCountState {
  constructor() {
    return Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
  }
  handleSearchCountStart() {
    this.error = null;
    this.isFetching = true;
  }
  handleSearchCountSuccess(categoryCounts) {
    this.counts = categoryCounts;
    this.isFetching = false;
    this.isInitialFetchComplete = true;
  }
  handleSearchCountFailure(error) {
    const aPIError = new V6OrEarlierAPIError.APIError(error);
    this.error = aPIError;
    this.isFetching = false;
  }
}
const prototype = SearchCountState.prototype;
const Store = get_initializedDefault.Store;
class GlobalDiscoveryServersSearchCountStore extends Store {
  getIsInitialFetchComplete(arg0) {
    const value = map.get(arg0);
    let prop = null;
    if (null != value) {
      prop = value.isInitialFetchComplete;
    }
    return prop;
  }
  getIsFetchingCounts(arg0) {
    const value = map.get(arg0);
    let isFetching = null;
    if (null != value) {
      isFetching = value.isFetching;
    }
    return isFetching;
  }
  getCounts(query) {
    const value = map.get(query);
    let counts = null;
    if (null != value) {
      counts = value.counts;
    }
    return counts;
  }
}
const prototype2 = GlobalDiscoveryServersSearchCountStore.prototype;
GlobalDiscoveryServersSearchCountStore.displayName = "GlobalDiscoveryServersSearchCountStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function handleGlobalDiscoveryServersSearchCountStart(query) {
    query = query.query;
    let merged = map.get(query);
    const obj = map;
    if (merged == null) {
      const self = this;
      if (typeof SearchCountState === "function") {
        merged = Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = obj.set(query, merged);
    const result1 = merged.handleSearchCountStart();
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    query = query.query;
    const categoryCounts = query.categoryCounts;
    let merged = map.get(query);
    const obj = map;
    if (merged == null) {
      const self = this;
      if (typeof SearchCountState === "function") {
        merged = Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = obj.set(query, merged);
    const result1 = merged.handleSearchCountSuccess(categoryCounts);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function handleGlobalDiscoveryServersSearchCountFailure(query) {
    query = query.query;
    const error = query.error;
    let merged = map.get(query);
    const obj = map;
    if (merged == null) {
      const self = this;
      if (typeof SearchCountState === "function") {
        merged = Object.assign({ isInitialFetchComplete: false, isFetching: false, error: null, counts: null });
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = obj.set(query, merged);
    const result1 = merged.handleSearchCountFailure(error);
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function handleGlobalDiscoveryServersSearchClear(ignoreQueries) {
    set = new Set(ignoreQueries.ignoreQueries);
    const item = map.forEach((item, index) => {
      if (!set.has(index)) {
        map.delete(index);
      }
    });
  }
};
const globalDiscoveryServersSearchCountStore = new GlobalDiscoveryServersSearchCountStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx");

export default globalDiscoveryServersSearchCountStore;
