// Module ID: 13343
// Function ID: 13344
// Name: EmojiSuggestionBarUtils
// Dependencies: [32, 19, 4973, 1084, 21, 1199, 558, 576, 5053, 5248, 5038, 5207, 504, 7255, 7280, 13308, 13344, 12148, 9905, 9674, 2]
// Exports: getEmojiEntranceKey, getEmojiIdentity, sortEmojisForDisplay

// Module 13343 (EmojiSuggestionBarUtils)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1084 */;
import native from "native" /* 1199 */;
import native2 from "native" /* 5038 */;
import spring from "spring" /* 5248 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9674 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, obj, obj1, obj5, replaceRangeResult, set, set2;

let tmp;
const ReanimatedRexport = tmp(5053);
const timing = tmp(5207);
const UpsellTypes = Constants.UpsellTypes;
const jsx = Fragment.jsx;
let closure_8 = { focused: false, text: "", selectionStart: 0, selectionEnd: 0 };
const SUGGESTION_BAR_HEIGHT_TIMING = { duration: 250, easing: native.STANDARD_EASING };
let obj2 = { duration: 200, dampingRatio: 0.7 };
const __initData = { code: "function EmojiSuggestionBarUtilsTsx1(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}" };
const __initData2 = { code: "function EmojiSuggestionBarUtilsTsx2(){const{progress}=this.__closure;return{opacity:progress.get(),transform:[{scale:progress.get()}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = { code: "function EmojiSuggestionBarUtilsTsx3(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
let closure_14 = { code: "function EmojiSuggestionBarUtilsTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished){runOnJS(cleanUp)();}}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiEntranceAnimation(index) {
  let sharedValue;
  const tmp2 = sharedValue;
  obj = index(sharedValue[7]);
  const cResult = obj.c(8);
  const tmp = index;
  index = index.index;
  const reducedMotion = index.reducedMotion;
  const children = index.children;
  obj2 = index(sharedValue[8]);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] === index) {
    if (cResult[1] === sharedValue) {
      let tmp5;
      let tmp6;
      if (cResult[2] === reducedMotion) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const effect = react.useEffect(tmp5, tmp6);
      const fn2 = function f() {
        let items;
        obj = { opacity: sharedValue.get(), transform: items };
        items = [{ scale: sharedValue.get() }];
        ({ scale: sharedValue.get() });
        return obj;
      };
      const obj3 = { progress: sharedValue };
      fn2.__closure = obj3;
      let num = 4132686130287;
      fn2.__workletHash = 4132686130287;
      fn2.__initData = __initData;
      const tmpResult = tmp(tmp2[8]);
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[5] === animatedStyle) {
        let tmp11;
        if (cResult[6] === children) {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
      const tmp14 = jsx(reducedMotion(tmp2[8]).View, { style: animatedStyle, children });
      cResult[5] = animatedStyle;
      cResult[6] = children;
      cResult[7] = tmp14;
      tmp11 = tmp14;
    }
  }
  const fn = function s() {
    let num = 0;
    if (!reducedMotion) {
      num = 20 * index;
    }
    set = sharedValue.set;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj = spring;
    const result = set(withDelay(num, obj.withSpring(1, obj2)));
  };
  let items = [sharedValue, index, reducedMotion];
  cResult[0] = index;
  cResult[1] = sharedValue;
  cResult[2] = reducedMotion;
  cResult[3] = fn;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (function EmojiEntranceAnimation(index) {
  index = index.index;
  const reducedMotion = index.reducedMotion;
  let sharedValue;
  const children = index.children;
  obj = index(sharedValue[8]);
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
  obj2 = index(sharedValue[8]);
  const fn = function u() {
    let items;
    obj = { opacity: sharedValue.get(), transform: items };
    items = [{ scale: sharedValue.get() }];
    ({ scale: sharedValue.get() });
    return obj;
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 13826443864972;
  fn.__initData = __initData2;
  const style = obj2.useAnimatedStyle(fn);
  return jsx(reducedMotion(sharedValue[8]).View, { style, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuggestionBarHeight(arg0, cleanUp, arg2, arg3) {
  let closure_0;
  let closure_2;
  const _require = arg0;
  dependencyMap = arg2;
  let closure_3 = arg3;
  obj = require("react");
  const cResult = obj.c(7);
  obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(0);
  if (cResult[0] === cleanUp) {
    if (cResult[1] === arg2) {
      if (cResult[2] === arg3) {
        if (cResult[3] === arg0) {
          let tmp3;
          let tmp4;
          if (cResult[4] === sharedValue) {
            tmp3 = cResult[5];
            tmp4 = cResult[6];
          }
          const effect = sharedValue.useEffect(tmp3, tmp4);
          return sharedValue;
        }
      }
    }
  }
  let fn = function l() {
    let __closure;
    let tmp = require;
    if (closure_0 === native2.TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      set2 = sharedValue.set;
      const fn = function n(arg0) {
        const tmp = arg0;
        if (tmp) {
          obj = closure_0(closure_2[8]);
          obj.runOnJS(cleanUp)();
        }
      };
      const tmpResult = timing;
      __closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      const withTiming = tmpResult.withTiming;
      fn.__closure = __closure;
      fn.__workletHash = 12392976434275;
      fn.__initData = __initData;
      set2(withTiming(0, __closure, "respect-motion-settings", fn));
    } else {
      if (closure_3 != null) {
        tmp3(closure_2);
      }
      set = sharedValue.set;
      const tmpResult2 = timing;
      const result = set(tmpResult2.withTiming(closure_2, __closure));
    }
  };
  const items = [arg0, sharedValue, cleanUp, arg2, arg3];
  cResult[0] = cleanUp;
  cResult[1] = arg2;
  cResult[2] = arg3;
  cResult[3] = arg0;
  cResult[4] = sharedValue;
  cResult[5] = fn;
  cResult[6] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function useSuggestionBarHeight(arg0, cleanUp, arg2, arg3) {
  let closure_0;
  let closure_2;
  const _require = arg0;
  dependencyMap = arg2;
  let closure_3 = arg3;
  obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0);
  const items = [arg0, sharedValue, cleanUp, arg2, arg3];
  const effect = sharedValue.useEffect(() => {
    let __closure;
    let tmp = require;
    if (closure_0 === native2.TransitionStates.YEETED) {
      if (closure_3 != null) {
        tmp11(0);
      }
      set2 = sharedValue.set;
      const fn = function n(arg0) {
        const tmp = arg0;
        if (tmp) {
          obj = closure_0(closure_2[8]);
          obj.runOnJS(cleanUp)();
        }
      };
      const tmpResult = timing;
      __closure = { runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      const withTiming = tmpResult.withTiming;
      fn.__closure = __closure;
      fn.__workletHash = 11444984222980;
      fn.__initData = __initData;
      set2(withTiming(0, __closure, "respect-motion-settings", fn));
    } else {
      if (closure_3 != null) {
        tmp3(closure_2);
      }
      set = sharedValue.set;
      const tmpResult2 = timing;
      const result = set(tmpResult2.withTiming(closure_2, __closure));
    }
  }, items);
  return sharedValue;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiSuggestionBarState(chatInputStateRef, maxCount, minUnlockedEmojis, ref) {
  let analyticsLocations;
  let channel;
  let chatInputRef;
  let clear;
  let focused;
  let lockedEmojis;
  let queryEnd;
  let selectionEnd;
  let selectionStart;
  let setData;
  let setDataImmediate;
  let text;
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp8;
  let tmp2 = dependencyMap;
  const tmp = chatInputRef;
  obj = chatInputRef(576);
  const cResult = obj.c(29);
  ({ channel, chatInputRef } = chatInputStateRef);
  chatInputStateRef = chatInputStateRef.chatInputStateRef;
  obj2 = setData;
  const suppressed = chatInputStateRef.suppressed;
  const tmp4 = analyticsLocations(setData.useState(clear), 2);
  const first = tmp4[0];
  ({ focused, text } = first);
  dependencyMap = text;
  ({ selectionStart, selectionEnd } = first);
  const tmp6 = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [setDataImmediate];
    const fn = function _() {
      return setDataImmediate.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const tmp12 = chatInputStateRef(7255);
  analyticsLocations = tmp12(chatInputStateRef(7280).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp13 = chatInputStateRef(13308)(tmp6, 16);
  setData = tmp13.setData;
  setDataImmediate = tmp13.setDataImmediate;
  const tmp11 = chatInputStateRef;
  if (cResult[2] !== setData) {
    const fn2 = function k() {
      return { setData };
    };
    const items1 = [setData];
    cResult[2] = setData;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp15 = items1;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[3];
    tmp15 = cResult[4];
  }
  const imperativeHandle = obj2.useImperativeHandle(ref, tmp14, tmp15);
  if (focused) {
    focused = !suppressed;
  }
  if (cResult[5] === channel) {
    if (cResult[6] === maxCount) {
      if (cResult[7] === minUnlockedEmojis) {
        if (cResult[8] === selectionEnd) {
          if (cResult[9] === selectionStart) {
            if (cResult[10] === focused) {
              let tmp17;
              if (cResult[11] === text) {
                tmp17 = cResult[12];
              }
              const tmp18 = tmp11(13344)(tmp17);
              const unlockedEmojis = tmp18.unlockedEmojis;
              ({ lockedEmojis, queryEnd } = tmp18);
              clear = tmp18.clear;
              if (cResult[13] === chatInputRef) {
                if (cResult[14] === chatInputStateRef) {
                  if (cResult[15] === clear) {
                    if (cResult[16] === queryEnd) {
                      if (cResult[17] === setDataImmediate) {
                        if (cResult[18] === text) {
                          let tmp19;
                          if (cResult[19] === unlockedEmojis) {
                            tmp19 = cResult[20];
                          }
                          if (cResult[21] !== analyticsLocations) {
                            class K {
                              constructor(animated) {
                                obj = PremiumUpsellUtilsDefault;
                                obj2 = { initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI, analyticsLocations };
                                const result = obj.handleShowUpsellAlert(obj2);
                              }
                            }
                            cResult[21] = analyticsLocations;
                            cResult[22] = K;
                          } else {
                            class K {
                              constructor(animated) {
                                obj = PremiumUpsellUtilsDefault;
                                obj2 = { initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI, analyticsLocations };
                                const result = obj.handleShowUpsellAlert(obj2);
                              }
                            }
                          }
                          if (cResult[23] === tmp19) {
                            class K {
                              constructor(animated) {
                                obj = PremiumUpsellUtilsDefault;
                                obj2 = { initialUpsellKey: animated.animated ? UpsellTypes.ANIMATED_EMOJI : UpsellTypes.GLOBAL_EMOJI, analyticsLocations };
                                const result = obj.handleShowUpsellAlert(obj2);
                              }
                            }
                          }
                          let obj3 = { unlockedEmojis, lockedEmojis, reducedMotion: stateFromStores, handlePress: tmp19, handlePressEmojiUnavailable: tmp20 };
                          class C {
                            constructor(arg0) {
                              obj = /\s/;
                              str = closure_2;
                              tmp = queryEnd;
                              str2 = " ";
                              str3 = " ";
                              if (obj.test(closure_2.charAt(queryEnd - 1))) {
                                str3 = "";
                              }
                              obj2 = /\s/;
                              if (obj2.test(str.charAt(tmp))) {
                                str2 = "";
                              }
                              tmp2 = chatInputStateRef;
                              tmp3 = text;
                              combined = "" + str3 + chatInputStateRef(text[17])(chatInputStateRef) + str2;
                              closure_0 = combined;
                              current = closure_0.current;
                              obj1 = { location: tmp, length: 0, text: combined, editId: null };
                              editId = closure_1.current.editId;
                              replaceRange = current.replaceRange;
                              obj1.editId = editId;
                              replaceRangeResult = replaceRange(obj1);
                              closure_1 = tmp + combined.length;
                              tmp5 = setDataImmediate((text) => {
                                let sum;
                                let text1;
                                obj = { text: sum + text1.slice(queryEnd), selectionStart: selectionEnd, selectionEnd };
                                const merged = Object.assign(text);
                                text = text.text;
                                text1 = text.text;
                                sum = text.slice(0, queryEnd) + combined;
                                return obj;
                              });
                              tmp6 = clear();
                              obj5 = { emoji: chatInputStateRef, displayedSuggestions: unlockedEmojis };
                              tmp7 = tmp2(tmp3[18])(obj5);
                              return;
                            }
                          }
                          cResult[24] = tmp20;
                          cResult[25] = lockedEmojis;
                          cResult[26] = stateFromStores;
                          cResult[27] = unlockedEmojis;
                          cResult[28] = obj3;
                        }
                      }
                    }
                  }
                }
              }
              class C {
                constructor(arg0) {
                  obj = /\s/;
                  str = closure_2;
                  tmp = queryEnd;
                  str2 = " ";
                  str3 = " ";
                  if (obj.test(closure_2.charAt(queryEnd - 1))) {
                    str3 = "";
                  }
                  obj2 = /\s/;
                  if (obj2.test(str.charAt(tmp))) {
                    str2 = "";
                  }
                  tmp2 = chatInputStateRef;
                  tmp3 = text;
                  combined = "" + str3 + chatInputStateRef(text[17])(chatInputStateRef) + str2;
                  closure_0 = combined;
                  current = closure_0.current;
                  obj1 = { location: tmp, length: 0, text: combined, editId: null };
                  editId = closure_1.current.editId;
                  replaceRange = current.replaceRange;
                  obj1.editId = editId;
                  replaceRangeResult = replaceRange(obj1);
                  closure_1 = tmp + combined.length;
                  tmp5 = setDataImmediate((text) => {
                    let sum;
                    let text1;
                    obj = { text: sum + text1.slice(queryEnd), selectionStart: selectionEnd, selectionEnd };
                    const merged = Object.assign(text);
                    text = text.text;
                    text1 = text.text;
                    sum = text.slice(0, queryEnd) + combined;
                    return obj;
                  });
                  tmp6 = clear();
                  obj5 = { emoji: chatInputStateRef, displayedSuggestions: unlockedEmojis };
                  tmp7 = tmp2(tmp3[18])(obj5);
                  return;
                }
              }
              cResult[13] = chatInputRef;
              cResult[14] = chatInputStateRef;
              cResult[15] = clear;
              cResult[16] = queryEnd;
              cResult[17] = setDataImmediate;
              cResult[18] = text;
              cResult[19] = unlockedEmojis;
              cResult[20] = C;
              tmp19 = C;
            }
          }
        }
      }
    }
  }
  let obj4 = { channel, text, selectionStart, selectionEnd, enabled: focused, maxCount, minUnlockedEmojis };
  cResult[5] = channel;
  cResult[6] = maxCount;
  cResult[7] = minUnlockedEmojis;
  cResult[8] = selectionEnd;
  cResult[9] = selectionStart;
  cResult[10] = focused;
  cResult[11] = text;
  cResult[12] = obj4;
  tmp17 = obj4;
}) : (function useEmojiSuggestionBarState(chatInputRef, maxCount, minUnlockedEmojis, ref) {
  let _undefined;
  let channel;
  let focused;
  let selectionEnd;
  let selectionStart;
  let suppressed;
  let text;
  chatInputRef = chatInputRef.chatInputRef;
  let chatInputStateRef = chatInputRef.chatInputStateRef;
  let analyticsLocations;
  let setData;
  let setDataImmediate;
  let unlockedEmojis;
  let queryEnd;
  let clear;
  obj = setData;
  ({ channel, suppressed } = chatInputRef);
  const tmp = analyticsLocations(setData.useState(clear), 2);
  const first = tmp[0];
  ({ focused, text } = first);
  dependencyMap = text;
  ({ selectionStart, selectionEnd } = first);
  let tmp3 = tmp[1];
  obj2 = chatInputRef(504);
  const items = [setDataImmediate];
  const stateFromStores = obj2.useStateFromStores(items, () => setDataImmediate.useReducedMotion);
  const tmp5 = chatInputStateRef(7255);
  analyticsLocations = tmp5(chatInputStateRef(7280).EMOJI_SUGGESTIONS).analyticsLocations;
  const tmp6 = chatInputStateRef(13308)(tmp3, 16);
  setData = tmp6.setData;
  setDataImmediate = tmp6.setDataImmediate;
  const items1 = [setData];
  const imperativeHandle = setData.useImperativeHandle(ref, () => ({ setData }), items1);
  let obj3 = { channel, text, selectionStart, selectionEnd, enabled: focused, maxCount, minUnlockedEmojis };
  const tmp8 = chatInputStateRef(13344);
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
    const combined = "" + str3 + chatInputStateRef(_undefined[17])(emoji) + str2;
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
    tmp2(_undefined[18])(obj4);
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
});
function getEmojiIdentity(id) {
  let surrogates = id.id;
  if (surrogates == null) {
    surrogates = id.surrogates;
  }
  return surrogates;
}
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarUtils.tsx");

export const MAX_SUGGESTIONS_LARGE = 12;
export const SET_DATA_DEBOUNCE_MS = 16;
export { SUGGESTION_BAR_HEIGHT_TIMING };
export const sortEmojisForDisplay = function sortEmojisForDisplay(unlockedEmojis, lockedEmojis, bound) {
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
};
export { getEmojiIdentity };
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
export const ITEM_ENTRANCE_SPRING_CONFIG = obj2;
export const EmojiEntranceAnimation = tmp2;
export const useSuggestionBarHeight = tmp3;
export const useEmojiSuggestionBarState = tmp4;
