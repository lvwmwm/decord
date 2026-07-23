// Module ID: 8230
// Function ID: 65020
// Name: getNameplateAssets
// Dependencies: [1830, 2]
// Exports: getNameplateAssets

// Module 8230 (getNameplateAssets)
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = {};
  obj = { skuId, assetFormat: require(1830) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.STATIC };
  obj.staticImageUrl = require(1830) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  const obj2 = require(1830) /* parseSkuIdFromServerData */;
  obj = { skuId, assetFormat: require(1830) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.ANIMATED };
  obj.animatedImageUrl = require(1830) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  return obj;
};
