// Module ID: 11773
// Function ID: 11774
// Name: DoubleTapToReactChatInputBanner
// Dependencies: [32, 19, 17, 4825, 2042, 1375, 21, 4836, 576, 1364, 563, 6551, 1397, 4832, 1115, 11774, 5435, 5992, 8230, 1249, 4566, 4837, 1177, 4800, 11870, 1981, 7720, 5299, 8370, 2021, 7413, 7410, 10088, 2029, 2]
// Exports: DoubleTapToReactChatInputBanner

// Module 11773 (DoubleTapToReactChatInputBanner)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import EmojiDefault from "Emoji" /* 6551 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7413 */;
import _mod11774 from "module_11774" /* 11774 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let num2;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function DoubleTapToReactChatInputBannerInner(emoji) {
  let animated;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let str;
  let url;
  let useReducedMotion;
  emoji = emoji.emoji;
  const handleDismissBanner = emoji.handleDismissBanner;
  const tmp = closure_13();
  let obj = useStateFromStores;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = { style: tmp.emoji, fastImageStyle: tmp.emoji, textEmojiStyle: tmp.textEmoji, name: str, src: url };
  str = "";
  const obj2 = { style: tmp.container, children: items2 };
  const obj3 = { style: tmp.emojiContainer, children: items1 };
  const tmp9 = EmojiDefault;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  if (null != emoji.id) {
    const obj5 = { id: emoji.id, animated, size: EMOJI_URL_BASE_SIZE };
    animated = !stateFromStores;
    const getEmojiURL = tmp8(1397).getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    url = getEmojiURL(obj5);
  } else {
    url = emoji.url;
  }
  items1 = [React4(tmp9, obj4), React4(Text_Text.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" })];
  items2 = [authStore(View, obj3), , ];
  const obj6 = { style: tmp.text, children: items4 };
  const obj7 = { style: tmp.header, children: items3 };
  const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["6RUX7d"]) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items3 = [React4(Text, obj8), React4(_mod11774.NewBadge, {})];
  items4 = [authStore(View, obj7), ];
  const obj9 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(intl4.t["5/l2rR"], obj10) };
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  obj10 = {
    emojiName: emoji.name,
    emojiNameHook(children, arg1) {
      const obj = { variant: "text-xs/bold", color: "text-strong", children };
      return closure_1_9(Text_Text.Text, obj, arg1);
    },
    tapHereHook(children, arg1) {
      const obj = { variant: "text-xs/medium", color: "text-brand", children };
      return closure_1_9(Text_Text.Text, obj, arg1);
    }
  };
  items4[1] = React4(Text2, obj9);
  items2[1] = authStore(View, obj6);
  const obj11 = { hitSlop: 8, accessibilityRole: "button", accessibilityLabel: intl3.string(intl4.t.cpT0Cq), onPress: handleDismissBanner, style: tmp.closeButton, children: React4(XSmallIcon.XSmallIcon, { size: "sm", color: "icon-subtle" }) };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  intl3 = tmp2(1115).intl;
  items2[2] = React4(PressableOpacity, obj11);
  return authStore(View, obj2);
}
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  let AnimatedPressableHighlight;
  let closure_4;
  let items5;
  let items6;
  let obj10;
  channel = channel.channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  let first;
  react = undefined;
  let first1;
  const tmp = closure_13();
  let tmp2 = first(react.useState(82), 2);
  first = tmp2[0];
  react = tmp2[1];
  let obj = channel(markAsDismissed[10]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  const tmp5 = first(react.useState(false), 2);
  first1 = tmp5[0];
  let closure_7 = tmp5[1];
  let obj2 = { type: channel(markAsDismissed[19]).ImpressionTypes.VIEW, name: channel(markAsDismissed[19]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL };
  let tmp7 = emoji(markAsDismissed[18]);
  tmp7(obj2);
  const obj3 = channel(markAsDismissed[20]);
  const sharedValue = obj3.useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = react.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  const fn = function v() {
    let tmp7;
    const obj = { height: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      tmp7 = obj;
    } else {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const withTiming = timing.withTiming;
      const obj2 = { duration: 300, easing: native.DECELERATED_EASING };
      timing;
      const value = sharedValue.get();
      obj.height = withDelay(200, withTiming(value, obj2));
      tmp7 = obj;
    }
    return tmp7;
  };
  const obj4 = channel(markAsDismissed[20]);
  fn.__closure = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[20]).withDelay, withTiming: channel(markAsDismissed[21]).withTiming, DECELERATED_EASING: channel(markAsDismissed[22]).DECELERATED_EASING };
  fn.__workletHash = 14971794499123;
  fn.__initData = __initData;
  ({ useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[20]).withDelay, withTiming: channel(markAsDismissed[21]).withTiming, DECELERATED_EASING: channel(markAsDismissed[22]).DECELERATED_EASING });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const items2 = [emoji, markAsDismissed];
  const callback = react.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items3 = [markAsDismissed];
  const callback1 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { emoji };
    obj.openLazy(asyncRequire(11870, dependencyMap.paths), "DoubleTapToReactActionSheet", obj2);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const callback2 = react.useCallback(() => {
    constants(true);
    const timerId = setTimeout(() => {
      markAsDismissed(constants.USER_DISMISS);
    }, 500);
  }, items3);
  const tmp15 = emoji(markAsDismissed[26])(channel.id);
  let closure_9 = tmp15;
  const items4 = [tmp15, channel.id, markAsDismissed];
  const effect1 = react.useEffect(() => {
    const tmp2 = null != closure_9 && tmp !== channel.id;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items4);
  const obj6 = channel(markAsDismissed[27]);
  const unmountEffect = obj6.useUnmountEffect(() => {
    markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
  });
  const obj7 = { children: items5 };
  items5 = [, ];
  const obj8 = { style: tmp.measurement, onLayout: callback, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  items5[0] = closure_9(stateFromStores, obj8);
  const obj9 = { style: items6, children: closure_9(AnimatedPressableHighlight, obj10) };
  items6 = [animatedStyle, tmp.animatedContainer];
  View = emoji(markAsDismissed[20]).View;
  obj10 = { onPress: callback1, style: tmp.highlight, androidRippleConfig, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  AnimatedPressableHighlight = channel(markAsDismissed[28]).AnimatedPressableHighlight;
  items5[1] = closure_9(View, obj9);
  return closure_10(closure_11, obj7);
}
let react = react_mod;
let View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const androidRippleConfig = { cornerRadius: 0 };
let createStyles = createStyles_mod;
let obj = { animatedContainer: obj2, measurement: { opacity: 0, position: "absolute" }, container: { display: "flex", flexDirection: "row", alignItems: "center", padding: 12 }, highlight: obj3, text: { marginHorizontal: 12, flex: 1 }, emojiContainer: obj4, emoji: { width: 28, height: 28 }, textEmoji: obj5, header: { flexDirection: "row", alignItems: "center", gap: 6 }, closeButton: { alignSelf: "flex-start" } };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "center", padding: 12 };
let PlatformUtils = PlatformUtils_mod;
let num = 22;
if (PlatformUtils.isIOS()) {
  num = 28;
}
obj5 = { fontSize: num, textAlign: "center", lineHeight: num2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
let closure_13 = createStyles(obj);
const __initData = { code: "function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}" };
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export const DoubleTapToReactChatInputBanner = function DoubleTapToReactChatInputBanner(channel) {
  let items1;
  channel = channel.channel;
  let memo1;
  let tmp = channel;
  const DoubleTapReactionEmoji = channel(memo1[29]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const items = [channel, setting];
  const memo = react.useMemo(() => {
    let emojiId;
    let emojiName;
    ({ emojiId, emojiName } = setting);
    let tmp = true !== setting.disableDoubleTap;
    if (tmp) {
      let tmp3 = null != emojiId && "0" !== emojiId;
      if (!tmp3) {
        tmp3 = null != emojiName && "" !== emojiName;
        const tmp4 = null != emojiName && "" !== emojiName;
      }
      let tmp5 = !tmp3;
      if (tmp5) {
        tmp5 = null != channel.lastMessageId && canAddNewReactionsDefault(tmp6);
        const tmp7 = null != channel.lastMessageId && canAddNewReactionsDefault(tmp6);
      }
      tmp = tmp5;
    }
    return tmp;
  }, items);
  memo1 = react.useMemo(() => {
    const obj = channel(memo1[31]);
    return obj.getFallbackDoubleTapDisambiguatedEmoji();
  }, []);
  let tmp6 = null;
  if (null != memo1) {
    let tmp7 = null;
    if (memo) {
      let obj = {
        contentTypes: items1,
        bypassAutoDismiss: true,
        children(arg0) {
              let markAsDismissed;
              let visibleContent;
              ({ visibleContent, markAsDismissed } = arg0);
              let tmp = null;
              if (visibleContent === dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
                const obj = { channel, emoji: memo1, markAsDismissed };
                tmp = React4(DoubleTapToReactChatInputBannerAnimationContainer, obj);
              }
              return tmp;
            }
      };
      items1 = [];
      const tmp10 = setting(memo1[32]);
      items1[0] = tmp(memo1[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
      tmp7 = closure_9(tmp10, obj);
    }
    tmp6 = tmp7;
  }
  return tmp6;
};
