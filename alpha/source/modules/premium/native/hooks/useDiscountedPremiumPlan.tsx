// Module ID: 9904
// Function ID: 9905
// Name: useDiscountedPremiumPlan
// Dependencies: [19, 7590, 504, 2]
// Exports: useDiscountedPremiumPlan

// Module 9904 (useDiscountedPremiumPlan)
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 7590 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumPlan.tsx");

export function useDiscountedPremiumPlan(premiumDiscountOffer, items3) {
  let memo;
  _require = premiumDiscountOffer;
  dependencyMap = items3;
  const items = [premiumDiscountOffer, items3];
  memo = memo.useMemo(() => {
    if (null == premiumDiscountOffer) {
      return null;
    } else {
      const discount = tmp.discount;
      let planIds;
      if (discount != null) {
        planIds = discount.planIds;
      }
      if (planIds == null) {
        planIds = [];
      }
      return items3.find((basePlanId) => planIds.includes(basePlanId.basePlanId));
    }
  }, items);
  const items1 = [IAPStore];
  const items2 = [memo];
  const obj = require("get initialized");
  const obj2 = {
    discountedPlan: memo,
    discountedProduct: obj.useStateFromStores(items1, () => {
      let product = null;
      if (null != memo) {
        product = IAPStore.getProduct(tmp.productId);
      }
      return product;
    }, items2)
  };
  return obj2;
}
