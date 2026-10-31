// Module ID: 17041
// Function ID: 17042
// Name: OrbsArcadeRewardChainCell
// Dependencies: [32, 19, 17, 5015, 21, 5014, 575, 5095, 504, 5254, 5021, 5596, 17011, 671, 5587, 17042, 9542, 17020, 7340, 5618, 17043, 2]
// Exports: default, useOrbsArcadeRewardChainRowStyle, useOrbsArcadeRewardChainTimeline

// Module 17041 (OrbsArcadeRewardChainCell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let focusRingRewardId, map;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let c11 = 1.6666666666666667;
let c12 = 500;
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj = { cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" }, circle: obj2, ring: obj3, confetti: { position: "absolute", top: -50, left: -50, width: 150, height: 150 }, stem: { position: "absolute", left: 24, width: 2 }, grantedStem: obj4, checkBadge: { position: "absolute", right: -1, bottom: -1 } };
obj2 = { borderRadius: 25 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, opacity: 0.4 };
let closure_15 = createStyles(obj);
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
const __initData = { code: "function OrbsArcadeRewardChainCellTsx2(){const{isGranted,isFocused,DIMMED_ROW_OPACITY,getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS,interpolate}=this.__closure;if(isGranted){return{opacity:1};}if(!isFocused){return{opacity:DIMMED_ROW_OPACITY};}const progress=getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);return{opacity:interpolate(progress,[0,1],[DIMMED_ROW_OPACITY,1])};}" };
const __initData2 = { code: "function OrbsArcadeRewardChainCellTsx3(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}" };
const __initData3 = { code: "function OrbsArcadeRewardChainCellTsx4(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}" };
const __initData4 = { code: "function OrbsArcadeRewardChainCellTsx5(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}" };
const __initData5 = { code: "function OrbsArcadeRewardChainCellTsx6(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}" };
const __initData6 = { code: "function OrbsArcadeRewardChainCellTsx7(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}" };
const __initData7 = { code: "function OrbsArcadeRewardChainCellTsx8(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}" };
const __initData8 = { code: "function OrbsArcadeRewardChainCellTsx9(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}" };
const __initData9 = { code: "function OrbsArcadeRewardChainCellTsx10(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}" };
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default function OrbsArcadeRewardChainCell(grantAtMs) {
  let CircleCheckIcon;
  let callback;
  let isFocused;
  let isStemTargetGranted;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj19;
  let obj21;
  let reward;
  let status;
  let stemLength;
  let timeline;
  let tmp25Result;
  let tmp32Result;
  let tmp32Result6;
  let tmp4Result;
  ({ reward, stemLength } = grantAtMs);
  ({ isStemTargetGranted, timeline } = grantAtMs);
  grantAtMs = grantAtMs.grantAtMs;
  const focusRingAtMs = grantAtMs.focusRingAtMs;
  let c6;
  let sum1;
  let sum2;
  let derivedValue;
  let derivedValue2;
  let strokeWidth;
  ({ status, isFocused } = grantAtMs);
  let tmp = closure_15();
  let tmp2 = stemLength;
  const tmp3 = grantAtMs;
  let obj = stemLength(grantAtMs[10]);
  const theme = obj.useThemeContext().theme;
  let obj2 = stemLength(grantAtMs[11]);
  const token = obj2.useToken(timeline(grantAtMs[6]).colors.ICON_STRONG);
  let obj3 = stemLength(grantAtMs[11]);
  const token1 = obj3.useToken(timeline(grantAtMs[6]).colors.STATUS_POSITIVE);
  const LOCKED = stemLength(grantAtMs[12]).OrbsArcadeRewardStatus.LOCKED;
  const ref = token1.useRef(null);
  let sum = null;
  if (null != grantAtMs) {
    let num = 400;
    sum = grantAtMs + 400;
  }
  c6 = sum;
  sum1 = null;
  if (null != sum) {
    let num2 = 150;
    sum1 = sum + 150;
  }
  sum2 = null;
  if (null != sum1) {
    sum2 = sum1 + 250;
  }
  const tmp2Result = tmp2(tmp3[7]);
  class D {
    constructor() {
      const value = timeline.get();
      if (typeof getWindowProgress === "function") {
        let num = 1;
        if (null != grantAtMs) {
          const items = [grantAtMs, grantAtMs + 400];
          const obj = ReanimatedRexport;
          num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
        }
        return num;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS: 400 };
  D.__closure = obj5;
  D.__workletHash = 457674995255;
  D.__initData = __initData2;
  derivedValue = tmp2Result.useDerivedValue(D);
  const tmp2Result8 = tmp2(tmp3[7]);
  class L {
    constructor() {
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
    }
  }
  const obj6 = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS };
  L.__closure = obj6;
  L.__workletHash = 2881105662352;
  L.__initData = __initData3;
  const derivedValue1 = tmp2Result8.useDerivedValue(L);
  const tmp2Result9 = tmp2(tmp3[7]);
  class W {
    constructor() {
      const value = timeline.get();
      if (typeof getWindowProgress === "function") {
        let num = 1;
        if (null != sum2) {
          const items = [sum2, sum2 + 300];
          const obj = ReanimatedRexport;
          num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
        }
        return num;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  W.__closure = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS: 300 };
  W.__workletHash = 16672758617649;
  W.__initData = __initData4;
  derivedValue2 = tmp2Result9.useDerivedValue(W);
  strokeWidth = obj4.useCallback(() => {
    const current = ref.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }, []);
  const fn = function v() {
    const tmp2 = null != sum1 && timeline.get() >= tmp;
    return tmp2;
  };
  fn.__closure = { confettiAtMs: sum1, timeline };
  fn.__workletHash = 16599466747956;
  fn.__initData = __initData5;
  const fn2 = function k(arg0, arg1) {
    const tmp = arg0 && false === arg1;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)();
    }
  };
  const tmp2Result10 = tmp2(tmp3[7]);
  fn2.__closure = { runOnJS: tmp2(tmp3[7]).runOnJS, playConfetti: strokeWidth };
  fn2.__workletHash = 16492338404069;
  fn2.__initData = __initData6;
  ({ runOnJS: tmp2(tmp3[7]).runOnJS, playConfetti: strokeWidth });
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn, fn2);
  let items = [token1];
  let items1 = [token1];
  const memo = obj4.useMemo(() => {
    let alphaResult;
    let items;
    const obj = { boxShadow: items };
    const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: alphaResult.css() };
    const obj3 = _modDef671(token1);
    items = [obj2];
    alphaResult = obj3.alpha(0.5);
    return obj;
  }, items);
  const memo1 = obj4.useMemo(() => {
    const items = [, ];
    const obj = _modDef671(token1);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.css();
    items[1] = token1;
    return items;
  }, items1);
  const fn3 = function $() {
    const obj = { opacity: derivedValue.get() };
    return obj;
  };
  fn3.__closure = { fillProgress: derivedValue };
  fn3.__workletHash = 12498561807764;
  fn3.__initData = __initData7;
  const tmp2Result11 = tmp2(tmp3[7]);
  const animatedStyle = tmp2Result11.useAnimatedStyle(fn3);
  function ee() {
    let items1;
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value = timeline.get();
    if (typeof getWindowProgress === "function") {
      let num = 1;
      if (null != c6) {
        const items = [c6, c6 + 400];
        const tmpResult = ReanimatedRexport;
        num = tmpResult.interpolate(value, items, [0, 1], tmp(5095).Extrapolation.CLAMP);
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
  ee.__closure = { interpolate: tmp2(tmp3[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS: 150, GRANT_CONFETTI_MS: 250 };
  ee.__workletHash = 14524699700096;
  ee.__initData = __initData8;
  ({ interpolate: tmp2(tmp3[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS: 150, GRANT_CONFETTI_MS: 250 });
  const animatedStyle1 = tmp2Result12.useAnimatedStyle(ee);
  tmp2(tmp3[7]);
  function te() {
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
  te.__closure = { stemLength, stemProgress: derivedValue2 };
  te.__workletHash = 5035540152605;
  te.__initData = __initData9;
  let tmp25Result2 = null;
  const obj9 = { style: tmp.cell, children: items3 };
  if (null != stemLength) {
    const items2 = [tmp.stem, , ];
    let grantedStem;
    View = tmp4(tmp3[7]).View;
    if (isStemTargetGranted) {
      grantedStem = tmp.grantedStem;
    }
    const obj10 = { style: items2, children: tmp25Result };
    items2[1] = grantedStem;
    items2[2] = tmp21;
    tmp25Result = null;
    if (!isStemTargetGranted) {
      const obj11 = { style: ref.absoluteFill, start, end, colors: memo1 };
      tmp25Result = tmp25(tmp4(tmp3[14]), obj11);
    }
    tmp25Result2 = tmp25(View, obj10);
  }
  items3 = [tmp25Result2, , , , , , ];
  const obj12 = { style: items4 };
  items4 = [, ];
  ({ circle: arr5[0], ring: arr5[1] } = tmp);
  items3[1] = sum2(c6, obj12);
  if (isFocused) {
    const obj13 = { color: token, progress: derivedValue1, rewardSize: 50, strokeWidth };
    tmp32Result = tmp32(tmp4(tmp3[15]), obj13);
  } else {
    tmp32Result = null;
  }
  items3[2] = tmp32Result;
  let tmp22Result = null;
  if (status !== LOCKED) {
    let tmp32Result5 = null;
    const tmp2Result14 = tmp2(tmp3[10]);
    const tmp36 = derivedValue;
    if (!tmp2Result14.isThemeLight(theme)) {
      const obj14 = { style: items5 };
      items5 = [tmp.circle, memo, animatedStyle];
      tmp32Result5 = tmp32(tmp4(tmp3[7]).View, obj14);
    }
    const obj15 = { children: items6 };
    items6 = [tmp32Result5, ];
    const obj16 = { color: token1, progress: derivedValue, rewardSize: 50, strokeWidth };
    items6[1] = sum2(timeline(tmp3[15]), obj16);
    tmp22Result = tmp22(tmp36, obj15);
  }
  items3[3] = tmp22Result;
  if (reward.type === tmp2(tmp3[12]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    tmp32Result6 = tmp32(tmp2(tmp3[16]).NitroCoinSpotIllustration, { height: 30 });
  } else {
    const obj17 = { reward, size: 38 };
    tmp32Result6 = tmp32(tmp4(tmp3[17]), obj17);
  }
  items3[4] = tmp32Result6;
  let tmp32Result7 = null;
  if (status !== LOCKED) {
    const obj18 = { style: items7, children: sum2(CircleCheckIcon, obj19) };
    items7 = [tmp.checkBadge, animatedStyle1];
    const View2 = tmp4(tmp3[7]).View;
    obj19 = { size: "xs", color: timeline(tmp3[6]).colors.STATUS_POSITIVE, secondaryColor: timeline(tmp3[6]).colors.WHITE };
    CircleCheckIcon = tmp2(tmp3[18]).CircleCheckIcon;
    tmp32Result7 = tmp32(View2, obj18);
  }
  items3[5] = tmp32Result7;
  let tmp32Result8 = null;
  if (status !== LOCKED) {
    tmp32Result8 = null;
    if (null != grantAtMs) {
      const obj20 = { pointerEvents: "none", style: tmp.confetti, children: sum2(tmp4Result, obj21) };
      obj21 = { ref, source: tmp2(tmp3[20]), autoPlay: false, loop: false };
      tmp4Result = timeline(tmp3[19]);
      tmp32Result8 = tmp32(tmp23, obj20);
    }
  }
  items3[6] = tmp32Result8;
  return derivedValue2(c6, obj9);
};
export function useOrbsArcadeRewardChainRowStyle(isGranted) {
  isGranted = isGranted.isGranted;
  const isFocused = isGranted.isFocused;
  const timeline = isGranted.timeline;
  const focusRingAtMs = isGranted.focusRingAtMs;
  let obj = isGranted(timeline[7]);
  const fn = function l() {
    let obj3;
    const tmp = isGranted;
    if (tmp) {
      return { opacity: 1 };
    } else {
      const tmp2 = isFocused;
      if (tmp2) {
        const value = timeline.get();
        if (typeof getWindowProgress === "function") {
          let num = 1;
          if (null != focusRingAtMs) {
            const items = [focusRingAtMs, focusRingAtMs + tmp7];
            const obj = ReanimatedRexport;
            num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
          }
          const obj2 = { opacity: obj3.interpolate(num, [0, 1], [0.4, 1]) };
          obj3 = ReanimatedRexport;
          return obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        return { opacity: 0.4 };
      }
    }
  };
  let obj2 = { isGranted, isFocused, DIMMED_ROW_OPACITY: 0.4, getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS, interpolate: isGranted(timeline[7]).interpolate };
  fn.__closure = obj2;
  fn.__workletHash = 2692711565582;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}
export function useOrbsArcadeRewardChainTimeline(arg0) {
  let closure_3;
  let require;
  let useReducedMotion;
  ({ grantedRewardIds: require, focusedRewardId: importDefault, grantAnimatedOnOpenRewardIds: dependencyMap } = arg0);
  let first;
  let obj = get_initialized;
  let items = [AccessibilityStore];
  _slicedToArray = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  first = _slicedToArray(first.useState(function() {
    let num3;
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
        const items = [item, 250 + 1100 * index];
        return items;
      }));
      const sum = 250 + 1100 * map.size;
      let obj = { grantAtMsByRewardId: map, focusRingRewardId: importDefault, focusRingAtMs: sum, endMs: sum + num3 };
      num3 = 0;
      if (null != importDefault) {
        num3 = c12;
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
    getGrantAtMs(arg0) {
      let value;
      if (first != null) {
        const grantAtMsByRewardId = tmp.grantAtMsByRewardId;
        value = grantAtMsByRewardId.get(arg0);
      }
      if (value == null) {
        value = null;
      }
      return value;
    },
    getFocusRingAtMs(arg0) {
      focusRingRewardId = undefined;
      if (first != null) {
        focusRingRewardId = tmp.focusRingRewardId;
      }
      let focusRingAtMs = null;
      if (focusRingRewardId === arg0) {
        focusRingAtMs = tmp.focusRingAtMs;
      }
      return focusRingAtMs;
    }
  };
}
