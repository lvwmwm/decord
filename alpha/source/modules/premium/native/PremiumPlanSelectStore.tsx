// Module ID: 14060
// Function ID: 14061
// Name: PremiumPlanSelectStore
// Dependencies: [560, 1263, 2]
// Exports: setIsPurchasing

// Module 14060 (PremiumPlanSelectStore)
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
