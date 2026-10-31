// Module ID: 18683
// Function ID: 18684
// Name: SearchFilterUtils
// Dependencies: [9827, 9826, 1072, 1113, 12466, 10535, 15661, 8662, 9115, 18684, 12420, 12446, 13879, 13896, 13871, 5258, 9009, 1994, 13892, 2]
// Exports: getSearchFilterSuggestions, getSearchTokenIcon, getSearchTokenLabel, getSearchTokenPressHandler, getSearchTokenSubLabel

// Module 18683 (SearchFilterUtils)
import intl10 from "intl" /* 1113 */;
import AtIcon from "AtIcon" /* 8662 */;
import CalendarIcon from "CalendarIcon" /* 9115 */;
import TrackingConstants from "TrackingConstants" /* 9826 */;
import AttachmentIcon from "AttachmentIcon" /* 10535 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12420 */;
import RobotIcon from "RobotIcon" /* 12446 */;
import UserIcon from "UserIcon" /* 12466 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 13871 */;
import SearchTokens from "SearchTokens" /* 13879 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13896 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 15661 */;
import CalendarMinusIcon from "CalendarMinusIcon" /* 18684 */;
import SearchConstants from "SearchConstants" /* 9827 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;
const SearchTokensDefault = SearchTokens;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ EMPTY_SEARCH_QUERY_STRING: c3, SearchQueryTagTypes: closure_4 } = SearchConstants);
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
({ SEARCH_DATE_FORMAT: metroRequire, SearchTokenTypes: metroImportDefault, SearchTypes: metroImportAll } = Constants);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export function getSearchTokenLabel(type, item) {
  if (metroImportDefault.FILTER_FROM === item) {
    const intl9 = intl10.intl;
    return intl9.string(intl10.t["6iuVMn"]);
  } else if (metroImportDefault.FILTER_HAS === item) {
    const intl8 = intl10.intl;
    return intl8.string(intl10.t.DMAzx8);
  } else if (metroImportDefault.FILTER_MENTIONS === item) {
    const intl7 = intl10.intl;
    return intl7.string(intl10.t.CMKzQx);
  } else if (metroImportDefault.FILTER_IN === item) {
    let stringResult;
    if (type.type === metroImportAll.DMS) {
      const intl6 = intl10.intl;
      stringResult = intl6.string(intl10.t["8Fmo42"]);
    } else {
      const intl5 = intl10.intl;
      stringResult = intl5.string(intl10.t.cdPmq8);
    }
    return stringResult;
  } else if (metroImportDefault.FILTER_ON === item) {
    const intl4 = intl10.intl;
    return intl4.string(intl10.t.h4qGfp);
  } else if (metroImportDefault.FILTER_BEFORE === item) {
    const intl3 = intl10.intl;
    return intl3.string(intl10.t.c9qSBR);
  } else if (metroImportDefault.FILTER_AFTER === item) {
    const intl2 = intl10.intl;
    return intl2.string(intl10.t.hcMwDW);
  } else if (metroImportDefault.FILTER_AUTHOR_TYPE === item) {
    const intl = intl10.intl;
    return intl.string(intl10.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + item);
    throw error;
  }
}
export function getSearchTokenSubLabel(searchTokenType) {
  if (metroImportDefault.FILTER_FROM === searchTokenType) {
    const intl8 = intl10.intl;
    return intl8.string(intl10.t.kkGlww);
  } else if (metroImportDefault.FILTER_HAS === searchTokenType) {
    const intl7 = intl10.intl;
    return intl7.string(intl10.t.gUfZa2);
  } else if (metroImportDefault.FILTER_IN === searchTokenType) {
    const intl6 = intl10.intl;
    return intl6.string(intl10.t.qDUdlT);
  } else if (metroImportDefault.FILTER_MENTIONS === searchTokenType) {
    const intl5 = intl10.intl;
    return intl5.string(intl10.t.ILtwK5);
  } else if (metroImportDefault.FILTER_ON === searchTokenType) {
    const intl4 = intl10.intl;
    return intl4.string(intl10.t.t8bWvr);
  } else if (metroImportDefault.FILTER_BEFORE === searchTokenType) {
    const intl3 = intl10.intl;
    return intl3.string(intl10.t.YEN3uU);
  } else if (metroImportDefault.FILTER_AFTER === searchTokenType) {
    const intl2 = intl10.intl;
    return intl2.string(intl10.t.hwbB7s);
  } else if (metroImportDefault.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = intl10.intl;
    return intl.string(intl10.t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
}
export function getSearchTokenIcon(searchTokenType) {
  if (metroImportDefault.FILTER_FROM === searchTokenType) {
    return UserIcon.UserIcon;
  } else if (metroImportDefault.FILTER_HAS === searchTokenType) {
    return AttachmentIcon.AttachmentIcon;
  } else if (metroImportDefault.FILTER_IN === searchTokenType) {
    return ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon;
  } else if (metroImportDefault.FILTER_MENTIONS === searchTokenType) {
    return AtIcon.AtIcon;
  } else if (metroImportDefault.FILTER_ON === searchTokenType) {
    return CalendarIcon.CalendarIcon;
  } else if (metroImportDefault.FILTER_BEFORE === searchTokenType) {
    return CalendarMinusIcon.CalendarMinusIcon;
  } else if (metroImportDefault.FILTER_AFTER === searchTokenType) {
    return CalendarPlusIcon.CalendarPlusIcon;
  } else if (metroImportDefault.FILTER_AUTHOR_TYPE === searchTokenType) {
    return RobotIcon.RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getSearchTokenIcon] Unhandled search token type: " + searchTokenType);
    throw error;
  }
}
export function getSearchTokenPressHandler(arg0, token, CONTEXT_MENU) {
  let closure_0 = arg0;
  let closure_1 = token;
  let closure_2 = CONTEXT_MENU;
  let tmp = constants;
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
                  const str = "[getSearchTokenPressHandler] Unhandled search token type: ";
                  const self = this;
                  const self2 = this;
                  const error = new Error("[getSearchTokenPressHandler] Unhandled search token type: " + token);
                  let tmp4 = error;
                  throw error;
                }
              }
            }
            return () => {
              let paths;
              let obj = SearchPlatformUtils;
              let result = obj.performKeyboardAwareNavigation(() => {
                let _location;
                let searchTokenType;
                let obj = token(paths[15]);
                let obj2 = {
                  onSubmit(format) {
                    searchContext = format.format(closure_1_6);
                    let obj = searchTokenType(_location[13]);
                    obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                      let key;
                      const tmp = _location;
                      if (_location === constants2.SEARCH_INPUT_DROPDOWN) {
                        setTextInputValue.setTextInputValue(closure_3_3);
                      }
                      setTextInputValue.removePrefixTags();
                      const addTag = setTextInputValue.addTag;
                      const obj = { type: constants.COMPLETE, text: "" + key + " " + closure_0, searchTokenType, location: tmp };
                      let tmp7 = closure_1(closure_2[12])[searchTokenType];
                      const tmp5 = closure_1;
                      if (null == tmp7) {
                        const obj2 = closure_0(closure_2[12]);
                        const result = obj2.rebuildSearchTokenConfigs();
                        tmp7 = tmp5(tmp6[12])[str];
                      }
                      key = undefined;
                      if (tmp7 != null) {
                        key = tmp7.key;
                      }
                      if (key == null) {
                        key = str.toString();
                      }
                      addTag(obj);
                    });
                    let obj2 = searchTokenType(_location[18]);
                    const obj3 = { searchContext, searchTokenType, location: _location };
                    obj2.trackSearchFilterAdd(obj3);
                    const obj4 = searchTokenType(_location[14]);
                    const initialMessages = obj4.fetchInitialMessages(searchContext);
                  }
                };
                obj.openLazy(closure_2_0(paths[17])(paths[16], paths.paths), "DatePicker", obj2);
              });
            };
          }
        }
      }
    }
  }
  return () => {
    closure_0 = closure_1;
    closure_1 = CONTEXT_MENU;
    let obj = SearchPlatformActionCreatorsDefault;
    obj.updateSearchQuery(closure_0, (saveDraftTextInputValue) => {
      let key;
      const tmp = closure_1;
      if (closure_1 === constants2.CONTEXT_MENU) {
        const result = saveDraftTextInputValue.saveDraftTextInputValue();
      }
      saveDraftTextInputValue.setTextInputValue(closure_2_3);
      const addTag = saveDraftTextInputValue.addTag;
      const obj = { type: constants.PREFIX, searchTokenType, location: tmp, text: key };
      let tmp6 = token(CONTEXT_MENU[12])[searchTokenType];
      const tmp4 = token;
      if (null == tmp6) {
        const obj2 = closure_2_0(CONTEXT_MENU[12]);
        const result1 = obj2.rebuildSearchTokenConfigs();
        tmp6 = tmp4(tmp5[12])[str];
      }
      key = undefined;
      if (tmp6 != null) {
        key = tmp6.key;
      }
      if (key == null) {
        key = str.toString();
      }
      addTag(obj);
    });
    let obj2 = SearchPlatformUtilsDefault;
    obj2.syncAutocomplete(closure_0);
  };
}
export function getSearchFilterSuggestions(textInputValue) {
  let closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(13879));
  const item = keys.forEach(function(token) {
    const obj = SearchTokens;
    if (obj.isSearchFilterTokenType(token)) {
      const plainText = SearchTokensDefault[token].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(textInputValue)) {
          const obj2 = { token, text: plainText };
          items.push(obj2);
        }
      }
    }
  });
  return items;
}
