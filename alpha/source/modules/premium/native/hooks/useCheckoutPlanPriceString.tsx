// Module ID: 13707
// Function ID: 13708
// Name: useCheckoutPlanPriceString
// Dependencies: [19, 7754, 1364, 7739, 2]
// Exports: useCheckoutPlan, useCheckoutPlanDiscountPrices, useCheckoutPlanPriceString

// Module 13707 (useCheckoutPlanPriceString)
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7739 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useNativeCheckoutStore = fn(7754).useNativeCheckoutStore;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlan = function useCheckoutPlan(arg0) {
  _require = arg0;
  const tmp2 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  dependencyMap = tmp2;
  const tmp = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  const tmp3 = require("PlatformUtils").isIOS() && tmp;
  noop = tmp3;
  const obj2 = { plan: null, useOrderPricing: tmp3 };
  const items = [tmp2, arg0, tmp3];
  obj2.plan = noop.useMemo(() => {
    let availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      if (null != closure_1) {
        availablePlanForItems = null;
        if (null != closure_0) {
          availablePlanForItems = obj.getAvailablePlanForItems(PremiumBundledPlansUtils.getSubscriptionItemsForProduct(tmp2));
        }
      }
      obj = closure_1;
    }
    return availablePlanForItems;
  }, items);
  return obj2;
};
export const useCheckoutPlanDiscountPrices = function useCheckoutPlanDiscountPrices(productId, discountedPriceString) {
  let memo = productId;
  const tmp2 = regularPriceString((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  const tmp = regularPriceString((orderRequired) => orderRequired.orderRequired);
  let tmp3 = memo(1364).isIOS() && tmp;
  discountedPriceString = tmp3;
  const items = [tmp2, productId, tmp3];
  memo = discountedPriceString.useMemo(() => {
    let availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      if (null != closure_1) {
        availablePlanForItems = null;
        if (null != closure_0) {
          availablePlanForItems = obj.getAvailablePlanForItems(PremiumBundledPlansUtils.getSubscriptionItemsForProduct(tmp2));
        }
      }
      obj = closure_1;
    }
    return availablePlanForItems;
  }, items);
  dependencyMap = tmp3;
  discountedPriceString = discountedPriceString.discountedPriceString;
  regularPriceString = discountedPriceString.regularPriceString;
  const items1 = [discountedPriceString, memo, regularPriceString, tmp3];
  return discountedPriceString.useMemo(() => {
    if (closure_1) {
      if (null == memo) {
        return null;
      } else {
        discountedPriceString = obj2.getDiscountedPriceString();
        let tmp7 = null;
        if (null != discountedPriceString) {
          const obj3 = { discountedPrice: discountedPriceString, regularPrice: obj2.getRegularPriceString() };
          tmp7 = obj3;
        }
        return tmp7;
      }
    } else {
      let tmp3 = null;
      if (null != discountedPriceString) {
        tmp3 = null;
        if (null != regularPriceString) {
          const obj = { discountedPrice: tmp, regularPrice: tmp4 };
          tmp3 = obj;
        }
      }
      return tmp3;
    }
  }, items1);
};
export const useCheckoutPlanPriceString = function useCheckoutPlanPriceString(productId, stateFromStores) {
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  _require = productId;
  const tmp3 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  dependencyMap = tmp3;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  const tmp4 = require("PlatformUtils").isIOS() && tmp2;
  noop = tmp4;
  const items = [tmp3, productId, tmp4];
  const memo = noop.useMemo(() => {
    let availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      if (null != closure_1) {
        availablePlanForItems = null;
        if (null != closure_0) {
          availablePlanForItems = obj.getAvailablePlanForItems(PremiumBundledPlansUtils.getSubscriptionItemsForProduct(tmp2));
        }
      }
      obj = closure_1;
    }
    return availablePlanForItems;
  }, items);
  if (tmp4) {
    let priceString1;
    if (memo != null) {
      priceString1 = memo.getPriceString();
    }
    if (priceString1 == null) {
      priceString1 = null;
    }
    priceString = priceString1;
  }
  return priceString;
};
