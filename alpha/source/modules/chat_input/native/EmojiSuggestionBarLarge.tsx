// Module ID: 12067
// Function ID: 12068
// Name: EmojiSuggestionBarLarge
// Dependencies: [32, 19, 17, 9869, 21, 4890, 587, 558, 576, 12068, 4612, 9912, 9932, 4589, 2]

// Module 12067 (EmojiSuggestionBarLarge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9869 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9912 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let tmp;
let tmp4;
const native = tmp(4589);
const ReanimatedRexport = tmp(4612);
const ReanimatedRexportDefault = tmp4(4612);
const EmojiSuggestionBarUtils = tmp(12068);
function renderEmojiSuggestionBarLargeItem(arg0, arg1, transitionState, cleanUp) {
  const merged = Object.assign(arg1);
  return <closure_11 key={arg0} transitionState={arg2} cleanUp={arg3} />;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles((arg0) => {
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
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let cleanUp;
  let closure_3;
  let emptySlot;
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
  [first, _slicedToArray] = react.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(nativeEvent) {
      closure_3(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const truncResult = Math.trunc(first / (suggestionBarHeight + PX_6));
  const bound = Math.min(truncResult, 11);
  let tmp10 = truncResult > 11;
  let tmp11 = closure_8(tmp10);
  react = tmp11;
  const tmpResult = EmojiSuggestionBarUtils;
  const sortEmojisForDisplayResult = tmpResult.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound);
  View = sortEmojisForDisplayResult;
  let length = bound;
  if (tmp10) {
    length = sortEmojisForDisplayResult.length;
  }
  const tmpResult3 = EmojiSuggestionBarUtils;
  suggestionBarHeight = tmpResult3.useSuggestionBarHeight(transitionState, cleanUp, 52);
  const tmpResult4 = ReanimatedRexport;
  class M {
    constructor() {
      const obj = { height: suggestionBarHeight.get() };
      return obj;
    }
  }
  M.__closure = { heightSv: suggestionBarHeight };
  M.__workletHash = 5553872738815;
  M.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(M);
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
      if (null == View[index]) {
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
          openEmojiActionSheet = tmp8(9932).openEmojiActionSheet;
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
}) : ((arg0) => {
  let _undefined;
  let _undefined2;
  let c3;
  let cleanUp;
  let emptySlot;
  let lockedEmojis;
  let reducedMotion;
  let tmp4;
  let transitionState;
  let unlockedEmojis;
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  let suggestionBarHeight;
  const tmp2 = dependencyMap;
  ({ unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  const tmp = importDefault;
  const PX_6 = nativeDefault.space.PX_6;
  [tmp4, c3] = _slicedToArray(react.useState(0), 2);
  const tmp3 = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const truncResult = Math.trunc(tmp4 / (suggestionBarHeight + PX_6));
  let length = Math.min(truncResult, 11);
  let tmp7 = truncResult > 11;
  const tmp8 = closure_8(tmp7);
  react = tmp8;
  let obj = EmojiSuggestionBarUtils;
  const sortEmojisForDisplayResult = obj.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length);
  let c5 = sortEmojisForDisplayResult;
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
      if (null == c5[index]) {
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
          openEmojiActionSheet = tmp8(9932).openEmojiActionSheet;
        }
        const tmp8Result = EmojiSuggestionBarUtils;
        return tmp7(EmojiEntranceAnimation, obj2, tmp8Result.getEmojiEntranceKey(tmp, index));
      }
    })
  };
  View = ReanimatedRexportDefault.View;
  return <View style={items}>{null}</View>;
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let handlePress;
  let handlePressEmojiUnavailable;
  let lockedEmojis;
  let reducedMotion;
  let tmp7;
  let unlockedEmojis;
  const obj = react2;
  const cResult = obj.c(8);
  const obj2 = EmojiSuggestionBarUtils;
  const emojiSuggestionBarState = obj2.useEmojiSuggestionBarState(arg0, EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE, 3, arg1);
  ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable } = emojiSuggestionBarState);
  if (0 !== unlockedEmojis.length) {
    const obj3 = { unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable };
    cResult[0] = handlePress;
    cResult[1] = handlePressEmojiUnavailable;
    cResult[2] = lockedEmojis;
    cResult[3] = reducedMotion;
    cResult[4] = unlockedEmojis;
    cResult[5] = obj3;
  }
  if (cResult[6] !== tmp5) {
    const tmp10 = jsx(native.TransitionItem, { item: tmp5, renderItem: renderEmojiSuggestionBarLargeItem });
    cResult[6] = tmp5;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[7];
  }
  return tmp7;
}) : ((arg0, arg1) => {
  const obj = EmojiSuggestionBarUtils;
  const emojiSuggestionBarState = obj.useEmojiSuggestionBarState(arg0, EmojiSuggestionBarUtils.MAX_SUGGESTIONS_LARGE, 3, arg1);
  const unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const memo = react.useMemo(() => ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable }), items);
  return jsx(native.TransitionItem, { item: memo, renderItem: renderEmojiSuggestionBarLargeItem });
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export const EmojiSuggestionBarLarge = forwardRefResult;
