// Module ID: 12743
// Function ID: 12744
// Name: ConjureShellGlow
// Dependencies: [32, 19, 17, 5142, 1192, 21, 1377, 575, 671, 5141, 504, 5149, 1652, 5377, 5710, 12744, 7164, 2]
// Exports: default

// Module 12743 (ConjureShellGlow)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let set, set2, set3;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let tmp4;
let tmp5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = PlatformUtils.isAndroid();
let c13 = 500;
let items = [{ code: "(function pulseAt_ConjureShellGlowTsx1(progress){let[PULSE_KEYFRAMES]=this.__closure;for(let i=1;i<PULSE_KEYFRAMES.length;i++){const[t1,v1]=PULSE_KEYFRAMES[i];if(progress<=t1){const[t0,v0]=PULSE_KEYFRAMES[i-1];const span=t1-t0;const local=span>0?(progress-t0)/span:1;return v0+(v1-v0)*local;}}return 1;})" }, ];
let items1 = [[0, 1], [0.09, 0.95], [0.17, 0.98], [0.29, 0.86], [0.37, 0.94], [0.48, 1], [0.56, 0.92], [0.64, 0.96], [0.76, 0.89], [0.84, 0.99], [1, 1]];
items[1] = items1;
let c0;
[tmp4, tmp5] = items;
function pulseAt(arg0) {
  let first;
  let tmp4;
  let tmp7;
  let tmp8;
  let num = 1;
  let num2 = 1;
  if (1 < _undefined.length) {
    [first, tmp4] = _undefined[num2];
    while (arg0 > first) {
      num2 = num2 + num;
    }
    [tmp7, tmp8] = _slicedToArray(_undefined[num2 - num], 2);
    const diff = first - tmp7;
    const diff1 = tmp4 - tmp8;
    _slicedToArray(_undefined[num2 - num], 2);
    if (diff > 0) {
      num = (arg0 - tmp7) / diff;
    }
    return tmp8 + diff1 * num;
  }
  return num;
}
let items2 = [tmp5];
pulseAt.__closure = items2;
pulseAt.__workletHash = 3950886674746;
pulseAt.__initData = tmp4;
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"];
const locations = [0, 0.45, 1];
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const start2 = { x: 0, y: 0.5 };
const end2 = { x: 1, y: 0.5 };
let closure_21 = createStyles.createStyles({ root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 }, band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 }, sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" }, fill: { flex: 1 }, ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" }, ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 } });
let closure_22 = { code: "(function ConjureShellGlowTsx2(){let[lift,pulseAt,pulse,BAND_HEIGHT]=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};})" };
let closure_23 = { code: "(function ConjureShellGlowTsx3(){let[chromaMix,layerAlpha,driftBase,width]=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};})" };
let closure_24 = { code: "(function ConjureShellGlowTsx4(){let[chromaMix,layerAlpha,driftChroma,width]=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};})" };
let closure_25 = { code: "(function ConjureShellGlowTsx5(){let[ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight]=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureShellGlow.tsx");

