// Module ID: 5620
// Function ID: 5621
// Name: WideBannerDismissibleContentVersion
// Dependencies: [5621, 1089, 5622, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 5620 (WideBannerDismissibleContentVersion)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1089 */;
import ShopBlockType from "ShopBlockType" /* 5622 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 5621 */;
import size from "module_2" /* 2 */;

const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
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
      let dismissibleContentVersion = found.dismissibleContentVersion;
      obj.return();
      return dismissibleContentVersion;
    }
  }
  return 0;
};
