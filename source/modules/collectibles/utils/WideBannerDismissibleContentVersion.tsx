// Module ID: 13614
// Function ID: 13615
// Name: getWideBannerDismissibleContentVersion
// Dependencies: [7258, 678, 7245, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 13614 (getWideBannerDismissibleContentVersion)
import closure_2 from "map" /* 7258 */;
import { CollectibleShopTab } from "items" /* 678 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp2 = shopBlocks;
    shopBlocks = shopBlocks.getShopBlocks(tmp);
    let found = shopBlocks.find((type) => type.type === callback(table[2]).ShopBlockType.WIDE_BANNER);
    let tmp4 = found;
    let prop;
    if (found != null) {
      prop = found.dismissibleContentVersion;
    }
    if (null != prop) {
      let tmp6 = obj;
      obj.return();
      return found.dismissibleContentVersion;
    }
  }
  return 0;
};
