// Module ID: 8876
// Function ID: 8877
// Name: useXboxGamePassStoreUrl
// Dependencies: [1085, 2031, 8870, 2]
// Exports: default

// Module 8876 (useXboxGamePassStoreUrl)
import Constants from "Constants" /* 1085 */;
import StringUtils from "StringUtils" /* 2031 */;
import distributorStoreUrls from "distributorStoreUrls" /* 8870 */;
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
