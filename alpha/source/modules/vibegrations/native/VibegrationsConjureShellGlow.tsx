// Module ID: 16722
// Function ID: 16723
// Name: VibegrationsConjureShellGlow
// Dependencies: [32, 19, 17, 4879, 1193, 21, 1369, 587, 683, 4890, 558, 576, 504, 4730, 4612, 4891, 5605, 16723, 6052, 2]

// Module 16722 (VibegrationsConjureShellGlow)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let set, set2, set3, thinking;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const ANDROID = PlatformUtils.isAndroid();
let c13 = 500;
let c14 = 0.504;
let c15 = 204;
let c16 = 700;
let c17 = "rgb(225, 240, 255)";
let c18 = "rgb(120, 60, 200)";
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
let closure_27 = createStyles.createStyles({ root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 }, band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 }, sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" }, fill: { flex: 1 }, ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" }, ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 } });
const __initData = { code: "function VibegrationsConjureShellGlowTsx2(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData2 = { code: "function VibegrationsConjureShellGlowTsx3(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData3 = { code: "function VibegrationsConjureShellGlowTsx4(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData4 = { code: "function VibegrationsConjureShellGlowTsx5(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
const __initData5 = { code: "function VibegrationsConjureShellGlowTsx6(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData6 = { code: "function VibegrationsConjureShellGlowTsx7(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData7 = { code: "function VibegrationsConjureShellGlowTsx8(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData8 = { code: "function VibegrationsConjureShellGlowTsx9(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((thinking) => {
  let BG_GRADIENT_CHROMA_GLOW_1;
  let BG_GRADIENT_CHROMA_GLOW_2;
  let BG_GRADIENT_MIDNIGHT_BLURPLE_1;
  let ILLO_PURPLE_30;
  let ILLO_PURPLE_40;
  let closure_4;
  let duration;
  let items4;
  let items5;
  let items6;
  let items8;
  let num14;
  let sharedValue1;
  let sharedValue3;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  let width;
  let tmp = thinking;
  let tmp2 = num14;
  let obj = thinking(num14[11]);
  const cResult = obj.c(94);
  thinking = thinking.thinking;
  const bleedBottom = thinking.bleedBottom;
  let num = 0;
  if (undefined !== bleedBottom) {
    num = bleedBottom;
  }
  const tmp4 = closure_27();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = sharedValue1;
    items = [sharedValue1];
    let fn = function v() {
      return sharedValue1.useReducedMotion;
    };
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = sharedValue3;
    const items1 = [sharedValue3];
    class Y {
      constructor() {
        return sharedValue3.theme;
      }
    }
    let num3 = 2;
    cResult[2] = items1;
    let num4 = 3;
    cResult[3] = Y;
    tmp10 = Y;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult13 = tmp(tmp2[12]);
  const stateFromStores1 = tmpResult13.useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== stateFromStores1) {
    const tmpResult14 = tmp(tmp2[13]);
    const isThemeDarkResult = tmpResult14.isThemeDark(stateFromStores1);
    class Y {
      constructor() {
        return sharedValue3.theme;
      }
    }
    let num6 = 5;
    cResult[5] = isThemeDarkResult;
    tmp13 = isThemeDarkResult;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== stateFromStores1) {
    const tmp18 = stateFromStores;
    const resolveSemanticColor = stateFromStores(tmp2[7]).internal.resolveSemanticColor;
    class Y {
      constructor() {
        return sharedValue3.theme;
      }
    }
    const obj5 = stateFromStores(tmp2[8])(tmp19);
    const alphaResult = obj5.alpha(0);
    const cssResult = alphaResult.css();
    cResult[6] = stateFromStores1;
    cResult[7] = tmp19;
    cResult[8] = tmp19;
    cResult[9] = cssResult;
    tmp17 = cssResult;
    tmp16 = tmp19;
    tmp15 = tmp19;
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  if (cResult[10] === tmp15) {
    if (cResult[11] === tmp16) {
      let tmp21;
      let tmp23;
      let tmp30;
      if (cResult[12] === tmp17) {
        tmp21 = cResult[13];
      }
      if (cResult[14] !== tmp13) {
        let obj2;
        const unsafe_rawColors = stateFromStores(tmp2[7]).unsafe_rawColors;
        const tmp24 = stateFromStores;
        if (tmp13) {
          ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
          class Y {
            constructor() {
              return sharedValue3.theme;
            }
          }
          const items2 = [BG_GRADIENT_MIDNIGHT_BLURPLE_1, unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2, BG_GRADIENT_MIDNIGHT_BLURPLE_1];
          tmp26[0] = items2;
          const items3 = [BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2, unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3, BG_GRADIENT_CHROMA_GLOW_2, BG_GRADIENT_CHROMA_GLOW_1];
          tmp26[1] = items3;
          obj2 = tmp26;
        } else {
          ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
          const tmp24Result = tmp24(tmp2[8]);
          class Y {
            constructor() {
              return sharedValue3.theme;
            }
          }
          const hslResult = tmp24Result.hsl(184, 0.8, 0.6);
          const hexResult = hslResult.hex();
          const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
          obj2 = { base: items4, chroma: items5 };
          items4 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
          items5 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
        }
        class Y {
          constructor() {
            return sharedValue3.theme;
          }
        }
        cResult[14] = tmp13;
        cResult[15] = obj2;
        tmp23 = obj2;
      } else {
        tmp23 = cResult[15];
      }
      num14 = 0.2;
      class Y {
        constructor() {
          return sharedValue3.theme;
        }
      }
      const tmp28 = width(react.useState(0), 2);
      width = tmp28[0];
      react = tmp28[1];
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        function te(nativeEvent) {
          let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
          let tmp = closure_4((arg0) => {
            let tmp = closure_0;
            if (arg0 === closure_0) {
              tmp = arg0;
            }
            return tmp;
          });
        }
        cResult[16] = te;
        class Y {
          constructor() {
            return sharedValue3.theme;
          }
        }
      } else {
        tmp30 = cResult[16];
      }
      let num18 = 1;
      const useSharedValue = tmp(tmp2[14]).useSharedValue;
      tmp(tmp2[14]);
      if (!thinking) {
        num18 = c14;
      }
      const sharedValue = useSharedValue(num18);
      let num19 = 0;
      const useSharedValue2 = tmp(tmp2[14]).useSharedValue;
      tmp(tmp2[14]);
      if (thinking) {
        num19 = 1;
      }
      const sharedValue2 = useSharedValue2(num19);
      const tmpResult17 = tmp(tmp2[14]);
      sharedValue1 = tmpResult17.useSharedValue(thinking ? v500 : c15);
      const tmpResult18 = tmp(tmp2[14]);
      sharedValue3 = tmpResult18.useSharedValue(0);
      const tmpResult19 = tmp(tmp2[14]);
      const sharedValue4 = tmpResult19.useSharedValue(0);
      const tmpResult20 = tmp(tmp2[14]);
      const sharedValue5 = tmpResult20.useSharedValue(0);
      if (cResult[17] === sharedValue2) {
        if (cResult[18] === sharedValue1) {
          if (cResult[19] === sharedValue) {
            let tmp39;
            let tmp40;
            if (cResult[20] === thinking) {
              tmp39 = cResult[21];
              tmp40 = cResult[22];
            }
            const effect = obj10.useEffect(tmp39, tmp40);
            if (cResult[23] === sharedValue4) {
              if (cResult[24] === sharedValue5) {
                let tmp42;
                let tmp43;
                if (cResult[25] === stateFromStores) {
                  tmp42 = cResult[26];
                  tmp43 = cResult[27];
                }
                const effect1 = obj10.useEffect(tmp42, tmp43);
                if (cResult[28] === sharedValue3) {
                  if (cResult[29] === stateFromStores) {
                    let tmp46;
                    let tmp47;
                    let tmp61;
                    if (cResult[30] === thinking) {
                      tmp46 = cResult[31];
                      tmp47 = cResult[32];
                    }
                    const effect2 = obj10.useEffect(tmp46, tmp47);
                    const tmpResult21 = tmp(tmp2[14]);
                    class Ee {
                      constructor() {
                        let first;
                        let tmp11;
                        let tmp12;
                        let tmp7;
                        const value = sharedValue.get();
                        const value2 = sharedValue3.get();
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
                      }
                    }
                    let obj3 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
                    Ee.__closure = obj3;
                    Ee.__workletHash = 16853895273556;
                    Ee.__initData = __initData;
                    const animatedStyle = tmpResult21.useAnimatedStyle(Ee);
                    function be() {
                      const obj = { opacity: (1 - sharedValue2.get()) * num14, transform: items };
                      items = [{ translateX: -sharedValue4.get() * first }];
                      ({ translateX: -sharedValue4.get() * first });
                      return obj;
                    }
                    let obj4 = { chromaMix: sharedValue2, layerAlpha: num14, driftBase: sharedValue4, width };
                    be.__closure = obj4;
                    be.__workletHash = 2962971489312;
                    be.__initData = __initData2;
                    const tmpResult22 = tmp(tmp2[14]);
                    const animatedStyle1 = tmpResult22.useAnimatedStyle(be);
                    const tmp51 = v500;
                    const tmpResult23 = tmp(tmp2[14]);
                    class Se {
                      constructor() {
                        const obj = { opacity: sharedValue2.get() * num14, transform: items };
                        items = [{ translateX: -sharedValue5.get() * first }];
                        ({ translateX: -sharedValue5.get() * first });
                        return obj;
                      }
                    }
                    const obj6 = { chromaMix: sharedValue2, layerAlpha: num14, driftChroma: sharedValue5, width };
                    Se.__closure = obj6;
                    Se.__workletHash = 8403192846330;
                    Se.__initData = __initData3;
                    const animatedStyle2 = tmpResult23.useAnimatedStyle(Se);
                    function ve() {
                      let first;
                      let height;
                      let tmp14;
                      let tmp18;
                      let tmp19;
                      const tmp = ANDROID;
                      if (tmp) {
                        const result = c13 * sharedValue.get();
                        const value = sharedValue3.get();
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
                        height = sharedValue1.get();
                      }
                      return { height };
                    }
                    const obj7 = { ANDROID, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue3, ditherHeight: sharedValue1 };
                    ve.__closure = obj7;
                    ve.__workletHash = 6204121722515;
                    ve.__initData = __initData4;
                    const tmpResult24 = tmp(tmp2[14]);
                    const animatedStyle3 = tmpResult24.useAnimatedStyle(ve);
                    if (cResult[33] !== tmp4.fill) {
                      const obj8 = { style: null, colors, locations, start, end };
                      class Ee {
                        constructor() {
                          let first;
                          let tmp11;
                          let tmp12;
                          let tmp7;
                          const value = sharedValue.get();
                          const value2 = sharedValue3.get();
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
                        }
                      }
                      const tmp68 = sharedValue4(stateFromStores(tmp2[16]), obj8);
                      cResult[33] = tmp4.fill;
                      cResult[34] = tmp68;
                      tmp61 = tmp68;
                    } else {
                      tmp61 = cResult[34];
                    }
                    if (cResult[35] === animatedStyle1) {
                      let tmp69;
                      if (cResult[36] === tmp4.sweep) {
                        tmp69 = cResult[37];
                      }
                      if (cResult[38] === tmp23.base) {
                        let tmp70;
                        if (cResult[39] === tmp4.fill) {
                          tmp70 = cResult[40];
                        }
                        if (cResult[41] === tmp69) {
                          let tmp75;
                          if (cResult[42] === tmp70) {
                            tmp75 = cResult[43];
                          }
                          if (cResult[44] === animatedStyle2) {
                            let tmp78;
                            if (cResult[45] === tmp4.sweep) {
                              tmp78 = cResult[46];
                            }
                            if (cResult[47] === tmp23.chroma) {
                              let tmp79;
                              if (cResult[48] === tmp4.fill) {
                                tmp79 = cResult[49];
                              }
                              if (cResult[50] === tmp78) {
                                let tmp84;
                                if (cResult[51] === tmp79) {
                                  tmp84 = cResult[52];
                                }
                                if (cResult[53] === tmp75) {
                                  let tmp87;
                                  if (cResult[54] === tmp84) {
                                    tmp87 = cResult[55];
                                  }
                                  const tmp90 = tmp13 ? c17 : c18;
                                  class Ee {
                                    constructor() {
                                      let first;
                                      let tmp11;
                                      let tmp12;
                                      let tmp7;
                                      const value = sharedValue.get();
                                      const value2 = sharedValue3.get();
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
                                    }
                                  }
                                  if (cResult[56] === tmp90) {
                                    if (cResult[57] === 0.16) {
                                      if (cResult[58] === thinking) {
                                        let tmp91;
                                        if (cResult[59] === width) {
                                          tmp91 = cResult[60];
                                        }
                                        if (cResult[61] === tmp4.ditherField) {
                                          let tmp95;
                                          let tmp98;
                                          if (cResult[62] === tmp91) {
                                            tmp95 = cResult[63];
                                          }
                                          if (cResult[64] !== num) {
                                            let tmp99 = num > 0;
                                            if (tmp99) {
                                              tmp99 = { bottom: -num };
                                              const obj9 = { bottom: -num };
                                            }
                                            class Ee {
                                              constructor() {
                                                let first;
                                                let tmp11;
                                                let tmp12;
                                                let tmp7;
                                                const value = sharedValue.get();
                                                const value2 = sharedValue3.get();
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
                                              }
                                            }
                                            cResult[65] = tmp99;
                                            tmp98 = tmp99;
                                          } else {
                                            tmp98 = cResult[65];
                                          }
                                          if (cResult[66] === tmp4.root) {
                                            let tmp100;
                                            if (cResult[67] === tmp98) {
                                              tmp100 = cResult[68];
                                            }
                                            if (cResult[69] === animatedStyle) {
                                              let tmp102;
                                              if (cResult[70] === tmp4.band) {
                                                tmp102 = cResult[71];
                                              }
                                              if (cResult[72] === tmp61) {
                                                let tmp103;
                                                if (cResult[73] === tmp87) {
                                                  tmp103 = cResult[74];
                                                }
                                                if (cResult[75] === tmp102) {
                                                  let tmp106;
                                                  if (cResult[76] === tmp103) {
                                                    tmp106 = cResult[77];
                                                  }
                                                  if (cResult[78] === animatedStyle3) {
                                                    if (cResult[79] === tmp95) {
                                                      if (cResult[80] === tmp61) {
                                                        if (cResult[81] === stateFromStores) {
                                                          let tmp109;
                                                          if (cResult[82] === tmp4.ditherClip) {
                                                            tmp109 = cResult[83];
                                                          }
                                                          if (cResult[84] === animatedStyle) {
                                                            if (cResult[85] === tmp21) {
                                                              if (cResult[86] === tmp4.band) {
                                                                let tmp111;
                                                                if (cResult[87] === tmp4.fill) {
                                                                  tmp111 = cResult[88];
                                                                }
                                                                if (cResult[89] === tmp100) {
                                                                  if (cResult[90] === tmp106) {
                                                                    if (cResult[91] === tmp109) {
                                                                      let tmp113;
                                                                      if (cResult[92] === tmp111) {
                                                                        tmp113 = cResult[93];
                                                                      }
                                                                      return tmp113;
                                                                    }
                                                                  }
                                                                }
                                                                class Ee {
                                                                  constructor() {
                                                                    let first;
                                                                    let tmp11;
                                                                    let tmp12;
                                                                    let tmp7;
                                                                    const value = sharedValue.get();
                                                                    const value2 = sharedValue3.get();
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
                                                                  }
                                                                }
                                                                const obj11 = { style: tmp100, pointerEvents: "none", onLayout: tmp30, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items6 };
                                                                items6 = [tmp106, tmp109, tmp111];
                                                                const tmp115 = closure_11(sharedValue2, obj11);
                                                                cResult[89] = tmp100;
                                                                cResult[90] = tmp106;
                                                                cResult[91] = tmp109;
                                                                cResult[92] = tmp111;
                                                                cResult[93] = tmp115;
                                                                tmp113 = tmp115;
                                                              }
                                                            }
                                                          }
                                                          class Ee {
                                                            constructor() {
                                                              let first;
                                                              let tmp11;
                                                              let tmp12;
                                                              let tmp7;
                                                              const value = sharedValue.get();
                                                              const value2 = sharedValue3.get();
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
                                                            }
                                                          }
                                                          cResult[84] = animatedStyle;
                                                          cResult[85] = tmp21;
                                                          cResult[86] = tmp4.band;
                                                          cResult[87] = tmp4.fill;
                                                          cResult[88] = null;
                                                          tmp111 = tmp112;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  class Ee {
                                                    constructor() {
                                                      let first;
                                                      let tmp11;
                                                      let tmp12;
                                                      let tmp7;
                                                      const value = sharedValue.get();
                                                      const value2 = sharedValue3.get();
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
                                                    }
                                                  }
                                                  cResult[78] = animatedStyle3;
                                                  cResult[79] = tmp95;
                                                  cResult[80] = tmp61;
                                                  cResult[81] = stateFromStores;
                                                  cResult[82] = tmp4.ditherClip;
                                                  cResult[83] = null;
                                                  tmp109 = tmp110;
                                                }
                                                class Ee {
                                                  constructor() {
                                                    let first;
                                                    let tmp11;
                                                    let tmp12;
                                                    let tmp7;
                                                    const value = sharedValue.get();
                                                    const value2 = sharedValue3.get();
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
                                                  }
                                                }
                                                const obj12 = { style: tmp102, children: tmp103 };
                                                const tmp108 = sharedValue4(stateFromStores(tmp2[14]).View, obj12);
                                                cResult[75] = tmp102;
                                                cResult[76] = tmp103;
                                                cResult[77] = tmp108;
                                                tmp106 = tmp108;
                                              }
                                              class Ee {
                                                constructor() {
                                                  let first;
                                                  let tmp11;
                                                  let tmp12;
                                                  let tmp7;
                                                  const value = sharedValue.get();
                                                  const value2 = sharedValue3.get();
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
                                                }
                                              }
                                              cResult[72] = tmp61;
                                              cResult[73] = tmp87;
                                              cResult[74] = tmp105;
                                              tmp103 = tmp105;
                                            }
                                            const items7 = [, ];
                                            class Ee {
                                              constructor() {
                                                let first;
                                                let tmp11;
                                                let tmp12;
                                                let tmp7;
                                                const value = sharedValue.get();
                                                const value2 = sharedValue3.get();
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
                                              }
                                            }
                                            items7[1] = animatedStyle;
                                            cResult[69] = animatedStyle;
                                            cResult[70] = tmp4.band;
                                            cResult[71] = items7;
                                            tmp102 = items7;
                                          }
                                          class Ee {
                                            constructor() {
                                              let first;
                                              let tmp11;
                                              let tmp12;
                                              let tmp7;
                                              const value = sharedValue.get();
                                              const value2 = sharedValue3.get();
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
                                            }
                                          }
                                          tmp101[0] = tmp4.root;
                                          tmp101[1] = tmp98;
                                          cResult[66] = tmp4.root;
                                          cResult[67] = tmp98;
                                          cResult[68] = tmp101;
                                          tmp100 = tmp101;
                                        }
                                        class Ee {
                                          constructor() {
                                            let first;
                                            let tmp11;
                                            let tmp12;
                                            let tmp7;
                                            const value = sharedValue.get();
                                            const value2 = sharedValue3.get();
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
                                          }
                                        }
                                        const obj13 = { style: tmp4.ditherField, children: tmp91 };
                                        const tmp97 = sharedValue4(sharedValue2, obj13);
                                        cResult[61] = tmp4.ditherField;
                                        cResult[62] = tmp91;
                                        cResult[63] = tmp97;
                                        tmp95 = tmp97;
                                      }
                                    }
                                  }
                                  size = { width, height: tmp51, thinking, fill: tmp90, fillOpacity: 0.16 };
                                  const tmp94 = sharedValue4(stateFromStores(tmp2[17]), size);
                                  cResult[56] = tmp90;
                                  cResult[57] = 0.16;
                                  cResult[58] = thinking;
                                  cResult[59] = width;
                                  cResult[60] = tmp94;
                                  tmp91 = tmp94;
                                }
                                class Ee {
                                  constructor() {
                                    let first;
                                    let tmp11;
                                    let tmp12;
                                    let tmp7;
                                    const value = sharedValue.get();
                                    const value2 = sharedValue3.get();
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
                                  }
                                }
                                const obj14 = { children: items8 };
                                items8 = [tmp75, tmp84];
                                const tmp89 = closure_11(sharedValue5, obj14);
                                cResult[53] = tmp75;
                                cResult[54] = tmp84;
                                cResult[55] = tmp89;
                                tmp87 = tmp89;
                              }
                              class Ee {
                                constructor() {
                                  let first;
                                  let tmp11;
                                  let tmp12;
                                  let tmp7;
                                  const value = sharedValue.get();
                                  const value2 = sharedValue3.get();
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
                                }
                              }
                              const obj15 = { style: tmp78, children: tmp79 };
                              const tmp86 = sharedValue4(stateFromStores(tmp2[14]).View, obj15);
                              cResult[50] = tmp78;
                              cResult[51] = tmp79;
                              cResult[52] = tmp86;
                              tmp84 = tmp86;
                            }
                            class Ee {
                              constructor() {
                                let first;
                                let tmp11;
                                let tmp12;
                                let tmp7;
                                const value = sharedValue.get();
                                const value2 = sharedValue3.get();
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
                              }
                            }
                            const obj16 = { style: tmp4.fill, colors: tmp23.chroma, start: start2, end: end2 };
                            const tmp83 = sharedValue4(stateFromStores(tmp2[16]), obj16);
                            cResult[47] = tmp23.chroma;
                            cResult[48] = tmp4.fill;
                            cResult[49] = tmp83;
                            tmp79 = tmp83;
                          }
                          const items9 = [, ];
                          class Ee {
                            constructor() {
                              let first;
                              let tmp11;
                              let tmp12;
                              let tmp7;
                              const value = sharedValue.get();
                              const value2 = sharedValue3.get();
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
                            }
                          }
                          items9[1] = animatedStyle2;
                          cResult[44] = animatedStyle2;
                          cResult[45] = tmp4.sweep;
                          cResult[46] = items9;
                          tmp78 = items9;
                        }
                        class Ee {
                          constructor() {
                            let first;
                            let tmp11;
                            let tmp12;
                            let tmp7;
                            const value = sharedValue.get();
                            const value2 = sharedValue3.get();
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
                          }
                        }
                        const obj17 = { style: tmp69, children: tmp70 };
                        const tmp77 = sharedValue4(stateFromStores(tmp2[14]).View, obj17);
                        cResult[41] = tmp69;
                        cResult[42] = tmp70;
                        cResult[43] = tmp77;
                        tmp75 = tmp77;
                      }
                      class Ee {
                        constructor() {
                          let first;
                          let tmp11;
                          let tmp12;
                          let tmp7;
                          const value = sharedValue.get();
                          const value2 = sharedValue3.get();
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
                        }
                      }
                      const obj18 = { style: tmp4.fill, colors: tmp23.base, start: start2, end: end2 };
                      const tmp74 = sharedValue4(stateFromStores(tmp2[16]), obj18);
                      cResult[38] = tmp23.base;
                      cResult[39] = tmp4.fill;
                      cResult[40] = tmp74;
                      tmp70 = tmp74;
                    }
                    const items10 = [tmp4.sweep, animatedStyle1];
                    cResult[35] = animatedStyle1;
                    cResult[36] = tmp4.sweep;
                    cResult[37] = items10;
                    tmp69 = items10;
                  }
                }
                class Y {
                  constructor() {
                    return sharedValue3.theme;
                  }
                }
                const items11 = [sharedValue3, stateFromStores, thinking];
                cResult[28] = sharedValue3;
                cResult[29] = stateFromStores;
                cResult[30] = thinking;
                cResult[31] = tmp48;
                cResult[32] = items11;
                tmp47 = items11;
                tmp46 = tmp48;
              }
            }
            class Y {
              constructor() {
                return sharedValue3.theme;
              }
            }
            const items12 = [sharedValue4, sharedValue5, stateFromStores];
            cResult[23] = sharedValue4;
            cResult[24] = sharedValue5;
            cResult[25] = stateFromStores;
            cResult[26] = tmp44;
            cResult[27] = items12;
            tmp43 = items12;
            tmp42 = tmp44;
          }
        }
      }
      function oe() {
        const Easing = ReanimatedRexport.Easing;
        const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
        let num = 1;
        set = sharedValue.set;
        const withTiming = timing.withTiming;
        timing;
        if (!thinking) {
          num = c14;
        }
        const obj = { duration, easing: bezierResult };
        const result = set(withTiming(num, obj, "animate-always"));
        let num2 = 0;
        set2 = sharedValue2.set;
        const withTiming2 = timing.withTiming;
        timing;
        const tmp7 = duration;
        if (thinking) {
          num2 = 1;
        }
        set2(withTiming2(num2, { duration: tmp7, easing: bezierResult }, "animate-always"));
        set3 = sharedValue1.set;
        const tmpResult2 = timing;
        set3(tmpResult2.withTiming(thinking ? c13 : c15, { duration: 400, easing: bezierResult }, "animate-always"));
      }
      const items13 = [sharedValue2, sharedValue1, sharedValue, thinking];
      cResult[17] = sharedValue2;
      cResult[18] = sharedValue1;
      cResult[19] = sharedValue;
      cResult[20] = thinking;
      cResult[21] = oe;
      cResult[22] = items13;
      tmp40 = items13;
      tmp39 = oe;
    }
  }
  tmp22[0] = tmp15;
  tmp22[1] = tmp16;
  tmp22[2] = tmp17;
  cResult[10] = tmp15;
  cResult[11] = tmp16;
  cResult[12] = tmp17;
  cResult[13] = tmp22;
  tmp21 = tmp22;
}) : ((thinking) => {
  let c3;
  let closure_6;
  let duration;
  let items11;
  let items12;
  let items13;
  let items14;
  let items7;
  let items8;
  let items9;
  let num5;
  let obj10;
  let obj12;
  let obj22;
  let tmp28Result5;
  let tmp28Result6;
  let tmp37;
  let tmp40;
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
  let sharedValue1;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let tmp = closure_27();
  let tmp2 = thinking;
  let obj = thinking(stateFromStores1[12]);
  items = [sharedValue];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue.useReducedMotion);
  let obj2 = thinking(stateFromStores1[12]);
  let items1 = [sharedValue2];
  stateFromStores1 = obj2.useStateFromStores(items1, () => sharedValue2.theme);
  let obj3 = thinking(stateFromStores1[13]);
  const isThemeDarkResult = obj3.isThemeDark(stateFromStores1);
  _slicedToArray = isThemeDarkResult;
  let obj4 = num2;
  let items2 = [stateFromStores1];
  let items3 = [isThemeDarkResult];
  const memo = num2.useMemo(() => {
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_BASE_LOW);
    items = [semanticColor, semanticColor, ];
    const obj = _modDef683(semanticColor);
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
      const tmpResult = _modDef683;
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
  let num3 = 1;
  const useSharedValue = tmp2(tmp3[14]).useSharedValue;
  tmp2(stateFromStores1[14]);
  if (!thinking) {
    num3 = c14;
  }
  sharedValue = useSharedValue(num3);
  let num4 = 0;
  const useSharedValue2 = tmp2(tmp3[14]).useSharedValue;
  tmp2(stateFromStores1[14]);
  if (thinking) {
    num4 = 1;
  }
  sharedValue2 = useSharedValue2(num4);
  const tmp2Result11 = tmp2(stateFromStores1[14]);
  sharedValue1 = tmp2Result11.useSharedValue(thinking ? v500 : c15);
  const tmp2Result12 = tmp2(stateFromStores1[14]);
  sharedValue3 = tmp2Result12.useSharedValue(0);
  const tmp2Result13 = tmp2(stateFromStores1[14]);
  sharedValue4 = tmp2Result13.useSharedValue(0);
  const tmp2Result14 = tmp2(stateFromStores1[14]);
  sharedValue5 = tmp2Result14.useSharedValue(0);
  const items4 = [sharedValue2, sharedValue1, sharedValue, thinking];
  const effect = obj4.useEffect(() => {
    const Easing = ReanimatedRexport.Easing;
    const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
    let num = 1;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (!thinking) {
      num = c14;
    }
    const obj = { duration, easing: bezierResult };
    const result = set(withTiming(num, obj, "animate-always"));
    num2 = 0;
    set2 = sharedValue2.set;
    const withTiming2 = timing.withTiming;
    timing;
    const tmp7 = duration;
    if (thinking) {
      num2 = 1;
    }
    set2(withTiming2(num2, { duration: tmp7, easing: bezierResult }, "animate-always"));
    set3 = sharedValue1.set;
    const tmpResult2 = timing;
    set3(tmpResult2.withTiming(thinking ? c13 : c15, { duration: 400, easing: bezierResult }, "animate-always"));
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
        const obj = thinking(stateFromStores1[14]);
        obj.cancelAnimation(sharedValue4);
        const obj2 = thinking(stateFromStores1[14]);
        obj2.cancelAnimation(sharedValue5);
      };
    }
    return fn;
  }, items5);
  const items6 = [sharedValue3, stateFromStores, thinking];
  const effect2 = obj4.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      let fn;
      const tmp2 = thinking;
      if (tmp2) {
        const result = sharedValue3.set(0);
        set = sharedValue3.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        let obj = { duration: 5500, easing: ReanimatedRexport.Easing.ease };
        const withTiming = timing.withTiming;
        timing;
        const result1 = set(withRepeat(withTiming(1, obj), -1, false));
        fn = () => {
          const obj = thinking(stateFromStores1[14]);
          return obj.cancelAnimation(sharedValue3);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue3);
    set2 = sharedValue3.set;
    const obj3 = timing;
    const obj4 = { duration };
    set2(obj3.withTiming(0, obj4));
  }, items6);
  function ee() {
    let first;
    let tmp11;
    let tmp12;
    let tmp7;
    const value = sharedValue.get();
    const value2 = sharedValue3.get();
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
  }
  const obj5 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
  ee.__closure = obj5;
  ee.__workletHash = 2725772663376;
  ee.__initData = __initData5;
  const tmp2Result15 = tmp2(stateFromStores1[14]);
  const animatedStyle = tmp2Result15.useAnimatedStyle(ee);
  function te() {
    const obj = { opacity: (1 - sharedValue2.get()) * num2, transform: items };
    items = [{ translateX: -sharedValue4.get() * first }];
    ({ translateX: -sharedValue4.get() * first });
    return obj;
  }
  te.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftBase: sharedValue4, width };
  te.__workletHash = 17091094099492;
  te.__initData = __initData6;
  const tmp2Result16 = tmp2(stateFromStores1[14]);
  const animatedStyle1 = tmp2Result16.useAnimatedStyle(te);
  function ie() {
    const obj = { opacity: sharedValue2.get() * num2, transform: items };
    items = [{ translateX: -sharedValue5.get() * first }];
    ({ translateX: -sharedValue5.get() * first });
    return obj;
  }
  ie.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftChroma: sharedValue5, width };
  ie.__workletHash = 11335227857910;
  ie.__initData = __initData7;
  const tmp2Result17 = tmp2(stateFromStores1[14]);
  const animatedStyle2 = tmp2Result17.useAnimatedStyle(ie);
  function ae() {
    let first;
    let height;
    let tmp14;
    let tmp18;
    let tmp19;
    const tmp = ANDROID;
    if (tmp) {
      const result = c13 * sharedValue.get();
      const value = sharedValue3.get();
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
      height = sharedValue1.get();
    }
    return { height };
  }
  const obj6 = { ANDROID: sharedValue5, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue3, ditherHeight: sharedValue1 };
  ae.__closure = obj6;
  ae.__workletHash = 13936145886879;
  ae.__initData = __initData8;
  const tmp2Result18 = tmp2(stateFromStores1[14]);
  const animatedStyle3 = tmp2Result18.useAnimatedStyle(ae);
  const obj7 = { style: tmp.fill, colors, locations, start, end };
  const tmp33 = sharedValue1(stateFromStores(stateFromStores1[16]), obj7);
  const obj8 = { children: items8 };
  const obj9 = { style: items7, children: sharedValue1(stateFromStores(stateFromStores1[16]), obj10) };
  items7 = [tmp.sweep, animatedStyle1];
  const View = stateFromStores(tmp3[14]).View;
  obj10 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
  items8 = [sharedValue1(View, obj9), ];
  const obj11 = { style: items9, children: sharedValue1(stateFromStores(stateFromStores1[16]), obj12) };
  items9 = [tmp.sweep, animatedStyle2];
  const View2 = stateFromStores(tmp3[14]).View;
  obj12 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
  items8[1] = sharedValue1(View2, obj11);
  const tmp35 = sharedValue4(sharedValue3, obj8);
  const obj13 = { style: tmp.ditherField, children: sharedValue1(tmp37, size) };
  size = { width, height: v500, thinking, fill: isThemeDarkResult ? c17 : c18, fillOpacity: num5 };
  num5 = 0.16;
  const tmp30 = locations;
  const tmp31 = start;
  const tmp32 = end;
  const tmp34 = sharedValue4;
  tmp37 = stateFromStores(stateFromStores1[17]);
  if (isThemeDarkResult) {
    num5 = 0.18;
  }
  const tmp28Result = sharedValue1(closure_6, obj13);
  const items10 = [tmp.root, ];
  let tmp39 = num > 0;
  if (tmp39) {
    tmp39 = { bottom: -num };
    const obj14 = { bottom: -num };
  }
  const obj15 = { style: items10, pointerEvents: "none", onLayout: callback, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items12 };
  items10[1] = tmp39;
  const obj16 = { style: items11, children: tmp28Result5 };
  items11 = [tmp.band, animatedStyle];
  const View3 = tmp29(tmp3[14]).View;
  if (sharedValue5) {
    const obj17 = { style: width.absoluteFill, children: tmp35 };
    tmp28Result5 = tmp28(tmp36, obj17);
    tmp40 = width;
  } else {
    tmp40 = width;
    const obj18 = { style: width.absoluteFill, maskElement: tmp33, children: tmp35 };
    tmp28Result5 = tmp28(tmp29(tmp3[18]), obj18);
  }
  items12 = [tmp28(View3, obj16), , ];
  let tmp28Result7 = null;
  if (!stateFromStores) {
    const obj19 = { style: items13, children: tmp28Result6 };
    items13 = [tmp.ditherClip, animatedStyle3];
    tmp28Result6 = tmp28Result;
    const View4 = tmp29(tmp3[14]).View;
    if (!sharedValue5) {
      const obj20 = { style: tmp40.absoluteFill, maskElement: tmp33, children: tmp28Result };
      tmp28Result6 = tmp28(tmp29(tmp3[18]), obj20);
    }
    tmp28Result7 = tmp28(View4, obj19);
  }
  items12[1] = tmp28Result7;
  let tmp28Result8 = null;
  if (sharedValue5) {
    const obj21 = { style: items14, children: sharedValue1(stateFromStores(stateFromStores1[16]), obj22) };
    items14 = [tmp.band, animatedStyle];
    const View5 = tmp29(tmp3[14]).View;
    obj22 = { style: tmp.fill, colors: memo, locations: tmp30, start: tmp31, end: tmp32 };
    tmp28Result8 = tmp28(View5, obj21);
  }
  items12[2] = tmp28Result8;
  return tmp34(closure_6, obj15);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureShellGlow.tsx");

export default tmp4;
