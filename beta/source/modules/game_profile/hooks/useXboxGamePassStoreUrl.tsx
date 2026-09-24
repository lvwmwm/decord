// Module ID: 8993
// Function ID: 8994
// Name: useXboxGamePassStoreUrl
// Dependencies: [1078, 2013, 8987, 2]
// Exports: default

// Module 8993 (useXboxGamePassStoreUrl)
import Constants from "Constants" /* 1078 */;
import StringUtils from "StringUtils" /* 2013 */;
import distributorStoreUrls from "distributorStoreUrls" /* 8987 */;
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
