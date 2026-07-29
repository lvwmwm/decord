// Module ID: 13126
// Function ID: 13127
// Name: getWideBannerDismissibleContentVersion
// Dependencies: [5844, 678, 5829, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 13126 (getWideBannerDismissibleContentVersion)
import map from "map";
import { CollectibleShopTab } from "items";

const require = arg1;
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

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
