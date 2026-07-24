// Module ID: 8302
// Function ID: 65375
// Name: map
// Dependencies: [57, 31, 27, 1830, 2]
// Exports: default

// Module 8302 (map)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_4, PixelRatio: closure_5 } = get_ActivityIndicator);
const map = new Map();
let result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default function useProfileFrameLayerAsset(width) {
  let layer;
  let skuId;
  width = width.width;
  ({ skuId, layer } = width);
  let obj = collectiblesItemAssetUrl(1830);
  obj = { skuId, assetFormat: collectiblesItemAssetUrl(1830).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj);
  const dependencyMap = callback(React.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const items = [collectiblesItemAssetUrl];
  const effect = React.useEffect(() => {
    let hasItem = null == collectiblesItemAssetUrl;
    if (!hasItem) {
      hasItem = "" === collectiblesItemAssetUrl;
    }
    if (!hasItem) {
      hasItem = outer1_6.has(collectiblesItemAssetUrl);
    }
    if (!hasItem) {
      const size = outer1_4.getSize(collectiblesItemAssetUrl, (arg0, arg1) => {
        if (arg0 > 0) {
          const result = outer2_6.set(outer1_0, arg1 / arg0);
          outer1_1();
        }
      }, () => {

      });
    }
  }, items);
  let value;
  if (null != collectiblesItemAssetUrl) {
    value = map.get(collectiblesItemAssetUrl);
  }
  let num = 0;
  if (null != value) {
    num = value * width;
  }
  let combined = null;
  if (null != collectiblesItemAssetUrl) {
    combined = null;
    if (null != value) {
      const _Math = Math;
      const rounded = Math.round(width * closure_5.get());
      const _Math2 = Math;
      const _HermesInternal = HermesInternal;
      combined = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * value);
    }
  }
  obj = { assetUrl: combined, imageHeight: num };
  return obj;
};
