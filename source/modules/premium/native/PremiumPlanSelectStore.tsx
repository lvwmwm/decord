// Module ID: 12819
// Function ID: 12820
// Name: usePremiumPlanSelectStore
// Dependencies: [644, 705, 2]
// Exports: setIsPurchasing

// Module 12819 (usePremiumPlanSelectStore)
import keys from "keys";

const obj = keys.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = require("set").fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export const usePremiumPlanSelectStore = obj;
export const setIsPurchasing = function setIsPurchasing(arg0) {
  const _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  const dependencyMap = tmp;
  _require(705).batchUpdates(() => outer1_2.setState({ isPurchasing: closure_0, purchasingProductId: closure_1 }));
};
