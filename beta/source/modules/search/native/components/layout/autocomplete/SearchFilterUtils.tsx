// Module ID: 17104
// Function ID: 17105
// Name: SearchFilterUtils
// Dependencies: [8127, 8126, 1078, 1119, 11954, 10936, 14115, 5310, 9861, 17105, 12355, 9545, 12489, 12509, 12486, 4725, 9780, 1984, 12506, 2]
// Exports: getSearchFilterSuggestions, getSearchTokenIcon, getSearchTokenLabel, getSearchTokenPressHandler, getSearchTokenSubLabel

// Module 17104 (SearchFilterUtils)
import util from "util" /* 1119 */;
import AtIcon from "AtIcon" /* 5310 */;
import TrackingConstants from "TrackingConstants" /* 8126 */;
import RobotIcon from "RobotIcon" /* 9545 */;
import CalendarIcon from "CalendarIcon" /* 9861 */;
import AttachmentIcon from "AttachmentIcon" /* 10936 */;
import UserIcon from "UserIcon" /* 11954 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12355 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 12486 */;
import SearchTokensDefault from "SearchTokens" /* 12489 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12509 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 14115 */;
import CalendarMinusIcon from "CalendarMinusIcon" /* 17105 */;
import SearchConstants from "SearchConstants" /* 8127 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;

({ EMPTY_SEARCH_QUERY_STRING: c3, SearchQueryTagTypes: closure_4 } = SearchConstants);
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
({ SEARCH_DATE_FORMAT: metroRequire, SearchTokenTypes: closure_7, SearchTypes: closure_8 } = Constants);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(searchContext, item) {
  if (constants.FILTER_FROM === item) {
    const intl9 = util.intl;
    return intl9.string(util.t["6iuVMn"]);
  } else if (tmp.FILTER_HAS === item) {
    const intl8 = util.intl;
    return intl8.string(util.t.DMAzx8);
  } else if (tmp.FILTER_MENTIONS === item) {
    const intl7 = util.intl;
    return intl7.string(util.t.CMKzQx);
  } else if (tmp.FILTER_IN === item) {
    if (searchContext.type === constants2.DMS) {
      const intl6 = util.intl;
      let stringResult = intl6.string(util.t["8Fmo42"]);
    } else {
      const intl5 = util.intl;
      stringResult = intl5.string(util.t.cdPmq8);
    }
    return stringResult;
  } else if (tmp.FILTER_ON === item) {
    const intl4 = util.intl;
    return intl4.string(util.t.h4qGfp);
  } else if (tmp.FILTER_BEFORE === item) {
    const intl3 = util.intl;
    return intl3.string(util.t.c9qSBR);
  } else if (tmp.FILTER_AFTER === item) {
    const intl2 = util.intl;
    return intl2.string(util.t.hcMwDW);
  } else if (tmp.FILTER_AUTHOR_TYPE === item) {
    const intl = util.intl;
    return intl.string(util.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + item);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(cResult) {
  if (constants.FILTER_FROM === cResult) {
    const intl8 = util.intl;
    return intl8.string(util.t.kkGlww);
  } else if (tmp.FILTER_HAS === cResult) {
    const intl7 = util.intl;
    return intl7.string(util.t.gUfZa2);
  } else if (tmp.FILTER_IN === cResult) {
    const intl6 = util.intl;
    return intl6.string(util.t.qDUdlT);
  } else if (tmp.FILTER_MENTIONS === cResult) {
    const intl5 = util.intl;
    return intl5.string(util.t.ILtwK5);
  } else if (tmp.FILTER_ON === cResult) {
    const intl4 = util.intl;
    return intl4.string(util.t.t8bWvr);
  } else if (tmp.FILTER_BEFORE === cResult) {
    const intl3 = util.intl;
    return intl3.string(util.t.YEN3uU);
  } else if (tmp.FILTER_AFTER === cResult) {
    const intl2 = util.intl;
    return intl2.string(util.t.hwbB7s);
  } else if (tmp.FILTER_AUTHOR_TYPE === cResult) {
    const intl = util.intl;
    return intl.string(util.t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + cResult);
    throw error;
  }
};
export const getSearchTokenIcon = function getSearchTokenIcon(cResult) {
  if (constants.FILTER_FROM === cResult) {
    return UserIcon.UserIcon;
  } else if (tmp.FILTER_HAS === cResult) {
    return AttachmentIcon.AttachmentIcon;
  } else if (tmp.FILTER_IN === cResult) {
    return ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon;
  } else if (tmp.FILTER_MENTIONS === cResult) {
    return AtIcon.AtIcon;
  } else if (tmp.FILTER_ON === cResult) {
    return CalendarIcon.CalendarIcon;
  } else if (tmp.FILTER_BEFORE === cResult) {
    return CalendarMinusIcon.CalendarMinusIcon;
  } else if (tmp.FILTER_AFTER === cResult) {
    return CalendarPlusIcon.CalendarPlusIcon;
  } else if (tmp.FILTER_AUTHOR_TYPE === cResult) {
    return RobotIcon.RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenIcon] Unhandled search token type: " + cResult);
    throw error;
  }
};
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(searchContext, token, CONTEXT_MENU) {
  closure_0 = searchContext;
  closure_1 = token;
  closure_2 = CONTEXT_MENU;
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
              let result = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
                searchTokenType(paths[15]).openLazy(searchContext(paths[17])(paths[16], paths.paths), "DatePicker", {
                  onSubmit(format) {
                    searchContext = format.format(closure_1_6);
                    searchTokenType(_location[13]).updateSearchQuery(searchContext, (setTextInputValue) => {
                      if (_location === constants2.SEARCH_INPUT_DROPDOWN) {
                        setTextInputValue.setTextInputValue(closure_3_3);
                      }
                      setTextInputValue.removePrefixTags();
                      const obj = { type: constants.COMPLETE, text: null, searchTokenType: null, location: null };
                      let tmp7 = closure_1(closure_2[12])[searchTokenType];
                      if (null == tmp7) {
                        const result = closure_0(tmp6[12]).rebuildSearchTokenConfigs();
                        tmp7 = closure_1(tmp6[12])[str];
                        const obj2 = closure_0(tmp6[12]);
                      }
                      let key;
                      if (tmp7 != null) {
                        key = tmp7.key;
                      }
                      if (key == null) {
                        key = str.toString();
                      }
                      obj.text = "" + key + " " + closure_0;
                      obj.searchTokenType = searchTokenType;
                      obj.location = _location;
                      setTextInputValue.addTag(obj);
                    });
                    let obj = searchTokenType(_location[13]);
                    searchTokenType(_location[18]).trackSearchFilterAdd({ searchContext, searchTokenType, location: _location });
                    let obj2 = searchTokenType(_location[18]);
                    const obj3 = { searchContext, searchTokenType, location: _location };
                    const initialMessages = searchTokenType(_location[14]).fetchInitialMessages(searchContext);
                  }
                });
              });
            };
          }
        }
      }
    }
  }
  return () => {
    const searchTokenType = _location;
    _location = closure_2;
    SearchPlatformActionCreatorsDefault.updateSearchQuery(searchTokenType, (saveDraftTextInputValue) => {
      if (_location === constants2.CONTEXT_MENU) {
        const result = saveDraftTextInputValue.saveDraftTextInputValue();
      }
      saveDraftTextInputValue.setTextInputValue(closure_2_3);
      const obj = { type: constants.PREFIX, searchTokenType, location: _location, text: null };
      let tmp6 = _location(closure_2[12])[searchTokenType];
      if (null == tmp6) {
        const result1 = searchTokenType(tmp5[12]).rebuildSearchTokenConfigs();
        tmp6 = _location(tmp5[12])[str];
        const obj2 = searchTokenType(tmp5[12]);
      }
      let key;
      if (tmp6 != null) {
        key = tmp6.key;
      }
      if (key == null) {
        key = str.toString();
      }
      obj.text = key;
      saveDraftTextInputValue.addTag(obj);
    });
    SearchPlatformUtilsDefault.syncAutocomplete(searchTokenType);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(12489));
  const item = keys.forEach((token) => {
    if (obj.isSearchFilterTokenType(token)) {
      const plainText = SearchTokensDefault[token].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(closure_0)) {
          const obj2 = { token, text: plainText };
          items.push(obj2);
        }
      }
    }
  });
  return items;
};
