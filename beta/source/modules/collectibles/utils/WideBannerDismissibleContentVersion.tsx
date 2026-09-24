// Module ID: 14298
// Function ID: 14299
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7864, 1080, 7851, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14298 (WideBannerDismissibleContentVersion)
import ShopBlockType from "ShopBlockType" /* 7851 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7864 */;

require = fn;
const CollectibleShopTab = fn(1080).CollectibleShopTab;
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
