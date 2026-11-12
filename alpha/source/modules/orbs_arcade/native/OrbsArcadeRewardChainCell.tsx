// Module ID: 17543
// Function ID: 17544
// Name: OrbsArcadeRewardChainCell
// Dependencies: [32, 19, 17, 5244, 21, 5243, 575, 1652, 504, 5485, 5250, 5839, 17530, 1705, 671, 5830, 17544, 10355, 17545, 7864, 5860, 17546, 2]
// Exports: default, useOrbsArcadeRewardChainRowStyle, useOrbsArcadeRewardChainTimeline

// Module 17543 (OrbsArcadeRewardChainCell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let focusRingRewardId, map, obj1;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let tmp6;
let tmp7;
let tmp8;
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let c11 = 1.6666666666666667;
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj = { cell: { width: 50, height: 50, alignItems: "center", justifyContent: "center" }, circle: obj2, ring: obj3, confetti: { position: "absolute", top: -50, left: -50, width: 150, height: 150 }, stem: { position: "absolute", left: 24, width: 2 }, grantedStem: obj4, checkBadge: { position: "absolute", right: -1, bottom: -1 } };
obj2 = { borderRadius: 25 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 1.6666666666666667, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, opacity: 0.4 };
let closure_14 = createStyles(obj);
let items = [{ code: "(function getWindowProgress_OrbsArcadeRewardChainCellTsx1(timeMs,startMs,durationMs){let[interpolate,Extrapolation]=this.__closure;if(startMs==null){return 1;}return interpolate(timeMs,[startMs,startMs+durationMs],[0,1],Extrapolation.CLAMP);})" }, _mod1652.interpolate, _mod1652.Extrapolation];
let c0;
let c1;
[tmp6, tmp7, tmp8] = items;
function getWindowProgress(arg0, arg1, arg2) {
  let num = 1;
  if (null != arg1) {
    const items = [arg1, arg1 + arg2];
    num = _undefined(arg0, items, [0, 1], _undefined2.CLAMP);
  }
  return num;
}
let items1 = [tmp7, tmp8];
getWindowProgress.__closure = items1;
getWindowProgress.__workletHash = 8514018897669;
getWindowProgress.__initData = tmp6;
let closure_16 = { code: "(function OrbsArcadeRewardChainCellTsx2(){let[isGranted,isFocused,DIMMED_ROW_OPACITY,getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS,interpolate]=this.__closure;if(isGranted){return{opacity:1};}if(!isFocused){return{opacity:DIMMED_ROW_OPACITY};}const progress=getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);return{opacity:interpolate(progress,[0,1],[DIMMED_ROW_OPACITY,1])};})" };
let closure_17 = { code: "(function OrbsArcadeRewardChainCellTsx3(){let[getWindowProgress,timeline,grantAtMs,GRANT_FILL_MS]=this.__closure;return getWindowProgress(timeline.get(),grantAtMs,GRANT_FILL_MS);})" };
let closure_18 = { code: "(function OrbsArcadeRewardChainCellTsx4(){let[getWindowProgress,timeline,focusRingAtMs,FOCUS_RING_MS]=this.__closure;return getWindowProgress(timeline.get(),focusRingAtMs,FOCUS_RING_MS);})" };
let closure_19 = { code: "(function OrbsArcadeRewardChainCellTsx5(){let[getWindowProgress,timeline,stemAtMs,GRANT_STEM_MS]=this.__closure;return getWindowProgress(timeline.get(),stemAtMs,GRANT_STEM_MS);})" };
let closure_20 = { code: "(function OrbsArcadeRewardChainCellTsx6(){let[confettiAtMs,timeline]=this.__closure;return confettiAtMs!=null&&timeline.get()>=confettiAtMs;})" };
let closure_21 = { code: "(function OrbsArcadeRewardChainCellTsx7(reached,wasReached){let[scheduleOnRN,playConfetti]=this.__closure;if(reached&&wasReached===false){scheduleOnRN(playConfetti);}})" };
let closure_22 = { code: "(function OrbsArcadeRewardChainCellTsx8(){let[fillProgress]=this.__closure;return{opacity:fillProgress.get()};})" };
let closure_23 = { code: "(function OrbsArcadeRewardChainCellTsx9(){let[interpolate,getWindowProgress,timeline,checkAtMs,GRANT_CHECK_MS,GRANT_CONFETTI_MS]=this.__closure;return{transform:[{scale:interpolate(getWindowProgress(timeline.get(),checkAtMs,GRANT_CHECK_MS+GRANT_CONFETTI_MS),[0,0.6,1],[0,1.2,1])}]};})" };
let closure_24 = { code: "(function OrbsArcadeRewardChainCellTsx10(){let[stemLength,stemProgress]=this.__closure;var _stemLength,_stemLength2;return{top:-((_stemLength=stemLength)!==null&&_stemLength!==void 0?_stemLength:0)*stemProgress.get(),height:((_stemLength2=stemLength)!==null&&_stemLength2!==void 0?_stemLength2:0)*stemProgress.get()};})" };
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChainCell.tsx");

