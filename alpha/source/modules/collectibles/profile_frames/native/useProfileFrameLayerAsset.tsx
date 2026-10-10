// Module ID: 8348
// Function ID: 8349
// Name: useProfileFrameLayerAsset
// Dependencies: [5, 32, 19, 17, 6904, 1987, 558, 576, 1899, 8349, 8350, 2]
// Exports: isProfileFrameLayerShown

// Module 8348 (useProfileFrameLayerAsset)
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1987 */;
import Constants from "Constants" /* 6904 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _Promise, c4, c5, importDefault, nextPromise, num2;

let metroImportDefault;
let metroRequire;
const f98089 = (arg0) => {
  closure_0 = arg0;
  size = size.getSize(closure_0, (arg0, arg1) => {
    if (arg0 > 0) {
      const result = closure_3_9.set(closure_0, arg1 / arg0);
      set2.delete(closure_0);
      closure_0(arg1 / arg0);
    } else {
      set2.add(closure_0);
      closure_0(null);
    }
  }, () => {
    set2.add(closure_0);
    closure_0(null);
  });
};
function measureProfileFrameLayer(arg0) {
  let closure_0 = arg0;
  const value = map.get(arg0);
  if (null != value) {
    return Promise.resolve(value);
  } else {
    let value2 = map1.get(arg0);
    obj = map1;
    if (null == value2) {
      const self = this;
      const self2 = this;
      const promise = new Promise(f98089);
      const cleanupPromise = promise.finally(() => set.delete(closure_0));
      const result = obj.set(arg0, cleanupPromise);
      value2 = cleanupPromise;
    }
    return value2;
  }
}
function getProfileFrameLayerAssetUrl(arg0, arg1, arg2) {
  const rounded = Math.round(arg2 * metroImportDefault.get());
  return "" + arg0 + "?width=" + rounded + "&height=" + Math.round(rounded * arg1);
}
function preloadLayer() {
  return obj(...arguments);
}
let obj = function _preloadLayer() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        let closure_2;
        let uri;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = undefined;
            uri = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: measureProfileFrameLayer(closure_0), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = value;
              if (null != closure_2) {
                uri = closure_131_14(closure_0, closure_2, closure_1);
                const obj7 = { uri, timeoutMs: 30000 };
                c4 = 2;
                c5 = 1;
                const obj8 = { value: obj2.preload(obj7), done: false };
                obj2 = closure_131_1(closure_131_2[8]);
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_131_11.add(uri);
          }
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp22) {
        c5 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
let react = react_mod;
({ Image: metroRequire, PixelRatio: metroImportDefault } = react_native);
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const map = new Map();
const map1 = new Map();
const set = new Set();
const set1 = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileFrameLayerAsset(arg0) {
  let closure_1;
  let collectiblesItemAssetUrl;
  let layer;
  let ratio;
  let skuId;
  let tmp4;
  let tmp5;
  let width;
  obj = collectiblesItemAssetUrl(ratio[7]);
  const cResult = obj.c(14);
  ({ width, skuId, layer } = arg0);
  const obj2 = collectiblesItemAssetUrl(ratio[5]);
  const obj3 = { skuId, assetFormat: collectiblesItemAssetUrl(ratio[5]).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  collectiblesItemAssetUrl = obj2.getCollectiblesItemAssetUrl(obj3);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  [tmp4, tmp5] = tmp3;
  importDefault = tmp5;
  let value;
  const obj4 = react;
  if (null != collectiblesItemAssetUrl) {
    value = map.get(collectiblesItemAssetUrl);
  }
  ratio = value;
  if (null != tmp4) {
    ratio = value;
    if (tmp4.baseUrl === collectiblesItemAssetUrl) {
      ratio = tmp4.ratio;
    }
  }
  if (cResult[0] === collectiblesItemAssetUrl) {
    if (cResult[1] === ratio) {
      let tmp8;
      if (cResult[2] === tmp5) {
        tmp8 = cResult[3];
      }
      if (cResult[4] === collectiblesItemAssetUrl) {
        let tmp9;
        if (cResult[5] === ratio) {
          tmp9 = cResult[6];
        }
        const effect = obj4.useEffect(tmp8, tmp9);
        let num4 = 0;
        if (null != ratio) {
          num4 = ratio * width;
        }
        if (cResult[7] === collectiblesItemAssetUrl) {
          if (cResult[8] === ratio) {
            let tmp11;
            if (cResult[9] === width) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === tmp11) {
              let tmp18;
              if (cResult[12] === num4) {
                tmp18 = cResult[13];
              }
              return tmp18;
            }
            const obj5 = { assetUrl: tmp11, imageHeight: num4 };
            cResult[11] = tmp11;
            cResult[12] = num4;
            cResult[13] = obj5;
            tmp18 = obj5;
          }
        }
        let combined = null;
        if (null != collectiblesItemAssetUrl) {
          combined = null;
          if (null != ratio) {
            const _Math = Math;
            const rounded = Math.round(width * closure_7.get());
            const _Math2 = Math;
            const _HermesInternal = HermesInternal;
            combined = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * ratio);
          }
        }
        cResult[7] = collectiblesItemAssetUrl;
        cResult[8] = ratio;
        cResult[9] = width;
        cResult[10] = combined;
        tmp11 = combined;
      }
      const items = [collectiblesItemAssetUrl, ratio];
      cResult[4] = collectiblesItemAssetUrl;
      cResult[5] = ratio;
      cResult[6] = items;
      tmp9 = items;
    }
  }
  const fn = function n() {
    let tmp = c0;
    if (null != c0) {
      if ("" !== tmp) {
        if (null == ratio) {
          let resolved;
          c0 = false;
          let closure_0 = tmp;
          const value = map.get(tmp);
          if (null != value) {
            resolved = Promise.resolve(value);
          } else {
            obj = map1;
            resolved = map1.get(tmp);
            if (null == resolved) {
              const self = this;
              const self2 = this;
              const promise = new Promise(f98089);
              const cleanupPromise = promise.finally(() => set.delete(closure_0));
              const result = obj.set(tmp, cleanupPromise);
              resolved = cleanupPromise;
            }
          }
          resolved.then((ratio) => {
            const tmp = c0 || null == ratio;
            if (!tmp) {
              obj = { baseUrl: collectiblesItemAssetUrl, ratio };
              importDefault(obj);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
  };
  cResult[0] = collectiblesItemAssetUrl;
  cResult[1] = ratio;
  cResult[2] = tmp5;
  cResult[3] = fn;
  tmp8 = fn;
}) : (function useProfileFrameLayerAsset(width) {
  let c1;
  let layer;
  let skuId;
  let tmp3;
  width = width.width;
  let collectiblesItemAssetUrl;
  c1 = undefined;
  let ratio;
  ({ skuId, layer } = width);
  obj = collectiblesItemAssetUrl(ratio[5]);
  const obj2 = { skuId, assetFormat: collectiblesItemAssetUrl(ratio[5]).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj2);
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [tmp3, c1] = tmp2;
  let value;
  const obj3 = react;
  if (null != collectiblesItemAssetUrl) {
    value = map.get(collectiblesItemAssetUrl);
  }
  ratio = value;
  if (null != tmp3) {
    ratio = value;
    if (tmp3.baseUrl === collectiblesItemAssetUrl) {
      ratio = tmp3.ratio;
    }
  }
  const items = [collectiblesItemAssetUrl, ratio];
  const effect = obj3.useEffect(function() {
    let tmp = c0;
    if (null != c0) {
      if ("" !== tmp) {
        if (null == ratio) {
          let resolved;
          c0 = false;
          let closure_0 = tmp;
          const value = map.get(tmp);
          if (null != value) {
            resolved = Promise.resolve(value);
          } else {
            obj = map1;
            resolved = map1.get(tmp);
            if (null == resolved) {
              const self = this;
              const self2 = this;
              const promise = new Promise(f98089);
              const cleanupPromise = promise.finally(() => set.delete(closure_0));
              let result = obj.set(tmp, cleanupPromise);
              resolved = cleanupPromise;
            }
          }
          resolved.then((ratio) => {
            const tmp = c0 || null == ratio;
            if (!tmp) {
              obj = { baseUrl: collectiblesItemAssetUrl, ratio };
              c1(obj);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
  }, items);
  let imageHeight = 0;
  if (null != ratio) {
    imageHeight = ratio * width;
  }
  let assetUrl = null;
  if (null != collectiblesItemAssetUrl) {
    assetUrl = null;
    if (null != ratio) {
      const _Math = Math;
      const rounded = Math.round(width * closure_7.get());
      const _Math2 = Math;
      const _HermesInternal = HermesInternal;
      assetUrl = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * ratio);
    }
  }
  return { assetUrl, imageHeight };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreloadLayerImages(frame) {
  let closure_5;
  let containerWidth;
  let filterLayer;
  let first;
  let profileThemeType;
  let tmp = filterLayer;
  obj = frame(filterLayer[7]);
  const cResult = obj.c(27);
  frame = frame.frame;
  ({ containerWidth, profileThemeType } = frame);
  filterLayer = frame.filterLayer;
  let obj2 = frame(filterLayer[9]);
  const isProfileFrameLayerPreloadEnabled = obj2.useIsProfileFrameLayerPreloadEnabled("usePreloadLayerImages");
  if (null != frame) {
    let tmp5;
    if (cResult[1] === filterLayer) {
      if (cResult[2] === frame.layers) {
        if (cResult[3] === frame.skuId) {
          if (cResult[4] === profileThemeType) {
            tmp5 = cResult[5];
          }
          first = tmp5;
        }
      }
    }
    if (cResult[6] === filterLayer) {
      let tmp6;
      let tmp7;
      let tmp9;
      if (cResult[7] === profileThemeType) {
        tmp6 = cResult[8];
      }
      if (cResult[9] !== frame.skuId) {
        const fn2 = function h(assetId) {
          const skuId = frame.skuId;
          obj = CollectiblesAssetUtils;
          const obj2 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC, assetId: assetId.id };
          return obj.getCollectiblesItemAssetUrl(obj2);
        };
        cResult[9] = frame.skuId;
        cResult[10] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function p(arg0) {
          return null != arg0 && "" !== arg0;
        };
        cResult[11] = fn3;
        tmp9 = fn3;
      } else {
        tmp9 = cResult[11];
      }
      const layers = frame.layers;
      const found = layers.filter(tmp6);
      const mapped = found.map(tmp7);
      const found1 = mapped.filter(tmp9);
      cResult[1] = filterLayer;
      cResult[2] = frame.layers;
      cResult[3] = frame.skuId;
      cResult[4] = profileThemeType;
      cResult[5] = found1;
      tmp5 = found1;
    }
    const fn = function v(anchor) {
      let tmp3 = null != filterLayer;
      const tmp = profileThemeType;
      if (tmp3) {
        tmp3 = !tmp2(anchor);
      }
      let tmp4 = !tmp3;
      if (tmp4) {
        let tmp6 = tmp === UserProfileThemeTypes.PREVIEW;
        if (!tmp6) {
          tmp6 = "top" === anchor.anchor && "staple" === anchor.type;
          const tmp7 = "top" === anchor.anchor && "staple" === anchor.type;
        }
        tmp4 = tmp6;
      }
      return tmp4;
    };
    cResult[6] = filterLayer;
    cResult[7] = profileThemeType;
    cResult[8] = fn;
    tmp6 = fn;
  } else {
    let tmp4 = globalThis;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
  }
  if (cResult[12] === containerWidth) {
    let tmp11;
    if (cResult[13] === frame) {
      tmp11 = cResult[14];
    }
    react = tmp11;
    let skuId;
    if (frame != null) {
      skuId = frame.skuId;
    }
    let _HermesInternal = HermesInternal;
    const combined = "" + skuId + ":" + tmp11;
    let closure_7 = first(react.useState(null), 2)[1];
    first(react.useState(null), 2);
    const obj4 = react;
    if (cResult[15] === first) {
      let tmp19;
      if (cResult[16] === tmp11) {
        tmp19 = cResult[17];
      }
      let closure_8 = tmp19;
      if (cResult[18] === first) {
        if (cResult[19] === isProfileFrameLayerPreloadEnabled) {
          if (cResult[20] === tmp19) {
            if (cResult[21] === combined) {
              let tmp21;
              let tmp22;
              let tmp25;
              if (cResult[22] === tmp11) {
                tmp21 = cResult[23];
                tmp22 = cResult[24];
              }
              const effect = obj4.useEffect(tmp21, tmp22);
              let tmp24 = !isProfileFrameLayerPreloadEnabled;
              class E {
                constructor() {
                  tmp = closure_3;
                  if (tmp) {
                    tmp2 = closure_5;
                    num = 0;
                    if (closure_5 > 0) {
                      tmp3 = closure_8;
                      if (!tmp3) {
                        flag = false;
                        c0 = false;
                        markSettled = function markSettled() {
                          const tmp = c0;
                          if (!tmp) {
                            closure_7(combined);
                          }
                        };
                        tmp4 = globalThis;
                        _setTimeout = setTimeout;
                        num2 = 3000;
                        closure_1 = setTimeout(markSettled, 3000);
                        _Promise = Promise;
                        tmp5 = closure_4;
                        allPromises = Promise.all(closure_4.map((item) => preloadLayer(item, closure_1_5)));
                        nextPromise = allPromises.then(markSettled);
                        return () => {
                          c0 = true;
                          clearTimeout(closure_1);
                        };
                      }
                    }
                  }
                  return;
                }
              }
              if (!tmp24) {
                tmp24 = tmp18 === combined;
              }
              if (cResult[25] !== tmp24) {
                const obj3 = { settled: tmp24 };
                class E {
                  constructor() {
                    tmp = closure_3;
                    if (tmp) {
                      tmp2 = closure_5;
                      num = 0;
                      if (closure_5 > 0) {
                        tmp3 = closure_8;
                        if (!tmp3) {
                          flag = false;
                          c0 = false;
                          markSettled = function markSettled() {
                            const tmp = c0;
                            if (!tmp) {
                              closure_7(combined);
                            }
                          };
                          tmp4 = globalThis;
                          _setTimeout = setTimeout;
                          num2 = 3000;
                          closure_1 = setTimeout(markSettled, 3000);
                          _Promise = Promise;
                          tmp5 = closure_4;
                          allPromises = Promise.all(closure_4.map((item) => preloadLayer(item, closure_1_5)));
                          nextPromise = allPromises.then(markSettled);
                          return () => {
                            c0 = true;
                            clearTimeout(closure_1);
                          };
                        }
                      }
                    }
                    return;
                  }
                }
                cResult[26] = obj3;
                tmp25 = obj3;
              } else {
                tmp25 = cResult[26];
              }
              return tmp25;
            }
          }
        }
      }
      class E {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = closure_5;
            num = 0;
            if (closure_5 > 0) {
              tmp3 = closure_8;
              if (!tmp3) {
                flag = false;
                c0 = false;
                markSettled = function markSettled() {
                  const tmp = c0;
                  if (!tmp) {
                    closure_7(combined);
                  }
                };
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                num2 = 3000;
                closure_1 = setTimeout(markSettled, 3000);
                _Promise = Promise;
                tmp5 = closure_4;
                allPromises = Promise.all(closure_4.map((item) => preloadLayer(item, closure_1_5)));
                nextPromise = allPromises.then(markSettled);
                return () => {
                  c0 = true;
                  clearTimeout(closure_1);
                };
              }
            }
          }
          return;
        }
      }
      const items1 = [isProfileFrameLayerPreloadEnabled, first, tmp11, combined, tmp19];
      cResult[18] = first;
      cResult[19] = isProfileFrameLayerPreloadEnabled;
      cResult[20] = tmp19;
      cResult[21] = combined;
      cResult[22] = tmp11;
      cResult[23] = E;
      cResult[24] = items1;
      tmp22 = items1;
      tmp21 = E;
    }
    const tmp20 = tmp11 > 0 && first.every((item) => {
      let flag = true;
      const tmp = closure_5;
      if (!set1.has(item)) {
        const value = map.get(item);
        let hasItem = null != value;
        if (hasItem) {
          const _Math = Math;
          const has = set.has;
          const rounded = Math.round(tmp * metroImportDefault.get());
          const _Math2 = Math;
          const _HermesInternal = HermesInternal;
          hasItem = has("" + item + "?width=" + rounded + "&height=" + Math.round(rounded * value));
        }
        flag = hasItem;
      }
      return flag;
    });
    cResult[15] = first;
    cResult[16] = tmp11;
    cResult[17] = tmp20;
    tmp19 = tmp20;
  }
  let num13 = 0;
  if (null != frame) {
    num13 = 0;
    if (containerWidth > 0) {
      num13 = containerWidth + 2 * profileThemeType(tmp[10])(frame, containerWidth).overflowHorizontal;
    }
  }
  cResult[12] = containerWidth;
  cResult[13] = frame;
  cResult[14] = num13;
  tmp11 = num13;
}) : (function usePreloadLayerImages(frame) {
  let containerWidth;
  let profileThemeType;
  frame = frame.frame;
  ({ containerWidth, profileThemeType } = frame);
  const filterLayer = frame.filterLayer;
  let num;
  let combined;
  let closure_7;
  let c8;
  let tmp = filterLayer;
  obj = frame(filterLayer[9]);
  const isProfileFrameLayerPreloadEnabled = obj.useIsProfileFrameLayerPreloadEnabled("usePreloadLayerImages");
  let obj2 = num;
  let items = [frame, profileThemeType, filterLayer];
  const memo = num.useMemo(() => {
    let items;
    let tmp;
    if (null == frame) {
      items = [];
    } else {
      const layers = tmp.layers;
      const found = layers.filter((anchor) => {
        let tmp3 = null != filterLayer;
        const tmp = profileThemeType;
        if (tmp3) {
          tmp3 = !tmp2(anchor);
        }
        let tmp4 = !tmp3;
        if (tmp4) {
          let tmp6 = tmp === constants.PREVIEW;
          if (!tmp6) {
            tmp6 = "top" === anchor.anchor && "staple" === anchor.type;
            const tmp7 = "top" === anchor.anchor && "staple" === anchor.type;
          }
          tmp4 = tmp6;
        }
        return tmp4;
      });
      const mapped = found.map((assetId) => {
        skuId = skuId.skuId;
        obj = frame(filterLayer[5]);
        const obj2 = { skuId, assetFormat: frame(filterLayer[5]).CollectiblesItemAssetFormat.STATIC, assetId: assetId.id };
        return obj.getCollectiblesItemAssetUrl(obj2);
      });
      items = mapped.filter((item) => null != item && "" !== item);
    }
    return items;
  }, items);
  num = 0;
  if (null != frame) {
    num = 0;
    if (containerWidth > 0) {
      let tmp3 = profileThemeType;
      num = containerWidth + 2 * profileThemeType(tmp[10])(frame, containerWidth).overflowHorizontal;
    }
  }
  let skuId;
  if (frame != null) {
    skuId = frame.skuId;
  }
  combined = "" + skuId + ":" + num;
  let tmp6 = memo(obj2.useState(null), 2);
  closure_7 = tmp6[1];
  let everyResult = num > 0;
  const first = tmp6[0];
  if (everyResult) {
    everyResult = memo.every((item) => {
      let flag = true;
      const tmp = num;
      if (!set1.has(item)) {
        const value = map.get(item);
        let hasItem = null != value;
        if (hasItem) {
          const _Math = Math;
          const has = set.has;
          const rounded = Math.round(tmp * metroImportDefault.get());
          const _Math2 = Math;
          const _HermesInternal = HermesInternal;
          hasItem = has("" + item + "?width=" + rounded + "&height=" + Math.round(rounded * value));
        }
        flag = hasItem;
      }
      return flag;
    });
  }
  c8 = everyResult;
  const items1 = [isProfileFrameLayerPreloadEnabled, memo, num, combined, everyResult];
  const effect = obj2.useEffect(() => {
    let closure_1;
    let tmp = isProfileFrameLayerPreloadEnabled;
    if (tmp) {
      num = 0;
      if (num > 0) {
        const tmp3 = c8;
        if (!tmp3) {
          function markSettled() {
            const tmp = c0;
            if (!tmp) {
              closure_7(combined);
            }
          }
          let c0 = false;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(markSettled, 3000);
          const allPromises = Promise.all(memo.map((item) => preloadLayer(item, num)));
          allPromises.then(markSettled);
          return () => {
            c0 = true;
            clearTimeout(closure_1);
          };
        }
      }
    }
  }, items1);
  let settled = !isProfileFrameLayerPreloadEnabled;
  if (isProfileFrameLayerPreloadEnabled) {
    settled = everyResult;
  }
  if (!settled) {
    settled = first === combined;
  }
  return { settled };
});
function isProfileFrameLayerShown(anchor, profileThemeType, filterLayer) {
  let tmp2 = !(null != filterLayer && !filterLayer(anchor));
  const tmp = null != filterLayer && !filterLayer(anchor);
  if (tmp2) {
    let tmp5 = profileThemeType === UserProfileThemeTypes.PREVIEW;
    if (!tmp5) {
      tmp5 = "top" === anchor.anchor && "staple" === anchor.type;
      const tmp6 = "top" === anchor.anchor && "staple" === anchor.type;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default tmp7;
export { isProfileFrameLayerShown };
export const usePreloadLayerImages = tmp8;
