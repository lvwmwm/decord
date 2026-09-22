// Module ID: 13295
// Function ID: 13296
// Name: useHandleClaim
// Dependencies: [5, 19, 7644, 4603, 11215, 4335, 1114, 2]
// Exports: useHandleClaim

// Module 13295 (useHandleClaim)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

let require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = function useHandleClaim(product) {
  product = product.product;
  require = product;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  const obj = { handleClaim: null };
  const items = [product, stageCollectibleChangeForEditProfile];
  obj.handleClaim = noop.useCallback(asyncGeneratorStep(async () => {
    await tmp3(tmp20[2]).claimPremiumCollectiblesProduct(product.skuId);
    if (1 === tmp7) {
      c3 = 0;
      const obj7 = { key: "collectible shop claim error", content: null };
      const intl = tmp3(tmp20[6]).intl;
      obj7.content = intl.string(tmp3(tmp20[6]).t.CKsXk3);
      v2(tmp20[5]).open(obj7);
      c4 = 3;
      v2(tmp20[5]);
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      v2(tmp20[3]).hideAllActionSheets();
      v2(tmp20[3]);
      v2(tmp20[4]).open({ product: closure_128_0, useCategoryImage: true, stageCollectibleChangeForEditProfile: closure_128_1 });
      v2(tmp20[4]);
      const collectiblesPurchases = tmp3(tmp20[2]).fetchCollectiblesPurchases();
      c3 = 0;
      tmp3(tmp20[2]);
    }
    return arg1;
  }), items);
  return obj;
};