export default function OrbsArcadeRewardChainCell(arg0) {
  let CircleCheckIcon;
  let focusRingAtMs;
  let grantAtMs;
  let isFocused;
  let isStemTargetGranted;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let obj15;
  let obj17;
  let reward;
  let status;
  let stemLength;
  let timeline;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp41;
  let tmp42;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp4Result;
  let tmp50;
  let tmp51;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp61Result;
  let tmp68Result;
  let tmp68Result6;
  ({ reward, stemLength, isStemTargetGranted, timeline, grantAtMs } = arg0);
  let token1;
  let ref;
  ({ status, isFocused, focusRingAtMs } = arg0);
  let tmp = closure_14();
  let tmp2 = token1;
  let obj = token1(5250);
  const theme = obj.useThemeContext().theme;
  let obj2 = token1(5839);
  const token = obj2.useToken(ref(575).colors.ICON_STRONG);
  let obj3 = token1(5839);
  token1 = obj3.useToken(ref(575).colors.STATUS_POSITIVE);
  const LOCKED = token1(17530).OrbsArcadeRewardStatus.LOCKED;
  ref = react.useRef(null);
  let sum = null;
  if (null != grantAtMs) {
    let num = 400;
    sum = grantAtMs + 400;
  }
  let sum1 = null;
  if (null != sum) {
    let num2 = 150;
    sum1 = sum + 150;
  }
  let sum2 = null;
  if (null != sum1) {
    sum2 = sum1 + 250;
  }
  let items = [closure_17, getWindowProgress, timeline, grantAtMs, 400];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  const tmp2Result = tmp2(1652);
  class OrbsArcadeRewardChainCellTsx3 {
    constructor() {
      return _undefined(_undefined2.get(), c2, c3);
    }
  }
  const items1 = [tmp13, tmp14, tmp15, tmp16];
  OrbsArcadeRewardChainCellTsx3.__closure = items1;
  OrbsArcadeRewardChainCellTsx3.__workletHash = 11819610046638;
  OrbsArcadeRewardChainCellTsx3.__initData = tmp12;
  const derivedValue = tmp2Result.useDerivedValue(OrbsArcadeRewardChainCellTsx3);
  const items2 = [closure_18, getWindowProgress, timeline, focusRingAtMs, 500];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22] = items2;
  const tmp2Result8 = tmp2(1652);
  class OrbsArcadeRewardChainCellTsx4 {
    constructor() {
      return _undefined(_undefined2.get(), c2, c3);
    }
  }
  const items3 = [tmp19, tmp20, tmp21, tmp22];
  OrbsArcadeRewardChainCellTsx4.__closure = items3;
  OrbsArcadeRewardChainCellTsx4.__workletHash = 12936805051177;
  OrbsArcadeRewardChainCellTsx4.__initData = tmp18;
  const derivedValue1 = tmp2Result8.useDerivedValue(OrbsArcadeRewardChainCellTsx4);
  const items4 = [closure_19, getWindowProgress, timeline, sum2, 300];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28] = items4;
  const tmp2Result9 = tmp2(1652);
  class OrbsArcadeRewardChainCellTsx5 {
    constructor() {
      return _undefined(_undefined2.get(), c2, c3);
    }
  }
  const items5 = [tmp25, tmp26, tmp27, tmp28];
  OrbsArcadeRewardChainCellTsx5.__closure = items5;
  OrbsArcadeRewardChainCellTsx5.__workletHash = 15419288936808;
  OrbsArcadeRewardChainCellTsx5.__initData = tmp24;
  const derivedValue2 = tmp2Result9.useDerivedValue(OrbsArcadeRewardChainCellTsx5);
  const callback = obj4.useCallback(() => {
    const current = ref.current;
    let playResult;
    if (current != null) {
      playResult = current.play();
    }
    return playResult;
  }, []);
  const items6 = [closure_20, sum1, timeline];
  c0 = undefined;
  c1 = undefined;
  [tmp32, tmp33, tmp34] = items6;
  const tmp2Result10 = tmp2(1652);
  class OrbsArcadeRewardChainCellTsx6 {
    constructor() {
      const tmp2 = null != c0 && _undefined.get() >= tmp;
      return tmp2;
    }
  }
  const items7 = [tmp33, tmp34];
  OrbsArcadeRewardChainCellTsx6.__closure = items7;
  OrbsArcadeRewardChainCellTsx6.__workletHash = 11506455557581;
  OrbsArcadeRewardChainCellTsx6.__initData = tmp32;
  const items8 = [closure_21, , ];
  const useAnimatedReaction = tmp2Result10.useAnimatedReaction;
  items8[1] = tmp2(1705).scheduleOnRN;
  items8[2] = callback;
  c0 = undefined;
  c1 = undefined;
  [tmp35, tmp36, tmp37] = items8;
  class OrbsArcadeRewardChainCellTsx7 {
    constructor(arg0, arg1) {
      const tmp = arg0 && false === arg1;
      if (tmp) {
        _undefined(c1);
      }
    }
  }
  const items9 = [tmp36, tmp37];
  OrbsArcadeRewardChainCellTsx7.__closure = items9;
  OrbsArcadeRewardChainCellTsx7.__workletHash = 5869540871165;
  OrbsArcadeRewardChainCellTsx7.__initData = tmp35;
  const animatedReaction = useAnimatedReaction(OrbsArcadeRewardChainCellTsx6, OrbsArcadeRewardChainCellTsx7);
  const items10 = [token1];
  const items11 = [token1];
  const memo = obj4.useMemo(() => {
    let alphaResult;
    let items;
    const obj = { boxShadow: items };
    const obj2 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: alphaResult.css() };
    const obj3 = _modDef671(token1);
    items = [obj2];
    alphaResult = obj3.alpha(0.5);
    return obj;
  }, items10);
  const memo1 = obj4.useMemo(() => {
    const items = [, ];
    const obj = _modDef671(token1);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.css();
    items[1] = token1;
    return items;
  }, items11);
  const items12 = [closure_22, derivedValue];
  c0 = undefined;
  [tmp41, tmp42] = items12;
  const tmp2Result11 = tmp2(1652);
  class OrbsArcadeRewardChainCellTsx8 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items13 = [tmp42];
  OrbsArcadeRewardChainCellTsx8.__closure = items13;
  OrbsArcadeRewardChainCellTsx8.__workletHash = 16220502073133;
  OrbsArcadeRewardChainCellTsx8.__initData = tmp41;
  const animatedStyle = tmp2Result11.useAnimatedStyle(OrbsArcadeRewardChainCellTsx8);
  const items14 = [closure_23, , , , , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  tmp2(1652);
  items14[1] = tmp2(1652).interpolate;
  items14[2] = getWindowProgress;
  items14[3] = timeline;
  items14[4] = sum;
  items14[5] = 150;
  items14[6] = 250;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  let c5;
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items14;
  class OrbsArcadeRewardChainCellTsx9 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined(_undefined2(_undefined3.get(), c3, c4 + c5), [0, 0.6, 1], [0, 1.2, 1]) }];
      ({ scale: _undefined(_undefined2(_undefined3.get(), c3, c4 + c5), [0, 0.6, 1], [0, 1.2, 1]) });
      return obj;
    }
  }
  const items15 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
  OrbsArcadeRewardChainCellTsx9.__closure = items15;
  OrbsArcadeRewardChainCellTsx9.__workletHash = 15751771266873;
  OrbsArcadeRewardChainCellTsx9.__initData = tmp45;
  const animatedStyle1 = useAnimatedStyle(OrbsArcadeRewardChainCellTsx9);
  tmp2(1652);
  const items16 = [closure_24, stemLength, derivedValue2];
  c0 = undefined;
  c1 = undefined;
  [tmp54, tmp55, tmp56] = items16;
  class OrbsArcadeRewardChainCellTsx10 {
    constructor() {
      let obj2;
      let tmp;
      let num = c0;
      let num2 = c0;
      if (c0 == null) {
        num2 = 0;
      }
      const obj = { top: tmp * _undefined.get(), height: num * obj2.get() };
      obj2 = _undefined;
      tmp = -num2;
      if (num == null) {
        num = 0;
      }
      return obj;
    }
  }
  const items17 = [tmp55, tmp56];
  OrbsArcadeRewardChainCellTsx10.__closure = items17;
  OrbsArcadeRewardChainCellTsx10.__workletHash = 14451068892068;
  OrbsArcadeRewardChainCellTsx10.__initData = tmp54;
  let tmp61Result2 = null;
  const obj5 = { style: tmp.cell, children: items19 };
  if (null != stemLength) {
    const items18 = [tmp.stem, , ];
    let grantedStem;
    View = tmp4(1652).View;
    if (isStemTargetGranted) {
      grantedStem = tmp.grantedStem;
    }
    const obj6 = { style: items18, children: tmp61Result };
    items18[1] = grantedStem;
    items18[2] = tmp57;
    tmp61Result = null;
    if (!isStemTargetGranted) {
      const obj7 = { style: StyleSheet.absoluteFill, start, end, colors: memo1 };
      tmp61Result = tmp61(tmp4(5830), obj7);
    }
    tmp61Result2 = tmp61(View, obj6);
  }
  items19 = [tmp61Result2, , , , , , ];
  const obj8 = { style: items20 };
  items20 = [, ];
  ({ circle: arr21[0], ring: arr21[1] } = tmp);
  items19[1] = closure_8(View, obj8);
  if (isFocused) {
    const obj9 = { color: token, progress: derivedValue1, rewardSize: 50, strokeWidth };
    tmp68Result = tmp68(tmp4(17544), obj9);
  } else {
    tmp68Result = null;
  }
  items19[2] = tmp68Result;
  let tmp58Result = null;
  if (status !== LOCKED) {
    let tmp68Result5 = null;
    const tmp2Result14 = tmp2(5250);
    const tmp72 = closure_9;
    if (!tmp2Result14.isThemeLight(theme)) {
      const obj10 = { style: items21 };
      items21 = [tmp.circle, memo, animatedStyle];
      tmp68Result5 = tmp68(tmp4(1652).View, obj10);
    }
    const obj11 = { children: items22 };
    items22 = [tmp68Result5, ];
    const obj12 = { color: token1, progress: derivedValue, rewardSize: 50, strokeWidth };
    items22[1] = closure_8(ref(17544), obj12);
    tmp58Result = tmp58(tmp72, obj11);
  }
  items19[3] = tmp58Result;
  if (reward.type === tmp2(17530).OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    tmp68Result6 = tmp68(tmp2(10355).NitroCoinSpotIllustration, { height: 30 });
  } else {
    const obj13 = { reward, size: 38 };
    tmp68Result6 = tmp68(tmp4(17545), obj13);
  }
  items19[4] = tmp68Result6;
  let tmp68Result7 = null;
  if (status !== LOCKED) {
    const obj14 = { style: items23, children: closure_8(CircleCheckIcon, obj15) };
    items23 = [tmp.checkBadge, animatedStyle1];
    const View2 = tmp4(1652).View;
    obj15 = { size: "xs", color: ref(575).colors.STATUS_POSITIVE, secondaryColor: ref(575).colors.WHITE };
    CircleCheckIcon = tmp2(7864).CircleCheckIcon;
    tmp68Result7 = tmp68(View2, obj14);
  }
  items19[5] = tmp68Result7;
  let tmp68Result8 = null;
  if (status !== LOCKED) {
    tmp68Result8 = null;
    if (null != grantAtMs) {
      const obj16 = { pointerEvents: "none", style: tmp.confetti, children: closure_8(tmp4Result, obj17) };
      obj17 = { ref, source: tmp2(17546), autoPlay: false, loop: false };
      tmp4Result = ref(5860);
      tmp68Result8 = tmp68(tmp59, obj16);
    }
  }
  items19[6] = tmp68Result8;
  return closure_10(View, obj5);
};
export function useOrbsArcadeRewardChainRowStyle(arg0) {
  let focusRingAtMs;
  let isFocused;
  let isGranted;
  let timeline;
  let tmp10;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ isGranted, isFocused, timeline, focusRingAtMs } = arg0);
  let tmp = _mod1652;
  let items = [closure_16, isGranted, isFocused, 0.4, getWindowProgress, timeline, focusRingAtMs, 500, ];
  const useAnimatedStyle = tmp.useAnimatedStyle;
  items[8] = _mod1652.interpolate;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class OrbsArcadeRewardChainCellTsx2 {
    constructor() {
      tmp = closure_0;
      if (tmp) {
        return { opacity: 1 };
      } else {
        tmp2 = closure_1;
        if (tmp2) {
          tmp4 = closure_3;
          tmp5 = closure_4;
          tmp6 = closure_5;
          tmp7 = closure_6;
          obj1 = { opacity: null };
          tmp8 = closure_7;
          tmp9 = closure_2;
          items = [, ];
          items[0] = closure_2;
          num = 1;
          items[1] = 1;
          obj1.opacity = closure_7(closure_3(closure_4.get(), closure_5, closure_6), [0, 1], items);
          return obj1;
        } else {
          obj = { opacity: null };
          tmp3 = closure_2;
          obj.opacity = closure_2;
          return obj;
        }
      }
    }
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  OrbsArcadeRewardChainCellTsx2.__closure = items1;
  OrbsArcadeRewardChainCellTsx2.__workletHash = 17555703606007;
  OrbsArcadeRewardChainCellTsx2.__initData = tmp2;
  return useAnimatedStyle(OrbsArcadeRewardChainCellTsx2);
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
        num3 = 500;
      }
      return obj;
    }
  }), 1)[0];
  let obj2 = _mod1652;
  const sharedValue = obj2.useSharedValue(0);
  const items1 = [first, sharedValue];
  const effect = first.useEffect(() => {
    if (null != first) {
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(() => {
        const obj = require("timing/timing");
        const obj2 = { duration: first.endMs, easing: require("module_1652").Easing.linear };
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
