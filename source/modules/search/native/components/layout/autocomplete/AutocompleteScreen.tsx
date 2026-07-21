// Module ID: 15291
// Function ID: 116275
// Dependencies: []

// Module 15291
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ SearchListItemTypes: closure_10, SearchQueryTagTypes: closure_11, USER_ESTIMATED_ITEM_SIZE: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ SearchPopoutModes: closure_13, SearchTokenTypes: closure_14 } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
let closure_16 = [];
const tmp3 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function AutocompleteScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => callback3.getState(searchContext), items1, arg1(dependencyMap[10]).statesWillNeverBeEqual);
  const importDefault = stateFromStores;
  const tmp2 = callback(importAllResult.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let callback = tmp2[1];
  let obj1 = arg1(dependencyMap[10]);
  const items2 = [closure_9];
  const items3 = [searchContext];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => store.isTextInputValueEmpty(searchContext), items3);
  let obj2 = arg1(dependencyMap[11]);
  obj = { placeholderHeight: closure_12, numColumns: 1 };
  const fullscreenPlaceholderCount = obj2.useFullscreenPlaceholderCount(obj);
  const items4 = [searchContext];
  callback = importAllResult.useCallback(() => {
    stateFromStores(first[12]).syncAutocomplete(searchContext);
    const obj = stateFromStores(first[12]);
    const initialMessages = stateFromStores(first[12]).fetchInitialMessages(searchContext);
  }, items4);
  let closure_5 = callback;
  const items5 = [callback, searchContext];
  const callback1 = importAllResult.useCallback((searchContext) => {
    const prefixTag = store.getPrefixTag(searchContext);
    if (null != prefixTag) {
      let obj = stateFromStores(first[13]);
      obj.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: constants.ANSWER, text: setTextInputValue });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      obj = { searchContext };
      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
      stateFromStores(first[14]).trackSearchFilterAdd(obj);
      callback();
      const obj2 = stateFromStores(first[14]);
    }
  }, items5);
  let closure_6 = callback1;
  const items6 = [callback, searchContext];
  const callback2 = importAllResult.useCallback((arg0) => {
    const user = callback2.getUser(arg0);
    const searchContext = user;
    if (null != user) {
      const prefixTag = store.getPrefixTag(searchContext);
      if (null != prefixTag) {
        let obj = stateFromStores(first[13]);
        obj.updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: constants.ANSWER, text: callback(closure_2[15]).getUserTag(user), userId: user.id };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        obj = { searchContext };
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        stateFromStores(first[14]).trackSearchFilterAdd(obj);
        callback();
        const obj2 = stateFromStores(first[14]);
      }
    }
  }, items6);
  let closure_7 = callback2;
  const items7 = [callback, searchContext];
  const callback3 = importAllResult.useCallback((channelId) => {
    const searchContext = channelId;
    const channel = callback.getChannel(channelId);
    if (null != channel) {
      const prefixTag = store.getPrefixTag(searchContext);
      if (null != prefixTag) {
        let stateFromStores = searchContext(first[16]).computeChannelName(channel, callback2, callback1);
        if (channel.isDM()) {
          const user = callback2.getUser(channel.getRecipientId());
          if (null != user) {
            stateFromStores = stateFromStores(first[15]).getUserTag(user);
            const obj6 = stateFromStores(first[15]);
          }
        }
        const obj5 = searchContext(first[16]);
        stateFromStores(first[13]).updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: constants.ANSWER, text: setTextInputValue(closure_2[17]).quoteChannelName(closure_1), channelId: setTextInputValue };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        const obj2 = stateFromStores(first[13]);
        const obj = { searchContext };
        ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
        stateFromStores(first[14]).trackSearchFilterAdd(obj);
        callback();
        const obj3 = stateFromStores(first[14]);
      }
    }
  }, items7);
  closure_8 = callback3;
  const items8 = [searchContext];
  const effect = importAllResult.useEffect(() => stateFromStores(first[12]).subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
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
        callback(true);
      }
    }
  }, true), items8);
  const items9 = [stateFromStores.autocompletes];
  const effect1 = importAllResult.useEffect(() => {
    callback(false);
  }, items9);
  const items10 = [first, searchContext, fullscreenPlaceholderCount, stateFromStores, callback2, callback3, callback1];
  const memo = importAllResult.useMemo(() => {
    let autocompletes;
    let mode;
    let tokens;
    function maybeAddUserItem(id, toSearchListUserItemResult) {
      let hasItem = null == toSearchListUserItemResult || null == id;
      if (!hasItem) {
        hasItem = set.has(id);
      }
      if (!hasItem) {
        hasItem = blockedOrIgnored.isBlockedOrIgnored(id);
      }
      if (!hasItem) {
        set.add(id);
        items.push(toSearchListUserItemResult);
      }
    }
    const fullscreenPlaceholderCount = maybeAddUserItem;
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
    const searchContext = items;
    if (first) {
      let num5 = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = {};
          let tmp36 = closure_10;
          obj.type = closure_10.MESSAGE_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj.key = "message-placeholder-" + num5;
          let arr = items.push(obj);
          num5 = num5 + 1;
          let tmp38 = closure_4;
        } while (num5 < closure_4);
      }
      return items;
    } else {
      const _Set = Set;
      obj = searchContext(first[18]);
      const set = new Set(obj.getSearchQueryUserIds(searchContext));
      const stateFromStores = set;
      const _Set2 = Set;
      const set1 = new Set(searchContext(first[18]).getSearchQueryChannelIds(searchContext));
      const first = set1;
      ({ autocompletes, tokens, mode } = stateFromStores);
      let closure_3 = mode;
      const item = autocompletes.forEach((arg0) => {
        let results;
        if (mode.type === constants.FILTER) {
          ({ results, group: closure_0 } = arg0);
          if (0 !== results.length) {
            const item = results.forEach((arg0) => {
              let channel;
              let text;
              let user;
              ({ user, channel, text } = arg0);
              let obj = arr(closure_2[18]);
              let id;
              if (null != user) {
                id = user.id;
              }
              closure_4(id, obj.toSearchListUserItem(arr, user, closure_7));
              let obj1 = arr(closure_2[18]);
              let id1;
              const result = obj1.toSearchListChannelItem(channel, closure_8);
              if (null != channel) {
                id1 = channel.id;
              }
              closure_5(id1, result);
              if (tmp9) {
                obj = { type: constants.GENERIC };
                obj = { text, icon: arr(closure_2[18]).getSearchFilterHasIcon(text), onPress: closure_6 };
                obj.props = obj;
                let arr = arr.push(obj);
                const obj5 = arr(closure_2[18]);
              }
              if (tmp16) {
                obj1 = { type: constants.GENERIC };
                const obj2 = { text, icon: arr(closure_2[18]).getSearchFilterAuthorTypeIcon(text), onPress: closure_6 };
                obj1.props = obj2;
                arr = arr.push(obj1);
                const obj8 = arr(closure_2[18]);
              }
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== constants.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const Token = searchContext(first[19]).Token;
            const prototype3 = Token.prototype;
            const token = new Token(tmp40);
            if (token.type === constants2.ANSWER_USERNAME_FROM) {
              if (obj3.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  let id;
                  const obj4 = searchContext(first[18]);
                  if (null != user) {
                    id = user.id;
                  }
                  maybeAddUserItem(id, searchContext(first[18]).toSearchListUserItem(searchContext, user, callback2));
                  const toSearchListUserItemResult = searchContext(first[18]).toSearchListUserItem(searchContext, user, callback2);
                }
              }
              const obj3 = searchContext(first[20]);
            }
            if (token.type === constants2.ANSWER_IN) {
              if (obj5.isValidChannelAutocomplete(token, searchContext)) {
                const data1 = token.getData("channelIds");
                if (null != data1) {
                  const item1 = data1.forEach((channelId) => {
                    const channel = maybeAddChannelItem.getChannel(channelId);
                    let id;
                    const result = items(set1[18]).toSearchListChannelItem(channel, closure_8);
                    if (null != channel) {
                      id = channel.id;
                    }
                    maybeAddChannelItem(id, result);
                  });
                }
              }
              const obj5 = searchContext(first[20]);
            }
          }
        }
      }
      let tmp33 = items;
      if (items.length <= 0) {
        tmp33 = closure_16;
      }
      return tmp33;
    }
  }, items10);
  const messageTabCountsErrorText = arg1(dependencyMap[21]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp18 = jsx(importDefault(dependencyMap[22]), obj);
  } else {
    if (stateFromStores1) {
      if (0 === memo.length) {
        obj1 = {};
        const intl2 = arg1(dependencyMap[23]).intl;
        obj1.text = intl2.string(arg1(dependencyMap[23]).t.E4HqQ+);
        tmp18 = jsx(importDefault(dependencyMap[22]), obj1);
        const tmp25 = importDefault(dependencyMap[22]);
      }
    }
    if (!stateFromStores1) {
      if (0 === memo.length) {
        if (!first) {
          obj2 = {};
          const intl = arg1(dependencyMap[23]).intl;
          obj2.text = intl.string(arg1(dependencyMap[23]).t.Dr1vko);
          tmp18 = jsx(importDefault(dependencyMap[22]), obj2);
          const tmp16 = importDefault(dependencyMap[22]);
        }
      }
    }
    const obj3 = { data: memo };
    tmp18 = jsx(importDefault(dependencyMap[24]), obj3);
  }
  return tmp18;
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default memoResult;
