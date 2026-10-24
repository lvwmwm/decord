// Module ID: 16418
// Function ID: 16419
// Name: OrbsArcadeRewardChainCell
// Dependencies: [32, 19, 17, 4972, 21, 4971, 587, 5052, 558, 576, 504, 5206, 4978, 5252, 16391, 683, 16419, 9439, 16399, 7267, 5228, 16420, 2]

// Module 16418 (OrbsArcadeRewardChainCell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let map, strokeWidth;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 50;
let c11 = 1.6666666666666667;
let c12 = 250;
let c13 = 400;
let c14 = 150;
let c15 = 250;
let c16 = 300;
let c17 = 1100;
let c18 = 500;
let createStyles = createStyles_mod;
let obj = { cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" }, circle: obj2, ring: obj3, confetti: { position: "absolute", top: -50, left: -50, width: 150, height: 150 }, stem: obj4, checkBadge: { position: "absolute", right: -1, bottom: -1 } };
obj2 = { borderRadius: 25 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj4 = { position: "absolute", left: 24, width: 2, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let closure_19 = createStyles(obj);
function getWindowProgress(arg0, arg1, arg2) {
  let num = 1;
  if (null != arg1) {
    const items = [arg1, arg1 + arg2];
    const obj = ReanimatedRexport;
    num = obj.interpolate(arg0, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
  }
  return num;
}
let obj5 = { interpolate: ReanimatedRexport.interpolate, Extrapolation: ReanimatedRexport.Extrapolation };
getWindowProgress.__closure = obj5;
getWindowProgress.__workletHash = 10001292080604;
getWindowProgress.__initData = { code: "function getWindowProgress_OrbsArcadeRewardChainCellTsx1(timeMs,startMs,durationMs){const{interpolate,Extrapolation}=this.__closure;if(startMs==null){return 1;}return interpolate(timeMs,[startMs,startMs+durationMs],[0,1],Extrapolation.CLAMP);}" };
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function OrbsArcadeRewardChainCellTsx2(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}" };
const __initData2 = { code: "function OrbsArcadeRewardChainCellTsx3(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}" };
const __initData3 = { code: "function OrbsArcadeRewardChainCellTsx4(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}" };
const __initData4 = { code: "function OrbsArcadeRewardChainCellTsx5(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}" };
const __initData5 = { code: "function OrbsArcadeRewardChainCellTsx6(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}" };
const __initData6 = { code: "function OrbsArcadeRewardChainCellTsx7(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}" };
const __initData7 = { code: "function OrbsArcadeRewardChainCellTsx8(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}" };
const __initData8 = { code: "function OrbsArcadeRewardChainCellTsx9(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}" };
const __initData9 = { code: "function OrbsArcadeRewardChainCellTsx10(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}" };
const __initData10 = { code: "function OrbsArcadeRewardChainCellTsx11(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}" };
const __initData11 = { code: "function OrbsArcadeRewardChainCellTsx12(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}" };
const __initData12 = { code: "function OrbsArcadeRewardChainCellTsx13(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}" };
const __initData13 = { code: "function OrbsArcadeRewardChainCellTsx14(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}" };
const __initData14 = { code: "function OrbsArcadeRewardChainCellTsx15(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}" };
const __initData15 = { code: "function OrbsArcadeRewardChainCellTsx16(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}" };
const __initData16 = { code: "function OrbsArcadeRewardChainCellTsx17(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}" };
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOrbsArcadeRewardChainTimeline(grantedRewardIds) {
  let first;
  let grantAnimatedOnOpenRewardIds;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  let tmp = grantedRewardIds;
  const tmp2 = grantAnimatedOnOpenRewardIds;
  let obj = grantedRewardIds(grantAnimatedOnOpenRewardIds[9]);
  const cResult = obj.c(19);
  grantedRewardIds = grantedRewardIds.grantedRewardIds;
  const focusedRewardId = grantedRewardIds.focusedRewardId;
  grantAnimatedOnOpenRewardIds = grantedRewardIds.grantAnimatedOnOpenRewardIds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[10]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === focusedRewardId) {
    if (cResult[3] === grantAnimatedOnOpenRewardIds) {
      if (cResult[4] === grantedRewardIds) {
        let tmp8;
        if (cResult[5] === stateFromStores) {
          tmp8 = cResult[6];
        }
        const obj3 = first;
        first = stateFromStores(first.useState(tmp8), 1)[0];
        const tmpResult2 = tmp(tmp2[7]);
        const sharedValue = tmpResult2.useSharedValue(0);
        if (cResult[7] === first) {
          let tmp12;
          let tmp13;
          let tmp18;
          if (cResult[8] === sharedValue) {
            tmp12 = cResult[9];
            tmp13 = cResult[10];
          }
          const effect = obj3.useEffect(tmp12, tmp13);
          let grantAtMsByRewardId;
          const tmp15 = cResult[11];
          if (first != null) {
            grantAtMsByRewardId = first.grantAtMsByRewardId;
          }
          if (tmp15 !== grantAtMsByRewardId) {
            let grantAtMsByRewardId1;
            if (first != null) {
              grantAtMsByRewardId1 = first.grantAtMsByRewardId;
            }
            class S {
              constructor(arg0) {
                let value;
                if (first != null) {
                  const grantAtMsByRewardId = tmp.grantAtMsByRewardId;
                  value = grantAtMsByRewardId.get(arg0);
                }
                if (value == null) {
                  value = null;
                }
                return value;
              }
            }
            cResult[11] = grantAtMsByRewardId1;
            cResult[12] = S;
            tmp18 = S;
          } else {
            tmp18 = cResult[12];
          }
          if (cResult[13] !== first) {
            class T {
              constructor(arg0) {
                let focusRingRewardId;
                if (first != null) {
                  focusRingRewardId = tmp.focusRingRewardId;
                }
                let focusRingAtMs = null;
                if (focusRingRewardId === arg0) {
                  focusRingAtMs = tmp.focusRingAtMs;
                }
                return focusRingAtMs;
              }
            }
            class S {
              constructor(arg0) {
                let value;
                if (first != null) {
                  const grantAtMsByRewardId = tmp.grantAtMsByRewardId;
                  value = grantAtMsByRewardId.get(arg0);
                }
                if (value == null) {
                  value = null;
                }
                return value;
              }
            }
            cResult[14] = T;
          } else {
            class T {
              constructor(arg0) {
                let focusRingRewardId;
                if (first != null) {
                  focusRingRewardId = tmp.focusRingRewardId;
                }
                let focusRingAtMs = null;
                if (focusRingRewardId === arg0) {
                  focusRingAtMs = tmp.focusRingAtMs;
                }
                return focusRingAtMs;
              }
            }
          }
          if (cResult[15] === tmp18) {
            class T {
              constructor(arg0) {
                let focusRingRewardId;
                if (first != null) {
                  focusRingRewardId = tmp.focusRingRewardId;
                }
                let focusRingAtMs = null;
                if (focusRingRewardId === arg0) {
                  focusRingAtMs = tmp.focusRingAtMs;
                }
                return focusRingAtMs;
              }
            }
          }
          let obj2 = { timeline: sharedValue, getGrantAtMs: tmp18, getFocusRingAtMs: tmp20 };
          cResult[15] = tmp18;
          cResult[16] = tmp20;
          cResult[17] = sharedValue;
          cResult[18] = obj2;
        }
        const fn2 = function f() {
          if (null != first) {
            const _requestAnimationFrame = requestAnimationFrame;
            let closure_0 = requestAnimationFrame(() => {
              const obj = grantedRewardIds(grantAnimatedOnOpenRewardIds[11]);
              const obj2 = { duration: first.endMs, easing: grantedRewardIds(grantAnimatedOnOpenRewardIds[7]).Easing.linear };
              return set.set(obj.withTiming(first.endMs, obj2));
            });
            return () => cancelAnimationFrame(closure_0);
          }
        };
        const items1 = [first, sharedValue];
        cResult[7] = first;
        cResult[8] = sharedValue;
        cResult[9] = fn2;
        class R {
          constructor() {
            let num;
            const tmp = stateFromStores;
            if (tmp) {
              return null;
            } else {
              const _Map = Map;
              const found = grantedRewardIds.filter((item) => {
                let hasItem;
                const obj = grantAnimatedOnOpenRewardIds;
                if (grantAnimatedOnOpenRewardIds != null) {
                  hasItem = obj.has(item);
                }
                return true === hasItem;
              });
              const self = this;
              const self2 = this;
              map = new Map(found.map((item, index) => {
                const items = [item, closure_1_12 + index * closure_1_17];
                return items;
              }));
              const sum = c12 + map.size * c17;
              let obj = { grantAtMsByRewardId: map, focusRingRewardId: focusedRewardId, focusRingAtMs: sum, endMs: sum + num };
              num = 0;
              if (null != focusedRewardId) {
                num = c18;
              }
              return obj;
            }
          }
        }
        tmp13 = items1;
        tmp12 = fn2;
      }
    }
  }
  class R {
    constructor() {
      let num;
      const tmp = stateFromStores;
      if (tmp) {
        return null;
      } else {
        const _Map = Map;
        const found = grantedRewardIds.filter((item) => {
          let hasItem;
          const obj = grantAnimatedOnOpenRewardIds;
          if (grantAnimatedOnOpenRewardIds != null) {
            hasItem = obj.has(item);
          }
          return true === hasItem;
        });
        const self = this;
        const self2 = this;
        map = new Map(found.map((item, index) => {
          const items = [item, closure_1_12 + index * closure_1_17];
          return items;
        }));
        const sum = c12 + map.size * c17;
        let obj = { grantAtMsByRewardId: map, focusRingRewardId: focusedRewardId, focusRingAtMs: sum, endMs: sum + num };
        num = 0;
        if (null != focusedRewardId) {
          num = c18;
        }
        return obj;
      }
    }
  }
  cResult[2] = focusedRewardId;
  cResult[3] = grantAnimatedOnOpenRewardIds;
  cResult[4] = grantedRewardIds;
  cResult[5] = stateFromStores;
  cResult[6] = R;
  tmp8 = R;
}) : (function useOrbsArcadeRewardChainTimeline(arg0) {
  let closure_3;
  let require;
  let useReducedMotion;
  ({ grantedRewardIds: require, focusedRewardId: importDefault, grantAnimatedOnOpenRewardIds: dependencyMap } = arg0);
  let first;
  let obj = get_initialized;
  let items = [AccessibilityStore];
  _slicedToArray = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  first = _slicedToArray(first.useState(function() {
    let num;
    const tmp = closure_3;
    if (tmp) {
      return null;
    } else {
      const _Map = Map;
      const found = _require.filter((item) => {
        let hasItem;
        const obj = closure_1_2;
        if (closure_1_2 != null) {
          hasItem = obj.has(item);
        }
        return true === hasItem;
      });
      const self = this;
      const self2 = this;
      map = new Map(found.map((item, index) => {
        const items = [item, closure_1_12 + index * closure_1_17];
        return items;
      }));
      const sum = c12 + map.size * c17;
      let obj = { grantAtMsByRewardId: map, focusRingRewardId: importDefault, focusRingAtMs: sum, endMs: sum + num };
      num = 0;
      if (null != importDefault) {
        num = c18;
      }
      return obj;
    }
  }), 1)[0];
  let obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(0);
  const items1 = [first, sharedValue];
  const effect = first.useEffect(() => {
    if (null != first) {
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(() => {
        const obj = require("timing");
        const obj2 = { duration: first.endMs, easing: require("ReanimatedRexport").Easing.linear };
        return set.set(obj.withTiming(first.endMs, obj2));
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
  return {
    timeline: sharedValue,
    getGrantAtMs(id) {
      let value;
      if (first != null) {
        const grantAtMsByRewardId = tmp.grantAtMsByRewardId;
        value = grantAtMsByRewardId.get(id);
      }
      if (value == null) {
        value = null;
      }
      return value;
    },
    getFocusRingAtMs(id) {
      focusRingRewardId = undefined;
      if (first != null) {
        focusRingRewardId = tmp.focusRingRewardId;
      }
      let focusRingAtMs = null;
      if (focusRingRewardId === id) {
        focusRingAtMs = tmp.focusRingAtMs;
      }
      return focusRingAtMs;
    }
  };
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardChainCell(timeline) {
  let CircleCheckIcon;
  let grantAtMs;
  let isFocused;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj16;
  let obj18;
  let ref;
  let reward;
  let stemLength;
  let tmp20;
  let tmp22;
  let tmp5Result;
  let tmp = stemLength;
  let tmp2 = grantAtMs;
  let obj = stemLength(grantAtMs[9]);
  const cResult = obj.c(43);
  ({ reward, isFocused, stemLength } = timeline);
  timeline = timeline.timeline;
  grantAtMs = timeline.grantAtMs;
  const focusRingAtMs = timeline.focusRingAtMs;
  const status = timeline.status;
  const tmp4 = closure_19();
  let obj2 = stemLength(grantAtMs[12]);
  const theme = obj2.useThemeContext().theme;
  const obj3 = stemLength(grantAtMs[13]);
  const token = obj3.useToken(timeline(grantAtMs[6]).colors.ICON_STRONG);
  const obj4 = stemLength(grantAtMs[13]);
  const token1 = obj4.useToken(timeline(grantAtMs[6]).colors.STATUS_POSITIVE);
  const LOCKED = stemLength(grantAtMs[14]).OrbsArcadeRewardStatus.LOCKED;
  ref = ref.useRef(null);
  let sum = null;
  if (null != grantAtMs) {
    sum = grantAtMs + GRANT_FILL_MS;
  }
  let closure_5 = sum;
  let sum1 = null;
  if (null != sum) {
    sum1 = sum + GRANT_CHECK_MS;
  }
  let sum2 = null;
  if (null != sum1) {
    sum2 = sum1 + GRANT_CONFETTI_MS;
  }
  let tmpResult = tmp(tmp2[7]);
  const fn = function n() {
    const value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != grantAtMs) {
        const items = [grantAtMs, grantAtMs + tmp3];
        const obj = ReanimatedRexport;
        num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
      }
      return num;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS };
  fn.__closure = obj5;
  fn.__workletHash = 16298581706582;
  fn.__initData = __initData;
  const derivedValue = tmpResult.useDerivedValue(fn);
  const fn2 = function o() {
    const value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != focusRingAtMs) {
        const items = [focusRingAtMs, focusRingAtMs + tmp3];
        const obj = ReanimatedRexport;
        num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
      }
      return num;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj6 = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
  fn2.__closure = obj6;
  fn2.__workletHash = 2996759496631;
  fn2.__initData = __initData2;
  const tmpResult8 = tmp(tmp2[7]);
  const derivedValue1 = tmpResult8.useDerivedValue(fn2);
  const fn3 = function c() {
    const value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != sum2) {
        const items = [sum2, sum2 + tmp3];
        const obj = ReanimatedRexport;
        num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
      }
      return num;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj7 = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS };
  fn3.__closure = obj7;
  fn3.__workletHash = 4451047761232;
  fn3.__initData = __initData3;
  const tmpResult9 = tmp(tmp2[7]);
  const derivedValue2 = tmpResult9.useDerivedValue(fn3);
  function playConfetti() {
    const current = ref.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }
  const tmpResult10 = tmp(tmp2[7]);
  class M {
    constructor() {
      const tmp2 = null != sum1 && timeline.get() >= tmp;
      return tmp2;
    }
  }
  M.__closure = { confettiAtMs: sum1, timeline };
  M.__workletHash = 17078558180439;
  M.__initData = __initData4;
  const fn4 = function u(arg0, arg1) {
    const tmp = arg0 && false === arg1;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(playConfetti)();
    }
  };
  fn4.__closure = { runOnJS: tmp(tmp2[7]).runOnJS, playConfetti };
  fn4.__workletHash = 13780775152900;
  fn4.__initData = __initData5;
  ({ runOnJS: tmp(tmp2[7]).runOnJS, playConfetti });
  const animatedReaction = tmpResult10.useAnimatedReaction(M, fn4);
  if (cResult[0] !== token1) {
    let num = 0.5;
    const obj13 = timeline(tmp2[15])(token1);
    const alphaResult = obj13.alpha(0.5);
    const cssResult = alphaResult.css();
    let num2 = 0;
    cResult[0] = token1;
    cResult[1] = cssResult;
    tmp20 = cssResult;
  } else {
    tmp20 = cResult[1];
  }
  if (cResult[2] !== tmp20) {
    const obj9 = { boxShadow: items };
    items = [{ offsetX: 0, offsetY: 0, blurRadius: 5, color: tmp20 }];
    const obj10 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: tmp20 };
    cResult[2] = tmp20;
    cResult[3] = obj9;
    tmp22 = obj9;
  } else {
    tmp22 = cResult[3];
  }
  function se() {
    const obj = { opacity: derivedValue.get() };
    return obj;
  }
  se.__closure = { fillProgress: derivedValue };
  se.__workletHash = 7749646821819;
  se.__initData = __initData6;
  const tmpResult11 = tmp(tmp2[7]);
  const animatedStyle = tmpResult11.useAnimatedStyle(se);
  function ne() {
    let items1;
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != closure_5) {
        const items = [closure_5, closure_5 + 400];
        const tmpResult = ReanimatedRexport;
        num = tmpResult.interpolate(value, items, [0, 1], tmp(5052).Extrapolation.CLAMP);
      }
      const obj = { transform: items1 };
      items1 = [{ scale: interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) }];
      const obj2 = { scale: interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const tmpResult12 = tmp(tmp2[7]);
  ne.__closure = { interpolate: tmp(tmp2[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS, GRANT_CONFETTI_MS };
  ne.__workletHash = 17236262951265;
  ne.__initData = __initData7;
  ({ interpolate: tmp(tmp2[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS, GRANT_CONFETTI_MS });
  const animatedStyle1 = tmpResult12.useAnimatedStyle(ne);
  function ie() {
    let obj2;
    let tmp;
    let num = stemLength;
    let num2 = stemLength;
    if (stemLength == null) {
      num2 = 0;
    }
    const obj = { top: tmp * derivedValue2.get(), height: num * obj2.get() };
    obj2 = derivedValue2;
    tmp = -num2;
    if (num == null) {
      num = 0;
    }
    return obj;
  }
  ie.__closure = { stemLength, stemProgress: derivedValue2 };
  ie.__workletHash = 13706139303941;
  ie.__initData = __initData8;
  const tmpResult13 = tmp(tmp2[7]);
  const animatedStyle2 = tmpResult13.useAnimatedStyle(ie);
  if (cResult[4] === stemLength) {
    if (cResult[5] === animatedStyle2) {
      let tmp26;
      if (cResult[6] === tmp4.stem) {
        tmp26 = cResult[7];
      }
      if (cResult[8] === tmp4.circle) {
        let tmp29;
        let tmp35;
        if (cResult[9] === tmp4.ring) {
          tmp29 = cResult[10];
        }
        if (cResult[11] === token) {
          if (cResult[12] === derivedValue1) {
            if (cResult[13] === isFocused) {
              let tmp34;
              if (cResult[14] === status !== LOCKED) {
                tmp34 = cResult[15];
              }
              if (cResult[16] === derivedValue) {
                if (cResult[17] === token1) {
                  if (cResult[18] === animatedStyle) {
                    if (cResult[19] === tmp22) {
                      if (cResult[20] === status !== LOCKED) {
                        if (cResult[21] === tmp4.circle) {
                          let tmp39;
                          let tmp48;
                          if (cResult[22] === theme) {
                            tmp39 = cResult[23];
                          }
                          if (cResult[24] !== reward) {
                            let tmp50;
                            if (reward.type === tmp(tmp2[14]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
                              tmp50 = sum2(tmp(tmp2[17]).NitroCoinSpotIllustration, { height: 30 });
                            } else {
                              const obj12 = { reward, size: 38 };
                              tmp50 = sum2(tmp5(tmp2[18]), obj12);
                            }
                            cResult[24] = reward;
                            cResult[25] = tmp50;
                            tmp48 = tmp50;
                          } else {
                            tmp48 = cResult[25];
                          }
                          if (cResult[26] === animatedStyle1) {
                            if (cResult[27] === status !== LOCKED) {
                              let tmp52;
                              if (cResult[28] === tmp4.checkBadge) {
                                tmp52 = cResult[29];
                              }
                              if (cResult[30] === grantAtMs) {
                                if (cResult[31] === status !== LOCKED) {
                                  let tmp55;
                                  if (cResult[32] === tmp4.confetti) {
                                    tmp55 = cResult[33];
                                  }
                                  if (cResult[34] === tmp4.cell) {
                                    if (cResult[35] === tmp26) {
                                      if (cResult[36] === tmp29) {
                                        if (cResult[37] === tmp34) {
                                          if (cResult[38] === tmp39) {
                                            if (cResult[39] === tmp48) {
                                              if (cResult[40] === tmp52) {
                                                let tmp60;
                                                if (cResult[41] === tmp55) {
                                                  tmp60 = cResult[42];
                                                }
                                                return tmp60;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj14 = { style: tmp4.cell, children: items1 };
                                  items1 = [tmp26, tmp29, tmp34, tmp39, tmp48, tmp52, tmp55];
                                  const tmp63 = derivedValue2(closure_5, obj14);
                                  cResult[34] = tmp4.cell;
                                  cResult[35] = tmp26;
                                  cResult[36] = tmp29;
                                  cResult[37] = tmp34;
                                  cResult[38] = tmp39;
                                  cResult[39] = tmp48;
                                  cResult[40] = tmp52;
                                  cResult[41] = tmp55;
                                  cResult[42] = tmp63;
                                  tmp60 = tmp63;
                                }
                              }
                              let tmp56 = null;
                              if (status !== LOCKED) {
                                tmp56 = null;
                                if (null != grantAtMs) {
                                  const obj15 = { pointerEvents: "none", style: tmp4.confetti, children: sum2(tmp5Result, obj16) };
                                  obj16 = { ref, source: tmp(tmp2[21]), autoPlay: false, loop: false };
                                  tmp5Result = timeline(tmp2[20]);
                                  tmp56 = sum2(closure_5, obj15);
                                }
                              }
                              cResult[30] = grantAtMs;
                              cResult[31] = status !== LOCKED;
                              cResult[32] = tmp4.confetti;
                              cResult[33] = tmp56;
                              tmp55 = tmp56;
                            }
                          }
                          let tmp53 = null;
                          if (status !== LOCKED) {
                            const obj17 = { style: items2, children: sum2(CircleCheckIcon, obj18) };
                            items2 = [tmp4.checkBadge, animatedStyle1];
                            const View = tmp5(tmp2[7]).View;
                            obj18 = { size: "xs", color: timeline(tmp2[6]).colors.STATUS_POSITIVE, secondaryColor: timeline(tmp2[6]).colors.WHITE };
                            CircleCheckIcon = tmp(tmp2[19]).CircleCheckIcon;
                            tmp53 = sum2(View, obj17);
                          }
                          cResult[26] = animatedStyle1;
                          cResult[27] = status !== LOCKED;
                          cResult[28] = tmp4.checkBadge;
                          cResult[29] = tmp53;
                          tmp52 = tmp53;
                        }
                      }
                    }
                  }
                }
              }
              let tmp41Result = null;
              if (status !== LOCKED) {
                let tmp43 = null;
                const tmp41 = derivedValue2;
                const tmp42 = derivedValue;
                const tmpResult14 = tmp(tmp2[12]);
                if (!tmpResult14.isThemeLight(theme)) {
                  const obj19 = { style: items3 };
                  items3 = [tmp4.circle, tmp22, animatedStyle];
                  tmp43 = sum2(tmp5(tmp2[7]).View, obj19);
                }
                const obj20 = { children: items4 };
                items4 = [tmp43, ];
                const obj21 = { color: token1, progress: derivedValue, rewardSize: playConfetti, strokeWidth };
                items4[1] = sum2(timeline(tmp2[16]), obj21);
                tmp41Result = tmp41(tmp42, obj20);
              }
              cResult[16] = derivedValue;
              cResult[17] = token1;
              cResult[18] = animatedStyle;
              cResult[19] = tmp22;
              cResult[20] = status !== LOCKED;
              cResult[21] = tmp4.circle;
              cResult[22] = theme;
              cResult[23] = tmp41Result;
              tmp39 = tmp41Result;
            }
          }
        }
        if (isFocused) {
          const obj22 = { color: token, progress: derivedValue1, rewardSize: playConfetti, strokeWidth };
          tmp35 = sum2(tmp5(tmp2[16]), obj22);
        } else {
          tmp35 = null;
        }
        cResult[11] = token;
        cResult[12] = derivedValue1;
        cResult[13] = isFocused;
        cResult[14] = status !== LOCKED;
        cResult[15] = tmp35;
        tmp34 = tmp35;
      }
      const obj23 = { style: items5 };
      items5 = [, ];
      ({ circle: arr3[0], ring: arr3[1] } = tmp4);
      const tmp32 = sum2(closure_5, obj23);
      cResult[8] = tmp4.circle;
      cResult[9] = tmp4.ring;
      cResult[10] = tmp32;
      tmp29 = tmp32;
    }
  }
  let tmp27 = null;
  if (null != stemLength) {
    const obj24 = { style: items6 };
    items6 = [tmp4.stem, animatedStyle2];
    tmp27 = sum2(tmp5(tmp2[7]).View, obj24);
  }
  cResult[4] = stemLength;
  cResult[5] = animatedStyle2;
  cResult[6] = tmp4.stem;
  cResult[7] = tmp27;
  tmp26 = tmp27;
}) : (function OrbsArcadeRewardChainCell(timeline) {
  let CircleCheckIcon;
  let callback;
  let isFocused;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj19;
  let obj21;
  let reward;
  let status;
  let stemLength;
  let tmp29Result;
  let tmp29Result6;
  let tmp4Result;
  ({ reward, stemLength } = timeline);
  timeline = timeline.timeline;
  const grantAtMs = timeline.grantAtMs;
  const focusRingAtMs = timeline.focusRingAtMs;
  let c6;
  let sum1;
  let sum2;
  let derivedValue;
  let derivedValue2;
  strokeWidth = undefined;
  ({ status, isFocused } = timeline);
  let tmp = closure_19();
  let tmp2 = stemLength;
  const tmp3 = grantAtMs;
  let obj = stemLength(grantAtMs[12]);
  const theme = obj.useThemeContext().theme;
  let obj2 = stemLength(grantAtMs[13]);
  const token = obj2.useToken(timeline(grantAtMs[6]).colors.ICON_STRONG);
  let obj3 = stemLength(grantAtMs[13]);
  const token1 = obj3.useToken(timeline(grantAtMs[6]).colors.STATUS_POSITIVE);
  const LOCKED = stemLength(grantAtMs[14]).OrbsArcadeRewardStatus.LOCKED;
  const ref = token1.useRef(null);
  let sum = null;
  if (null != grantAtMs) {
    sum = grantAtMs + GRANT_FILL_MS;
  }
  c6 = sum;
  sum1 = null;
  if (null != sum) {
    sum1 = sum + GRANT_CHECK_MS;
  }
  sum2 = null;
  if (null != sum1) {
    sum2 = sum1 + GRANT_CONFETTI_MS;
  }
  const tmp2Result = tmp2(tmp3[7]);
  class P {
    constructor() {
      const value = timeline.get();
      if (typeof getWindowProgress === "function") {
        let num = 1;
        if (null != grantAtMs) {
          const items = [grantAtMs, grantAtMs + tmp3];
          const obj = ReanimatedRexport;
          num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
        }
        return num;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS };
  P.__closure = obj5;
  P.__workletHash = 6558713580453;
  P.__initData = __initData9;
  derivedValue = tmp2Result.useDerivedValue(P);
  const fn = function y() {
    const value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != focusRingAtMs) {
        const items = [focusRingAtMs, focusRingAtMs + tmp3];
        const obj = ReanimatedRexport;
        num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
      }
      return num;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj6 = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
  fn.__closure = obj6;
  fn.__workletHash = 8764166275748;
  fn.__initData = __initData10;
  const tmp2Result8 = tmp2(tmp3[7]);
  const derivedValue1 = tmp2Result8.useDerivedValue(fn);
  const tmp2Result9 = tmp2(tmp3[7]);
  class L {
    constructor() {
      const value = timeline.get();
      if (typeof getWindowProgress === "function") {
        let num = 1;
        if (null != sum2) {
          const items = [sum2, sum2 + tmp3];
          const obj = ReanimatedRexport;
          num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
        }
        return num;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj7 = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS };
  L.__closure = obj7;
  L.__workletHash = 14786680607207;
  L.__initData = __initData11;
  derivedValue2 = tmp2Result9.useDerivedValue(L);
  strokeWidth = obj4.useCallback(() => {
    const current = ref.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }, []);
  const tmp2Result10 = tmp2(tmp3[7]);
  class E {
    constructor() {
      const tmp2 = null != sum1 && timeline.get() >= tmp;
      return tmp2;
    }
  }
  E.__closure = { confettiAtMs: sum1, timeline };
  E.__workletHash = 15383316588928;
  E.__initData = __initData12;
  class N {
    constructor(arg0, arg1) {
      const tmp = arg0 && false === arg1;
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback)();
      }
    }
  }
  N.__closure = { runOnJS: tmp2(tmp3[7]).runOnJS, playConfetti: strokeWidth };
  N.__workletHash = 4007045048631;
  N.__initData = __initData13;
  ({ runOnJS: tmp2(tmp3[7]).runOnJS, playConfetti: strokeWidth });
  const animatedReaction = tmp2Result10.useAnimatedReaction(E, N);
  let items = [token1];
  const memo = obj4.useMemo(() => {
    let alphaResult;
    let items;
    const obj = { boxShadow: items };
    const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: alphaResult.css() };
    const obj3 = _modDef683(token1);
    items = [obj2];
    alphaResult = obj3.alpha(0.5);
    return obj;
  }, items);
  function ee() {
    const obj = { opacity: derivedValue.get() };
    return obj;
  }
  ee.__closure = { fillProgress: derivedValue };
  ee.__workletHash = 13951092941864;
  ee.__initData = __initData14;
  const tmp2Result11 = tmp2(tmp3[7]);
  const animatedStyle = tmp2Result11.useAnimatedStyle(ee);
  function te() {
    let items1;
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != c6) {
        const items = [c6, c6 + 400];
        const tmpResult = ReanimatedRexport;
        num = tmpResult.interpolate(value, items, [0, 1], tmp(5052).Extrapolation.CLAMP);
      }
      const obj = { transform: items1 };
      items1 = [{ scale: interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) }];
      const obj2 = { scale: interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const tmp2Result12 = tmp2(tmp3[7]);
  te.__closure = { interpolate: tmp2(tmp3[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS, GRANT_CONFETTI_MS };
  te.__workletHash = 5571102787774;
  te.__initData = __initData15;
  ({ interpolate: tmp2(tmp3[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS, GRANT_CONFETTI_MS });
  const animatedStyle1 = tmp2Result12.useAnimatedStyle(te);
  tmp2(tmp3[7]);
  function re() {
    let obj2;
    let tmp;
    let num = stemLength;
    let num2 = stemLength;
    if (stemLength == null) {
      num2 = 0;
    }
    const obj = { top: tmp * derivedValue2.get(), height: num * obj2.get() };
    obj2 = derivedValue2;
    tmp = -num2;
    if (num == null) {
      num = 0;
    }
    return obj;
  }
  re.__closure = { stemLength, stemProgress: derivedValue2 };
  re.__workletHash = 2751998266906;
  re.__initData = __initData16;
  let tmp26 = null;
  const obj10 = { style: tmp.cell, children: items2 };
  if (null != stemLength) {
    const obj11 = { style: items1 };
    items1 = [tmp.stem, tmp23];
    tmp26 = sum1(tmp4(tmp3[7]).View, obj11);
  }
  items2 = [tmp26, , , , , , ];
  const obj12 = { style: items3 };
  items3 = [, ];
  ({ circle: arr4[0], ring: arr4[1] } = tmp);
  items2[1] = sum1(ref, obj12);
  if (isFocused) {
    const obj13 = { color: token, progress: derivedValue1, rewardSize: derivedValue2, strokeWidth };
    tmp29Result = tmp29(tmp4(tmp3[16]), obj13);
  } else {
    tmp29Result = null;
  }
  items2[2] = tmp29Result;
  let tmp24Result = null;
  if (status !== LOCKED) {
    let tmp29Result5 = null;
    const tmp2Result14 = tmp2(tmp3[12]);
    const tmp34 = sum2;
    if (!tmp2Result14.isThemeLight(theme)) {
      const obj14 = { style: items4 };
      items4 = [tmp.circle, memo, animatedStyle];
      tmp29Result5 = tmp29(tmp4(tmp3[7]).View, obj14);
    }
    const obj15 = { children: items5 };
    items5 = [tmp29Result5, ];
    const obj16 = { color: token1, progress: derivedValue, rewardSize: derivedValue2, strokeWidth };
    items5[1] = sum1(timeline(tmp3[16]), obj16);
    tmp24Result = tmp24(tmp34, obj15);
  }
  items2[3] = tmp24Result;
  if (reward.type === tmp2(tmp3[14]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    tmp29Result6 = tmp29(tmp2(tmp3[17]).NitroCoinSpotIllustration, { height: 30 });
  } else {
    const obj17 = { reward, size: 38 };
    tmp29Result6 = tmp29(tmp4(tmp3[18]), obj17);
  }
  items2[4] = tmp29Result6;
  let tmp29Result7 = null;
  if (status !== LOCKED) {
    const obj18 = { style: items6, children: sum1(CircleCheckIcon, obj19) };
    items6 = [tmp.checkBadge, animatedStyle1];
    const View = tmp4(tmp3[7]).View;
    obj19 = { size: "xs", color: timeline(tmp3[6]).colors.STATUS_POSITIVE, secondaryColor: timeline(tmp3[6]).colors.WHITE };
    CircleCheckIcon = tmp2(tmp3[19]).CircleCheckIcon;
    tmp29Result7 = tmp29(View, obj18);
  }
  items2[5] = tmp29Result7;
  let tmp29Result8 = null;
  if (status !== LOCKED) {
    tmp29Result8 = null;
    if (null != grantAtMs) {
      const obj20 = { pointerEvents: "none", style: tmp.confetti, children: sum1(tmp4Result, obj21) };
      obj21 = { ref, source: tmp2(tmp3[21]), autoPlay: false, loop: false };
      tmp4Result = timeline(tmp3[20]);
      tmp29Result8 = tmp29(tmp25, obj20);
    }
  }
  items2[6] = tmp29Result8;
  return derivedValue(ref, obj10);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default tmp7;
export const useOrbsArcadeRewardChainTimeline = tmp6;
