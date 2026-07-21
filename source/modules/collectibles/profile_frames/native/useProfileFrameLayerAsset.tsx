// Module ID: 8251
// Function ID: 65098
// Name: map
// Dependencies: []
// Exports: default

// Module 8251 (map)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ Image: closure_4, PixelRatio: closure_5 } = arg1(dependencyMap[2]));
const map = new Map();
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default function useProfileFrameLayerAsset(width) {
  let layer;
  let skuId;
  width = width.width;
  ({ skuId, layer } = width);
  let obj = arg1(closure_1[3]);
  obj = { skuId, assetFormat: arg1(closure_1[3]).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  const collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj);
  const arg1 = collectiblesItemAssetUrl;
  closure_1 = callback(React.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const items = [collectiblesItemAssetUrl];
  const effect = React.useEffect(() => {
    let hasItem = null == collectiblesItemAssetUrl;
    if (!hasItem) {
      hasItem = "" === collectiblesItemAssetUrl;
    }
    if (!hasItem) {
      hasItem = set.has(collectiblesItemAssetUrl);
    }
    if (!hasItem) {
      const size = size.getSize(collectiblesItemAssetUrl, (arg0, arg1) => {
        if (arg0 > 0) {
          const result = closure_6.set(closure_0, arg1 / arg0);
          callback();
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
