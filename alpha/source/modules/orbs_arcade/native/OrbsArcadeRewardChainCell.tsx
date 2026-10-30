// Module ID: 16983
// Function ID: 16984
// Name: OrbsArcadeRewardChainCell
// Dependencies: [32, 19, 17, 5010, 21, 5009, 575, 5090, 504, 5249, 5016, 5591, 16955, 671, 16984, 9520, 16964, 7334, 5613, 16985, 2]
// Exports: default, useOrbsArcadeRewardChainTimeline

// Module 16983 (OrbsArcadeRewardChainCell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let focusRingRewardId, map;

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
let c10 = 1.6666666666666667;
let createStyles = createStyles_mod;
let obj = { cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" }, circle: obj2, ring: obj3, confetti: { position: "absolute", top: -50, left: -50, width: 150, height: 150 }, stem: obj4, checkBadge: { position: "absolute", right: -1, bottom: -1 } };
obj2 = { borderRadius: 25 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj4 = { position: "absolute", left: 24, width: 2, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let closure_11 = createStyles(obj);
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
const __initData = { code: "function OrbsArcadeRewardChainCellTsx2(){const{getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS}=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);}" };
const __initData2 = { code: "function OrbsArcadeRewardChainCellTsx3(){const{getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS}=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);}" };
const __initData3 = { code: "function OrbsArcadeRewardChainCellTsx4(){const{getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS}=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);}" };
const __initData4 = { code: "function OrbsArcadeRewardChainCellTsx5(){const{confettiAtMs,timeline}=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;}" };
const __initData5 = { code: "function OrbsArcadeRewardChainCellTsx6(reached,wasReached){const{runOnJS,playConfetti}=this.__closure;if(reached&&wasReached===false){runOnJS(playConfetti)();}}" };
const __initData6 = { code: "function OrbsArcadeRewardChainCellTsx7(){const{fillProgress}=this.__closure;return{opacity:fillProgress.get()};}" };
const __initData7 = { code: "function OrbsArcadeRewardChainCellTsx8(){const{interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS}=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};}" };
const __initData8 = { code: "function OrbsArcadeRewardChainCellTsx9(){const{stemLength,stemProgress}=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};}" };
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default function OrbsArcadeRewardChainCell(timeline) {
  let CircleCheckIcon;
  let isFocused;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj17;
  let obj19;
  let reward;
  let status;
  let stemLength;
  let tmp26Result;
  let tmp26Result6;
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
  let playConfetti;
  ({ status, isFocused } = timeline);
  let tmp = playConfetti();
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
  const fn = function y() {
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
  };
  const obj5 = { getWindowProgress, timeline, grantAtMs, GRANT_FILL_MS: 400 };
  fn.__closure = obj5;
  fn.__workletHash = 16298581706582;
  fn.__initData = __initData;
  const tmp2Result = tmp2(tmp3[7]);
  derivedValue = tmp2Result.useDerivedValue(fn);
  const tmp2Result8 = tmp2(tmp3[7]);
  class L {
    constructor() {
      const value = timeline.get();
      if (typeof getWindowProgress === "function") {
        let num = 1;
        if (null != focusRingAtMs) {
          const items = [focusRingAtMs, focusRingAtMs + 500];
          const obj = ReanimatedRexport;
          num = obj.interpolate(value, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
        }
        return num;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  L.__closure = { getWindowProgress, timeline, focusRingAtMs, FOCUS_RING_MS: 500 };
  L.__workletHash = 2996759496631;
  L.__initData = __initData2;
  const derivedValue1 = tmp2Result8.useDerivedValue(L);
  const tmp2Result9 = tmp2(tmp3[7]);
  class N {
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
  N.__closure = { getWindowProgress, timeline, stemAtMs: sum2, GRANT_STEM_MS: 300 };
  N.__workletHash = 4451047761232;
  N.__initData = __initData3;
  derivedValue2 = tmp2Result9.useDerivedValue(N);
  playConfetti = obj4.useCallback(() => {
    const current = ref.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }, []);
  const fn2 = function k() {
    const tmp2 = null != sum1 && timeline.get() >= tmp;
    return tmp2;
  };
  fn2.__closure = { confettiAtMs: sum1, timeline };
  fn2.__workletHash = 17078558180439;
  fn2.__initData = __initData4;
  const tmp2Result10 = tmp2(tmp3[7]);
  class E {
    constructor(arg0, arg1) {
      const tmp = arg0 && false === arg1;
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback)();
      }
    }
  }
  E.__closure = { runOnJS: tmp2(tmp3[7]).runOnJS, playConfetti };
  E.__workletHash = 13780775152900;
  E.__initData = __initData5;
  ({ runOnJS: tmp2(tmp3[7]).runOnJS, playConfetti });
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn2, E);
  let items = [token1];
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
  const fn3 = function q() {
    const obj = { opacity: derivedValue.get() };
    return obj;
  };
  fn3.__closure = { fillProgress: derivedValue };
  fn3.__workletHash = 7749646821819;
  fn3.__initData = __initData6;
  const tmp2Result11 = tmp2(tmp3[7]);
  const animatedStyle = tmp2Result11.useAnimatedStyle(fn3);
  const tmp2Result12 = tmp2(tmp3[7]);
  class X {
    constructor() {
      let items1;
      const interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      const value = timeline.get();
      if (typeof getWindowProgress === "function") {
        let num = 1;
        if (null != c6) {
          const items = [c6, c6 + 400];
          const tmpResult = ReanimatedRexport;
          num = tmpResult.interpolate(value, items, [0, 1], tmp(5090).Extrapolation.CLAMP);
        }
        const obj = { transform: items1 };
        items1 = [{ scale: interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) }];
        const obj2 = { scale: interpolate(num, [0, 0.6, 1], [0, 1.2, 1]) };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  X.__closure = { interpolate: tmp2(tmp3[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS: 150, GRANT_CONFETTI_MS: 250 };
  X.__workletHash = 17236262951265;
  X.__initData = __initData7;
  ({ interpolate: tmp2(tmp3[7]).interpolate, getWindowProgress, timeline, checkAtMs: sum, GRANT_CHECK_MS: 150, GRANT_CONFETTI_MS: 250 });
  const animatedStyle1 = tmp2Result12.useAnimatedStyle(X);
  tmp2(tmp3[7]);
  class Y {
    constructor() {
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
  }
  Y.__closure = { stemLength, stemProgress: derivedValue2 };
  Y.__workletHash = 13706139303941;
  Y.__initData = __initData8;
  let tmp23 = null;
  const obj8 = { style: tmp.cell, children: items2 };
  if (null != stemLength) {
    const obj9 = { style: items1 };
    items1 = [tmp.stem, tmp20];
    tmp23 = sum1(tmp4(tmp3[7]).View, obj9);
  }
  items2 = [tmp23, , , , , , ];
  const obj10 = { style: items3 };
  items3 = [, ];
  ({ circle: arr4[0], ring: arr4[1] } = tmp);
  items2[1] = sum1(ref, obj10);
  if (isFocused) {
    const obj11 = { color: token, progress: derivedValue1, rewardSize: 50, strokeWidth: derivedValue2 };
    tmp26Result = tmp26(tmp4(tmp3[14]), obj11);
  } else {
    tmp26Result = null;
  }
  items2[2] = tmp26Result;
  let tmp21Result = null;
  if (status !== LOCKED) {
    let tmp26Result5 = null;
    const tmp2Result14 = tmp2(tmp3[10]);
    const tmp30 = sum2;
    if (!tmp2Result14.isThemeLight(theme)) {
      const obj12 = { style: items4 };
      items4 = [tmp.circle, memo, animatedStyle];
      tmp26Result5 = tmp26(tmp4(tmp3[7]).View, obj12);
    }
    const obj13 = { children: items5 };
    items5 = [tmp26Result5, ];
    const obj14 = { color: token1, progress: derivedValue, rewardSize: 50, strokeWidth: derivedValue2 };
    items5[1] = sum1(timeline(tmp3[14]), obj14);
    tmp21Result = tmp21(tmp30, obj13);
  }
  items2[3] = tmp21Result;
  if (reward.type === tmp2(tmp3[12]).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    tmp26Result6 = tmp26(tmp2(tmp3[15]).NitroCoinSpotIllustration, { height: 30 });
  } else {
    const obj15 = { reward, size: 38 };
    tmp26Result6 = tmp26(tmp4(tmp3[16]), obj15);
  }
  items2[4] = tmp26Result6;
  let tmp26Result7 = null;
  if (status !== LOCKED) {
    const obj16 = { style: items6, children: sum1(CircleCheckIcon, obj17) };
    items6 = [tmp.checkBadge, animatedStyle1];
    const View = tmp4(tmp3[7]).View;
    obj17 = { size: "xs", color: timeline(tmp3[6]).colors.STATUS_POSITIVE, secondaryColor: timeline(tmp3[6]).colors.WHITE };
    CircleCheckIcon = tmp2(tmp3[17]).CircleCheckIcon;
    tmp26Result7 = tmp26(View, obj16);
  }
  items2[5] = tmp26Result7;
  let tmp26Result8 = null;
  if (status !== LOCKED) {
    tmp26Result8 = null;
    if (null != grantAtMs) {
      const obj18 = { pointerEvents: "none", style: tmp.confetti, children: sum1(tmp4Result, obj19) };
      obj19 = { ref, source: tmp2(tmp3[19]), autoPlay: false, loop: false };
      tmp4Result = timeline(tmp3[18]);
      tmp26Result8 = tmp26(tmp22, obj18);
    }
  }
  items2[6] = tmp26Result8;
  return derivedValue(ref, obj8);
};
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
        num3 = 500;
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
