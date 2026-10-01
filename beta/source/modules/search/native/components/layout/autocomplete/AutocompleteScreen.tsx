// Module ID: 16551
// Function ID: 16552
// Name: AutocompleteScreen
// Dependencies: [32, 19, 2045, 4479, 1372, 11825, 11822, 7303, 1074, 21, 504, 16462, 11821, 11844, 11841, 4678, 4989, 11823, 16552, 11829, 11824, 16516, 16454, 1115, 16466, 2]

// Module 16551 (AutocompleteScreen)
import Fragment from "Fragment" /* 21 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import useChannelName from "useChannelName" /* 4989 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11821 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11844 */;
import AutocompleteScreenUtils from "AutocompleteScreenUtils" /* 16552 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import SearchAutocompleteStore from "SearchAutocompleteStore" /* 11825 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let set;

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ SearchListItemTypes: c10, SearchQueryTagTypes: unpackModuleId, USER_ESTIMATED_ITEM_SIZE: closure_12 } = SearchConstants);
({ SearchPopoutModes: map1, SearchTokenTypes: closure_14 } = Constants);
const jsx = Fragment.jsx;
let closure_16 = [];
const memoResult = react.memo(function AutocompleteScreen(searchContext) {
  let closure_3;
  let constants3;
  let first;
  let tmp18;
  searchContext = searchContext.searchContext;
  first = undefined;
  _slicedToArray = undefined;
  let fullscreenPlaceholderCount;
  let callback3;
  let tmp = searchContext;
  const tmp2 = first;
  let obj = searchContext(first[10]);
  let items = [callback3];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => SearchAutocompleteStore.getState(searchContext), items1, searchContext(first[10]).statesWillNeverBeEqual);
  [first, _slicedToArray] = fullscreenPlaceholderCount.useState(false);
  let obj2 = searchContext(first[10]);
  const items2 = [SearchQueryStore];
  const items3 = [searchContext];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => SearchQueryStore.isTextInputValueEmpty(searchContext), items3);
  let obj3 = searchContext(first[11]);
  let obj4 = { placeholderHeight, numColumns: 1 };
  fullscreenPlaceholderCount = obj3.useFullscreenPlaceholderCount(obj4);
  const items4 = [searchContext];
  const callback = fullscreenPlaceholderCount.useCallback(() => {
    const obj = SearchPlatformUtilsDefault;
    obj.syncAutocomplete(searchContext);
    const obj2 = SearchPlatformUtilsDefault;
    const initialMessages = obj2.fetchInitialMessages(searchContext);
  }, items4);
  const items5 = [callback, searchContext];
  const callback1 = fullscreenPlaceholderCount.useCallback((arg0) => {
    let closure_0 = arg0;
    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
    if (null != prefixTag) {
      let obj = SearchPlatformActionCreatorsDefault;
      obj.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        const obj = { type: constants.ANSWER, text };
        setTextInputValue.addTag(obj);
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj4 = { searchContext, searchTokenType: null, location: null };
      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
      const obj2 = search_tracking_TrackingDefault;
      obj2.trackSearchFilterAdd(obj4);
      callback();
    }
  }, items5);
  const items6 = [callback, searchContext];
  const callback2 = fullscreenPlaceholderCount.useCallback((arg0) => {
    const user = UserStore.getUser(arg0);
    if (null != user) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        let obj = SearchPlatformActionCreatorsDefault;
        obj.updateSearchQuery(searchContext, (setTextInputValue) => {
          let obj2;
          setTextInputValue.setTextInputValue("");
          const addTag = setTextInputValue.addTag;
          const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
          obj2 = stateFromStores(first[15]);
          addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        let obj2 = search_tracking_TrackingDefault;
        const obj4 = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        obj2.trackSearchFilterAdd(obj4);
        callback();
      }
    }
  }, items6);
  const items7 = [callback, searchContext];
  callback3 = fullscreenPlaceholderCount.useCallback((arg0) => {
    let closure_0 = arg0;
    const channel = ChannelStore.getChannel(arg0);
    if (null != channel) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        const obj5 = useChannelName;
        let userTag = obj5.computeChannelName(channel, UserStore, RelationshipStore);
        const obj6 = UserStore;
        if (channel.isDM()) {
          const user = obj6.getUser(channel.getRecipientId());
          if (null != user) {
            const obj7 = UserUtilsDefault;
            userTag = obj7.getUserTag(user);
          }
        }
        let obj2 = SearchPlatformActionCreatorsDefault;
        obj2.updateSearchQuery(searchContext, (setTextInputValue) => {
          let obj2;
          setTextInputValue.setTextInputValue("");
          const addTag = setTextInputValue.addTag;
          const obj = { type: constants.ANSWER, text: obj2.quoteChannelName(closure_1), channelId };
          obj2 = searchContext(first[17]);
          addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        let obj = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
        const obj3 = search_tracking_TrackingDefault;
        obj3.trackSearchFilterAdd(obj);
        callback();
      }
    }
  }, items7);
  const items8 = [searchContext];
  const effect = fullscreenPlaceholderCount.useEffect(() => {
    let obj = SearchPlatformUtilsDefault;
    return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
      let prefixTag;
      const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
      prefixTag = isAutocompleteVisible.getPrefixTag();
      if (prefixTag == null) {
        prefixTag = null;
      }
      return obj;
    }, (isAutocompleteVisible, textInputValue) => {
      if (isAutocompleteVisible.isAutocompleteVisible) {
        textInputValue = undefined;
        if (textInputValue != null) {
          textInputValue = textInputValue.textInputValue;
        }
        let tmp6 = tmp === textInputValue;
        if (tmp6) {
          let prefixTag;
          if (textInputValue != null) {
            prefixTag = textInputValue.prefixTag;
          }
          tmp6 = tmp2 === prefixTag;
        }
        if (!tmp6) {
          closure_1_3(true);
        }
      }
    }, true);
  }, items8);
  const items9 = [stateFromStores.autocompletes];
  const effect1 = fullscreenPlaceholderCount.useEffect(() => {
    closure_3(false);
  }, items9);
  const items10 = [first, searchContext, fullscreenPlaceholderCount, stateFromStores, callback2, callback3, callback1];
  const memo = fullscreenPlaceholderCount.useMemo(function() {
    let autocompletes;
    let blockedOrIgnored;
    let mode;
    let set1;
    let tokens;
    const items = [];
    const tmp = set1;
    if (tmp) {
      let num2 = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj2 = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num2 };
          let _HermesInternal = HermesInternal;
          let push = items.push;
          let arr = push(obj2);
          num2 = num2 + 1;
          let tmp27 = fullscreenPlaceholderCount;
        } while (num2 < fullscreenPlaceholderCount);
      }
      return items;
    } else {
      const _Set = Set;
      let obj = searchContext(first[18]);
      const self = this;
      const self2 = this;
      set = new Set(obj.getSearchQueryUserIds(items));
      const _Set2 = Set;
      let obj3 = searchContext(first[18]);
      const self3 = this;
      const self4 = this;
      set1 = new Set(obj3.getSearchQueryChannelIds(items));
      ({ autocompletes, tokens, mode } = set);
      let item = autocompletes.forEach((item) => {
        let results;
        if (mode.type === constants2.FILTER) {
          ({ results, group: items } = item);
          if (0 !== results.length) {
            item = results.forEach((item) => {
              let channel;
              let obj2;
              let obj3;
              let text;
              let tmpResult3;
              let tmpResult4;
              let user;
              ({ user, channel, text } = item);
              const obj = AutocompleteScreenUtils;
              const toSearchListUserItemResult = obj.toSearchListUserItem(searchContext, user, callback2);
              let id;
              if (user != null) {
                id = user.id;
              }
              const hasItem = null == toSearchListUserItemResult || null == id || set.has(id) || blockedOrIgnored.isBlockedOrIgnored(id);
              if (!hasItem) {
                set.add(id);
                items.push(toSearchListUserItemResult);
              }
              const tmpResult = AutocompleteScreenUtils;
              const result = tmpResult.toSearchListChannelItem(channel, callback3);
              let id1;
              if (channel != null) {
                id1 = channel.id;
              }
              const hasItem1 = null == result || null == id1 || set1.has(id1);
              if (!hasItem1) {
                set1.add(id1);
                items.push(result);
              }
              let tmp22 = items === constants2.FILTER_HAS;
              const tmp20 = items;
              const tmp21 = constants2;
              if (tmp22) {
                tmp22 = null != text;
              }
              if (tmp22) {
                const element = { type: constants.GENERIC, props: obj2 };
                const push = items.push;
                obj2 = { text, icon: tmpResult3.getSearchFilterHasIcon(text), onPress: callback1 };
                tmpResult3 = AutocompleteScreenUtils;
                push(element);
              }
              const tmp27 = tmp20 === tmp21.FILTER_AUTHOR_TYPE && null != text;
              if (tmp27) {
                const element1 = { type: constants.GENERIC, props: obj3 };
                const push2 = items.push;
                obj3 = { text, icon: tmpResult4.getSearchFilterAuthorTypeIcon(text), onPress: callback1 };
                tmpResult4 = AutocompleteScreenUtils;
                push2(element1);
              }
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== constants2.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const self5 = this;
            const self6 = this;
            const token = new tmp3(tmp4[19]).Token(tmp29);
            if (token.type === constants3.ANSWER_USERNAME_FROM) {
              const tmp3Result = searchContext(first[20]);
              if (tmp3Result.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  const tmp3Result3 = searchContext(first[18]);
                  let toSearchListUserItemResult = tmp3Result3.toSearchListUserItem(tmp5, user, callback2);
                  let id;
                  if (user != null) {
                    id = user.id;
                  }
                  let isBlockedOrIgnoredResult = null == toSearchListUserItemResult || null == id || set.has(id);
                  if (!isBlockedOrIgnoredResult) {
                    isBlockedOrIgnoredResult = callback1.isBlockedOrIgnored(id);
                  }
                  if (!isBlockedOrIgnoredResult) {
                    set.add(id);
                    items.push(toSearchListUserItemResult);
                  }
                }
              }
            }
            if (token.type === constants3.ANSWER_IN) {
              const tmp3Result4 = searchContext(first[20]);
              if (tmp3Result4.isValidChannelAutocomplete(token, items)) {
                const data1 = token.getData("channelIds");
                if (null != data1) {
                  const item1 = data1.forEach((item) => {
                    const channel = ChannelStore.getChannel(item);
                    const obj = AutocompleteScreenUtils;
                    const result = obj.toSearchListChannelItem(channel, callback3);
                    let id;
                    if (channel != null) {
                      id = channel.id;
                    }
                    const hasItem = null == result || null == id || set1.has(id);
                    if (!hasItem) {
                      set1.add(id);
                      items.push(result);
                    }
                  });
                }
              }
            }
          }
        }
      }
      let tmp22 = items;
      if (items.length <= 0) {
        tmp22 = closure_1_16;
      }
      return tmp22;
    }
  }, items10);
  let obj5 = searchContext(first[21]);
  const messageTabCountsErrorText = obj5.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    let tmp25 = stateFromStores;
    tmp18 = jsx(stateFromStores(tmp2[22]), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores1) {
      if (0 === memo.length) {
        let tmp21 = jsx;
        let tmp22 = stateFromStores;
        const tmp23 = stateFromStores(tmp2[22]);
        const intl2 = tmp(tmp2[23]).intl;
        tmp18 = <tmp23 text={intl2.string(tmp(tmp2[23]).t["E4HqQ+"])} />;
      }
    }
    if (!stateFromStores1) {
      let num2 = 0;
      if (0 === memo.length) {
        if (!first) {
          stateFromStores(tmp2[22]);
          const intl = tmp(tmp2[23]).intl;
          tmp18 = <tmp17 text={intl.string(tmp(tmp2[23]).t.Dr1vko)} />;
        }
      }
    }
    let tmp20 = stateFromStores;
    tmp18 = jsx(stateFromStores(tmp2[24]), { data: memo });
  }
  return tmp18;
});
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default memoResult;
