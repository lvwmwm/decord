// Module ID: 11417
// Function ID: 88780
// Name: DoubleTapToReactChatInputBannerInner
// Dependencies: [57, 31, 27, 4122, 1345, 1852, 33, 4130, 689, 477, 624, 5151, 1392, 4126, 1212, 11418, 4660, 5119, 8604, 480, 3991, 4131, 1273, 4098, 11454, 1934, 8328, 4560, 8416, 3803, 9998, 7745, 9678, 1334, 2]
// Exports: DoubleTapToReactChatInputBanner

// Module 11417 (DoubleTapToReactChatInputBannerInner)
import _slicedToArray from "_slicedToArray";
import getFallbackDoubleTapDisambiguatedEmoji from "getFallbackDoubleTapDisambiguatedEmoji";
import { View } from "useMountEffect";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "DismissibleContent";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "get ActivityIndicator";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function DoubleTapToReactChatInputBannerInner(emoji) {
  emoji = emoji.emoji;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  obj = { style: tmp.container };
  obj = { style: tmp.emojiContainer };
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.useReducedMotion);
  const obj1 = { style: tmp.emoji, fastImageStyle: tmp.emoji, textEmojiStyle: tmp.textEmoji };
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1.name = str;
  if (null != emoji.id) {
    let obj4 = importDefault(1392);
    const obj2 = { id: emoji.id };
    let animated = !stateFromStores;
    if (animated) {
      animated = emoji.animated;
    }
    obj2.animated = animated;
    obj2.size = EMOJI_URL_BASE_SIZE;
    let url = obj4.getEmojiURL(obj2);
  } else {
    url = emoji.url;
  }
  obj1.src = url;
  const items1 = [callback(importDefault(5151), obj1), callback(require(4126) /* Text */.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" })];
  obj.children = items1;
  const items2 = [callback2(View, obj), , ];
  const obj3 = { style: tmp.text };
  obj4 = { style: tmp.header };
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl.string(require(1212) /* getSystemLocale */.t["6RUX7d"]);
  const items3 = [callback(require(4126) /* Text */.Text, obj5), callback(require(11418) /* renderChannelBadge */.NewBadge, {})];
  obj4.children = items3;
  const items4 = [callback2(View, obj4), ];
  const obj6 = { variant: "text-xs/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl2.format(require(1212) /* getSystemLocale */.t["5/l2rR"], {
    emojiName: emoji.name,
    emojiNameHook(children) {
      const obj = { variant: "text-xs/bold", color: "text-strong", children };
      return outer1_9(outer1_0(outer1_2[13]).Text, obj, arg1);
    },
    tapHereHook(children) {
      const obj = { variant: "text-xs/medium", color: "text-brand", children };
      return outer1_9(outer1_0(outer1_2[13]).Text, obj, arg1);
    }
  });
  items4[1] = callback(require(4126) /* Text */.Text, obj6);
  obj3.children = items4;
  items2[1] = callback2(View, obj3);
  const obj8 = { hitSlop: 8, accessibilityRole: "button" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj8.accessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj8.onPress = emoji.handleDismissBanner;
  obj8.style = tmp.closeButton;
  obj8.children = callback(require(5119) /* XSmallIcon */.XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = callback(require(4660) /* PressableBase */.PressableOpacity, obj8);
  obj.children = items2;
  return callback2(View, obj);
}
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  channel = channel.channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = first(React.useState(82), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = channel(markAsDismissed[10]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  let tmp5 = first(React.useState(false), 2);
  first1 = tmp5[0];
  let closure_7 = tmp5[1];
  obj = { type: channel(markAsDismissed[19]).ImpressionTypes.VIEW, name: channel(markAsDismissed[19]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL };
  emoji(markAsDismissed[18])(obj);
  let obj2 = channel(markAsDismissed[20]);
  const sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = React.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  let obj3 = channel(markAsDismissed[20]);
  const fn = function v() {
    let obj = {};
    if (stateFromStores) {
      obj.height = sharedValue.get();
      let tmp5 = obj;
    } else {
      const obj2 = channel(markAsDismissed[20]);
      obj = { duration: 300 };
      const value = sharedValue.get();
      obj.easing = channel(markAsDismissed[22]).DECELERATED_EASING;
      obj.height = obj2.withDelay(200, channel(markAsDismissed[21]).withTiming(value, obj));
      tmp5 = obj;
      const obj3 = channel(markAsDismissed[21]);
    }
    return tmp5;
  };
  obj = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[20]).withDelay, withTiming: channel(markAsDismissed[21]).withTiming, DECELERATED_EASING: channel(markAsDismissed[22]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14971794499123;
  fn.__initData = closure_14;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [emoji, markAsDismissed];
  let callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items3 = [markAsDismissed];
  const callback1 = React.useCallback(() => {
    let obj = emoji(markAsDismissed[23]);
    obj = { emoji };
    obj.openLazy(channel(markAsDismissed[25])(markAsDismissed[24], markAsDismissed.paths), "DoubleTapToReactActionSheet", obj);
    markAsDismissed(lib.TAKE_ACTION);
  }, items2);
  const callback2 = React.useCallback(() => {
    lib(true);
    const timerId = setTimeout(() => {
      outer1_2(constants.USER_DISMISS);
    }, 500);
  }, items3);
  const tmp15 = emoji(markAsDismissed[26])(channel.id);
  callback = tmp15;
  const items4 = [tmp15, channel.id, markAsDismissed];
  const effect1 = React.useEffect(() => {
    let tmp = null != closure_9;
    if (tmp) {
      tmp = closure_9 !== channel.id;
    }
    if (tmp) {
      markAsDismissed(lib.AUTO_DISMISS);
    }
  }, items4);
  const tmp7 = emoji(markAsDismissed[18]);
  const unmountEffect = channel(markAsDismissed[27]).useUnmountEffect(() => {
    markAsDismissed(lib.AUTO_DISMISS);
  });
  const obj1 = {};
  obj2 = { style: tmp.measurement, onLayout: callback, children: callback(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  const items5 = [callback(stateFromStores, obj2), ];
  obj3 = { style: items6 };
  items6 = [animatedStyle, tmp.animatedContainer];
  const obj4 = { onPress: callback1, style: tmp.highlight, androidRippleConfig: closure_12, children: callback(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  obj3.children = callback(channel(markAsDismissed[28]).AnimatedPressableHighlight, obj4);
  items5[1] = callback(emoji(markAsDismissed[20]).View, obj3);
  obj1.children = items5;
  return callback2(closure_11, obj1);
}
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = { cornerRadius: 0 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.animatedContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.measurement = { opacity: 0, position: "absolute" };
_createForOfIteratorHelperLoose.container = { display: "flex", flexDirection: "row", alignItems: "center", padding: 12 };
_createForOfIteratorHelperLoose.highlight = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.text = { marginHorizontal: 12, flex: 1 };
let obj2 = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "center", padding: 12 };
_createForOfIteratorHelperLoose.emojiContainer = obj2;
_createForOfIteratorHelperLoose.emoji = { width: 28, height: 28 };
let obj3 = {};
let num = 22;
if (set.isIOS()) {
  num = 28;
}
obj3.fontSize = num;
obj3.textAlign = "center";
let num2;
if (set.isIOS()) {
  num2 = 32;
}
obj3.lineHeight = num2;
obj3.color = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT;
_createForOfIteratorHelperLoose.textEmoji = obj3;
_createForOfIteratorHelperLoose.header = { flexDirection: "row", alignItems: "center", gap: 6 };
_createForOfIteratorHelperLoose.closeButton = { alignSelf: "flex-start" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_14 = { code: "function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}" };
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export const DoubleTapToReactChatInputBanner = function DoubleTapToReactChatInputBanner(channel) {
  channel = channel.channel;
  const DoubleTapReactionEmoji = channel(memo1[29]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const items = [channel, setting];
  const memo = React.useMemo(() => {
    let emojiId;
    let emojiName;
    ({ emojiId, emojiName } = setting);
    let tmp = true !== setting.disableDoubleTap;
    if (tmp) {
      let tmp3 = null != emojiId;
      if (tmp3) {
        tmp3 = "0" !== emojiId;
      }
      if (!tmp3) {
        let tmp4 = null != emojiName;
        if (tmp4) {
          tmp4 = "" !== emojiName;
        }
        tmp3 = tmp4;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        let tmp7 = null != channel.lastMessageId;
        if (tmp7) {
          tmp7 = setting(memo1[30])(channel);
        }
        tmp5 = tmp7;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items);
  memo1 = React.useMemo(() => channel(memo1[31]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  let tmp4 = null;
  if (null != memo1) {
    let tmp5 = null;
    if (memo) {
      let obj = {};
      const items1 = [channel(memo1[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL];
      obj.contentTypes = items1;
      obj.bypassAutoDismiss = true;
      obj.children = function children(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp = null;
        if (visibleContent === channel(memo1[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
          const obj = { channel, emoji: memo1, markAsDismissed };
          tmp = outer1_9(outer1_16, obj);
        }
        return tmp;
      };
      tmp5 = callback(setting(memo1[32]), obj);
      const tmp9 = setting(memo1[32]);
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
