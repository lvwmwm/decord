// Module ID: 12164
// Function ID: 12165
// Name: EmojiSuggestionBarSmall
// Dependencies: [109, 19, 9362, 21, 587, 5090, 558, 576, 12157, 4810, 9446, 9472, 4787, 2]

// Module 12164 (EmojiSuggestionBarSmall)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9362 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 9446 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 12157 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let importDefault, locked;

let closure_3 = ["anchorTop", "onOccupiedHeightChange", "ref"];
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const jsx = Fragment.jsx;
const sum = IMAGE_SIZE + 2 * nativeDefault.space.PX_8 + 2;
const metroImportDefault = sum;
const CONTAINER_SMALL_WRAPPER_HEIGHT = sum + nativeDefault.space.PX_8;
let closure_9 = createStyles.createStyles((arg0) => {
  let diff;
  let rect;
  const obj = { containerSmall: rect };
  rect = { position: "absolute", top: diff - nativeDefault.space.PX_8, right: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, height: metroImportDefault, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  diff = arg0 - metroImportDefault;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  return obj;
});
const __initData = { code: "function EmojiSuggestionBarSmallTsx1(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}" };
const __initData2 = { code: "function EmojiSuggestionBarSmallTsx2(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiSuggestionBarSmallAnimated(displayEmojis) {
  let cleanUp;
  let handlePress;
  let onOccupiedHeightChange;
  let obj = displayEmojis(handlePress[7]);
  const cResult = obj.c(11);
  displayEmojis = displayEmojis.displayEmojis;
  const reducedMotion = displayEmojis.reducedMotion;
  const tmp = handlePress;
  handlePress = displayEmojis.handlePress;
  const handlePressEmojiUnavailable = displayEmojis.handlePressEmojiUnavailable;
  const transitionState = displayEmojis.transitionState;
  ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
  const tmp3 = closure_9(displayEmojis.anchorTop);
  let obj2 = displayEmojis(handlePress[8]);
  const suggestionBarHeight = obj2.useSuggestionBarHeight(transitionState, cleanUp, CONTAINER_SMALL_WRAPPER_HEIGHT, onOccupiedHeightChange);
  const fn = function n() {
    let items;
    let obj2;
    const obj = { opacity: obj2.interpolate(suggestionBarHeight.get(), items, [0, 1]) };
    items = [0, CONTAINER_SMALL_WRAPPER_HEIGHT];
    obj2 = ReanimatedRexport;
    return obj;
  };
  const obj3 = displayEmojis(handlePress[9]);
  fn.__closure = { interpolate: displayEmojis(handlePress[9]).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT };
  fn.__workletHash = 1856279964267;
  fn.__initData = __initData;
  ({ interpolate: displayEmojis(handlePress[9]).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp6;
    if (cResult[1] === tmp3.containerSmall) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === displayEmojis) {
      if (cResult[4] === handlePress) {
        if (cResult[5] === handlePressEmojiUnavailable) {
          let tmp7;
          if (cResult[6] === reducedMotion) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            let tmp9;
            if (cResult[9] === tmp7) {
              tmp9 = cResult[10];
            }
            return tmp9;
          }
          const tmp12 = jsx(reducedMotion(tmp[9]).View, { style: tmp6, children: tmp7 });
          cResult[8] = tmp6;
          cResult[9] = tmp7;
          cResult[10] = tmp12;
          tmp9 = tmp12;
        }
      }
    }
    const mapped = displayEmojis.map((locked, index) => {
      locked = locked.locked;
      const emoji = locked.emoji;
      const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
      const EmojiItem = EmojiPickerListRow.EmojiItem;
      if (locked) {
        let openEmojiActionSheet = handlePressEmojiUnavailable;
      } else {
        openEmojiActionSheet = tmp2(9472).openEmojiActionSheet;
      }
      const tmp2Result = EmojiSuggestionBarUtils;
      return <EmojiEntranceAnimation key={tmp2Result.getEmojiEntranceKey(displayEmojis, arg1)} index={arg1} reducedMotion={reducedMotion}>{null}</EmojiEntranceAnimation>;
    });
    cResult[3] = displayEmojis;
    cResult[4] = handlePress;
    cResult[5] = handlePressEmojiUnavailable;
    cResult[6] = reducedMotion;
    cResult[7] = mapped;
    tmp7 = mapped;
  }
  let items = [tmp3.containerSmall, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.containerSmall;
  cResult[2] = items;
  tmp6 = items;
}) : (function EmojiSuggestionBarSmallAnimated(displayEmojis) {
  let cleanUp;
  let onOccupiedHeightChange;
  let reducedMotion;
  let transitionState;
  displayEmojis = displayEmojis.displayEmojis;
  ({ reducedMotion: importDefault, handlePress: dependencyMap, handlePressEmojiUnavailable: closure_3, transitionState } = displayEmojis);
  ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
  const tmp = closure_9(displayEmojis.anchorTop);
  let obj = displayEmojis(12157);
  const suggestionBarHeight = obj.useSuggestionBarHeight(transitionState, cleanUp, CONTAINER_SMALL_WRAPPER_HEIGHT, onOccupiedHeightChange);
  let obj2 = displayEmojis(4810);
  const fn = function j() {
    let items;
    let obj2;
    const obj = { opacity: obj2.interpolate(suggestionBarHeight.get(), items, [0, 1]) };
    items = [0, CONTAINER_SMALL_WRAPPER_HEIGHT];
    obj2 = ReanimatedRexport;
    return obj;
  };
  fn.__closure = { interpolate: displayEmojis(4810).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT };
  fn.__workletHash = 8299755729224;
  fn.__initData = __initData2;
  ({ interpolate: displayEmojis(4810).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let items = [tmp.containerSmall, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  return <View style={items}>{displayEmojis.map((locked, index) => {
    locked = locked.locked;
    const emoji = locked.emoji;
    const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
    const EmojiItem = EmojiPickerListRow.EmojiItem;
    if (locked) {
      let openEmojiActionSheet = closure_3;
    } else {
      openEmojiActionSheet = tmp2(9472).openEmojiActionSheet;
    }
    const tmp2Result = EmojiSuggestionBarUtils;
    return <EmojiEntranceAnimation key={tmp2Result.getEmojiEntranceKey(displayEmojis, arg1)} index={arg1} reducedMotion={importDefault}>{null}</EmojiEntranceAnimation>;
  })}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiSuggestionBarSmall(anchorTop) {
  let _require;
  let handlePress;
  let handlePressEmojiUnavailable;
  let lockedEmojis;
  let reducedMotion;
  let tmp6;
  let tmp7;
  let unlockedEmojis;
  const obj = require("react");
  const cResult = obj.c(19);
  if (cResult[0] !== anchorTop) {
    anchorTop = anchorTop.anchorTop;
    _require = anchorTop;
    const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
    importDefault = onOccupiedHeightChange;
    const tmp10 = _objectWithoutProperties(anchorTop, closure_3);
    cResult[0] = anchorTop;
    cResult[1] = anchorTop;
    cResult[2] = onOccupiedHeightChange;
    cResult[3] = tmp10;
    cResult[4] = anchorTop.ref;
    tmp7 = ref;
    tmp6 = tmp10;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const tmpResult = require("EmojiSuggestionBarUtils");
  const emojiSuggestionBarState = tmpResult.useEmojiSuggestionBarState(tmp6, tmp(12157).MAX_SUGGESTIONS_LARGE, 1, tmp7);
  ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable } = emojiSuggestionBarState);
  if (0 !== unlockedEmojis.length) {
    if (cResult[5] === lockedEmojis) {
      let tmp13;
      if (cResult[6] === unlockedEmojis) {
        tmp13 = cResult[7];
      }
      const obj2 = { displayEmojis: tmp13, reducedMotion, handlePress, handlePressEmojiUnavailable };
      cResult[8] = handlePress;
      cResult[9] = handlePressEmojiUnavailable;
      cResult[10] = reducedMotion;
      cResult[11] = tmp13;
      cResult[12] = obj2;
    }
    const tmpResult2 = require("EmojiSuggestionBarUtils");
    const sortEmojisForDisplayResult = tmpResult2.sortEmojisForDisplay(unlockedEmojis, lockedEmojis.slice(0, 2), 3);
    cResult[5] = lockedEmojis;
    cResult[6] = unlockedEmojis;
    cResult[7] = sortEmojisForDisplayResult;
    tmp13 = sortEmojisForDisplayResult;
  }
  if (cResult[13] === tmp4) {
    let tmp16;
    if (cResult[14] === tmp5) {
      tmp16 = cResult[15];
    }
    if (cResult[16] === tmp12) {
      let tmp17;
      if (cResult[17] === tmp16) {
        tmp17 = cResult[18];
      }
      return tmp17;
    }
    const tmp19 = jsx(require("native").TransitionItem, { item: tmp12, renderItem: tmp16 });
    cResult[16] = tmp12;
    cResult[17] = tmp16;
    cResult[18] = tmp19;
    tmp17 = tmp19;
  }
  class O {
    constructor(arg0, arg1, arg2, arg3) {
      obj = {};
      merged = Object.assign(arg1);
      obj.anchorTop = closure_0;
      obj.onOccupiedHeightChange = closure_1;
      obj.transitionState = arg2;
      obj.cleanUp = arg3;
      return jsx(EmojiSuggestionBarSmallAnimated, obj, anchorTop);
    }
  }
  cResult[13] = tmp4;
  cResult[14] = tmp5;
  cResult[15] = O;
  tmp16 = O;
}) : (function EmojiSuggestionBarSmall(anchorTop) {
  anchorTop = anchorTop.anchorTop;
  const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
  const ref = anchorTop.ref;
  let merged = Object.assign(anchorTop, Object.assign({ anchorTop: 0, onOccupiedHeightChange: 0, ref: 0 }));
  let unlockedEmojis;
  let obj = anchorTop(unlockedEmojis[8]);
  const emojiSuggestionBarState = obj.useEmojiSuggestionBarState(merged, anchorTop(unlockedEmojis[8]).MAX_SUGGESTIONS_LARGE, 1, ref);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const items1 = [anchorTop, onOccupiedHeightChange];
  const item = handlePress.useMemo(() => {
    let obj2;
    const obj = { displayEmojis: obj2.sortEmojisForDisplay(unlockedEmojis, lockedEmojis.slice(0, 2), 3), reducedMotion, handlePress, handlePressEmojiUnavailable };
    obj2 = EmojiSuggestionBarUtils;
    return obj;
  }, items);
  const renderItem = handlePress.useCallback((arg0, arg1, transitionState, cleanUp) => {
    const merged = Object.assign(arg1);
    return <closure_12 key={arg0} anchorTop={anchorTop} onOccupiedHeightChange={onOccupiedHeightChange} transitionState={arg2} cleanUp={arg3} />;
  }, items1);
  return handlePressEmojiUnavailable(anchorTop(unlockedEmojis[12]).TransitionItem, { item, renderItem });
});
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarSmall.tsx");

export const EmojiSuggestionBarSmall = tmp3;
