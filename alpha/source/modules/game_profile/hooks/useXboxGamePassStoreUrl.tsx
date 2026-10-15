// Module ID: 9112
// Function ID: 9113
// Name: useXboxGamePassStoreUrl
// Dependencies: [1085, 2031, 9106, 2]
// Exports: default

// Module 9112 (useXboxGamePassStoreUrl)
import Constants from "Constants" /* 1085 */;
import StringUtils from "StringUtils" /* 2031 */;
import distributorStoreUrls from "distributorStoreUrls" /* 9106 */;
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
        const obj = StringUtils;
        tmp = !obj.isNullOrEmpty(distributor.id);
      }
      return tmp;
    });
    let id;
    if (found != null) {
      id = found.id;
    }
    let xboxGamePassStoreUrl = null;
    if (null != id) {
      let obj = distributorStoreUrls;
      xboxGamePassStoreUrl = obj.buildXboxGamePassStoreUrl(found.id);
    }
    return xboxGamePassStoreUrl;
  }
};
