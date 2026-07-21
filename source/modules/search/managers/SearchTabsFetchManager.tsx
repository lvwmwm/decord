// Module ID: 10077
// Function ID: 78009
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10077 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [null, null];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ SEARCH_FILTERS_BY_TAB: closure_9, SEARCH_QUERY_BY_SEARCH_FILTER: closure_10, SEARCH_QUERY_DEFAULT_FILTERS: closure_11 } = arg1(dependencyMap[6]));
const SearchTypes = arg1(dependencyMap[7]).SearchTypes;
let tmp3 = (AbstractSearchFetchManager) => {
  class SearchTabsFetchManager {
    constructor() {
      self = this;
      tmp = closure_4(this, SearchTabsFetchManager);
      obj = closure_7(SearchTabsFetchManager);
      tmp2 = closure_6;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SearchTabsFetchManager;
  callback2(SearchTabsFetchManager, AbstractSearchFetchManager);
  let obj = {
    key: "createRequestPayload",
    value(trackExactTotalHits) {
      let channel_id;
      let include_nsfw;
      let searchQuery;
      let searchTabs;
      ({ searchQuery, searchTabs, getLimit: closure_0, pagination: closure_1 } = trackExactTotalHits);
      ({ include_nsfw, channel_id } = searchQuery);
      closure_2 = obj(searchQuery, closure_2);
      const obj = { include_nsfw, channel_ids: channel_id, tabs: {}, track_exact_total_hits: trackExactTotalHits.trackExactTotalHits };
      const item = searchTabs.forEach((arg0) => {
        if (null != closure_9[arg0]) {
          let obj = closure_10[tmp2];
        } else {
          obj = {};
        }
        obj = {};
        const merged = Object.assign(closure_11);
        const merged1 = Object.assign(obj);
        const merged2 = Object.assign(closure_2);
        const merged3 = Object.assign(closure_1);
        obj["limit"] = callback(arg0);
        obj.tabs[arg0] = obj;
      });
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "createWithPayload",
    value(searchTabs) {
      let searchContext;
      let searchQuery;
      ({ searchContext, searchQuery } = searchTabs);
      const requestPayload = this.createRequestPayload({ searchQuery, searchTabs: searchTabs.searchTabs, getLimit: searchTabs.getLimit, pagination: searchTabs.pagination, trackExactTotalHits: searchTabs.trackExactTotalHits });
      const type = searchContext.type;
      if (constants.GUILD !== type) {
        if (constants.GUILD_CHANNEL !== type) {
          if (constants.THREAD !== type) {
            if (constants.CHANNEL === type) {
              const SearchTabFetcherImpl2 = SearchTabsFetchManager(closure_1[8]).SearchTabFetcherImpl;
              const prototype3 = SearchTabFetcherImpl2.prototype;
              const searchTabFetcherImpl2 = new SearchTabFetcherImpl2(searchContext.channelId, searchContext.type, searchQuery, requestPayload);
              return searchTabFetcherImpl2;
            } else if (constants.DMS === type) {
              const SearchTabFetcherImpl = SearchTabsFetchManager(closure_1[8]).SearchTabFetcherImpl;
              const prototype2 = SearchTabFetcherImpl.prototype;
              const searchTabFetcherImpl = new SearchTabFetcherImpl(searchContext.type, searchContext.type, searchQuery, requestPayload);
              return searchTabFetcherImpl;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("[SearchFetchManager] Unsupported search context type: " + searchContext.type);
              throw error;
            }
          }
        }
      }
      const searchTabFetcherImpl1 = new SearchTabsFetchManager(closure_1[8]).SearchTabFetcherImpl(searchContext.guildId, searchContext.type, searchQuery, requestPayload);
      return searchTabFetcherImpl1;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arg0) {
      let getLimit;
      let id;
      let pagination;
      let searchContext;
      let searchQuery;
      let searchTabs;
      let trackExactTotalHits;
      ({ id, searchContext, searchQuery, searchTabs, getLimit, pagination, trackExactTotalHits } = arg0);
      this.cancel(id);
      const withPayload = this.createWithPayload({ searchContext, searchQuery, searchTabs, getLimit, pagination, trackExactTotalHits });
      const result = this.set(id, withPayload);
      return withPayload;
    }
  };
  items[2] = obj;
  return callback(SearchTabsFetchManager, items);
}(arg1(dependencyMap[9]).AbstractSearchFetchManager);
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/search/managers/SearchTabsFetchManager.tsx");

export default tmp3;
