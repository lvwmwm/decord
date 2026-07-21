// Module ID: 12874
// Function ID: 98346
// Name: getWideBannerDismissibleContentVersion
// Dependencies: []
// Exports: getWideBannerDismissibleContentVersion

// Module 12874 (getWideBannerDismissibleContentVersion)
let closure_2 = importDefault(dependencyMap[0]);
const CollectibleShopTab = arg1(dependencyMap[1]).CollectibleShopTab;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  let found;
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let tmp = shopBlocks;
      let shopBlocks = shopBlocks.getShopBlocks(items[num]);
      found = shopBlocks.find((type) => type.type === callback(closure_1[2]).ShopBlockType.WIDE_BANNER);
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
