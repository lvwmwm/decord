// Module ID: 10071
// Function ID: 77926
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10071 (_isNativeReflectConstruct)
let SearchTokenTypes;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let obj = arg1(dependencyMap[13]);
  const searchContextId = obj.getSearchContextId(searchContext);
  let value = map1.get(searchContextId);
  if (null == value) {
    obj = { results: [], context: importDefault(dependencyMap[14]).getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
    value = obj;
    const obj3 = importDefault(dependencyMap[14]);
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
  let obj = results(dependencyMap[13]);
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
            let user = user.getUser(tmp8.id);
            if (null != user) {
              let tmp11 = importDefault;
              let tmp12 = dependencyMap;
              let obj2 = importDefault(dependencyMap[15]);
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
  if (!importDefault(dependencyMap[16])(closure_18, searchContext)) {
    closure_18 = searchContext;
    arg1(dependencyMap[13]).clearTokenCache();
    const obj = arg1(dependencyMap[13]);
  }
}
function getAutocompleteList(searchContext, autocompleteMode, tokens) {
  const type = autocompleteMode.type;
  if (constants.FILTER === type) {
    const obj = {};
    ({ filter: obj.filter, token: obj.currentToken } = autocompleteMode);
    obj.searchContext = searchContext;
    obj.maxResults = closure_22;
    obj.tokens = tokens;
    const tmp7 = function generateFilterResults(arg0) {
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
        let obj = currentUser(closure_2[13]);
        if (obj.isGuildLikeSearchContext(searchContext)) {
          if (callback3(filter)) {
            if (0 !== str2.length) {
              const results = callback2(searchContext).results;
              let arr3 = results;
              if (null != results) {
                arr3 = results;
                if (callback3(filter)) {
                  arr3 = results;
                  if (obj3.isMeAutcompleteAnswer(str2)) {
                    currentUser = currentUser.getCurrentUser();
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
                      obj = { text: closure_16, user: currentUser };
                      found.unshift(obj);
                      arr3 = found;
                    }
                  }
                  const obj3 = currentUser(closure_2[19]);
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
        const tmp9 = callback(closure_2[19])[filter];
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
    }(obj);
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
  arg1(dependencyMap[13]).clearTokenCache();
}
function rebuildAutocompleteResults(closure_18) {
  let mode;
  let tokens;
  let obj = arg1(dependencyMap[13]);
  const searchContextId = obj.getSearchContextId(closure_18);
  const value = map.get(searchContextId);
  if (null == value) {
    return false;
  } else {
    ({ mode, tokens } = value);
    obj = { searchContext: closure_18, query: value.query, mode, tokens, cursorScope: value.cursorScope, autocompletes: getAutocompleteList(closure_18, mode, tokens) };
    const result = map.set(searchContextId, stateFactory(obj));
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const tmp2 = arg1(dependencyMap[11]);
({ SearchPopoutModes: closure_14, SearchTokenTypes } = tmp2);
const ME = tmp2.ME;
arg1(dependencyMap[12]).AutocompleterResultTypes;
let closure_18 = null;
let closure_19 = [];
const map = new Map();
const map1 = new Map();
let closure_22 = 10;
const items = [, , ];
({ FILTER_FROM: arr[0], FILTER_IN: arr[1], FILTER_MENTIONS: arr[2] } = SearchTokenTypes);
new Set(items);
let tmp6 = (Store) => {
  class SearchAutocompleteStoreClass {
    constructor() {
      self = this;
      tmp = closure_3(this, SearchAutocompleteStoreClass);
      obj = closure_6(SearchAutocompleteStoreClass);
      tmp2 = closure_5;
      if (closure_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SearchAutocompleteStoreClass;
  callback2(SearchAutocompleteStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_10, closure_11, closure_12, closure_13);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value(searchContext) {
      let obj = SearchAutocompleteStoreClass(closure_2[13]);
      let value = closure_20.get(obj.getSearchContextId(searchContext));
      if (null == value) {
        obj = { searchContext, query: "" };
        obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": null, type: constants.EMPTY };
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
      return closure_18;
    }
  };
  items[2] = obj;
  return callback(SearchAutocompleteStoreClass, items);
}(importDefault(dependencyMap[20]).Store);
tmp6.displayName = "SearchAutocompleteStore";
tmp6 = new tmp6(importDefault(dependencyMap[21]), {
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
    let obj = arg1(dependencyMap[13]);
    const queryFromTokens = obj.getQueryFromTokens(tokens);
    let obj1 = arg1(dependencyMap[13]);
    const autocompleteMode = obj1.getAutocompleteMode(cursorScope, tokens);
    const searchContextId = arg1(dependencyMap[13]).getSearchContextId(searchContext);
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
          const guildIdFromSearchContext = arg1(dependencyMap[13]).getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const members = importDefault(dependencyMap[17]).requestMembers(guildIdFromSearchContext, trimmed, closure_22);
            const obj5 = importDefault(dependencyMap[17]);
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
          const obj4 = arg1(dependencyMap[13]);
          obj.boosters = arg1(dependencyMap[18]).getBoosterMap(AutocompleterResultTypes.USER);
          context3.setQuery(obj);
          autocompletes = undefined;
          if (null != value) {
            autocompletes = value.autocompletes;
          }
          if (null == autocompletes) {
            autocompletes = [];
          }
          flag = false;
          const obj8 = arg1(dependencyMap[18]);
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
    let closure_18 = null;
  },
  CHANNEL_CREATE: handleChannelCreateOrDelete,
  CHANNEL_DELETE: handleChannelCreateOrDelete,
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate() {
    let tmp = null != closure_18;
    if (tmp) {
      tmp = rebuildAutocompleteResults(closure_18);
    }
    return tmp;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let tmp = null != closure_18;
    if (tmp) {
      tmp = rebuildAutocompleteResults(closure_18);
    }
    return tmp;
  }
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/search/SearchAutocompleteStore.tsx");

export default tmp6;
