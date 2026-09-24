// Module ID: 13846
// Function ID: 13847
// Name: PremiumPlanSelectStore
// Dependencies: [562, 1252, 2]
// Exports: setIsPurchasing

// Module 13846 (PremiumPlanSelectStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const usePremiumPlanSelectStore = module_562.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export { usePremiumPlanSelectStore };
export const setIsPurchasing = function setIsPurchasing(isPurchasing) {
  _require = isPurchasing;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { isPurchasing, purchasingProductId };
    return obj.setState(obj);
  });
};
