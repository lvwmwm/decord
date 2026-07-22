// Module ID: 8600
// Function ID: 68287
// Name: useXboxGamePassStoreUrl
// Dependencies: []
// Exports: default

// Module 8600 (useXboxGamePassStoreUrl)
const Distributors = require(dependencyMap[0]).Distributors;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx");

export default function useXboxGamePassStoreUrl(thirdPartySkus) {
  if (null == thirdPartySkus) {
    return null;
  } else {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    const found = thirdPartySkus.find((distributor) => {
      let tmp = distributor.distributor === constants.XBOX_GAME_PASS;
      if (tmp) {
        tmp = !callback(closure_1[1]).isNullOrEmpty(distributor.id);
        const obj = callback(closure_1[1]);
      }
      return tmp;
    });
    let id;
    if (null != found) {
      id = found.id;
    }
    let xboxGamePassStoreUrl = null;
    if (null != id) {
      xboxGamePassStoreUrl = require(dependencyMap[2]).buildXboxGamePassStoreUrl(found.id);
      const obj = require(dependencyMap[2]);
    }
    return xboxGamePassStoreUrl;
  }
};
