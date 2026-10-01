// Module ID: 16442
// Function ID: 16443
// Name: SearchBar
// Dependencies: [19, 17, 2045, 2067, 4479, 1372, 11822, 7303, 7302, 1074, 21, 4836, 1115, 4989, 504, 16439, 5288, 11821, 11844, 4541, 11841, 11824, 9036, 16443, 2]

// Module 16442 (SearchBar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl8 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11821 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11844 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;
let channel, guild;

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
const memoResult = react.memo(react.forwardRef((searchContext, ref) => {
  searchContext = searchContext.searchContext;
  let stateFromStores;
  ref = undefined;
  let obj = searchContext(stateFromStores[15]);
  const setDismissed = obj.useSearchSuggestionsContext().setDismissed;
  let obj2 = searchContext(stateFromStores[16]);
  let tmp = closure_15(closure_10 * min(2, obj2.useFontScale()));
  let obj3 = searchContext(stateFromStores[14]);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  stateFromStores = obj3.useStateFromStores(items, () => SearchQueryStore.getTags(searchContext), items1);
  const items2 = [stateFromStores];
  const items3 = [stateFromStores];
  const memo = ref.useMemo(() => stateFromStores.map(SearchPlatformUtils.toSearchBarTag), items2);
  const memo1 = ref.useMemo(() => {
    const arr = stateFromStores;
    if (0 !== stateFromStores.length) {
      const mapped = arr.map((text) => text.text);
      const joined = mapped.join(", ");
      const intl = intl8.intl;
      const obj = { text: joined };
      return intl.formatToPlainString(intl8.t["0zoRaK"], obj);
    }
  }, items3);
  ref = ref.useRef(null);
  let obj4 = searchContext(stateFromStores[14]);
  const items4 = [SearchQueryStore];
  const items5 = [searchContext];
  const stateFromStores1 = obj4.useStateFromStores(items4, () => {
    let stringResult2;
    const type = searchContext.type;
    const channelIds = SearchQueryStore.getChannelIds(searchContext);
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.GUILD !== type) {
        if (constants.CHANNEL === type) {
          let stringResult;
          channel = channel.getChannel(tmp.channelId);
          if (null == channel) {
            const intl4 = searchContext(stateFromStores[12]).intl;
            stringResult = intl4.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
          } else {
            const obj = searchContext(stateFromStores[13]);
            const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
            const intl3 = searchContext(stateFromStores[12]).intl;
            const obj2 = { guildName: channelName };
            stringResult = intl3.formatToPlainString(searchContext(stateFromStores[12]).t.LDpotA, obj2);
          }
          return stringResult;
        } else if (constants.DMS === type) {
          const intl2 = searchContext(stateFromStores[12]).intl;
          return intl2.string(searchContext(stateFromStores[12]).t.m7OrlR);
        } else {
          const intl = searchContext(stateFromStores[12]).intl;
          return intl.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
        }
      }
    }
    if (0 === channelIds.size) {
      let stringResult1;
      guild = guild.getGuild(tmp.guildId);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (null == name) {
        const intl7 = searchContext(stateFromStores[12]).intl;
        stringResult1 = intl7.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
      } else {
        const intl6 = searchContext(stateFromStores[12]).intl;
        const obj3 = { guildName: name };
        stringResult1 = intl6.formatToPlainString(searchContext(stateFromStores[12]).t.LDpotA, obj3);
      }
      stringResult2 = stringResult1;
    } else {
      const intl5 = searchContext(stateFromStores[12]).intl;
      stringResult2 = intl5.string(searchContext(stateFromStores[12]).t["5h0QOP"]);
    }
    return stringResult2;
  }, items5);
  const imperativeHandle = ref.useImperativeHandle(ref, () => ({
    setText(arg0) {
      const current = ref.current;
      let setTextResult;
      if (current != null) {
        setTextResult = current.setText(arg0);
      }
      return setTextResult;
    },
    getText() {
      const current = ref.current;
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
      const current = ref.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = ref.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = ref.current;
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
      const current = ref.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = ref.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = ref.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  const items6 = [searchContext];
  const effect = ref.useEffect(() => {
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
  }, items6);
  const items7 = [searchContext];
  const items8 = [searchContext];
  const callback = ref.useCallback((arg0) => {
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
        const tmp2Result = tmp2(11821);
        if (isInitialSearchQueryResult) {
          const initialMessages = tmp2Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp2Result.fetchInitialMessagesDebounced(tmp);
        }
      }
    }
  }, items7);
  const items9 = [searchContext, setDismissed];
  const callback1 = ref.useCallback((arg0) => {
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
        const tmp6Result = tmp6(11821);
        if (tmp11) {
          const initialMessages = tmp6Result.fetchInitialMessages(tmp);
        } else {
          const initialMessagesDebounced = tmp6Result.fetchInitialMessagesDebounced(tmp);
        }
      }
    }
  }, items8);
  const memo2 = ref.useMemo(() => () => {
    closure_1_1();
    let obj = SearchQueryStore;
    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
    const str = SearchQueryStore.getTextInputValue(searchContext);
    const trimmed = str.trim();
    let result = null != prefixTag && "" !== trimmed;
    if (result) {
      const obj2 = searchContext(stateFromStores[21]);
      result = obj2.isValidFilterAnswerForSubmit(prefixTag.searchTokenType, trimmed);
    }
    if (result) {
      const obj3 = setDismissed(stateFromStores[18]);
      obj3.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        const obj = { type: constants.ANSWER, text: trimmed };
        setTextInputValue.addTag(obj);
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj8 = { searchContext, searchTokenType: null, location: null };
      ({ searchTokenType: obj5.searchTokenType, location: obj5.location } = prefixTag);
      const obj4 = setDismissed(stateFromStores[20]);
      obj4.trackSearchFilterAdd(obj8);
    }
    if (!obj.isQueryStringEmpty(searchContext)) {
      const obj6 = setDismissed(stateFromStores[18]);
      obj6.updateSearchQuery(searchContext, (markExplicitSearchSubmitted) => markExplicitSearchSubmitted.markExplicitSearchSubmitted());
      const obj7 = setDismissed(stateFromStores[17]);
      const initialMessages = obj7.fetchInitialMessages(tmp2);
    }
  }, items9);
  const textInputValue = SearchQueryStore.getTextInputValue(searchContext);
  let obj6 = { style: tmp.icon, children: null };
  setDismissed(stateFromStores[22]);
  return <tmp13 ref={ref} accessibilityHint={memo1} autoFocus defaultValue={textInputValue} style={tmp.searchBar} tags={memo} icon={null} onChangeText={callback} onRemove={callback1} placeholder={stateFromStores1} onSubmitEditing={memo2} leadingFade horizontal autoClearInputOnTagAdd={false} />;
}));
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBar.tsx");

export default memoResult;
