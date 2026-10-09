// Module ID: 14223
// Function ID: 14224
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7299, 1087, 7287, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14223 (WideBannerDismissibleContentVersion)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ShopBlockType from "ShopBlockType" /* 7287 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7299 */;
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
