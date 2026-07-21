// Module ID: 15194
// Function ID: 114630
// Name: useSearchPlaceholder
// Dependencies: []

// Module 15194 (useSearchPlaceholder)
function useSearchPlaceholder(searchContext) {
  const arg1 = searchContext;
  const items = [closure_9];
  const items1 = [searchContext];
  return arg1(dependencyMap[15]).useStateFromStores(items, (self) => {
    const type = self.type;
    const channelIds = channelIds.getChannelIds(self);
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.GUILD !== type) {
        if (constants.CHANNEL === type) {
          const channel = channel.getChannel(self.channelId);
          if (null == channel) {
            const intl4 = self(closure_2[13]).intl;
            let stringResult = intl4.string(self(closure_2[13]).t.5h0QOP);
          } else {
            let obj = self(closure_2[14]);
            const channelName = obj.computeChannelName(channel, closure_8, closure_7, true);
            const intl3 = self(closure_2[13]).intl;
            obj = { guildName: channelName };
            stringResult = intl3.formatToPlainString(self(closure_2[13]).t.LDpotA, obj);
          }
          return stringResult;
        } else if (constants.DMS === type) {
          const intl2 = self(closure_2[13]).intl;
          return intl2.string(self(closure_2[13]).t.m7OrlR);
        } else {
          const intl = self(closure_2[13]).intl;
          return intl.string(self(closure_2[13]).t.5h0QOP);
        }
      }
    }
    if (0 === channelIds.size) {
      const guild = guild.getGuild(self.guildId);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      if (null == name) {
        const intl7 = self(closure_2[13]).intl;
        let stringResult1 = intl7.string(self(closure_2[13]).t.5h0QOP);
      } else {
        const intl6 = self(closure_2[13]).intl;
        obj = { guildName: name };
        stringResult1 = intl6.formatToPlainString(self(closure_2[13]).t.LDpotA, obj);
      }
    } else {
      const intl5 = self(closure_2[13]).intl;
      return intl5.string(self(closure_2[13]).t.5h0QOP);
    }
  }, items1);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ SEARCH_BAR_HEIGHT: closure_10, SearchQueryTagTypes: closure_11 } = arg1(dependencyMap[7]));
