// Module ID: 12354
// Function ID: 94542
// Name: usePremiumPlanSelectStore
// Dependencies: []
// Exports: setIsPurchasing

// Module 12354 (usePremiumPlanSelectStore)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({ MKTG_HYPESQUAD_FORM_SUBMITTED: null, RowButton: null }));
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
