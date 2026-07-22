// Module ID: 10079
// Function ID: 78043
// Name: _callSuper
// Dependencies: []

// Module 10079 (_callSuper)
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
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ SearchTypes: closure_10, Endpoints: closure_11 } = arg1(dependencyMap[7]));
const tmp3 = () => {
  class SearchFetcher {
    constructor(arg0, arg1, arg2) {
      tmp = closure_7(this, SearchFetcher);
      this.isCanceled = false;
      this.searchId = arg0;
      this.searchType = arg1;
      this.query = arg2;
      return;
    }
  }
  const importDefault = SearchFetcher;
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
    value(closure_101, queue, bindResult1) {
      const self = this;
      if (null != this.indexingPollId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.indexingPollId);
      }
      const _fetch = self.fetch;
      self.indexingPollId = setTimeout(_fetch.bind(self, closure_101, queue, bindResult1), self.retryDelay);
    }
  };
  items[2] = obj;
  return callback4(SearchFetcher, items);
}();
const tmp2 = arg1(dependencyMap[7]);
const tmp4 = (arg0) => {
  class SearchFetcherImpl {
    constructor() {
      tmp = closure_7(this, SearchFetcherImpl);
      return closure_12(this, SearchFetcherImpl, arguments);
    }
  }
  const arg1 = SearchFetcherImpl;
  callback2(SearchFetcherImpl, arg0);
  let obj = {
    key: "getEndpoint",
    value() {
      const self = this;
      const searchType = this.searchType;
      if (constants.GUILD === searchType) {
        if (null != self.searchId) {
          if ("" !== self.searchId) {
            return closure_11.SEARCH_GUILD(self.searchId);
          }
        }
      } else if (constants.GUILD_CHANNEL === searchType) {
        if (null != self.searchId) {
          if ("" !== self.searchId) {
            const channel = channel.getChannel(self.searchId);
            let guildId;
            if (null != channel) {
              guildId = channel.getGuildId();
            }
            if (null != guildId) {
              return closure_11.SEARCH_GUILD(guildId);
            }
          }
        }
      } else if (constants.CHANNEL === searchType) {
        if (null != self.searchId) {
          if ("" !== self.searchId) {
            return closure_11.SEARCH_CHANNEL(self.searchId);
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
        const HTTP = SearchFetcherImpl(closure_2[10]).HTTP;
        const obj = { url: endpoint, query: callback(closure_2[11]).stringify(this.query), oldFormErrors: true, rejectWithError: rejectWithError.rejectWithError };
        value = HTTP.get(obj);
        const obj2 = callback(closure_2[11]);
      }
      return value;
    }
  };
  items[1] = obj;
  return callback4(SearchFetcherImpl, items);
}(tmp3);
const tmp5 = (arg0) => {
  class SearchTabFetcherImpl {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = closure_7(this, SearchTabFetcherImpl);
      items = [, , ];
      items[0] = arg0;
      items[1] = arg1;
      items[2] = arg2;
      tmp2 = closure_12(this, SearchTabFetcherImpl, items);
      tmp2.payload = arg3;
      return tmp2;
    }
  }
  const arg1 = SearchTabFetcherImpl;
  callback2(SearchTabFetcherImpl, arg0);
  let obj = {
    key: "getEndpoint",
    value() {
      const self = this;
      const searchType = this.searchType;
      if (constants.DMS === searchType) {
        return closure_11.SEARCH_TABS_DMS;
      } else {
        if (constants.GUILD_CHANNEL !== searchType) {
          if (constants.GUILD !== searchType) {
            if (constants.THREAD !== searchType) {
              if (constants.CHANNEL === searchType) {
                if (null != self.searchId) {
                  if ("" !== self.searchId) {
                    return closure_11.SEARCH_TABS_CHANNEL(self.searchId);
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
            return closure_11.SEARCH_TABS_GUILD(self.searchId);
          }
        }
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "makeRequest",
    value(rejectWithError) {
      const endpoint = this.getEndpoint();
      let postResult = null;
      if (null != endpoint) {
        const HTTP = SearchTabFetcherImpl(closure_2[10]).HTTP;
        const obj = { url: endpoint, body: this.payload, oldFormErrors: true, rejectWithError: rejectWithError.rejectWithError };
        postResult = HTTP.post(obj);
      }
      return postResult;
    }
  };
  items[1] = obj;
  return callback4(SearchTabFetcherImpl, items);
}(tmp3);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/search/SearchFetcher.tsx");

export const SearchFetcher = tmp3;
export const SearchFetcherImpl = tmp4;
export const SearchTabFetcherImpl = tmp5;
