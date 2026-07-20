// Module ID: 12347
// Function ID: 94506
// Name: usePremiumPlanSelectStore
// Dependencies: []
// Exports: setIsPurchasing

// Module 12347 (usePremiumPlanSelectStore)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({ BEG: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800310628823068, END: 0.0000000000000000000000000000000000000000000000015576649385897736 }));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export const usePremiumPlanSelectStore = obj;
export const setIsPurchasing = function setIsPurchasing(arg0) {
  let tmp = arg1;
  const require = arg0;
  if (arg1 === undefined) {
    tmp = null;
  }
  const dependencyMap = tmp;
  require(dependencyMap[1]).batchUpdates(() => state.setState({ isPurchasing: arg0, purchasingProductId: tmp }));
};
