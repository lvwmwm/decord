// Module ID: 8497
// Function ID: 8498
// Name: useProfileFrameLayerAsset
// Dependencies: [32, 19, 17, 558, 568, 1971, 2]

// Module 8497 (useProfileFrameLayerAsset)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, PixelRatio: hasOwnProperty } = get_ActivityIndicator);
const map = new Map();
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(17);
  ({ skuId, layer, width } = arg0);
  if (cResult[0] === layer.id) {
    if (cResult[1] === skuId) {
      let tmp4 = cResult[2];
    }
    _require = tmp4;
    let _HermesInternal = globalThis;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function b(arg0) {
        return arg0 + 1;
      };
      cResult[3] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    const tmp10 = _slicedToArray(noop.useReducer(tmp8, 0), 2)[1];
    dependencyMap = tmp10;
    if (cResult[4] === tmp4) {
      if (cResult[5] === tmp10) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp4) {
        const items = [tmp4];
        cResult[7] = tmp4;
        cResult[8] = items;
        let tmp12 = items;
      } else {
        tmp12 = cResult[8];
      }
      const effect = obj3.useEffect(tmp11, tmp12);
      if (cResult[9] !== tmp4) {
        value = undefined;
        if (null != tmp4) {
          value = map.get(tmp4);
        }
        cResult[9] = tmp4;
        cResult[10] = value;
        let tmp14 = value;
      } else {
        tmp14 = cResult[10];
      }
      let num11 = 0;
      if (null != tmp14) {
        num11 = tmp14 * width;
      }
      let tmp19 = null;
      if (null != tmp4) {
        tmp19 = null;
        if (null != tmp14) {
          const _Math = Math;
          const rounded = Math.round(width * closure_5.get());
          if (cResult[11] === rounded) {
            if (cResult[12] === tmp14) {
              let tmp22 = cResult[13];
            }
            _HermesInternal = _HermesInternal.HermesInternal;
            const combined = tmp4 + "?width=" + rounded + "&height=" + tmp22;
          }
          const _Math2 = _HermesInternal.Math;
          const roundResult = _Math2.round(rounded * tmp14);
          cResult[11] = rounded;
          cResult[12] = tmp14;
          cResult[13] = roundResult;
          tmp22 = roundResult;
        }
      }
      if (cResult[14] === tmp19) {
        if (cResult[15] === num11) {
          let tmp28 = cResult[16];
        }
        return tmp28;
      }
      const obj2 = { assetUrl: tmp19, imageHeight: num11 };
      class C {
        constructor() {
          tmp = closure_0;
          hasItem = null == closure_0;
          if (!hasItem) {
            str = "";
            hasItem = "" === tmp;
          }
          if (!hasItem) {
            tmp3 = closure_6;
            hasItem = closure_6.has(tmp);
          }
          if (!hasItem) {
            tmp4 = Image;
            size = Image.getSize(tmp, (arg0, arg1) => {
              if (arg0 > 0) {
                const result = map.set(closure_1_0, arg1 / arg0);
                closure_1_1();
              }
            }, () => {

            });
          }
          return;
        }
      }
      cResult[15] = num11;
      cResult[16] = obj2;
      tmp28 = obj2;
    }
    class C {
      constructor() {
        tmp = closure_0;
        hasItem = null == closure_0;
        if (!hasItem) {
          str = "";
          hasItem = "" === tmp;
        }
        if (!hasItem) {
          tmp3 = closure_6;
          hasItem = closure_6.has(tmp);
        }
        if (!hasItem) {
          tmp4 = Image;
          size = Image.getSize(tmp, (arg0, arg1) => {
            if (arg0 > 0) {
              const result = map.set(closure_1_0, arg1 / arg0);
              closure_1_1();
            }
          }, () => {

          });
        }
        return;
      }
    }
    cResult[4] = tmp4;
    cResult[5] = tmp10;
    cResult[6] = C;
    tmp11 = C;
    obj3 = noop;
  }
  require("CollectiblesAssetUtils");
  const obj = require("c");
  const tmp6Result = tmp6({ skuId, assetFormat: require("CollectiblesAssetUtils").CollectiblesItemAssetFormat.STATIC, assetId: layer.id });
  cResult[0] = layer.id;
  cResult[1] = skuId;
  cResult[2] = tmp6Result;
  tmp4 = tmp6Result;
}) : ((width) => {
  width = width.width;
  let collectiblesItemAssetUrl;
  ({ skuId, layer } = width);
  const obj = collectiblesItemAssetUrl(1971);
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl({ skuId, assetFormat: collectiblesItemAssetUrl(1971).CollectiblesItemAssetFormat.STATIC, assetId: layer.id });
  dependencyMap = _slicedToArray(noop.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const items = [collectiblesItemAssetUrl];
  const effect = noop.useEffect(() => {
    let hasItem = null == collectiblesItemAssetUrl;
    if (!hasItem) {
      hasItem = "" === tmp;
    }
    if (!hasItem) {
      hasItem = map.has(tmp);
    }
    if (!hasItem) {
      const size = React4.getSize(tmp, (arg0, arg1) => {
        if (arg0 > 0) {
          const result = map.set(collectiblesItemAssetUrl, arg1 / arg0);
          closure_1_1();
        }
      }, () => {

      });
    }
  }, items);
  value = undefined;
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
      const _Math = Math;
      const rounded = Math.round(width * closure_5.get());
      const _Math2 = Math;
      const _HermesInternal = HermesInternal;
      assetUrl = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * value);
    }
  }
  return { assetUrl, imageHeight };
});
