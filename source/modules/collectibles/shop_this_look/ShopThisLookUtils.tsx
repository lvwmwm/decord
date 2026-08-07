// Module ID: 12440
// Function ID: 12441
// Name: isShoppableCollectibleSku
// Dependencies: [12441, 2]
// Exports: isShoppableCollectibleSku

// Module 12440 (isShoppableCollectibleSku)
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
    tmp = sourceType === require(12441) /* CollectiblesSKUSourceType */.CollectiblesSKUSourceType.SHOP;
  }
  return tmp;
};
