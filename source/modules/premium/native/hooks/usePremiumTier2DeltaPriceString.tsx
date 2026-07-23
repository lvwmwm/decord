// Module ID: 12480
// Function ID: 96736
// Name: getViewerProductId
// Dependencies: [31, 6663, 5621, 1851, 6648, 5624, 477, 5618, 3791, 566, 2]
// Exports: usePremiumTier2DeltaPriceString

// Module 12480 (getViewerProductId)
import result from "result";
import { useNativeCheckoutStore } from "context";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_5;
let closure_6;
const require = arg1;
function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    return require(6648) /* _createForOfIteratorHelperLoose */.getProductIdFromSubscription(tmp, false);
  }
}
({ PremiumTypes: closure_5, SubscriptionIntervalTypes: closure_6 } = GuildFeatures);
let closure_7 = { priceString: null, failure: null };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = function usePremiumTier2DeltaPriceString(plan, subscription, first, flag3) {
  const tmp = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, checkoutContext: orderRequired.getCheckoutContextRecord() }));
  const checkoutContext = tmp.checkoutContext;
  const _require = getViewerProductId(subscription);
  let obj = _require(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != closure_0) {
      product = outer1_4.getProduct(closure_0);
    }
    return product;
  });
  let obj1 = _require(477);
  let flag = false;
  if (flag3) {
    flag = false;
    if (plan.premiumTier === TIER_2.TIER_2) {
      flag = false;
      if (plan.interval === constants.MONTH) {
        flag = false;
        if (plan.numPremiumGuild >= 1) {
          let tmp6 = getViewerProductId(subscription);
          let tmp8 = null;
          if (null != tmp6) {
            tmp8 = _require(5624).AppStorePremiumProductIdsToPremiumBundledItems[tmp6];
          }
          let tmp11 = null != tmp8 && tmp8.basePlanId === plan.basePlanId;
          if (tmp11) {
            tmp11 = 0 === tmp8.numPremiumGuild;
          }
          flag = tmp11;
        }
      }
    }
  }
  if (flag) {
    if (!tmp3) {
      if (null != first) {
        if (null != stateFromStores) {
          const platformName = _require(477).getPlatformName();
          if (first.currencyCode !== stateFromStores.currencyCode) {
            obj = { priceString: null };
            obj = { kind: "currency_mismatch", platform: platformName, productId: plan.productId, currencyCode: first.currencyCode };
            obj.failure = obj;
            let obj3 = obj;
          } else {
            const diff = first.price - stateFromStores.price;
            if (diff > 0) {
              if (diff < first.price) {
                let obj4 = _require(477);
                let result = diff;
                if (obj4.isAndroid()) {
                  result = diff / 100;
                }
                obj1 = {};
                let obj6 = _require(5618);
                const obj2 = { convertToMajorUnits: false };
                obj1.priceString = obj6.formatPrice(result, first.currencyCode, obj2);
                obj1.failure = null;
                obj3 = obj1;
              }
            }
            obj3 = { priceString: null };
            obj4 = { kind: "delta_out_of_range", platform: platformName, productId: plan.productId, currencyCode: first.currencyCode };
            obj3.failure = obj4;
          }
          const obj14 = _require(477);
        }
      }
      obj3 = closure_7;
    }
    if (null == checkoutContext) {
      let tmp20 = closure_7;
    } else {
      const availablePlanForItems = checkoutContext.getAvailablePlanForItems(_require(6648).getSubscriptionItemsForProduct(plan.productId));
      if (null != availablePlanForItems) {
        const addOnPrice = availablePlanForItems.getAddOnPrice();
        if (null != addOnPrice) {
          if (addOnPrice.majorUnits > 0) {
            const obj5 = {};
            obj6 = { convertToMajorUnits: false };
            obj5.priceString = _require(5618).formatPrice(addOnPrice.majorUnits, addOnPrice.currency, obj6);
            obj5.failure = null;
            tmp20 = obj5;
            const obj12 = _require(5618);
          }
        }
        tmp20 = closure_7;
      }
      const obj15 = _require(6648);
    }
    tmp20 = closure_7;
  } else {
    (function useReportDeltaFailure(failure) {
      let kind;
      if (null != failure) {
        kind = failure.kind;
      }
      let tmp2 = null;
      if (null != kind) {
        tmp2 = kind;
      }
      let closure_0 = tmp2;
      let platform;
      if (null != failure) {
        platform = failure.platform;
      }
      let tmp4 = null;
      if (null != platform) {
        tmp4 = platform;
      }
      let closure_1 = tmp4;
      let currencyCode;
      if (null != failure) {
        currencyCode = failure.currencyCode;
      }
      let tmp6 = null;
      if (null != currencyCode) {
        tmp6 = currencyCode;
      }
      let result = tmp6;
      let productId;
      if (null != failure) {
        productId = failure.productId;
      }
      let tmp8 = null;
      if (null != productId) {
        tmp8 = productId;
      }
      let closure_3 = tmp8;
      const items = [tmp2, tmp4, tmp6, tmp8];
      const effect = outer1_2.useEffect(() => {
        if (null != tmp2) {
          let obj = tmp2(outer2_1[8]);
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("delta_price_integrity_" + tmp2);
          obj = {};
          obj = { source: "usePremiumTier2DeltaPriceString", delta_failure_kind: tmp2 };
          let str2 = "unknown";
          let str = "unknown";
          if (null != closure_1) {
            str = closure_1;
          }
          obj.delta_platform = str;
          tmp2 = str2;
          if (null != result) {
            tmp2 = result;
          }
          obj.delta_currency_code = tmp2;
          if (null != closure_3) {
            str2 = closure_3;
          }
          obj.delta_product_id = str2;
          obj.tags = obj;
          const result = obj.captureBillingException(error, obj);
        }
      }, items);
    })(closure_7.failure);
    return closure_7.priceString;
  }
};
