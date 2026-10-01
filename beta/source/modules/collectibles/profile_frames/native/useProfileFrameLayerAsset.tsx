// Module ID: 7668
// Function ID: 7669
// Name: useProfileFrameLayerAsset
// Dependencies: [5, 32, 19, 17, 6629, 1968, 5899, 7669, 7670, 2]
// Exports: default, isProfileFrameLayerShown, usePreloadLayerImages

// Module 7668 (useProfileFrameLayerAsset)
import Constants from "Constants" /* 6629 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size_mod from "module_2" /* 2 */;

let c4, c5;

let metroImportDefault;
let metroRequire;
const f84876 = (arg0) => {
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
      const promise = new Promise(f84876);
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
        let closure_3;
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
            closure_3 = undefined;
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
                closure_3 = closure_131_14(closure_0, closure_2, closure_1);
                c4 = 2;
                c5 = 1;
                const obj7 = { value: obj2.preload(closure_3, 30000), done: false };
                obj2 = closure_131_1(closure_131_2[6]);
                return obj7;
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
            closure_131_11.add(closure_3);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp22) {
        c5 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
({ Image: metroRequire, PixelRatio: metroImportDefault } = react_native);
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const map = new Map();
const map1 = new Map();
const set = new Set();
const set1 = new Set();
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default function useProfileFrameLayerAsset(width) {
  let layer;
  let skuId;
  width = width.width;
  let collectiblesItemAssetUrl;
  ({ skuId, layer } = width);
  obj = collectiblesItemAssetUrl(1968);
  const obj2 = { skuId, assetFormat: collectiblesItemAssetUrl(1968).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj2);
  let closure_1 = _slicedToArray(react.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const items = [collectiblesItemAssetUrl];
  const effect = react.useEffect(function() {
    const hasItem = null == collectiblesItemAssetUrl || "" === tmp || map.has(tmp);
    if (!hasItem) {
      let resolved;
      let closure_0 = tmp;
      const value = map.get(tmp);
      if (null != value) {
        resolved = Promise.resolve(value);
      } else {
        resolved = map1.get(tmp);
        obj = map1;
        if (null == resolved) {
          const self = this;
          const self2 = this;
          const promise = new Promise(f84876);
          const cleanupPromise = promise.finally(() => set.delete(closure_0));
          let result = obj.set(tmp, cleanupPromise);
          resolved = cleanupPromise;
        }
      }
      resolved.then((result) => {
        if (null != result) {
          closure_1_1();
        }
      });
    }
  }, items);
  let value;
  if (null != collectiblesItemAssetUrl) {
    value = map.get(collectiblesItemAssetUrl);
  }
  let imageHeight = 0;
  if (null != value) {
    imageHeight = value * width;
  }
  let assetUrl = null;
  if (null != collectiblesItemAssetUrl) {
    assetUrl = null;
    if (null != value) {
      const tmp6 = globalThis;
      const _Math = Math;
      const rounded = Math.round(width * closure_7.get());
      const _Math2 = Math;
      const _HermesInternal = HermesInternal;
      assetUrl = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * value);
    }
  }
  return { assetUrl, imageHeight };
};
export const isProfileFrameLayerShown = function isProfileFrameLayerShown(anchor, arg1, fn) {
  let tmp2 = !(null != fn && !fn(anchor));
  const tmp = null != fn && !fn(anchor);
  if (tmp2) {
    let tmp5 = arg1 === UserProfileThemeTypes.PREVIEW;
    if (!tmp5) {
      tmp5 = "top" === anchor.anchor && "staple" === anchor.type;
      const tmp6 = "top" === anchor.anchor && "staple" === anchor.type;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
export const usePreloadLayerImages = function usePreloadLayerImages(frame) {
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
  obj = frame(filterLayer[7]);
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
      num = containerWidth + 2 * profileThemeType(tmp[8])(frame, containerWidth).overflowHorizontal;
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
          const allPromises = Promise.all(memo.map((item) => {
            function preloadLayer() {
              return closure_1_15(...arguments);
            }
            return preloadLayer(item, num);
          }));
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
};
