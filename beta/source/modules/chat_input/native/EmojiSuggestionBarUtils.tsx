// Module ID: 11919
// Function ID: 11920
// Name: EmojiSuggestionBarUtils
// Dependencies: [32, 19, 4825, 1074, 21, 1177, 4566, 5280, 4540, 4837, 504, 11884, 11920, 11921, 8614, 2]
// Exports: EmojiEntranceAnimation, getEmojiEntranceKey, sortEmojisForDisplay, useEmojiSuggestionBarState, useSuggestionBarHeight

// Module 11919 (EmojiSuggestionBarUtils)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import native2 from "native" /* 4540 */;
import spring from "spring" /* 5280 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, obj, set, set2;

let tmp;
const ReanimatedRexport = tmp(4566);
const timing = tmp(4837);
const UpsellTypes = Constants.UpsellTypes;
const jsx = Fragment.jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: native.STANDARD_EASING };
let closure_10 = { duration: 200, dampingRatio: 0.7 };
const __initData = { code: "function EmojiSuggestionBarUtilsTsx1(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}" };
let closure_12 = { code: "function EmojiSuggestionBarUtilsTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export { SUGGESTION_BAR_HEIGHT_TIMING };
export const sortEmojisForDisplay = function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length) {
  length = unlockedEmojis.length;
  let length2 = lockedEmojis.length;
  if (length + length2 > length) {
    const _Math2 = Math;
    const _Math3 = Math;
    const bound = Math.min(Math.ceil(length / 2), unlockedEmojis.length);
    const _Math4 = Math;
    const diff = length - bound;
    const bound1 = Math.min(length - bound, lockedEmojis.length);
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
};
export const getEmojiEntranceKey = function getEmojiEntranceKey(displayEmojis, index) {
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
};
export const EmojiEntranceAnimation = function EmojiEntranceAnimation(index) {
  index = index.index;
  const reducedMotion = index.reducedMotion;
  let sharedValue;
  const children = index.children;
  obj = index(sharedValue[6]);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue, index, reducedMotion];
  const effect = react.useEffect(() => {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * index;
    }
    set = sharedValue.set;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj = spring;
    const result = set(withDelay(num, obj.withSpring(1, closure_10)));
  }, items);
  const obj2 = index(sharedValue[6]);
  const fn = function u() {
    let items;
    obj = { opacity: sharedValue.get(), transform: items };
    items = [{ scale: sharedValue.get() }];
    ({ scale: sharedValue.get() });
    return obj;
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 4132686130287;
  fn.__initData = __initData;
  const style = obj2.useAnimatedStyle(fn);
  return jsx(reducedMotion(sharedValue[6]).View, { style, children });
};
export const useSuggestionBarHeight = function useSuggestionBarHeight(transitionState, cleanUp, arg2, onOccupiedHeightChange) {
  let closure_2;
  _require = transitionState;
  dependencyMap = arg2;
  let closure_3 = onOccupiedHeightChange;
  obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0);
  const items = [transitionState, sharedValue, cleanUp, arg2, onOccupiedHeightChange];
  const effect = sharedValue.useEffect(() => {
    let __closure;
    let tmp = require;
    if (transitionState === native2.TransitionStates.YEETED) {
      if (onOccupiedHeightChange != null) {
        tmp11(0);
      }
      set2 = sharedValue.set;
      const fn = function n(arg0) {
        const tmp = arg0;
        if (tmp) {
          obj = transitionState(closure_2[6]);
          obj.runOnJS(cleanUp)();
        }
      };
      const tmpResult = timing;
      __closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      const withTiming = tmpResult.withTiming;
      fn.__closure = __closure;
      fn.__workletHash = 15923583203906;
      fn.__initData = __initData;
      set2(withTiming(0, __closure, "respect-motion-settings", fn));
    } else {
      if (onOccupiedHeightChange != null) {
        tmp3(closure_2);
      }
      set = sharedValue.set;
      const tmpResult2 = timing;
      const result = set(tmpResult2.withTiming(closure_2, __closure));
    }
  }, items);
  return sharedValue;
};
export const useEmojiSuggestionBarState = function useEmojiSuggestionBarState(merged, MAX_SUGGESTIONS_LARGE, minUnlockedEmojis, ref) {
  let channel;
  let items2;
  let selectionEnd;
  let selectionStart;
  let suppressed;
  let text;
  const chatInputRef = merged.chatInputRef;
  let chatInputStateRef = merged.chatInputStateRef;
  let setData;
  let setDataImmediate;
  let queryStart;
  let queryEnd;
  let clear;
  obj = queryStart;
  ({ channel, suppressed } = merged);
  let tmp = setDataImmediate(queryStart.useState(closure_8), 2);
  const first = tmp[0];
  let focused = first.focused;
  ({ text, selectionStart, selectionEnd } = first);
  const tmp3 = tmp[1];
  let obj2 = chatInputRef(setData[10]);
  const items = [queryEnd];
  const stateFromStores = obj2.useStateFromStores(items, () => queryEnd.useReducedMotion);
  const tmp5 = chatInputStateRef(setData[11])(tmp3, 16);
  setData = tmp5.setData;
  setDataImmediate = tmp5.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = queryStart.useImperativeHandle(ref, () => ({ setData }), items1);
  const obj3 = { channel, text, selectionStart, selectionEnd, enabled: focused, maxCount: MAX_SUGGESTIONS_LARGE, minUnlockedEmojis };
  const tmp7 = chatInputStateRef(setData[12]);
  if (focused) {
    focused = !suppressed;
  }
  const tmp7Result = tmp7(obj3);
  queryStart = tmp7Result.queryStart;
  queryEnd = tmp7Result.queryEnd;
  clear = tmp7Result.clear;
  const obj4 = {
    unlockedEmojis: tmp7Result.unlockedEmojis,
    lockedEmojis: tmp7Result.lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: obj.useCallback((arg0) => {
      let closure_1;
      let editId;
      const combined = "" + chatInputStateRef(setData[13])(arg0) + " ";
      const current = combined.current;
      obj = { location: queryStart, length: queryEnd - queryStart, text: combined, editId };
      editId = chatInputStateRef.current.editId;
      const replaceRange = current.replaceRange;
      replaceRange(obj);
      chatInputStateRef = queryStart + combined.length;
      setDataImmediate((text) => {
        let sum;
        let text1;
        obj = { text: sum + text1.slice(queryEnd), selectionStart: selectionEnd, selectionEnd };
        const merged = Object.assign(text);
        text = text.text;
        text1 = text.text;
        sum = text.slice(0, queryStart) + combined;
        return obj;
      });
      clear();
    }, items2),
    handlePressEmojiUnavailable: obj.useCallback((animated) => {
      obj = chatInputStateRef(setData[14]);
      const obj2 = { initialUpsellKey: animated.animated ? clear.ANIMATED_EMOJI : clear.GLOBAL_EMOJI };
      const result = obj.handleShowUpsellAlert(obj2);
    }, [])
  };
  items2 = [chatInputRef, chatInputStateRef, queryStart, queryEnd, clear, setDataImmediate];
  return obj4;
};
