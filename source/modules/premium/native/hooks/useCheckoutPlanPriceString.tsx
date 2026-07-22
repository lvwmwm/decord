// Module ID: 7113
// Function ID: 57156
// Name: useCheckoutPlanPriceString
// Dependencies: []
// Exports: useCheckoutPlanPriceString

// Module 7113 (useCheckoutPlanPriceString)
let closure_2 = importAll(dependencyMap[0]);
const useNativeCheckoutStore = arg1(dependencyMap[1]).useNativeCheckoutStore;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlanPriceString = function useCheckoutPlanPriceString(productId, first) {
  first = productId;
  let priceString;
  if (null != first) {
    priceString = first.priceString;
  }
  let tmp2 = null;
  if (null != priceString) {
    tmp2 = priceString;
  }
  const tmp4 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  const dependencyMap = tmp4;
  const items = [tmp4, productId];
  const memo = React.useMemo(() => {
    if (null == tmp4) {
      return null;
    } else {
      const availablePlanForItems = tmp4.getAvailablePlanForItems(arg0(tmp4[2]).getSubscriptionItemsForProduct(arg0));
      let priceString = null;
      if (null != availablePlanForItems) {
        priceString = availablePlanForItems.getPriceString();
      }
      return priceString;
    }
  }, items);
  const tmp3 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  let tmp6 = tmp2;
  if (obj.isIOS()) {
    tmp6 = tmp2;
    if (false !== tmp3) {
      tmp6 = memo;
    }
  }
  return tmp6;
};
