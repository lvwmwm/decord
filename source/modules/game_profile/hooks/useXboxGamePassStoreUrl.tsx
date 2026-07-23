// Module ID: 8607
// Function ID: 68327
// Name: useXboxGamePassStoreUrl
// Dependencies: [653, 1832, 8599, 2]
// Exports: default

// Module 8607 (useXboxGamePassStoreUrl)
import { Distributors } from "ME";

const result = require("XBOX_DISCORD_OCID").fileFinishedImporting("modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx");

export default function useXboxGamePassStoreUrl(thirdPartySkus) {
  if (null == thirdPartySkus) {
    return null;
  } else {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    const found = thirdPartySkus.find((distributor) => {
      let tmp = distributor.distributor === outer1_2.XBOX_GAME_PASS;
      if (tmp) {
        tmp = !outer1_0(outer1_1[1]).isNullOrEmpty(distributor.id);
        const obj = outer1_0(outer1_1[1]);
      }
      return tmp;
    });
    let id;
    if (null != found) {
      id = found.id;
    }
    let xboxGamePassStoreUrl = null;
    if (null != id) {
      xboxGamePassStoreUrl = require(8599) /* XBOX_DISCORD_OCID */.buildXboxGamePassStoreUrl(found.id);
      let obj = require(8599) /* XBOX_DISCORD_OCID */;
    }
    return xboxGamePassStoreUrl;
  }
};
