// Module ID: 8068
// Function ID: 8069
// Name: getNameplateAssets
// Dependencies: [1854, 2]
// Exports: getNameplateAssets

// Module 8068 (getNameplateAssets)
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { staticImageUrl: null, animatedImageUrl: null };
  obj = { skuId, assetFormat: require(1854) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.STATIC };
  obj[0] = require(1854) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  const obj2 = require(1854) /* parseSkuIdFromServerData */;
  obj = { skuId, assetFormat: require(1854) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = require(1854) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  return obj;
};
