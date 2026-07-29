// Module ID: 15467
// Function ID: 15468
// Name: getSearchTokenLabel
// Dependencies: [9101, 9129, 676, 1236, 11015, 9677, 12983, 4704, 8327, 15468, 15470, 9026, 10104, 11460, 11452, 4157, 8253, 1959, 10101, 2]
// Exports: getSearchFilterSuggestions, getSearchTokenIcon, getSearchTokenLabel, getSearchTokenPressHandler, getSearchTokenSubLabel

// Module 15467 (getSearchTokenLabel)
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";

let c3;
let c4;
let closure_6;
let error;
let metroImportAll;
({ EMPTY_SEARCH_QUERY_STRING: c3, SearchQueryTagTypes: c4 } = SearchAutocompleteSelectAnalyticsActions);
({ SEARCH_DATE_FORMAT: closure_6, SearchTokenTypes: error, SearchTypes: metroImportAll } = ME);
let result = require("ME").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(closure_0, searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl9 = require(1236) /* getSystemLocale */.intl;
    return intl9.string(require(1236) /* getSystemLocale */.t["6iuVMn"]);
  } else if (tmp.FILTER_HAS === searchTokenType) {
    const intl8 = require(1236) /* getSystemLocale */.intl;
    return intl8.string(require(1236) /* getSystemLocale */.t.DMAzx8);
  } else if (tmp.FILTER_MENTIONS === searchTokenType) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    return intl7.string(require(1236) /* getSystemLocale */.t.CMKzQx);
  } else if (tmp.FILTER_IN === searchTokenType) {
    if (closure_0.type === constants2.DMS) {
      const intl6 = require(1236) /* getSystemLocale */.intl;
      let stringResult = intl6.string(require(1236) /* getSystemLocale */.t["8Fmo42"]);
    } else {
      const intl5 = require(1236) /* getSystemLocale */.intl;
      stringResult = intl5.string(require(1236) /* getSystemLocale */.t.cdPmq8);
    }
    return stringResult;
  } else if (tmp.FILTER_ON === searchTokenType) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.h4qGfp);
  } else if (tmp.FILTER_BEFORE === searchTokenType) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.c9qSBR);
  } else if (tmp.FILTER_AFTER === searchTokenType) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.hcMwDW);
  } else if (tmp.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl8 = require(1236) /* getSystemLocale */.intl;
    return intl8.string(require(1236) /* getSystemLocale */.t.kkGlww);
  } else if (tmp.FILTER_HAS === searchTokenType) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    return intl7.string(require(1236) /* getSystemLocale */.t.gUfZa2);
  } else if (tmp.FILTER_IN === searchTokenType) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t.qDUdlT);
  } else if (tmp.FILTER_MENTIONS === searchTokenType) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t.ILtwK5);
  } else if (tmp.FILTER_ON === searchTokenType) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.t8bWvr);
  } else if (tmp.FILTER_BEFORE === searchTokenType) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.YEN3uU);
  } else if (tmp.FILTER_AFTER === searchTokenType) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.hwbB7s);
  } else if (tmp.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenIcon = function getSearchTokenIcon(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    return require(11015) /* UserIcon */.UserIcon;
  } else if (tmp.FILTER_HAS === searchTokenType) {
    return require(9677) /* AttachmentIcon */.AttachmentIcon;
  } else if (tmp.FILTER_IN === searchTokenType) {
    return require(12983) /* ChannelListMagnifyingGlassIcon */.ChannelListMagnifyingGlassIcon;
  } else if (tmp.FILTER_MENTIONS === searchTokenType) {
    return require(4704) /* AtIcon */.AtIcon;
  } else if (tmp.FILTER_ON === searchTokenType) {
    return require(8327) /* CalendarIcon */.CalendarIcon;
  } else if (tmp.FILTER_BEFORE === searchTokenType) {
    return require(15468) /* CalendarMinusIcon */.CalendarMinusIcon;
  } else if (tmp.FILTER_AFTER === searchTokenType) {
    return require(15470) /* CalendarPlusIcon */.CalendarPlusIcon;
  } else if (tmp.FILTER_AUTHOR_TYPE === searchTokenType) {
    return require(9026) /* RobotIcon */.RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenIcon] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(closure_0, token, CONTEXT_MENU) {
  let closure_1 = token;
  let closure_2 = CONTEXT_MENU;
  if (constants.FILTER_FROM !== token) {
    if (tmp.FILTER_IN !== token) {
      if (tmp.FILTER_HAS !== token) {
        if (tmp.FILTER_MENTIONS !== token) {
          if (tmp.FILTER_AUTHOR_TYPE !== token) {
            if (tmp.FILTER_ON !== token) {
              if (tmp.FILTER_BEFORE !== token) {
                if (tmp.FILTER_AFTER !== token) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error = new Error("[getSearchTokenPressHandler] Unhandled search token type: " + token);
                  throw error;
                }
              }
            }
            return () => {
              let result = callback(CONTEXT_MENU[14]).performKeyboardAwareNavigation(() => {
                let obj = callback2(paths[15]);
                obj = {
                  onSubmit(format) {
                    let closure_0 = format.format(outer1_6);
                    let obj = outer1_1(outer1_2[13]);
                    obj.updateSearchQuery(closure_0, (setTextInputValue) => {
                      if (outer1_2 === outer2_5.SEARCH_INPUT_DROPDOWN) {
                        setTextInputValue.setTextInputValue(outer2_3);
                      }
                      setTextInputValue.removePrefixTags();
                      const obj = { type: outer2_4.COMPLETE, text: null, searchTokenType: null, location: null };
                      let tmp7 = outer2_1(outer2_2[12])[outer1_1];
                      if (null == tmp7) {
                        const result = outer2_0(tmp6[12]).rebuildSearchTokenConfigs();
                        tmp7 = outer2_1(tmp6[12])[str];
                        const obj2 = outer2_0(tmp6[12]);
                      }
                      let key;
                      if (tmp7 != null) {
                        key = tmp7.key;
                      }
                      if (key == null) {
                        key = str.toString();
                      }
                      obj[1] = "" + key + " " + closure_0;
                      obj[2] = outer1_1;
                      obj[3] = outer1_2;
                      setTextInputValue.addTag(obj);
                    });
                    obj = { searchContext: closure_0, searchTokenType: closure_1, location: closure_2 };
                    outer1_1(outer1_2[18]).trackSearchFilterAdd(obj);
                    let obj2 = outer1_1(outer1_2[18]);
                    const initialMessages = outer1_1(outer1_2[14]).fetchInitialMessages(closure_0);
                  }
                };
                obj.openLazy(callback(paths[17])(paths[16], paths.paths), "DatePicker", obj);
              });
            };
          }
        }
      }
    }
  }
  return () => {
    let closure_0 = token;
    token = CONTEXT_MENU;
    token(CONTEXT_MENU[13]).updateSearchQuery(closure_0, (saveDraftTextInputValue) => {
      if (callback2 === outer1_5.CONTEXT_MENU) {
        const result = saveDraftTextInputValue.saveDraftTextInputValue();
      }
      saveDraftTextInputValue.setTextInputValue(outer1_3);
      const obj = { type: outer1_4.PREFIX, searchTokenType: callback, location: callback2, text: null };
      let tmp6 = callback2(outer1_2[12])[callback];
      if (null == tmp6) {
        const result1 = callback(tmp5[12]).rebuildSearchTokenConfigs();
        tmp6 = callback2(tmp5[12])[str];
        const obj2 = callback(tmp5[12]);
      }
      let key;
      if (tmp6 != null) {
        key = tmp6.key;
      }
      if (key == null) {
        key = str.toString();
      }
      obj[3] = key;
      saveDraftTextInputValue.addTag(obj);
    });
    let obj = token(CONTEXT_MENU[13]);
    token(CONTEXT_MENU[14]).syncAutocomplete(closure_0);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  let closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(10104));
  const item = keys.forEach((type) => {
    let obj = textInputValue(outer1_2[12]);
    if (obj.isSearchFilterTokenType(type)) {
      const plainText = items(outer1_2[12])[type].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(textInputValue)) {
          obj = { token: null, text: null };
          obj[0] = type;
          obj[1] = plainText;
          items.push(obj);
        }
      }
    }
  });
  return items;
};
