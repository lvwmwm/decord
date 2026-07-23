// Module ID: 10087
// Function ID: 78083
// Name: _callSuper
// Dependencies: [15, 17, 18, 5, 6, 7, 1348, 653, 664, 3, 507, 1440, 2]

// Module 10087 (_callSuper)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "ME";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ SearchTypes: closure_10, Endpoints: closure_11 } = ME);
const tmp3 = (() => {
  class SearchFetcher {
    constructor(arg0, arg1, arg2) {
      tmp = outer1_7(this, SearchFetcher);
      this.isCanceled = false;
      this.searchId = arg0;
      this.searchType = arg1;
      this.query = arg2;
      return;
    }
  }
  let obj = { key: "fetch" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback3(tmp);
  obj.value = function fetch() {
    return callback(...arguments);
  };
  const items = [obj, , ];
  obj = {
    key: "cancel",
    value() {
      this.isCanceled = true;
      if (null != this.indexingPollId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.indexingPollId);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "retryLater",
    value(c101, queue, bindResult1) {
      const self = this;
      if (null != this.indexingPollId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.indexingPollId);
      }
      const _fetch = self.fetch;
      self.indexingPollId = setTimeout(_fetch.bind(self, c101, queue, bindResult1), self.retryDelay);
    }
  };
  items[2] = obj;
  return callback4(SearchFetcher, items);
})();
const tmp4 = ((arg0) => {
  class SearchFetcherImpl {
    constructor() {
      tmp = outer1_7(this, SearchFetcherImpl);
      return outer1_12(this, SearchFetcherImpl, arguments);
    }
  }
  callback2(SearchFetcherImpl, arg0);
  let obj = {
    key: "getEndpoint",
    value() {
      const self = this;
      const searchType = this.searchType;
      if (outer1_10.GUILD === searchType) {
        if (null != self.searchId) {
          if ("" !== self.searchId) {
            return outer1_11.SEARCH_GUILD(self.searchId);
          }
        }
      } else if (outer1_10.GUILD_CHANNEL === searchType) {
        if (null != self.searchId) {
          if ("" !== self.searchId) {
            const channel = outer1_9.getChannel(self.searchId);
            let guildId;
            if (null != channel) {
              guildId = channel.getGuildId();
            }
            if (null != guildId) {
              return outer1_11.SEARCH_GUILD(guildId);
            }
          }
        }
      } else if (outer1_10.CHANNEL === searchType) {
        if (null != self.searchId) {
          if ("" !== self.searchId) {
            return outer1_11.SEARCH_CHANNEL(self.searchId);
          }
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
        throw error;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "makeRequest",
    value(rejectWithError) {
      const endpoint = this.getEndpoint();
      let value = null;
      if (null != endpoint) {
        const HTTP = SearchFetcherImpl(outer1_2[10]).HTTP;
        const obj = { url: endpoint, query: outer1_1(outer1_2[11]).stringify(this.query), oldFormErrors: true, rejectWithError: rejectWithError.rejectWithError };
        value = HTTP.get(obj);
        const obj2 = outer1_1(outer1_2[11]);
      }
      return value;
    }
  };
  items[1] = obj;
  return callback4(SearchFetcherImpl, items);
})(tmp3);
const tmp5 = ((arg0) => {
  class SearchTabFetcherImpl {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = outer1_7(this, SearchTabFetcherImpl);
      items = [, , ];
      items[0] = arg0;
      items[1] = arg1;
      items[2] = arg2;
      tmp2 = outer1_12(this, SearchTabFetcherImpl, items);
      tmp2.payload = arg3;
      return tmp2;
    }
  }
  callback2(SearchTabFetcherImpl, arg0);
  let obj = {
    key: "getEndpoint",
    value() {
      const self = this;
      const searchType = this.searchType;
      if (outer1_10.DMS === searchType) {
        return outer1_11.SEARCH_TABS_DMS;
      } else {
        if (outer1_10.GUILD_CHANNEL !== searchType) {
          if (outer1_10.GUILD !== searchType) {
            if (outer1_10.THREAD !== searchType) {
              if (outer1_10.CHANNEL === searchType) {
                if (null != self.searchId) {
                  if ("" !== self.searchId) {
                    return outer1_11.SEARCH_TABS_CHANNEL(self.searchId);
                  }
                }
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
                throw error;
              }
            }
          }
        }
        if (null != self.searchId) {
          if ("" !== self.searchId) {
            return outer1_11.SEARCH_TABS_GUILD(self.searchId);
          }
        }
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "makeRequest",
    value(rejectWithError) {
      const endpoint = this.getEndpoint();
      let postResult = null;
      if (null != endpoint) {
        const HTTP = SearchTabFetcherImpl(outer1_2[10]).HTTP;
        const obj = { url: endpoint, body: this.payload, oldFormErrors: true, rejectWithError: rejectWithError.rejectWithError };
        postResult = HTTP.post(obj);
      }
      return postResult;
    }
  };
  items[1] = obj;
  return callback4(SearchTabFetcherImpl, items);
})(tmp3);
let result = require("_inherits").fileFinishedImporting("modules/search/SearchFetcher.tsx");

export const SearchFetcher = tmp3;
export const SearchFetcherImpl = tmp4;
export const SearchTabFetcherImpl = tmp5;
