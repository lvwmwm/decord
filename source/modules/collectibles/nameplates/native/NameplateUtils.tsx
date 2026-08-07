// Module ID: 9326
// Function ID: 9327
// Name: getNameplateAssets
// Dependencies: [1882, 2]
// Exports: getNameplateAssets

// Module 9326 (getNameplateAssets)
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { staticImageUrl: null, animatedImageUrl: null };
  obj = { skuId, assetFormat: require(1882) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.STATIC };
  obj[0] = require(1882) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  const obj2 = require(1882) /* parseSkuIdFromServerData */;
  obj = { skuId, assetFormat: require(1882) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = require(1882) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  return obj;
};
