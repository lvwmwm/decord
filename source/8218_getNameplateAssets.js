// Module ID: 8218
// Function ID: 64946
// Name: getNameplateAssets
// Dependencies: [0, 0]
// Exports: getNameplateAssets

// Module 8218 (getNameplateAssets)
import result from "result";

result = result.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  const skuId = nameplate.skuId;
  let obj = {};
  obj = { skuId, assetFormat: require(dependencyMap[0]).CollectiblesItemAssetFormat.STATIC };
  obj.staticImageUrl = require(dependencyMap[0]).getCollectiblesItemAssetUrl(obj);
  const obj2 = require(dependencyMap[0]);
  obj = { skuId, assetFormat: require(dependencyMap[0]).CollectiblesItemAssetFormat.ANIMATED };
  obj.animatedImageUrl = require(dependencyMap[0]).getCollectiblesItemAssetUrl(obj);
  return obj;
};
