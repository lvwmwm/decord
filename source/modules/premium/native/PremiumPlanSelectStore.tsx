// Module ID: 12473
// Function ID: 96726
// Name: usePremiumPlanSelectStore
// Dependencies: [621, 682, 2]
// Exports: setIsPurchasing

// Module 12473 (usePremiumPlanSelectStore)
import keys from "keys";

const obj = keys.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = require("set").fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export const usePremiumPlanSelectStore = obj;
export const setIsPurchasing = function setIsPurchasing(arg0) {
  let tmp = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    tmp = null;
  }
  const dependencyMap = tmp;
  _require(682).batchUpdates(() => outer1_2.setState({ isPurchasing: closure_0, purchasingProductId: closure_1 }));
};
