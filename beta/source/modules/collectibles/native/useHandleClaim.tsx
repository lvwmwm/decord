// Module ID: 12734
// Function ID: 12735
// Name: useHandleClaim
// Dependencies: [5, 19, 6961, 4800, 10542, 4528, 1115, 2]
// Exports: useHandleClaim

// Module 12734 (useHandleClaim)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, closure_2;

const result = size.fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = function useHandleClaim(product) {
  let items;
  product = product.product;
  require = product;
  let stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let obj = {
    handleClaim: react.useCallback(_asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let intl;
      let obj3;
      let v1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === stageCollectibleChangeForEditProfile) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 1;
              stageCollectibleChangeForEditProfile = 2;
              c4 = 1;
              const obj5 = { value: obj3.claimPremiumCollectiblesProduct(require.skuId), done: false };
              obj3 = tmp(closure_2[2]);
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              const obj6 = { key: "collectible shop claim error", content: intl.string(tmp(closure_2[6]).t.CKsXk3) };
              const open = stageCollectibleChangeForEditProfile(closure_2[5]).open;
              const tmp9 = stageCollectibleChangeForEditProfile(closure_2[5]);
              intl = tmp(closure_2[6]).intl;
              open(obj6);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const obj7 = stageCollectibleChangeForEditProfile(closure_2[3]);
              obj7.hideAllActionSheets();
              const obj9 = { product: closure_128_0, useCategoryImage: true, stageCollectibleChangeForEditProfile: closure_128_1 };
              const obj8 = stageCollectibleChangeForEditProfile(closure_2[4]);
              obj8.open(obj9);
              const obj10 = tmp(closure_2[2]);
              const collectiblesPurchases = obj10.fetchCollectiblesPurchases();
              c3 = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          closure_2 = tmp18;
          if (0 === c3) {
            c4 = 3;
            throw tmp18;
          } else {
            stageCollectibleChangeForEditProfile = 1;
          }
        }
      }
    }), items)
  };
  items = [product, stageCollectibleChangeForEditProfile];
  return obj;
};
