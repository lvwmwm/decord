// Module ID: 10826
// Function ID: 10827
// Name: MessageReactionsContent
// Dependencies: [32, 19, 17, 4825, 2045, 2108, 7181, 4469, 1074, 21, 4566, 4832, 4836, 576, 504, 4481, 1331, 7182, 7183, 5910, 12, 6583, 10827, 4988, 4678, 7624, 6558, 1177, 1397, 9094, 1364, 5992, 8059, 10828, 1115, 10829, 4683, 2021, 6551, 10830, 4837, 1479, 4790, 4800, 10831, 1981, 6630, 6609, 10832, 4801, 4802, 1613, 7678, 6571, 6045, 510, 6687, 7203, 7244, 10833, 6493, 2]
// Exports: MessageReactionsContent, MessageReactionsEmpty

// Module 10826 (MessageReactionsContent)
import _modDef12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import useWindowDimensions from "useWindowDimensions" /* 1479 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import FastListDefault from "FastList" /* 6493 */;
import EmojiDefault from "Emoji" /* 6551 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 7183 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import NoResults from "NoResults" /* 7678 */;
import ReactionToProfileExperimentDefault from "ReactionToProfileExperiment" /* 10827 */;
import useEmojiColorPalette2 from "useEmojiColorPalette" /* 10829 */;
import SwipeableFastListDefault from "SwipeableFastList" /* 10833 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import MessageReactionsStore from "MessageReactionsStore" /* 7181 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, c30, channel, dependencyMap, member, set;

let Platform;
let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function useReactors(channelId) {
  let tmp3;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const obj = channelId(reactionType[14]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_15, reactionType);
    let items;
    const _Array = Array;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return from(items);
  }, items1, messageId(reactionType[16]));
  const obj2 = { reactors: stateFromStores, reactorsHasMore: tmp3 > stateFromStores.length };
  const tmp = channelId;
  const tmp2 = reactionType;
  if (reactionType === channelId(reactionType[17]).ReactionTypes.VOTE) {
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
    tmp3 = reactionType === tmp(tmp2[17]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
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
  closure_9 = messageId(reactorsHasMore[19])(() => {
    const obj = _modDef12;
    return obj.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16);
  });
  return messageId(reactorsHasMore[19])(() => (nativeEvent) => {
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
  const tmp = closure_20();
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
  const AnimateEmoji = tmp3(2021).AnimateEmoji;
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
  const tmp15 = authStore4;
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
  items4 = [closure_17(EmojiDefault, obj6), ];
  const items5 = [tmp.reactionCountText, , ];
  let prop = null;
  const Text = tmp3(4832).Text;
  const tmp19 = closure_17;
  if (selected) {
    prop = tmp.reactionCountTextSelected;
  }
  items5[1] = prop;
  let tmp21 = null;
  if (reaction.burst_count > 0) {
    tmp21 = tmp8;
  }
  const obj7 = { variant: "text-md/bold", style: items5, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count };
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
  let c5;
  let c6;
  let intl;
  let items4;
  let items5;
  let obj9;
  let reactionSelectedIndex;
  let require;
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  react = undefined;
  c6 = undefined;
  let sharedValue1;
  let callback;
  let tmp = closure_20();
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  const tmp6 = reactionSelectedIndex(messageId[39])(stateFromStores);
  [c5, c6] = useReducedMotion(react.useState(true), 2);
  const tmp7 = useReducedMotion(react.useState(true), 2);
  let obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(64);
  const obj3 = require("ReanimatedRexport");
  class S {
    constructor() {
      let withTimingResult;
      const tmp = useReducedMotion;
      if (tmp) {
        withTimingResult = sharedValue.get();
      } else {
        const obj = timing;
        withTimingResult = obj.withTiming(sharedValue.get(), { duration: 200 });
      }
      return { maxWidth: withTimingResult };
    }
  }
  S.__closure = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  S.__workletHash = 16499689496895;
  S.__initData = __initData;
  ({ useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming });
  const animatedStyle = obj3.useAnimatedStyle(S);
  const obj5 = require("ReanimatedRexport");
  sharedValue1 = obj5.useSharedValue(0);
  const obj6 = require("ReanimatedRexport");
  class T {
    constructor() {
      let withTimingResult;
      const tmp = useReducedMotion;
      if (tmp) {
        withTimingResult = sharedValue1.get();
      } else {
        const obj = timing;
        withTimingResult = obj.withTiming(sharedValue1.get(), { duration: 125 });
      }
      return { opacity: withTimingResult, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  T.__closure = { useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming };
  T.__workletHash = 8698187840986;
  T.__initData = __initData2;
  const items2 = [sharedValue, sharedValue1];
  ({ useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming });
  const animatedStyle1 = obj6.useAnimatedStyle(T);
  callback = react.useCallback(() => {
    _undefined(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  const items3 = [reactionSelectedIndex, callback];
  const effect = react.useEffect(() => {
    callback();
  }, items3);
  let tmp14 = null;
  if (tmp6) {
    const obj8 = {
      onPress() {
          const tmp = c5;
          if (tmp) {
            _undefined(false);
            set = sharedValue.set;
            const obj2 = useWindowDimensions;
            const result = set(obj2.getWindowDimensions().width);
            const result1 = sharedValue1.set(1);
          } else {
            const obj = ReactionActionCreatorsAll;
            obj.removeEmojiReactions(channelId, messageId, _require[reactionSelectedIndex].emoji);
            callback();
          }
        },
      children: closure_18(View, obj9)
    };
    obj9 = { style: items4, children: items5 };
    items4 = [tmp.removeAllButton, animatedStyle];
    View = tmp5(tmp3[10]).View;
    const obj10 = { color: reactionSelectedIndex(messageId[13]).unsafe_rawColors.WHITE, size: "sm" };
    const TrashIcon = tmp2(tmp3[42]).TrashIcon;
    items5 = [closure_17(TrashIcon, obj10), ];
    const obj11 = { style: animatedStyle1, variant: "text-sm/semibold", color: "text-overlay-light", children: intl.string(require("intl").t["zx/e4P"]) };
    intl = tmp2(tmp3[34]).intl;
    items5[1] = closure_17(closure_19, obj11);
    tmp14 = closure_17(sharedValue, obj8);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  let intl;
  let items3;
  let reaction;
  let reactionSelectedIndex;
  let reactions;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  const tmp = closure_20();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(10830)(stateFromStores);
  const canRemoveReactions = tmp3;
  dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  let obj2 = {
    onPress: react.useCallback(() => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channelId, messageId, reaction, canRemoveReactions };
      obj.openLazy(asyncRequire(10831, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", obj2, "replaceTopSheet");
    }, items2),
    style: tmp.emojiOptionsButton,
    children: items3
  };
  const obj3 = { variant: "text-xs/semibold", color: "text-subtle", children: intl.string(channelId(1115).t.pCaYID) };
  const Text = channelId(4832).Text;
  intl = channelId(1115).intl;
  items3 = [closure_17(Text, obj3), ];
  const obj4 = { color: messageId(576).colors.ICON_SUBTLE, size: "xs" };
  const ChevronSmallRightIcon = channelId(6630).ChevronSmallRightIcon;
  items3[1] = closure_17(ChevronSmallRightIcon, obj4);
  return closure_18(closure_7, obj2);
}
function ReactionTabs(setReactionSelectedIndex) {
  let items;
  let items1;
  let obj6;
  let reactionSelectedIndex;
  let reactions;
  let tmp = closure_20();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  let obj = setReactionSelectedIndex(6609);
  let tmp2 = closure_18;
  const obj2 = { style: tmp.reactionTab, children: items };
  const tidaWebformEnabled = obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const obj4 = {
    tabs: reactions.map((reaction, index) => {
      let str = reaction.emoji.id;
      const obj = { reaction, selected: index === reactionSelectedIndex };
      const tmp = closure_17;
      const tmp2 = ReactionTab;
      if (str == null) {
        str = "";
      }
      return tmp(tmp2, obj, "" + str + ":" + reaction.emoji.name);
    }),
    tabStyle: null,
    tabStyleActive: null,
    tabStyleSelected: null,
    tabIndexSelected: reactionSelectedIndex,
    onSelect(arg0) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      setReactionSelectedIndex(arg0);
    },
    initialNumTabsToRender: reactionSelectedIndex(4481).MAX_REACTIONS
  };
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  const tmp5 = setReactionSelectedIndex(10832);
  items = [closure_17(tmp5, obj4), closure_17(setReactionSelectedIndex(8059), { outer: true }), ];
  const obj5 = { style: tmp.removeButtonContainer, children: items1 };
  const obj7 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: obj6.getReactionEmojiName(reactions[reactionSelectedIndex].emoji) };
  const Text = reactionSelectedIndex(4832).Text;
  obj6 = reactionSelectedIndex(4481);
  items1 = [closure_17(Text, obj7), ];
  const obj12 = {};
  const tmp6 = tidaWebformEnabled ? EmojiOptionsButton : RemoveAllButton;
  const merged = Object.assign(setReactionSelectedIndex);
  items1[1] = closure_17(tmp6, obj12);
  items[2] = tmp2(closure_9, obj5);
  return tmp2(closure_9, obj2);
}
let react = react_mod;
({ ActivityIndicator: metroRequire, Platform, Pressable: metroImportDefault, StyleSheet: metroImportAll, View: c9 } = react_native);
({ DEFAULT_NUM_REACTION_USERS: closure_15, Permissions: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, containerEmpty: obj2, listRow: obj3, tabContainer: obj4, tabContainerSelected: obj5, tab: { padding: 0, marginHorizontal: 8, marginBottom: 8 }, tabSelected: { borderBottomColor: "transparent" }, tabActive: obj6, reactionTab: { display: "flex", flexDirection: "column" }, removeButtonContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, emojiOptionsButton: obj7, removeAllButton: obj8, reactionCountText: obj9, reactionCountTextSelected: obj10, emoji: { marginRight: 8 }, emojiText: obj11, emojiImage: { resizeMode: "contain", width: 24, height: 24 }, emojiTextIdentifier: { padding: 16 }, avatar: { marginRight: 10 }, buttonRow: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }, loadingSpinner: { height: 48, padding: 6 } };
obj2 = { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
obj5 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj6 = { borderRadius: nativeDefault.radii.sm };
obj7 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj8 = { backgroundColor: nativeDefault.colors.STATUS_DANGER, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj11 = { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_20 = createStyles(obj);
const __initData = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
const __initData2 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let Storage = Storage2.Storage;
let closure_30 = Storage.get("MessageReactionsContent_SwipableBounced", false);
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export const MessageReactionsEmpty = function MessageReactionsEmpty() {
  let BottomSheetView;
  let RefreshEmptyState;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  const tmp = closure_20();
  const tmp2 = useSafeAreaInsetsDefault();
  const obj = NoResults;
  const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: closure_17(BottomSheetView, obj3) };
  const noResultsSource = obj.useNoResultsSource();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { style: tmp.containerEmpty, children: closure_17(RefreshEmptyState, obj4) };
  BottomSheetView = BottomSheetModal.BottomSheetView;
  obj4 = { source: noResultsSource, title: intl.string(intl3.t.HmPOrp), body: intl2.string(intl3.t["pTJ5J/"]) };
  RefreshEmptyState = native.RefreshEmptyState;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return closure_17(BottomSheet, obj2);
};
export const MessageReactionsContent = function MessageReactionsContent(channelId) {
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
  let tmp = closure_20;
  isSelectedBurst = undefined;
  let tmp2 = closure_20();
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
        const obj = reactions(closure_2_3[15]);
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
    NORMAL = channelId(7182).ReactionTypes.VOTE;
    tmp9 = channelId;
    let tmp10 = dependencyMap;
    tmp11 = channelId;
    let tmp12 = dependencyMap;
  } else {
    let num = 0;
    if (reactions[bound].burst_count > 0) {
      let tmp13 = channelId;
      const tmp14 = dependencyMap;
      NORMAL = channelId(7182).ReactionTypes.BURST;
      tmp9 = channelId;
      tmp10 = dependencyMap;
      tmp11 = channelId;
      tmp12 = dependencyMap;
    } else {
      NORMAL = channelId(7182).ReactionTypes.NORMAL;
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
  const tmp11Result3 = tmp11(6687);
  const isActiveChannelOrUnarchivableThread = tmp11Result3.useIsActiveChannelOrUnarchivableThread(stateFromStores);
  let tmp21 = useSafeAreaInsetsDefault();
  const items2 = [PermissionStore];
  const items3 = [channelId];
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
    accessibilityLabel: intl.string(tmp11(1115).t.gHp0C4),
    footerSize: 48,
    insetBottom: tmp21.bottom,
    onScroll: useReactorsOnScrollNative({ channelId, messageId, reactionSelected: tmp6, reactors, reactorsHasMore, reactionType: NORMAL }),
    renderFooter: obj.useCallback(() => {
      let tmp3;
      const tmp = reactorsHasMore;
      if (tmp) {
        const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
        tmp3 = closure_2_17(closure_2_6, obj);
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
      let tmp21;
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
        NORMAL = reactors(tmp5[17]).ReactionTypes.BURST;
        tmp10 = reactors;
      } else {
        NORMAL = reactors(tmp5[17]).ReactionTypes.NORMAL;
        tmp10 = reactors;
      }
      const obj2 = { style: closure_5.listRow, children: items };
      const obj4 = { style: closure_5.avatar, size: tmp10(burst_count[27]).AvatarSizes.SMALL, source: guildMemberAvatarSource };
      const tmp4Result3 = messageId(burst_count[26]);
      const Avatar = tmp10(tmp5[27]).Avatar;
      const avatarSource = user.getAvatarSource(guildId);
      guildMemberAvatarSource = avatarSource;
      const tmp12 = closure_1_18;
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
      const obj5 = { leading: closure_1_17(Avatar, obj4), label: closure_1_17(messageId(burst_count[29]), { user, nick: nickname }), trailing: tmp14Result, onPress: tmp21, onLongPress: openProfile };
      tmp14Result = null;
      if (closure_4) {
        tmp14Result = null;
        const tmp10Result = tmp10(burst_count[30]);
        if (tmp10Result.isAndroid()) {
          const obj6 = {
            onPress() {
                  const tmp = channelId(dependencyMap[18]);
                  obj = { channelId, messageId, emoji: emoji.emoji, location: channelId(dependencyMap[18]).ReactionLocations.MESSAGE, userId: obj.id, options: { burst: NORMAL === channelId(dependencyMap[17]).ReactionTypes.BURST } };
                  const removeReaction = tmp.removeReaction;
                  ({ burst: NORMAL === channelId(dependencyMap[17]).ReactionTypes.BURST });
                  return removeReaction(obj);
                },
            children: closure_1_17(tmp10(burst_count[31]).XSmallIcon, {})
          };
          tmp14Result = tmp14(reactionToProfileEnabled, obj6);
        }
      }
      openProfile = function openProfile() {
        let localUser;
        localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(localUser, "stack");
      };
      tmp21 = undefined;
      if (reactionToProfileEnabled) {
        tmp21 = openProfile;
      }
      items = [closure_1_17(tmp4Result3, obj5), ];
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
        let NORMAL = channelId(reactors[17]).ReactionTypes.BURST;
      } else {
        let tmp = channelId;
        NORMAL = channelId(reactors[17]).ReactionTypes.NORMAL;
      }
      let obj = { style: buttonRow.buttonRow, children: closure_1_17(tmp5, obj2) };
      obj2 = {
        title: intl.string(channelId(reactors[34]).t.N86XcP),
        IconComponent: channelId(reactors[31]).XSmallIcon,
        color: messageId(reactors[13]).unsafe_rawColors.RED_400,
        onPress() {
          const tmp = channelId(dependencyMap[18]);
          const removeReaction = tmp.removeReaction;
          const obj = { channelId, messageId, emoji: emoji.emoji, location: channelId(dependencyMap[18]).ReactionLocations.MESSAGE, userId: id.id, options: { burst: NORMAL === channelId(dependencyMap[17]).ReactionTypes.BURST } };
          ({ burst: NORMAL === channelId(dependencyMap[17]).ReactionTypes.BURST });
          return removeReaction(obj);
        },
        height: 48
      };
      tmp5 = messageId(reactors[33]);
      intl = channelId(reactors[34]).intl;
      return closure_1_17(closure_1_9, obj);
    }, items6),
    itemSize: 48,
    sections: items7,
    style: tmp2.container
  };
  intl = tmp11(1115).intl;
  const tmpResult = tmp();
  items4 = [reactors, reactorsHasMore, tmpResult];
  let closure_3 = tmp6;
  const tmpResult3 = tmp();
  let closure_5 = tmpResult3;
  const analyticsLocations = tmp20(6583)().analyticsLocations;
  const tmp20Result = ReactionToProfileExperimentDefault;
  const reactionToProfileEnabled = tmp20Result.useConfig({ location: "MessageReactionsContent" }).reactionToProfileEnabled;
  items5 = [reactors, channelId, tmp22, messageId, tmp6, tmpResult3, analyticsLocations, reactionToProfileEnabled];
  let closure_2 = tmp6;
  const tmpResult4 = tmp();
  let closure_4 = tmpResult4;
  items6 = [reactors, channelId, messageId, tmp6, tmpResult4];
  items7 = [reactors.length];
  const callback = obj.useCallback(() => {
    c30 = true;
    const Storage = channelId(dependencyMap[55]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp11Result4 = tmp11(1364);
  let obj3 = { scrollable: true, backdropOpacity: tmp11(7203).BACKDROP_OPACITY, backdropChildren: tmp28Result, header: tmp28Result3, children: tmp28Result4 };
  const tmp27 = tmp11Result4.isIOS() && tmp22;
  BottomSheet = tmp11(6571).BottomSheet;
  tmp28Result = null;
  if (NORMAL === tmp11(7182).ReactionTypes.BURST) {
    let obj4 = { style: closure_8.absoluteFill, pointerEvents: "none", children: closure_17(tmp20(7244), obj5) };
    obj5 = { emoji: tmp6.emoji, reactionType: NORMAL, messageId, channelId };
    tmp28Result = tmp28(closure_9, obj4);
  }
  tmp28Result3 = null;
  if (true !== flag) {
    let obj6 = { reactions, reactionSelectedIndex: bound, setReactionSelectedIndex: tmp4, messageId, channelId };
    tmp28Result3 = tmp28(ReactionTabs, obj6);
  }
  if (tmp27) {
    const obj7 = { inActionSheet: true, bounceFirstRowOnMount: !c30, onBounceSwipable: callback };
    const tmp20Result3 = SwipeableFastListDefault;
    const merged = Object.assign(obj2);
    tmp28Result4 = tmp28(tmp20Result3, obj7, name);
  } else {
    const obj8 = { inActionSheet: true };
    const tmp20Result4 = FastListDefault;
    const merged1 = Object.assign(obj2);
    tmp28Result4 = tmp28(tmp20Result4, obj8, name);
  }
  return closure_17(BottomSheet, obj3);
};
