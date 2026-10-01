// Module ID: 11918
// Function ID: 11919
// Name: EmojiSuggestionBarLarge
// Dependencies: [32, 19, 17, 9753, 21, 4836, 576, 11919, 4566, 9770, 9789, 4540, 2]

// Module 11918 (EmojiSuggestionBarLarge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9753 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9770 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 11919 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const ReanimatedRexportDefault = tmp(4566);
function EmojiSuggestionBarLargeAnimated(arg0) {
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
  const fn = function f() {
    const obj = { height: suggestionBarHeight.get() };
    return obj;
  };
  fn.__closure = { heightSv: suggestionBarHeight };
  fn.__workletHash = 5553872738815;
  fn.__initData = __initData;
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
          openEmojiActionSheet = tmp8(9789).openEmojiActionSheet;
        }
        const tmp8Result = EmojiSuggestionBarUtils;
        return tmp7(EmojiEntranceAnimation, obj2, tmp8Result.getEmojiEntranceKey(tmp, index));
      }
    })
  };
  View = ReanimatedRexportDefault.View;
  return <View style={items}>{null}</View>;
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
const __initData = { code: "function EmojiSuggestionBarLargeTsx1(){const{heightSv}=this.__closure;return{height:heightSv.get()};}" };
const forwardRefResult = react.forwardRef((merged, ref) => {
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

export const EmojiSuggestionBarLarge = forwardRefResult;
