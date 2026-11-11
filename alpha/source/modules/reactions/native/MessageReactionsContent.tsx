// Module ID: 11808
// Function ID: 11809
// Name: MessageReactionsContent
// Dependencies: [32, 19, 17, 5244, 7655, 5092, 5155, 8796, 5175, 1072, 21, 1652, 5866, 5243, 575, 504, 5187, 1342, 5857, 8797, 5854, 12, 7852, 6288, 5309, 8410, 7835, 1187, 1411, 10867, 1377, 7483, 8045, 11809, 1113, 11810, 5240, 5068, 7828, 11811, 5485, 1493, 5977, 5489, 11812, 2118, 7897, 11245, 5932, 11813, 5491, 5492, 1627, 8530, 5503, 5507, 510, 7223, 5201, 5856, 11814, 7781, 2]
// Exports: MessageReactionsContent, MessageReactionsEmpty

// Module 11808 (MessageReactionsContent)
import _modDef12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ColorUtils from "ColorUtils" /* 5240 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5492 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5503 */;
import BottomSheetModal from "BottomSheetModal" /* 5507 */;
import Text_Text from "Text/Text" /* 5866 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 7655 */;
import FastListDefault from "FastList" /* 7781 */;
import EmojiDefault from "Emoji" /* 7828 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8410 */;
import NoResults from "NoResults" /* 8530 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8797 */;
import useEmojiAndSource2 from "useEmojiAndSource" /* 11245 */;
import useEmojiColorPalette2 from "useEmojiColorPalette" /* 11810 */;
import SwipeableFastListDefault from "SwipeableFastList" /* 11814 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import MessageReactionsStore from "MessageReactionsStore" /* 8796 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c32, channel, dependencyMap, member, set;

let Platform;
let c9;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function useReactors(channelId) {
  let tmp3;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const obj = channelId(reactionType[15]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_16, reactionType);
    let items;
    const _Array = Array;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return from(items);
  }, items1, messageId(reactionType[17]));
  const obj2 = { reactors: stateFromStores, reactorsHasMore: tmp3 > stateFromStores.length };
  const tmp = channelId;
  const tmp2 = reactionType;
  if (reactionType === channelId(reactionType[18]).ReactionTypes.VOTE) {
    const count_details = reaction.count_details;
    let num;
    if (count_details != null) {
      num = count_details.vote;
    }
    if (num == null) {
      num = 0;
    }
    tmp3 = num;
  } else {
    tmp3 = reactionType === tmp(tmp2[18]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
  }
  return obj2;
}
function useReactorsOnScrollNative(channelId) {
  let reactors;
  let reactorsHasMore;
  let ref;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  react = undefined;
  let current;
  let closure_8;
  let closure_9;
  let obj = react;
  react = react.useRef(false);
  let id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
  current = obj.useCallback((arg0, arg1) => {
    const tmp = arg0 / arg1 > 0.75 && reactorsHasMore && !ref.current;
    if (tmp) {
      ref.current = true;
      const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
      const obj = ReactionActionCreatorsAll;
      const reactors = obj.getReactors(obj2);
      reactors.then(() => {
        ref.current = false;
      });
    }
  }, items);
  closure_8 = obj.useRef(current);
  const items1 = [current];
  const effect = obj.useEffect(() => {
    closure_8.current = current;
  }, items1);
  closure_9 = messageId(reactorsHasMore[20])(() => {
    const obj = _modDef12;
    return obj.debounce((AUTO_DISMISS, items1) => ref.current(AUTO_DISMISS, items1), 16);
  });
  return messageId(reactorsHasMore[20])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function ReactionTab(arg0) {
  let animated;
  let items2;
  let items3;
  let items4;
  let reaction;
  let selected;
  let tmp3Result;
  let useReducedMotion;
  ({ reaction, selected } = arg0);
  const tmp = closure_21();
  let burst_colors = reaction.burst_colors;
  const useEmojiColorPalette = useEmojiColorPalette2.useEmojiColorPalette;
  useEmojiColorPalette2;
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = useEmojiColorPalette(burst_colors);
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp8 = null;
  if (null != accentColor) {
    tmp8 = { color: emojiColorPalette.accentColor };
    const obj = { color: emojiColorPalette.accentColor };
  }
  let tmp9 = null;
  if (null != emojiColorPalette) {
    const obj2 = { backgroundColor: tmp3Result.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity) };
    tmp9 = obj2;
    tmp3Result = ColorUtils;
  }
  const emoji = reaction.emoji;
  const items = [AccessibilityStore];
  const tmp3Result2 = get_initialized;
  const stateFromStores = tmp3Result2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const AnimateEmoji = tmp3(5068).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj3 = { id: null, animated, size: 48 };
    ({ id: obj5.id, animated } = emoji);
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp11;
    }
    emojiURL = getEmojiURL(obj3);
  }
  const items1 = [tmp.tabContainer, , ];
  let tabContainerSelected = null;
  const tmp15 = closure_19;
  const tmp16 = React4;
  if (selected) {
    tabContainerSelected = tmp.tabContainerSelected;
  }
  items1[1] = tabContainerSelected;
  let tmp18 = null;
  if (selected) {
    tmp18 = null;
    if (reaction.burst_count > 0) {
      tmp18 = tmp9;
    }
  }
  const obj4 = { style: items1, accessible: true, accessibilityLabel: emoji.name, accessibilityState: { selected }, children: items4 };
  items1[2] = tmp18;
  const obj6 = { src: emojiURL, name: emoji.name, textEmojiStyle: items2, fastImageStyle: items3 };
  items2 = [, ];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  items3 = [, ];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  items4 = [authStore4(EmojiDefault, obj6), ];
  const items5 = [tmp.reactionCountText, , ];
  let prop = null;
  const Text = tmp3(5866).Text;
  const tmp19 = authStore4;
  if (selected) {
    prop = tmp.reactionCountTextSelected;
  }
  items5[1] = prop;
  let tmp21 = null;
  if (reaction.burst_count > 0) {
    tmp21 = tmp8;
  }
  const obj7 = { variant: "body-md/semibold", style: items5, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count };
  items5[2] = tmp21;
  items4[1] = tmp19(Text, obj7);
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  return tmp15(tmp16, obj4, name);
}
function RemoveAllButton(channelId) {
  let View;
  let _undefined;
  let c4;
  let c5;
  let intl;
  let items8;
  let items9;
  let obj5;
  let reactionSelectedIndex;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  _slicedToArray = undefined;
  react = undefined;
  let sharedValue1;
  let callback;
  let tmp = closure_21();
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let obj2 = react;
  const tmp6 = reactionSelectedIndex(messageId[39])(stateFromStores);
  [c4, c5] = _slicedToArray(react.useState(true), 2);
  const tmp7 = _slicedToArray(react.useState(true), 2);
  const obj3 = require("module_1652");
  const sharedValue = obj3.useSharedValue(64);
  const items2 = [closure_25, useReducedMotion, sharedValue, ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  const tmp9 = require("module_1652");
  items2[3] = require("timing/timing").withTiming;
  let c0;
  let c1;
  let c2;
  [tmp10, tmp11, tmp12, tmp13] = items2;
  class MessageReactionsContentTsx1 {
    constructor() {
      let maxWidth;
      const tmp = c0;
      if (tmp) {
        maxWidth = _undefined.get();
      } else {
        maxWidth = _undefined2(_undefined.get(), { duration: 200 });
      }
      return { maxWidth };
    }
  }
  const items3 = [tmp11, tmp12, tmp13];
  MessageReactionsContentTsx1.__closure = items3;
  MessageReactionsContentTsx1.__workletHash = 9045969400902;
  MessageReactionsContentTsx1.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(MessageReactionsContentTsx1);
  const tmp2Result = require("module_1652");
  sharedValue1 = tmp2Result.useSharedValue(0);
  const items4 = [closure_26, useReducedMotion, sharedValue1, ];
  const useAnimatedStyle2 = tmp2(tmp3[11]).useAnimatedStyle;
  require("module_1652");
  items4[3] = require("timing/timing").withTiming;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp17, tmp18, tmp19, tmp20] = items4;
  class MessageReactionsContentTsx2 {
    constructor() {
      let opacity;
      const tmp = c0;
      if (tmp) {
        opacity = _undefined.get();
      } else {
        opacity = _undefined2(_undefined.get(), { duration: 125 });
      }
      return { opacity, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  const items5 = [tmp18, tmp19, tmp20];
  MessageReactionsContentTsx2.__closure = items5;
  MessageReactionsContentTsx2.__workletHash = 7743525870691;
  MessageReactionsContentTsx2.__initData = tmp17;
  const items6 = [sharedValue, sharedValue1];
  const animatedStyle2 = useAnimatedStyle2(MessageReactionsContentTsx2);
  callback = obj2.useCallback(() => {
    _undefined(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items6);
  const items7 = [reactionSelectedIndex, callback];
  const effect = obj2.useEffect(() => {
    callback();
  }, items7);
  let tmp24 = null;
  if (tmp6) {
    const obj4 = {
      onPress() {
          const tmp = c4;
          if (tmp) {
            _undefined(false);
            set = sharedValue.set;
            const obj2 = useWindowDimensions;
            const result = set(obj2.getWindowDimensions().width);
            const result1 = sharedValue1.set(1);
          } else {
            const obj = ReactionActionCreatorsAll;
            obj.removeEmojiReactions(channelId, messageId, require[reactionSelectedIndex].emoji);
            callback();
          }
        },
      children: closure_19(View, obj5)
    };
    obj5 = { style: items8, children: items9 };
    items8 = [tmp.removeAllButton, animatedStyle];
    View = tmp5(tmp3[11]).View;
    const obj6 = { color: reactionSelectedIndex(messageId[14]).unsafe_rawColors.WHITE, size: "sm" };
    const TrashIcon = tmp2(tmp3[42]).TrashIcon;
    items9 = [closure_18(TrashIcon, obj6), ];
    const obj7 = { style: animatedStyle2, variant: "body-sm/semibold", color: "text-overlay-light", children: intl.string(require("intl").t["zx/e4P"]) };
    intl = tmp2(tmp3[34]).intl;
    items9[1] = closure_18(closure_20, obj7);
    tmp24 = closure_18(sharedValue1, obj4);
  }
  return tmp24;
}
function EmojiOptionsButton(channelId) {
  let canRemoveReactions;
  let intl;
  let items3;
  let reactionSelectedIndex;
  let reactions;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let flag = channelId.isEmojiPack;
  ({ reactions, reactionSelectedIndex } = channelId);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_21();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(11811)(stateFromStores);
  dependencyMap = tmp3;
  const reaction = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3, flag];
  let obj2 = {
    onPress: react.useCallback(() => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channelId, messageId, reaction, canRemoveReactions, isEmojiPack: flag };
      obj.openLazy(asyncRequire(11812, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", obj2, "replaceTopSheet");
    }, items2),
    style: tmp.emojiOptionsButton,
    children: items3
  };
  const obj3 = { variant: "body-xs/semibold", color: "text-subtle", children: intl.string(channelId(1113).t.pCaYID) };
  const Text = channelId(5866).Text;
  intl = channelId(1113).intl;
  items3 = [closure_18(Text, obj3), ];
  const obj4 = { color: messageId(575).colors.ICON_SUBTLE, size: "xs" };
  const ChevronSmallRightIcon = channelId(7897).ChevronSmallRightIcon;
  items3[1] = closure_18(ChevronSmallRightIcon, obj4);
  return closure_19(closure_7, obj2);
}
function EmojiPackReactionTabActions(arg0) {
  let tmp7;
  const emojiId = arg0.reactions[arg0.reactionSelectedIndex].emoji.id;
  const useEmojiAndSource = useEmojiAndSource2.useEmojiAndSource;
  useEmojiAndSource2;
  if (useEmojiAndSource({ emojiId, skipKnownGuildEmojiFetch: true }).sourceType === EmojiSourceDataTypes.PACK) {
    const obj2 = { isEmojiPack: true };
    const merged = Object.assign(arg0);
    tmp7 = authStore4(EmojiOptionsButton, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = authStore4(RemoveAllButton, obj);
  }
  return tmp7;
}
function ReactionTabs(setReactionSelectedIndex) {
  let items;
  let items1;
  let obj6;
  let reactionSelectedIndex;
  let reactions;
  let tmp5Result;
  let tmp = closure_21();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  let obj = reactionSelectedIndex(5932);
  const emoji = reactions[reactionSelectedIndex].emoji;
  const obj2 = { style: tmp.reactionTab, children: items };
  const isTidaMediaTakedownRegion = obj.useIsTidaMediaTakedownRegion();
  const obj4 = {
    tabs: reactions.map((reaction, index) => {
      let str = "normal-";
      const obj = { reaction, selected: index === reactionSelectedIndex };
      const tmp = authStore4;
      const tmp2 = ReactionTab;
      if (reaction.burst_count > 0) {
        str = "burst-";
      }
      let str2 = reaction.emoji.id;
      if (str2 == null) {
        str2 = "";
      }
      return tmp(tmp2, obj, "" + str + str2 + ":" + reaction.emoji.name);
    }),
    tabStyle: null,
    tabStyleActive: null,
    tabStyleSelected: null,
    tabIndexSelected: reactionSelectedIndex,
    onSelect(arg0) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      setReactionSelectedIndex(arg0);
    }
  };
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  const tmp6 = setReactionSelectedIndex(11813);
  items = [closure_18(tmp6, obj4), closure_18(setReactionSelectedIndex(8045), { outer: true }), ];
  const obj5 = { style: tmp.removeButtonContainer, children: items1 };
  const obj7 = { style: tmp.emojiTextIdentifier, variant: "body-sm/medium", color: "text-default", children: obj6.getReactionEmojiName(reactions[reactionSelectedIndex].emoji) };
  const Text = reactionSelectedIndex(5866).Text;
  obj6 = reactionSelectedIndex(5187);
  items1 = [closure_18(Text, obj7), ];
  if (isTidaMediaTakedownRegion) {
    const obj8 = {};
    const merged = Object.assign(setReactionSelectedIndex);
    tmp5Result = tmp5(EmojiOptionsButton, obj8);
  } else {
    const obj14 = {};
    const merged1 = Object.assign(setReactionSelectedIndex);
    let name = emoji.id;
    const tmp7 = EmojiPackReactionTabActions;
    if (name == null) {
      name = emoji.name;
    }
    tmp5Result = tmp5(tmp7, obj14, name);
  }
  items1[1] = tmp5Result;
  items[2] = closure_19(closure_9, obj5);
  return closure_19(closure_9, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Platform, Pressable: metroImportDefault, StyleSheet: metroImportAll, View: c9 } = react_native);
const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
({ DEFAULT_NUM_REACTION_USERS: closure_16, Permissions: closure_17 } = Constants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = module_1652.createAnimatedComponent(Text_Text.Text);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, containerEmpty: obj2, listRow: obj3, tabContainer: obj4, tabContainerSelected: obj5, tab: { padding: 0, marginHorizontal: 8, marginBottom: 8 }, tabSelected: { borderBottomColor: "transparent" }, tabActive: obj6, reactionTab: { display: "flex", flexDirection: "column" }, removeButtonContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, emojiOptionsButton: obj7, removeAllButton: obj8, reactionCountText: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, reactionCountTextSelected: { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }, emoji: { marginRight: 8 }, emojiText: { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, emojiImage: { resizeMode: "contain", width: 24, height: 24 }, emojiTextIdentifier: { padding: 16 }, avatar: { marginRight: 10 }, buttonRow: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }, loadingSpinner: { height: 48, padding: 6 } };
obj2 = { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
obj5 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj6 = { borderRadius: nativeDefault.radii.sm };
obj7 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj8 = { backgroundColor: nativeDefault.colors.STATUS_DANGER, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
({ color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
({ lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
let closure_21 = createStyles(obj);
let closure_25 = { code: "(function MessageReactionsContentTsx1(){let[useReducedMotion,buttonWidth,withTiming]=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};})" };
let closure_26 = { code: "(function MessageReactionsContentTsx2(){let[useReducedMotion,textOpacity,withTiming]=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};})" };
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let Storage = Storage2.Storage;
let closure_32 = Storage.get("MessageReactionsContent_SwipableBounced", false);
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export function MessageReactionsEmpty() {
  let BottomSheetView;
  let RefreshEmptyState;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  const tmp = closure_21();
  const tmp2 = useSafeAreaInsetsDefault();
  const obj = NoResults;
  const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: authStore4(BottomSheetView, obj3) };
  const noResultsSource = obj.useNoResultsSource();
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { style: tmp.containerEmpty, children: authStore4(RefreshEmptyState, obj4) };
  BottomSheetView = BottomSheetModal.BottomSheetView;
  obj4 = { source: noResultsSource, title: intl.string(intl3.t.HmPOrp), body: intl2.string(intl3.t["pTJ5J/"]) };
  RefreshEmptyState = native.RefreshEmptyState;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return authStore4(BottomSheet, obj2);
}
export function MessageReactionsContent(channelId) {
  let NORMAL;
  let disableManage;
  let intl;
  let isSelectedBurst;
  let items4;
  let items5;
  let items6;
  let items7;
  let messageId;
  let obj5;
  let reactions;
  let reactors;
  let reactorsHasMore;
  let tmp11;
  let tmp28Result;
  let tmp28Result3;
  let tmp28Result4;
  let tmp9;
  channelId = channelId.channelId;
  ({ messageId, reactions, isSelectedBurst, disableManage } = channelId);
  const emoji = channelId.emoji;
  if (disableManage === undefined) {
    disableManage = false;
  }
  let flag = channelId.disableTabs;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_21;
  isSelectedBurst = undefined;
  let tmp2 = closure_21();
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let obj = react;
  let tmp3 = _slicedToArray(react.useState(() => {
    if (null == emoji) {
      return 0;
    } else {
      const findIndexResult = reactions.findIndex((emoji) => {
        let tmp4;
        const obj = reactions(closure_2_3[16]);
        const emojiEqualsResult = obj.emojiEquals(emoji.emoji, emoji);
        let num = emoji.burst_count;
        if (num == null) {
          num = 0;
        }
        let tmp2 = num > 0;
        const tmp3 = isSelectedBurst;
        if (tmp3) {
          if (tmp2) {
            tmp2 = emojiEqualsResult;
          }
          tmp4 = tmp2;
        } else {
          tmp4 = !tmp2 && emojiEqualsResult;
        }
        return tmp4;
      });
      let num = 0;
      if (findIndexResult >= 0) {
        num = findIndexResult;
      }
      return num;
    }
  }), 2);
  let tmp4 = tmp3[1];
  const bound = Math.min(tmp3[0], reactions.length - 1);
  if (null != reactions[bound].me_vote) {
    NORMAL = channelId(5857).ReactionTypes.VOTE;
    tmp9 = channelId;
    let tmp10 = dependencyMap;
    tmp11 = channelId;
    let tmp12 = dependencyMap;
  } else {
    let num = 0;
    if (reactions[bound].burst_count > 0) {
      let tmp13 = channelId;
      const tmp14 = dependencyMap;
      NORMAL = channelId(5857).ReactionTypes.BURST;
      tmp9 = channelId;
      tmp10 = dependencyMap;
      tmp11 = channelId;
      tmp12 = dependencyMap;
    } else {
      NORMAL = channelId(5857).ReactionTypes.NORMAL;
      tmp9 = channelId;
      tmp10 = dependencyMap;
      tmp11 = channelId;
      tmp12 = dependencyMap;
    }
  }
  ({ reactors, reactorsHasMore } = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL }));
  useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL });
  let items = [ChannelStore];
  const items1 = [channelId];
  const tmp11Result = tmp11(504);
  const stateFromStores = tmp11Result.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp11Result3 = tmp11(7223);
  const isActiveChannelOrUnarchivableThread = tmp11Result3.useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const items2 = [PermissionStore];
  const items3 = [channelId];
  const tmp21 = useSafeAreaInsetsDefault();
  const tmp9Result = tmp9(504);
  const tmp22 = tmp9Result.useStateFromStores(items2, () => {
    const obj = { channelId };
    return PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, obj);
  }, items3) && !disableManage && isActiveChannelOrUnarchivableThread;
  let name = tmp6.emoji.id;
  if (name == null) {
    name = tmp6.emoji.name;
  }
  let obj2 = {
    accessibilityLabel: intl.string(tmp11(1113).t.gHp0C4),
    footerSize: 48,
    insetBottom: tmp21.bottom,
    onScroll: useReactorsOnScrollNative({ channelId, messageId, reactionSelected: tmp6, reactors, reactorsHasMore, reactionType: NORMAL }),
    renderFooter: obj.useCallback(() => {
      let tmp3;
      const tmp = reactorsHasMore;
      if (tmp) {
        const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
        tmp3 = closure_2_18(closure_2_6, obj);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }, items4),
    renderItem: obj.useCallback((arg0, arg1) => {
      let NORMAL;
      let emoji;
      let guildMemberAvatarSource;
      let items;
      let openProfile;
      let tmp10;
      let tmp14Result;
      let user;
      user = user[arg1];
      const id = user.id;
      const diff = user.length - 1;
      channel = channel.getChannel(NORMAL);
      let guildId = null;
      const tmp2 = NORMAL;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      const obj3 = messageId(burst_count[23]);
      let nickname = obj3.getNickname(guildId, tmp2, user);
      if (nickname == null) {
        const tmp4Result = messageId(burst_count[24]);
        nickname = tmp4Result.getGlobalName(user);
      }
      member = null;
      if (null != guildId) {
        member = member.getMember(guildId, id);
      }
      if (burst_count.burst_count > 0) {
        NORMAL = reactors(tmp5[18]).ReactionTypes.BURST;
        tmp10 = reactors;
      } else {
        NORMAL = reactors(tmp5[18]).ReactionTypes.NORMAL;
        tmp10 = reactors;
      }
      const obj2 = { style: closure_5.listRow, children: items };
      const obj4 = { style: closure_5.avatar, size: tmp10(burst_count[27]).AvatarSizes.SMALL, source: guildMemberAvatarSource };
      const tmp4Result3 = messageId(burst_count[26]);
      const Avatar = tmp10(tmp5[27]).Avatar;
      const avatarSource = user.getAvatarSource(guildId);
      guildMemberAvatarSource = avatarSource;
      const tmp12 = closure_1_19;
      const tmp13 = closure_1_9;
      if (null != guildId) {
        let avatar;
        if (member != null) {
          avatar = member.avatar;
        }
        guildMemberAvatarSource = avatarSource;
        if (null != avatar) {
          const tmp4Result4 = messageId(burst_count[28]);
          guildMemberAvatarSource = tmp4Result4.getGuildMemberAvatarSource(member, user);
        }
      }
      const obj5 = { leading: closure_1_18(Avatar, obj4), label: closure_1_18(messageId(burst_count[29]), { user, nick: nickname }), trailing: tmp14Result, onPress: openProfile, onLongPress: openProfile };
      tmp14Result = null;
      if (closure_4) {
        tmp14Result = null;
        const tmp10Result = tmp10(burst_count[30]);
        if (tmp10Result.isAndroid()) {
          const obj6 = {
            onPress() {
                  const tmp = channelId(dependencyMap[19]);
                  obj = { channelId, messageId, emoji: emoji.emoji, location: channelId(dependencyMap[19]).ReactionLocations.MESSAGE, userId: obj.id, options: { burst: NORMAL === channelId(dependencyMap[18]).ReactionTypes.BURST } };
                  const removeReaction = tmp.removeReaction;
                  ({ burst: NORMAL === channelId(dependencyMap[18]).ReactionTypes.BURST });
                  return removeReaction(obj);
                },
            children: closure_1_18(tmp10(burst_count[31]).XSmallIcon, {})
          };
          tmp14Result = tmp14(closure_1_7, obj6);
        }
      }
      openProfile = function openProfile() {
        let localUser;
        localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(localUser, "stack");
      };
      items = [closure_1_18(tmp4Result3, obj5), ];
      let tmp14Result2 = null;
      if (arg1 !== diff) {
        tmp14Result2 = tmp14(tmp4(tmp5[32]), {});
      }
      items[1] = tmp14Result2;
      return tmp12(tmp13, obj2);
    }, items5),
    renderQuickActions: obj.useCallback((arg0, arg1) => {
      let emoji;
      let intl;
      let obj2;
      let tmp5;
      const id = reactors[arg1];
      if (burst_count.burst_count > 0) {
        let NORMAL = channelId(reactors[18]).ReactionTypes.BURST;
      } else {
        let tmp = channelId;
        NORMAL = channelId(reactors[18]).ReactionTypes.NORMAL;
      }
      let obj = { style: buttonRow.buttonRow, children: closure_1_18(tmp5, obj2) };
      obj2 = {
        title: intl.string(channelId(reactors[34]).t.N86XcP),
        IconComponent: channelId(reactors[31]).XSmallIcon,
        color: messageId(reactors[14]).unsafe_rawColors.RED_400,
        onPress() {
          const tmp = channelId(dependencyMap[19]);
          const removeReaction = tmp.removeReaction;
          const obj = { channelId, messageId, emoji: emoji.emoji, location: channelId(dependencyMap[19]).ReactionLocations.MESSAGE, userId: id.id, options: { burst: NORMAL === channelId(dependencyMap[18]).ReactionTypes.BURST } };
          ({ burst: NORMAL === channelId(dependencyMap[18]).ReactionTypes.BURST });
          return removeReaction(obj);
        },
        height: 48
      };
      tmp5 = messageId(reactors[33]);
      intl = channelId(reactors[34]).intl;
      return closure_1_18(closure_1_9, obj);
    }, items6),
    itemSize: 48,
    sections: items7,
    style: tmp2.container
  };
  intl = tmp11(1113).intl;
  const tmpResult = tmp();
  items4 = [reactors, reactorsHasMore, tmpResult];
  let closure_3 = tmp6;
  const tmpResult3 = tmp();
  let closure_5 = tmpResult3;
  const analyticsLocations = tmp20(7852)().analyticsLocations;
  items5 = [reactors, channelId, tmp22, messageId, tmp6, tmpResult3, analyticsLocations];
  let closure_2 = tmp6;
  const tmpResult4 = tmp();
  let closure_4 = tmpResult4;
  items6 = [reactors, channelId, messageId, tmp6, tmpResult4];
  items7 = [reactors.length];
  const callback = obj.useCallback(() => {
    c32 = true;
    const Storage = channelId(dependencyMap[56]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp11Result4 = tmp11(1377);
  let obj3 = { scrollable: true, backdropOpacity: tmp11(5201).BACKDROP_OPACITY, backdropChildren: tmp28Result, header: tmp28Result3, children: tmp28Result4 };
  const tmp27 = tmp11Result4.isIOS() && tmp22;
  const BottomSheet = tmp11(5503).BottomSheet;
  tmp28Result = null;
  if (NORMAL === tmp9(5857).ReactionTypes.BURST) {
    let obj4 = { style: absoluteFill.absoluteFill, pointerEvents: "none", children: closure_18(tmp20(5856), obj5) };
    obj5 = { emoji: tmp6.emoji, reactionType: NORMAL, messageId, channelId };
    tmp28Result = tmp28(closure_9, obj4);
  }
  tmp28Result3 = null;
  if (true !== flag) {
    let obj6 = { reactions, reactionSelectedIndex: bound, setReactionSelectedIndex: tmp4, messageId, channelId };
    tmp28Result3 = tmp28(ReactionTabs, obj6);
  }
  if (tmp27) {
    const obj7 = { inActionSheet: true, bounceFirstRowOnMount: !c32, onBounceSwipable: callback };
    const tmp20Result = SwipeableFastListDefault;
    const merged = Object.assign(obj2);
    tmp28Result4 = tmp28(tmp20Result, obj7, name);
  } else {
    const obj8 = { inActionSheet: true };
    const tmp20Result2 = FastListDefault;
    const merged1 = Object.assign(obj2);
    tmp28Result4 = tmp28(tmp20Result2, obj8, name);
  }
  return closure_18(BottomSheet, obj3);
}
