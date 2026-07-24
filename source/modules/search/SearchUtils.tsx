// Module ID: 10110
// Function ID: 78038
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1348, 1907, 4346, 3767, 1906, 1849, 9141, 653, 3712, 1212, 10111, 21, 10116, 22, 10117, 4320, 3969, 2]
// Exports: clearTokenCache, filterHasAnswer, getAutocompleteMode, getChannelActiveAgoTimestamp, getChannelDisplayName, getChannelIdFromSearchContext, getChannelPlaceholderName, getFlattenedAutocompleteResults, getGuildIdFromSearchContext, getIndexingErrorText, getNonTokenQuery, getQueryContentString, getQueryFromTokens, getSearchHistoryStateId, getSearchOptionAnswer, getSearchQueryFromTokens, getSearchTabFetchId, getSelectionScope, getTabTitle, isGuildLikeSearchContext, queryHasFilter, refreshSearchTokens, removeInvalidPrivateChannelSearchTokens, searchModeToSearchQueryParams, searchQueryParamsToSearchMode, setIncludeNSFW, showDatePicker

// Module 10110 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { SearchTabs } from "SearchAutocompleteSelectAnalyticsActions";
import ME from "ME";
import importDefaultResult1 from "getMatch";
import importDefaultResult2 from "getMatch";

let ME;
let SearchTokenTypes;
let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
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
({ SearchTypes: closure_10, SearchTokenTypes } = ME);
({ SearchPopoutModes: closure_12, IS_SEARCH_ANSWER_TOKEN: closure_13, IS_SEARCH_FILTER_TOKEN: closure_14, SearchModes: closure_15, ME } = ME);
let obj = { [SearchTokenTypes.FILTER_BEFORE]: true, [SearchTokenTypes.FILTER_AFTER]: true, [SearchTokenTypes.FILTER_ON]: true };
importDefaultResult1 = new importDefaultResult1();
importDefaultResult2 = new importDefaultResult2();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/SearchUtils.tsx");

