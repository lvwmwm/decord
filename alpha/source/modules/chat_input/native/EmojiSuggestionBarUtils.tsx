// Module ID: 14221
// Function ID: 14222
// Name: EmojiSuggestionBarUtils
// Dependencies: [32, 19, 5144, 1072, 21, 1187, 1652, 5773, 5209, 5380, 1705, 504, 7465, 7490, 14186, 14222, 12799, 10204, 9941, 2]
// Exports: EmojiEntranceAnimation, getEmojiEntranceKey, getEmojiIdentity, sortEmojisForDisplay, useEmojiSuggestionBarState, useSuggestionBarHeight

// Module 14221 (EmojiSuggestionBarUtils)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import native2 from "native" /* 5209 */;
import spring_spring from "spring/spring" /* 5773 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9941 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set, set2, tmp2;

let tmp;
const _mod1705 = tmp(1705);
const timing_timing = tmp(5380);
const UpsellTypes = Constants.UpsellTypes;
const jsx = Fragment.jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: native.STANDARD_EASING };
let obj2 = { duration: 133, dampingRatio: 0.7 };
let closure_11 = { code: "(function EmojiSuggestionBarUtilsTsx1(){let[progress]=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};})" };
let closure_12 = { code: "(function EmojiSuggestionBarUtilsTsx2(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished){scheduleOnRN(cleanUp);}})" };
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export { SUGGESTION_BAR_HEIGHT_TIMING };
export function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound) {
  let length = unlockedEmojis.length;
  let length2 = lockedEmojis.length;
  if (length + length2 > bound) {
    const _Math2 = Math;
    const _Math3 = Math;
    bound = Math.min(Math.ceil(bound / 2), unlockedEmojis.length);
    const _Math4 = Math;
    const diff = bound - bound;
    const bound1 = Math.min(bound - bound, lockedEmojis.length);
    const diff1 = diff - bound1;
    length2 = bound1;
    length = bound;
    if (diff1 > 0) {
      const _Math = Math;
      length = Math.min(bound + diff1, unlockedEmojis.length);
      length2 = bound1;
    }
  }
  const substr = unlockedEmojis.slice(0, length);
  const items = [...substr.map((emoji) => ({ emoji, locked: false }))];
  const substr1 = lockedEmojis.slice(0, length2);
  HermesBuiltin.arraySpread(items, substr1.map((emoji) => ({ emoji, locked: true })), tmp2);
  return items;
}
export function getEmojiIdentity(id) {
  let surrogates = id.id;
  if (surrogates == null) {
    surrogates = id.surrogates;
  }
  return surrogates;
}
export function getEmojiEntranceKey(displayEmojis, index) {
  const mapped = displayEmojis.map((emoji) => {
    emoji = emoji.emoji;
    let surrogates = emoji.id;
    if (surrogates == null) {
      surrogates = emoji.surrogates;
    }
    return surrogates;
  });
  const joined = mapped.join(",");
  let emoji = displayEmojis[index].emoji;
  let surrogates = emoji.id;
  if (surrogates == null) {
    surrogates = emoji.surrogates;
  }
  return "" + joined + ":" + surrogates + ":" + index;
}
export const ITEM_ENTRANCE_SPRING_CONFIG = obj2;
export function EmojiEntranceAnimation(index) {
  let tmp4;
  let tmp5;
  index = index.index;
  const reducedMotion = index.reducedMotion;
  let sharedValue;
  const children = index.children;
  let obj = index(sharedValue[6]);
  const tmp = sharedValue;
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue, index, reducedMotion];
  const effect = react.useEffect(() => {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * index;
    }
    set = sharedValue.set;
    const withDelay = _mod1652.withDelay;
    _mod1652;
    const obj = spring_spring;
    const result = set(withDelay(num, obj.withSpring(1, obj2)));
  }, items);
  obj2 = index(sharedValue[6]);
  const items1 = [closure_11, sharedValue];
  let c0;
  [tmp4, tmp5] = items1;
  class EmojiSuggestionBarUtilsTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items2 = [tmp5];
  EmojiSuggestionBarUtilsTsx1.__closure = items2;
  EmojiSuggestionBarUtilsTsx1.__workletHash = 4604680595350;
  EmojiSuggestionBarUtilsTsx1.__initData = tmp4;
  const style = obj2.useAnimatedStyle(EmojiSuggestionBarUtilsTsx1);
  return jsx(reducedMotion(tmp[6]).View, { style, children });
}
export function useSuggestionBarHeight(transitionState, cleanUp, arg2, onOccupiedHeightChange) {
  let closure_2;
  _require = transitionState;
  let closure_1 = cleanUp;
  dependencyMap = arg2;
  let closure_3 = onOccupiedHeightChange;
  const obj = require("module_1652");
  const sharedValue = obj.useSharedValue(0);
  let items = [transitionState, sharedValue, cleanUp, arg2, onOccupiedHeightChange];
  const effect = sharedValue.useEffect(() => {
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp = require;
    if (transitionState === native2.TransitionStates.YEETED) {
      if (onOccupiedHeightChange != null) {
        tmp11(0);
      }
      set2 = sharedValue.set;
      const items = [closure_12, , ];
      const withTiming = timing_timing.withTiming;
      const tmpResult = timing_timing;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = cleanUp;
      let c0;
      let c1;
      [tmp20, tmp21, tmp22] = items;
      class EmojiSuggestionBarUtilsTsx2 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp4 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp21, tmp22];
      EmojiSuggestionBarUtilsTsx2.__closure = items1;
      EmojiSuggestionBarUtilsTsx2.__workletHash = 10457533943450;
      EmojiSuggestionBarUtilsTsx2.__initData = tmp20;
      set2(withTiming(0, obj, "respect-motion-settings", EmojiSuggestionBarUtilsTsx2));
    } else {
      if (onOccupiedHeightChange != null) {
        tmp3(closure_2);
      }
      set = sharedValue.set;
      const tmpResult2 = timing_timing;
      const result = set(tmpResult2.withTiming(closure_2, obj));
    }
  }, items);
  return sharedValue;
}
export function useEmojiSuggestionBarState(merged, MAX_SUGGESTIONS_LARGE, minUnlockedEmojis, ref) {
  let _undefined;
  let channel;
  let focused;
  let selectionEnd;
  let selectionStart;
  let suppressed;
  let text;
  const chatInputRef = merged.chatInputRef;
  let chatInputStateRef = merged.chatInputStateRef;
  let analyticsLocations;
  let setData;
  let setDataImmediate;
  let unlockedEmojis;
  let queryEnd;
  let clear;
  let obj = setData;
  ({ channel, suppressed } = merged);
  const tmp = analyticsLocations(setData.useState(clear), 2);
  const first = tmp[0];
  ({ focused, text } = first);
  dependencyMap = text;
  ({ selectionStart, selectionEnd } = first);
  const tmp3 = tmp[1];
  obj2 = chatInputRef(504);
  const items = [setDataImmediate];
  const stateFromStores = obj2.useStateFromStores(items, () => setDataImmediate.useReducedMotion);
  let tmp5 = chatInputStateRef(7465);
  analyticsLocations = tmp5(chatInputStateRef(7490).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp6 = chatInputStateRef(14186)(tmp3, 16);
  setData = tmp6.setData;
  setDataImmediate = tmp6.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = setData.useImperativeHandle(ref, () => ({ setData }), items1);
  let obj3 = { channel, text, selectionStart, selectionEnd, enabled: focused, maxCount: MAX_SUGGESTIONS_LARGE, minUnlockedEmojis };
  const tmp8 = chatInputStateRef(14222);
  if (focused) {
    focused = !suppressed;
  }
  const tmp8Result = tmp8(obj3);
  unlockedEmojis = tmp8Result.unlockedEmojis;
  queryEnd = tmp8Result.queryEnd;
  clear = tmp8Result.clear;
  const items2 = [chatInputRef, chatInputStateRef, text, queryEnd, clear, setDataImmediate, unlockedEmojis];
  const lockedEmojis = tmp8Result.lockedEmojis;
  const items3 = [analyticsLocations];
  const callback = obj.useCallback((emoji) => {
    let closure_1;
    let editId;
    if (queryEnd > chatInputStateRef.current.text.length) {
      clear();
    } else {
      let str2 = " ";
      let str = " ";
      const obj4 = /\s/;
      const str4 = _undefined;
      if (obj4.test(_undefined.charAt(queryEnd - 1))) {
        str = "";
      }
      let obj = /\s/;
      if (obj.test(str4.charAt(queryEnd))) {
        str2 = "";
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + str + chatInputStateRef(_undefined[16])(emoji) + str2;
      const current = combined.current;
      obj2 = { location: queryEnd, length: 0, text: combined, editId };
      editId = tmp2.current.editId;
      const replaceRange = current.replaceRange;
      replaceRange(obj2);
      const tmp4 = chatInputStateRef;
      chatInputStateRef = tmp + combined.length;
      setDataImmediate((text) => {
        let sum;
        let text1;
        const obj = { text: sum + text1.slice(queryEnd), selectionStart: selectionEnd, selectionEnd };
        const merged = Object.assign(text);
        text = text.text;
        text1 = text.text;
        sum = text.slice(0, queryEnd) + combined;
        return obj;
      });
      clear();
      const obj3 = { emoji, displayedSuggestions: unlockedEmojis };
      tmp4(_undefined[17])(obj3);
    }
  }, items2);
  let obj4 = {
    unlockedEmojis,
    lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: callback,
    handlePressEmojiUnavailable: obj.useCallback((animated) => {
      const obj = PremiumUpsellUtilsDefault;
      obj2 = { initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI, analyticsLocations };
      const result = obj.handleShowUpsellAlert(obj2);
    }, items3)
  };
  return obj4;
}
