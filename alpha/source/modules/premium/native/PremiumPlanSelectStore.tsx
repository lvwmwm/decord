// Module ID: 15426
// Function ID: 15427
// Name: PremiumPlanSelectStore
// Dependencies: [560, 1259, 2]
// Exports: setIsPurchasing

// Module 15426 (PremiumPlanSelectStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const usePremiumPlanSelectStore = module_560.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export { usePremiumPlanSelectStore };
export function setIsPurchasing(isPurchasing) {
  let purchasingProductId;
  _require = isPurchasing;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { isPurchasing, purchasingProductId };
    return obj.setState(obj);
  });
}
