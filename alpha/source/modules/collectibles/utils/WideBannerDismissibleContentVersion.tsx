// Module ID: 14347
// Function ID: 14348
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7913, 1076, 7900, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14347 (WideBannerDismissibleContentVersion)
import ShopBlockType from "ShopBlockType" /* 7900 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7913 */;

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
