// Module ID: 16470
// Function ID: 16471
// Name: SearchHistoryRow
// Dependencies: [5, 19, 17, 2045, 4851, 1372, 7303, 21, 4836, 576, 11844, 5435, 5992, 16458, 11841, 16468, 4832, 6472, 563, 16469, 7626, 4849, 16467, 16471, 16484, 1115, 2]

// Module 16470 (SearchHistoryRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import UserActionCreators from "UserActionCreators" /* 7626 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11844 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let channelId, dependencyMap;

let c10;
let obj2;
let size;
let unpackModuleId;
function SearchHistoryRemoveIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = react.useCallback(() => {
    const obj = SearchPlatformActionCreatorsDefault;
    const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  let obj = { onPress: callback, accessibilityRole: "button", unstable_pressDelay: 130, style: { marginLeft: 16 }, hitSlop: { bottom: 16, left: 16, right: 16, top: 16 }, children: closure_10(searchContext(5992).XSmallIcon, { size: "sm", color: "interactive-text-default" }) };
  const PressableHighlight = searchContext(5435).PressableHighlight;
  return closure_10(PressableHighlight, obj);
}
function SearchHistoryTextRow(searchContext) {
  let items1;
  let obj5;
  let tag;
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp = closure_12();
  dependencyMap = tmp;
  let obj = searchContext(16458);
  const onPressSearchHistoryText = obj.useOnPressSearchHistoryText({ searchContext });
  const items = [onPressSearchHistoryText, searchContext, , , ];
  ({ tags: arr[2], text: arr[3], type: arr[4] } = searchHistoryItem);
  const callback = react.useCallback(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj2);
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  }, items);
  let obj2 = { style: tmp.textContainer, children: items1 };
  const tags = searchHistoryItem.tags;
  let mapped;
  const SearchListRow = searchContext(16468).SearchListRow;
  const tmp7 = closure_11;
  if (tags != null) {
    mapped = tags.map((children) => {
      let obj2;
      const obj = { accessibilityRole: "button", style: tag.tag, children: authStore(Text_Text.Text, obj2) };
      obj2 = { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: children.text };
      return authStore(View, obj, children.text);
    });
  }
  items1 = [mapped, ];
  const obj3 = { label: tmp7(View, obj2), onPress: callback, trailing: closure_10(SearchHistoryRemoveIcon, { searchContext, searchHistoryItem }), iconContainerStyle: tmp.textIconContainer, icon: closure_10(View, obj5) };
  const obj4 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: searchHistoryItem.text };
  items1[1] = closure_10(searchContext(4832).Text, obj4);
  obj5 = { style: tmp.iconContainer, children: closure_10(searchContext(6472).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" }) };
  return closure_10(SearchListRow, obj3);
}
function SearchHistoryGroupDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[18]);
  const items = [ChannelStore];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj2 = searchContext(stateFromStores[13]);
  const onPressGroupDMItem = obj2.useOnPressGroupDMItem({ searchContext });
  const items2 = [onPressGroupDMItem, searchContext, searchHistoryItem.type];
  const callback = react.useCallback((channelId) => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj2);
    onPressGroupDMItem(channelId);
  }, items2);
  const items3 = [searchContext, searchHistoryItem];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { name: "remove", label: intl.string(searchContext(stateFromStores[25]).t.Ov3VO7) };
    intl = searchContext(stateFromStores[25]).intl;
    const items = [obj];
    return items;
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const obj = searchHistoryItem(stateFromStores[10]);
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items3);
  let tmp8Result = null;
  const tmp8 = closure_10;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores, onPress: callback, accessibilityActions: memo, onAccessibilityAction: callback1, trailing: tmp9 };
    tmp8Result = tmp8(searchHistoryItem(tmp[19]), obj3);
  }
  return tmp8Result;
}
function SearchHistoryDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let onPressDMItem;
  const tmp = onPressDMItem;
  let obj = searchContext(onPressDMItem[18]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(searchHistoryItem.userId));
  const items1 = [searchHistoryItem.userId];
  const effect = react.useEffect(() => {
    const obj = UserActionCreators;
    const user = obj.getUser(searchHistoryItem.userId);
  }, items1);
  let obj2 = searchContext(onPressDMItem[13]);
  onPressDMItem = obj2.useOnPressDMItem({ searchContext });
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (searchContext) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              channelId = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj2.getOrEnsurePrivateChannel(searchContext), done: false };
              obj2 = searchHistoryItem(onPressDMItem[21]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            channelId = value;
            const obj7 = { searchContext, channelId, searchHistoryItemType: channelId.type };
            const obj6 = searchHistoryItem(onPressDMItem[14]);
            const result = obj6.trackSearchHistoryClicked(obj7);
            tmp4(searchContext, channelId);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c4 = 3;
          throw tmp8;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext, searchHistoryItem.type];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [searchContext, searchHistoryItem];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { name: "remove", label: intl.string(searchContext(stateFromStores[25]).t.Ov3VO7) };
    intl = searchContext(stateFromStores[25]).intl;
    const items = [obj];
    return items;
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const obj = searchHistoryItem(stateFromStores[10]);
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items3);
  const tmp8 = closure_10;
  let tmp8Result = null;
  if (null != stateFromStores) {
    const obj3 = { user: stateFromStores, onPress: callback, accessibilityActions: memo, onAccessibilityAction: callback1, trailing: tmp9 };
    tmp8Result = tmp8(searchHistoryItem(tmp[22]), obj3);
  }
  return tmp8Result;
}
function SearchHistoryGuildVoiceChannelRow(searchContext) {
  let obj4;
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[18]);
  const items = [ChannelStore];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj2 = searchContext(stateFromStores[13]);
  const onPressGuildVoiceChannel = obj2.useOnPressGuildVoiceChannel({ searchContext });
  const items2 = [onPressGuildVoiceChannel, searchContext, searchHistoryItem.type];
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores, voiceStates: speakerVoiceStates, speakerVoiceStates, trailing: closure_10(SearchHistoryRemoveIcon, obj4), onPress: tmp5 };
    obj4 = { searchContext, searchHistoryItem };
    const tmp9 = searchHistoryItem(tmp[23]);
    tmp6 = closure_10(tmp9, obj3);
  }
  return tmp6;
}
function SearchHistoryGuildTextChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[18]);
  let items = [ChannelStore];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj2 = searchContext(stateFromStores[18]);
  const items2 = [ReadStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let lastMessageIdResult = ReadStateStore.lastMessageId(searchHistoryItem.channelId);
    if (lastMessageIdResult == null) {
      let lastMessageId;
      if (stateFromStores != null) {
        lastMessageId = stateFromStores.lastMessageId;
      }
      lastMessageIdResult = lastMessageId;
    }
    if (lastMessageIdResult == null) {
      lastMessageIdResult = null;
    }
    return lastMessageIdResult;
  });
  const obj3 = searchContext(stateFromStores[13]);
  const onPressGuildTextChannel = obj3.useOnPressGuildTextChannel({ searchContext });
  const items3 = [onPressGuildTextChannel, searchContext, searchHistoryItem.type];
  const callback = react.useCallback((channelId) => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj2);
    onPressGuildTextChannel(channelId);
  }, items3);
  const items4 = [searchContext, searchHistoryItem];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { name: "remove", label: intl.string(searchContext(stateFromStores[25]).t.Ov3VO7) };
    intl = searchContext(stateFromStores[25]).intl;
    const items = [obj];
    return items;
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const obj = searchHistoryItem(stateFromStores[10]);
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items4);
  let tmp9Result = null;
  const tmp9 = closure_10;
  if (null != stateFromStores) {
    const obj4 = { channel: stateFromStores, lastMessageId: stateFromStores1, onPress: callback, accessibilityActions: memo, onAccessibilityAction: callback1, trailing: tmp10 };
    tmp9Result = tmp9(searchHistoryItem(tmp[24]), obj4);
  }
  return tmp9Result;
}
const View = react_native.View;
const SearchHistoryItemTypes = SearchConstants.SearchHistoryItemTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { iconContainer: size, text: { flexShrink: 1 }, textContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 2 }, textIconContainer: { alignSelf: "flex-start" }, tag: obj2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, overflow: "hidden", margin: 2, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_12 = createStyles(obj);
let closure_17 = [];
const memoResult = react.memo((searchHistoryItem) => {
  searchHistoryItem = searchHistoryItem.searchHistoryItem;
  const merged = Object.assign(searchHistoryItem, Object.assign({ searchHistoryItem: 0 }));
  const type = searchHistoryItem.type;
  if (SearchHistoryItemTypes.GROUP_DM === type) {
    const obj2 = { searchHistoryItem };
    const merged1 = Object.assign(merged);
    return authStore(SearchHistoryGroupDMRow, obj2);
  } else if (SearchHistoryItemTypes.DM === type) {
    const obj3 = { searchHistoryItem };
    const merged2 = Object.assign(merged);
    return authStore(SearchHistoryDMRow, obj3);
  } else if (SearchHistoryItemTypes.TEXT === type) {
    const obj4 = { searchHistoryItem };
    const merged3 = Object.assign(merged);
    return authStore(SearchHistoryTextRow, obj4);
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    const obj5 = { searchHistoryItem };
    const merged4 = Object.assign(merged);
    return authStore(SearchHistoryGuildTextChannelRow, obj5);
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    const obj = { searchHistoryItem };
    const merged5 = Object.assign(merged);
    return authStore(SearchHistoryGuildVoiceChannelRow, obj);
  } else {
    return null;
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default memoResult;