export default function ConjureShellGlow(thinking) {
  let _undefined;
  let c3;
  let c4;
  let items15;
  let items16;
  let items17;
  let items19;
  let items20;
  let items21;
  let items22;
  let num6;
  let obj10;
  let obj20;
  let obj8;
  let str;
  let tmp10;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp53Result5;
  let tmp53Result6;
  let tmp62;
  let tmp65;
  thinking = thinking.thinking;
  let num = thinking.bleedBottom;
  if (num === undefined) {
    num = 0;
  }
  let stateFromStores1;
  react = undefined;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue1;
  let sharedValue4;
  let sharedValue5;
  let tmp = closure_21();
  let tmp2 = thinking;
  let obj = thinking(stateFromStores1[10]);
  let items = [sharedValue3];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue3.useReducedMotion);
  let obj2 = thinking(stateFromStores1[10]);
  let items1 = [sharedValue1];
  stateFromStores1 = obj2.useStateFromStores(items1, () => sharedValue1.theme);
  let obj3 = thinking(stateFromStores1[11]);
  const isThemeDarkResult = obj3.isThemeDark(stateFromStores1);
  _slicedToArray = isThemeDarkResult;
  let obj4 = react;
  let items2 = [stateFromStores1];
  let items3 = [isThemeDarkResult];
  const memo = react.useMemo(() => {
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_BASE_LOW);
    const items = [semanticColor, semanticColor, ];
    const obj = _modDef671(semanticColor);
    const alphaResult = obj.alpha(0);
    items[2] = alphaResult.css();
    return items;
  }, items2);
  const memo1 = react.useMemo(() => {
    let BG_GRADIENT_CHROMA_GLOW_1;
    let BG_GRADIENT_CHROMA_GLOW_2;
    let BG_GRADIENT_MIDNIGHT_BLURPLE_1;
    let ILLO_PURPLE_30;
    let ILLO_PURPLE_40;
    let items;
    let items1;
    let items2;
    let items3;
    let obj2;
    const unsafe_rawColors = nativeDefault.unsafe_rawColors;
    if (c3) {
      ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
      const obj = { base: items, chroma: items1 };
      items = [BG_GRADIENT_MIDNIGHT_BLURPLE_1, unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2, BG_GRADIENT_MIDNIGHT_BLURPLE_1];
      items1 = [BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2, unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3, BG_GRADIENT_CHROMA_GLOW_2, BG_GRADIENT_CHROMA_GLOW_1];
      obj2 = obj;
    } else {
      ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
      const tmpResult = _modDef671;
      const hslResult = tmpResult.hsl(184, 0.8, 0.6);
      const hexResult = hslResult.hex();
      const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
      obj2 = { base: items2, chroma: items3 };
      items2 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
      items3 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
    }
    return obj2;
  }, items3);
  let num2 = 0.2;
  if (isThemeDarkResult) {
    num2 = 0.3;
  }
  const tmp9 = _slicedToArray(obj4.useState(0), 2);
  [tmp10, c4] = tmp9;
  const callback = obj4.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
    let tmp = _undefined((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  let num3 = 0;
  const useSharedValue = tmp2(tmp3[12]).useSharedValue;
  tmp2(stateFromStores1[12]);
  if (thinking) {
    num3 = 1;
  }
  sharedValue = useSharedValue(num3);
  let num4 = 0;
  const useSharedValue2 = tmp2(tmp3[12]).useSharedValue;
  tmp2(stateFromStores1[12]);
  if (thinking) {
    num4 = 1;
  }
  sharedValue2 = useSharedValue2(num4);
  let num5 = 0;
  const useSharedValue3 = tmp2(tmp3[12]).useSharedValue;
  tmp2(stateFromStores1[12]);
  if (thinking) {
    num5 = c13;
  }
  sharedValue3 = useSharedValue3(num5);
  const tmp2Result12 = tmp2(stateFromStores1[12]);
  sharedValue1 = tmp2Result12.useSharedValue(0);
  const tmp2Result13 = tmp2(stateFromStores1[12]);
  sharedValue4 = tmp2Result13.useSharedValue(0);
  const tmp2Result14 = tmp2(stateFromStores1[12]);
  sharedValue5 = tmp2Result14.useSharedValue(0);
  const items4 = [sharedValue2, sharedValue3, sharedValue, thinking];
  const effect = obj4.useEffect(() => {
    const Easing = _mod1652.Easing;
    const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (thinking) {
      num = 1;
    }
    const result = set(withTiming(num, { duration: 700, easing: bezierResult }, "animate-always"));
    let num2 = 0;
    set2 = sharedValue2.set;
    const withTiming2 = timing_timing.withTiming;
    timing_timing;
    if (thinking) {
      num2 = 1;
    }
    set2(withTiming2(num2, { duration: 700, easing: bezierResult }, "animate-always"));
    let num3 = 0;
    set3 = sharedValue3.set;
    const withTiming3 = timing_timing.withTiming;
    timing_timing;
    if (thinking) {
      num3 = c13;
    }
    set3(withTiming3(num3, { duration: 400, easing: bezierResult }, "animate-always"));
  }, items4);
  const items5 = [sharedValue4, sharedValue5, stateFromStores, thinking];
  const effect1 = obj4.useEffect(() => {
    let Easing;
    let Easing2;
    let fn;
    const tmp = stateFromStores;
    if (tmp) {
      const obj3 = _mod1652;
      obj3.cancelAnimation(sharedValue4);
      const obj4 = _mod1652;
      obj4.cancelAnimation(sharedValue5);
      const result = sharedValue4.set(0);
      const result1 = sharedValue5.set(0);
    } else if (thinking) {
      set = sharedValue4.set;
      const withRepeat = _mod1652.withRepeat;
      _mod1652;
      let obj = { duration: 24000, easing: Easing.inOut(_mod1652.Easing.ease) };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      Easing = _mod1652.Easing;
      const result2 = set(withRepeat(withTiming(1, obj), -1, true));
      set2 = sharedValue5.set;
      const withRepeat2 = _mod1652.withRepeat;
      _mod1652;
      let obj2 = { duration: 12000, easing: Easing2.inOut(_mod1652.Easing.ease) };
      const withTiming2 = timing_timing.withTiming;
      timing_timing;
      Easing2 = _mod1652.Easing;
      set2(withRepeat2(withTiming2(1, obj2), -1, true));
      fn = () => {
        const obj = thinking(stateFromStores1[12]);
        obj.cancelAnimation(sharedValue4);
        const obj2 = thinking(stateFromStores1[12]);
        obj2.cancelAnimation(sharedValue5);
      };
    }
    return fn;
  }, items5);
  const items6 = [sharedValue1, stateFromStores, thinking];
  const effect2 = obj4.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      let fn;
      const tmp2 = thinking;
      if (tmp2) {
        const result = sharedValue1.set(0);
        set = sharedValue1.set;
        const withRepeat = _mod1652.withRepeat;
        _mod1652;
        let obj = { duration: 5500, easing: _mod1652.Easing.ease };
        const withTiming = timing_timing.withTiming;
        timing_timing;
        const result1 = set(withRepeat(withTiming(1, obj), -1, false));
        fn = () => {
          const obj = thinking(stateFromStores1[12]);
          return obj.cancelAnimation(sharedValue1);
        };
      }
      return fn;
    }
    const obj2 = _mod1652;
    obj2.cancelAnimation(sharedValue1);
    set2 = sharedValue1.set;
    const obj3 = timing_timing;
    set2(obj3.withTiming(0, { duration: 700 }));
  }, items6);
  const items7 = [closure_22, sharedValue, pulseAt, sharedValue1, ];
  items7[4] = c13;
  let c0;
  let c1;
  let c2;
  _slicedToArray = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30] = items7;
  const tmp2Result15 = tmp2(stateFromStores1[12]);
  class ConjureShellGlowTsx2 {
    constructor() {
      let items;
      const value = _undefined.get();
      const result = value * _undefined2(_undefined3.get());
      const obj = { transform: items };
      items = [, ];
      const obj2 = { translateY: c3 * (1 - result) / 2 };
      items[0] = obj2;
      items[1] = { scaleY: result };
      return obj;
    }
  }
  const items8 = [tmp27, tmp28, tmp29, tmp30];
  ConjureShellGlowTsx2.__closure = items8;
  ConjureShellGlowTsx2.__workletHash = 16357624272846;
  ConjureShellGlowTsx2.__initData = tmp26;
  const animatedStyle = tmp2Result15.useAnimatedStyle(ConjureShellGlowTsx2);
  const items9 = [closure_23, sharedValue2, num2, sharedValue4, tmp10];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  _slicedToArray = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36] = items9;
  const tmp24 = pulseAt;
  const tmp2Result16 = tmp2(stateFromStores1[12]);
  class ConjureShellGlowTsx3 {
    constructor() {
      let items;
      const obj = { opacity: (1 - _undefined.get()) * c1, transform: items };
      items = [{ translateX: -_undefined2.get() * c3 }];
      ({ translateX: -_undefined2.get() * c3 });
      return obj;
    }
  }
  const items10 = [tmp33, tmp34, tmp35, tmp36];
  ConjureShellGlowTsx3.__closure = items10;
  ConjureShellGlowTsx3.__workletHash = 17164869251802;
  ConjureShellGlowTsx3.__initData = tmp32;
  const animatedStyle1 = tmp2Result16.useAnimatedStyle(ConjureShellGlowTsx3);
  const items11 = [closure_24, sharedValue2, num2, sharedValue5, tmp10];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  _slicedToArray = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42] = items11;
  const tmp2Result17 = tmp2(stateFromStores1[12]);
  class ConjureShellGlowTsx4 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get() * c1, transform: items };
      items = [{ translateX: -_undefined2.get() * c3 }];
      ({ translateX: -_undefined2.get() * c3 });
      return obj;
    }
  }
  const items12 = [tmp39, tmp40, tmp41, tmp42];
  ConjureShellGlowTsx4.__closure = items12;
  ConjureShellGlowTsx4.__workletHash = 6789154933248;
  ConjureShellGlowTsx4.__initData = tmp38;
  const animatedStyle2 = tmp2Result17.useAnimatedStyle(ConjureShellGlowTsx4);
  const items13 = [closure_25, closure_12, tmp25, sharedValue, tmp24, sharedValue1, sharedValue3];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let c5;
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items13;
  const tmp2Result18 = tmp2(stateFromStores1[12]);
  class ConjureShellGlowTsx5 {
    constructor() {
      let height;
      const tmp = c0;
      if (tmp) {
        const result = c1 * _undefined.get();
        height = result * _undefined2(_undefined3.get());
      } else {
        height = _undefined4.get();
      }
      return { height };
    }
  }
  const items14 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
  ConjureShellGlowTsx5.__closure = items14;
  ConjureShellGlowTsx5.__workletHash = 6143578775689;
  ConjureShellGlowTsx5.__initData = tmp45;
  const animatedStyle3 = tmp2Result18.useAnimatedStyle(ConjureShellGlowTsx5);
  const obj5 = { style: tmp.fill, colors, locations, start, end };
  const tmp58 = sharedValue4(stateFromStores(stateFromStores1[14]), obj5);
  const obj6 = { children: items16 };
  const obj7 = { style: items15, children: sharedValue4(stateFromStores(stateFromStores1[14]), obj8) };
  items15 = [tmp.sweep, animatedStyle1];
  const View = stateFromStores(tmp3[12]).View;
  obj8 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
  items16 = [sharedValue4(View, obj7), ];
  const obj9 = { style: items17, children: sharedValue4(stateFromStores(stateFromStores1[14]), obj10) };
  items17 = [tmp.sweep, animatedStyle2];
  const View2 = stateFromStores(tmp3[12]).View;
  obj10 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
  items16[1] = sharedValue4(View2, obj9);
  const tmp60 = closure_11(sharedValue5, obj6);
  const obj11 = { style: tmp.ditherField, children: sharedValue4(tmp62, size) };
  size = { width: tmp10, height: tmp25, thinking, fill: str, fillOpacity: num6 };
  str = "rgb(120, 60, 200)";
  const tmp55 = locations;
  const tmp56 = start;
  const tmp57 = end;
  const tmp59 = closure_11;
  tmp62 = stateFromStores(stateFromStores1[15]);
  if (isThemeDarkResult) {
    str = "rgb(225, 240, 255)";
  }
  num6 = 0.16;
  if (isThemeDarkResult) {
    num6 = 0.18;
  }
  const tmp53Result = sharedValue4(sharedValue2, obj11);
  const items18 = [tmp.root, ];
  let tmp64 = num > 0;
  if (tmp64) {
    tmp64 = { bottom: -num };
    const obj12 = { bottom: -num };
  }
  const obj13 = { style: items18, pointerEvents: "none", onLayout: callback, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items20 };
  items18[1] = tmp64;
  const obj14 = { style: items19, children: tmp53Result5 };
  items19 = [tmp.band, animatedStyle];
  const View3 = tmp54(tmp3[12]).View;
  if (closure_12) {
    const obj15 = { style: sharedValue.absoluteFill, children: tmp60 };
    tmp53Result5 = tmp53(tmp61, obj15);
    tmp65 = sharedValue;
  } else {
    tmp65 = sharedValue;
    const obj16 = { style: sharedValue.absoluteFill, maskElement: tmp58, children: tmp60 };
    tmp53Result5 = tmp53(tmp54(tmp3[16]), obj16);
  }
  items20 = [sharedValue4(View3, obj14), , ];
  let tmp53Result7 = null;
  if (!stateFromStores) {
    const obj17 = { style: items21, children: tmp53Result6 };
    items21 = [tmp.ditherClip, animatedStyle3];
    tmp53Result6 = tmp53Result;
    const View4 = tmp54(tmp3[12]).View;
    if (!closure_12) {
      const obj18 = { style: tmp65.absoluteFill, maskElement: tmp58, children: tmp53Result };
      tmp53Result6 = tmp53(tmp54(tmp3[16]), obj18);
    }
    tmp53Result7 = tmp53(View4, obj17);
  }
  items20[1] = tmp53Result7;
  let tmp53Result8 = null;
  if (closure_12) {
    const obj19 = { style: items22, children: sharedValue4(stateFromStores(stateFromStores1[14]), obj20) };
    items22 = [tmp.band, animatedStyle];
    const View5 = tmp54(tmp3[12]).View;
    obj20 = { style: tmp.fill, colors: memo, locations: tmp55, start: tmp56, end: tmp57 };
    tmp53Result8 = tmp53(View5, obj19);
  }
  items20[2] = tmp53Result8;
  return tmp59(sharedValue2, obj13);
};
