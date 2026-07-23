// Module ID: 15348
// Function ID: 117165
// Name: SearchHistoryRemoveIcon
// Dependencies: [5, 31, 27, 1348, 4142, 1849, 9103, 33, 4130, 689, 11406, 4660, 5119, 15337, 10076, 15346, 4126, 5786, 624, 15347, 7889, 4140, 15345, 15349, 15357, 1212, 2]

// Module 15348 (SearchHistoryRemoveIcon)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { SearchHistoryItemTypes } from "SearchAutocompleteSelectAnalyticsActions";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function SearchHistoryRemoveIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = importAllResult.useCallback(() => {
    const result = searchHistoryItem(outer1_2[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  const obj = { onPress: callback, accessibilityRole: "button", unstable_pressDelay: 130, style: { marginLeft: 16 }, hitSlop: { bottom: 16, left: 16, right: 16, top: 16 }, children: callback(searchContext(5119).XSmallIcon, { size: "sm", color: "interactive-text-default" }) };
  return callback(searchContext(4660).PressableHighlight, obj);
}
function SearchHistoryTextRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj = searchContext(15337);
  const onPressSearchHistoryText = obj.useOnPressSearchHistoryText({ searchContext });
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
      obj = { accessibilityRole: "button", style: tmp.tag, children: outer1_10(searchContext(tmp[16]).Text, obj) };
      obj = { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: text.text };
      return outer1_10(outer1_5, obj, text.text);
    });
  }
  const items1 = [mapped, ];
  const obj1 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: searchHistoryItem.text };
  items1[1] = callback(searchContext(4126).Text, obj1);
  obj.children = items1;
  obj.label = closure_11(View, obj);
  obj.onPress = callback;
  obj.trailing = callback(SearchHistoryRemoveIcon, { searchContext, searchHistoryItem });
  obj.iconContainerStyle = tmp.textIconContainer;
  obj.icon = callback(View, { style: tmp.iconContainer, children: callback(searchContext(5786).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" }) });
  return callback(searchContext(15346).SearchListRow, obj);
}
function SearchHistoryGroupDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let obj = searchContext(stateFromStores[18]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const onPressGroupDMItem = searchContext(stateFromStores[13]).useOnPressGroupDMItem({ searchContext });
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
    tmp9 = callback(searchHistoryItem(stateFromStores[19]), obj);
  }
  return tmp9;
}
function SearchHistoryDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let obj = searchContext(onPressDMItem[18]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getUser(searchHistoryItem.userId));
  const items1 = [searchHistoryItem.userId];
  const effect = importAllResult.useEffect(() => {
    const user = searchContext(onPressDMItem[20]).getUser(searchHistoryItem.userId);
  }, items1);
  onPressDMItem = searchContext(onPressDMItem[13]).useOnPressDMItem({ searchContext });
  const items2 = [onPressDMItem, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items2);
  useClearableSearchHistoryRowProps(searchContext, searchHistoryItem);
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { user: stateFromStores, onPress: callback, accessibilityActions: tmp7, onAccessibilityAction: tmp8, trailing: tmp6 };
    tmp9 = callback(searchHistoryItem(onPressDMItem[22]), obj);
  }
  return tmp9;
}
function SearchHistoryGuildVoiceChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let obj = searchContext(stateFromStores[18]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const onPressGuildVoiceChannel = searchContext(stateFromStores[13]).useOnPressGuildVoiceChannel({ searchContext });
  const items2 = [onPressGuildVoiceChannel, searchContext, searchHistoryItem.type];
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, voiceStates: closure_13, speakerVoiceStates: closure_13 };
    obj = { searchContext, searchHistoryItem };
    obj.trailing = callback(SearchHistoryRemoveIcon, obj);
    obj.onPress = tmp4;
    tmp5 = callback(searchHistoryItem(stateFromStores[23]), obj);
    const tmp9 = searchHistoryItem(stateFromStores[23]);
  }
  return tmp5;
}
function SearchHistoryGuildTextChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let obj = searchContext(stateFromStores[18]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const items2 = [closure_7];
  const stateFromStores1 = searchContext(stateFromStores[18]).useStateFromStores(items2, () => {
    let lastMessageIdResult = outer1_7.lastMessageId(searchHistoryItem.channelId);
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
  const obj2 = searchContext(stateFromStores[18]);
  const onPressGuildTextChannel = searchContext(stateFromStores[13]).useOnPressGuildTextChannel({ searchContext });
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
    tmp10 = callback(searchHistoryItem(stateFromStores[24]), obj);
  }
  return tmp10;
}
function useClearableSearchHistoryRowProps(searchContext, searchHistoryItem) {
  let closure_0 = searchContext;
  let closure_1 = searchHistoryItem;
  obj = {
    accessibilityActions: importAllResult.useMemo(() => {
      const obj = { name: "remove" };
      const intl = searchContext(outer1_2[25]).intl;
      obj.label = intl.string(searchContext(outer1_2[25]).t.Ov3VO7);
      const items = [obj];
      return items;
    }, []),
    onAccessibilityAction: importAllResult.useCallback((nativeEvent) => {
      if ("remove" === nativeEvent.nativeEvent.actionName) {
        const result = searchHistoryItem(outer1_2[10]).removeSearchHistoryItem(closure_0, searchHistoryItem);
        const obj = searchHistoryItem(outer1_2[10]);
      }
    }, items),
    trailing: callback(SearchHistoryRemoveIcon, obj)
  };
  items = [searchContext, searchHistoryItem];
  obj = { searchContext, searchHistoryItem };
  return obj;
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = {};
obj = { height: 48, width: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
obj.iconContainer = obj;
obj.text = { flexShrink: 1 };
obj.textContainer = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 2 };
obj.textIconContainer = { alignSelf: "flex-start" };
_createForOfIteratorHelperLoose = { paddingHorizontal: 8, paddingVertical: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", margin: 2, flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.tag = _createForOfIteratorHelperLoose;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = [];
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default memoResult;
