// Module ID: 12512
// Function ID: 12513
// Name: isShoppableCollectibleSku
// Dependencies: [12513, 2]
// Exports: isShoppableCollectibleSku

// Module 12512 (isShoppableCollectibleSku)
const result = require("set").fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  let tmp = null != stateFromStores && stateFromStores.isAvailable();
  if (tmp) {
    const tenantMetadata = stateFromStores.tenantMetadata;
    let sourceType;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        sourceType = collectibles.sourceType;
      }
    }
    tmp = sourceType === require(12513) /* CollectiblesSKUSourceType */.CollectiblesSKUSourceType.SHOP;
  }
  return tmp;
};
