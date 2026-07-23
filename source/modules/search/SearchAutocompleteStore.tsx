// Module ID: 10080
// Function ID: 77979
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1917, 1838, 1906, 3970, 1849, 653, 5043, 10078, 7098, 3969, 4276, 5047, 4974, 10079, 566, 686, 2]

// Module 10080 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import conceal from "conceal";
import requestMembersDebounced from "requestMembersDebounced";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_possibleConstructorReturn";

let SearchTokenTypes;
let closure_14;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getOrCreateUserSearchContext(searchContext) {
  let obj = require(10078) /* _createForOfIteratorHelperLoose */;
  const searchContextId = obj.getSearchContextId(searchContext);
  let value = map1.get(searchContextId);
  if (null == value) {
    obj = { results: [], context: importDefault(7098).getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
    value = obj;
    const obj3 = importDefault(7098);
  }
  const result = map1.set(searchContextId, value);
  return value;
}
function stateFactory(searchContext) {
  let autocompletes;
  let cursorScope;
  let mode;
  let query;
  let tokens;
  searchContext = searchContext.searchContext;
  ({ query, mode, tokens, cursorScope, autocompletes } = searchContext);
  getOrCreateUserSearchContext(searchContext);
  return { searchContext, query, mode, tokens, cursorScope, autocompletes };
}
function isUserAutocompleteFilter(filter) {
  let tmp = null != filter;
  if (tmp) {
    let tmp3 = filter === SearchTokenTypes.FILTER_FROM;
    if (!tmp3) {
      tmp3 = filter === SearchTokenTypes.FILTER_MENTIONS;
    }
    tmp = tmp3;
  }
  return tmp;
}
function isUserAutocompleteMode(autocompleteMode) {
  let tmp = autocompleteMode.type === constants.FILTER;
  if (tmp) {
    tmp = isUserAutocompleteFilter(autocompleteMode.filter);
  }
  return tmp;
}
function handleUserSearchResults(searchContext, results) {
  let mode;
  let tokens;
  let obj = require(10078) /* _createForOfIteratorHelperLoose */;
  const searchContextId = obj.getSearchContextId(searchContext);
  let value = map1.get(searchContextId);
  value = map.get(searchContextId);
  if (null != value) {
    if (null != value) {
      if (isUserAutocompleteMode(value.mode)) {
        let num = 3;
        if (value.mode.type === constants.FILTER) {
          num = 10;
        }
        if (num === undefined) {
          num = 10;
        }
        const items = [];
        const tmp6 = _createForOfIteratorHelperLoose(results.results);
        const iter = tmp6();
        if (!iter.done) {
          while (items.length < num) {
            let tmp9 = user;
            user = user.getUser(tmp8.id);
            if (null != user) {
              let tmp11 = importDefault;
              let tmp12 = dependencyMap;
              let obj2 = importDefault(3969);
              let userTag = obj2.getUserTag(user);
              let tmp14 = userTag;
              if (null != userTag) {
                obj = { text: userTag, user };
                let arr = items.push(obj);
                let tmp16 = userTag;
              }
            }
            let iter2 = tmp6();
            let tmp7 = iter2;
            if (iter2.done) {
              break;
            }
          }
        }
        value.results = items;
        ({ mode, tokens } = value);
        obj = { searchContext, query: value.query, mode, tokens, cursorScope: value.cursorScope, autocompletes: getAutocompleteList(searchContext, mode, tokens) };
        const result = map.set(searchContextId, stateFactory(obj));
        tmp6.emitChange();
      }
    }
  }
}
function setSelectedSearchContext(searchContext) {
  if (!importDefault(4276)(closure_18, searchContext)) {
    closure_18 = searchContext;
    require(10078) /* _createForOfIteratorHelperLoose */.clearTokenCache();
    const obj = require(10078) /* _createForOfIteratorHelperLoose */;
  }
}
function getAutocompleteList(searchContext, autocompleteMode, tokens) {
  const type = autocompleteMode.type;
  if (constants.FILTER === type) {
    let obj = {};
    ({ filter: obj.filter, token: obj.currentToken } = autocompleteMode);
    obj.searchContext = searchContext;
    obj.maxResults = c22;
    obj.tokens = tokens;
    const tmp7 = (function generateFilterResults(arg0) {
      let currentToken;
      let filter;
      let maxResults;
      let searchContext;
      ({ filter, currentToken, searchContext, maxResults } = arg0);
      let currentUser;
      if (null == filter) {
        return null;
      } else {
        let trimmed;
        if (null != currentToken) {
          const str = currentToken.getFullMatch();
          if (null != str) {
            trimmed = str.trim();
          }
        }
        let str2 = "";
        if (null != trimmed) {
          str2 = trimmed;
        }
        let obj = outer1_0(outer1_2[13]);
        if (obj.isGuildLikeSearchContext(searchContext)) {
          if (outer1_29(filter)) {
            if (0 !== str2.length) {
              const results = outer1_27(searchContext).results;
              let arr3 = results;
              if (null != results) {
                arr3 = results;
                if (outer1_29(filter)) {
                  arr3 = results;
                  if (obj3.isMeAutcompleteAnswer(str2)) {
                    currentUser = outer1_13.getCurrentUser();
                    arr3 = results;
                    if (null != currentUser) {
                      const found = results.filter((user) => {
                        user = user.user;
                        let id;
                        if (null != user) {
                          id = user.id;
                        }
                        return id !== currentUser.id;
                      });
                      obj = { text: outer1_16, user: currentUser };
                      found.unshift(obj);
                      arr3 = found;
                    }
                  }
                  obj3 = outer1_0(outer1_2[19]);
                }
              }
              let tmp18 = null;
              if (null != arr3) {
                tmp18 = null;
                if (0 !== arr3.length) {
                  obj = { group: filter, results: arr3 };
                  tmp18 = obj;
                }
              }
              return tmp18;
            }
          }
        }
        const tmp9 = outer1_1(outer1_2[19])[filter];
        let getAutocompletions;
        if (null != tmp9) {
          getAutocompletions = tmp9.getAutocompletions;
        }
        if (null != getAutocompletions) {
          const obj1 = { query: str2, searchContext, maxResults, tokens: tmp };
          let autocompletions = getAutocompletions(obj1);
        } else {
          autocompletions = [];
        }
      }
    })(obj);
    if (null != tmp7) {
      const items = [tmp7];
      let tmp9 = items;
    } else {
      tmp9 = closure_19;
    }
    return tmp9;
  } else {
    return closure_19;
  }
}
function handleChannelCreateOrDelete() {
  require(10078) /* _createForOfIteratorHelperLoose */.clearTokenCache();
}
function rebuildAutocompleteResults(c18) {
  let mode;
  let tokens;
  let obj = require(10078) /* _createForOfIteratorHelperLoose */;
  const searchContextId = obj.getSearchContextId(c18);
  const value = map.get(searchContextId);
  if (null == value) {
    return false;
  } else {
    ({ mode, tokens } = value);
    obj = { searchContext: c18, query: value.query, mode, tokens, cursorScope: value.cursorScope, autocompletes: getAutocompleteList(c18, mode, tokens) };
    const result = map.set(searchContextId, stateFactory(obj));
  }
}
({ SearchPopoutModes: closure_14, SearchTokenTypes } = ME);
ME = ME.ME;
require("HeaderRecord").AutocompleterResultTypes;
let c18 = null;
let closure_19 = [];
const map = new Map();
const map1 = new Map();
let c22 = 10;
let items = [, , ];
({ FILTER_FROM: arr[0], FILTER_IN: arr[1], FILTER_MENTIONS: arr[2] } = SearchTokenTypes);
let set = new Set(items);
let tmp6 = ((Store) => {
  class SearchAutocompleteStoreClass {
    constructor() {
      self = this;
      tmp = outer1_3(this, SearchAutocompleteStoreClass);
      obj = outer1_6(SearchAutocompleteStoreClass);
      tmp2 = outer1_5;
      if (outer1_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SearchAutocompleteStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_10, outer1_11, outer1_12, outer1_13);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value(searchContext) {
      let obj = SearchAutocompleteStoreClass(outer1_2[13]);
      let value = outer1_20.get(obj.getSearchContextId(searchContext));
      if (null == value) {
        obj = { searchContext, query: "" };
        obj = { type: outer1_14.EMPTY, filter: null, token: null };
        obj.mode = obj;
        obj.tokens = [];
        obj.cursorScope = null;
        obj.autocompletes = [];
        value = obj;
      }
      return value;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSelectedSearchContext",
    value() {
      return outer1_18;
    }
  };
  items[2] = obj;
  return callback(SearchAutocompleteStoreClass, items);
})(require("initialize").Store);
tmp6.displayName = "SearchAutocompleteStore";
tmp6 = new tmp6(require("dispatcher"), {
  SEARCH_AUTOCOMPLETE_INITIALIZE: function handleSearchAutocompleteInitialize(searchContext) {
    searchContext = searchContext.searchContext;
    setSelectedSearchContext(searchContext);
    rebuildAutocompleteResults(searchContext);
  },
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function handleSearchAutocompleteQueryUpdate(arg0) {
    let cursorScope;
    let searchContext;
    let tokens;
    ({ searchContext, tokens, cursorScope } = arg0);
    setSelectedSearchContext(searchContext);
    let obj = require(10078) /* _createForOfIteratorHelperLoose */;
    const queryFromTokens = obj.getQueryFromTokens(tokens);
    let obj1 = require(10078) /* _createForOfIteratorHelperLoose */;
    const autocompleteMode = obj1.getAutocompleteMode(cursorScope, tokens);
    const searchContextId = require(10078) /* _createForOfIteratorHelperLoose */.getSearchContextId(searchContext);
    let value = map.get(searchContextId);
    if (null != value) {
      if (queryFromTokens === value.query) {
        let autocompletes = value.autocompletes;
        let flag = false;
      }
      obj = { searchContext, query: queryFromTokens, mode: autocompleteMode, tokens, cursorScope, autocompletes };
      const result = map.set(searchContextId, stateFactory(obj));
      return flag;
    }
    if (isUserAutocompleteMode(autocompleteMode)) {
      const tmp10 = getOrCreateUserSearchContext(searchContext);
      const token = autocompleteMode.token;
      let trimmed;
      if (null != token) {
        const str = token.getFullMatch();
        if (null != str) {
          trimmed = str.trim();
        }
      }
      if (null != trimmed) {
        if (trimmed.length > 0) {
          const guildIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const members = importDefault(5047).requestMembers(guildIdFromSearchContext, trimmed, c22);
            const obj5 = importDefault(5047);
          }
          const context3 = tmp10.context;
          obj = { query: trimmed };
          obj1 = {};
          let tmp21;
          if (null != guildIdFromSearchContext) {
            tmp21 = guildIdFromSearchContext;
          }
          obj1.guild = tmp21;
          obj.filters = obj1;
          const obj4 = require(10078) /* _createForOfIteratorHelperLoose */;
          obj.boosters = require(4974) /* _createForOfIteratorHelperLoose */.getBoosterMap(AutocompleterResultTypes.USER);
          context3.setQuery(obj);
          autocompletes = undefined;
          if (null != value) {
            autocompletes = value.autocompletes;
          }
          if (null == autocompletes) {
            autocompletes = [];
          }
          flag = false;
          const obj8 = require(4974) /* _createForOfIteratorHelperLoose */;
        }
      }
      const context2 = tmp10.context;
      context2.clearQuery();
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    } else {
      value = map1.get(searchContextId);
      if (null != value) {
        const context = value.context;
        context.clearQuery();
        value.results = [];
      }
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    }
  },
  SEARCH_EDITOR_STATE_CLEAR: function handleSearchEditorStateClear(id) {
    id = id.id;
    const value = map1.get(id);
    if (null != value) {
      const context = value.context;
      context.destroy();
      value.results = [];
      map1.delete(id);
    }
    map.delete(id);
    let c18 = null;
  },
  CHANNEL_CREATE: handleChannelCreateOrDelete,
  CHANNEL_DELETE: handleChannelCreateOrDelete,
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate() {
    let tmp = null != c18;
    if (tmp) {
      tmp = rebuildAutocompleteResults(c18);
    }
    return tmp;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let tmp = null != c18;
    if (tmp) {
      tmp = rebuildAutocompleteResults(c18);
    }
    return tmp;
  }
});
let closure_23 = tmp6;
let result = set.fileFinishedImporting("modules/search/SearchAutocompleteStore.tsx");

export default tmp6;
