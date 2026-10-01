// Module ID: 16394
// Function ID: 16395
// Name: VibegrationsConjureShellGlow
// Dependencies: [32, 19, 17, 4825, 1182, 21, 1364, 576, 672, 4836, 504, 4686, 4566, 4837, 5293, 16395, 5976, 2]
// Exports: default

// Module 16394 (VibegrationsConjureShellGlow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set, set2, set3;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = PlatformUtils.isAndroid();
let c13 = 500;
let items = [[0, 1], [0.09, 0.95], [0.17, 0.98], [0.29, 0.86], [0.37, 0.94], [0.48, 1], [0.56, 0.92], [0.64, 0.96], [0.76, 0.89], [0.84, 0.99], [1, 1]];
function pulseAt(arg0) {
  let first;
  let tmp4;
  let tmp7;
  let tmp8;
  let num = 1;
  let num2 = 1;
  if (1 < items.length) {
    [first, tmp4] = items[num2];
    while (arg0 > first) {
      num2 = num2 + num;
    }
    [tmp7, tmp8] = _slicedToArray(items[num2 - num], 2);
    const diff = first - tmp7;
    const diff1 = tmp4 - tmp8;
    _slicedToArray(items[num2 - num], 2);
    if (diff > 0) {
      num = (arg0 - tmp7) / diff;
    }
    return tmp8 + diff1 * num;
  }
  return num;
}
pulseAt.__closure = { PULSE_KEYFRAMES: items };
pulseAt.__workletHash = 13066223944096;
pulseAt.__initData = { code: "function pulseAt_VibegrationsConjureShellGlowTsx1(progress){const{PULSE_KEYFRAMES}=this.__closure;for(let i=1;i<PULSE_KEYFRAMES.length;i++){const[t1,v1]=PULSE_KEYFRAMES[i];if(progress<=t1){const[t0,v0]=PULSE_KEYFRAMES[i-1];const span=t1-t0;const local=span>0?(progress-t0)/span:1;return v0+(v1-v0)*local;}}return 1;}" };
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"];
const locations = [0, 0.45, 1];
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const start2 = { x: 0, y: 0.5 };
const end2 = { x: 1, y: 0.5 };
let closure_22 = createStyles.createStyles({ root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 }, band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 }, sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" }, fill: { flex: 1 }, ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" }, ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 } });
const __initData = { code: "function VibegrationsConjureShellGlowTsx2(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData2 = { code: "function VibegrationsConjureShellGlowTsx3(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData3 = { code: "function VibegrationsConjureShellGlowTsx4(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData4 = { code: "function VibegrationsConjureShellGlowTsx5(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureShellGlow.tsx");

export default function VibegrationsConjureShellGlow(thinking) {
  let c3;
  let closure_6;
  let items11;
  let items12;
  let items13;
  let items14;
  let items7;
  let items8;
  let items9;
  let num6;
  let obj10;
  let obj12;
  let obj22;
  let str;
  let tmp29Result5;
  let tmp29Result6;
  let tmp38;
  let tmp41;
  let width;
  thinking = thinking.thinking;
  let num = thinking.bleedBottom;
  if (num === undefined) {
    num = 0;
  }
  let stateFromStores1;
  let num2;
  width = undefined;
  closure_6 = undefined;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue1;
  let sharedValue4;
  let sharedValue5;
  let tmp = closure_22();
  let tmp2 = thinking;
  let obj = thinking(stateFromStores1[10]);
  items = [sharedValue];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue.useReducedMotion);
  let obj2 = thinking(stateFromStores1[10]);
  let items1 = [sharedValue2];
  stateFromStores1 = obj2.useStateFromStores(items1, () => sharedValue2.theme);
  let obj3 = thinking(stateFromStores1[11]);
  const isThemeDarkResult = obj3.isThemeDark(stateFromStores1);
  _slicedToArray = isThemeDarkResult;
  let obj4 = num2;
  let items2 = [stateFromStores1];
  let items3 = [isThemeDarkResult];
  const memo = num2.useMemo(() => {
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_BASE_LOW);
    items = [semanticColor, semanticColor, ];
    const obj = _modDef672(semanticColor);
    const alphaResult = obj.alpha(0);
    items[2] = alphaResult.css();
    return items;
  }, items2);
  const memo1 = num2.useMemo(() => {
    let BG_GRADIENT_CHROMA_GLOW_1;
    let BG_GRADIENT_CHROMA_GLOW_2;
    let BG_GRADIENT_MIDNIGHT_BLURPLE_1;
    let ILLO_PURPLE_30;
    let ILLO_PURPLE_40;
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
      const tmpResult = _modDef672;
      const hslResult = tmpResult.hsl(184, 0.8, 0.6);
      const hexResult = hslResult.hex();
      const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
      obj2 = { base: items2, chroma: items3 };
      items2 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
      items3 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
    }
    return obj2;
  }, items3);
  num2 = 0.2;
  if (isThemeDarkResult) {
    num2 = 0.3;
  }
  [width, closure_6] = obj4.useState(0);
  const callback = obj4.useCallback((nativeEvent) => {
    let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
    let tmp = closure_6((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  let num3 = 0.504;
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
  let num5 = 204;
  const useSharedValue3 = tmp2(tmp3[12]).useSharedValue;
  tmp2(stateFromStores1[12]);
  if (thinking) {
    num5 = v500;
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
    const Easing = ReanimatedRexport.Easing;
    const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
    let num = 0.504;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (thinking) {
      num = 1;
    }
    const result = set(withTiming(num, { duration: 700, easing: bezierResult }, "animate-always"));
    num2 = 0;
    set2 = sharedValue2.set;
    const withTiming2 = timing.withTiming;
    timing;
    if (thinking) {
      num2 = 1;
    }
    set2(withTiming2(num2, { duration: 700, easing: bezierResult }, "animate-always"));
    let num3 = 204;
    set3 = sharedValue3.set;
    const withTiming3 = timing.withTiming;
    timing;
    if (thinking) {
      num3 = c13;
    }
    set3(withTiming3(num3, { duration: 400, easing: bezierResult }, "animate-always"));
  }, items4);
  const items5 = [sharedValue4, sharedValue5, stateFromStores];
  const effect1 = obj4.useEffect(() => {
    let Easing;
    let Easing2;
    let fn;
    const tmp = stateFromStores;
    if (tmp) {
      const obj3 = ReanimatedRexport;
      obj3.cancelAnimation(sharedValue4);
      const obj4 = ReanimatedRexport;
      obj4.cancelAnimation(sharedValue5);
      const result = sharedValue4.set(0);
      const result1 = sharedValue5.set(0);
    } else {
      set = sharedValue4.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = { duration: 24000, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result2 = set(withRepeat(withTiming(1, obj), -1, true));
      set2 = sharedValue5.set;
      const withRepeat2 = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj2 = { duration: 12000, easing: Easing2.inOut(ReanimatedRexport.Easing.ease) };
      const withTiming2 = timing.withTiming;
      timing;
      Easing2 = ReanimatedRexport.Easing;
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
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        let obj = { duration: 5500, easing: ReanimatedRexport.Easing.ease };
        const withTiming = timing.withTiming;
        timing;
        const result1 = set(withRepeat(withTiming(1, obj), -1, false));
        fn = () => {
          const obj = thinking(stateFromStores1[12]);
          return obj.cancelAnimation(sharedValue1);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue1);
    set2 = sharedValue1.set;
    const obj3 = timing;
    set2(obj3.withTiming(0, { duration: 700 }));
  }, items6);
  let fn = function q() {
    let first;
    let tmp11;
    let tmp12;
    let tmp7;
    const value = sharedValue.get();
    const value2 = sharedValue1.get();
    if (typeof pulseAt === "function") {
      let num3 = 1;
      let num4 = 1;
      if (1 < items.length) {
        [first, tmp7] = items[num3];
        while (value2 > first) {
          let sum = num3 + 1;
          num3 = sum;
          num4 = 1;
        }
        [tmp11, tmp12] = _slicedToArray(items[num3 - 1], 2);
        const diff = first - tmp11;
        let num6 = 1;
        const diff1 = tmp7 - tmp12;
        _slicedToArray(items[num3 - 1], 2);
        if (diff > 0) {
          num6 = (value2 - tmp11) / diff;
        }
        num4 = tmp12 + diff1 * num6;
      }
      const result = value * num4;
      const obj = { transform: items };
      items = [{ translateY: c13 * (1 - result) / 2 }, ];
      const obj2 = { translateY: c13 * (1 - result) / 2 };
      const obj3 = { scaleY: result };
      items[1] = obj3;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj5 = { lift: sharedValue, pulseAt, pulse: sharedValue1, BAND_HEIGHT: v500 };
  fn.__closure = obj5;
  fn.__workletHash = 16853895273556;
  fn.__initData = __initData;
  const tmp2Result15 = tmp2(stateFromStores1[12]);
  const animatedStyle = tmp2Result15.useAnimatedStyle(fn);
  const tmp2Result16 = tmp2(stateFromStores1[12]);
  class J {
    constructor() {
      const obj = { opacity: (1 - sharedValue2.get()) * num2, transform: items };
      items = [{ translateX: -sharedValue4.get() * first }];
      ({ translateX: -sharedValue4.get() * first });
      return obj;
    }
  }
  J.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftBase: sharedValue4, width };
  J.__workletHash = 2962971489312;
  J.__initData = __initData2;
  const animatedStyle1 = tmp2Result16.useAnimatedStyle(J);
  const tmp2Result17 = tmp2(stateFromStores1[12]);
  class Q {
    constructor() {
      const obj = { opacity: sharedValue2.get() * num2, transform: items };
      items = [{ translateX: -sharedValue5.get() * first }];
      ({ translateX: -sharedValue5.get() * first });
      return obj;
    }
  }
  Q.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftChroma: sharedValue5, width };
  Q.__workletHash = 8403192846330;
  Q.__initData = __initData3;
  const animatedStyle2 = tmp2Result17.useAnimatedStyle(Q);
  const tmp2Result18 = tmp2(stateFromStores1[12]);
  class Z {
    constructor() {
      let first;
      let height;
      let tmp14;
      let tmp18;
      let tmp19;
      const tmp = closure_12;
      if (tmp) {
        const result = c13 * sharedValue.get();
        const value = sharedValue1.get();
        if (typeof pulseAt === "function") {
          let num = 1;
          let num3 = 1;
          let num4 = 1;
          if (1 < items.length) {
            [first, tmp14] = items[num3];
            while (value > first) {
              let sum = num3 + num;
              num3 = sum;
              num4 = num;
            }
            [tmp18, tmp19] = _slicedToArray(items[num3 - num], 2);
            const diff = first - tmp18;
            const diff1 = tmp14 - tmp19;
            _slicedToArray(items[num3 - num], 2);
            if (diff > 0) {
              num = (value - tmp18) / diff;
            }
            num4 = tmp19 + diff1 * num;
          }
          height = result * num4;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        height = sharedValue3.get();
      }
      return { height };
    }
  }
  const obj6 = { ANDROID: sharedValue5, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue1, ditherHeight: sharedValue3 };
  Z.__closure = obj6;
  Z.__workletHash = 6204121722515;
  Z.__initData = __initData4;
  const animatedStyle3 = tmp2Result18.useAnimatedStyle(Z);
  const obj7 = { style: tmp.fill, colors, locations, start, end };
  const tmp34 = sharedValue3(stateFromStores(stateFromStores1[14]), obj7);
  const obj8 = { children: items8 };
  const obj9 = { style: items7, children: sharedValue3(stateFromStores(stateFromStores1[14]), obj10) };
  items7 = [tmp.sweep, animatedStyle1];
  const View = stateFromStores(tmp3[12]).View;
  obj10 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
  items8 = [sharedValue3(View, obj9), ];
  const obj11 = { style: items9, children: sharedValue3(stateFromStores(stateFromStores1[14]), obj12) };
  items9 = [tmp.sweep, animatedStyle2];
  const View2 = stateFromStores(tmp3[12]).View;
  obj12 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
  items8[1] = sharedValue3(View2, obj11);
  const tmp36 = sharedValue4(sharedValue1, obj8);
  const obj13 = { style: tmp.ditherField, children: sharedValue3(tmp38, size) };
  size = { width, height: v500, thinking, fill: str, fillOpacity: num6 };
  str = "rgb(120, 60, 200)";
  const tmp31 = locations;
  const tmp32 = start;
  const tmp33 = end;
  const tmp35 = sharedValue4;
  tmp38 = stateFromStores(stateFromStores1[15]);
  if (isThemeDarkResult) {
    str = "rgb(225, 240, 255)";
  }
  num6 = 0.16;
  if (isThemeDarkResult) {
    num6 = 0.18;
  }
  const tmp29Result = sharedValue3(closure_6, obj13);
  const items10 = [tmp.root, ];
  let tmp40 = num > 0;
  if (tmp40) {
    tmp40 = { bottom: -num };
    const obj14 = { bottom: -num };
  }
  const obj15 = { style: items10, pointerEvents: "none", onLayout: callback, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items12 };
  items10[1] = tmp40;
  const obj16 = { style: items11, children: tmp29Result5 };
  items11 = [tmp.band, animatedStyle];
  const View3 = tmp30(tmp3[12]).View;
  if (sharedValue5) {
    const obj17 = { style: width.absoluteFill, children: tmp36 };
    tmp29Result5 = tmp29(tmp37, obj17);
    tmp41 = width;
  } else {
    tmp41 = width;
    const obj18 = { style: width.absoluteFill, maskElement: tmp34, children: tmp36 };
    tmp29Result5 = tmp29(tmp30(tmp3[16]), obj18);
  }
  items12 = [sharedValue3(View3, obj16), , ];
  let tmp29Result7 = null;
  if (!stateFromStores) {
    const obj19 = { style: items13, children: tmp29Result6 };
    items13 = [tmp.ditherClip, animatedStyle3];
    tmp29Result6 = tmp29Result;
    const View4 = tmp30(tmp3[12]).View;
    if (!sharedValue5) {
      const obj20 = { style: tmp41.absoluteFill, maskElement: tmp34, children: tmp29Result };
      tmp29Result6 = tmp29(tmp30(tmp3[16]), obj20);
    }
    tmp29Result7 = tmp29(View4, obj19);
  }
  items12[1] = tmp29Result7;
  let tmp29Result8 = null;
  if (sharedValue5) {
    const obj21 = { style: items14, children: sharedValue3(stateFromStores(stateFromStores1[14]), obj22) };
    items14 = [tmp.band, animatedStyle];
    const View5 = tmp30(tmp3[12]).View;
    obj22 = { style: tmp.fill, colors: memo, locations: tmp31, start: tmp32, end: tmp33 };
    tmp29Result8 = tmp29(View5, obj21);
  }
  items12[2] = tmp29Result8;
  return tmp35(closure_6, obj15);
};
