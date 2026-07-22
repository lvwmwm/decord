// Module ID: 15208
// Function ID: 114767
// Name: getSearchTokenText
// Dependencies: []
// Exports: getSearchFilterSuggestions, getSearchTokenIcon, getSearchTokenLabel, getSearchTokenPressHandler, getSearchTokenSubLabel

// Module 15208 (getSearchTokenText)
function getSearchTokenText(arg0) {
  let tmp = importDefault(dependencyMap[12])[arg0];
  if (null == tmp) {
    const result = require(dependencyMap[12]).rebuildSearchTokenConfigs();
    tmp = importDefault(dependencyMap[12])[arg0];
    const obj = require(dependencyMap[12]);
  }
  let key;
  if (null != tmp) {
    key = tmp.key;
  }
  if (null == key) {
    key = arg0.toString();
  }
  return key;
}
const _module = require(dependencyMap[0]);
({ EMPTY_SEARCH_QUERY_STRING: closure_3, SearchQueryTagTypes: closure_4 } = _module);
const SearchFilterAddLocations = require(dependencyMap[1]).SearchFilterAddLocations;
const _module1 = require(dependencyMap[2]);
({ SEARCH_DATE_FORMAT: closure_6, SearchTokenTypes: closure_7, SearchTypes: closure_8 } = _module1);
const _module2 = require(dependencyMap[19]);
const result = _module2.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(closure_0, searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl9 = require(dependencyMap[3]).intl;
    return intl9.string(require(dependencyMap[3]).t.6iuVMn);
  } else if (constants.FILTER_HAS === searchTokenType) {
    const intl8 = require(dependencyMap[3]).intl;
    return intl8.string(require(dependencyMap[3]).t.DMAzx8);
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    const intl7 = require(dependencyMap[3]).intl;
    return intl7.string(require(dependencyMap[3]).t.CMKzQx);
  } else if (constants.FILTER_IN === searchTokenType) {
    if (closure_0.type === constants2.DMS) {
      const intl6 = require(dependencyMap[3]).intl;
      let stringResult = intl6.string(require(dependencyMap[3]).t.8Fmo42);
    } else {
      const intl5 = require(dependencyMap[3]).intl;
      stringResult = intl5.string(require(dependencyMap[3]).t.cdPmq8);
    }
    return stringResult;
  } else if (constants.FILTER_ON === searchTokenType) {
    const intl4 = require(dependencyMap[3]).intl;
    return intl4.string(require(dependencyMap[3]).t.h4qGfp);
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    const intl3 = require(dependencyMap[3]).intl;
    return intl3.string(require(dependencyMap[3]).t.c9qSBR);
  } else if (constants.FILTER_AFTER === searchTokenType) {
    const intl2 = require(dependencyMap[3]).intl;
    return intl2.string(require(dependencyMap[3]).t.hcMwDW);
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl8 = require(dependencyMap[3]).intl;
    return intl8.string(require(dependencyMap[3]).t.kkGlww);
  } else if (constants.FILTER_HAS === searchTokenType) {
    const intl7 = require(dependencyMap[3]).intl;
    return intl7.string(require(dependencyMap[3]).t.gUfZa2);
  } else if (constants.FILTER_IN === searchTokenType) {
    const intl6 = require(dependencyMap[3]).intl;
    return intl6.string(require(dependencyMap[3]).t.qDUdlT);
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    const intl5 = require(dependencyMap[3]).intl;
    return intl5.string(require(dependencyMap[3]).t.ILtwK5);
  } else if (constants.FILTER_ON === searchTokenType) {
    const intl4 = require(dependencyMap[3]).intl;
    return intl4.string(require(dependencyMap[3]).t.t8bWvr);
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    const intl3 = require(dependencyMap[3]).intl;
    return intl3.string(require(dependencyMap[3]).t.YEN3uU);
  } else if (constants.FILTER_AFTER === searchTokenType) {
    const intl2 = require(dependencyMap[3]).intl;
    return intl2.string(require(dependencyMap[3]).t.hwbB7s);
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenIcon = function getSearchTokenIcon(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    return require(dependencyMap[4]).UserIcon;
  } else if (constants.FILTER_HAS === searchTokenType) {
    return require(dependencyMap[5]).AttachmentIcon;
  } else if (constants.FILTER_IN === searchTokenType) {
    return require(dependencyMap[6]).ChannelListMagnifyingGlassIcon;
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    return require(dependencyMap[7]).AtIcon;
  } else if (constants.FILTER_ON === searchTokenType) {
    return require(dependencyMap[8]).CalendarIcon;
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    return require(dependencyMap[9]).CalendarMinusIcon;
  } else if (constants.FILTER_AFTER === searchTokenType) {
    return require(dependencyMap[10]).CalendarPlusIcon;
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    return require(dependencyMap[11]).RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenIcon] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(closure_0, token, CONTEXT_MENU) {
  const require = closure_0;
  const importDefault = token;
  const dependencyMap = CONTEXT_MENU;
  if (constants.FILTER_FROM !== token) {
    if (constants.FILTER_IN !== token) {
      if (constants.FILTER_HAS !== token) {
        if (constants.FILTER_MENTIONS !== token) {
          if (constants.FILTER_AUTHOR_TYPE !== token) {
            if (constants.FILTER_ON !== token) {
              if (constants.FILTER_BEFORE !== token) {
                if (constants.FILTER_AFTER !== token) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error = new Error("[getSearchTokenPressHandler] Unhandled search token type: " + token);
                  throw error;
                }
              }
            }
            return () => {
              function handleSearchDateTokenPress(arg0, arg1, arg2) {
                const result = arg0(arg2[14]).performKeyboardAwareNavigation(() => {
                  let obj = arg1(arg2[15]);
                  obj = {
                    onSubmit(format) {
                      let closure_0 = format.format(closure_6);
                      let obj = callback(closure_2[13]);
                      obj.updateSearchQuery(closure_0, () => { ... });
                      obj = { searchContext: closure_0, searchTokenType: callback, location: closure_2 };
                      callback(closure_2[18]).trackSearchFilterAdd(obj);
                      const obj2 = callback(closure_2[18]);
                      const initialMessages = callback(closure_2[14]).fetchInitialMessages(closure_0);
                    }
                  };
                  obj.openLazy(arg0(arg2[17])(arg2[16], arg2.paths), "DatePicker", obj);
                });
              }(arg0, arg1, arg2);
            };
          }
        }
      }
    }
  }
  return () => {
    function handleSearchTokenPress(searchContext, arg1, arg2) {
      arg2(closure_2[13]).updateSearchQuery(searchContext, (saveDraftTextInputValue) => {
        if (arg2 === constants2.CONTEXT_MENU) {
          const result = saveDraftTextInputValue.saveDraftTextInputValue();
        }
        saveDraftTextInputValue.setTextInputValue(closure_3);
        saveDraftTextInputValue.addTag({ type: constants.PREFIX, searchTokenType: arg1, location: arg2, text: callback(arg1) });
      });
      const obj = arg2(closure_2[13]);
      arg2(closure_2[14]).syncAutocomplete(searchContext);
    }(arg0, arg1, arg2);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  const require = textInputValue;
  const items = [];
  const importDefault = items;
  const keys = Object.keys(importDefault(dependencyMap[12]));
  const item = keys.forEach((token) => {
    let obj = token(closure_2[12]);
    if (obj.isSearchFilterTokenType(token)) {
      const plainText = items(closure_2[12])[token].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(token)) {
          obj = { token, text: plainText };
          items.push(obj);
        }
      }
    }
  });
  return items;
};
