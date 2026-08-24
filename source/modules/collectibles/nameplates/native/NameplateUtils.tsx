// Module ID: 9259
// Function ID: 9260
// Name: getNameplateAssets
// Dependencies: [1901, 2]
// Exports: getNameplateAssets

// Module 9259 (getNameplateAssets)
import set from "set" /* 2 */;
import parseSkuIdFromServerData from "parseSkuIdFromServerData" /* 1901 */;

const result = set.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { staticImageUrl: null, animatedImageUrl: null };
  obj = { skuId, assetFormat: parseSkuIdFromServerData.CollectiblesItemAssetFormat.STATIC };
  obj[0] = parseSkuIdFromServerData.getCollectiblesItemAssetUrl(obj);
  const obj2 = parseSkuIdFromServerData;
  obj = { skuId, assetFormat: parseSkuIdFromServerData.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = parseSkuIdFromServerData.getCollectiblesItemAssetUrl(obj);
  return obj;
};
