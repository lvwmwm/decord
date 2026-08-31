// Module ID: 8491
// Function ID: 8492
// Name: getNameplateAssets
// Dependencies: [1900, 2]
// Exports: getNameplateAssets

// Module 8491 (getNameplateAssets)
import set from "set" /* 2 */;
import parseSkuIdFromServerData from "parseSkuIdFromServerData" /* 1900 */;

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
