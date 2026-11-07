// Module ID: 14229
// Function ID: 14230
// Name: EmojiSuggestionChatButton
// Dependencies: [32, 19, 17, 1192, 4986, 1228, 21, 5140, 575, 1377, 5724, 14223, 14230, 1652, 5761, 1705, 11383, 14231, 5420, 12709, 7043, 1113, 5842, 5147, 7364, 7365, 10148, 1187, 2]
// Exports: EmojiSuggestionChatButton

// Module 14229 (EmojiSuggestionChatButton)
import nativeDefault from "native" /* 575 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1228 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1705 from "module_1705" /* 1705 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4986 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5420 */;
import spring_spring from "spring/spring" /* 5761 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 14223 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let set, set2, tmp;

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
let closure_13 = { code: "(function EmojiSuggestionChatButtonTsx1(finished){let[scheduleOnRN,setDisplayedEmoji]=this.__closure;if(finished===true){scheduleOnRN(setDisplayedEmoji,undefined);}})" };
let closure_14 = { code: "(function EmojiSuggestionChatButtonTsx2(){let[emojiAnimationProgress]=this.__closure;return{opacity:emojiAnimationProgress.get(),transform:[{scale:emojiAnimationProgress.get()}]};})" };
let closure_15 = { code: "(function EmojiSuggestionChatButtonTsx3(){let[emojiAnimationProgress]=this.__closure;return{opacity:1-emojiAnimationProgress.get()};})" };
let closure_16 = { code: "(function EmojiSuggestionChatButtonTsx4(){let[scheduleOnRN,insertTopEmoji]=this.__closure;scheduleOnRN(insertTopEmoji);})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionChatButton.tsx");

export function EmojiSuggestionChatButton(arg0) {
  let PressableOpacity;
  let _undefined;
  let active;
  let c5;
  let intl;
  let items10;
  let items11;
  let items9;
  let obj11;
  let obj13;
  let obj7;
  let obj8;
  let onPress;
  let ref;
  let showKeyboardIcon;
  let str;
  let str2;
  let style;
  let tmp12;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp31Result;
  let tmp33;
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
  const obj2 = onPress(lockedEmojis[10]);
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
    let tmp2;
    let tmp3;
    let tmp4;
    if (null != first) {
      _undefined(tmp);
      set = sharedValue.set;
      const obj = spring_spring;
      const result = set(obj.withSpring(1, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG));
    } else {
      set2 = sharedValue.set;
      const withSpring = spring_spring.withSpring;
      const ITEM_ENTRANCE_SPRING_CONFIG = EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG;
      const items = [closure_13, _mod1705.scheduleOnRN, _undefined];
      let c0;
      let c1;
      [tmp2, tmp3, tmp4] = items;
      class EmojiSuggestionChatButtonTsx1 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1, undefined);
          }
          return;
        }
      }
      const items1 = [tmp3, tmp4];
      EmojiSuggestionChatButtonTsx1.__closure = items1;
      EmojiSuggestionChatButtonTsx1.__workletHash = 5025215433738;
      EmojiSuggestionChatButtonTsx1.__initData = tmp2;
      set2(withSpring(0, ITEM_ENTRANCE_SPRING_CONFIG, "respect-motion-settings", EmojiSuggestionChatButtonTsx1));
    }
  }, items);
  let items1 = [closure_14, sharedValue];
  let c0;
  [tmp17, tmp18] = items1;
  const tmp2Result6 = tmp2(tmp3[13]);
  class EmojiSuggestionChatButtonTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  let items2 = [tmp18];
  EmojiSuggestionChatButtonTsx2.__closure = items2;
  EmojiSuggestionChatButtonTsx2.__workletHash = 5109148724809;
  EmojiSuggestionChatButtonTsx2.__initData = tmp17;
  const animatedStyle = tmp2Result6.useAnimatedStyle(EmojiSuggestionChatButtonTsx2);
  let items3 = [closure_15, sharedValue];
  c0 = undefined;
  [tmp20, tmp21] = items3;
  const tmp2Result7 = tmp2(tmp3[13]);
  class EmojiSuggestionChatButtonTsx3 {
    constructor() {
      const obj = { opacity: 1 - _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp21];
  EmojiSuggestionChatButtonTsx3.__closure = items4;
  EmojiSuggestionChatButtonTsx3.__workletHash = 9498675997018;
  EmojiSuggestionChatButtonTsx3.__initData = tmp20;
  const items5 = [dismissCoachmark, onPress, unlockedEmojis, lockedEmojis];
  const animatedStyle1 = tmp2Result7.useAnimatedStyle(EmojiSuggestionChatButtonTsx3);
  const items6 = [first, handlePress];
  const callback = obj6.useCallback(() => {
    dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
    const obj = { unlocked: unlockedEmojis, locked: lockedEmojis };
    onPress(ExpressionPickerViewType.EMOJI, obj);
  }, items5);
  callback1 = obj6.useCallback(() => {
    if (null != first) {
      handlePress(tmp);
    }
  }, items6);
  gesture = obj6.useContext(tmp4(tmp3[16])).gesture;
  const context = obj6.useContext(tmp2(tmp3[16]).MainTabsChannelScreenStackContext);
  gesture1 = undefined;
  if (context != null) {
    gesture1 = context.gesture;
  }
  const context1 = obj6.useContext(tmp2(tmp3[17]).SwipeForMemberListContext);
  gesture2 = undefined;
  if (context1 != null) {
    gesture2 = context1.gesture;
  }
  const items7 = [first, callback1, gesture, gesture1, gesture2];
  const items8 = [onPress, unlockedEmojis, lockedEmojis];
  const memo = obj6.useMemo(() => {
    let tmp4;
    let tmp5;
    let tmp6;
    const items = [gesture, gesture1, gesture2];
    const found = items.filter((item) => null != item);
    const Gesture = LegacyBaseButton.Gesture;
    const items1 = [...found];
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(null != first);
    const applyResult = enabledResult.blocksExternalGesture.apply(items1);
    const activeOffsetXResult = applyResult.activeOffsetX(-15);
    const failOffsetXResult = activeOffsetXResult.failOffsetX(15);
    const items2 = [closure_16, , ];
    const onStart = failOffsetXResult.failOffsetY([-15, 15]).onStart;
    failOffsetXResult.failOffsetY([-15, 15]);
    items2[1] = _mod1705.scheduleOnRN;
    items2[2] = callback1;
    let c0;
    let c1;
    [tmp4, tmp5, tmp6] = items2;
    class EmojiSuggestionChatButtonTsx4 {
      constructor() {
        _undefined(c1);
      }
    }
    const items3 = [tmp5, tmp6];
    EmojiSuggestionChatButtonTsx4.__closure = items3;
    EmojiSuggestionChatButtonTsx4.__workletHash = 15406539784442;
    EmojiSuggestionChatButtonTsx4.__initData = tmp4;
    return onStart(EmojiSuggestionChatButtonTsx4);
  }, items7);
  const callback2 = obj6.useCallback((arg0) => {
    const obj = { unlocked: unlockedEmojis, locked: lockedEmojis };
    onPress(arg0, obj);
  }, items8);
  const obj5 = { gesture: memo, children: gesture1(dismissCoachmark, obj7) };
  obj7 = { style: tmp7.swipeArea, children: tmp33(dismissCoachmark, obj8) };
  obj8 = { ref: ref1, collapsable: false, style: items9, children: items10 };
  items9 = [tmp7.wrapper, style];
  const GestureDetector = tmp2(tmp3[18]).GestureDetector;
  const obj9 = { style: animatedStyle1, pointerEvents: str, children: gesture1(tmp4(tmp3[19]), { active, showKeyboardIcon, onPress: callback2 }) };
  str = "auto";
  const View = tmp4(tmp3[13]).View;
  tmp33 = gesture2;
  if (null != tmp12) {
    str = "none";
  }
  items10 = [gesture1(View, obj9), ];
  let tmp31Result2 = null != tmp12;
  if (tmp31Result2) {
    const obj10 = { style: items11, pointerEvents: str2, children: gesture1(PressableOpacity, obj11) };
    items11 = [tmp7.glyphOverlay, animatedStyle];
    str2 = "none";
    const View2 = tmp4(tmp3[13]).View;
    if (null != first) {
      str2 = "auto";
    }
    obj11 = { style: tmp7.glyphButton, accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(tmp3[21]).t.iZ7Mz9), onPress: callback, children: tmp31Result };
    PressableOpacity = tmp2(tmp3[20]).PressableOpacity;
    intl = tmp2(tmp3[21]).intl;
    if (null != tmp12.id) {
      const obj12 = { resizeMode: "contain", style: tmp7.image, placeholder: tmp4Result3, source: obj13, usesSmallCache: true };
      const tmp4Result = tmp4(tmp3[22]);
      const tmp2Result8 = tmp2(tmp3[23]);
      if (tmp2Result8.isThemeDark(sharedValue.theme)) {
        tmp4Result3 = tmp4(tmp3[24]);
      } else {
        tmp4Result3 = tmp4(tmp3[25]);
      }
      obj13 = { uri: tmp4Result4(tmp12, false, token - tmp4(tmp3[8]).space.PX_8) };
      tmp4Result4 = tmp4(tmp3[26]);
      tmp31Result = tmp31(tmp4Result, obj12);
    } else {
      const obj14 = { allowFontScaling: false, style: tmp7.surrogates, children: tmp12.surrogates };
      tmp31Result = tmp31(tmp2(tmp3[27]).LegacyText, obj14);
    }
    tmp31Result2 = tmp31(View2, obj10);
  }
  items10[1] = tmp31Result2;
  return gesture1(GestureDetector, obj5);
}
