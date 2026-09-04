// Module ID: 13470
// Function ID: 13471
// Name: usePremiumPlanSelectStore
// Dependencies: [641, 702, 2]
// Exports: setIsPurchasing

// Module 13470 (usePremiumPlanSelectStore)
import set from "set" /* 2 */;
import keys from "keys" /* 641 */;

const obj = keys.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = set.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export const usePremiumPlanSelectStore = obj;
export const setIsPurchasing = function setIsPurchasing(arg0) {
  const _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  _require(702).batchUpdates(() => closure_1_2.setState({ isPurchasing: closure_0, purchasingProductId: c1 }));
};
