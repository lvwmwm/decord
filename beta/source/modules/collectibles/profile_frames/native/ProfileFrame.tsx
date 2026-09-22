// Module ID: 8495
// Function ID: 8496
// Name: ProfileFrame
// Dependencies: [19, 17, 8477, 8496, 7455, 21, 4758, 558, 568, 8497, 5802, 8498, 8499, 2]

// Module 8495 (ProfileFrame)
import c from "c" /* 568 */;
import FastImageDefault from "FastImage" /* 5802 */;
import FramePreviewOverrideFrameDefault from "FramePreviewOverrideFrame" /* 8499 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_5 = fn(8477).useFramePreviewOverrideStore;
const ProfileFrameConstants = fn(8496);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: metroRequire, PROFILE_FRAME_Z_INDEX: closure_7 } = ProfileFrameConstants);
const UserProfileThemeTypes = fn(7455).UserProfileThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { container: null, layer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.pointerEvents = "none";
obj2.container = obj3;
let obj4 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.alignItems = "center";
obj4.overflow = "hidden";
obj2.layer = obj4;
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(45);
  ({ skuId, layer, overflowHorizontal, containerWidth, containerHeight } = arg0);
  ({ overflowTop, overflowBottom } = arg0);
  const tmp3 = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  require = sum;
  if (cResult[0] === layer) {
    if (cResult[1] === skuId) {
      if (cResult[2] === sum) {
        let tmp5 = cResult[3];
      }
      const tmp7 = assetUrl(tmp[9])(tmp5);
      assetUrl = tmp7.assetUrl;
      imageHeight = tmp7.imageHeight;
      if (cResult[4] === -overflowHorizontal) {
        if (cResult[5] === tmp9) {
          if (cResult[6] === tmp11) {
            let tmp12 = cResult[7];
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
              }
            }
            const obj2 = {};
            const merged = Object.assign(tmp12);
            obj2.top = tmp22;
            obj2.bottom = tmp23;
            cResult[8] = tmp12;
            cResult[9] = tmp22;
            cResult[10] = tmp23;
            cResult[11] = obj2;
          } else {
            if ("rail" === type) {
              let str2 = "center";
              if ("center" !== layer.anchor) {
                let str3 = "flex-end";
                if ("top" === layer.anchor) {
                  str3 = "flex-start";
                }
                str2 = str3;
              }
              if (cResult[12] === tmp12) {
                if (cResult[13] === str2) {
                  let tmp18 = cResult[14];
                }
                let tmp14 = tmp18;
              }
              const obj3 = {};
              const merged1 = Object.assign(tmp12);
              obj3.justifyContent = str2;
              cResult[12] = tmp12;
              cResult[13] = str2;
              cResult[14] = obj3;
              tmp18 = obj3;
            } else {
              if (cResult[15] === tmp12) {
                if (cResult[16] === tmp13) {
                  tmp14 = cResult[17];
                }
              }
              const obj4 = {};
              const merged2 = Object.assign(tmp12);
              obj4.left = -overflowHorizontal;
              cResult[15] = tmp12;
              cResult[16] = -overflowHorizontal;
              cResult[17] = obj4;
              tmp14 = obj4;
            }
            let tmp29 = true === layer.responsive;
            if (tmp29) {
              tmp29 = "rail" === layer.type;
            }
            if (tmp29) {
              tmp29 = null != containerHeight;
            }
            if (tmp29) {
              tmp29 = containerWidth / containerHeight >= closure_6;
            }
            if (0 !== imageHeight) {
              if (null != assetUrl) {
                if (!tmp29) {
                  if ("border" === layer.type) {
                    if (null != containerHeight) {
                      if (0 !== containerHeight) {
                        let fromResult = globalThis;
                        const _Math = Math;
                        const rounded = Math.ceil(containerHeight / imageHeight);
                        if (cResult[18] === tmp14) {
                          if (cResult[19] === tmp3.layer) {
                            let tmp41 = cResult[20];
                          }
                          if (cResult[21] === assetUrl) {
                            if (cResult[22] === imageHeight) {
                              if (cResult[23] === rounded) {
                                if (cResult[24] === sum) {
                                  if (cResult[30] === tmp41) {
                                    if (cResult[31] === tmp42) {
                                      let tmp46 = cResult[32];
                                    }
                                    return tmp46;
                                  }
                                  const obj5 = { style: tmp41, children: cResult[25] };
                                  const tmp49 = <closure_4 style={tmp41}>{cResult[25]}</closure_4>;
                                  cResult[30] = tmp41;
                                  cResult[31] = cResult[25];
                                  cResult[32] = tmp49;
                                  tmp46 = tmp49;
                                }
                              }
                            }
                          }
                          if (cResult[26] === assetUrl) {
                            if (cResult[27] === imageHeight) {
                              if (cResult[28] === sum) {
                                let tmp43 = cResult[29];
                              }
                              const _Array = fromResult.Array;
                              const obj6 = { length: rounded };
                              fromResult = _Array.from(obj6, tmp43);
                              cResult[21] = assetUrl;
                              cResult[22] = imageHeight;
                              cResult[23] = rounded;
                              cResult[24] = sum;
                              cResult[25] = fromResult;
                            }
                          }
                          const fn = function q(arg0, arg1) {
                            const size = { source: { uri: assetUrl }, resizeMode: "cover", width: sum, height: imageHeight };
                            return jsx(FastImageDefault, { source: { uri: assetUrl }, resizeMode: "cover", width: sum, height: imageHeight }, arg1);
                          };
                          cResult[26] = assetUrl;
                          cResult[27] = imageHeight;
                          cResult[28] = sum;
                          cResult[29] = fn;
                          tmp43 = fn;
                        }
                        const items = [tmp3.layer, tmp14];
                        cResult[18] = tmp14;
                        cResult[19] = tmp3.layer;
                        cResult[20] = items;
                        tmp41 = items;
                      }
                    }
                    return null;
                  } else {
                    if (cResult[33] === tmp14) {
                      if (cResult[34] === tmp3.layer) {
                        let tmp32 = cResult[35];
                      }
                      if (cResult[36] !== assetUrl) {
                        const obj7 = { uri: assetUrl };
                        cResult[36] = assetUrl;
                        cResult[37] = obj7;
                        let tmp33 = obj7;
                      } else {
                        tmp33 = cResult[37];
                      }
                      if (cResult[38] === imageHeight) {
                        if (cResult[39] === tmp33) {
                          if (cResult[40] === sum) {
                            let tmp34 = cResult[41];
                          }
                          if (cResult[42] === tmp32) {
                            if (cResult[43] === tmp34) {
                              let tmp37 = cResult[44];
                            }
                            return tmp37;
                          }
                          const obj8 = { style: tmp32, children: tmp34 };
                          const tmp40 = <closure_4 style={tmp32}>{tmp34}</closure_4>;
                          cResult[42] = tmp32;
                          cResult[43] = tmp34;
                          cResult[44] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                      let size = { source: tmp33, resizeMode: "cover", width: sum, height: imageHeight };
                      const tmp36 = jsx(tmp6(tmp[10]), { source: tmp33, resizeMode: "cover", width: sum, height: imageHeight });
                      cResult[38] = imageHeight;
                      cResult[39] = tmp33;
                      cResult[40] = sum;
                      cResult[41] = tmp36;
                      tmp34 = tmp36;
                    }
                    const items1 = [tmp3.layer, tmp14];
                    cResult[33] = tmp14;
                    cResult[34] = tmp3.layer;
                    cResult[35] = items1;
                    tmp32 = items1;
                  }
                }
              }
            }
            return null;
          }
        }
      }
      const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: dependencyMap[layer.order] };
      cResult[4] = -overflowHorizontal;
      cResult[5] = -overflowHorizontal;
      cResult[6] = dependencyMap[layer.order];
      cResult[7] = rect;
      tmp12 = rect;
      tmp6 = assetUrl;
    }
  }
  const obj9 = { skuId, layer, width: sum };
  cResult[0] = layer;
  cResult[1] = skuId;
  cResult[2] = sum;
  cResult[3] = obj9;
  tmp5 = obj9;
}) : ((skuId) => {
  const layer = skuId.layer;
  const overflowTop = skuId.overflowTop;
  const overflowBottom = skuId.overflowBottom;
  const overflowHorizontal = skuId.overflowHorizontal;
  ({ containerWidth, containerHeight } = skuId);
  const tmp = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  c4 = sum;
  const tmp5 = overflowTop(overflowBottom[9])({ skuId: skuId.skuId, layer, width: sum });
  const assetUrl = tmp5.assetUrl;
  const imageHeight = tmp5.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowHorizontal.useMemo(() => {
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: dependencyMap[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      const obj = {};
      const merged = Object.assign(rect);
      let tmp12;
      if ("top" === tmp2.anchor) {
        tmp12 = -overflowTop;
      }
      obj.top = tmp12;
      let tmp14;
      if ("bottom" === tmp2.anchor) {
        tmp14 = -overflowBottom;
      }
      obj.bottom = tmp14;
      return obj;
    } else if ("rail" === type) {
      const obj2 = {};
      const merged1 = Object.assign(rect);
      let str2 = "center";
      if ("center" !== tmp2.anchor) {
        let str3 = "flex-end";
        if ("top" === tmp2.anchor) {
          str3 = "flex-start";
        }
        str2 = str3;
      }
      obj2.justifyContent = str2;
      return obj2;
    } else {
      const obj3 = {};
      const merged2 = Object.assign(rect);
      obj3.left = -tmp;
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
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              const _Math = Math;
              let obj2 = { style: null, children: null };
              const items1 = [tmp.layer, memo];
              obj2.style = items1;
              const _Array = Array;
              let obj3 = { length: Math.ceil(containerHeight / imageHeight) };
              obj2.children = Array.from(obj3, (arg0, arg1) => {
                const size = { source: { uri: assetUrl }, resizeMode: "cover", width, height: imageHeight };
                return jsx(FastImageDefault, { source: { uri: assetUrl }, resizeMode: "cover", width, height: imageHeight }, arg1);
              });
              return <c4 style={null}>{null}</c4>;
            }
          }
          return null;
        } else {
          let obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let size = { source: null, resizeMode: "cover", width: null, height: null };
          const obj4 = { uri: assetUrl };
          size.source = obj4;
          size.width = sum;
          size.height = imageHeight;
          obj.children = jsx(overflowTop(overflowBottom[10]), { source: null, resizeMode: "cover", width: null, height: null });
          return <c4 style={null}>{null}</c4>;
        }
      }
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  const cResult = skuId(containerHeight[8]).c(30);
  skuId = frame.frame;
  const containerWidth = frame.containerWidth;
  containerHeight = frame.containerHeight;
  const profileThemeType = frame.profileThemeType;
  const frameOrder = frame.frameOrder;
  let layers = frame.filterLayer;
  const obj = skuId(containerHeight[8]);
  const tmp = containerHeight;
  if (cResult[0] === layers) {
    if (cResult[1] === skuId.layers) {
      if (cResult[2] === frameOrder) {
        if (cResult[3] === profileThemeType) {
          if (0 !== cResult[4].length) {
            if (0 !== containerWidth) {
              if (cResult[9] === containerWidth) {
                const overflowTop = tmp7.overflowTop;
                const overflowBottom = tmp7.overflowBottom;
                const overflowHorizontal = tmp7.overflowHorizontal;
                if (cResult[12] === containerHeight) {
                  if (cResult[13] === containerWidth) {
                    if (cResult[14] === skuId.skuId) {
                      if (cResult[15] === overflowBottom) {
                        if (cResult[16] === overflowHorizontal) {
                          if (cResult[17] === overflowTop) {
                            if (cResult[18] === arr) {
                              if (cResult[27] === tmp3.container) {
                                if (cResult[28] === tmp11) {
                                  let tmp15 = cResult[29];
                                }
                                return tmp15;
                              }
                              const obj2 = { style: tmp10, children: cResult[19] };
                              const tmp18 = <frameOrder style={tmp10}>{cResult[19]}</frameOrder>;
                              class H {
                                constructor(arg0) {
                                  obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                                  return jsx(f46491, obj, frame.id);
                                }
                              }
                              cResult[28] = cResult[19];
                              cResult[29] = tmp18;
                              tmp15 = tmp18;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (cResult[20] === containerHeight) {
                  if (cResult[21] === containerWidth) {
                    if (cResult[22] === skuId.skuId) {
                      if (cResult[23] === overflowBottom) {
                        if (cResult[24] === overflowHorizontal) {
                          if (cResult[25] === overflowTop) {
                            let tmp12 = cResult[26];
                          }
                          const mapped = arr.map(tmp12);
                          cResult[12] = containerHeight;
                          cResult[13] = containerWidth;
                          skuId = skuId.skuId;
                          cResult[14] = skuId;
                          class H {
                            constructor(arg0) {
                              obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                              return jsx(f46491, obj, frame.id);
                            }
                          }
                          cResult[15] = overflowBottom;
                          cResult[16] = overflowHorizontal;
                          cResult[17] = overflowTop;
                          cResult[18] = arr;
                          cResult[19] = mapped;
                        }
                      }
                    }
                  }
                }
                class H {
                  constructor(arg0) {
                    obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
                    return jsx(f46491, obj, frame.id);
                  }
                }
                cResult[20] = containerHeight;
                cResult[21] = containerWidth;
                cResult[22] = skuId.skuId;
                cResult[23] = overflowBottom;
                cResult[24] = overflowHorizontal;
                cResult[25] = overflowTop;
                cResult[26] = H;
                tmp12 = H;
              }
              cResult[9] = containerWidth;
              cResult[10] = skuId;
              cResult[11] = containerWidth(tmp[11])(skuId, containerWidth);
              let tmp9 = containerWidth(tmp[11])(skuId, containerWidth);
            }
          }
          return null;
        }
      }
    }
  }
  if (cResult[5] === layers) {
    if (cResult[6] === frameOrder) {
      if (cResult[7] === profileThemeType) {
        let tmp4 = cResult[8];
      }
      const layers1 = skuId.layers;
      const found = layers1.filter(tmp4);
      cResult[0] = layers;
      layers = skuId.layers;
      cResult[1] = layers;
      class H {
        constructor(arg0) {
          obj = { skuId: frame.skuId, layer: frame, overflowTop, overflowBottom, overflowHorizontal, containerWidth, containerHeight };
          return jsx(f46491, obj, frame.id);
        }
      }
      cResult[3] = profileThemeType;
      cResult[4] = found;
    }
  }
  const fn = function n(order) {
    let tmp2 = null == frameOrder || tmp === order.order;
    if (tmp2) {
      let tmp4 = null != layers;
      if (tmp4) {
        tmp4 = !tmp3(order);
      }
      let tmp5 = !tmp4;
      if (!tmp4) {
        let tmp8 = profileThemeType === UserProfileThemeTypes.PREVIEW;
        if (!tmp8) {
          let tmp9 = "top" === order.anchor;
          if (tmp9) {
            tmp9 = "staple" === order.type;
          }
          tmp8 = tmp9;
        }
        tmp5 = tmp8;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  };
  cResult[5] = layers;
  cResult[6] = frameOrder;
  cResult[7] = profileThemeType;
  cResult[8] = fn;
  tmp4 = fn;
}) : ((frame) => {
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  ({ containerHeight: dependencyMap, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = profileThemeType.useMemo(() => {
    const layers = frame.layers;
    return layers.filter((order) => {
      let tmp2 = null == frameOrder || tmp === order.order;
      if (tmp2) {
        let tmp4 = null != filterLayer;
        if (tmp4) {
          tmp4 = !tmp3(order);
        }
        let tmp5 = !tmp4;
        if (!tmp4) {
          let tmp8 = profileThemeType === constants.PREVIEW;
          if (!tmp8) {
            let tmp9 = "top" === order.anchor;
            if (tmp9) {
              tmp9 = "staple" === order.type;
            }
            tmp8 = tmp9;
          }
          tmp5 = tmp8;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    });
  }, items);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      ({ overflowTop: c6, overflowBottom: c7, overflowHorizontal: c8 } = containerWidth(8498)(frame, containerWidth));
      const obj = { style: tmp.container, children: memo.map((layer) => <closure_11 key={arg0.id} skuId={frame.skuId} layer={arg0} overflowTop={overflowTop} overflowBottom={overflowBottom} overflowHorizontal={overflowHorizontal} containerWidth={containerWidth} containerHeight={containerHeight} />) };
      return <frameOrder style={tmp.container}>{memo.map((layer) => <closure_11 key={arg0.id} skuId={frame.skuId} layer={arg0} overflowTop={overflowTop} overflowBottom={overflowBottom} overflowHorizontal={overflowHorizontal} containerWidth={containerWidth} containerHeight={containerHeight} />)}</frameOrder>;
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = dependencyMap;
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(override) {
      return override.override;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = closure_5(first);
  if (null != tmp4) {
    if (cResult[1] === tmp4) {
    }
    const obj2 = { override: tmp4 };
    const merged = Object.assign(arg0);
    tmp = jsx(FramePreviewOverrideFrameDefault, { override: tmp4 });
    cResult[1] = tmp4;
    cResult[2] = arg0;
    cResult[3] = tmp;
  } else {
    if (cResult[4] !== arg0) {
      const obj3 = {};
      const merged1 = Object.assign(arg0);
      const tmp11 = <closure_12 />;
      cResult[4] = arg0;
      cResult[5] = tmp11;
      let tmp5 = tmp11;
    } else {
      tmp5 = cResult[5];
    }
    return tmp5;
  }
}) : ((arg0) => {
  const tmp = closure_5((override) => override.override);
  if (null != tmp) {
    const obj2 = { override: tmp };
    const merged = Object.assign(arg0);
    let tmp7 = jsx(FramePreviewOverrideFrameDefault, { override: tmp });
  } else {
    const obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = <closure_12 />;
  }
  return tmp7;
});
