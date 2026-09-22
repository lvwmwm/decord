// Module ID: 8815
// Function ID: 8816
// Name: useXboxGamePassStoreUrl
// Dependencies: [1074, 1925, 8808, 2]
// Exports: default

// Module 8815 (useXboxGamePassStoreUrl)
import Constants from "Constants" /* 1074 */;
import StringUtils from "StringUtils" /* 1925 */;
import distributorStoreUrls from "distributorStoreUrls" /* 8808 */;
import size from "module_2" /* 2 */;

const Distributors = Constants.Distributors;
const result = size.fileFinishedImporting("modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx");

export default function useXboxGamePassStoreUrl(thirdPartySkus) {
  if (null == thirdPartySkus) {
    return null;
  } else {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    const found = thirdPartySkus.find((distributor) => {
      let tmp = distributor.distributor === constants.XBOX_GAME_PASS;
      if (tmp) {
        tmp = !StringUtils.isNullOrEmpty(distributor.id);
      }
      return tmp;
    });
    let id;
    if (found != null) {
      id = found.id;
    }
    let xboxGamePassStoreUrl = null;
    if (null != id) {
      xboxGamePassStoreUrl = distributorStoreUrls.buildXboxGamePassStoreUrl(found.id);
    }
    return xboxGamePassStoreUrl;
  }
};
