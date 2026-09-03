// Module ID: 8540
// Function ID: 8541
// Name: getNameplateAssets
// Dependencies: [1899, 2]
// Exports: getNameplateAssets

// Module 8540 (getNameplateAssets)
import set from "set" /* 2 */;
import parseSkuIdFromServerData from "parseSkuIdFromServerData" /* 1899 */;

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
