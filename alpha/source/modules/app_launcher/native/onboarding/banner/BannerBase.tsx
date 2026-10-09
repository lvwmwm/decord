// Module ID: 11691
// Function ID: 11692
// Name: BannerBase
// Dependencies: [32, 19, 17, 5080, 21, 587, 5091, 11680, 558, 576, 4811, 1497, 4928, 504, 5375, 5388, 11692, 6112, 5087, 2]

// Module 11691 (BannerBase)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import Text_Text from "Text/Text" /* 5087 */;
import spring from "spring" /* 5375 */;
import ApplicationsImage from "ApplicationsImage" /* 11680 */;
import _mod11692 from "module_11692" /* 11692 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
let rect1;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
let createStyles = createStyles_mod;
let obj = { banner: rect, bannerGradientColor: { backgroundColor: "#7eaaff" }, bannerBackgroundGradient: rect1, imageContainer: { width: 72 }, trinketsLottie: { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" }, bannerTextContainer: obj2, bannerText: { width: "100%" } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: ApplicationsImage.APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2 = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
let closure_10 = createStyles(obj);
const __initData = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const __initData2 = { code: "function BannerBaseTsx2(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BannerBase(arg0) {
  let image;
  let imageContainer;
  let require;
  let text;
  let tmp10;
  let tmp12;
  let tmp6;
  let trinketsLottie;
  let useReducedMotion;
  let obj = react2;
  const cResult = obj.c(49);
  ({ image, text } = arg0);
  const tmp4 = closure_10();
  [tmp6, require] = _slicedToArray(react.useState(0), 2);
  const tmp5 = _slicedToArray(react.useState(0), 2);
  let obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(false);
  const diff = sharedValue(1497)().width - 2 * sharedValue(587).space.PX_16;
  const backgroundColor = tmp4.bannerGradientColor.backgroundColor;
  if (cResult[0] !== backgroundColor) {
    let num = 0.2;
    const tmpResult = ColorUtils;
    const hexOpacityToRgbaResult = tmpResult.hexOpacityToRgba(backgroundColor, 0.2);
    cResult[0] = backgroundColor;
    cResult[1] = hexOpacityToRgbaResult;
    tmp10 = hexOpacityToRgbaResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== backgroundColor) {
    const tmpResult5 = ColorUtils;
    const hexOpacityToRgbaResult1 = tmpResult5.hexOpacityToRgba(backgroundColor, 0);
    cResult[2] = backgroundColor;
    cResult[3] = hexOpacityToRgbaResult1;
    tmp12 = hexOpacityToRgbaResult1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp10) {
    let tmp14;
    let tmp17;
    let tmp16;
    let tmp20;
    if (cResult[5] === tmp12) {
      tmp14 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [AccessibilityStore];
      const fn = function k() {
        return useReducedMotion.useReducedMotion;
      };
      let num4 = 7;
      cResult[7] = items;
      cResult[8] = fn;
      tmp17 = fn;
      tmp16 = items;
    } else {
      tmp16 = cResult[7];
      tmp17 = cResult[8];
    }
    const tmpResult6 = get_initialized;
    const stateFromStores = tmpResult6.useStateFromStores(tmp16, tmp17);
    if (cResult[9] !== sharedValue) {
      function handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        let height;
        if (layout != null) {
          height = layout.height;
        }
        if (height > 0) {
          _require(height);
          const result = sharedValue.set(true);
        }
      }
      cResult[9] = sharedValue;
      cResult[10] = handleLayout;
      tmp20 = handleLayout;
    } else {
      tmp20 = cResult[10];
    }
    const tmpResult7 = ReanimatedRexport;
    class M {
      constructor() {
        let items;
        let num = 0;
        const obj = sharedValue;
        if (sharedValue.get()) {
          const withDelay = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj2 = spring;
          num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
        }
        let num4 = 30;
        const obj3 = { opacity: num, transform: items };
        if (obj.get()) {
          const withDelay2 = ReanimatedRexport.withDelay;
          ReanimatedRexport;
          const obj4 = spring;
          num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
        }
        items = [{ translateY: num4 }];
        return obj3;
      }
    }
    let obj3 = { bannerMeasured: sharedValue, withDelay: tmp(4811).withDelay, withSpring: tmp(5375).withSpring, SPRING_CONFIG };
    const useAnimatedStyle = tmpResult7.useAnimatedStyle;
    M.__closure = obj3;
    M.__workletHash = 5314641176204;
    M.__initData = __initData;
    const animatedStyle = useAnimatedStyle(M);
    let num9 = 0;
    if (tmp6 > 0) {
      num9 = 1;
    }
    if (cResult[11] === diff) {
      let tmp25;
      if (cResult[12] === num9) {
        tmp25 = cResult[13];
      }
      if (cResult[14] === animatedStyle) {
        if (cResult[15] === tmp4.banner) {
          let tmp26;
          let tmp28;
          let tmp27;
          if (cResult[16] === tmp25) {
            tmp26 = cResult[17];
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const point = { x: 0, y: 0 };
            const point1 = { x: 0, y: 1 };
            cResult[18] = point;
            cResult[19] = point1;
            tmp28 = point1;
            tmp27 = point;
          } else {
            tmp27 = cResult[18];
            tmp28 = cResult[19];
          }
          if (cResult[20] === tmp6) {
            let tmp29;
            if (cResult[21] === diff) {
              tmp29 = cResult[22];
            }
            if (cResult[23] === tmp4.bannerBackgroundGradient) {
              let tmp30;
              if (cResult[24] === tmp29) {
                tmp30 = cResult[25];
              }
              if (cResult[26] === tmp14) {
                let tmp31;
                let tmp34;
                if (cResult[27] === tmp30) {
                  tmp31 = cResult[28];
                }
                const _Symbol3 = Symbol;
                ({ imageContainer, trinketsLottie } = tmp4);
                if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmpResult8 = _mod11692;
                  cResult[29] = tmpResult8;
                  tmp34 = tmpResult8;
                } else {
                  tmp34 = cResult[29];
                }
                if (cResult[30] === tmp4.trinketsLottie) {
                  let tmp37;
                  if (cResult[31] === !stateFromStores) {
                    tmp37 = cResult[32];
                  }
                  if (cResult[33] === image) {
                    if (cResult[34] === tmp4.imageContainer) {
                      let tmp40;
                      if (cResult[35] === tmp37) {
                        tmp40 = cResult[36];
                      }
                      if (cResult[37] === tmp4.bannerText) {
                        let tmp44;
                        if (cResult[38] === text) {
                          tmp44 = cResult[39];
                        }
                        if (cResult[40] === tmp4.bannerTextContainer) {
                          let tmp47;
                          if (cResult[41] === tmp44) {
                            tmp47 = cResult[42];
                          }
                          if (cResult[43] === tmp20) {
                            if (cResult[44] === tmp31) {
                              if (cResult[45] === tmp40) {
                                if (cResult[46] === tmp47) {
                                  let tmp51;
                                  if (cResult[47] === tmp26) {
                                    tmp51 = cResult[48];
                                  }
                                  return tmp51;
                                }
                              }
                            }
                          }
                          let obj4 = { style: tmp26, onLayout: tmp20, children: null };
                          const items1 = [tmp31, tmp40, tmp47];
                          class M {
                            constructor() {
                              let items;
                              let num = 0;
                              const obj = sharedValue;
                              if (sharedValue.get()) {
                                const withDelay = ReanimatedRexport.withDelay;
                                ReanimatedRexport;
                                const obj2 = spring;
                                num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
                              }
                              let num4 = 30;
                              const obj3 = { opacity: num, transform: items };
                              if (obj.get()) {
                                const withDelay2 = ReanimatedRexport.withDelay;
                                ReanimatedRexport;
                                const obj4 = spring;
                                num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
                              }
                              items = [{ translateY: num4 }];
                              return obj3;
                            }
                          }
                          const tmp53 = closure_8(sharedValue(4811).View, obj4);
                          cResult[43] = tmp20;
                          cResult[44] = tmp31;
                          cResult[45] = tmp40;
                          cResult[46] = tmp47;
                          cResult[47] = tmp26;
                          cResult[48] = tmp53;
                          tmp51 = tmp53;
                        }
                        const obj5 = { style: tmp4.bannerTextContainer, children: tmp44 };
                        const tmp50 = closure_7(View, obj5);
                        cResult[40] = tmp4.bannerTextContainer;
                        class M {
                          constructor() {
                            let items;
                            let num = 0;
                            const obj = sharedValue;
                            if (sharedValue.get()) {
                              const withDelay = ReanimatedRexport.withDelay;
                              ReanimatedRexport;
                              const obj2 = spring;
                              num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
                            }
                            let num4 = 30;
                            const obj3 = { opacity: num, transform: items };
                            if (obj.get()) {
                              const withDelay2 = ReanimatedRexport.withDelay;
                              ReanimatedRexport;
                              const obj4 = spring;
                              num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
                            }
                            items = [{ translateY: num4 }];
                            return obj3;
                          }
                        }
                        cResult[41] = tmp44;
                        cResult[42] = tmp50;
                        tmp47 = tmp50;
                      }
                      const obj6 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp4.bannerText, children: text };
                      const tmp46 = closure_7(Text_Text.Text, obj6);
                      cResult[37] = tmp4.bannerText;
                      class M {
                        constructor() {
                          let items;
                          let num = 0;
                          const obj = sharedValue;
                          if (sharedValue.get()) {
                            const withDelay = ReanimatedRexport.withDelay;
                            ReanimatedRexport;
                            const obj2 = spring;
                            num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
                          }
                          let num4 = 30;
                          const obj3 = { opacity: num, transform: items };
                          if (obj.get()) {
                            const withDelay2 = ReanimatedRexport.withDelay;
                            ReanimatedRexport;
                            const obj4 = spring;
                            num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
                          }
                          items = [{ translateY: num4 }];
                          return obj3;
                        }
                      }
                      cResult[39] = tmp46;
                      tmp44 = tmp46;
                    }
                  }
                  const items2 = [tmp37, image];
                  class M {
                    constructor() {
                      let items;
                      let num = 0;
                      const obj = sharedValue;
                      if (sharedValue.get()) {
                        const withDelay = ReanimatedRexport.withDelay;
                        ReanimatedRexport;
                        const obj2 = spring;
                        num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
                      }
                      let num4 = 30;
                      const obj3 = { opacity: num, transform: items };
                      if (obj.get()) {
                        const withDelay2 = ReanimatedRexport.withDelay;
                        ReanimatedRexport;
                        const obj4 = spring;
                        num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
                      }
                      items = [{ translateY: num4 }];
                      return obj3;
                    }
                  }
                  cResult[33] = image;
                  cResult[34] = tmp4.imageContainer;
                  cResult[35] = tmp37;
                  cResult[36] = tmp43;
                  tmp40 = tmp43;
                }
                const obj8 = { style: null, source: tmp34, autoPlay: !stateFromStores };
                class M {
                  constructor() {
                    let items;
                    let num = 0;
                    const obj = sharedValue;
                    if (sharedValue.get()) {
                      const withDelay = ReanimatedRexport.withDelay;
                      ReanimatedRexport;
                      const obj2 = spring;
                      num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
                    }
                    let num4 = 30;
                    const obj3 = { opacity: num, transform: items };
                    if (obj.get()) {
                      const withDelay2 = ReanimatedRexport.withDelay;
                      ReanimatedRexport;
                      const obj4 = spring;
                      num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
                    }
                    items = [{ translateY: num4 }];
                    return obj3;
                  }
                }
                const tmp39 = closure_7(sharedValue(6112), obj8);
                cResult[30] = tmp4.trinketsLottie;
                cResult[31] = !stateFromStores;
                cResult[32] = tmp39;
                tmp37 = tmp39;
              }
              const obj9 = { start: tmp27, end: tmp28, colors: tmp14, style: tmp30 };
              const tmp33 = closure_7(sharedValue(5388), obj9);
              class M {
                constructor() {
                  let items;
                  let num = 0;
                  const obj = sharedValue;
                  if (sharedValue.get()) {
                    const withDelay = ReanimatedRexport.withDelay;
                    ReanimatedRexport;
                    const obj2 = spring;
                    num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
                  }
                  let num4 = 30;
                  const obj3 = { opacity: num, transform: items };
                  if (obj.get()) {
                    const withDelay2 = ReanimatedRexport.withDelay;
                    ReanimatedRexport;
                    const obj4 = spring;
                    num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
                  }
                  items = [{ translateY: num4 }];
                  return obj3;
                }
              }
              cResult[27] = tmp30;
              cResult[28] = tmp33;
              tmp31 = tmp33;
            }
            const items3 = [tmp4.bannerBackgroundGradient, tmp29];
            cResult[23] = tmp4.bannerBackgroundGradient;
            cResult[24] = tmp29;
            class M {
              constructor() {
                let items;
                let num = 0;
                const obj = sharedValue;
                if (sharedValue.get()) {
                  const withDelay = ReanimatedRexport.withDelay;
                  ReanimatedRexport;
                  const obj2 = spring;
                  num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
                }
                let num4 = 30;
                const obj3 = { opacity: num, transform: items };
                if (obj.get()) {
                  const withDelay2 = ReanimatedRexport.withDelay;
                  ReanimatedRexport;
                  const obj4 = spring;
                  num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
                }
                items = [{ translateY: num4 }];
                return obj3;
              }
            }
            tmp30 = items3;
          }
          size = { height: tmp6, width: diff };
          cResult[20] = tmp6;
          class M {
            constructor() {
              let items;
              let num = 0;
              const obj = sharedValue;
              if (sharedValue.get()) {
                const withDelay = ReanimatedRexport.withDelay;
                ReanimatedRexport;
                const obj2 = spring;
                num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
              }
              let num4 = 30;
              const obj3 = { opacity: num, transform: items };
              if (obj.get()) {
                const withDelay2 = ReanimatedRexport.withDelay;
                ReanimatedRexport;
                const obj4 = spring;
                num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
              }
              items = [{ translateY: num4 }];
              return obj3;
            }
          }
          cResult[21] = diff;
          cResult[22] = size;
          tmp29 = size;
        }
      }
      const items4 = [tmp4.banner, tmp25, animatedStyle];
      cResult[14] = animatedStyle;
      cResult[15] = tmp4.banner;
      class M {
        constructor() {
          let items;
          let num = 0;
          const obj = sharedValue;
          if (sharedValue.get()) {
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj2 = spring;
            num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
          }
          let num4 = 30;
          const obj3 = { opacity: num, transform: items };
          if (obj.get()) {
            const withDelay2 = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj4 = spring;
            num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
          }
          items = [{ translateY: num4 }];
          return obj3;
        }
      }
      cResult[16] = tmp25;
      cResult[17] = items4;
      tmp26 = items4;
    }
    const obj10 = { opacity: num9, width: diff };
    cResult[11] = diff;
    cResult[12] = num9;
    cResult[13] = obj10;
    tmp25 = obj10;
  }
  const items5 = [tmp10, tmp12];
  cResult[4] = tmp10;
  cResult[5] = tmp12;
  cResult[6] = items5;
  tmp14 = items5;
}) : (function BannerBase(arg0) {
  let _undefined;
  let c0;
  let image;
  let items3;
  let items4;
  let items5;
  let obj12;
  let text;
  let tmp3;
  let useReducedMotion;
  _require = undefined;
  ({ image, text } = arg0);
  const tmp = closure_10();
  let num = 0;
  [tmp3, c0] = _slicedToArray(react.useState(0), 2);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(false);
  const diff = sharedValue(1497)().width - 2 * sharedValue(587).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj2 = require("ColorUtils");
  let items = [obj2.hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj3 = require("ColorUtils");
  items[1] = obj3.hexOpacityToRgba(backgroundColor, 0);
  let obj4 = require("get initialized");
  const items1 = [AccessibilityStore];
  const stateFromStores = obj4.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const fn = function p() {
    let items;
    let num = 0;
    const obj = sharedValue;
    if (sharedValue.get()) {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = spring;
      num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
    }
    let num4 = 30;
    const obj3 = { opacity: num, transform: items };
    if (obj.get()) {
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj4 = spring;
      num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
    }
    items = [{ translateY: num4 }];
    return obj3;
  };
  const obj5 = require("ReanimatedRexport");
  fn.__closure = { bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG };
  fn.__workletHash = 2233562582031;
  fn.__initData = __initData2;
  ({ bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items2 = [tmp.banner, , ];
  View = sharedValue(4811).View;
  if (tmp3 > 0) {
    num = 1;
  }
  const obj7 = {
    style: items2,
    onLayout: function handleLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      let height;
      if (layout != null) {
        height = layout.height;
      }
      if (height > 0) {
        _undefined(height);
        const result = sharedValue.set(true);
      }
    },
    children: items4
  };
  items2[1] = { opacity: num, width: diff };
  items2[2] = animatedStyle;
  const obj8 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: items3 };
  items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  items4 = [closure_7(tmp7(5388), obj8), , ];
  const obj9 = { style: tmp.imageContainer, children: items5 };
  const obj10 = { style: tmp.trinketsLottie, source: require("module_11692"), autoPlay: !stateFromStores };
  const tmp7Result = sharedValue(6112);
  items5 = [closure_7(tmp7Result, obj10), image];
  items4[1] = closure_8(View, obj9);
  const obj11 = { style: tmp.bannerTextContainer, children: closure_7(require("Text/Text").Text, obj12) };
  obj12 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp.bannerText, children: text };
  items4[2] = closure_7(View, obj11);
  return closure_8(View, obj7);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default tmp4;
