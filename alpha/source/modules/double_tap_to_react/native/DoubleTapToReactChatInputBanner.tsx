// Module ID: 14578
// Function ID: 14579
// Name: DoubleTapToReactChatInputBanner
// Dependencies: [32, 19, 17, 5244, 5089, 1388, 21, 5243, 575, 1377, 563, 7828, 1411, 5866, 1113, 14579, 7364, 7483, 6275, 1260, 1652, 5485, 1187, 5489, 14683, 2118, 6773, 5837, 7932, 5068, 9133, 9130, 10501, 5076, 2]
// Exports: DoubleTapToReactChatInputBanner

// Module 14578 (DoubleTapToReactChatInputBanner)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import Text_Text from "Text/Text" /* 5866 */;
import XSmallIcon from "XSmallIcon" /* 7483 */;
import EmojiDefault from "Emoji" /* 7828 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 9133 */;
import _mod14579 from "module_14579" /* 14579 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let easing;

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
    const getEmojiURL = tmp8(1411).getEmojiURL;
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
  const obj8 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["6RUX7d"]) };
  const Text = tmp2(5866).Text;
  intl = tmp2(1113).intl;
  items3 = [React4(Text, obj8), React4(_mod14579.NewBadge, {})];
  items4 = [authStore(View, obj7), ];
  const obj9 = { variant: "body-xs/medium", color: "text-default", children: intl2.format(intl4.t["5/l2rR"], obj10) };
  const Text2 = tmp2(5866).Text;
  intl2 = tmp2(1113).intl;
  obj10 = {
    emojiName: emoji.name,
    emojiNameHook(children, arg1) {
      const obj = { variant: "body-xs/semibold", color: "text-strong", children };
      return closure_1_9(Text_Text.Text, obj, arg1);
    },
    tapHereHook(children, arg1) {
      const obj = { variant: "body-xs/medium", color: "text-brand", children };
      return closure_1_9(Text_Text.Text, obj, arg1);
    }
  };
  items4[1] = React4(Text2, obj9);
  items2[1] = authStore(View, obj6);
  const obj11 = { hitSlop: 8, accessibilityRole: "button", accessibilityLabel: intl3.string(intl4.t.cpT0Cq), onPress: handleDismissBanner, style: tmp.closeButton, children: React4(XSmallIcon.XSmallIcon, { size: "sm", color: "icon-subtle" }) };
  const PressableOpacity = tmp2(7364).PressableOpacity;
  intl3 = tmp2(1113).intl;
  items2[2] = React4(PressableOpacity, obj11);
  return authStore(View, obj2);
}
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  let AnimatedPressableHighlight;
  let closure_4;
  let items7;
  let items8;
  let obj8;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  channel = channel.channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  let first;
  easing = undefined;
  let closure_6;
  let closure_8;
  const tmp = closure_13();
  let obj = easing;
  let tmp2 = first(easing.useState(82), 2);
  first = tmp2[0];
  easing = tmp2[1];
  let tmp5 = markAsDismissed;
  let obj2 = channel(markAsDismissed[10]);
  const items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_6.useReducedMotion);
  const tmp7 = first(easing.useState(false), 2);
  const first1 = tmp7[0];
  closure_6 = tmp7[1];
  const obj3 = { type: channel(markAsDismissed[19]).ImpressionTypes.VIEW, name: channel(markAsDismissed[19]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL };
  const tmp10 = emoji(markAsDismissed[18]);
  tmp10(obj3);
  const obj4 = channel(markAsDismissed[20]);
  const sharedValue = obj4.useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = easing.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  const items2 = [closure_15, stateFromStores, sharedValue, , , ];
  const useAnimatedStyle = channel(markAsDismissed[20]).useAnimatedStyle;
  channel(markAsDismissed[20]);
  items2[3] = channel(markAsDismissed[20]).withDelay;
  items2[4] = channel(markAsDismissed[21]).withTiming;
  items2[5] = channel(markAsDismissed[22]).DECELERATED_EASING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  class DoubleTapToReactChatInputBannerTsx1 {
    constructor() {
      let tmp5;
      const obj = { height: null };
      if (c0) {
        obj.height = _undefined.get();
        tmp5 = obj;
      } else {
        const obj2 = { duration: 300, easing };
        obj.height = _undefined2(200, _undefined3(_undefined.get(), obj2));
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  DoubleTapToReactChatInputBannerTsx1.__closure = items3;
  DoubleTapToReactChatInputBannerTsx1.__workletHash = 11366133549482;
  DoubleTapToReactChatInputBannerTsx1.__initData = tmp15;
  const animatedStyle = useAnimatedStyle(DoubleTapToReactChatInputBannerTsx1);
  const items4 = [emoji, markAsDismissed];
  const callback = obj.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items5 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { emoji };
    obj.openLazy(asyncRequire(14683, dependencyMap.paths), "DoubleTapToReactActionSheet", obj2);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items4);
  const callback2 = obj.useCallback(() => {
    closure_6(true);
    const timerId = setTimeout(() => {
      markAsDismissed(sharedValue.USER_DISMISS);
    }, 500);
  }, items5);
  const tmp25 = emoji(tmp5[26])(channel.id);
  closure_8 = tmp25;
  const items6 = [tmp25, channel.id, markAsDismissed];
  const effect1 = obj.useEffect(() => {
    const tmp2 = null != closure_8 && tmp !== channel.id;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items6);
  const tmp4Result = channel(tmp5[27]);
  const unmountEffect = tmp4Result.useUnmountEffect(() => {
    markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
  });
  const obj5 = { children: items7 };
  items7 = [, ];
  const obj6 = { style: tmp.measurement, onLayout: callback, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  items7[0] = closure_9(first1, obj6);
  const obj7 = { style: items8, children: closure_9(AnimatedPressableHighlight, obj8) };
  items8 = [animatedStyle, tmp.animatedContainer];
  View = tmp9(tmp5[20]).View;
  obj8 = { onPress: callback1, style: tmp.highlight, androidRippleConfig, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  AnimatedPressableHighlight = tmp4(tmp5[28]).AnimatedPressableHighlight;
  items7[1] = closure_9(View, obj7);
  return closure_10(closure_11, obj5);
}
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
let closure_15 = { code: "(function DoubleTapToReactChatInputBannerTsx1(){let[useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};})" };
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export function DoubleTapToReactChatInputBanner(channel) {
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
}
