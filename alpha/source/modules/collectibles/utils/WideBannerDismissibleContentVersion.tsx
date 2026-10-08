// Module ID: 14127
// Function ID: 14128
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7294, 1087, 7282, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14127 (WideBannerDismissibleContentVersion)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ShopBlockType from "ShopBlockType" /* 7282 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7294 */;
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
