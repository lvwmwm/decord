// Module ID: 14990
// Function ID: 14991
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7524, 1089, 7513, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14990 (WideBannerDismissibleContentVersion)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1089 */;
import ShopBlockType from "ShopBlockType" /* 7513 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7524 */;
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
