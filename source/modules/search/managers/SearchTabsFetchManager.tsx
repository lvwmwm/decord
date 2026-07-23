// Module ID: 10086
// Function ID: 78073
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 9103, 653, 10087, 10088, 2]

// Module 10086 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_4 from "SearchAutocompleteSelectAnalyticsActions";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchTypes } from "ME";

let closure_10;
let closure_11;
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
let closure_2 = ["include_nsfw", "channel_id"];
({ SEARCH_FILTERS_BY_TAB: closure_9, SEARCH_QUERY_BY_SEARCH_FILTER: closure_10, SEARCH_QUERY_DEFAULT_FILTERS: closure_11 } = SearchAutocompleteSelectAnalyticsActions);
let tmp3 = ((AbstractSearchFetchManager) => {
  class SearchTabsFetchManager {
    constructor() {
      self = this;
      tmp = outer1_4(this, SearchTabsFetchManager);
      obj = outer1_7(SearchTabsFetchManager);
      tmp2 = outer1_6;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SearchTabsFetchManager, AbstractSearchFetchManager);
  let obj = {
    key: "createRequestPayload",
    value(trackExactTotalHits) {
      let SearchTabsFetchManager;
      let channel_id;
      let closure_1;
      let include_nsfw;
      let searchQuery;
      let searchTabs;
      ({ searchQuery, searchTabs, getLimit: SearchTabsFetchManager, pagination: closure_1 } = trackExactTotalHits);
      ({ include_nsfw, channel_id } = searchQuery);
      let closure_2 = outer1_3(searchQuery, outer1_2);
      let obj = { include_nsfw, channel_ids: channel_id, tabs: {}, track_exact_total_hits: trackExactTotalHits.trackExactTotalHits };
      const item = searchTabs.forEach((arg0) => {
        if (null != outer2_9[arg0]) {
          let obj = outer2_10[tmp2];
        } else {
          obj = {};
        }
        obj = {};
        const merged = Object.assign(outer2_11);
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
      if (outer1_12.GUILD !== type) {
        if (outer1_12.GUILD_CHANNEL !== type) {
          if (outer1_12.THREAD !== type) {
            if (outer1_12.CHANNEL === type) {
              const SearchTabFetcherImpl2 = SearchTabsFetchManager(outer1_1[8]).SearchTabFetcherImpl;
              const prototype3 = SearchTabFetcherImpl2.prototype;
              const searchTabFetcherImpl2 = new SearchTabFetcherImpl2(searchContext.channelId, searchContext.type, searchQuery, requestPayload);
              return searchTabFetcherImpl2;
            } else if (outer1_12.DMS === type) {
              const SearchTabFetcherImpl = SearchTabsFetchManager(outer1_1[8]).SearchTabFetcherImpl;
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
      const searchTabFetcherImpl1 = new SearchTabsFetchManager(outer1_1[8]).SearchTabFetcherImpl(searchContext.guildId, searchContext.type, searchQuery, requestPayload);
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
})(require("AbstractSearchFetchManager").AbstractSearchFetchManager);
tmp3 = new tmp3();
let result = require("_defineProperties").fileFinishedImporting("modules/search/managers/SearchTabsFetchManager.tsx");

export default tmp3;
