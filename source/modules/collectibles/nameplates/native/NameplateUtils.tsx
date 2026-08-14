// Module ID: 9455
// Function ID: 9456
// Name: getNameplateAssets
// Dependencies: [1901, 2]
// Exports: getNameplateAssets

// Module 9455 (getNameplateAssets)
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = { staticImageUrl: null, animatedImageUrl: null };
  obj = { skuId, assetFormat: require(1901) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.STATIC };
  obj[0] = require(1901) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  const obj2 = require(1901) /* parseSkuIdFromServerData */;
  obj = { skuId, assetFormat: require(1901) /* parseSkuIdFromServerData */.CollectiblesItemAssetFormat.ANIMATED };
  obj[1] = require(1901) /* parseSkuIdFromServerData */.getCollectiblesItemAssetUrl(obj);
  return obj;
};
