// Module ID: 14076
// Function ID: 14077
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7688, 1076, 7675, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14076 (WideBannerDismissibleContentVersion)
import ShopBlockType from "ShopBlockType" /* 7675 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7688 */;

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
