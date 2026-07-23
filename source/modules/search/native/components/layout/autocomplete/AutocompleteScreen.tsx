// Module ID: 15416
// Function ID: 118492
// Dependencies: [57, 31, 1348, 3767, 1849, 10080, 10077, 9103, 653, 33, 566, 15340, 11398, 11406, 10076, 3969, 4320, 10078, 15417, 10084, 10079, 15378, 15333, 1212, 15344, 2]

// Module 15416
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ SearchListItemTypes: closure_10, SearchQueryTagTypes: closure_11, USER_ESTIMATED_ITEM_SIZE: closure_12 } = SearchAutocompleteSelectAnalyticsActions);
({ SearchPopoutModes: closure_13, SearchTokenTypes: closure_14 } = ME);
let closure_16 = [];
const memoResult = importAllResult.memo(function AutocompleteScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = searchContext(first[10]);
  let items = [callback3];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => callback3.getState(searchContext), items1, searchContext(first[10]).statesWillNeverBeEqual);
  let tmp2 = callback(fullscreenPlaceholderCount.useState(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  let obj1 = searchContext(first[10]);
  const items2 = [closure_9];
  const items3 = [searchContext];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_9.isTextInputValueEmpty(searchContext), items3);
  let obj2 = searchContext(first[11]);
  obj = { placeholderHeight: closure_12, numColumns: 1 };
  fullscreenPlaceholderCount = obj2.useFullscreenPlaceholderCount(obj);
  const items4 = [searchContext];
  callback = fullscreenPlaceholderCount.useCallback(() => {
    stateFromStores(first[12]).syncAutocomplete(searchContext);
    const obj = stateFromStores(first[12]);
    const initialMessages = stateFromStores(first[12]).fetchInitialMessages(searchContext);
  }, items4);
  const items5 = [callback, searchContext];
  const callback1 = fullscreenPlaceholderCount.useCallback((closure_0) => {
    const prefixTag = outer1_9.getPrefixTag(closure_0);
    if (null != prefixTag) {
      let obj = stateFromStores(first[13]);
      obj.updateSearchQuery(closure_0, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: outer2_11.ANSWER, text: closure_0 });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      obj = { searchContext: closure_0 };
      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
      stateFromStores(first[14]).trackSearchFilterAdd(obj);
      callback();
      const obj2 = stateFromStores(first[14]);
    }
  }, items5);
  const items6 = [callback, searchContext];
  const callback2 = fullscreenPlaceholderCount.useCallback((arg0) => {
    const user = callback2.getUser(arg0);
    if (null != user) {
      const prefixTag = outer1_9.getPrefixTag(user);
      if (null != prefixTag) {
        let obj = stateFromStores(first[13]);
        obj.updateSearchQuery(user, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: outer2_11.ANSWER, text: stateFromStores(first[15]).getUserTag(user), userId: user.id };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        obj = { searchContext: user };
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        stateFromStores(first[14]).trackSearchFilterAdd(obj);
        callback();
        const obj2 = stateFromStores(first[14]);
      }
    }
  }, items6);
  const items7 = [callback, searchContext];
  callback3 = fullscreenPlaceholderCount.useCallback((channelId) => {
    let closure_0 = channelId;
    const channel = callback.getChannel(channelId);
    if (null != channel) {
      const prefixTag = outer1_9.getPrefixTag(closure_0);
      if (null != prefixTag) {
        let userTag = searchContext(first[16]).computeChannelName(channel, callback2, callback1);
        if (channel.isDM()) {
          const user = callback2.getUser(channel.getRecipientId());
          if (null != user) {
            userTag = stateFromStores(first[15]).getUserTag(user);
            const obj6 = stateFromStores(first[15]);
          }
        }
        const obj5 = searchContext(first[16]);
        stateFromStores(first[13]).updateSearchQuery(closure_0, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: outer2_11.ANSWER, text: searchContext(first[17]).quoteChannelName(closure_1), channelId: closure_0 };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        const obj2 = stateFromStores(first[13]);
        let obj = { searchContext: closure_0 };
        ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
        stateFromStores(first[14]).trackSearchFilterAdd(obj);
        callback();
        const obj3 = stateFromStores(first[14]);
      }
    }
  }, items7);
  const items8 = [searchContext];
  const effect = fullscreenPlaceholderCount.useEffect(() => stateFromStores(first[12]).subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
    const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue() };
    const prefixTag = isAutocompleteVisible.getPrefixTag();
    let tmp2 = null;
    if (null != prefixTag) {
      tmp2 = prefixTag;
    }
    obj.prefixTag = tmp2;
    return obj;
  }, (isAutocompleteVisible, textInputValue) => {
    if (isAutocompleteVisible.isAutocompleteVisible) {
      textInputValue = undefined;
      if (null != textInputValue) {
        textInputValue = textInputValue.textInputValue;
      }
      let tmp5 = tmp === textInputValue;
      if (tmp5) {
        let prefixTag;
        if (null != textInputValue) {
          prefixTag = textInputValue.prefixTag;
        }
        tmp5 = tmp2 === prefixTag;
      }
      if (!tmp5) {
        outer1_3(true);
      }
    }
  }, true), items8);
  const items9 = [stateFromStores.autocompletes];
  const effect1 = fullscreenPlaceholderCount.useEffect(() => {
    callback(false);
  }, items9);
  const items10 = [first, searchContext, fullscreenPlaceholderCount, stateFromStores, callback2, callback3, callback1];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let autocompletes;
    let mode;
    let tokens;
    function maybeAddUserItem(id, toSearchListUserItemResult) {
      let hasItem = null == toSearchListUserItemResult || null == id;
      if (!hasItem) {
        hasItem = set.has(id);
      }
      if (!hasItem) {
        hasItem = callback1.isBlockedOrIgnored(id);
      }
      if (!hasItem) {
        set.add(id);
        items.push(toSearchListUserItemResult);
      }
    }
    function maybeAddChannelItem(arg0, arg1) {
      let hasItem = null == arg1 || null == arg0;
      if (!hasItem) {
        hasItem = set1.has(arg0);
      }
      if (!hasItem) {
        set1.add(arg0);
        items.push(arg1);
      }
    }
    const items = [];
    if (set1) {
      let num5 = 0;
      if (0 < maybeAddUserItem) {
        do {
          let obj = {};
          let tmp36 = outer1_10;
          obj.type = outer1_10.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj.key = "message-placeholder-" + num5;
          let arr = items.push(obj);
          num5 = num5 + 1;
          let tmp38 = maybeAddUserItem;
        } while (num5 < maybeAddUserItem);
      }
      return items;
    } else {
      const _Set = Set;
      obj = searchContext(first[18]);
      const set = new Set(obj.getSearchQueryUserIds(items));
      const _Set2 = Set;
      set1 = new Set(searchContext(first[18]).getSearchQueryChannelIds(items));
      ({ autocompletes, tokens, mode } = set);
      let item = autocompletes.forEach((arg0) => {
        let items;
        let results;
        if (mode.type === outer2_13.FILTER) {
          ({ results, group: items } = arg0);
          if (0 !== results.length) {
            const item = results.forEach((arg0) => {
              let channel;
              let text;
              let user;
              ({ user, channel, text } = arg0);
              let obj = searchContext(first[18]);
              let id;
              if (null != user) {
                id = user.id;
              }
              outer1_4(id, obj.toSearchListUserItem(items, user, outer2_7));
              let obj1 = searchContext(first[18]);
              let id1;
              const result = obj1.toSearchListChannelItem(channel, outer2_8);
              if (null != channel) {
                id1 = channel.id;
              }
              outer1_5(id1, result);
              if (tmp9) {
                obj = { type: outer3_10.GENERIC };
                obj = { text, icon: searchContext(first[18]).getSearchFilterHasIcon(text), onPress: outer2_6 };
                obj.props = obj;
                outer1_0.push(obj);
                const obj5 = searchContext(first[18]);
              }
              if (tmp16) {
                obj1 = { type: outer3_10.GENERIC };
                const obj2 = { text, icon: searchContext(first[18]).getSearchFilterAuthorTypeIcon(text), onPress: outer2_6 };
                obj1.props = obj2;
                outer1_0.push(obj1);
                const obj8 = searchContext(first[18]);
              }
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== outer1_13.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const Token = searchContext(first[19]).Token;
            const prototype3 = Token.prototype;
            const token = new Token(tmp40);
            if (token.type === outer1_14.ANSWER_USERNAME_FROM) {
              if (obj3.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  let id;
                  const obj4 = searchContext(first[18]);
                  if (null != user) {
                    id = user.id;
                  }
                  maybeAddUserItem(id, searchContext(first[18]).toSearchListUserItem(items, user, callback2));
                  const toSearchListUserItemResult = searchContext(first[18]).toSearchListUserItem(items, user, callback2);
                }
              }
              obj3 = searchContext(first[20]);
            }
            if (token.type === outer1_14.ANSWER_IN) {
              if (obj5.isValidChannelAutocomplete(token, items)) {
                const data1 = token.getData("channelIds");
                if (null != data1) {
                  const item1 = data1.forEach((channelId) => {
                    const channel = callback.getChannel(channelId);
                    let id;
                    const result = searchContext(first[18]).toSearchListChannelItem(channel, outer1_8);
                    if (null != channel) {
                      id = channel.id;
                    }
                    maybeAddChannelItem(id, result);
                  });
                }
              }
              obj5 = searchContext(first[20]);
            }
          }
        }
      }
      let tmp33 = items;
      if (items.length <= 0) {
        tmp33 = outer1_16;
      }
      return tmp33;
    }
  }, items10);
  const messageTabCountsErrorText = searchContext(first[21]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp18 = jsx(stateFromStores(first[22]), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores1) {
      if (0 === memo.length) {
        obj1 = {};
        const intl2 = searchContext(first[23]).intl;
        obj1.text = intl2.string(searchContext(first[23]).t["E4HqQ+"]);
        tmp18 = jsx(stateFromStores(first[22]), {});
        const tmp25 = stateFromStores(first[22]);
      }
    }
    if (!stateFromStores1) {
      if (0 === memo.length) {
        if (!first) {
          obj2 = {};
          const intl = searchContext(first[23]).intl;
          obj2.text = intl.string(searchContext(first[23]).t.Dr1vko);
          tmp18 = jsx(stateFromStores(first[22]), {});
          const tmp16 = stateFromStores(first[22]);
        }
      }
    }
    let obj3 = { data: memo };
    tmp18 = jsx(stateFromStores(first[24]), { data: memo });
  }
  return tmp18;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default memoResult;
