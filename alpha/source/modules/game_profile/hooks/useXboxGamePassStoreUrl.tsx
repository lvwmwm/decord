// Module ID: 9326
// Function ID: 9327
// Name: useXboxGamePassStoreUrl
// Dependencies: [1072, 2028, 9319, 2]
// Exports: default

// Module 9326 (useXboxGamePassStoreUrl)
import Constants from "Constants" /* 1072 */;
import StringUtils from "StringUtils" /* 2028 */;
import distributorStoreUrls from "distributorStoreUrls" /* 9319 */;
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
