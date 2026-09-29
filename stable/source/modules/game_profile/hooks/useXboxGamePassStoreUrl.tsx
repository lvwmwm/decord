// Module ID: 8995
// Function ID: 8996
// Name: useXboxGamePassStoreUrl
// Dependencies: [1074, 2009, 8988, 2]
// Exports: default

// Module 8995 (useXboxGamePassStoreUrl)
import Constants from "Constants" /* 1074 */;
import StringUtils from "StringUtils" /* 2009 */;
import distributorStoreUrls from "distributorStoreUrls" /* 8988 */;
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