export { getSearchContextId };
export const getSearchHistoryStateId = function getSearchHistoryStateId(searchContext) {
  return getSearchContextId(searchContext);
};
export const getSearchTabFetchId = function getSearchTabFetchId(searchContext, closure_1, searchResultsQuery) {
  return "" + getSearchContextId(searchContext) + "-" + closure_1 + "-" + searchResultsQuery;
};
export const getChannelActiveAgoTimestamp = function getChannelActiveAgoTimestamp(c4) {
  let obj = importDefault(3712)();
  const diffResult = obj.diff(importDefault(3712)(c4), "s");
  if (diffResult > 31536000) {
    const _Math5 = Math;
    const rounded = Math.round(diffResult / 31536000);
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj = { count: rounded };
    return intl7.formatToPlainString(require(1212) /* getSystemLocale */.t["7th+Mf"], obj);
  } else if (diffResult > 2592000) {
    const _Math4 = Math;
    const rounded1 = Math.round(diffResult / 2592000);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj = { count: rounded1 };
    return intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.g2uHTD, obj);
  } else if (diffResult > 172800) {
    const _Math3 = Math;
    const rounded2 = Math.round(diffResult / 86400);
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { count: rounded2 };
    return intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.HNgi95, obj1);
  } else if (diffResult > 86400) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.uNkIhT);
  } else if (diffResult > 3600) {
    const _Math2 = Math;
    const rounded3 = Math.round(diffResult / 3600);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { count: rounded3 };
    return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.WJBWP1, obj2);
  } else if (diffResult > 60) {
    const _Math = Math;
    const rounded4 = Math.round(diffResult / 60);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { count: rounded4 };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.CbRfwg, obj3);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["5Ldpkc"]);
  }
};
export const getIndexingErrorText = function getIndexingErrorText(searchContext) {
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.Q0JJjv);
  } else if (constants.DMS === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.Br0xJA);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.AXPbZr);
  }
};
export const getGuildIdFromSearchContext = function getGuildIdFromSearchContext(searchContext) {
  const type = searchContext.type;
  if (constants.GUILD_CHANNEL !== type) {
    if (constants.GUILD !== type) {
      if (constants.THREAD !== type) {
        if (constants.CHANNEL === type) {
          channel = channel.getChannel(searchContext.channelId);
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
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.tWnHcL);
  } else if (SearchTabs.MESSAGES === id) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.dvZAkp);
  } else if (SearchTabs.PEOPLE === id) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t["GFd/I5"]);
  } else if (SearchTabs.MEDIA === id) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t["Aw9+/M"]);
  } else if (SearchTabs.PINS === id) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t["/MoGoB"]);
  } else if (SearchTabs.LINKS === id) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.DFSvTt);
  } else if (SearchTabs.FILES === id) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["WgVYR/"]);
  } else if (SearchTabs.GUILD_CHANNELS === id) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.OGiMXJ);
  } else if (SearchTabs.MEMBERS === id) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["9Oq93m"]);
  } else if (SearchTabs.THREADS === id) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.B2panI);
  }
};
export const searchModeToSearchQueryParams = function searchModeToSearchQueryParams(searchMode) {
  if (constants3.MOST_RELEVANT === searchMode) {
    return { sort_by: "relevance", sort_order: "desc" };
  } else if (constants3.OLDEST === searchMode) {
    return { sort_by: "timestamp", sort_order: "asc" };
  } else {
    const NEWEST = constants3.NEWEST;
    return { sort_by: "timestamp", sort_order: "desc" };
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
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.E466pL);
  } else if (SearchTokenTypes.FILTER_MENTIONS === arg0) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.BYvFWl);
  } else if (SearchTokenTypes.FILTER_HAS === arg0) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.bhSYbc);
  } else {
    if (SearchTokenTypes.FILTER_BEFORE !== arg0) {
      if (SearchTokenTypes.FILTER_ON !== arg0) {
        if (SearchTokenTypes.FILTER_AFTER !== arg0) {
          if (SearchTokenTypes.FILTER_IN === arg0) {
            const intl6 = require(1212) /* getSystemLocale */.intl;
            return intl6.string(require(1212) /* getSystemLocale */.t["GpM+/7"]);
          } else if (SearchTokenTypes.FILTER_LINK_FROM === arg0) {
            const intl5 = require(1212) /* getSystemLocale */.intl;
            return intl5.string(require(1212) /* getSystemLocale */.t.FdDTni);
          } else if (SearchTokenTypes.FILTER_FILE_TYPE === arg0) {
            const intl4 = require(1212) /* getSystemLocale */.intl;
            return intl4.string(require(1212) /* getSystemLocale */.t.FXcAFe);
          } else if (SearchTokenTypes.FILTER_FILE_NAME === arg0) {
            const intl3 = require(1212) /* getSystemLocale */.intl;
            return intl3.string(require(1212) /* getSystemLocale */.t.uAbFDM);
          } else if (SearchTokenTypes.FILTER_PINNED === arg0) {
            const intl2 = require(1212) /* getSystemLocale */.intl;
            return intl2.string(require(1212) /* getSystemLocale */.t.UJxL3V);
          } else if (SearchTokenTypes.FILTER_AUTHOR_TYPE === arg0) {
            const intl = require(1212) /* getSystemLocale */.intl;
            return intl.string(require(1212) /* getSystemLocale */.t.qCQzBl);
          }
        }
      }
    }
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.Zbbc1E);
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
  const item = tokenizeQueryResult.forEach((type) => {
    type = type.type;
    if (!outer1_14.test(type)) {
      if (outer1_11.ANSWER_BEFORE !== type) {
        if (outer1_11.ANSWER_ON !== type) {
          if (outer1_11.ANSWER_AFTER !== type) {
            const tmp36 = outer1_1(outer1_2[11])[type];
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
            if (outer1_11.ANSWER_USERNAME_FROM !== type) {
              if (outer1_11.ANSWER_USERNAME_MENTIONS !== type) {
                if (outer1_11.ANSWER_LINK_FROM !== type) {
                  if (outer1_11.ANSWER_FILE_TYPE !== type) {
                    if (outer1_11.ANSWER_FILE_NAME !== type) {
                      if (outer1_11.ANSWER_IN === type) {
                        let data = type.getData("channelIds");
                        if (null == data) {
                          data = [];
                        }
                        const tmp16Result = outer1_19(data);
                        let iter = tmp16Result();
                        if (!iter.done) {
                          obj.add(iter.value);
                          const iter2 = tmp16Result();
                          iter = iter2;
                        }
                        const tmp16 = outer1_19;
                      } else if (outer1_11.ANSWER_HAS === type) {
                        obj.add(type.getData("has"));
                      } else if (outer1_11.ANSWER_PINNED === type) {
                        obj.add(type.getData("pinned"));
                      } else if (outer1_11.ANSWER_AUTHOR_TYPE === type) {
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
        obj.min_id = outer1_1(outer1_2[12]).fromTimestamp(data1);
        const obj2 = outer1_1(outer1_2[12]);
      }
      if (data2) {
        const fromTimestampResult = outer1_1(outer1_2[12]).fromTimestamp(data2);
        obj.max_id = fromTimestampResult;
        const obj3 = outer1_1(outer1_2[12]);
      }
    }
  });
  const entries = Object.entries(obj);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp3 = callback;
    let tmp4 = callback(entries[num], 2);
    let tmp6 = tmp4[1];
    let _Set = Set;
    if (tmp6 instanceof Set) {
      let _Array = Array;
      obj[tmp5] = Array.from(tmp6);
    }
  }
  if (obj.content) {
    delete tmp.contents;
    const content = obj.content;
    obj.content = content.join(" ").trim();
    if (!obj.content) {
      delete tmp.content;
    }
    let str2 = content.join(" ");
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
    if (type.type === outer1_1(outer1_2[13]).NON_TOKEN_TYPE) {
      str = type.getFullMatch();
    }
    return str;
  });
  return mapped.join(" ").trim();
};
export const getSelectionScope = function getSelectionScope(tokenizeQueryResult, focusOffset, anchorOffset) {
  let closure_0 = tokenizeQueryResult;
  let closure_1 = focusOffset;
  let closure_2 = anchorOffset;
  const found = tokenizeQueryResult.find((start) => {
    if (closure_1 >= start.start) {
      if (closure_1 <= start.end) {
        if (closure_2 >= start.start) {
          if (closure_2 <= start.end) {
            let flag = true;
            if (null != tokenizeQueryResult[arg1 + 1]) {
              let _isNativeReflectConstruct = tokenizeQueryResult[arg1 + 1];
              flag = true;
            }
          }
          return flag;
        }
      }
    }
    let _slicedToArray = start;
    flag = false;
  });
  let tmp2 = null;
  if (null != found) {
    const obj = { previousToken: _slicedToArray, currentToken: found, nextToken: _isNativeReflectConstruct, focusOffset, anchorOffset };
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
    obj = { type: constants2.EMPTY, filter: null, token: null };
    return obj;
  } else if (null == currentToken) {
    obj = { type: constants2.FILTER_ALL, filter: null, token: null };
    return obj;
  } else {
    if (obj9.isSearchFilterTokenType(currentToken.type)) {
      if (null != nextToken) {
        if (nextToken.type !== importDefault(10116).NON_TOKEN_TYPE) {
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
    if (currentToken.type === importDefault(10116).NON_TOKEN_TYPE) {
      if (null != previousToken) {
        obj2 = require(10111) /* getMonths */;
        if (obj2.isSearchFilterTokenType(previousToken.type)) {
          const obj3 = { type: constants2.FILTER, filter: previousToken.type, token: currentToken };
          let obj4 = obj3;
        }
        return obj4;
      }
    }
    let tmp9;
    if (currentToken.type === importDefault(10116).NON_TOKEN_TYPE) {
      tmp9 = currentToken;
    }
    obj4 = { type: constants2.FILTER_ALL, filter: null, token: tmp9 };
    obj9 = require(10111) /* getMonths */;
  }
};
export { quoteChannelName };
export const getFlattenedAutocompleteResults = function getFlattenedAutocompleteResults(arg0, arg1) {
  let closure_0 = arg1;
  const importDefault = [];
  const item = importDefault(22)(arg0).forEach((results) => {
    let closure_0 = results;
    if (null != results) {
      if (0 !== results.results.length) {
        let group = results.group;
        results = results.results;
        group = group.concat(results.map((result) => {
          const text = result.text;
          let tmp = text;
          if (null != result.channel) {
            tmp = outer2_22(text);
          }
          let combined = tmp;
          if (closure_0.type === outer2_12.FILTER_ALL) {
            const group = result.group;
            const tmp7 = callback(outer2_2[11])[group];
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
          const obj = { result, group: closure_0.group, resultText: combined };
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
  let closure_0 = arg1;
  return tokenizeQuery(searchQueryString).some((type) => type.type === closure_0);
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
  const result = require(10111) /* getMonths */.rebuildSearchTokenConfigs();
  importDefaultResult1.reset();
  const obj = require(10111) /* getMonths */;
  const tmp3 = importDefault(22);
  importDefault(22)(importDefault(10111)).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return outer1_17.addRule({ type });
  });
  importDefaultResult2.reset();
  const tmp3Result = importDefault(22)(importDefault(10111));
  const crossDMSearchTokensConfig = require(10111) /* getMonths */.buildCrossDMSearchTokensConfig();
  const obj3 = require(10111) /* getMonths */;
  importDefault(22)(crossDMSearchTokensConfig).forOwn((arg0, type) => {
    const merged = Object.assign(arg0);
    return outer1_18.addRule({ type });
  });
  const obj4 = importDefault(22)(crossDMSearchTokensConfig);
  const result1 = importDefault(10117).markSearchTokensRefreshed();
};
export const getChannelDisplayName = function getChannelDisplayName(isDM) {
  const channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(isDM, authStore, closure_7);
  if (isDM.isDM()) {
    const user = authStore.getUser(isDM.getRecipientId());
    const userTag = importDefault(3969).getUserTag(user);
    let flag = false;
    let name = userTag;
    if (null == userTag) {
      return null;
    }
    const obj2 = importDefault(3969);
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
    return require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(isGroupDM, authStore, closure_7);
  } else if (isGroupDM.isDM()) {
    const user = authStore.getUser(isGroupDM.getRecipientId());
    return importDefault(3969).getUserTag(user);
  } else {
    const tmp2 = store.getTextChannelNameDisambiguations(isGroupDM.getGuildId())[isGroupDM.id];
    let name;
    if (null != tmp2) {
      name = tmp2.name;
    }
    if (null == name) {
      name = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(isGroupDM, authStore, closure_7);
      const obj = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    }
    return name;
  }
};
export const removeInvalidPrivateChannelSearchTokens = function removeInvalidPrivateChannelSearchTokens(arg0) {
  const items = [];
  const item = importDefaultResult2.tokenize(arg0).forEach((type) => {
    let tmp = type.type === outer1_11.FILTER_IN;
    if (!tmp) {
      tmp = type.type === outer1_11.ANSWER_IN;
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
