// Module ID: 14262
// Function ID: 14263
// Name: ShopThisLookUtils
// Dependencies: [1257, 14263, 2]
// Exports: isShoppableCollectibleSku

// Module 14262 (ShopThisLookUtils)
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import CollectiblesSKUSourceType from "CollectiblesSKUSourceType" /* 14263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  let obj5;
  let tmp = null != stateFromStores;
  if (tmp) {
    let flag;
    if (typeof stateFromStores.isAvailable !== "function") {
      const obj2 = { extra: obj5 };
      obj5 = { skuId: null, skuType: null };
      ({ id: obj3.skuId, type: obj3.skuType } = stateFromStores);
      const obj = SentryUtilsDefault;
      obj.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", obj2);
      flag = false;
    } else {
      flag = stateFromStores.isAvailable();
      if (flag) {
        const tenantMetadata = stateFromStores.tenantMetadata;
        let sourceType;
        if (tenantMetadata != null) {
          const collectibles = tenantMetadata.collectibles;
          if (collectibles != null) {
            sourceType = collectibles.sourceType;
          }
        }
        flag = sourceType === CollectiblesSKUSourceType.CollectiblesSKUSourceType.SHOP;
      }
    }
    tmp = flag;
  }
  return tmp;
};
