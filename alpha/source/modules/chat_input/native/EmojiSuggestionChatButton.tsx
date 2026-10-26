// Module ID: 13330
// Function ID: 13331
// Name: EmojiSuggestionChatButton
// Dependencies: [32, 19, 17, 1207, 4820, 1243, 21, 4971, 587, 1384, 5252, 13326, 13331, 5052, 5247, 11886, 13332, 5297, 12168, 6908, 1128, 5669, 4978, 7228, 7229, 9912, 1202, 2]
// Exports: EmojiSuggestionChatButton

// Module 13330 (EmojiSuggestionChatButton)
import nativeDefault from "native" /* 587 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1243 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4820 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import spring from "spring" /* 5247 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5297 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 13326 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import size_mod from "module_2" /* 2 */;

let set, set2;

let c10;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((height, marginVertical) => {
  let num;
  let obj2;
  let size1;
  const obj = { swipeArea: { marginVertical: -marginVertical, paddingVertical: marginVertical }, wrapper: { height, width: height }, glyphOverlay: obj2, glyphButton: size, image: size1, surrogates: { fontSize: num * ((height - nativeDefault.space.PX_8) / 33), color: nativeDefault.colors.TEXT_DEFAULT } };
  obj2 = { alignItems: "center", justifyContent: "center" };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  size = { borderRadius: nativeDefault.radii.sm, height, width: height, alignItems: "center", justifyContent: "center" };
  size1 = { height: height - nativeDefault.space.PX_8, width: height - nativeDefault.space.PX_8 };
  num = 28;
  const obj5 = PlatformUtils;
  if (obj5.isAndroid()) {
    num = 26;
  }
  ({ fontSize: num * ((height - nativeDefault.space.PX_8) / 33), color: nativeDefault.colors.TEXT_DEFAULT });
  return obj;
});
let closure_13 = { code: "function EmojiSuggestionChatButtonTsx1(finished){const{runOnJS,setDisplayedEmoji}=this.__closure;if(finished===true){runOnJS(setDisplayedEmoji)(undefined);}}" };
const __initData = { code: "function EmojiSuggestionChatButtonTsx2(){const{emojiAnimationProgress}=this.__closure;return{opacity:emojiAnimationProgress.get(),transform:[{scale:emojiAnimationProgress.get()}]};}" };
const __initData2 = { code: "function EmojiSuggestionChatButtonTsx3(){const{emojiAnimationProgress}=this.__closure;return{opacity:1-emojiAnimationProgress.get()};}" };
let closure_16 = { code: "function EmojiSuggestionChatButtonTsx4(){const{runOnJS,insertTopEmoji}=this.__closure;runOnJS(insertTopEmoji)();}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionChatButton.tsx");

