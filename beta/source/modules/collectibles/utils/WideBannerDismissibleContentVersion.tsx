// Module ID: 14257
// Function ID: 14258
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7827, 1076, 7814, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14257 (WideBannerDismissibleContentVersion)
import ShopBlockType from "ShopBlockType" /* 7814 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7827 */;

require = fn;
const CollectibleShopTab = fn(1076).CollectibleShopTab;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let shopBlocks = CollectiblesShopHomeStore.getShopBlocks(tmp);
    let found = shopBlocks.find((type) => type.type === ShopBlockType.ShopBlockType.WIDE_BANNER);
    let prop;
    if (found != null) {
      prop = found.dismissibleContentVersion;
    }
    if (null != prop) {
      obj.return();
      return found.dismissibleContentVersion;
    }
  }
  return 0;
};
