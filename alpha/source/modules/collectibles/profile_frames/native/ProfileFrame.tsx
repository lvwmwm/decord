// Module ID: 8322
// Function ID: 8323
// Name: ProfileFrame
// Dependencies: [19, 17, 8305, 8323, 21, 4810, 5090, 558, 576, 8324, 6164, 5091, 8326, 8327, 2]

// Module 8322 (ProfileFrame)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import FastImageDefault from "FastImage" /* 6164 */;
import FramePreviewOverrideStore from "FramePreviewOverrideStore" /* 8305 */;
import useProfileFrameLayerAsset from "useProfileFrameLayerAsset" /* 8324 */;
import FramePreviewOverrideFrameDefault from "FramePreviewOverrideFrame" /* 8327 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 8323 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let num2, set, tmp2;

let Easing;
let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
({ View: closure_4, StyleSheet } = react_native);
let closure_5 = FramePreviewOverrideStore.useFramePreviewOverrideStore;
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: metroRequire, PROFILE_FRAME_Z_INDEX: metroImportDefault } = ProfileFrameConstants);
let jsx = Fragment.jsx;
let source = { duration: 150, easing: Easing.in(ReanimatedRexport.Easing.ease) };
Easing = ReanimatedRexport.Easing;
let createStyles = createStyles_mod;
let obj2 = { container: obj3, layer: obj4 };
obj3 = { pointerEvents: "none" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { alignItems: "center", overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileFrameLayer(arg0) {
  let assetUrl;
  let containerHeight;
  let containerWidth;
  let imageHeight;
  let layer;
  let overflowBottom;
  let overflowHorizontal;
  let overflowTop;
  let require;
  let skuId;
  const obj = require("react");
  const cResult = obj.c(45);
  ({ skuId, layer, overflowHorizontal, containerWidth, containerHeight } = arg0);
  ({ overflowTop, overflowBottom } = arg0);
  const tmp3 = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  require = sum;
  if (cResult[0] === layer) {
    if (cResult[1] === skuId) {
      let tmp5;
      if (cResult[2] === sum) {
        tmp5 = cResult[3];
      }
      const tmp7 = assetUrl(imageHeight[9])(tmp5);
      const tmp6 = assetUrl;
      assetUrl = tmp7.assetUrl;
      imageHeight = tmp7.imageHeight;
      if (cResult[4] === -overflowHorizontal) {
        if (cResult[5] === -overflowHorizontal) {
          let tmp12;
          let tmp14;
          if (cResult[6] === closure_7[layer.order]) {
            tmp12 = cResult[7];
          }
          const type = layer.type;
          if ("staple" === type) {
            let tmp22;
            if ("top" === layer.anchor) {
              tmp22 = -overflowTop;
            }
            let tmp23;
            if ("bottom" === layer.anchor) {
              tmp23 = -overflowBottom;
            }
            if (cResult[8] === tmp12) {
              if (cResult[9] === tmp22) {
                let tmp24;
                if (cResult[10] === tmp23) {
                  tmp24 = cResult[11];
                }
                tmp14 = tmp24;
              }
            }
            const obj2 = { top: tmp22, bottom: tmp23 };
            const merged = Object.assign(tmp12);
            cResult[8] = tmp12;
            cResult[9] = tmp22;
            cResult[10] = tmp23;
            cResult[11] = obj2;
            tmp24 = obj2;
          } else if ("rail" === type) {
            let str2 = "center";
            if ("center" !== layer.anchor) {
              let str3 = "flex-end";
              if ("top" === layer.anchor) {
                str3 = "flex-start";
              }
              str2 = str3;
            }
            if (cResult[12] === tmp12) {
              let tmp18;
              if (cResult[13] === str2) {
                tmp18 = cResult[14];
              }
              tmp14 = tmp18;
            }
            const obj3 = { justifyContent: str2 };
            const merged1 = Object.assign(tmp12);
            cResult[12] = tmp12;
            cResult[13] = str2;
            cResult[14] = obj3;
            tmp18 = obj3;
          } else {
            if (cResult[15] === tmp12) {
              if (cResult[16] === -overflowHorizontal) {
                tmp14 = cResult[17];
              }
            }
            const obj4 = { left: -overflowHorizontal };
            const merged2 = Object.assign(tmp12);
            cResult[15] = tmp12;
            cResult[16] = -overflowHorizontal;
            cResult[17] = obj4;
            tmp14 = obj4;
          }
          const tmp28 = true === layer.responsive && "rail" === layer.type && null != containerHeight && containerWidth / containerHeight >= closure_6;
          if (0 !== imageHeight) {
            if (null != assetUrl) {
              if (!tmp28) {
                if ("border" === layer.type) {
                  if (null != containerHeight) {
                    if (0 !== containerHeight) {
                      const _Math = Math;
                      const rounded = Math.ceil(containerHeight / imageHeight);
                      if (cResult[18] === tmp14) {
                        let tmp40;
                        let tmp41;
                        if (cResult[19] === tmp3.layer) {
                          tmp40 = cResult[20];
                        }
                        if (cResult[21] === assetUrl) {
                          if (cResult[22] === imageHeight) {
                            if (cResult[23] === rounded) {
                              if (cResult[24] === sum) {
                                tmp41 = cResult[25];
                              }
                              if (cResult[30] === tmp40) {
                                let tmp44;
                                if (cResult[31] === tmp41) {
                                  tmp44 = cResult[32];
                                }
                                return tmp44;
                              }
                              const tmp47 = <closure_4 style={tmp40}>{tmp41}</closure_4>;
                              cResult[30] = tmp40;
                              cResult[31] = tmp41;
                              cResult[32] = tmp47;
                              tmp44 = tmp47;
                            }
                          }
                        }
                        if (cResult[26] === assetUrl) {
                          if (cResult[27] === imageHeight) {
                            let tmp42;
                            if (cResult[28] === sum) {
                              tmp42 = cResult[29];
                            }
                            const _Array = Array;
                            const obj6 = { length: rounded };
                            const arr = Array.from(obj6, tmp42);
                            cResult[21] = assetUrl;
                            cResult[22] = imageHeight;
                            cResult[23] = rounded;
                            cResult[24] = sum;
                            cResult[25] = arr;
                            tmp41 = arr;
                          }
                        }
                        const fn = function q(arg0, arg1) {
                          source = { uri: assetUrl };
                          return jsx(FastImageDefault, { source, resizeMode: "cover", width: require, height: imageHeight }, arg1);
                        };
                        cResult[26] = assetUrl;
                        cResult[27] = imageHeight;
                        cResult[28] = sum;
                        cResult[29] = fn;
                        tmp42 = fn;
                      }
                      const items = [tmp3.layer, tmp14];
                      cResult[18] = tmp14;
                      cResult[19] = tmp3.layer;
                      cResult[20] = items;
                      tmp40 = items;
                    }
                  }
                  return null;
                } else {
                  if (cResult[33] === tmp14) {
                    let tmp31;
                    let tmp32;
                    if (cResult[34] === tmp3.layer) {
                      tmp31 = cResult[35];
                    }
                    if (cResult[36] !== assetUrl) {
                      const obj7 = { uri: assetUrl };
                      cResult[36] = assetUrl;
                      cResult[37] = obj7;
                      tmp32 = obj7;
                    } else {
                      tmp32 = cResult[37];
                    }
                    if (cResult[38] === imageHeight) {
                      if (cResult[39] === tmp32) {
                        let tmp33;
                        if (cResult[40] === sum) {
                          tmp33 = cResult[41];
                        }
                        if (cResult[42] === tmp31) {
                          let tmp36;
                          if (cResult[43] === tmp33) {
                            tmp36 = cResult[44];
                          }
                          return tmp36;
                        }
                        const tmp39 = <closure_4 style={tmp31}>{tmp33}</closure_4>;
                        cResult[42] = tmp31;
                        cResult[43] = tmp33;
                        cResult[44] = tmp39;
                        tmp36 = tmp39;
                      }
                    }
                    const tmp35 = jsx(tmp6(imageHeight[10]), { source: tmp32, resizeMode: "cover", width: sum, height: imageHeight });
                    cResult[38] = imageHeight;
                    cResult[39] = tmp32;
                    cResult[40] = sum;
                    cResult[41] = tmp35;
                    tmp33 = tmp35;
                  }
                  const items1 = [tmp3.layer, tmp14];
                  cResult[33] = tmp14;
                  cResult[34] = tmp3.layer;
                  cResult[35] = items1;
                  tmp31 = items1;
                }
              }
            }
          }
          return null;
        }
      }
      const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: closure_7[layer.order] };
      cResult[4] = -overflowHorizontal;
      cResult[5] = -overflowHorizontal;
      cResult[6] = closure_7[layer.order];
      cResult[7] = rect;
      tmp12 = rect;
    }
  }
  const obj9 = { skuId, layer, width: sum };
  cResult[0] = layer;
  cResult[1] = skuId;
  cResult[2] = sum;
  cResult[3] = obj9;
  tmp5 = obj9;
}) : (function ProfileFrameLayer(layer) {
  let containerHeight;
  let containerWidth;
  let width;
  layer = layer.layer;
  const overflowTop = layer.overflowTop;
  const overflowBottom = layer.overflowBottom;
  const overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight } = layer);
  const skuId = layer.skuId;
  const tmp = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  let c4 = sum;
  const tmp5 = overflowTop(overflowBottom[9])({ skuId, layer, width: sum });
  const assetUrl = tmp5.assetUrl;
  const imageHeight = tmp5.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowHorizontal.useMemo(() => {
    let str2;
    let tmp12;
    let tmp14;
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: metroImportDefault[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      const obj = { top: tmp12, bottom: tmp14 };
      const merged = Object.assign(rect);
      tmp12 = undefined;
      if ("top" === layer.anchor) {
        tmp12 = -overflowTop;
      }
      tmp14 = undefined;
      if ("bottom" === layer.anchor) {
        tmp14 = -overflowBottom;
      }
      return obj;
    } else if ("rail" === type) {
      const obj2 = { justifyContent: str2 };
      const merged1 = Object.assign(rect);
      str2 = "center";
      if ("center" !== layer.anchor) {
        let str3 = "flex-end";
        if ("top" === layer.anchor) {
          str3 = "flex-start";
        }
        str2 = str3;
      }
      return obj2;
    } else {
      const obj3 = { left: -tmp };
      const merged2 = Object.assign(rect);
      return obj3;
    }
  }, items);
  let tmp7 = true === layer.responsive;
  if (tmp7) {
    tmp7 = "rail" === layer.type;
  }
  if (tmp7) {
    tmp7 = null != containerHeight;
  }
  if (tmp7) {
    tmp7 = containerWidth / containerHeight >= imageHeight;
  }
  if (0 !== imageHeight) {
    if (null != assetUrl) {
      if (!tmp7) {
        let str2 = "border";
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              let tmp12 = globalThis;
              const _Math = Math;
              let tmp14 = c4;
              const items1 = [tmp.layer, memo];
              const _Array = Array;
              let obj3 = { length: Math.ceil(containerHeight / imageHeight) };
              return <c4 style={items1}>{Array.from(obj3, (arg0, arg1) => {
                source = { uri: assetUrl };
                return jsx(FastImageDefault, { source, resizeMode: "cover", width, height: imageHeight }, arg1);
              })}</c4>;
            }
          }
          return null;
        } else {
          const items2 = [tmp.layer, memo];
          size = { source: obj4, resizeMode: "cover", width: sum, height: imageHeight };
          return <c4 style={items2}>{null}</c4>;
        }
      }
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function LiveProfileFrame(frame) {
  let containerHeight;
  let overflowHorizontal;
  const tmp = frame;
  let obj = frame(containerHeight[8]);
  const cResult = obj.c(44);
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  containerHeight = frame.containerHeight;
  const profileThemeType = frame.profileThemeType;
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  const tmp4 = overflowHorizontal();
  if (cResult[0] === containerWidth) {
    if (cResult[1] === filterLayer) {
      if (cResult[2] === frame) {
        let tmp5;
        let arr;
        if (cResult[3] === profileThemeType) {
          tmp5 = cResult[4];
        }
        const tmpResult = tmp(containerHeight[9]);
        const settled = tmpResult.usePreloadLayerImages(tmp5).settled;
        if (cResult[5] === filterLayer) {
          if (cResult[6] === frame.layers) {
            if (cResult[7] === frameOrder) {
              if (cResult[8] === profileThemeType) {
                arr = cResult[9];
              }
              const useSharedValue = tmp(tmp2[5]).useSharedValue;
              tmp(containerHeight[5]);
              class T {
                constructor(arg0) {
                  result = null == frameOrder || tmp === frame.order;
                  if (result) {
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = closure_0(closure_2[9]);
                    tmp5 = profileThemeType;
                    tmp6 = filterLayer;
                    result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                  }
                  return result;
                }
              }
              set = tmp9;
              if (cResult[14] === tmp9) {
                let tmp10;
                let tmp11;
                if (cResult[15] === settled) {
                  tmp10 = cResult[16];
                  tmp11 = cResult[17];
                }
                const effect = profileThemeType.useEffect(tmp10, tmp11);
                if (0 !== arr.length) {
                  if (0 !== containerWidth) {
                    if (settled) {
                      if (cResult[18] === containerWidth) {
                        const overflowTop = tmp14.overflowTop;
                        const overflowBottom = tmp14.overflowBottom;
                        overflowHorizontal = tmp14.overflowHorizontal;
                        class T {
                          constructor(arg0) {
                            result = null == frameOrder || tmp === frame.order;
                            if (result) {
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              obj = closure_0(closure_2[9]);
                              tmp5 = profileThemeType;
                              tmp6 = filterLayer;
                              result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                            }
                            return result;
                          }
                        }
                        if (cResult[21] !== tmp9) {
                          const obj2 = { opacity: tmp9 };
                          cResult[21] = tmp9;
                          cResult[22] = obj2;
                          class T {
                            constructor(arg0) {
                              result = null == frameOrder || tmp === frame.order;
                              if (result) {
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[9]);
                                tmp5 = profileThemeType;
                                tmp6 = filterLayer;
                                result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                              }
                              return result;
                            }
                          }
                        }
                        if (cResult[23] === tmp4.container) {
                          let tmp18;
                          let tmp20;
                          if (cResult[24] === tmp17) {
                            tmp18 = cResult[25];
                          }
                          if (cResult[26] === containerHeight) {
                            if (cResult[27] === containerWidth) {
                              if (cResult[28] === frame.skuId) {
                                if (cResult[29] === overflowBottom) {
                                  if (cResult[30] === overflowHorizontal) {
                                    if (cResult[31] === overflowTop) {
                                      if (cResult[32] === arr) {
                                        tmp20 = cResult[33];
                                      }
                                      if (cResult[41] === tmp18) {
                                        let tmp23;
                                        if (cResult[42] === tmp20) {
                                          tmp23 = cResult[43];
                                        }
                                        return tmp23;
                                      }
                                      class S {
                                        constructor(arg0) {
                                          obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                                          return jsx(ProfileFrameLayer, obj, frame.id);
                                        }
                                      }
                                      const obj3 = { style: tmp18, children: null };
                                      class T {
                                        constructor(arg0) {
                                          result = null == frameOrder || tmp === frame.order;
                                          if (result) {
                                            tmp3 = closure_0;
                                            tmp4 = closure_2;
                                            obj = closure_0(closure_2[9]);
                                            tmp5 = profileThemeType;
                                            tmp6 = filterLayer;
                                            result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                                          }
                                          return result;
                                        }
                                      }
                                      const tmp25 = overflowTop(containerWidth(containerHeight[5]).View, obj3);
                                      class P {
                                        constructor() {
                                          num = 0;
                                          tmp = closure_7;
                                          set = closure_7.set;
                                          if (settled) {
                                            tmp2 = closure_0;
                                            tmp3 = closure_2;
                                            obj = closure_0(closure_2[11]);
                                            tmp4 = closure_9;
                                            num2 = 1;
                                            num = obj.withTiming(1, closure_9);
                                          }
                                          result = set(num);
                                          return;
                                        }
                                      }
                                      cResult[42] = tmp20;
                                      cResult[43] = tmp25;
                                      tmp23 = tmp25;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (cResult[34] === containerHeight) {
                            if (cResult[35] === containerWidth) {
                              if (cResult[36] === frame.skuId) {
                                if (cResult[37] === overflowBottom) {
                                  if (cResult[38] === overflowHorizontal) {
                                    let tmp21;
                                    if (cResult[39] === overflowTop) {
                                      tmp21 = cResult[40];
                                    }
                                    const mapped = arr.map(tmp21);
                                    class S {
                                      constructor(arg0) {
                                        obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                                        return jsx(ProfileFrameLayer, obj, frame.id);
                                      }
                                    }
                                    cResult[27] = containerWidth;
                                    class T {
                                      constructor(arg0) {
                                        result = null == frameOrder || tmp === frame.order;
                                        if (result) {
                                          tmp3 = closure_0;
                                          tmp4 = closure_2;
                                          obj = closure_0(closure_2[9]);
                                          tmp5 = profileThemeType;
                                          tmp6 = filterLayer;
                                          result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                                        }
                                        return result;
                                      }
                                    }
                                    cResult[28] = frame.skuId;
                                    class P {
                                      constructor() {
                                        num = 0;
                                        tmp = closure_7;
                                        set = closure_7.set;
                                        if (settled) {
                                          tmp2 = closure_0;
                                          tmp3 = closure_2;
                                          obj = closure_0(closure_2[11]);
                                          tmp4 = closure_9;
                                          num2 = 1;
                                          num = obj.withTiming(1, closure_9);
                                        }
                                        result = set(num);
                                        return;
                                      }
                                    }
                                    cResult[30] = overflowHorizontal;
                                    cResult[31] = overflowTop;
                                    cResult[32] = arr;
                                    cResult[33] = mapped;
                                    tmp20 = mapped;
                                  }
                                }
                              }
                            }
                          }
                          class S {
                            constructor(arg0) {
                              obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                              return jsx(ProfileFrameLayer, obj, frame.id);
                            }
                          }
                          cResult[34] = containerHeight;
                          class T {
                            constructor(arg0) {
                              result = null == frameOrder || tmp === frame.order;
                              if (result) {
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[9]);
                                tmp5 = profileThemeType;
                                tmp6 = filterLayer;
                                result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                              }
                              return result;
                            }
                          }
                          cResult[35] = containerWidth;
                          class P {
                            constructor() {
                              num = 0;
                              tmp = closure_7;
                              set = closure_7.set;
                              if (settled) {
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                obj = closure_0(closure_2[11]);
                                tmp4 = closure_9;
                                num2 = 1;
                                num = obj.withTiming(1, closure_9);
                              }
                              result = set(num);
                              return;
                            }
                          }
                          cResult[37] = overflowBottom;
                          cResult[38] = overflowHorizontal;
                          cResult[39] = overflowTop;
                          cResult[40] = S;
                          tmp21 = S;
                        }
                        class P {
                          constructor() {
                            num = 0;
                            tmp = closure_7;
                            set = closure_7.set;
                            if (settled) {
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = closure_0(closure_2[11]);
                              tmp4 = closure_9;
                              num2 = 1;
                              num = obj.withTiming(1, closure_9);
                            }
                            result = set(num);
                            return;
                          }
                        }
                        tmp19[0] = tmp4.container;
                        tmp19[1] = tmp17;
                        cResult[23] = tmp4.container;
                        cResult[24] = tmp17;
                        cResult[25] = tmp19;
                        tmp18 = tmp19;
                      }
                      cResult[18] = containerWidth;
                      const tmp16 = containerWidth(containerHeight[12])(frame, containerWidth);
                      class T {
                        constructor(arg0) {
                          result = null == frameOrder || tmp === frame.order;
                          if (result) {
                            tmp3 = closure_0;
                            tmp4 = closure_2;
                            obj = closure_0(closure_2[9]);
                            tmp5 = profileThemeType;
                            tmp6 = filterLayer;
                            result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                          }
                          return result;
                        }
                      }
                      cResult[20] = tmp16;
                      class P {
                        constructor() {
                          num = 0;
                          tmp = closure_7;
                          set = closure_7.set;
                          if (settled) {
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = closure_0(closure_2[11]);
                            tmp4 = closure_9;
                            num2 = 1;
                            num = obj.withTiming(1, closure_9);
                          }
                          result = set(num);
                          return;
                        }
                      }
                    }
                  }
                }
                return null;
              }
              class P {
                constructor() {
                  num = 0;
                  tmp = closure_7;
                  set = closure_7.set;
                  if (settled) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[11]);
                    tmp4 = closure_9;
                    num2 = 1;
                    num = obj.withTiming(1, closure_9);
                  }
                  result = set(num);
                  return;
                }
              }
              const items = [settled, tmp9];
              cResult[14] = tmp9;
              cResult[15] = settled;
              cResult[16] = P;
              cResult[17] = items;
              tmp11 = items;
              tmp10 = P;
            }
          }
        }
        if (cResult[10] === filterLayer) {
          if (cResult[11] === frameOrder) {
            let tmp6;
            if (cResult[12] === profileThemeType) {
              tmp6 = cResult[13];
            }
            const layers = frame.layers;
            const found = layers.filter(tmp6);
            class S {
              constructor(arg0) {
                obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                return jsx(ProfileFrameLayer, obj, frame.id);
              }
            }
            cResult[5] = filterLayer;
            class T {
              constructor(arg0) {
                result = null == frameOrder || tmp === frame.order;
                if (result) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[9]);
                  tmp5 = profileThemeType;
                  tmp6 = filterLayer;
                  result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
                }
                return result;
              }
            }
            cResult[7] = frameOrder;
            class P {
              constructor() {
                num = 0;
                tmp = closure_7;
                set = closure_7.set;
                if (settled) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[11]);
                  tmp4 = closure_9;
                  num2 = 1;
                  num = obj.withTiming(1, closure_9);
                }
                result = set(num);
                return;
              }
            }
            cResult[8] = profileThemeType;
            cResult[9] = found;
            arr = found;
          }
        }
        class T {
          constructor(arg0) {
            result = null == frameOrder || tmp === frame.order;
            if (result) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp5 = profileThemeType;
              tmp6 = filterLayer;
              result = obj.isProfileFrameLayerShown(frame, profileThemeType, filterLayer);
            }
            return result;
          }
        }
        let num = 10;
        cResult[10] = filterLayer;
        cResult[11] = frameOrder;
        cResult[12] = profileThemeType;
        cResult[13] = T;
        tmp6 = T;
      }
    }
  }
  const obj4 = { frame, containerWidth, profileThemeType, filterLayer };
  cResult[0] = containerWidth;
  cResult[1] = filterLayer;
  cResult[2] = frame;
  cResult[3] = profileThemeType;
  cResult[4] = obj4;
  tmp5 = obj4;
}) : (function LiveProfileFrame(frame) {
  let c10;
  let c8;
  let c9;
  let containerHeight;
  let overflowBottom;
  let overflowHorizontal;
  let overflowTop;
  let profileThemeType;
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  ({ containerHeight: dependencyMap, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  let sharedValue;
  jsx = undefined;
  c9 = undefined;
  c10 = undefined;
  const tmp = c10();
  let obj = frame(8324);
  const settled = obj.usePreloadLayerImages({ frame, containerWidth, profileThemeType, filterLayer }).settled;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = profileThemeType.useMemo(() => {
    const layers = frame.layers;
    return layers.filter((order) => {
      let result = null == frameOrder || tmp === order.order;
      if (result) {
        const obj = frame(dependencyMap[9]);
        result = obj.isProfileFrameLayerShown(order, profileThemeType, filterLayer);
      }
      return result;
    });
  }, items);
  let num = 0;
  const useSharedValue = frame(4810).useSharedValue;
  const obj2 = profileThemeType;
  const tmp3 = frame(4810);
  if (settled) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items1 = [settled, sharedValue];
  const effect = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (settled) {
      const obj = timing;
      num = obj.withTiming(1, obj);
    }
    const result = set(num);
  }, items1);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      if (settled) {
        ({ overflowTop: c8, overflowBottom: c9, overflowHorizontal: c10 } = containerWidth(8326)(frame, containerWidth));
        const items2 = [tmp.container, ];
        const obj4 = { opacity: sharedValue };
        items2[1] = obj4;
        containerWidth(8326)(frame, containerWidth);
        const View = containerWidth(4810).View;
        return <View style={items2}>{memo.map((layer) => <closure_11 key={arg0.id} skuId={frame.skuId} layer={arg0} overflowTop={c8} overflowBottom={c9} overflowHorizontal={c10} containerWidth={containerWidth} containerHeight={dependencyMap} />)}</View>;
      }
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileFrame(arg0) {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(override) {
      return override.override;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = closure_5(first);
  if (null != tmp4) {
    if (cResult[1] === tmp4) {
      let tmp12;
      if (cResult[2] === arg0) {
        tmp12 = cResult[3];
      }
      tmp5 = tmp12;
    }
    FramePreviewOverrideFrameDefault;
    const merged = Object.assign(arg0);
    const tmp19 = <tmp15 override={tmp4} />;
    cResult[1] = tmp4;
    cResult[2] = arg0;
    cResult[3] = tmp19;
    tmp12 = tmp19;
  } else if (cResult[4] !== arg0) {
    const merged1 = Object.assign(arg0);
    const tmp11 = <closure_12 />;
    cResult[4] = arg0;
    cResult[5] = tmp11;
    tmp5 = tmp11;
  } else {
    tmp5 = cResult[5];
  }
  return tmp5;
}) : (function ProfileFrame(arg0) {
  let tmp7;
  const tmp = closure_5((override) => override.override);
  if (null != tmp) {
    FramePreviewOverrideFrameDefault;
    const merged = Object.assign(arg0);
    tmp7 = <tmp11 override={tmp} />;
  } else {
    const merged1 = Object.assign(arg0);
    tmp7 = <closure_12 />;
  }
  return tmp7;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default tmp7;
