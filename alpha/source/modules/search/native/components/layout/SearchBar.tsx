// Module ID: 17242
// Function ID: 17243
// Name: SearchBar
// Dependencies: [19, 17, 2064, 2086, 4719, 1390, 12004, 9285, 9284, 1085, 21, 5091, 1126, 5418, 558, 576, 504, 17239, 5383, 11990, 12015, 4789, 12011, 11998, 17243, 8609, 2]

// Module 17242 (SearchBar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl8 from "intl" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4789 */;
import useChannelName from "useChannelName" /* 5418 */;
import TrackingConstants from "TrackingConstants" /* 9284 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11990 */;
import SearchTokens from "SearchTokens" /* 11998 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12011 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12015 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import SearchQueryStore from "SearchQueryStore" /* 12004 */;
import SearchConstants from "SearchConstants" /* 9285 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SearchPlatformUtilsDefault = SearchPlatformUtils;
let _require, announceResult, obj1, str2, tmp14, tmp15, tmp3, trackSearchFilterAddResult, type, updateSearchQueryResult, updateSearchQueryResult1;

let c10;
let unpackModuleId;
const View = react_native.View;
({ SEARCH_BAR_HEIGHT: c10, SearchQueryTagTypes: unpackModuleId } = SearchConstants);
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let closure_15 = createStyles.createStyles((minHeight) => {
  const obj = { searchBar: obj2, icon: { width: 32, minHeight, justifyContent: "center", zIndex: 10 } };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchPlaceholder(arg0) {
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let stringResult2;
      type = type.type;
      const channelIds = SearchQueryStore.getChannelIds(type);
      if (SearchTypes.GUILD_CHANNEL !== type) {
        if (SearchTypes.GUILD !== type) {
          if (SearchTypes.CHANNEL === type) {
            let stringResult;
            const channel = ChannelStore.getChannel(tmp.channelId);
            if (null == channel) {
              const intl4 = intl8.intl;
              stringResult = intl4.string(intl8.t["5h0QOP"]);
            } else {
              const obj = useChannelName;
              const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
              const intl3 = intl8.intl;
              const obj2 = { guildName: channelName };
              stringResult = intl3.formatToPlainString(intl8.t.LDpotA, obj2);
            }
            return stringResult;
          } else if (SearchTypes.DMS === type) {
            const intl2 = intl8.intl;
            return intl2.string(intl8.t.m7OrlR);
          } else {
            const intl = intl8.intl;
            return intl.string(intl8.t["5h0QOP"]);
          }
        }
      }
      if (0 === channelIds.size) {
        let stringResult1;
        const guild = GuildStore.getGuild(tmp.guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        if (null == name) {
          const intl7 = intl8.intl;
          stringResult1 = intl7.string(intl8.t["5h0QOP"]);
        } else {
          const intl6 = intl8.intl;
          const obj3 = { guildName: name };
          stringResult1 = intl6.formatToPlainString(intl8.t.LDpotA, obj3);
        }
        stringResult2 = stringResult1;
      } else {
        const intl5 = intl8.intl;
        stringResult2 = intl5.string(intl8.t["5h0QOP"]);
      }
      return stringResult2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useSearchPlaceholder(arg0) {
  _require = arg0;
  let obj = require("get initialized");
  const items = [SearchQueryStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let stringResult2;
    type = type.type;
    const channelIds = SearchQueryStore.getChannelIds(type);
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (SearchTypes.GUILD !== type) {
        if (SearchTypes.CHANNEL === type) {
          let stringResult;
          const channel = ChannelStore.getChannel(tmp.channelId);
          if (null == channel) {
            const intl4 = intl8.intl;
            stringResult = intl4.string(intl8.t["5h0QOP"]);
          } else {
            const obj = useChannelName;
            const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
            const intl3 = intl8.intl;
            const obj2 = { guildName: channelName };
            stringResult = intl3.formatToPlainString(intl8.t.LDpotA, obj2);
          }
          return stringResult;
        } else if (SearchTypes.DMS === type) {
          const intl2 = intl8.intl;
          return intl2.string(intl8.t.m7OrlR);
        } else {
          const intl = intl8.intl;
          return intl.string(intl8.t["5h0QOP"]);
        }
      }
    }
    if (0 === channelIds.size) {
      let stringResult1;
      const guild = GuildStore.getGuild(tmp.guildId);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (null == name) {
        const intl7 = intl8.intl;
        stringResult1 = intl7.string(intl8.t["5h0QOP"]);
      } else {
        const intl6 = intl8.intl;
        const obj3 = { guildName: name };
        stringResult1 = intl6.formatToPlainString(intl8.t.LDpotA, obj3);
      }
      stringResult2 = stringResult1;
    } else {
      const intl5 = intl8.intl;
      stringResult2 = intl5.string(intl8.t["5h0QOP"]);
    }
    return stringResult2;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchBarWithRef(searchContext) {
  let first;
  let ref1;
  let tmp11;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = searchContext;
  let tmp2 = ref1;
  let obj = searchContext(ref1[15]);
  const cResult = obj.c(37);
  searchContext = searchContext.searchContext;
  const ref = searchContext.ref;
  let obj2 = searchContext(ref1[17]);
  const setDismissed = obj2.useSearchSuggestionsContext().setDismissed;
  let obj3 = searchContext(ref1[18]);
  const tmp4 = closure_15(closure_10 * min(2, obj3.useFontScale()));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = SearchQueryStore;
    const items = [SearchQueryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function c() {
      return SearchQueryStore.getTags(searchContext);
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[16]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    const mapped = stateFromStores.map(tmp(tmp2[19]).toSearchBarTag);
    cResult[4] = stateFromStores;
    cResult[5] = mapped;
    tmp9 = mapped;
  } else {
    tmp9 = cResult[5];
  }
  if (0 !== stateFromStores.length) {
    let tmp12;
    if (cResult[6] !== stateFromStores) {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(text) {
            return text.text;
          }
        }
        cResult[8] = V;
        tmp13 = V;
      } else {
        class V {
          constructor(text) {
            return text.text;
          }
        }
      }
      const mapped1 = stateFromStores.map(tmp13);
      let str = ", ";
      const joined = mapped1.join(", ");
      let intl = tmp(tmp2[12]).intl;
      let obj4 = { text: joined };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[12]).t["0zoRaK"], obj4);
      cResult[6] = stateFromStores;
      cResult[7] = formatToPlainStringResult;
      tmp12 = formatToPlainStringResult;
    } else {
      class V {
        constructor(text) {
          return text.text;
        }
      }
    }
    tmp11 = tmp12;
  }
  let obj7 = react;
  ref1 = react.useRef(null);
  const tmp17 = closure_16(searchContext);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        obj = {
          setText(arg0) {
                  const current = ref1.current;
                  let setTextResult;
                  if (current != null) {
                    setTextResult = current.setText(arg0);
                  }
                  return setTextResult;
                },
          getText() {
                  const current = ref1.current;
                  let str;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          blur() {
                  const current = ref1.current;
                  let blurResult;
                  if (current != null) {
                    blurResult = current.blur();
                  }
                  return blurResult;
                },
          focus() {
                  const current = ref1.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                },
          isFocused() {
                  const current = ref1.current;
                  let flag;
                  if (current != null) {
                    flag = current.isFocused();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                },
          measure(arg0) {
                  const current = ref1.current;
                  let measureResult;
                  if (current != null) {
                    measureResult = current.measure(arg0);
                  }
                  return measureResult;
                },
          measureInWindow(arg0) {
                  const current = ref1.current;
                  let measureInWindowResult;
                  if (current != null) {
                    measureInWindowResult = current.measureInWindow(arg0);
                  }
                  return measureInWindowResult;
                },
          measureLayout(arg0, arg1, arg2) {
                  const current = ref1.current;
                  let measureLayoutResult;
                  if (current != null) {
                    measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                  }
                  return measureLayoutResult;
                }
        };
        return obj;
      }
    }
    cResult[9] = M;
    tmp18 = M;
  } else {
    class M {
      constructor() {
        obj = {
          setText(arg0) {
                  const current = ref1.current;
                  let setTextResult;
                  if (current != null) {
                    setTextResult = current.setText(arg0);
                  }
                  return setTextResult;
                },
          getText() {
                  const current = ref1.current;
                  let str;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          blur() {
                  const current = ref1.current;
                  let blurResult;
                  if (current != null) {
                    blurResult = current.blur();
                  }
                  return blurResult;
                },
          focus() {
                  const current = ref1.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                },
          isFocused() {
                  const current = ref1.current;
                  let flag;
                  if (current != null) {
                    flag = current.isFocused();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                },
          measure(arg0) {
                  const current = ref1.current;
                  let measureResult;
                  if (current != null) {
                    measureResult = current.measure(arg0);
                  }
                  return measureResult;
                },
          measureInWindow(arg0) {
                  const current = ref1.current;
                  let measureInWindowResult;
                  if (current != null) {
                    measureInWindowResult = current.measureInWindow(arg0);
                  }
                  return measureInWindowResult;
                },
          measureLayout(arg0, arg1, arg2) {
                  const current = ref1.current;
                  let measureLayoutResult;
                  if (current != null) {
                    measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                  }
                  return measureLayoutResult;
                }
        };
        return obj;
      }
    }
  }
  const imperativeHandle = obj7.useImperativeHandle(ref, tmp18);
  if (cResult[10] !== searchContext) {
    class M {
      constructor() {
        obj = {
          setText(arg0) {
                  const current = ref1.current;
                  let setTextResult;
                  if (current != null) {
                    setTextResult = current.setText(arg0);
                  }
                  return setTextResult;
                },
          getText() {
                  const current = ref1.current;
                  let str;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          blur() {
                  const current = ref1.current;
                  let blurResult;
                  if (current != null) {
                    blurResult = current.blur();
                  }
                  return blurResult;
                },
          focus() {
                  const current = ref1.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                },
          isFocused() {
                  const current = ref1.current;
                  let flag;
                  if (current != null) {
                    flag = current.isFocused();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                },
          measure(arg0) {
                  const current = ref1.current;
                  let measureResult;
                  if (current != null) {
                    measureResult = current.measure(arg0);
                  }
                  return measureResult;
                },
          measureInWindow(arg0) {
                  const current = ref1.current;
                  let measureInWindowResult;
                  if (current != null) {
                    measureInWindowResult = current.measureInWindow(arg0);
                  }
                  return measureInWindowResult;
                },
          measureLayout(arg0, arg1, arg2) {
                  const current = ref1.current;
                  let measureLayoutResult;
                  if (current != null) {
                    measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                  }
                  return measureLayoutResult;
                }
        };
        return obj;
      }
    }
    const items2 = [searchContext];
    cResult[10] = searchContext;
    cResult[11] = tmp22;
    cResult[12] = items2;
    tmp21 = items2;
    tmp20 = tmp22;
  } else {
    class M {
      constructor() {
        obj = {
          setText(arg0) {
                  const current = ref1.current;
                  let setTextResult;
                  if (current != null) {
                    setTextResult = current.setText(arg0);
                  }
                  return setTextResult;
                },
          getText() {
                  const current = ref1.current;
                  let str;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          blur() {
                  const current = ref1.current;
                  let blurResult;
                  if (current != null) {
                    blurResult = current.blur();
                  }
                  return blurResult;
                },
          focus() {
                  const current = ref1.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                },
          isFocused() {
                  const current = ref1.current;
                  let flag;
                  if (current != null) {
                    flag = current.isFocused();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                },
          measure(arg0) {
                  const current = ref1.current;
                  let measureResult;
                  if (current != null) {
                    measureResult = current.measure(arg0);
                  }
                  return measureResult;
                },
          measureInWindow(arg0) {
                  const current = ref1.current;
                  let measureInWindowResult;
                  if (current != null) {
                    measureInWindowResult = current.measureInWindow(arg0);
                  }
                  return measureInWindowResult;
                },
          measureLayout(arg0, arg1, arg2) {
                  const current = ref1.current;
                  let measureLayoutResult;
                  if (current != null) {
                    measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                  }
                  return measureLayoutResult;
                }
        };
        return obj;
      }
    }
    tmp21 = cResult[12];
  }
  const effect = obj7.useEffect(tmp20, tmp21);
  if (cResult[13] !== searchContext) {
    class M {
      constructor() {
        obj = {
          setText(arg0) {
                  const current = ref1.current;
                  let setTextResult;
                  if (current != null) {
                    setTextResult = current.setText(arg0);
                  }
                  return setTextResult;
                },
          getText() {
                  const current = ref1.current;
                  let str;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          blur() {
                  const current = ref1.current;
                  let blurResult;
                  if (current != null) {
                    blurResult = current.blur();
                  }
                  return blurResult;
                },
          focus() {
                  const current = ref1.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                },
          isFocused() {
                  const current = ref1.current;
                  let flag;
                  if (current != null) {
                    flag = current.isFocused();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                },
          measure(arg0) {
                  const current = ref1.current;
                  let measureResult;
                  if (current != null) {
                    measureResult = current.measure(arg0);
                  }
                  return measureResult;
                },
          measureInWindow(arg0) {
                  const current = ref1.current;
                  let measureInWindowResult;
                  if (current != null) {
                    measureInWindowResult = current.measureInWindow(arg0);
                  }
                  return measureInWindowResult;
                },
          measureLayout(arg0, arg1, arg2) {
                  const current = ref1.current;
                  let measureLayoutResult;
                  if (current != null) {
                    measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                  }
                  return measureLayoutResult;
                }
        };
        return obj;
      }
    }
    cResult[13] = searchContext;
    cResult[14] = tmp25;
  } else {
    class M {
      constructor() {
        obj = {
          setText(arg0) {
                  const current = ref1.current;
                  let setTextResult;
                  if (current != null) {
                    setTextResult = current.setText(arg0);
                  }
                  return setTextResult;
                },
          getText() {
                  const current = ref1.current;
                  let str;
                  if (current != null) {
                    str = current.getText();
                  }
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          blur() {
                  const current = ref1.current;
                  let blurResult;
                  if (current != null) {
                    blurResult = current.blur();
                  }
                  return blurResult;
                },
          focus() {
                  const current = ref1.current;
                  let focusResult;
                  if (current != null) {
                    focusResult = current.focus();
                  }
                  return focusResult;
                },
          isFocused() {
                  const current = ref1.current;
                  let flag;
                  if (current != null) {
                    flag = current.isFocused();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                },
          measure(arg0) {
                  const current = ref1.current;
                  let measureResult;
                  if (current != null) {
                    measureResult = current.measure(arg0);
                  }
                  return measureResult;
                },
          measureInWindow(arg0) {
                  const current = ref1.current;
                  let measureInWindowResult;
                  if (current != null) {
                    measureInWindowResult = current.measureInWindow(arg0);
                  }
                  return measureInWindowResult;
                },
          measureLayout(arg0, arg1, arg2) {
                  const current = ref1.current;
                  let measureLayoutResult;
                  if (current != null) {
                    measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
                  }
                  return measureLayoutResult;
                }
        };
        return obj;
      }
    }
  }
  if (cResult[15] !== searchContext) {
    class H {
      constructor(arg0) {
        closure_0 = searchContext;
        obj = closure_9;
        tmp = searchContext;
        tmp2 = closure_9.getTags(searchContext)[searchContext];
        closure_1 = tmp2;
        if (null != tmp2) {
          tmp14 = closure_0;
          tmp15 = closure_2;
          AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
          announce = AccessibilityAnnouncer.announce;
          intl = closure_0(closure_2[12]).intl;
          obj1 = { text: null };
          obj1.text = tmp2.text;
          announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
          tmp17 = SearchQueryTagTypes;
          if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
            tmp3 = closure_1;
            obj2 = closure_1(tmp15[22]);
            obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
            obj8.searchContext = tmp;
            obj8.searchTokenType = tmp2.searchTokenType;
            tmp4 = SearchFilterAddLocations;
            obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
            result = obj2.trackSearchFilterRemove(obj8);
          }
          tmp6 = closure_1;
          obj4 = closure_1(tmp15[20]);
          updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
            removeTag.removeTag(closure_0);
            if (type.type === constants.PREFIX) {
              const result = removeTag.restoreDraftTextInputValue();
            }
          });
          obj5 = closure_1(tmp15[19]);
          result1 = obj5.syncAutocompleteDebounced(tmp);
          queryString = obj.getQueryString(tmp);
          searchResultsQuery = obj.getSearchResultsQuery(tmp);
          if (queryString !== searchResultsQuery) {
            tmp6Result = tmp6(tmp15[19]);
            if (tmp11) {
              initialMessages = tmp6Result.fetchInitialMessages(tmp);
            } else {
              initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
            }
          }
        }
        return;
      }
    }
    cResult[15] = searchContext;
    cResult[16] = H;
  } else {
    class H {
      constructor(arg0) {
        closure_0 = searchContext;
        obj = closure_9;
        tmp = searchContext;
        tmp2 = closure_9.getTags(searchContext)[searchContext];
        closure_1 = tmp2;
        if (null != tmp2) {
          tmp14 = closure_0;
          tmp15 = closure_2;
          AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
          announce = AccessibilityAnnouncer.announce;
          intl = closure_0(closure_2[12]).intl;
          obj1 = { text: null };
          obj1.text = tmp2.text;
          announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
          tmp17 = SearchQueryTagTypes;
          if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
            tmp3 = closure_1;
            obj2 = closure_1(tmp15[22]);
            obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
            obj8.searchContext = tmp;
            obj8.searchTokenType = tmp2.searchTokenType;
            tmp4 = SearchFilterAddLocations;
            obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
            result = obj2.trackSearchFilterRemove(obj8);
          }
          tmp6 = closure_1;
          obj4 = closure_1(tmp15[20]);
          updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
            removeTag.removeTag(closure_0);
            if (type.type === constants.PREFIX) {
              const result = removeTag.restoreDraftTextInputValue();
            }
          });
          obj5 = closure_1(tmp15[19]);
          result1 = obj5.syncAutocompleteDebounced(tmp);
          queryString = obj.getQueryString(tmp);
          searchResultsQuery = obj.getSearchResultsQuery(tmp);
          if (queryString !== searchResultsQuery) {
            tmp6Result = tmp6(tmp15[19]);
            if (tmp11) {
              initialMessages = tmp6Result.fetchInitialMessages(tmp);
            } else {
              initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
            }
          }
        }
        return;
      }
    }
  }
  if (cResult[17] === searchContext) {
    class H {
      constructor(arg0) {
        closure_0 = searchContext;
        obj = closure_9;
        tmp = searchContext;
        tmp2 = closure_9.getTags(searchContext)[searchContext];
        closure_1 = tmp2;
        if (null != tmp2) {
          tmp14 = closure_0;
          tmp15 = closure_2;
          AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
          announce = AccessibilityAnnouncer.announce;
          intl = closure_0(closure_2[12]).intl;
          obj1 = { text: null };
          obj1.text = tmp2.text;
          announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
          tmp17 = SearchQueryTagTypes;
          if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
            tmp3 = closure_1;
            obj2 = closure_1(tmp15[22]);
            obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
            obj8.searchContext = tmp;
            obj8.searchTokenType = tmp2.searchTokenType;
            tmp4 = SearchFilterAddLocations;
            obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
            result = obj2.trackSearchFilterRemove(obj8);
          }
          tmp6 = closure_1;
          obj4 = closure_1(tmp15[20]);
          updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
            removeTag.removeTag(closure_0);
            if (type.type === constants.PREFIX) {
              const result = removeTag.restoreDraftTextInputValue();
            }
          });
          obj5 = closure_1(tmp15[19]);
          result1 = obj5.syncAutocompleteDebounced(tmp);
          queryString = obj.getQueryString(tmp);
          searchResultsQuery = obj.getSearchResultsQuery(tmp);
          if (queryString !== searchResultsQuery) {
            tmp6Result = tmp6(tmp15[19]);
            if (tmp11) {
              initialMessages = tmp6Result.fetchInitialMessages(tmp);
            } else {
              initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
            }
          }
        }
        return;
      }
    }
    if (cResult[20] !== searchContext) {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
      const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
      cResult[20] = searchContext;
      cResult[21] = textInputValue;
    } else {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
    }
    if (cResult[22] !== searchContext) {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
      cResult[22] = searchContext;
      cResult[23] = jsx(setDismissed(tmp2[24]), { searchContext });
      const tmp32 = jsx(setDismissed(tmp2[24]), { searchContext });
    } else {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
    }
    if (cResult[24] === tmp4.icon) {
      class H {
        constructor(arg0) {
          closure_0 = searchContext;
          obj = closure_9;
          tmp = searchContext;
          tmp2 = closure_9.getTags(searchContext)[searchContext];
          closure_1 = tmp2;
          if (null != tmp2) {
            tmp14 = closure_0;
            tmp15 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[12]).intl;
            obj1 = { text: null };
            obj1.text = tmp2.text;
            announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
            tmp17 = SearchQueryTagTypes;
            if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
              tmp3 = closure_1;
              obj2 = closure_1(tmp15[22]);
              obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
              obj8.searchContext = tmp;
              obj8.searchTokenType = tmp2.searchTokenType;
              tmp4 = SearchFilterAddLocations;
              obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
              result = obj2.trackSearchFilterRemove(obj8);
            }
            tmp6 = closure_1;
            obj4 = closure_1(tmp15[20]);
            updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
              removeTag.removeTag(closure_0);
              if (type.type === constants.PREFIX) {
                const result = removeTag.restoreDraftTextInputValue();
              }
            });
            obj5 = closure_1(tmp15[19]);
            result1 = obj5.syncAutocompleteDebounced(tmp);
            queryString = obj.getQueryString(tmp);
            searchResultsQuery = obj.getSearchResultsQuery(tmp);
            if (queryString !== searchResultsQuery) {
              tmp6Result = tmp6(tmp15[19]);
              if (tmp11) {
                initialMessages = tmp6Result.fetchInitialMessages(tmp);
              } else {
                initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
              }
            }
          }
          return;
        }
      }
      if (cResult[27] === tmp11) {
        class H {
          constructor(arg0) {
            closure_0 = searchContext;
            obj = closure_9;
            tmp = searchContext;
            tmp2 = closure_9.getTags(searchContext)[searchContext];
            closure_1 = tmp2;
            if (null != tmp2) {
              tmp14 = closure_0;
              tmp15 = closure_2;
              AccessibilityAnnouncer = closure_0(closure_2[21]).AccessibilityAnnouncer;
              announce = AccessibilityAnnouncer.announce;
              intl = closure_0(closure_2[12]).intl;
              obj1 = { text: null };
              obj1.text = tmp2.text;
              announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj1));
              tmp17 = SearchQueryTagTypes;
              if (tmp2.type === SearchQueryTagTypes.COMPLETE) {
                tmp3 = closure_1;
                obj2 = closure_1(tmp15[22]);
                obj8 = { searchContext: null, searchTokenType: null, isDefault: null };
                obj8.searchContext = tmp;
                obj8.searchTokenType = tmp2.searchTokenType;
                tmp4 = SearchFilterAddLocations;
                obj8.isDefault = tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD;
                result = obj2.trackSearchFilterRemove(obj8);
              }
              tmp6 = closure_1;
              obj4 = closure_1(tmp15[20]);
              updateSearchQueryResult = obj4.updateSearchQuery(tmp, (removeTag) => {
                removeTag.removeTag(closure_0);
                if (type.type === constants.PREFIX) {
                  const result = removeTag.restoreDraftTextInputValue();
                }
              });
              obj5 = closure_1(tmp15[19]);
              result1 = obj5.syncAutocompleteDebounced(tmp);
              queryString = obj.getQueryString(tmp);
              searchResultsQuery = obj.getSearchResultsQuery(tmp);
              if (queryString !== searchResultsQuery) {
                tmp6Result = tmp6(tmp15[19]);
                if (tmp11) {
                  initialMessages = tmp6Result.fetchInitialMessages(tmp);
                } else {
                  initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
                }
              }
            }
            return;
          }
        }
      }
      cResult[27] = tmp11;
      cResult[28] = tmp28;
      cResult[29] = tmp26;
      cResult[30] = tmp27;
      cResult[31] = tmp24;
      cResult[32] = tmp17;
      cResult[33] = tmp9;
      cResult[34] = tmp4.searchBar;
      cResult[35] = tmp33;
      cResult[36] = jsx(setDismissed(tmp2[25]), { ref: ref1, accessibilityHint: tmp11, autoFocus: true, defaultValue: tmp28, style: tmp4.searchBar, tags: tmp9, icon: tmp33, onChangeText: tmp24, onRemove: tmp26, placeholder: tmp17, onSubmitEditing: tmp27, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false });
      const tmp40 = jsx(setDismissed(tmp2[25]), { ref: ref1, accessibilityHint: tmp11, autoFocus: true, defaultValue: tmp28, style: tmp4.searchBar, tags: tmp9, icon: tmp33, onChangeText: tmp24, onRemove: tmp26, placeholder: tmp17, onSubmitEditing: tmp27, leadingFade: true, horizontal: true, autoClearInputOnTagAdd: false });
    }
    const tmp36 = <View style={tmp4.icon}>{tmp30}</View>;
    cResult[24] = tmp4.icon;
    cResult[25] = tmp30;
    cResult[26] = tmp36;
  }
  class G {
    constructor() {
      tmp = setDismissed();
      obj = closure_9;
      tmp2 = searchContext;
      prefixTag = closure_9.getPrefixTag(searchContext);
      str = closure_9.getTextInputValue(searchContext);
      trimmed = str.trim();
      closure_0 = trimmed;
      result = null != prefixTag;
      if (result) {
        str2 = "";
        result = "" !== trimmed;
      }
      if (result) {
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj2 = closure_0(closure_2[23]);
        result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
      }
      if (result) {
        tmp8 = closure_1;
        tmp9 = closure_2;
        obj3 = closure_1(closure_2[20]);
        updateSearchQueryResult = obj3.updateSearchQuery(tmp2, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: constants.ANSWER, text: trimmed };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        obj4 = closure_1(closure_2[22]);
        obj1 = { searchContext: null, searchTokenType: null, location: null };
        obj1.searchContext = tmp2;
        ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
        trackSearchFilterAddResult = obj4.trackSearchFilterAdd(obj1);
      }
      if (!obj.isQueryStringEmpty(tmp2)) {
        tmp12 = closure_1;
        tmp13 = closure_2;
        obj6 = closure_1(closure_2[20]);
        updateSearchQueryResult1 = obj6.updateSearchQuery(tmp2, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
        obj7 = closure_1(closure_2[19]);
        initialMessages = obj7.fetchInitialMessages(tmp2);
      }
      return;
    }
  }
  cResult[17] = searchContext;
  cResult[18] = setDismissed;
  cResult[19] = G;
}) : (function SearchBarWithRef(searchContext) {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let ref1;
  const ref = searchContext.ref;
  let obj = searchContext(stateFromStores[17]);
  const setDismissed = obj.useSearchSuggestionsContext().setDismissed;
  let obj2 = searchContext(stateFromStores[18]);
  let tmp = closure_15(closure_10 * min(2, obj2.useFontScale()));
  let obj3 = searchContext(stateFromStores[16]);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  stateFromStores = obj3.useStateFromStores(items, () => SearchQueryStore.getTags(searchContext), items1);
  const items2 = [stateFromStores];
  const items3 = [stateFromStores];
  const memo = ref1.useMemo(() => stateFromStores.map(SearchPlatformUtils.toSearchBarTag), items2);
  const memo1 = ref1.useMemo(() => {
    const arr = stateFromStores;
    if (0 !== stateFromStores.length) {
      const mapped = arr.map((text) => text.text);
      const joined = mapped.join(", ");
      const intl = intl8.intl;
      const obj = { text: joined };
      return intl.formatToPlainString(intl8.t["0zoRaK"], obj);
    }
  }, items3);
  ref1 = ref1.useRef(null);
  let tmp6 = closure_16(searchContext);
  const imperativeHandle = ref1.useImperativeHandle(ref, () => ({
    setText(arg0) {
      const current = ref1.current;
      let setTextResult;
      if (current != null) {
        setTextResult = current.setText(arg0);
      }
      return setTextResult;
    },
    getText() {
      const current = ref1.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      return str;
    },
    blur() {
      const current = ref1.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = ref1.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = ref1.current;
      let flag;
      if (current != null) {
        flag = current.isFocused();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    },
    measure(arg0) {
      const current = ref1.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = ref1.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = ref1.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  const items4 = [searchContext];
  const effect = ref1.useEffect(() => {
    let ref;
    const obj = SearchPlatformUtilsDefault;
    return obj.subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
      const tmp = arg2 || null == arg0;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.setText(arg0);
        }
      }
    });
  }, items4);
  const items5 = [searchContext];
  const items6 = [searchContext];
  const callback = ref1.useCallback((arg0) => {
    let closure_0 = arg0;
    if (SearchQueryStore.getTextInputValue(searchContext) !== arg0) {
      const obj2 = SearchPlatformActionCreatorsDefault;
      obj2.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue(closure_0, true);
      });
      const obj3 = SearchPlatformUtilsDefault;
      const result = obj3.syncAutocompleteDebounced(tmp);
      const tmp2 = importDefault;
      if (!SearchQueryStore.isAutocompleteVisible(searchContext)) {
        const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
        const tmp2Result = tmp2(11990);
        if (isInitialSearchQueryResult) {
          const initialMessages = tmp2Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp2Result.fetchInitialMessagesDebounced(tmp);
        }
      }
    }
  }, items5);
  const items7 = [searchContext, setDismissed];
  const callback1 = ref1.useCallback((arg0) => {
    let closure_0 = arg0;
    const tmp2 = SearchQueryStore.getTags(searchContext)[arg0];
    let closure_1 = tmp2;
    if (null != tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl8.intl;
      const obj3 = { text: tmp2.text };
      announce(intl.formatToPlainString(intl8.t.srlxB8, obj3));
      if (tmp2.type === unpackModuleId.COMPLETE) {
        const obj6 = { searchContext, searchTokenType: tmp2.searchTokenType, isDefault: tmp2.location === SearchFilterAddLocations.CLIENT_AUTO_ADD };
        const obj2 = search_tracking_TrackingDefault;
        let result = obj2.trackSearchFilterRemove(obj6);
      }
      const obj4 = SearchPlatformActionCreatorsDefault;
      obj4.updateSearchQuery(searchContext, (removeTag) => {
        removeTag.removeTag(closure_0);
        if (type.type === constants.PREFIX) {
          const result = removeTag.restoreDraftTextInputValue();
        }
      });
      const obj5 = SearchPlatformUtilsDefault;
      const result1 = obj5.syncAutocompleteDebounced(tmp);
      const queryString = obj.getQueryString(tmp);
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
      const tmp6 = importDefault;
      if (queryString !== searchResultsQuery) {
        const tmp6Result = tmp6(11990);
        if (tmp11) {
          const initialMessages = tmp6Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
        }
      }
    }
  }, items6);
  const memo2 = ref1.useMemo(() => () => {
    closure_1_1();
    let obj = SearchQueryStore;
    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
    const str = SearchQueryStore.getTextInputValue(searchContext);
    const trimmed = str.trim();
    let result = null != prefixTag && "" !== trimmed;
    if (result) {
      const obj2 = searchContext(stateFromStores[23]);
      result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
    }
    if (result) {
      const obj3 = setDismissed(stateFromStores[20]);
      obj3.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        const obj = { type: constants.ANSWER, text: trimmed };
        setTextInputValue.addTag(obj);
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj8 = { searchContext, searchTokenType: null, location: null };
      ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
      const obj4 = setDismissed(stateFromStores[22]);
      obj4.trackSearchFilterAdd(obj8);
    }
    if (!obj.isQueryStringEmpty(searchContext)) {
      const obj6 = setDismissed(stateFromStores[20]);
      obj6.updateSearchQuery(searchContext, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
      const obj7 = setDismissed(stateFromStores[19]);
      const initialMessages = obj7.fetchInitialMessages(tmp2);
    }
  }, items7);
  const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
  let obj5 = { style: tmp.icon, children: null };
  setDismissed(stateFromStores[25]);
  return <tmp13 ref={ref1} accessibilityHint={memo1} autoFocus defaultValue={textInputValue} style={tmp.searchBar} tags={memo} icon={null} onChangeText={callback} onRemove={callback1} placeholder={tmp6} onSubmitEditing={memo2} leadingFade horizontal autoClearInputOnTagAdd={false} />;
}));
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default memoResult;
