// Module ID: 7117
// Function ID: 57203
// Name: useCheckoutPlanPriceString
// Dependencies: [31, 6663, 6648, 477, 2]
// Exports: useCheckoutPlanPriceString

// Module 7117 (useCheckoutPlanPriceString)
import result from "result";
import { useNativeCheckoutStore } from "context";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlanPriceString = function useCheckoutPlanPriceString(productId, first) {
  const _require = productId;
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
      const availablePlanForItems = tmp4.getAvailablePlanForItems(productId(tmp4[2]).getSubscriptionItemsForProduct(productId));
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
