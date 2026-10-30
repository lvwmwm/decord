// Module ID: 9493
// Function ID: 9494
// Name: NameplateUtils
// Dependencies: [1982, 2]
// Exports: getNameplateAssets

// Module 9493 (NameplateUtils)
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1982 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateUtils.tsx");

export function getNameplateAssets(nameplate) {
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
}
