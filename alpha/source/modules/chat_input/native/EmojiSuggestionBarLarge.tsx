// Module ID: 12137
// Function ID: 12138
// Name: EmojiSuggestionBarLarge
// Dependencies: [109, 32, 19, 17, 9429, 21, 5092, 587, 558, 576, 12138, 4850, 9513, 9539, 4827, 2]

// Module 12137 (EmojiSuggestionBarLarge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4827 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9429 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9513 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let tmp;
let tmp4;
const ReanimatedRexport = tmp(4850);
const ReanimatedRexportDefault = tmp4(4850);
const EmojiSuggestionBarUtils = tmp(12138);
function renderEmojiSuggestionBarLargeItem(arg0, arg1, transitionState, cleanUp) {
  const merged = Object.assign(arg1);
  return <closure_13 key={arg0} transitionState={arg2} cleanUp={arg3} />;
}
let closure_3 = ["ref"];
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles((arg0) => {
  let PX_6;
  let obj2;
  let str = "space-between";
  const obj = { containerLargeWrapper: { overflow: "hidden" }, containerLarge: obj2, emptySlot: size };
  if (arg0) {
    str = "flex-start";
  }
  obj2 = { height: 52, flexDirection: "row", alignItems: "center", justifyContent: str, gap: PX_6, padding: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
  PX_6 = undefined;
  if (arg0) {
    PX_6 = nativeDefault.space.PX_6;
  }
  size = { width: IMAGE_SIZE, height: IMAGE_SIZE };
  return obj;
});
const __initData = { code: "function EmojiSuggestionBarLargeTsx1(){const{heightSv}=this.__closure;return{height:heightSv.get()};}" };
const __initData2 = { code: "function EmojiSuggestionBarLargeTsx2(){const{heightSv}=this.__closure;return{height:heightSv.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiSuggestionBarLargeAnimated(arg0) {
  let cleanUp;
  let first;
  let first1;
  let lockedEmojis;
  let reducedMotion;
  let suggestionBarHeight;
  let transitionState;
  let unlockedEmojis;
  const tmp = require;
  const tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(12);
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap, unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  const PX_6 = nativeDefault.space.PX_6;
  [first, closure_3] = suggestionBarHeight.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      closure_3(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const truncResult = Math.trunc(first / (IMAGE_SIZE + PX_6));
  const bound = Math.min(truncResult, 11);
  let tmp10 = truncResult > 11;
  let tmp11 = closure_10(tmp10);
  const emptySlot = tmp11;
  const tmpResult = EmojiSuggestionBarUtils;
  const sortEmojisForDisplayResult = tmpResult.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound);
  _slicedToArray = sortEmojisForDisplayResult;
  let length = bound;
  if (tmp10) {
    length = sortEmojisForDisplayResult.length;
  }
  const tmpResult3 = EmojiSuggestionBarUtils;
  suggestionBarHeight = tmpResult3.useSuggestionBarHeight(transitionState, cleanUp, 52);
  const fn2 = function w() {
    const obj = { height: suggestionBarHeight.get() };
    return obj;
  };
  fn2.__closure = { heightSv: suggestionBarHeight };
  fn2.__workletHash = 5553872738815;
  fn2.__initData = __initData;
  const tmpResult4 = ReanimatedRexport;
  const animatedStyle = tmpResult4.useAnimatedStyle(fn2);
  const tmp4Result = ReanimatedRexportDefault;
  if (cResult[1] === animatedStyle) {
    let tmp15;
    if (cResult[2] === tmp11.containerLargeWrapper) {
      tmp15 = cResult[3];
    }
    const _Array = Array;
    let obj2 = { length };
    const containerLarge = tmp11.containerLarge;
    const arr = Array.from(obj2, (arg0, index) => {
      let EmojiItem;
      let obj3;
      let openEmojiActionSheet;
      let tmp10;
      let tmp11;
      if (null == _slicedToArray[index]) {
        const _HermesInternal = HermesInternal;
        return <View key={"none:" + arg1} style={emptySlot.emptySlot} />;
      } else {
        const locked = tmp2.locked;
        const emoji = tmp2.emoji;
        const obj2 = { index, reducedMotion: require, children: tmp11(EmojiItem, obj3) };
        const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
        obj3 = { emoji, disabled: locked, onPressEmoji: locked ? dependencyMap : importDefault, onLongPressEmoji: openEmojiActionSheet, animateEmoji: !tmp10, isSectionNitroLocked: false };
        EmojiItem = EmojiPickerListRow.EmojiItem;
        tmp10 = require;
        tmp11 = jsx;
        const tmp7 = jsx;
        if (locked) {
          openEmojiActionSheet = dependencyMap;
        } else {
          openEmojiActionSheet = tmp8(9539).openEmojiActionSheet;
        }
        const tmp8Result = EmojiSuggestionBarUtils;
        return tmp7(EmojiEntranceAnimation, obj2, tmp8Result.getEmojiEntranceKey(tmp, index));
      }
    });
    if (cResult[4] === View) {
      if (cResult[5] === tmp11.containerLarge) {
        let tmp18;
        if (cResult[6] === arr) {
          tmp18 = cResult[7];
        }
        if (cResult[8] === tmp4Result.View) {
          if (cResult[9] === tmp15) {
            let tmp21;
            if (cResult[10] === tmp18) {
              tmp21 = cResult[11];
            }
            return tmp21;
          }
        }
        const tmp23 = <tmp4Result.View style={tmp15}>{tmp18}</tmp4Result.View>;
        cResult[8] = tmp4Result.View;
        cResult[9] = tmp15;
        cResult[10] = tmp18;
        cResult[11] = tmp23;
        tmp21 = tmp23;
      }
    }
    const tmp20 = <View style={containerLarge} onLayout={first1}>{arr}</View>;
    cResult[4] = View;
    cResult[5] = tmp11.containerLarge;
    cResult[6] = arr;
    cResult[7] = tmp20;
    tmp18 = tmp20;
  }
  const items = [tmp11.containerLargeWrapper, animatedStyle];
  cResult[1] = animatedStyle;
  cResult[2] = tmp11.containerLargeWrapper;
  cResult[3] = items;
  tmp15 = items;
}) : (function EmojiSuggestionBarLargeAnimated(arg0) {
  let _undefined;
  let _undefined2;
  let c3;
  let cleanUp;
  let lockedEmojis;
  let reducedMotion;
  let tmp4;
  let transitionState;
  let unlockedEmojis;
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap } = arg0);
  c3 = undefined;
  _slicedToArray = undefined;
  let suggestionBarHeight;
  const tmp2 = dependencyMap;
  ({ unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  const tmp = importDefault;
  const PX_6 = nativeDefault.space.PX_6;
  [tmp4, c3] = _slicedToArray(suggestionBarHeight.useState(0), 2);
  const tmp3 = _slicedToArray(suggestionBarHeight.useState(0), 2);
  const callback = suggestionBarHeight.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const truncResult = Math.trunc(tmp4 / (IMAGE_SIZE + PX_6));
  let length = Math.min(truncResult, 11);
  let tmp7 = truncResult > 11;
  const tmp8 = closure_10(tmp7);
  const emptySlot = tmp8;
  let obj = EmojiSuggestionBarUtils;
  const sortEmojisForDisplayResult = obj.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length);
  _slicedToArray = sortEmojisForDisplayResult;
  if (tmp7) {
    length = sortEmojisForDisplayResult.length;
  }
  const tmp9Result = EmojiSuggestionBarUtils;
  suggestionBarHeight = tmp9Result.useSuggestionBarHeight(transitionState, cleanUp, 52);
  const fn = function _() {
    const obj = { height: suggestionBarHeight.get() };
    return obj;
  };
  fn.__closure = { heightSv: suggestionBarHeight };
  fn.__workletHash = 16628636134044;
  fn.__initData = __initData2;
  const tmp9Result2 = ReanimatedRexport;
  const animatedStyle = tmp9Result2.useAnimatedStyle(fn);
  const items = [tmp8.containerLargeWrapper, animatedStyle];
  let obj3 = {
    style: tmp8.containerLarge,
    onLayout: callback,
    children: Array.from({ length }, (arg0, index) => {
      let EmojiItem;
      let obj3;
      let openEmojiActionSheet;
      let tmp10;
      let tmp11;
      if (null == _undefined2[index]) {
        const _HermesInternal = HermesInternal;
        return <View key={"none:" + arg1} style={emptySlot.emptySlot} />;
      } else {
        const locked = tmp2.locked;
        const emoji = tmp2.emoji;
        const obj2 = { index, reducedMotion: require, children: tmp11(EmojiItem, obj3) };
        const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
        obj3 = { emoji, disabled: locked, onPressEmoji: locked ? dependencyMap : importDefault, onLongPressEmoji: openEmojiActionSheet, animateEmoji: !tmp10, isSectionNitroLocked: false };
        EmojiItem = EmojiPickerListRow.EmojiItem;
        tmp10 = require;
        tmp11 = jsx;
        const tmp7 = jsx;
        if (locked) {
          openEmojiActionSheet = dependencyMap;
        } else {
          openEmojiActionSheet = tmp8(9539).openEmojiActionSheet;
        }
        const tmp8Result = EmojiSuggestionBarUtils;
        return tmp7(EmojiEntranceAnimation, obj2, tmp8Result.getEmojiEntranceKey(tmp, index));
      }
    })
  };
  View = ReanimatedRexportDefault.View;
  return <View style={items}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiSuggestionBarLarge(ref) {
  let handlePress;
  let handlePressEmojiUnavailable;
  let lockedEmojis;
  let reducedMotion;
  let tmp12;
  let tmp4;
  let tmp5;
  let unlockedEmojis;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = EmojiSuggestionBarUtils;
  const emojiSuggestionBarState = tmpResult.useEmojiSuggestionBarState(tmp4, tmp(12138).MAX_SUGGESTIONS_LARGE, 3, tmp5);
  ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable } = emojiSuggestionBarState);
  if (0 !== unlockedEmojis.length) {
    const obj2 = { unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable };
    cResult[3] = handlePress;
    cResult[4] = handlePressEmojiUnavailable;
    cResult[5] = lockedEmojis;
    cResult[6] = reducedMotion;
    cResult[7] = unlockedEmojis;
    cResult[8] = obj2;
  }
  if (cResult[9] !== tmp10) {
    const tmp15 = jsx(native.TransitionItem, { item: tmp10, renderItem: renderEmojiSuggestionBarLargeItem });
    cResult[9] = tmp10;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[10];
  }
  return tmp12;
}) : (function EmojiSuggestionBarLarge(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = EmojiSuggestionBarUtils;
  const emojiSuggestionBarState = obj.useEmojiSuggestionBarState(merged, EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE, 3, ref);
  const unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const memo = react.useMemo(() => ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable }), items);
  return jsx(native.TransitionItem, { item: memo, renderItem: renderEmojiSuggestionBarLargeItem });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export const EmojiSuggestionBarLarge = tmp2;
