// Module ID: 9003
// Function ID: 9004
// Name: NameplateUtils
// Dependencies: [1987, 2]
// Exports: getNameplateAssets

// Module 9003 (NameplateUtils)
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1987 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export const getNameplateAssets = function getNameplateAssets(nameplate) {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  const skuId = nameplate.skuId;
  const obj = { staticImageUrl: obj2.getCollectiblesItemAssetUrl(obj3), animatedImageUrl: obj4.getCollectiblesItemAssetUrl(obj5) };
  obj2 = CollectiblesAssetUtils;
  obj3 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
  obj4 = CollectiblesAssetUtils;
  obj5 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.ANIMATED };
  return obj;
};
