// Module ID: 15182
// Function ID: 15183
// Name: useCheckoutPlanPriceString
// Dependencies: [19, 7602, 1376, 7585, 2]
// Exports: useCheckoutPlan, useCheckoutPlanDiscountPrices, useCheckoutPlanPriceString

// Module 15182 (useCheckoutPlanPriceString)
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7585 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 7602 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f107840 = (orderRequired) => orderRequired.orderRequired;
const f107841 = (getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord();
let react = react_mod;
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const result = size.fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export function useCheckoutPlan(arg0) {
  let closure_0;
  let closure_1;
  let closure_2;
  let items;
  _require = arg0;
  const tmp = useNativeCheckoutStore(f107840);
  const tmp2 = useNativeCheckoutStore(f107841);
  dependencyMap = tmp2;
  const obj = require("PlatformUtils");
  const tmp3 = obj.isIOS() && tmp;
  react = tmp3;
  const obj2 = {
    plan: react.useMemo(() => {
      let availablePlanForItems = null;
      if (closure_2) {
        availablePlanForItems = null;
        const tmp2 = closure_1;
        if (null != closure_1) {
          availablePlanForItems = null;
          if (null != productId) {
            const getAvailablePlanForItems = tmp2.getAvailablePlanForItems;
            const obj = PremiumBundledPlansUtils;
            availablePlanForItems = getAvailablePlanForItems(obj.getSubscriptionItemsForProduct(tmp3));
          }
        }
      }
      return availablePlanForItems;
    }, items),
    useOrderPricing: tmp3
  };
  items = [tmp2, arg0, tmp3];
  return obj2;
}
export function useCheckoutPlanDiscountPrices(productId, discountedPriceString) {
  let closure_1;
  let closure_2;
  _require = productId;
  let tmp = useNativeCheckoutStore(f107840);
  const tmp2 = useNativeCheckoutStore(f107841);
  let obj = require("PlatformUtils");
  const tmp3 = obj.isIOS() && tmp;
  react = tmp3;
  const items = [tmp2, productId, tmp3];
  const memo = react.useMemo(() => {
    let availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      const tmp2 = closure_1;
      if (null != closure_1) {
        availablePlanForItems = null;
        if (null != productId) {
          const getAvailablePlanForItems = tmp2.getAvailablePlanForItems;
          const obj = PremiumBundledPlansUtils;
          availablePlanForItems = getAvailablePlanForItems(obj.getSubscriptionItemsForProduct(tmp3));
        }
      }
    }
    return availablePlanForItems;
  }, items);
  dependencyMap = tmp3;
  discountedPriceString = discountedPriceString.discountedPriceString;
  const regularPriceString = discountedPriceString.regularPriceString;
  const items1 = [discountedPriceString, memo, regularPriceString, tmp3];
  return react.useMemo(() => {
    const tmp = closure_1;
    if (tmp) {
      if (null == memo) {
        return null;
      } else {
        discountedPriceString = obj2.getDiscountedPriceString();
        let tmp8 = null;
        if (null != discountedPriceString) {
          tmp8 = { discountedPrice: discountedPriceString, regularPrice: memo.getRegularPriceString() };
          const obj3 = { discountedPrice: discountedPriceString, regularPrice: memo.getRegularPriceString() };
        }
        return tmp8;
      }
    } else {
      let tmp4 = null;
      if (null != discountedPriceString) {
        tmp4 = null;
        if (null != regularPriceString) {
          tmp4 = { discountedPrice: tmp2, regularPrice: tmp5 };
          const obj = { discountedPrice: tmp2, regularPrice: tmp5 };
        }
      }
      return tmp4;
    }
  }, items1);
}
export function useCheckoutPlanPriceString(productId, stateFromStores) {
  let closure_1;
  let closure_2;
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  _require = productId;
  let tmp2 = useNativeCheckoutStore(f107840);
  const tmp3 = useNativeCheckoutStore(f107841);
  dependencyMap = tmp3;
  let obj = require("PlatformUtils");
  const tmp4 = obj.isIOS() && tmp2;
  react = tmp4;
  const items = [tmp3, productId, tmp4];
  const memo = react.useMemo(() => {
    let availablePlanForItems = null;
    if (closure_2) {
      availablePlanForItems = null;
      const tmp2 = closure_1;
      if (null != closure_1) {
        availablePlanForItems = null;
        if (null != productId) {
          const getAvailablePlanForItems = tmp2.getAvailablePlanForItems;
          const obj = PremiumBundledPlansUtils;
          availablePlanForItems = getAvailablePlanForItems(obj.getSubscriptionItemsForProduct(tmp3));
        }
      }
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
}
