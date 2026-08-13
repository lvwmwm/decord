// Module ID: 12572
// Function ID: 12573
// Name: isShoppableCollectibleSku
// Dependencies: [12573, 2]
// Exports: isShoppableCollectibleSku

// Module 12572 (isShoppableCollectibleSku)
const result = require("set").fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookUtils.tsx");

export const isShoppableCollectibleSku = function isShoppableCollectibleSku(stateFromStores) {
  let tmp = null != stateFromStores;
  if (tmp) {
    const isAvailable = stateFromStores.isAvailable;
    let isAvailableResult;
    if (isAvailable != null) {
      isAvailableResult = isAvailable();
    }
    tmp = true === isAvailableResult;
  }
  if (tmp) {
    const tenantMetadata = stateFromStores.tenantMetadata;
    let sourceType;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        sourceType = collectibles.sourceType;
      }
    }
    tmp = sourceType === require(12573) /* CollectiblesSKUSourceType */.CollectiblesSKUSourceType.SHOP;
  }
  return tmp;
};
