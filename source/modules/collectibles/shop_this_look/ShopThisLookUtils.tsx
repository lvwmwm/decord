// Module ID: 12590
// Function ID: 12591
// Name: isShoppableCollectibleSku
// Dependencies: [1208, 12591, 2]
// Exports: isShoppableCollectibleSku

// Module 12590 (isShoppableCollectibleSku)
const result = require("set").fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  let type;
  type = stateFromStores;
  if (null == stateFromStores) {
    return tmp;
  } else if (typeof type.isAvailable !== "function") {
    let obj = importDefault(1208);
    obj = { extra: null };
    obj = { skuId: null, skuType: null };
    ({ id: obj3[0], type } = type);
    obj[1] = type;
    obj[0] = obj;
    obj.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", obj);
    let flag = false;
  } else {
    flag = type.isAvailable();
    if (flag) {
      const tenantMetadata = type.tenantMetadata;
      let sourceType;
      if (tenantMetadata != null) {
        const collectibles = tenantMetadata.collectibles;
        if (collectibles != null) {
          sourceType = collectibles.sourceType;
        }
      }
      flag = sourceType === require(12591) /* CollectiblesSKUSourceType */.CollectiblesSKUSourceType.SHOP;
    }
  }
};
