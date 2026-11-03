// Module ID: 14120
// Function ID: 14121
// Name: EmojiSuggestionBarLarge
// Dependencies: [32, 19, 17, 10073, 21, 5141, 575, 14121, 1652, 10156, 10180, 5207, 2]
// Exports: EmojiSuggestionBarLarge

// Module 14120 (EmojiSuggestionBarLarge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5207 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 10073 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 10156 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 14121 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let tmp;
let tmp10;
const _mod1652 = tmp10(1652);
const _modDef1652 = tmp(1652);
function EmojiSuggestionBarLargeAnimated(arg0) {
  let _undefined;
  let _undefined2;
  let c3;
  let cleanUp;
  let emptySlot;
  let lockedEmojis;
  let reducedMotion;
  let require;
  let tmp12;
  let tmp13;
  let tmp4;
  let transitionState;
  let unlockedEmojis;
  ({ reducedMotion: require, handlePress: importDefault, handlePressEmojiUnavailable: dependencyMap } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  const tmp2 = dependencyMap;
  ({ unlockedEmojis, lockedEmojis, transitionState, cleanUp } = arg0);
  const tmp = importDefault;
  const PX_6 = nativeDefault.space.PX_6;
  [tmp4, c3] = _slicedToArray(react.useState(0), 2);
  const tmp3 = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const truncResult = Math.trunc(tmp4 / (IMAGE_SIZE + PX_6));
  const bound = Math.min(truncResult, 11);
  const tmp8 = truncResult > 11;
  const tmp9 = closure_8(tmp8);
  react = tmp9;
  let tmp10 = require;
  let obj = EmojiSuggestionBarUtils;
  const sortEmojisForDisplayResult = obj.sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound);
  let c5 = sortEmojisForDisplayResult;
  let length = bound;
  if (tmp8) {
    length = sortEmojisForDisplayResult.length;
  }
  const tmp10Result = EmojiSuggestionBarUtils;
  const suggestionBarHeight = tmp10Result.useSuggestionBarHeight(transitionState, cleanUp, 52);
  const items = [closure_9, suggestionBarHeight];
  let c0;
  [tmp12, tmp13] = items;
  const tmp10Result2 = _mod1652;
  class EmojiSuggestionBarLargeTsx1 {
    constructor() {
      const obj = { height: _undefined.get() };
      return obj;
    }
  }
  const items1 = [tmp13];
  EmojiSuggestionBarLargeTsx1.__closure = items1;
  EmojiSuggestionBarLargeTsx1.__workletHash = 10647028871878;
  EmojiSuggestionBarLargeTsx1.__initData = tmp12;
  const animatedStyle = tmp10Result2.useAnimatedStyle(EmojiSuggestionBarLargeTsx1);
  const items2 = [tmp9.containerLargeWrapper, animatedStyle];
  let obj3 = {
    style: tmp9.containerLarge,
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
          openEmojiActionSheet = tmp8(10180).openEmojiActionSheet;
        }
        const tmp8Result = EmojiSuggestionBarUtils;
        return tmp7(EmojiEntranceAnimation, obj2, tmp8Result.getEmojiEntranceKey(tmp, index));
      }
    })
  };
  View = _modDef1652.View;
  return <View style={items2}>{null}</View>;
}
function renderEmojiSuggestionBarLargeItem(arg0, arg1, transitionState, cleanUp) {
  const merged = Object.assign(arg1);
  return <EmojiSuggestionBarLargeAnimated key={arg0} transitionState={arg2} cleanUp={arg3} />;
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
let closure_9 = { code: "(function EmojiSuggestionBarLargeTsx1(){let[heightSv]=this.__closure;return{height:heightSv.get()};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarLarge.tsx");

export function EmojiSuggestionBarLarge(ref) {
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
}
