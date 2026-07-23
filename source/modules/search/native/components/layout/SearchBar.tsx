// Module ID: 15321
// Function ID: 116877
// Name: useSearchPlaceholder
// Dependencies: [31, 27, 1348, 1838, 3767, 1849, 10077, 9103, 9133, 653, 33, 4130, 689, 1212, 4320, 566, 1324, 4549, 11398, 11406, 3843, 10076, 10079, 8425, 15322, 2]

// Module 15321 (useSearchPlaceholder)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import { SearchTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function useSearchPlaceholder(searchContext) {
  const _require = searchContext;
  const items = [closure_9];
  const items1 = [searchContext];
  return _require(566).useStateFromStores(items, () => {
    const type = searchContext.type;
    const channelIds = outer1_9.getChannelIds(searchContext);
    if (outer1_13.GUILD_CHANNEL !== type) {
      if (outer1_13.GUILD !== type) {
        if (outer1_13.CHANNEL === type) {
          const channel = outer1_5.getChannel(searchContext.channelId);
          if (null == channel) {
            const intl4 = searchContext(outer1_2[13]).intl;
            let stringResult = intl4.string(searchContext(outer1_2[13]).t["5h0QOP"]);
          } else {
            let obj = searchContext(outer1_2[14]);
            const channelName = obj.computeChannelName(channel, outer1_8, outer1_7, true);
            const intl3 = searchContext(outer1_2[13]).intl;
            obj = { guildName: channelName };
            stringResult = intl3.formatToPlainString(searchContext(outer1_2[13]).t.LDpotA, obj);
          }
          return stringResult;
        } else if (outer1_13.DMS === type) {
          const intl2 = searchContext(outer1_2[13]).intl;
          return intl2.string(searchContext(outer1_2[13]).t.m7OrlR);
        } else {
          const intl = searchContext(outer1_2[13]).intl;
          return intl.string(searchContext(outer1_2[13]).t["5h0QOP"]);
        }
      }
    }
    if (0 === channelIds.size) {
      const guild = outer1_6.getGuild(searchContext.guildId);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      if (null == name) {
        const intl7 = searchContext(outer1_2[13]).intl;
        let stringResult1 = intl7.string(searchContext(outer1_2[13]).t["5h0QOP"]);
      } else {
        const intl6 = searchContext(outer1_2[13]).intl;
        obj = { guildName: name };
        stringResult1 = intl6.formatToPlainString(searchContext(outer1_2[13]).t.LDpotA, obj);
      }
    } else {
      const intl5 = searchContext(outer1_2[13]).intl;
      return intl5.string(searchContext(outer1_2[13]).t["5h0QOP"]);
    }
  }, items1);
}
({ SEARCH_BAR_HEIGHT: closure_10, SearchQueryTagTypes: closure_11 } = SearchAutocompleteSelectAnalyticsActions);
let closure_15 = _createForOfIteratorHelperLoose.createStyles((arg0, minHeight) => {
  let obj = {};
  obj = {};
  if (arg0) {
    obj = { minHeight: minHeight + 2 };
    let obj1 = obj;
  } else {
    obj1 = { borderRadius: importDefault(689).radii.round, minHeight };
  }
  const merged = Object.assign(obj1);
  obj.searchBar = obj;
  const obj2 = { width: 32, minHeight, justifyContent: "center", zIndex: 10 };
  obj.icon = obj2;
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef((searchContext) => {
  searchContext = searchContext.searchContext;
  let setSuggestionsDismissed = searchContext.setSuggestionsDismissed;
  let obj = searchContext(stateFromStores[17]);
  const tmp2 = callback(setSuggestionsDismissed(stateFromStores[16])("SearchBar"), closure_10 * Math.min(2, obj.useFontScale()));
  let tmp = setSuggestionsDismissed(stateFromStores[16])("SearchBar");
  const items = [textInputValue];
  const items1 = [searchContext];
  stateFromStores = searchContext(stateFromStores[15]).useStateFromStores(items, () => outer1_9.getTags(searchContext), items1);
  const items2 = [stateFromStores];
  const items3 = [stateFromStores];
  const memo = ref.useMemo(() => stateFromStores.map(searchContext(stateFromStores[18]).toSearchBarTag), items2);
  const memo1 = ref.useMemo(() => {
    if (0 !== stateFromStores.length) {
      const mapped = stateFromStores.map((text) => text.text);
      const joined = mapped.join(", ");
      const intl = searchContext(stateFromStores[13]).intl;
      const obj = { text: joined };
      return intl.formatToPlainString(searchContext(stateFromStores[13]).t["0zoRaK"], obj);
    }
  }, items3);
  ref = ref.useRef(null);
  let obj2 = searchContext(stateFromStores[15]);
  const imperativeHandle = ref.useImperativeHandle(arg1, () => ({
    setText(arg0) {
      const current = outer1_3.current;
      let setTextResult;
      if (null != current) {
        setTextResult = current.setText(arg0);
      }
      return setTextResult;
    },
    getText() {
      const current = outer1_3.current;
      let text;
      if (null != current) {
        text = current.getText();
      }
      let str = "";
      if (null != text) {
        str = text;
      }
      return str;
    },
    blur() {
      const current = outer1_3.current;
      let blurResult;
      if (null != current) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = outer1_3.current;
      let focusResult;
      if (null != current) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = outer1_3.current;
      let isFocusedResult;
      if (null != current) {
        isFocusedResult = current.isFocused();
      }
      return null != isFocusedResult && isFocusedResult;
    },
    measure(arg0) {
      const current = outer1_3.current;
      let measureResult;
      if (null != current) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = outer1_3.current;
      let measureInWindowResult;
      if (null != current) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = outer1_3.current;
      let measureLayoutResult;
      if (null != current) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  const items4 = [searchContext];
  const effect = ref.useEffect(() => setSuggestionsDismissed(stateFromStores[18]).subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
    let tmp = arg2;
    if (!arg2) {
      tmp = null == arg0;
    }
    if (!tmp) {
      const current = outer1_3.current;
      tmp = null == current;
      const obj = current;
    }
    if (!tmp) {
      obj.setText(arg0);
    }
  }), items4);
  const items5 = [searchContext];
  const items6 = [searchContext];
  callback = ref.useCallback((closure_0) => {
    if (outer1_9.getTextInputValue(closure_0) !== closure_0) {
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(closure_0, (setTextInputValue) => {
        setTextInputValue.setTextInputValue(closure_0, true);
      });
      const obj2 = setSuggestionsDismissed(stateFromStores[19]);
      const result = setSuggestionsDismissed(stateFromStores[18]).syncAutocompleteDebounced(closure_0);
      if (!outer1_9.isAutocompleteVisible(closure_0)) {
        const obj = setSuggestionsDismissed(stateFromStores[18]);
        if (isInitialSearchQueryResult) {
          const initialMessages = obj.fetchInitialMessages(closure_0);
        } else {
          const initialMessagesDebounced = obj.fetchInitialMessagesDebounced(closure_0);
        }
        isInitialSearchQueryResult = outer1_9.isInitialSearchQuery(closure_0);
      }
      const obj3 = setSuggestionsDismissed(stateFromStores[18]);
    }
  }, items5);
  const items7 = [searchContext, setSuggestionsDismissed];
  const callback1 = ref.useCallback((closure_0) => {
    const tmp = outer1_9.getTags(closure_0)[closure_0];
    const setSuggestionsDismissed = tmp;
    if (null != tmp) {
      const AccessibilityAnnouncer = searchContext(stateFromStores[20]).AccessibilityAnnouncer;
      const intl = searchContext(stateFromStores[13]).intl;
      let obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(searchContext(stateFromStores[13]).t.srlxB8, obj));
      if (tmp.type === outer1_11.COMPLETE) {
        obj = setSuggestionsDismissed(stateFromStores[21]);
        obj = { searchContext: closure_0, searchTokenType: tmp.searchTokenType, isDefault: tmp.location === outer1_12.CLIENT_AUTO_ADD };
        let result = obj.trackSearchFilterRemove(obj);
      }
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(closure_0, (removeTag) => {
        removeTag.removeTag(closure_0);
        if (tmp.type === outer2_11.PREFIX) {
          const result = removeTag.restoreDraftTextInputValue();
        }
      });
      const obj3 = setSuggestionsDismissed(stateFromStores[19]);
      const result1 = setSuggestionsDismissed(stateFromStores[18]).syncAutocompleteDebounced(closure_0);
      const queryString = outer1_9.getQueryString(closure_0);
      const obj4 = setSuggestionsDismissed(stateFromStores[18]);
      if (queryString !== searchResultsQuery) {
        const obj5 = setSuggestionsDismissed(stateFromStores[18]);
        if (tmp17) {
          const initialMessages = obj5.fetchInitialMessages(closure_0);
        } else {
          const initialMessagesDebounced = obj5.fetchInitialMessagesDebounced(closure_0);
        }
      }
      searchResultsQuery = outer1_9.getSearchResultsQuery(closure_0);
    }
  }, items6);
  const memo2 = ref.useMemo(() => () => {
    outer1_1();
    const prefixTag = outer2_9.getPrefixTag(outer1_0);
    const trimmed = outer2_9.getTextInputValue(outer1_0).trim();
    let result = null != prefixTag;
    if (result) {
      result = "" !== trimmed;
    }
    if (result) {
      let obj = searchContext(stateFromStores[22]);
      result = obj.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
    }
    if (result) {
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(outer1_0, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: outer3_11.ANSWER, text: trimmed });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj2 = setSuggestionsDismissed(stateFromStores[19]);
      obj = { searchContext: outer1_0 };
      ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
      setSuggestionsDismissed(stateFromStores[21]).trackSearchFilterAdd(obj);
      const obj3 = setSuggestionsDismissed(stateFromStores[21]);
    }
    if (!outer2_9.isQueryStringEmpty(outer1_0)) {
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(outer1_0, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
      const obj5 = setSuggestionsDismissed(stateFromStores[19]);
      const initialMessages = setSuggestionsDismissed(stateFromStores[18]).fetchInitialMessages(outer1_0);
      const obj6 = setSuggestionsDismissed(stateFromStores[18]);
    }
  }, items7);
  textInputValue = textInputValue.getTextInputValue(searchContext);
  obj = { ref, accessibilityHint: memo1, autoFocus: true, defaultValue: textInputValue, style: tmp2.searchBar, tags: memo };
  obj = { style: tmp2.icon };
  const tmp7 = useSearchPlaceholder(searchContext);
  obj.children = jsx(setSuggestionsDismissed(stateFromStores[24]), { searchContext });
  obj.icon = <View style={tmp2.icon} />;
  obj.onChangeText = callback;
  obj.onRemove = callback1;
  obj.placeholder = tmp7;
  obj.onSubmitEditing = memo2;
  obj.leadingFade = true;
  obj.horizontal = true;
  obj.autoClearInputOnTagAdd = false;
  return jsx(setSuggestionsDismissed(stateFromStores[23]), { style: tmp2.icon });
}));
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default memoResult;
