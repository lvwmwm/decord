// Module ID: 13975
// Function ID: 13976
// Name: EmojiSuggestionBarUtils
// Dependencies: [32, 19, 5015, 1072, 21, 1187, 5095, 5637, 5080, 5254, 504, 7326, 7351, 13940, 13976, 12434, 10017, 9785, 2]
// Exports: EmojiEntranceAnimation, getEmojiEntranceKey, getEmojiIdentity, sortEmojisForDisplay, useEmojiSuggestionBarState, useSuggestionBarHeight

// Module 13975 (EmojiSuggestionBarUtils)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import native2 from "native" /* 5080 */;
import spring from "spring" /* 5637 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9785 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, obj, set, set2;

let tmp;
const ReanimatedRexport = tmp(5095);
const timing = tmp(5254);
const UpsellTypes = Constants.UpsellTypes;
const jsx = Fragment.jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: native.STANDARD_EASING };
let obj2 = { duration: 200, dampingRatio: 0.7 };
const __initData = { code: "function EmojiSuggestionBarUtilsTsx1(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}" };
let closure_12 = { code: "function EmojiSuggestionBarUtilsTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export { SUGGESTION_BAR_HEIGHT_TIMING };
export function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, length) {
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
    const result = set(withDelay(num, obj.withSpring(1, obj2)));
  }, items);
  obj2 = index(sharedValue[6]);
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
}
export function useSuggestionBarHeight(transitionState, cleanUp, arg2, onOccupiedHeightChange) {
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
  obj = setData;
  ({ channel, suppressed } = merged);
  const tmp = analyticsLocations(setData.useState(clear), 2);
  const first = tmp[0];
  ({ focused, text } = first);
  dependencyMap = text;
  ({ selectionStart, selectionEnd } = first);
  let tmp3 = tmp[1];
  obj2 = chatInputRef(504);
  const items = [setDataImmediate];
  const stateFromStores = obj2.useStateFromStores(items, () => setDataImmediate.useReducedMotion);
  const tmp5 = chatInputStateRef(7326);
  analyticsLocations = tmp5(chatInputStateRef(7351).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp6 = chatInputStateRef(13940)(tmp3, 16);
  setData = tmp6.setData;
  setDataImmediate = tmp6.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = setData.useImperativeHandle(ref, () => ({ setData }), items1);
  let obj3 = { channel, text, selectionStart, selectionEnd, enabled: focused, maxCount: MAX_SUGGESTIONS_LARGE, minUnlockedEmojis };
  const tmp8 = chatInputStateRef(13976);
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
    obj = /\s/;
    let str2 = " ";
    let str3 = " ";
    const str = _undefined;
    if (obj.test(_undefined.charAt(queryEnd - 1))) {
      str3 = "";
    }
    obj2 = /\s/;
    if (obj2.test(str.charAt(queryEnd))) {
      str2 = "";
    }
    const combined = "" + str3 + chatInputStateRef(_undefined[15])(emoji) + str2;
    const current = combined.current;
    const obj3 = { location: queryEnd, length: 0, text: combined, editId };
    editId = chatInputStateRef.current.editId;
    const replaceRange = current.replaceRange;
    replaceRange(obj3);
    const tmp2 = chatInputStateRef;
    chatInputStateRef = tmp + combined.length;
    setDataImmediate((text) => {
      let sum;
      let text1;
      obj = { text: sum + text1.slice(queryEnd), selectionStart: selectionEnd, selectionEnd };
      const merged = Object.assign(text);
      text = text.text;
      text1 = text.text;
      sum = text.slice(0, queryEnd) + combined;
      return obj;
    });
    clear();
    const obj4 = { emoji, displayedSuggestions: unlockedEmojis };
    tmp2(_undefined[16])(obj4);
  }, items2);
  let obj4 = {
    unlockedEmojis,
    lockedEmojis,
    reducedMotion: stateFromStores,
    handlePress: callback,
    handlePressEmojiUnavailable: obj.useCallback((animated) => {
      obj = PremiumUpsellUtilsDefault;
      obj2 = { initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI, analyticsLocations };
      const result = obj.handleShowUpsellAlert(obj2);
    }, items3)
  };
  return obj4;
}
