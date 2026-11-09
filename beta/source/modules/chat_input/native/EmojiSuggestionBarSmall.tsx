// Module ID: 14239
// Function ID: 14240
// Name: EmojiSuggestionBarSmall
// Dependencies: [19, 10064, 21, 575, 5140, 14224, 1652, 10147, 10171, 5199, 2]
// Exports: EmojiSuggestionBarSmall

// Module 14239 (EmojiSuggestionBarSmall)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 10064 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 10147 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 14224 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let locked;

function EmojiSuggestionBarSmallAnimated(displayEmojis) {
  let cleanUp;
  let onOccupiedHeightChange;
  let reducedMotion;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let transitionState;
  displayEmojis = displayEmojis.displayEmojis;
  ({ reducedMotion: importDefault, handlePress: dependencyMap, handlePressEmojiUnavailable: react, transitionState } = displayEmojis);
  ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
  const tmp2 = dependencyMap;
  const tmp = closure_7(displayEmojis.anchorTop);
  let obj = displayEmojis(14224);
  const suggestionBarHeight = obj.useSuggestionBarHeight(transitionState, cleanUp, closure_6, onOccupiedHeightChange);
  let tmp4 = displayEmojis(1652);
  let items = [closure_8, , , ];
  const useAnimatedStyle = tmp4.useAnimatedStyle;
  items[1] = displayEmojis(1652).interpolate;
  items[2] = suggestionBarHeight;
  items[3] = closure_6;
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class EmojiSuggestionBarSmallTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), items, [0, 1]) };
      items = [0, c2];
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  EmojiSuggestionBarSmallTsx1.__closure = items1;
  EmojiSuggestionBarSmallTsx1.__workletHash = 1179846537362;
  EmojiSuggestionBarSmallTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(EmojiSuggestionBarSmallTsx1);
  const items2 = [tmp.containerSmall, animatedStyle];
  const View = _modDef1652.View;
  return <View style={items2}>{displayEmojis.map((locked, index) => {
    locked = locked.locked;
    const emoji = locked.emoji;
    const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
    const EmojiItem = EmojiPickerListRow.EmojiItem;
    if (locked) {
      let openEmojiActionSheet = react;
    } else {
      openEmojiActionSheet = tmp2(10171).openEmojiActionSheet;
    }
    const tmp2Result = EmojiSuggestionBarUtils;
    return <EmojiEntranceAnimation key={tmp2Result.getEmojiEntranceKey(displayEmojis, arg1)} index={arg1} reducedMotion={importDefault}>{null}</EmojiEntranceAnimation>;
  })}</View>;
}
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const jsx = Fragment.jsx;
const sum = IMAGE_SIZE + 2 * nativeDefault.space.PX_8 + 2;
const hasOwnProperty = sum;
let closure_6 = sum + nativeDefault.space.PX_8;
let closure_7 = createStyles.createStyles((arg0) => {
  let diff;
  let rect;
  const obj = { containerSmall: rect };
  rect = { position: "absolute", top: diff - nativeDefault.space.PX_8, right: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, height: hasOwnProperty, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  diff = arg0 - hasOwnProperty;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  return obj;
});
let closure_8 = { code: "(function EmojiSuggestionBarSmallTsx1(){let[interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT]=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};})" };
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
