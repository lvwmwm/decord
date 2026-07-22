// Module ID: 10070
// Function ID: 77804
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: clearTokenCache, filterHasAnswer, getAutocompleteMode, getChannelActiveAgoTimestamp, getChannelDisplayName, getChannelIdFromSearchContext, getChannelPlaceholderName, getFlattenedAutocompleteResults, getGuildIdFromSearchContext, getIndexingErrorText, getNonTokenQuery, getQueryContentString, getQueryFromTokens, getSearchHistoryStateId, getSearchOptionAnswer, getSearchQueryFromTokens, getSearchTabFetchId, getSelectionScope, getTabTitle, isGuildLikeSearchContext, queryHasFilter, refreshSearchTokens, removeInvalidPrivateChannelSearchTokens, searchModeToSearchQueryParams, searchQueryParamsToSearchMode, setIncludeNSFW, showDatePicker

// Module 10070 (_createForOfIteratorHelperLoose)
let ME;
let SearchTokenTypes;
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
function getSearchContextId(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD === type) {
    return searchContext.guildId;
  } else {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.CHANNEL !== type) {
        if (constants.THREAD !== type) {
          return constants.DMS === type ? searchContext.type : undefined;
        }
      }
    }
    return searchContext.channelId;
  }
}
function quoteChannelName(channelName) {
  let combined = channelName;
  if (null != channelName.match(/([\\" ])/g)) {
    const _HermesInternal = HermesInternal;
    combined = "\"" + channelName.replaceAll(/([\\"])/g, (arg0, arg1) => "\\" + arg1) + "\"";
  }
  return combined;
}
function tokenizeQuery(searchQueryString) {
  return importDefaultResult1.tokenize(searchQueryString);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const SearchTabs = arg1(dependencyMap[7]).SearchTabs;
const tmp3 = arg1(dependencyMap[8]);
({ SearchTypes: closure_10, SearchTokenTypes } = tmp3);
({ SearchPopoutModes: closure_12, IS_SEARCH_ANSWER_TOKEN: closure_13, IS_SEARCH_FILTER_TOKEN: closure_14, SearchModes: closure_15, ME } = tmp3);
const obj = { [SearchTokenTypes.FILTER_BEFORE]: true, [SearchTokenTypes.FILTER_AFTER]: true, [SearchTokenTypes.FILTER_ON]: true };
let importDefaultResult1 = importDefault(dependencyMap[13]);
importDefaultResult1 = new importDefaultResult1();
let importDefaultResult2 = importDefault(dependencyMap[13]);
importDefaultResult2 = new importDefaultResult2();
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/search/SearchUtils.tsx");

export { getSearchContextId };
export const getSearchHistoryStateId = function getSearchHistoryStateId(searchContext) {
  return getSearchContextId(searchContext);
};
export const getSearchTabFetchId = function getSearchTabFetchId(searchContext, closure_1, searchResultsQuery) {
  return "" + getSearchContextId(searchContext) + "-" + closure_1 + "-" + searchResultsQuery;
};
export const getChannelActiveAgoTimestamp = function getChannelActiveAgoTimestamp(extractTimestampResult) {
  let obj = importDefault(dependencyMap[9])();
  const diffResult = obj.diff(importDefault(dependencyMap[9])(extractTimestampResult), "s");
  if (diffResult > 31536000) {
    const _Math5 = Math;
    const rounded = Math.round(diffResult / 31536000);
    const intl7 = arg1(dependencyMap[10]).intl;
    obj = { count: rounded };
    return intl7.formatToPlainString(arg1(dependencyMap[10]).t.7th+Mf, obj);
  } else if (diffResult > 2592000) {
    const _Math4 = Math;
    const rounded1 = Math.round(diffResult / 2592000);
    const intl6 = arg1(dependencyMap[10]).intl;
    obj = { count: rounded1 };
    return intl6.formatToPlainString(arg1(dependencyMap[10]).t.g2uHTD, obj);
  } else if (diffResult > 172800) {
    const _Math3 = Math;
    const rounded2 = Math.round(diffResult / 86400);
    const intl5 = arg1(dependencyMap[10]).intl;
    const obj1 = { count: rounded2 };
    return intl5.formatToPlainString(arg1(dependencyMap[10]).t.HNgi95, obj1);
  } else if (diffResult > 86400) {
    const intl4 = arg1(dependencyMap[10]).intl;
    return intl4.string(arg1(dependencyMap[10]).t.uNkIhT);
  } else if (diffResult > 3600) {
    const _Math2 = Math;
    const rounded3 = Math.round(diffResult / 3600);
    const intl3 = arg1(dependencyMap[10]).intl;
    const obj2 = { count: rounded3 };
    return intl3.formatToPlainString(arg1(dependencyMap[10]).t.WJBWP1, obj2);
  } else if (diffResult > 60) {
    const _Math = Math;
    const rounded4 = Math.round(diffResult / 60);
    const intl2 = arg1(dependencyMap[10]).intl;
    const obj3 = { count: rounded4 };
    return intl2.formatToPlainString(arg1(dependencyMap[10]).t.CbRfwg, obj3);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.5Ldpkc);
  }
};
export const getIndexingErrorText = function getIndexingErrorText(searchContext) {
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    const intl3 = arg1(dependencyMap[10]).intl;
    return intl3.string(arg1(dependencyMap[10]).t.Q0JJjv);
  } else if (constants.DMS === type) {
    const intl2 = arg1(dependencyMap[10]).intl;
    return intl2.string(arg1(dependencyMap[10]).t.Br0xJA);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.AXPbZr);
  }
};
export const getGuildIdFromSearchContext = function getGuildIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (constants.GUILD !== type) {
      if (constants.THREAD !== type) {
        if (constants.CHANNEL === type) {
          const channel = channel.getChannel(searchContext.channelId);
          let guild_id;
          if (null != channel) {
            guild_id = channel.guild_id;
          }
          let tmp9 = null;
          if (null != guild_id) {
            tmp9 = guild_id;
          }
          return tmp9;
        } else {
          return null;
        }
      }
    }
  }
  return searchContext.guildId;
};
export const isGuildLikeSearchContext = function isGuildLikeSearchContext(searchContext) {
  let tmp = searchContext.type === constants.GUILD;
  if (!tmp) {
    tmp = searchContext.type === constants.GUILD_CHANNEL;
  }
  if (!tmp) {
    tmp = searchContext.type === constants.THREAD;
  }
  return tmp;
};
export const getChannelIdFromSearchContext = function getChannelIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (constants.CHANNEL !== type) {
      if (constants.THREAD !== type) {
        return null;
      }
    }
  }
  return searchContext.channelId;
};
export const getTabTitle = function getTabTitle(id) {
  if (SearchTabs.RECENT === id) {
    const intl10 = arg1(dependencyMap[10]).intl;
    return intl10.string(arg1(dependencyMap[10]).t.tWnHcL);
  } else if (SearchTabs.MESSAGES === id) {
    const intl9 = arg1(dependencyMap[10]).intl;
    return intl9.string(arg1(dependencyMap[10]).t.dvZAkp);
  } else if (SearchTabs.PEOPLE === id) {
    const intl8 = arg1(dependencyMap[10]).intl;
    return intl8.string(arg1(dependencyMap[10]).t.GFd/I5);
  } else if (SearchTabs.MEDIA === id) {
    const intl7 = arg1(dependencyMap[10]).intl;
    return intl7.string(arg1(dependencyMap[10]).t.Aw9+/M);
  } else if (SearchTabs.PINS === id) {
    const intl6 = arg1(dependencyMap[10]).intl;
    return intl6.string(arg1(dependencyMap[10]).t./MoGoB);
  } else if (SearchTabs.LINKS === id) {
    const intl5 = arg1(dependencyMap[10]).intl;
    return intl5.string(arg1(dependencyMap[10]).t.DFSvTt);
  } else if (SearchTabs.FILES === id) {
    const intl4 = arg1(dependencyMap[10]).intl;
    return intl4.string(arg1(dependencyMap[10]).t.WgVYR/);
  } else if (SearchTabs.GUILD_CHANNELS === id) {
    const intl3 = arg1(dependencyMap[10]).intl;
    return intl3.string(arg1(dependencyMap[10]).t.OGiMXJ);
  } else if (SearchTabs.MEMBERS === id) {
    const intl2 = arg1(dependencyMap[10]).intl;
    return intl2.string(arg1(dependencyMap[10]).t.9Oq93m);
  } else if (SearchTabs.THREADS === id) {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.B2panI);
  }
};
export const searchModeToSearchQueryParams = function searchModeToSearchQueryParams(searchMode) {
  if (constants3.MOST_RELEVANT === searchMode) {
    return { libvpx: true, Zt4Mf4: true };
  } else if (constants3.OLDEST === searchMode) {
    return { libvpx: 24, Zt4Mf4: 24 };
  } else {
    const NEWEST = constants3.NEWEST;
    return {};
  }
};
export const searchQueryParamsToSearchMode = function searchQueryParamsToSearchMode(sort_by) {
  if (null != sort_by.sort_by) {
    if (null != sort_by.sort_order) {
      if ("relevance" === sort_by.sort_by) {
        let NEWEST = constants3.MOST_RELEVANT;
      } else if ("asc" === sort_by.sort_order) {
        NEWEST = constants3.OLDEST;
      } else {
        NEWEST = constants3.NEWEST;
      }
    }
    return NEWEST;
  }
  NEWEST = constants3.NEWEST;
};
export const getSearchOptionAnswer = function getSearchOptionAnswer(arg0) {
  if (SearchTokenTypes.FILTER_FROM === arg0) {
    const intl10 = arg1(dependencyMap[10]).intl;
    return intl10.string(arg1(dependencyMap[10]).t.E466pL);
  } else if (SearchTokenTypes.FILTER_MENTIONS === arg0) {
    const intl9 = arg1(dependencyMap[10]).intl;
    return intl9.string(arg1(dependencyMap[10]).t.BYvFWl);
  } else if (SearchTokenTypes.FILTER_HAS === arg0) {
    const intl8 = arg1(dependencyMap[10]).intl;
    return intl8.string(arg1(dependencyMap[10]).t.bhSYbc);
  } else {
    if (SearchTokenTypes.FILTER_BEFORE !== arg0) {
      if (SearchTokenTypes.FILTER_ON !== arg0) {
        if (SearchTokenTypes.FILTER_AFTER !== arg0) {
          if (SearchTokenTypes.FILTER_IN === arg0) {
            const intl6 = arg1(dependencyMap[10]).intl;
            return intl6.string(arg1(dependencyMap[10]).t.GpM+/7);
          } else if (SearchTokenTypes.FILTER_LINK_FROM === arg0) {
            const intl5 = arg1(dependencyMap[10]).intl;
            return intl5.string(arg1(dependencyMap[10]).t.FdDTni);
          } else if (SearchTokenTypes.FILTER_FILE_TYPE === arg0) {
            const intl4 = arg1(dependencyMap[10]).intl;
            return intl4.string(arg1(dependencyMap[10]).t.FXcAFe);
          } else if (SearchTokenTypes.FILTER_FILE_NAME === arg0) {
            const intl3 = arg1(dependencyMap[10]).intl;
            return intl3.string(arg1(dependencyMap[10]).t.uAbFDM);
          } else if (SearchTokenTypes.FILTER_PINNED === arg0) {
            const intl2 = arg1(dependencyMap[10]).intl;
            return intl2.string(arg1(dependencyMap[10]).t.UJxL3V);
          } else if (SearchTokenTypes.FILTER_AUTHOR_TYPE === arg0) {
            const intl = arg1(dependencyMap[10]).intl;
            return intl.string(arg1(dependencyMap[10]).t.qCQzBl);
          }
        }
      }
    }
    const intl7 = arg1(dependencyMap[10]).intl;
    return intl7.string(arg1(dependencyMap[10]).t.Zbbc1E);
  }
};
export const ShowDatePicker = obj;
export const setIncludeNSFW = function setIncludeNSFW(arg0, guildIdFromSearchContext) {
  if (closure_6.didAgree(guildIdFromSearchContext)) {
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      arg0.include_nsfw = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
      const tmp4 = null == currentUser.nsfwAllowed || currentUser.nsfwAllowed;
    }
  }
};
export const getSearchQueryFromTokens = function getSearchQueryFromTokens(tokenizeQueryResult) {
  const obj = {};
  const arg1 = obj;
  const item = tokenizeQueryResult.forEach((type) => {
    type = type.type;
    if (!regex.test(type)) {
      if (constants.ANSWER_BEFORE !== type) {
        if (constants.ANSWER_ON !== type) {
          if (constants.ANSWER_AFTER !== type) {
            const tmp36 = callback(closure_2[11])[type];
            let str = null;
            if (null != tmp36) {
              str = tmp36.queryKey;
            }
            if (null == str) {
              str = "content";
            }
            if (null == obj[str]) {
              const _Set = Set;
              const set = new Set();
              obj[str] = set;
            }
            if (constants.ANSWER_USERNAME_FROM !== type) {
              if (constants.ANSWER_USERNAME_MENTIONS !== type) {
                if (constants.ANSWER_LINK_FROM !== type) {
                  if (constants.ANSWER_FILE_TYPE !== type) {
                    if (constants.ANSWER_FILE_NAME !== type) {
                      if (constants.ANSWER_IN === type) {
                        let data = type.getData("channelIds");
                        if (null == data) {
                          data = [];
                        }
                        const tmp16Result = closure_19(data);
                        let iter = tmp16Result();
                        if (!iter.done) {
                          obj.add(iter.value);
                          const iter2 = tmp16Result();
                          iter = iter2;
                        }
                        const tmp16 = closure_19;
                      } else if (constants.ANSWER_HAS === type) {
                        obj.add(type.getData("has"));
                      } else if (constants.ANSWER_PINNED === type) {
                        obj.add(type.getData("pinned"));
                      } else if (constants.ANSWER_AUTHOR_TYPE === type) {
                        obj.add(type.getData("author_type"));
                      } else {
                        obj.add(type.getFullMatch().trim());
                        const str2 = type.getFullMatch();
                      }
                    }
                  }
                }
                obj.add(type.getMatch(1));
              }
            }
            obj[str].add(type.getData("userId"));
          }
        }
      }
      const data1 = type.getData("start");
      const data2 = type.getData("end");
      if (data1) {
        obj.min_id = callback(closure_2[12]).fromTimestamp(data1);
        const obj2 = callback(closure_2[12]);
      }
      if (data2) {
        const fromTimestampResult = callback(closure_2[12]).fromTimestamp(data2);
        obj.max_id = fromTimestampResult;
        const obj3 = callback(closure_2[12]);
      }
    }
  });
  const entries = Object.entries(obj);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp2 = callback;
    let tmp3 = callback(entries[num], 2);
    let tmp5 = tmp3[1];
    let _Set = Set;
    if (tmp5 instanceof Set) {
      let _Array = Array;
      obj[tmp4] = Array.from(tmp5);
    }
  }
  if (obj.content) {
    delete r0.contents;
    const content = obj.content;
    obj.content = content.join(" ").trim();
    if (!obj.content) {
      delete r0.content;
    }
    const str2 = content.join(" ");
  }
  return obj;
};
export const getQueryContentString = function getQueryContentString(searchQueryFromTokens) {
  let contents;
  if (null != searchQueryFromTokens) {
    contents = searchQueryFromTokens.contents;
  }
  if (null != contents) {
    if (searchQueryFromTokens.contents.length > 0) {
      let joined;
      if (null != searchQueryFromTokens) {
        const contents1 = searchQueryFromTokens.contents;
        if (null != contents1) {
          const mapped = contents1.map((str) => {
            const parts = str.split("|");
            const substr = parts.slice(1);
            return substr.join("|");
          });
          joined = mapped.join(" ");
        }
      }
      let content = joined;
    }
    return content;
  }
  if (null != searchQueryFromTokens) {
    content = searchQueryFromTokens.content;
  }
};
export const getNonTokenQuery = function getNonTokenQuery(arr) {
  const mapped = arr.map((type) => {
    let str = "";
    if (type.type === callback(closure_2[13]).NON_TOKEN_TYPE) {
      str = type.getFullMatch();
    }
    return str;
  });
  return mapped.join(" ").trim();
};
export const getSelectionScope = function getSelectionScope(tokenizeQueryResult, focusOffset, anchorOffset) {
  focusOffset = tokenizeQueryResult;
  const importDefault = focusOffset;
  const dependencyMap = anchorOffset;
  const found = tokenizeQueryResult.find((start) => {
    if (arg1 >= start.start) {
      if (arg1 <= start.end) {
        if (arg2 >= start.start) {
          if (arg2 <= start.end) {
            let flag = true;
            if (null != start[arg1 + 1]) {
              let closure_4 = start[arg1 + 1];
              flag = true;
            }
          }
          return flag;
        }
      }
    }
    flag = false;
  });
  let tmp2 = null;
  if (null != found) {
    const obj = { previousToken: closure_3, currentToken: found, nextToken: closure_4, focusOffset, anchorOffset };
    tmp2 = obj;
  }
  return tmp2;
};
export const getAutocompleteMode = function getAutocompleteMode(cursorScope, tokens) {
  let currentToken;
  let nextToken;
  let previousToken;
  let obj = cursorScope;
  if (null == cursorScope) {
    obj = {};
  }
  ({ currentToken, nextToken, previousToken } = obj);
  if (0 === tokens.length) {
    obj = { "Null": "mn", "Null": "description", "Null": "Array", type: constants2.EMPTY };
    return obj;
  } else if (null == currentToken) {
    obj = { "Null": "mn", "Null": "description", "Null": "Array", type: constants2.FILTER_ALL };
    return obj;
  } else {
    if (obj9.isSearchFilterTokenType(currentToken.type)) {
      if (null != nextToken) {
        if (nextToken.type !== importDefault(dependencyMap[13]).NON_TOKEN_TYPE) {
          if (null != nextToken) {
            if (!regex.test(nextToken.type)) {
              const obj1 = { type: constants2.FILTER, filter: currentToken.type, token: null };
              return obj1;
            }
          }
        }
      }
      let obj2 = { type: constants2.FILTER, filter: currentToken.type, token: nextToken };
      return obj2;
    }
    if (currentToken.type === importDefault(dependencyMap[13]).NON_TOKEN_TYPE) {
      if (null != previousToken) {
        obj2 = tokens(dependencyMap[11]);
        if (obj2.isSearchFilterTokenType(previousToken.type)) {
          const obj3 = { type: constants2.FILTER, filter: previousToken.type, token: currentToken };
          let obj4 = obj3;
        }
        return obj4;
      }
    }
    let tmp9;
    if (currentToken.type === importDefault(dependencyMap[13]).NON_TOKEN_TYPE) {
      tmp9 = currentToken;
    }
    obj4 = { type: constants2.FILTER_ALL, filter: null, token: tmp9 };
    const obj9 = tokens(dependencyMap[11]);
  }
};
export { quoteChannelName };
export const getFlattenedAutocompleteResults = function getFlattenedAutocompleteResults(arg0, arg1) {
  const importDefault = [];
  const item = importDefault(dependencyMap[14])(arg0).forEach((results) => {
    const arg1 = results;
    if (null != results) {
      if (0 !== results.results.length) {
        let group = results.group;
        results = results.results;
        group = group.concat(results.map((result) => {
          const text = result.text;
          let tmp = text;
          if (null != result.channel) {
            tmp = callback2(text);
          }
          let combined = tmp;
          if (result.type === constants.FILTER_ALL) {
            let group = result.group;
            if (null == group) {
              group = callback;
            }
            const callback = group;
            const tmp7 = callback(closure_2[11])[closure_1];
            let key;
            if (null != tmp7) {
              key = tmp7.key;
            }
            let tmp9 = null != key;
            if (tmp9) {
              let key1;
              if (null != tmp7) {
                key1 = tmp7.key;
              }
              tmp9 = "" !== key1;
            }
            combined = tmp;
            if (tmp9) {
              const _HermesInternal = HermesInternal;
              combined = "" + tmp7.key + " " + tmp;
            }
          }
          const obj = { result, group: result.group, resultText: combined };
          return obj;
        }));
      }
    }
  });
  return importDefault.filter((resultText) => resultText.resultText);
};
export const getQueryFromTokens = function getQueryFromTokens(tokens) {
  let str = "";
  if (null != tokens) {
    const mapped = tokens.map((getFullMatch) => getFullMatch.getFullMatch());
    str = mapped.join("");
  }
  return str;
};
export const queryHasFilter = function queryHasFilter(searchQueryString) {
  return tokenizeQuery(searchQueryString).some((type) => type.type === arg1);
};
export { tokenizeQuery };
export const clearTokenCache = function clearTokenCache() {
  importDefaultResult1.clearCache();
  importDefaultResult2.clearCache();
};
export const showDatePicker = function showDatePicker(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = obj[arg0];
  }
  return tmp;
};
export const filterHasAnswer = function filterHasAnswer(type, type2) {
  const isMatch = regex2.test(type.type);
  let tmp2 = null == type2 && isMatch;
  if (!tmp2) {
    let tmp3 = null != type2 && isMatch;
    if (tmp3) {
      tmp3 = !regex.test(type2.type);
    }
    tmp2 = tmp3;
  }
  return !tmp2;
};
export const refreshSearchTokens = function refreshSearchTokens() {
  const result = arg1(dependencyMap[11]).rebuildSearchTokenConfigs();
  importDefaultResult1.reset();
  const obj = arg1(dependencyMap[11]);
  const tmp3 = importDefault(dependencyMap[14]);
  importDefault(dependencyMap[14])(importDefault(dependencyMap[11])).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return closure_17.addRule({ type });
  });
  importDefaultResult2.reset();
  const tmp3Result = importDefault(dependencyMap[14])(importDefault(dependencyMap[11]));
  const crossDMSearchTokensConfig = arg1(dependencyMap[11]).buildCrossDMSearchTokensConfig();
  const obj3 = arg1(dependencyMap[11]);
  importDefault(dependencyMap[14])(crossDMSearchTokensConfig).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return closure_18.addRule({ type });
  });
  const obj4 = importDefault(dependencyMap[14])(crossDMSearchTokensConfig);
  const result1 = importDefault(dependencyMap[15]).markSearchTokensRefreshed();
};
export const getChannelDisplayName = function getChannelDisplayName(isDM) {
  const channelName = arg1(dependencyMap[16]).computeChannelName(isDM, authStore, closure_7);
  if (isDM.isDM()) {
    const user = authStore.getUser(isDM.getRecipientId());
    const userTag = importDefault(dependencyMap[17]).getUserTag(user);
    let flag = false;
    let name = userTag;
    if (null == userTag) {
      return null;
    }
    const obj2 = importDefault(dependencyMap[17]);
  } else {
    name = channelName;
    flag = false;
    if (!isDM.isGroupDM()) {
      const tmp2 = !isDM.isThread();
      const tmp4 = store.getTextChannelNameDisambiguations(isDM.getGuildId())[isDM.id];
      name = undefined;
      if (null != tmp4) {
        name = tmp4.name;
      }
      name = channelName;
      flag = tmp2;
      if (null != name) {
        name = tmp4.name;
        flag = tmp2;
      }
    }
  }
  const tmp13 = quoteChannelName(name);
  let combined = tmp13;
  if (flag) {
    const _HermesInternal = HermesInternal;
    combined = "#" + tmp13;
  }
  return combined;
};
export const getChannelPlaceholderName = function getChannelPlaceholderName(isGroupDM) {
  if (isGroupDM.isGroupDM()) {
    return arg1(dependencyMap[16]).computeChannelName(isGroupDM, authStore, closure_7);
  } else if (isGroupDM.isDM()) {
    const user = authStore.getUser(isGroupDM.getRecipientId());
    return importDefault(dependencyMap[17]).getUserTag(user);
  } else {
    const tmp2 = store.getTextChannelNameDisambiguations(isGroupDM.getGuildId())[isGroupDM.id];
    let name;
    if (null != tmp2) {
      name = tmp2.name;
    }
    if (null == name) {
      name = arg1(dependencyMap[16]).computeChannelName(isGroupDM, authStore, closure_7);
      const obj = arg1(dependencyMap[16]);
    }
    return name;
  }
};
export const removeInvalidPrivateChannelSearchTokens = function removeInvalidPrivateChannelSearchTokens(arg0) {
  const items = [];
  const arg1 = items;
  const item = importDefaultResult2.tokenize(arg0).forEach((type) => {
    let tmp = type.type === constants.FILTER_IN;
    if (!tmp) {
      tmp = type.type === constants.ANSWER_IN;
    }
    if (!tmp) {
      items.push(type);
    }
  });
  const importDefault = "";
  const item1 = items.forEach((getFullMatch) => {
    closure_1 = closure_1 + getFullMatch.getFullMatch();
  });
  return importDefault.trim();
};
