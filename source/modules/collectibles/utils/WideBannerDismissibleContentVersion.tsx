// Module ID: 12995
// Function ID: 100535
// Name: getWideBannerDismissibleContentVersion
// Dependencies: [6821, 655, 6806, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 12995 (getWideBannerDismissibleContentVersion)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectibleShopTab } from "items";

const require = arg1;
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  let found;
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let tmp = shopBlocks;
      shopBlocks = shopBlocks.getShopBlocks(items[num]);
      found = shopBlocks.find((type) => type.type === outer1_0(outer1_1[2]).ShopBlockType.WIDE_BANNER);
      let prop;
      if (null != found) {
        prop = found.dismissibleContentVersion;
      }
      if (null != prop) {
        break;
      } else {
        num = num + 1;
      }
    }
    return found.dismissibleContentVersion;
  }
  return 0;
};