const SearchFilterAddLocations = arg1(dependencyMap[8]).SearchFilterAddLocations;
const SearchTypes = arg1(dependencyMap[9]).SearchTypes;
const jsx = arg1(dependencyMap[10]).jsx;
const tmp2 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[11]).createStyles((arg0, minHeight) => {
  let obj = {};
  obj = {};
  if (arg0) {
    obj = { minHeight: minHeight + 2 };
    let obj1 = obj;
  } else {
    obj1 = { borderRadius: importDefault(dependencyMap[12]).radii.round, minHeight };
  }
  const merged = Object.assign(obj1);
  obj.searchBar = obj;
  obj.icon = { minHeight };
  return obj;
});
const obj2 = arg1(dependencyMap[11]);
const memoResult = importAllResult.memo(importAllResult.forwardRef((searchContext) => {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const setSuggestionsDismissed = searchContext.setSuggestionsDismissed;
  const importDefault = setSuggestionsDismissed;
  let obj = arg1(dependencyMap[17]);
  const tmp2 = callback(importDefault(dependencyMap[16])("SearchBar"), closure_10 * Math.min(2, obj.useFontScale()));
  const tmp = importDefault(dependencyMap[16])("SearchBar");
  const items = [textInputValue];
  const items1 = [searchContext];
  const stateFromStores = arg1(dependencyMap[15]).useStateFromStores(items, () => uiStore.getTags(searchContext), items1);
  const dependencyMap = stateFromStores;
  const items2 = [stateFromStores];
  const items3 = [stateFromStores];
  const memo = importAllResult.useMemo(() => stateFromStores.map(searchContext(stateFromStores[18]).toSearchBarTag), items2);
  const memo1 = importAllResult.useMemo(() => {
    if (0 !== stateFromStores.length) {
      const mapped = stateFromStores.map((text) => text.text);
      const joined = mapped.join(", ");
      const intl = searchContext(stateFromStores[13]).intl;
      const obj = { text: joined };
      return intl.formatToPlainString(searchContext(stateFromStores[13]).t.0zoRaK, obj);
    }
  }, items3);
  const ref = importAllResult.useRef(null);
  const obj2 = arg1(dependencyMap[15]);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    setText(arg0) {
      const current = closure_3.current;
      let setTextResult;
      if (null != current) {
        setTextResult = current.setText(arg0);
      }
      return setTextResult;
    },
    getText() {
      const current = closure_3.current;
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
      const current = closure_3.current;
      let blurResult;
      if (null != current) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = closure_3.current;
      let focusResult;
      if (null != current) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = closure_3.current;
      let isFocusedResult;
      if (null != current) {
        isFocusedResult = current.isFocused();
      }
      return null != isFocusedResult && isFocusedResult;
    },
    measure(arg0) {
      const current = closure_3.current;
      let measureResult;
      if (null != current) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = closure_3.current;
      let measureInWindowResult;
      if (null != current) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = closure_3.current;
      let measureLayoutResult;
      if (null != current) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  const items4 = [searchContext];
  const effect = importAllResult.useEffect(() => setSuggestionsDismissed(stateFromStores[18]).subscribeTextInputValue(searchContext, (arg0, arg1, arg2) => {
    let tmp = arg2;
    if (!arg2) {
      tmp = null == arg0;
    }
    if (!tmp) {
      const current = ref.current;
      tmp = null == current;
      const obj = current;
    }
    if (!tmp) {
      obj.setText(arg0);
    }
  }), items4);
  const items5 = [searchContext];
  const items6 = [searchContext];
  const callback = importAllResult.useCallback((searchContext) => {
    if (uiStore.getTextInputValue(searchContext) !== searchContext) {
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue(setTextInputValue, true);
      });
      const obj2 = setSuggestionsDismissed(stateFromStores[19]);
      const result = setSuggestionsDismissed(stateFromStores[18]).syncAutocompleteDebounced(searchContext);
      if (!uiStore.isAutocompleteVisible(searchContext)) {
        const obj = setSuggestionsDismissed(stateFromStores[18]);
        if (isInitialSearchQueryResult) {
          const initialMessages = obj.fetchInitialMessages(searchContext);
        } else {
          const initialMessagesDebounced = obj.fetchInitialMessagesDebounced(searchContext);
        }
        const isInitialSearchQueryResult = uiStore.isInitialSearchQuery(searchContext);
      }
      const obj3 = setSuggestionsDismissed(stateFromStores[18]);
    }
  }, items5);
  const items7 = [searchContext, setSuggestionsDismissed];
  const callback1 = importAllResult.useCallback((searchContext) => {
    const tmp = uiStore.getTags(searchContext)[searchContext];
    const setSuggestionsDismissed = tmp;
    if (null != tmp) {
      const AccessibilityAnnouncer = searchContext(stateFromStores[20]).AccessibilityAnnouncer;
      const intl = searchContext(stateFromStores[13]).intl;
      let obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(searchContext(stateFromStores[13]).t.srlxB8, obj));
      if (tmp.type === constants.COMPLETE) {
        obj = setSuggestionsDismissed(stateFromStores[21]);
        obj = { searchContext, searchTokenType: tmp.searchTokenType, isDefault: tmp.location === constants2.CLIENT_AUTO_ADD };
        const result = obj.trackSearchFilterRemove(obj);
      }
      setSuggestionsDismissed(stateFromStores[19]).updateSearchQuery(searchContext, (removeTag) => {
        removeTag.removeTag(removeTag);
        if (tmp.type === constants.PREFIX) {
          const result = removeTag.restoreDraftTextInputValue();
        }
      });
      const obj3 = setSuggestionsDismissed(stateFromStores[19]);
      const result1 = setSuggestionsDismissed(stateFromStores[18]).syncAutocompleteDebounced(searchContext);
      const queryString = uiStore.getQueryString(searchContext);
      const obj4 = setSuggestionsDismissed(stateFromStores[18]);
      if (queryString !== searchResultsQuery) {
        const obj5 = setSuggestionsDismissed(stateFromStores[18]);
        if (tmp17) {
          const initialMessages = obj5.fetchInitialMessages(searchContext);
        } else {
          const initialMessagesDebounced = obj5.fetchInitialMessagesDebounced(searchContext);
        }
      }
      const searchResultsQuery = uiStore.getSearchResultsQuery(searchContext);
    }
  }, items6);
  const memo2 = importAllResult.useMemo(() => () => {
    callback();
    const prefixTag = store.getPrefixTag(trimmed);
    const trimmed = store.getTextInputValue(trimmed).trim();
    let result = null != prefixTag;
    if (result) {
      result = "" !== trimmed;
    }
    if (result) {
      let obj = trimmed(closure_2[22]);
      result = obj.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
    }
    if (result) {
      callback(closure_2[19]).updateSearchQuery(trimmed, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: constants.ANSWER, text: trimmed });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj2 = callback(closure_2[19]);
      obj = { searchContext: trimmed };
      ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
      callback(closure_2[21]).trackSearchFilterAdd(obj);
      const obj3 = callback(closure_2[21]);
    }
    if (!store.isQueryStringEmpty(trimmed)) {
      callback(closure_2[19]).updateSearchQuery(trimmed, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
      const obj5 = callback(closure_2[19]);
      const initialMessages = callback(closure_2[18]).fetchInitialMessages(trimmed);
      const obj6 = callback(closure_2[18]);
    }
  }, items7);
  const textInputValue = textInputValue.getTextInputValue(searchContext);
  obj = { ref, accessibilityHint: memo1, autoFocus: true, defaultValue: textInputValue, style: tmp2.searchBar, tags: memo };
  obj = { style: tmp2.icon };
  const tmp7 = useSearchPlaceholder(searchContext);
  obj.children = jsx(importDefault(dependencyMap[24]), { searchContext });
  obj.icon = <View {...obj} />;
  obj.onChangeText = callback;
  obj.onRemove = callback1;
  obj.placeholder = tmp7;
  obj.onSubmitEditing = memo2;
  obj.leadingFade = true;
  obj.horizontal = true;
  obj.autoClearInputOnTagAdd = false;
  return jsx(importDefault(dependencyMap[23]), obj);
}));
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default memoResult;