export const EmojiSuggestionChatButton = function EmojiSuggestionChatButton(arg0) {
  let PressableOpacity;
  let active;
  let c5;
  let intl;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj13;
  let obj7;
  let obj8;
  let onPress;
  let ref;
  let setDisplayedEmoji;
  let showKeyboardIcon;
  let str;
  let str2;
  let style;
  let tmp12;
  let tmp27Result;
  let tmp29;
  let tmp4Result3;
  let tmp4Result4;
  ({ active, onPress } = arg0);
  ({ style, showKeyboardIcon, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, active: 0, showKeyboardIcon: 0, onPress: 0, ref: 0 }));
  let unlockedEmojis;
  let lockedEmojis;
  c5 = undefined;
  let dismissCoachmark;
  let sharedValue;
  let callback1;
  let gesture;
  let gesture1;
  let gesture2;
  const tmp2 = onPress;
  const tmp3 = lockedEmojis;
  let obj = onPress(lockedEmojis[10]);
  const tmp4 = unlockedEmojis;
  const token = obj.useToken(unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = onPress(lockedEmojis[10]);
  const token1 = obj2.useToken(unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const obj3 = onPress(lockedEmojis[10]);
  const tmp7 = closure_12(token, (token1 - token) / 2 + obj3.useToken(unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL));
  const obj4 = onPress(lockedEmojis[11]);
  const emojiSuggestionBarState = obj4.useEmojiSuggestionBarState(merged, onPress(lockedEmojis[11]).MAX_SUGGESTIONS_LARGE, 0, ref);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const handlePress = emojiSuggestionBarState.handlePress;
  let first;
  if (true !== active) {
    first = unlockedEmojis[0];
  }
  let emojiIdentity;
  if (null != first) {
    const tmp2Result = tmp2(tmp3[11]);
    emojiIdentity = tmp2Result.getEmojiIdentity(first);
  }
  [tmp12, c5] = handlePress(first.useState(first), 2);
  const tmp11 = handlePress(first.useState(first), 2);
  const ref1 = first.useRef(null);
  dismissCoachmark = tmp4(tmp3[12])(ref1, null != first).dismissCoachmark;
  let num = 0;
  const useSharedValue = tmp2(tmp3[13]).useSharedValue;
  tmp2(tmp3[13]);
  if (null != first) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [emojiIdentity];
  const effect = obj6.useEffect(() => {
    if (null != first) {
      setDisplayedEmoji(tmp);
      set = sharedValue.set;
      let obj = spring;
      const result = set(obj.withSpring(1, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG));
    } else {
      set2 = sharedValue.set;
      const withSpring = spring.withSpring;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = onPress(lockedEmojis[13]);
          obj.runOnJS(setDisplayedEmoji)(undefined);
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport.runOnJS, setDisplayedEmoji };
      const ITEM_ENTRANCE_SPRING_CONFIG = EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG;
      fn.__closure = obj2;
      fn.__workletHash = 11486975633278;
      fn.__initData = __initData;
      set2(withSpring(0, ITEM_ENTRANCE_SPRING_CONFIG, "respect-motion-settings", fn));
    }
  }, items);
  const tmp2Result6 = tmp2(tmp3[13]);
  class V {
    constructor() {
      let items;
      const obj = { opacity: sharedValue.get(), transform: items };
      items = [{ scale: sharedValue.get() }];
      ({ scale: sharedValue.get() });
      return obj;
    }
  }
  V.__closure = { emojiAnimationProgress: sharedValue };
  V.__workletHash = 12888902078160;
  V.__initData = __initData;
  const animatedStyle = tmp2Result6.useAnimatedStyle(V);
  const tmp2Result7 = tmp2(tmp3[13]);
  class X {
    constructor() {
      const obj = { opacity: 1 - sharedValue.get() };
      return obj;
    }
  }
  X.__closure = { emojiAnimationProgress: sharedValue };
  X.__workletHash = 3538426469891;
  X.__initData = __initData2;
  let items1 = [dismissCoachmark, onPress, unlockedEmojis, lockedEmojis];
  const animatedStyle1 = tmp2Result7.useAnimatedStyle(X);
  const items2 = [first, handlePress];
  const callback = obj6.useCallback(() => {
    dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
    const obj = { unlocked: unlockedEmojis, locked: lockedEmojis };
    onPress(ExpressionPickerViewType.EMOJI, obj);
  }, items1);
  callback1 = obj6.useCallback(() => {
    if (null != first) {
      handlePress(tmp);
    }
  }, items2);
  gesture = obj6.useContext(tmp4(tmp3[15])).gesture;
  const context = obj6.useContext(tmp2(tmp3[15]).MainTabsChannelScreenStackContext);
  gesture1 = undefined;
  if (context != null) {
    gesture1 = context.gesture;
  }
  const context1 = obj6.useContext(tmp2(tmp3[16]).SwipeForMemberListContext);
  gesture2 = undefined;
  if (context1 != null) {
    gesture2 = context1.gesture;
  }
  const items3 = [first, callback1, gesture, gesture1, gesture2];
  const items4 = [onPress, unlockedEmojis, lockedEmojis];
  const memo = obj6.useMemo(() => {
    const items = [gesture, gesture1, gesture2];
    const found = items.filter((item) => null != item);
    const Gesture = LegacyBaseButton.Gesture;
    const items1 = [...found];
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(null != first);
    const applyResult = enabledResult.blocksExternalGesture.apply(items1);
    const activeOffsetXResult = applyResult.activeOffsetX(-15);
    const fn = function t() {
      const obj = onPress(lockedEmojis[13]);
      obj.runOnJS(callback1)();
    };
    const failOffsetXResult = activeOffsetXResult.failOffsetX(15);
    const failOffsetYResult = failOffsetXResult.failOffsetY([-15, 15]);
    let obj = { runOnJS: ReanimatedRexport.runOnJS, insertTopEmoji: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 3138575008034;
    fn.__initData = __initData2;
    return failOffsetYResult.onStart(fn);
  }, items3);
  const callback2 = obj6.useCallback((arg0) => {
    const obj = { unlocked: unlockedEmojis, locked: lockedEmojis };
    onPress(arg0, obj);
  }, items4);
  const obj5 = { gesture: memo, children: gesture1(dismissCoachmark, obj7) };
  obj7 = { style: tmp7.swipeArea, children: tmp29(dismissCoachmark, obj8) };
  obj8 = { ref: ref1, collapsable: false, style: items5, children: items6 };
  items5 = [tmp7.wrapper, style];
  const GestureDetector = tmp2(tmp3[17]).GestureDetector;
  const obj9 = { style: animatedStyle1, pointerEvents: str, children: gesture1(tmp4(tmp3[18]), { active, showKeyboardIcon, onPress: callback2 }) };
  str = "auto";
  const View = tmp4(tmp3[13]).View;
  tmp29 = gesture2;
  if (null != tmp12) {
    str = "none";
  }
  items6 = [gesture1(View, obj9), ];
  let tmp27Result2 = null != tmp12;
  if (tmp27Result2) {
    const obj10 = { style: items7, pointerEvents: str2, children: gesture1(PressableOpacity, obj11) };
    items7 = [tmp7.glyphOverlay, animatedStyle];
    str2 = "none";
    const View2 = tmp4(tmp3[13]).View;
    if (null != first) {
      str2 = "auto";
    }
    obj11 = { style: tmp7.glyphButton, accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(tmp3[20]).t.iZ7Mz9), onPress: callback, children: tmp27Result };
    PressableOpacity = tmp2(tmp3[19]).PressableOpacity;
    intl = tmp2(tmp3[20]).intl;
    if (null != tmp12.id) {
      const obj12 = { resizeMode: "contain", style: tmp7.image, placeholder: tmp4Result3, source: obj13, usesSmallCache: true };
      const tmp4Result = tmp4(tmp3[21]);
      const tmp2Result8 = tmp2(tmp3[22]);
      if (tmp2Result8.isThemeDark(sharedValue.theme)) {
        tmp4Result3 = tmp4(tmp3[23]);
      } else {
        tmp4Result3 = tmp4(tmp3[24]);
      }
      obj13 = { uri: tmp4Result4(tmp12, false, token - tmp4(tmp3[8]).space.PX_8) };
      tmp4Result4 = tmp4(tmp3[25]);
      tmp27Result = tmp27(tmp4Result, obj12);
    } else {
      const obj14 = { allowFontScaling: false, style: tmp7.surrogates, children: tmp12.surrogates };
      tmp27Result = tmp27(tmp2(tmp3[26]).LegacyText, obj14);
    }
    tmp27Result2 = tmp27(View2, obj10);
  }
  items6[1] = tmp27Result2;
  return gesture1(GestureDetector, obj5);
};
