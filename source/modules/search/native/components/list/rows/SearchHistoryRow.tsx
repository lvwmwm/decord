// Module ID: 15224
// Function ID: 114952
// Name: SearchHistoryRemoveIcon
// Dependencies: []

// Module 15224 (SearchHistoryRemoveIcon)
function SearchHistoryRemoveIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const importDefault = searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = importAllResult.useCallback(() => {
    const result = searchHistoryItem(closure_2[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  const obj = { 122814468: 0, 1158220809: 3.896, 301575: 5, onPress: callback, style: { marginLeft: 16 }, hitSlop: {}, children: callback(arg1(dependencyMap[12]).XSmallIcon, {}) };
  return callback(arg1(dependencyMap[11]).PressableHighlight, obj);
}
function SearchHistoryTextRow(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const importDefault = searchHistoryItem;
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[13]);
  const onPressSearchHistoryText = obj.useOnPressSearchHistoryText({ searchContext });
  let closure_3 = onPressSearchHistoryText;
  const items = [onPressSearchHistoryText, searchContext, , , ];
  ({ tags: arr[2], text: arr[3], type: arr[4] } = searchHistoryItem);
  const callback = importAllResult.useCallback(() => {
    let obj = searchHistoryItem(tmp[14]);
    obj = { searchContext, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj);
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  }, items);
  obj = {};
  obj = { style: tmp.textContainer };
  const tags = searchHistoryItem.tags;
  let mapped;
  if (null != tags) {
    mapped = tags.map((text) => {
      let obj = { accessibilityRole: "button", style: tmp.tag, children: callback(searchContext(tmp[16]).Text, obj) };
      obj = { "Null": 80, "Null": 80, "Null": null, children: text.text };
      return callback(closure_5, obj, text.text);
    });
  }
  const items1 = [mapped, ];
  const obj1 = { "Null": true, "Null": 15.1, "Null": 253, style: tmp.text, children: searchHistoryItem.text };
  items1[1] = callback(arg1(dependencyMap[16]).Text, obj1);
  obj.children = items1;
  obj.label = closure_11(View, obj);
  obj.onPress = callback;
  obj.trailing = callback(SearchHistoryRemoveIcon, { searchContext, searchHistoryItem });
  obj.iconContainerStyle = tmp.textIconContainer;
  obj.icon = callback(View, { style: tmp.iconContainer, children: callback(arg1(dependencyMap[17]).MagnifyingGlassIcon, {}) });
  return callback(arg1(dependencyMap[15]).SearchListRow, obj);
}
function SearchHistoryGroupDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const importDefault = searchHistoryItem;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(searchHistoryItem.channelId));
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const onPressGroupDMItem = arg1(dependencyMap[13]).useOnPressGroupDMItem({ searchContext });
  let closure_3 = onPressGroupDMItem;
  const items2 = [onPressGroupDMItem, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback((channelId) => {
    let obj = searchHistoryItem(stateFromStores[14]);
    obj = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj);
    onPressGroupDMItem(channelId);
  }, items2);
  useClearableSearchHistoryRowProps(searchContext, searchHistoryItem);
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, onPress: callback, accessibilityActions: tmp7, onAccessibilityAction: tmp8, trailing: tmp6 };
    tmp9 = callback(importDefault(dependencyMap[19]), obj);
  }
  return tmp9;
}
function SearchHistoryDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const importDefault = searchHistoryItem;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(searchHistoryItem.userId));
  const items1 = [searchHistoryItem.userId];
  const effect = importAllResult.useEffect(() => {
    const user = searchContext(onPressDMItem[20]).getUser(searchHistoryItem.userId);
  }, items1);
  const onPressDMItem = arg1(dependencyMap[13]).useOnPressDMItem({ searchContext });
  const dependencyMap = onPressDMItem;
  const items2 = [onPressDMItem, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items2);
  useClearableSearchHistoryRowProps(searchContext, searchHistoryItem);
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { user: stateFromStores, onPress: callback, accessibilityActions: tmp7, onAccessibilityAction: tmp8, trailing: tmp6 };
    tmp9 = callback(importDefault(dependencyMap[22]), obj);
  }
  return tmp9;
}
function SearchHistoryGuildVoiceChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const importDefault = searchHistoryItem;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(searchHistoryItem.channelId));
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const onPressGuildVoiceChannel = arg1(dependencyMap[13]).useOnPressGuildVoiceChannel({ searchContext });
  let closure_3 = onPressGuildVoiceChannel;
  const items2 = [onPressGuildVoiceChannel, searchContext, searchHistoryItem.type];
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, voiceStates: closure_13, speakerVoiceStates: closure_13 };
    obj = { searchContext, searchHistoryItem };
    obj.trailing = callback(SearchHistoryRemoveIcon, obj);
    obj.onPress = tmp4;
    tmp5 = callback(importDefault(dependencyMap[23]), obj);
    const tmp9 = importDefault(dependencyMap[23]);
  }
  return tmp5;
}
function SearchHistoryGuildTextChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const importDefault = searchHistoryItem;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(searchHistoryItem.channelId));
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const items2 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[18]).useStateFromStores(items2, () => {
    let lastMessageIdResult = closure_7.lastMessageId(searchHistoryItem.channelId);
    if (null == lastMessageIdResult) {
      let lastMessageId;
      if (null != stateFromStores) {
        lastMessageId = stateFromStores.lastMessageId;
      }
      lastMessageIdResult = lastMessageId;
    }
    let tmp5 = null;
    if (null != lastMessageIdResult) {
      tmp5 = lastMessageIdResult;
    }
    return tmp5;
  });
  const obj2 = arg1(dependencyMap[18]);
  const onPressGuildTextChannel = arg1(dependencyMap[13]).useOnPressGuildTextChannel({ searchContext });
  let closure_3 = onPressGuildTextChannel;
  const items3 = [onPressGuildTextChannel, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback((channelId) => {
    let obj = searchHistoryItem(stateFromStores[14]);
    obj = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj);
    onPressGuildTextChannel(channelId);
  }, items3);
  useClearableSearchHistoryRowProps(searchContext, searchHistoryItem);
  let tmp10 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, lastMessageId: stateFromStores1, onPress: callback, accessibilityActions: tmp8, onAccessibilityAction: tmp9, trailing: tmp7 };
    tmp10 = callback(importDefault(dependencyMap[24]), obj);
  }
  return tmp10;
}
function useClearableSearchHistoryRowProps(searchContext, searchHistoryItem) {
  searchHistoryItem = searchContext;
  const importDefault = searchHistoryItem;
  let obj = {
    accessibilityActions: importAllResult.useMemo(() => {
      const obj = { name: "remove" };
      const intl = arg0(closure_2[25]).intl;
      obj.label = intl.string(arg0(closure_2[25]).t.Ov3VO7);
      const items = [obj];
      return items;
    }, []),
    onAccessibilityAction: importAllResult.useCallback((nativeEvent) => {
      if ("remove" === nativeEvent.nativeEvent.actionName) {
        const result = arg1(closure_2[10]).removeSearchHistoryItem(nativeEvent, arg1);
        const obj = arg1(closure_2[10]);
      }
    }, items),
    trailing: callback(SearchHistoryRemoveIcon, obj)
  };
  const items = [searchContext, searchHistoryItem];
  obj = { searchContext, searchHistoryItem };
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const SearchHistoryItemTypes = arg1(dependencyMap[6]).SearchHistoryItemTypes;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[9]).radii.xl, backgroundColor: importDefault(dependencyMap[9]).colors.INPUT_BACKGROUND_DEFAULT };
obj.iconContainer = obj;
obj.text = { flexShrink: 1 };
obj.textContainer = { paths: 177, has: null, TypeError: 1, Symbol: null };
obj.textIconContainer = { alignSelf: "flex-start" };
obj1 = { "Null": 1, "Null": "comp_0", "Null": 1, "Null": null, "Null": 0, "Null": 40, textAlignVertical: 40, borderRadius: importDefault(dependencyMap[9]).radii.lg, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
obj.tag = obj1;
let closure_12 = obj1.createStyles(obj);
let closure_13 = [];
const tmp2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo((searchHistoryItem) => {
  searchHistoryItem = searchHistoryItem.searchHistoryItem;
  let obj = Object.create(null);
  obj.searchHistoryItem = 0;
  const merged = Object.assign(searchHistoryItem, obj);
  const type = searchHistoryItem.type;
  if (SearchHistoryItemTypes.GROUP_DM === type) {
    obj = {};
    const merged1 = Object.assign(merged);
    obj["searchHistoryItem"] = searchHistoryItem;
    return callback(SearchHistoryGroupDMRow, obj);
  } else if (SearchHistoryItemTypes.DM === type) {
    const obj1 = {};
    const merged2 = Object.assign(merged);
    obj1["searchHistoryItem"] = searchHistoryItem;
    return callback(SearchHistoryDMRow, obj1);
  } else if (SearchHistoryItemTypes.TEXT === type) {
    const obj2 = {};
    const merged3 = Object.assign(merged);
    obj2["searchHistoryItem"] = searchHistoryItem;
    return callback(SearchHistoryTextRow, obj2);
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    const obj3 = {};
    const merged4 = Object.assign(merged);
    obj3["searchHistoryItem"] = searchHistoryItem;
    return callback(SearchHistoryGuildTextChannelRow, obj3);
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    obj = {};
    const merged5 = Object.assign(merged);
    obj["searchHistoryItem"] = searchHistoryItem;
    return callback(SearchHistoryGuildVoiceChannelRow, obj);
  } else {
    return null;
  }
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default memoResult;
