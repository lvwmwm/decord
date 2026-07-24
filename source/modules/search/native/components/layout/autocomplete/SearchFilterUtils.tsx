// Module ID: 15371
// Function ID: 117259
// Name: getSearchTokenText
// Dependencies: [9141, 9169, 653, 1212, 10997, 9691, 12904, 4647, 8505, 15372, 15374, 9068, 10111, 11434, 11426, 4098, 8433, 1934, 10108, 2]
// Exports: getSearchFilterSuggestions, getSearchTokenIcon, getSearchTokenLabel, getSearchTokenPressHandler, getSearchTokenSubLabel

// Module 15371 (getSearchTokenText)
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
let closure_8;
function getSearchTokenText(arg0) {
  let tmp = importDefault(10111)[arg0];
  if (null == tmp) {
    const result = require(10111) /* getMonths */.rebuildSearchTokenConfigs();
    tmp = importDefault(10111)[arg0];
    const obj = require(10111) /* getMonths */;
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
({ EMPTY_SEARCH_QUERY_STRING: closure_3, SearchQueryTagTypes: closure_4 } = SearchAutocompleteSelectAnalyticsActions);
({ SEARCH_DATE_FORMAT: closure_6, SearchTokenTypes: closure_7, SearchTypes: closure_8 } = ME);
let result = require("ME").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(outer1_0, searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t["6iuVMn"]);
  } else if (constants.FILTER_HAS === searchTokenType) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.DMAzx8);
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.CMKzQx);
  } else if (constants.FILTER_IN === searchTokenType) {
    if (outer1_0.type === constants2.DMS) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl6.string(require(1212) /* getSystemLocale */.t["8Fmo42"]);
    } else {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl5.string(require(1212) /* getSystemLocale */.t.cdPmq8);
    }
    return stringResult;
  } else if (constants.FILTER_ON === searchTokenType) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.h4qGfp);
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.c9qSBR);
  } else if (constants.FILTER_AFTER === searchTokenType) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.hcMwDW);
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.kkGlww);
  } else if (constants.FILTER_HAS === searchTokenType) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.gUfZa2);
  } else if (constants.FILTER_IN === searchTokenType) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.qDUdlT);
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.ILtwK5);
  } else if (constants.FILTER_ON === searchTokenType) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.t8bWvr);
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.YEN3uU);
  } else if (constants.FILTER_AFTER === searchTokenType) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.hwbB7s);
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenIcon = function getSearchTokenIcon(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    return require(10997) /* UserIcon */.UserIcon;
  } else if (constants.FILTER_HAS === searchTokenType) {
    return require(9691) /* AttachmentIcon */.AttachmentIcon;
  } else if (constants.FILTER_IN === searchTokenType) {
    return require(12904) /* ChannelListMagnifyingGlassIcon */.ChannelListMagnifyingGlassIcon;
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    return require(4647) /* AtIcon */.AtIcon;
  } else if (constants.FILTER_ON === searchTokenType) {
    return require(8505) /* CalendarIcon */.CalendarIcon;
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    return require(15372) /* CalendarMinusIcon */.CalendarMinusIcon;
  } else if (constants.FILTER_AFTER === searchTokenType) {
    return require(15374) /* CalendarPlusIcon */.CalendarPlusIcon;
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    return require(9068) /* RobotIcon */.RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenIcon] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(outer1_0, token, CONTEXT_MENU) {
  let closure_0 = outer1_0;
  let closure_1 = token;
  let closure_2 = CONTEXT_MENU;
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
              (function handleSearchDateTokenPress(closure_0, closure_1, closure_2) {
                const callback = closure_0;
                const table = closure_2;
                const result = callback(table[14]).performKeyboardAwareNavigation(() => {
                  let obj = callback2(paths[15]);
                  obj = {
                    onSubmit(format) {
                      let closure_0 = format.format(outer4_6);
                      let obj = callback(11434);
                      obj.updateSearchQuery(outer1_0, () => { ... });
                      obj = { searchContext: outer1_0, searchTokenType: outer1_1, location: outer1_2 };
                      callback(10108).trackSearchFilterAdd(obj);
                      const obj2 = callback(10108);
                      const initialMessages = callback(11426).fetchInitialMessages(outer1_0);
                    }
                  };
                  obj.openLazy(callback(paths[17])(paths[16], paths.paths), "DatePicker", obj);
                });
              })(closure_0, closure_1, closure_2);
            };
          }
        }
      }
    }
  }
  return () => {
    (function handleSearchTokenPress(closure_0, closure_1, closure_2) {
      closure_0 = closure_1;
      const callback = closure_2;
      callback(11434).updateSearchQuery(closure_0, (saveDraftTextInputValue) => {
        if (closure_1 === outer3_5.CONTEXT_MENU) {
          const result = saveDraftTextInputValue.saveDraftTextInputValue();
        }
        saveDraftTextInputValue.setTextInputValue(outer3_3);
        saveDraftTextInputValue.addTag({ type: outer3_4.PREFIX, searchTokenType: closure_0, location: closure_1, text: outer3_9(closure_0) });
      });
      const obj = callback(11434);
      callback(11426).syncAutocomplete(closure_0);
    })(closure_0, closure_1, closure_2);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  let closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(10111));
  const item = keys.forEach((token) => {
    let obj = textInputValue(outer1_2[12]);
    if (obj.isSearchFilterTokenType(token)) {
      const plainText = items(outer1_2[12])[token].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(textInputValue)) {
          obj = { token, text: plainText };
          items.push(obj);
        }
      }
    }
  });
  return items;
};
