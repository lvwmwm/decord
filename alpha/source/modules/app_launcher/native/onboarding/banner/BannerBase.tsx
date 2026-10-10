// Module ID: 11737
// Function ID: 11738
// Name: BannerBase
// Dependencies: [32, 19, 17, 5081, 21, 587, 5092, 11726, 558, 576, 4850, 1497, 4967, 504, 5378, 5391, 6105, 11738, 5088, 2]

// Module 11737 (BannerBase)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import Text_Text from "Text/Text" /* 5088 */;
import spring from "spring" /* 5378 */;
import ApplicationsImage from "ApplicationsImage" /* 11726 */;
import _mod11738 from "module_11738" /* 11738 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
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
let obj = { banner: rect, bannerGradientColor: { backgroundColor: "#7eaaff" }, bannerBackgroundGradient: rect1, imageContainer: { width: 72 }, trinketsLottie: { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" }, bannerTextContainer: { alignItems: "center", justifyContent: "center", flexShrink: 1 }, bannerTextContainerWithImage: obj2, bannerTextContainerWithoutImage: { flex: 1 }, bannerText: { width: "100%" }, bannerTextCentered: { textAlign: "center" } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: ApplicationsImage.APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
const __initData = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const __initData2 = { code: "function BannerBaseTsx2(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BannerBase(arg0) {
  let image;
  let require;
  let text;
  let tmp10;
  let tmp12;
  let tmp6;
  let useReducedMotion;
  let obj = react2;
  const cResult = obj.c(52);
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
    const tmpResult4 = ColorUtils;
    const hexOpacityToRgbaResult1 = tmpResult4.hexOpacityToRgba(backgroundColor, 0);
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
    const tmpResult5 = get_initialized;
    const stateFromStores = tmpResult5.useStateFromStores(tmp16, tmp17);
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
    const tmpResult6 = ReanimatedRexport;
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
    let obj3 = { bannerMeasured: sharedValue, withDelay: tmp(4850).withDelay, withSpring: tmp(5378).withSpring, SPRING_CONFIG };
    const useAnimatedStyle = tmpResult6.useAnimatedStyle;
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
                if (cResult[27] === tmp30) {
                  tmp31 = cResult[28];
                }
                if (cResult[29] === image) {
                  if (cResult[30] === tmp4.imageContainer) {
                    if (cResult[31] === tmp4.trinketsLottie) {
                      let tmp34;
                      if (cResult[32] === stateFromStores) {
                        tmp34 = cResult[33];
                      }
                      const tmp43 = null != image ? tmp4.bannerTextContainerWithImage : tmp4.bannerTextContainerWithoutImage;
                      if (cResult[34] === tmp4.bannerTextContainer) {
                        let tmp44;
                        if (cResult[35] === tmp43) {
                          tmp44 = cResult[36];
                        }
                        if (cResult[37] === tmp4.bannerText) {
                          let tmp46;
                          if (cResult[38] === (null == image && tmp4.bannerTextCentered)) {
                            tmp46 = cResult[39];
                          }
                          if (cResult[40] === tmp46) {
                            let tmp47;
                            if (cResult[41] === text) {
                              tmp47 = cResult[42];
                            }
                            if (cResult[43] === tmp44) {
                              let tmp50;
                              if (cResult[44] === tmp47) {
                                tmp50 = cResult[45];
                              }
                              if (cResult[46] === tmp20) {
                                if (cResult[47] === tmp31) {
                                  if (cResult[48] === tmp34) {
                                    if (cResult[49] === tmp50) {
                                      let tmp54;
                                      if (cResult[50] === tmp26) {
                                        tmp54 = cResult[51];
                                      }
                                      return tmp54;
                                    }
                                  }
                                }
                              }
                              let obj4 = { style: tmp26, onLayout: tmp20, children: null };
                              const items1 = [tmp31, tmp34, tmp50];
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
                              const tmp56 = closure_8(sharedValue(4850).View, obj4);
                              cResult[46] = tmp20;
                              cResult[47] = tmp31;
                              cResult[48] = tmp34;
                              cResult[49] = tmp50;
                              cResult[50] = tmp26;
                              cResult[51] = tmp56;
                              tmp54 = tmp56;
                            }
                            const obj5 = { style: tmp44, children: tmp47 };
                            const tmp53 = closure_7(View, obj5);
                            cResult[43] = tmp44;
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
                            cResult[44] = tmp47;
                            cResult[45] = tmp53;
                            tmp50 = tmp53;
                          }
                          const obj6 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp46, children: text };
                          const tmp49 = closure_7(Text_Text.Text, obj6);
                          cResult[40] = tmp46;
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
                          cResult[42] = tmp49;
                          tmp47 = tmp49;
                        }
                        const items2 = [tmp4.bannerText, null == image && tmp4.bannerTextCentered];
                        cResult[37] = tmp4.bannerText;
                        cResult[38] = null == image && tmp4.bannerTextCentered;
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
                        cResult[39] = items2;
                        tmp46 = items2;
                      }
                      const items3 = [tmp4.bannerTextContainer, tmp43];
                      cResult[34] = tmp4.bannerTextContainer;
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
                      cResult[36] = items3;
                      tmp44 = items3;
                    }
                  }
                }
                let tmp36 = null != image;
                if (tmp36) {
                  const obj7 = { style: tmp4.imageContainer, children: tmp41 };
                  const obj8 = { style: tmp4.trinketsLottie, source: _mod11738, autoPlay: !stateFromStores };
                  const tmp8Result = sharedValue(6105);
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
                  tmp41[0] = closure_7(tmp8Result, obj8);
                  tmp41[1] = image;
                  tmp36 = closure_8(View, obj7);
                }
                cResult[29] = image;
                cResult[30] = tmp4.imageContainer;
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
                cResult[32] = stateFromStores;
                cResult[33] = tmp36;
                tmp34 = tmp36;
              }
              const obj9 = { start: tmp27, end: tmp28, colors: tmp14, style: tmp30 };
              const tmp33 = closure_7(sharedValue(5391), obj9);
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
            const items4 = [tmp4.bannerBackgroundGradient, tmp29];
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
            tmp30 = items4;
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
      const items5 = [tmp4.banner, tmp25, animatedStyle];
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
      cResult[17] = items5;
      tmp26 = items5;
    }
    const obj10 = { opacity: num9, width: diff };
    cResult[11] = diff;
    cResult[12] = num9;
    cResult[13] = obj10;
    tmp25 = obj10;
  }
  const items6 = [tmp10, tmp12];
  cResult[4] = tmp10;
  cResult[5] = tmp12;
  cResult[6] = items6;
  tmp14 = items6;
}) : (function BannerBase(image) {
  let Text;
  let _undefined;
  let c0;
  let items3;
  let items4;
  let items5;
  let items7;
  let tmp3;
  let useReducedMotion;
  image = image.image;
  _require = undefined;
  const text = image.text;
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
  View = sharedValue(4850).View;
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
  items4 = [closure_7(tmp7(5391), obj8), , ];
  let tmp11Result = null != image;
  if (tmp11Result) {
    const obj9 = { style: tmp.imageContainer, children: items5 };
    const obj10 = { style: tmp.trinketsLottie, source: require("module_11738"), autoPlay: !stateFromStores };
    const tmp7Result = sharedValue(6105);
    items5 = [tmp12(tmp7Result, obj10), image];
    tmp11Result = tmp11(View, obj9);
  }
  items4[1] = tmp11Result;
  const items6 = [tmp.bannerTextContainer, ];
  items6[1] = null != image ? tmp.bannerTextContainerWithImage : tmp.bannerTextContainerWithoutImage;
  const obj11 = { style: items6, children: closure_7(Text, { variant: "text-md/semibold", color: "text-overlay-light", style: items7, children: text }) };
  items7 = [tmp.bannerText, ];
  let bannerTextCentered = null == image;
  Text = tmp4(5088).Text;
  const tmp16 = View;
  if (bannerTextCentered) {
    bannerTextCentered = tmp.bannerTextCentered;
  }
  items7[1] = bannerTextCentered;
  items4[2] = closure_7(tmp16, obj11);
  return closure_8(View, obj7);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default tmp4;
