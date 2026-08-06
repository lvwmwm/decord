// Module ID: 12425
// Function ID: 12426
// Name: isShoppableCollectibleSku
// Dependencies: [12426, 2]
// Exports: isShoppableCollectibleSku

// Module 12425 (isShoppableCollectibleSku)
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
    tmp = sourceType === require(12426) /* CollectiblesSKUSourceType */.CollectiblesSKUSourceType.SHOP;
  }
  return tmp;
};
