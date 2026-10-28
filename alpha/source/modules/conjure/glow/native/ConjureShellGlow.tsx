// Module ID: 12363
// Function ID: 12364
// Name: ConjureShellGlow
// Dependencies: [32, 19, 17, 5005, 1204, 21, 1381, 587, 683, 5004, 558, 576, 504, 5012, 5085, 5242, 5294, 12364, 7002, 2]

// Module 12363 (ConjureShellGlow)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
import timing from "timing" /* 5242 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let set, set2, set3;

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
let c14 = 700;
let c15 = "rgb(225, 240, 255)";
let c16 = "rgb(120, 60, 200)";
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
pulseAt.__workletHash = 10785188429539;
pulseAt.__initData = { code: "function pulseAt_ConjureShellGlowTsx1(progress){const{PULSE_KEYFRAMES}=this.__closure;for(let i=1;i<PULSE_KEYFRAMES.length;i++){const[t1,v1]=PULSE_KEYFRAMES[i];if(progress<=t1){const[t0,v0]=PULSE_KEYFRAMES[i-1];const span=t1-t0;const local=span>0?(progress-t0)/span:1;return v0+(v1-v0)*local;}}return 1;}" };
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"];
const locations = [0, 0.45, 1];
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const start2 = { x: 0, y: 0.5 };
const end2 = { x: 1, y: 0.5 };
let closure_25 = createStyles.createStyles({ root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 }, band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 }, sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" }, fill: { flex: 1 }, ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" }, ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 } });
const __initData = { code: "function ConjureShellGlowTsx2(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData2 = { code: "function ConjureShellGlowTsx3(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData3 = { code: "function ConjureShellGlowTsx4(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData4 = { code: "function ConjureShellGlowTsx5(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
const __initData5 = { code: "function ConjureShellGlowTsx6(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData6 = { code: "function ConjureShellGlowTsx7(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData7 = { code: "function ConjureShellGlowTsx8(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData8 = { code: "function ConjureShellGlowTsx9(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureShellGlow(thinking) {
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
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp9;
  let width;
  let tmp = thinking;
  let tmp2 = num14;
  let obj = thinking(num14[11]);
  const cResult = obj.c(95);
  thinking = thinking.thinking;
  const bleedBottom = thinking.bleedBottom;
  let num = 0;
  if (undefined !== bleedBottom) {
    num = bleedBottom;
  }
  const tmp4 = closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = sharedValue3;
    items = [sharedValue3];
    class S {
      constructor() {
        return sharedValue3.useReducedMotion;
      }
    }
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = S;
    tmp6 = S;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = sharedValue1;
    const items1 = [sharedValue1];
    class S {
      constructor() {
        return sharedValue3.useReducedMotion;
      }
    }
    let num3 = 2;
    cResult[2] = items1;
    let num4 = 3;
    cResult[3] = tmp12;
    tmp10 = tmp12;
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
    class S {
      constructor() {
        return sharedValue3.useReducedMotion;
      }
    }
    let num6 = 5;
    cResult[5] = isThemeDarkResult;
    tmp14 = isThemeDarkResult;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== stateFromStores1) {
    const tmp19 = stateFromStores;
    const resolveSemanticColor = stateFromStores(tmp2[7]).internal.resolveSemanticColor;
    class S {
      constructor() {
        return sharedValue3.useReducedMotion;
      }
    }
    const obj5 = stateFromStores(tmp2[8])(tmp20);
    const alphaResult = obj5.alpha(0);
    const cssResult = alphaResult.css();
    cResult[6] = stateFromStores1;
    cResult[7] = tmp20;
    cResult[8] = tmp20;
    cResult[9] = cssResult;
    tmp18 = cssResult;
    tmp17 = tmp20;
    tmp16 = tmp20;
  } else {
    tmp16 = cResult[7];
    tmp17 = cResult[8];
    tmp18 = cResult[9];
  }
  if (cResult[10] === tmp16) {
    if (cResult[11] === tmp17) {
      let tmp22;
      let tmp24;
      let tmp31;
      if (cResult[12] === tmp18) {
        tmp22 = cResult[13];
      }
      if (cResult[14] !== tmp14) {
        let obj2;
        const unsafe_rawColors = stateFromStores(tmp2[7]).unsafe_rawColors;
        const tmp25 = stateFromStores;
        if (tmp14) {
          ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
          class S {
            constructor() {
              return sharedValue3.useReducedMotion;
            }
          }
          const items2 = [BG_GRADIENT_MIDNIGHT_BLURPLE_1, unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2, BG_GRADIENT_MIDNIGHT_BLURPLE_1];
          tmp27[0] = items2;
          const items3 = [BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2, unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3, BG_GRADIENT_CHROMA_GLOW_2, BG_GRADIENT_CHROMA_GLOW_1];
          tmp27[1] = items3;
          obj2 = tmp27;
        } else {
          ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
          const tmp25Result = tmp25(tmp2[8]);
          class S {
            constructor() {
              return sharedValue3.useReducedMotion;
            }
          }
          const hslResult = tmp25Result.hsl(184, 0.8, 0.6);
          const hexResult = hslResult.hex();
          const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
          obj2 = { base: items4, chroma: items5 };
          items4 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
          items5 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
        }
        class S {
          constructor() {
            return sharedValue3.useReducedMotion;
          }
        }
        cResult[14] = tmp14;
        cResult[15] = obj2;
        tmp24 = obj2;
      } else {
        tmp24 = cResult[15];
      }
      num14 = 0.2;
      class S {
        constructor() {
          return sharedValue3.useReducedMotion;
        }
      }
      const tmp29 = width(react.useState(0), 2);
      width = tmp29[0];
      react = tmp29[1];
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        let fn = function $(nativeEvent) {
          let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
          let tmp = closure_4((arg0) => {
            let tmp = closure_0;
            if (arg0 === closure_0) {
              tmp = arg0;
            }
            return tmp;
          });
        };
        cResult[16] = fn;
        class S {
          constructor() {
            return sharedValue3.useReducedMotion;
          }
        }
      } else {
        tmp31 = cResult[16];
      }
      let num17 = 0;
      const useSharedValue = tmp(tmp2[14]).useSharedValue;
      tmp(tmp2[14]);
      if (thinking) {
        num17 = 1;
      }
      const sharedValue = useSharedValue(num17);
      let num18 = 0;
      const useSharedValue2 = tmp(tmp2[14]).useSharedValue;
      tmp(tmp2[14]);
      if (thinking) {
        num18 = 1;
      }
      const sharedValue2 = useSharedValue2(num18);
      let num19 = 0;
      const useSharedValue3 = tmp(tmp2[14]).useSharedValue;
      tmp(tmp2[14]);
      if (thinking) {
        num19 = v500;
      }
      sharedValue3 = useSharedValue3(num19);
      const tmpResult18 = tmp(tmp2[14]);
      sharedValue1 = tmpResult18.useSharedValue(0);
      const tmpResult19 = tmp(tmp2[14]);
      const sharedValue4 = tmpResult19.useSharedValue(0);
      const tmpResult20 = tmp(tmp2[14]);
      const sharedValue5 = tmpResult20.useSharedValue(0);
      if (cResult[17] === sharedValue2) {
        if (cResult[18] === sharedValue3) {
          if (cResult[19] === sharedValue) {
            let tmp41;
            let tmp42;
            if (cResult[20] === thinking) {
              tmp41 = cResult[21];
              tmp42 = cResult[22];
            }
            const effect = obj10.useEffect(tmp41, tmp42);
            if (cResult[23] === sharedValue4) {
              if (cResult[24] === sharedValue5) {
                if (cResult[25] === stateFromStores) {
                  let tmp45;
                  let tmp46;
                  if (cResult[26] === thinking) {
                    tmp45 = cResult[27];
                    tmp46 = cResult[28];
                  }
                  const effect1 = obj10.useEffect(tmp45, tmp46);
                  if (cResult[29] === sharedValue1) {
                    if (cResult[30] === stateFromStores) {
                      let tmp49;
                      let tmp50;
                      let tmp64;
                      if (cResult[31] === thinking) {
                        tmp49 = cResult[32];
                        tmp50 = cResult[33];
                      }
                      const effect2 = obj10.useEffect(tmp49, tmp50);
                      const tmpResult21 = tmp(tmp2[14]);
                      class Ae {
                        constructor() {
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
                        }
                      }
                      let obj3 = { lift: sharedValue, pulseAt, pulse: sharedValue1, BAND_HEIGHT: v500 };
                      Ae.__closure = obj3;
                      Ae.__workletHash = 14122773184727;
                      Ae.__initData = __initData;
                      const animatedStyle = tmpResult21.useAnimatedStyle(Ae);
                      function ye() {
                        const obj = { opacity: (1 - sharedValue2.get()) * num14, transform: items };
                        items = [{ translateX: -sharedValue4.get() * first }];
                        ({ translateX: -sharedValue4.get() * first });
                        return obj;
                      }
                      let obj4 = { chromaMix: sharedValue2, layerAlpha: num14, driftBase: sharedValue4, width };
                      ye.__closure = obj4;
                      ye.__workletHash = 11778214036579;
                      ye.__initData = __initData2;
                      const tmpResult22 = tmp(tmp2[14]);
                      const animatedStyle1 = tmpResult22.useAnimatedStyle(ye);
                      const tmp54 = v500;
                      const tmpResult23 = tmp(tmp2[14]);
                      class Ee {
                        constructor() {
                          const obj = { opacity: sharedValue2.get() * num14, transform: items };
                          items = [{ translateX: -sharedValue5.get() * first }];
                          ({ translateX: -sharedValue5.get() * first });
                          return obj;
                        }
                      }
                      const obj6 = { chromaMix: sharedValue2, layerAlpha: num14, driftChroma: sharedValue5, width };
                      Ee.__closure = obj6;
                      Ee.__workletHash = 12832282995257;
                      Ee.__initData = __initData3;
                      const animatedStyle2 = tmpResult23.useAnimatedStyle(Ee);
                      const tmpResult24 = tmp(tmp2[14]);
                      class Se {
                        constructor() {
                          let first;
                          let height;
                          let tmp14;
                          let tmp18;
                          let tmp19;
                          const tmp = ANDROID;
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
                      const obj7 = { ANDROID, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue1, ditherHeight: sharedValue3 };
                      Se.__closure = obj7;
                      Se.__workletHash = 9289670122768;
                      Se.__initData = __initData4;
                      const animatedStyle3 = tmpResult24.useAnimatedStyle(Se);
                      if (cResult[34] !== tmp4.fill) {
                        const obj8 = { style: null, colors, locations, start, end };
                        class Ae {
                          constructor() {
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
                          }
                        }
                        const tmp71 = sharedValue4(stateFromStores(tmp2[16]), obj8);
                        cResult[34] = tmp4.fill;
                        cResult[35] = tmp71;
                        tmp64 = tmp71;
                      } else {
                        tmp64 = cResult[35];
                      }
                      if (cResult[36] === animatedStyle1) {
                        let tmp72;
                        if (cResult[37] === tmp4.sweep) {
                          tmp72 = cResult[38];
                        }
                        if (cResult[39] === tmp24.base) {
                          let tmp73;
                          if (cResult[40] === tmp4.fill) {
                            tmp73 = cResult[41];
                          }
                          if (cResult[42] === tmp72) {
                            let tmp78;
                            if (cResult[43] === tmp73) {
                              tmp78 = cResult[44];
                            }
                            if (cResult[45] === animatedStyle2) {
                              let tmp81;
                              if (cResult[46] === tmp4.sweep) {
                                tmp81 = cResult[47];
                              }
                              if (cResult[48] === tmp24.chroma) {
                                let tmp82;
                                if (cResult[49] === tmp4.fill) {
                                  tmp82 = cResult[50];
                                }
                                if (cResult[51] === tmp81) {
                                  let tmp87;
                                  if (cResult[52] === tmp82) {
                                    tmp87 = cResult[53];
                                  }
                                  if (cResult[54] === tmp78) {
                                    let tmp90;
                                    if (cResult[55] === tmp87) {
                                      tmp90 = cResult[56];
                                    }
                                    const tmp93 = tmp14 ? c15 : c16;
                                    class Ae {
                                      constructor() {
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
                                      }
                                    }
                                    if (cResult[57] === tmp93) {
                                      if (cResult[58] === 0.16) {
                                        if (cResult[59] === thinking) {
                                          let tmp94;
                                          if (cResult[60] === width) {
                                            tmp94 = cResult[61];
                                          }
                                          if (cResult[62] === tmp4.ditherField) {
                                            let tmp98;
                                            let tmp101;
                                            if (cResult[63] === tmp94) {
                                              tmp98 = cResult[64];
                                            }
                                            if (cResult[65] !== num) {
                                              let tmp102 = num > 0;
                                              if (tmp102) {
                                                tmp102 = { bottom: -num };
                                                const obj9 = { bottom: -num };
                                              }
                                              class Ae {
                                                constructor() {
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
                                                }
                                              }
                                              cResult[66] = tmp102;
                                              tmp101 = tmp102;
                                            } else {
                                              tmp101 = cResult[66];
                                            }
                                            if (cResult[67] === tmp4.root) {
                                              let tmp103;
                                              if (cResult[68] === tmp101) {
                                                tmp103 = cResult[69];
                                              }
                                              if (cResult[70] === animatedStyle) {
                                                let tmp105;
                                                if (cResult[71] === tmp4.band) {
                                                  tmp105 = cResult[72];
                                                }
                                                if (cResult[73] === tmp64) {
                                                  let tmp106;
                                                  if (cResult[74] === tmp90) {
                                                    tmp106 = cResult[75];
                                                  }
                                                  if (cResult[76] === tmp105) {
                                                    let tmp109;
                                                    if (cResult[77] === tmp106) {
                                                      tmp109 = cResult[78];
                                                    }
                                                    if (cResult[79] === animatedStyle3) {
                                                      if (cResult[80] === tmp98) {
                                                        if (cResult[81] === tmp64) {
                                                          if (cResult[82] === stateFromStores) {
                                                            let tmp112;
                                                            if (cResult[83] === tmp4.ditherClip) {
                                                              tmp112 = cResult[84];
                                                            }
                                                            if (cResult[85] === animatedStyle) {
                                                              if (cResult[86] === tmp22) {
                                                                if (cResult[87] === tmp4.band) {
                                                                  let tmp114;
                                                                  if (cResult[88] === tmp4.fill) {
                                                                    tmp114 = cResult[89];
                                                                  }
                                                                  if (cResult[90] === tmp103) {
                                                                    if (cResult[91] === tmp109) {
                                                                      if (cResult[92] === tmp112) {
                                                                        let tmp116;
                                                                        if (cResult[93] === tmp114) {
                                                                          tmp116 = cResult[94];
                                                                        }
                                                                        return tmp116;
                                                                      }
                                                                    }
                                                                  }
                                                                  class Ae {
                                                                    constructor() {
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
                                                                    }
                                                                  }
                                                                  const obj11 = { style: tmp103, pointerEvents: "none", onLayout: tmp31, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items6 };
                                                                  items6 = [tmp109, tmp112, tmp114];
                                                                  const tmp118 = closure_11(sharedValue2, obj11);
                                                                  cResult[90] = tmp103;
                                                                  cResult[91] = tmp109;
                                                                  cResult[92] = tmp112;
                                                                  cResult[93] = tmp114;
                                                                  cResult[94] = tmp118;
                                                                  tmp116 = tmp118;
                                                                }
                                                              }
                                                            }
                                                            class Ae {
                                                              constructor() {
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
                                                              }
                                                            }
                                                            cResult[85] = animatedStyle;
                                                            cResult[86] = tmp22;
                                                            cResult[87] = tmp4.band;
                                                            cResult[88] = tmp4.fill;
                                                            cResult[89] = null;
                                                            tmp114 = tmp115;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    class Ae {
                                                      constructor() {
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
                                                      }
                                                    }
                                                    cResult[79] = animatedStyle3;
                                                    cResult[80] = tmp98;
                                                    cResult[81] = tmp64;
                                                    cResult[82] = stateFromStores;
                                                    cResult[83] = tmp4.ditherClip;
                                                    cResult[84] = null;
                                                    tmp112 = tmp113;
                                                  }
                                                  class Ae {
                                                    constructor() {
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
                                                    }
                                                  }
                                                  const obj12 = { style: tmp105, children: tmp106 };
                                                  const tmp111 = sharedValue4(stateFromStores(tmp2[14]).View, obj12);
                                                  cResult[76] = tmp105;
                                                  cResult[77] = tmp106;
                                                  cResult[78] = tmp111;
                                                  tmp109 = tmp111;
                                                }
                                                class Ae {
                                                  constructor() {
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
                                                  }
                                                }
                                                cResult[73] = tmp64;
                                                cResult[74] = tmp90;
                                                cResult[75] = tmp108;
                                                tmp106 = tmp108;
                                              }
                                              const items7 = [, ];
                                              class Ae {
                                                constructor() {
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
                                                }
                                              }
                                              items7[1] = animatedStyle;
                                              cResult[70] = animatedStyle;
                                              cResult[71] = tmp4.band;
                                              cResult[72] = items7;
                                              tmp105 = items7;
                                            }
                                            class Ae {
                                              constructor() {
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
                                              }
                                            }
                                            tmp104[0] = tmp4.root;
                                            tmp104[1] = tmp101;
                                            cResult[67] = tmp4.root;
                                            cResult[68] = tmp101;
                                            cResult[69] = tmp104;
                                            tmp103 = tmp104;
                                          }
                                          class Ae {
                                            constructor() {
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
                                            }
                                          }
                                          const obj13 = { style: tmp4.ditherField, children: tmp94 };
                                          const tmp100 = sharedValue4(sharedValue2, obj13);
                                          cResult[62] = tmp4.ditherField;
                                          cResult[63] = tmp94;
                                          cResult[64] = tmp100;
                                          tmp98 = tmp100;
                                        }
                                      }
                                    }
                                    size = { width, height: tmp54, thinking, fill: tmp93, fillOpacity: 0.16 };
                                    const tmp97 = sharedValue4(stateFromStores(tmp2[17]), size);
                                    cResult[57] = tmp93;
                                    cResult[58] = 0.16;
                                    cResult[59] = thinking;
                                    cResult[60] = width;
                                    cResult[61] = tmp97;
                                    tmp94 = tmp97;
                                  }
                                  class Ae {
                                    constructor() {
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
                                    }
                                  }
                                  const obj14 = { children: items8 };
                                  items8 = [tmp78, tmp87];
                                  const tmp92 = closure_11(sharedValue5, obj14);
                                  cResult[54] = tmp78;
                                  cResult[55] = tmp87;
                                  cResult[56] = tmp92;
                                  tmp90 = tmp92;
                                }
                                class Ae {
                                  constructor() {
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
                                  }
                                }
                                const obj15 = { style: tmp81, children: tmp82 };
                                const tmp89 = sharedValue4(stateFromStores(tmp2[14]).View, obj15);
                                cResult[51] = tmp81;
                                cResult[52] = tmp82;
                                cResult[53] = tmp89;
                                tmp87 = tmp89;
                              }
                              class Ae {
                                constructor() {
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
                                }
                              }
                              const obj16 = { style: tmp4.fill, colors: tmp24.chroma, start: start2, end: end2 };
                              const tmp86 = sharedValue4(stateFromStores(tmp2[16]), obj16);
                              cResult[48] = tmp24.chroma;
                              cResult[49] = tmp4.fill;
                              cResult[50] = tmp86;
                              tmp82 = tmp86;
                            }
                            const items9 = [, ];
                            class Ae {
                              constructor() {
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
                              }
                            }
                            items9[1] = animatedStyle2;
                            cResult[45] = animatedStyle2;
                            cResult[46] = tmp4.sweep;
                            cResult[47] = items9;
                            tmp81 = items9;
                          }
                          class Ae {
                            constructor() {
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
                            }
                          }
                          const obj17 = { style: tmp72, children: tmp73 };
                          const tmp80 = sharedValue4(stateFromStores(tmp2[14]).View, obj17);
                          cResult[42] = tmp72;
                          cResult[43] = tmp73;
                          cResult[44] = tmp80;
                          tmp78 = tmp80;
                        }
                        class Ae {
                          constructor() {
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
                          }
                        }
                        const obj18 = { style: tmp4.fill, colors: tmp24.base, start: start2, end: end2 };
                        const tmp77 = sharedValue4(stateFromStores(tmp2[16]), obj18);
                        cResult[39] = tmp24.base;
                        cResult[40] = tmp4.fill;
                        cResult[41] = tmp77;
                        tmp73 = tmp77;
                      }
                      const items10 = [tmp4.sweep, animatedStyle1];
                      cResult[36] = animatedStyle1;
                      cResult[37] = tmp4.sweep;
                      cResult[38] = items10;
                      tmp72 = items10;
                    }
                  }
                  class S {
                    constructor() {
                      return sharedValue3.useReducedMotion;
                    }
                  }
                  const items11 = [sharedValue1, stateFromStores, thinking];
                  cResult[29] = sharedValue1;
                  cResult[30] = stateFromStores;
                  cResult[31] = thinking;
                  cResult[32] = tmp51;
                  cResult[33] = items11;
                  tmp50 = items11;
                  tmp49 = tmp51;
                }
              }
            }
            class S {
              constructor() {
                return sharedValue3.useReducedMotion;
              }
            }
            const items12 = [sharedValue4, sharedValue5, stateFromStores, thinking];
            cResult[23] = sharedValue4;
            cResult[24] = sharedValue5;
            cResult[25] = stateFromStores;
            cResult[26] = thinking;
            cResult[27] = tmp47;
            cResult[28] = items12;
            tmp46 = items12;
            tmp45 = tmp47;
          }
        }
      }
      function re() {
        const Easing = ReanimatedRexport.Easing;
        const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
        let num = 0;
        set = sharedValue.set;
        const withTiming = timing.withTiming;
        timing;
        if (thinking) {
          num = 1;
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
        let num3 = 0;
        set3 = sharedValue3.set;
        const withTiming3 = timing.withTiming;
        timing;
        if (thinking) {
          num3 = c13;
        }
        set3(withTiming3(num3, { duration: 400, easing: bezierResult }, "animate-always"));
      }
      tmp43[0] = sharedValue2;
      tmp43[1] = sharedValue3;
      tmp43[2] = sharedValue;
      tmp43[3] = thinking;
      cResult[17] = sharedValue2;
      cResult[18] = sharedValue3;
      cResult[19] = sharedValue;
      cResult[20] = thinking;
      cResult[21] = re;
      cResult[22] = tmp43;
      tmp42 = tmp43;
      tmp41 = re;
    }
  }
  tmp23[0] = tmp16;
  tmp23[1] = tmp17;
  tmp23[2] = tmp18;
  cResult[10] = tmp16;
  cResult[11] = tmp17;
  cResult[12] = tmp18;
  cResult[13] = tmp23;
  tmp22 = tmp23;
}) : (function ConjureShellGlow(thinking) {
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
  let num6;
  let obj10;
  let obj12;
  let obj22;
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
  let tmp = closure_25();
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
  let num3 = 0;
  const useSharedValue = tmp2(tmp3[14]).useSharedValue;
  tmp2(stateFromStores1[14]);
  if (thinking) {
    num3 = 1;
  }
  sharedValue = useSharedValue(num3);
  let num4 = 0;
  const useSharedValue2 = tmp2(tmp3[14]).useSharedValue;
  tmp2(stateFromStores1[14]);
  if (thinking) {
    num4 = 1;
  }
  sharedValue2 = useSharedValue2(num4);
  let num5 = 0;
  const useSharedValue3 = tmp2(tmp3[14]).useSharedValue;
  tmp2(stateFromStores1[14]);
  if (thinking) {
    num5 = v500;
  }
  sharedValue3 = useSharedValue3(num5);
  const tmp2Result12 = tmp2(stateFromStores1[14]);
  sharedValue1 = tmp2Result12.useSharedValue(0);
  const tmp2Result13 = tmp2(stateFromStores1[14]);
  sharedValue4 = tmp2Result13.useSharedValue(0);
  const tmp2Result14 = tmp2(stateFromStores1[14]);
  sharedValue5 = tmp2Result14.useSharedValue(0);
  const items4 = [sharedValue2, sharedValue3, sharedValue, thinking];
  const effect = obj4.useEffect(() => {
    const Easing = ReanimatedRexport.Easing;
    const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (thinking) {
      num = 1;
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
    let num3 = 0;
    set3 = sharedValue3.set;
    const withTiming3 = timing.withTiming;
    timing;
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
      const obj3 = ReanimatedRexport;
      obj3.cancelAnimation(sharedValue4);
      const obj4 = ReanimatedRexport;
      obj4.cancelAnimation(sharedValue5);
      const result = sharedValue4.set(0);
      const result1 = sharedValue5.set(0);
    } else if (thinking) {
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
          const obj = thinking(stateFromStores1[14]);
          return obj.cancelAnimation(sharedValue1);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue1);
    set2 = sharedValue1.set;
    const obj3 = timing;
    const obj4 = { duration };
    set2(obj3.withTiming(0, obj4));
  }, items6);
  const tmp2Result15 = tmp2(stateFromStores1[14]);
  class Z {
    constructor() {
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
    }
  }
  const obj5 = { lift: sharedValue, pulseAt, pulse: sharedValue1, BAND_HEIGHT: v500 };
  Z.__closure = obj5;
  Z.__workletHash = 9452161703379;
  Z.__initData = __initData5;
  const animatedStyle = tmp2Result15.useAnimatedStyle(Z);
  let fn = function $() {
    const obj = { opacity: (1 - sharedValue2.get()) * num2, transform: items };
    items = [{ translateX: -sharedValue4.get() * first }];
    ({ translateX: -sharedValue4.get() * first });
    return obj;
  };
  fn.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftBase: sharedValue4, width };
  fn.__workletHash = 16448825517927;
  fn.__initData = __initData6;
  const tmp2Result16 = tmp2(stateFromStores1[14]);
  const animatedStyle1 = tmp2Result16.useAnimatedStyle(fn);
  function ee() {
    const obj = { opacity: sharedValue2.get() * num2, transform: items };
    items = [{ translateX: -sharedValue5.get() * first }];
    ({ translateX: -sharedValue5.get() * first });
    return obj;
  }
  ee.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftChroma: sharedValue5, width };
  ee.__workletHash = 17460334938933;
  ee.__initData = __initData7;
  const tmp2Result17 = tmp2(stateFromStores1[14]);
  const animatedStyle2 = tmp2Result17.useAnimatedStyle(ee);
  function te() {
    let first;
    let height;
    let tmp14;
    let tmp18;
    let tmp19;
    const tmp = ANDROID;
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
  const obj6 = { ANDROID: sharedValue5, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue1, ditherHeight: sharedValue3 };
  te.__closure = obj6;
  te.__workletHash = 14002841141788;
  te.__initData = __initData8;
  const tmp2Result18 = tmp2(stateFromStores1[14]);
  const animatedStyle3 = tmp2Result18.useAnimatedStyle(te);
  const obj7 = { style: tmp.fill, colors, locations, start, end };
  const tmp34 = sharedValue3(stateFromStores(stateFromStores1[16]), obj7);
  const obj8 = { children: items8 };
  const obj9 = { style: items7, children: sharedValue3(stateFromStores(stateFromStores1[16]), obj10) };
  items7 = [tmp.sweep, animatedStyle1];
  const View = stateFromStores(tmp3[14]).View;
  obj10 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
  items8 = [sharedValue3(View, obj9), ];
  const obj11 = { style: items9, children: sharedValue3(stateFromStores(stateFromStores1[16]), obj12) };
  items9 = [tmp.sweep, animatedStyle2];
  const View2 = stateFromStores(tmp3[14]).View;
  obj12 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
  items8[1] = sharedValue3(View2, obj11);
  const tmp36 = sharedValue4(sharedValue1, obj8);
  const obj13 = { style: tmp.ditherField, children: sharedValue3(tmp38, size) };
  size = { width, height: v500, thinking, fill: isThemeDarkResult ? c15 : c16, fillOpacity: num6 };
  num6 = 0.16;
  const tmp31 = locations;
  const tmp32 = start;
  const tmp33 = end;
  const tmp35 = sharedValue4;
  tmp38 = stateFromStores(stateFromStores1[17]);
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
  const View3 = tmp30(tmp3[14]).View;
  if (sharedValue5) {
    const obj17 = { style: width.absoluteFill, children: tmp36 };
    tmp29Result5 = tmp29(tmp37, obj17);
    tmp41 = width;
  } else {
    tmp41 = width;
    const obj18 = { style: width.absoluteFill, maskElement: tmp34, children: tmp36 };
    tmp29Result5 = tmp29(tmp30(tmp3[18]), obj18);
  }
  items12 = [tmp29(View3, obj16), , ];
  let tmp29Result7 = null;
  if (!stateFromStores) {
    const obj19 = { style: items13, children: tmp29Result6 };
    items13 = [tmp.ditherClip, animatedStyle3];
    tmp29Result6 = tmp29Result;
    const View4 = tmp30(tmp3[14]).View;
    if (!sharedValue5) {
      const obj20 = { style: tmp41.absoluteFill, maskElement: tmp34, children: tmp29Result };
      tmp29Result6 = tmp29(tmp30(tmp3[18]), obj20);
    }
    tmp29Result7 = tmp29(View4, obj19);
  }
  items12[1] = tmp29Result7;
  let tmp29Result8 = null;
  if (sharedValue5) {
    const obj21 = { style: items14, children: sharedValue3(stateFromStores(stateFromStores1[16]), obj22) };
    items14 = [tmp.band, animatedStyle];
    const View5 = tmp30(tmp3[14]).View;
    obj22 = { style: tmp.fill, colors: memo, locations: tmp31, start: tmp32, end: tmp33 };
    tmp29Result8 = tmp29(View5, obj21);
  }
  items12[2] = tmp29Result8;
  return tmp35(closure_6, obj15);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureShellGlow.tsx");

export default tmp4;
