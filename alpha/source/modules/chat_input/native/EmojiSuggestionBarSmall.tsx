// Module ID: 13985
// Function ID: 13986
// Name: EmojiSuggestionBarSmall
// Dependencies: [19, 9942, 21, 575, 5014, 13975, 5095, 10025, 10050, 5080, 2]
// Exports: EmojiSuggestionBarSmall

// Module 13985 (EmojiSuggestionBarSmall)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9942 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 10025 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 13975 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let locked;

function EmojiSuggestionBarSmallAnimated(displayEmojis) {
  let cleanUp;
  let items;
  let onOccupiedHeightChange;
  let reducedMotion;
  let transitionState;
  displayEmojis = displayEmojis.displayEmojis;
  ({ reducedMotion: importDefault, handlePress: dependencyMap, handlePressEmojiUnavailable: react, transitionState } = displayEmojis);
  ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
  const tmp = closure_7(displayEmojis.anchorTop);
  let obj = displayEmojis(13975);
  const suggestionBarHeight = obj.useSuggestionBarHeight(transitionState, cleanUp, CONTAINER_SMALL_WRAPPER_HEIGHT, onOccupiedHeightChange);
  let obj2 = displayEmojis(5095);
  class A {
    constructor() {
      let items;
      let obj2;
      const obj = { opacity: obj2.interpolate(suggestionBarHeight.get(), items, [0, 1]) };
      items = [0, CONTAINER_SMALL_WRAPPER_HEIGHT];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  A.__closure = { interpolate: displayEmojis(5095).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT };
  A.__workletHash = 1856279964267;
  A.__initData = __initData;
  ({ interpolate: displayEmojis(5095).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT });
  const animatedStyle = obj2.useAnimatedStyle(A);
  const obj4 = {
    style: items,
    children: displayEmojis.map((locked, index) => {
      locked = locked.locked;
      const emoji = locked.emoji;
      const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
      const EmojiItem = EmojiPickerListRow.EmojiItem;
      if (locked) {
        let openEmojiActionSheet = react;
      } else {
        openEmojiActionSheet = tmp2(10050).openEmojiActionSheet;
      }
      const tmp2Result = EmojiSuggestionBarUtils;
      return <EmojiEntranceAnimation key={tmp2Result.getEmojiEntranceKey(displayEmojis, arg1)} index={arg1} reducedMotion={importDefault}>{null}</EmojiEntranceAnimation>;
    })
  };
  items = [tmp.containerSmall, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  return suggestionBarHeight(View, obj4);
}
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const jsx = Fragment.jsx;
const sum = IMAGE_SIZE + 2 * nativeDefault.space.PX_8 + 2;
const hasOwnProperty = sum;
const CONTAINER_SMALL_WRAPPER_HEIGHT = sum + nativeDefault.space.PX_8;
let closure_7 = createStyles.createStyles((arg0) => {
  let diff;
  let rect;
  const obj = { containerSmall: rect };
  rect = { position: "absolute", top: diff - nativeDefault.space.PX_8, right: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, height: hasOwnProperty, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  diff = arg0 - hasOwnProperty;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  return obj;
});
const __initData = { code: "function EmojiSuggestionBarSmallTsx1(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}" };
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarSmall.tsx");

export function EmojiSuggestionBarSmall(anchorTop) {
  anchorTop = anchorTop.anchorTop;
  const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
  const ref = anchorTop.ref;
  let merged = Object.assign(anchorTop, Object.assign({ anchorTop: 0, onOccupiedHeightChange: 0, ref: 0 }));
  let unlockedEmojis;
  let obj = anchorTop(unlockedEmojis[5]);
  const emojiSuggestionBarState = obj.useEmojiSuggestionBarState(merged, anchorTop(unlockedEmojis[5]).MAX_SUGGESTIONS_LARGE, 1, ref);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const items1 = [anchorTop, onOccupiedHeightChange];
  const item = lockedEmojis.useMemo(() => {
    let obj2;
    const obj = { displayEmojis: obj2.sortEmojisForDisplay(unlockedEmojis, lockedEmojis.slice(0, 2), 3), reducedMotion, handlePress, handlePressEmojiUnavailable };
    obj2 = EmojiSuggestionBarUtils;
    return obj;
  }, items);
  const renderItem = lockedEmojis.useCallback((arg0, arg1, transitionState, cleanUp) => {
    const merged = Object.assign(arg1);
    return <EmojiSuggestionBarSmallAnimated key={arg0} anchorTop={anchorTop} onOccupiedHeightChange={onOccupiedHeightChange} transitionState={arg2} cleanUp={arg3} />;
  }, items1);
  return reducedMotion(anchorTop(unlockedEmojis[9]).TransitionItem, { item, renderItem });
}
