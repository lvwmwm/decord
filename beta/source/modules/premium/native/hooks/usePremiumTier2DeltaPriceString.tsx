// Module ID: 13091
// Function ID: 13092
// Name: usePremiumTier2DeltaPriceString
// Dependencies: [19, 6844, 6658, 1374, 6829, 6661, 1364, 6655, 4503, 504, 2]
// Exports: usePremiumTier2DeltaPriceString

// Module 13091 (usePremiumTier2DeltaPriceString)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import ProductIds from "ProductIds" /* 6661 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 6829 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6844 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 6658 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    try {
      const obj = PremiumBundledPlansUtils;
      const productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
      try {
        const tmpResult = PremiumBundledPlansUtils;
        const productIdFromSubscription1 = tmpResult.getProductIdFromSubscription(subscription, true);
        const tmp6 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
        const tmp8 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
        if (null != tmp6) {
          if (null != tmp8) {
            let tmp9;
            if (tmp6.numPremiumGuild === tmp8.numPremiumGuild) {
              tmp9 = productIdFromSubscription1;
            }
            return tmp9;
          }
        }
        tmp9 = productIdFromSubscription;
      } catch (err) {
        return productIdFromSubscription;
      }
    } catch (err) {
      return null;
    }
  }
}
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const PremiumTypes = PremiumConstants.PremiumTypes;
let closure_6 = { priceString: null, failure: null };
let result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = function usePremiumTier2DeltaPriceString(plan, subscription, currencyCode, flag4) {
  let closure_0;
  let obj6;
  let obj9;
  let tmp13;
  let tmp4Result12;
  let tmp4Result8;
  let tmp4Result9;
  const tmp = useNativeCheckoutStore((orderRequired) => {
    const obj = { orderRequired: orderRequired.orderRequired, checkoutContext: orderRequired.getCheckoutContextRecord() };
    return obj;
  });
  const checkoutContext = tmp.checkoutContext;
  const orderRequired = tmp.orderRequired;
  const tmp3 = getViewerProductId(subscription);
  _require = tmp3;
  let obj = require("get initialized");
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != closure_0) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  });
  let obj2 = require("PlatformUtils");
  let flag = false;
  const tmp2 = getViewerProductId;
  const tmp7 = obj2.isIOS() && orderRequired;
  if (flag4) {
    flag = false;
    if (plan.premiumTier === PremiumTypes.TIER_2) {
      flag = false;
      if (plan.numPremiumGuild >= 1) {
        const tmp2Result = tmp2(subscription);
        let tmp11 = null;
        if (null != tmp2Result) {
          tmp11 = tmp4(6661).AppStorePremiumProductIdsToPremiumBundledItems[tmp2Result];
        }
        flag = null != tmp11 && tmp11.basePlanId === plan.basePlanId && tmp11.numPremiumGuild < plan.numPremiumGuild;
      }
    }
  }
  if (flag) {
    let obj8;
    if (tmp7) {
      let tmp20;
      if (null == checkoutContext) {
        tmp20 = closure_6;
      } else {
        const getAvailablePlanForItems = checkoutContext.getAvailablePlanForItems;
        const tmp4Result = require("PremiumBundledPlansUtils");
        const availablePlanForItems = getAvailablePlanForItems(tmp4Result.getSubscriptionItemsForProduct(plan.productId));
        if (null == availablePlanForItems) {
          tmp20 = closure_6;
        } else {
          const addOnPrice = availablePlanForItems.getAddOnPrice();
          if (null != addOnPrice) {
            if (addOnPrice.majorUnits > 0) {
              let tmp17 = null;
              if (null != tmp3) {
                tmp17 = tmp4(6661).AppStorePremiumProductIdsToPremiumBundledItems[tmp3];
              }
              if (null != tmp3) {
                if (null != tmp17) {
                  if (0 !== tmp17.numPremiumGuild) {
                    const getAvailablePlanForItems2 = checkoutContext.getAvailablePlanForItems;
                    const tmp4Result7 = require("PremiumBundledPlansUtils");
                    const availablePlanForItems2 = getAvailablePlanForItems2(tmp4Result7.getSubscriptionItemsForProduct(tmp3));
                    let addOnPrice1;
                    if (availablePlanForItems2 != null) {
                      addOnPrice1 = availablePlanForItems2.getAddOnPrice();
                    }
                    if (null == addOnPrice1) {
                      tmp20 = closure_6;
                    } else {
                      const diff = addOnPrice.majorUnits - addOnPrice1.majorUnits;
                      if (diff > 0) {
                        const obj3 = { priceString: tmp4Result8.formatPrice(diff, addOnPrice.currency, { convertToMajorUnits: false }), failure: null };
                        tmp20 = obj3;
                        tmp4Result8 = require("PriceUtils");
                      } else {
                        tmp20 = closure_6;
                      }
                    }
                  }
                }
              }
              const obj4 = { priceString: tmp4Result9.formatPrice(addOnPrice.majorUnits, addOnPrice.currency, { convertToMajorUnits: false }), failure: null };
              tmp20 = obj4;
              tmp4Result9 = require("PriceUtils");
            }
          }
          tmp20 = closure_6;
        }
      }
      obj8 = tmp20;
    } else {
      if (null != currencyCode) {
        if (null != stateFromStores) {
          const tmp4Result10 = require("PlatformUtils");
          const platformName = tmp4Result10.getPlatformName();
          if (currencyCode.currencyCode !== stateFromStores.currencyCode) {
            const obj5 = { priceString: null, failure: obj6 };
            obj8 = obj5;
            obj6 = { kind: "currency_mismatch", platform: platformName, productId: plan.productId, currencyCode: currencyCode.currencyCode };
          } else {
            const diff1 = currencyCode.price - stateFromStores.price;
            if (diff1 > 0) {
              if (diff1 < currencyCode.price) {
                let result = diff1;
                const tmp4Result11 = require("PlatformUtils");
                if (tmp4Result11.isAndroid()) {
                  result = diff1 / 100;
                }
                const obj7 = { priceString: tmp4Result12.formatPrice(result, currencyCode.currencyCode, { convertToMajorUnits: false }), failure: null };
                obj8 = obj7;
                tmp4Result12 = require("PriceUtils");
              }
            }
            obj8 = { priceString: null, failure: obj9 };
            obj9 = { kind: "delta_out_of_range", platform: platformName, productId: plan.productId, currencyCode: currencyCode.currencyCode };
          }
        }
      }
      obj8 = closure_6;
    }
    tmp13 = obj8;
  } else {
    tmp13 = closure_6;
  }
  const failure = tmp13.failure;
  let platform;
  currencyCode = undefined;
  let productId;
  let kind;
  const priceString = tmp13.priceString;
  if (failure != null) {
    kind = failure.kind;
  }
  if (kind == null) {
    kind = null;
  }
  platform = undefined;
  if (failure != null) {
    platform = failure.platform;
  }
  if (platform == null) {
    platform = null;
  }
  currencyCode = undefined;
  if (failure != null) {
    currencyCode = failure.currencyCode;
  }
  if (currencyCode == null) {
    currencyCode = null;
  }
  productId = undefined;
  if (failure != null) {
    productId = failure.productId;
  }
  if (productId == null) {
    productId = null;
  }
  const items1 = [kind, platform, currencyCode, productId];
  const effect = react.useEffect(function() {
    let str;
    let str2;
    let str3;
    if (null != kind) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const captureBillingException = kind(dependencyMap[8]).captureBillingException;
      const self = this;
      const self2 = this;
      kind(dependencyMap[8]);
      const error = new Error("delta_price_integrity_" + tmp);
      const obj2 = { source: "usePremiumTier2DeltaPriceString", delta_failure_kind: kind, delta_platform: str, delta_currency_code: str2, delta_product_id: str3 };
      str = platform;
      if (platform == null) {
        str = "unknown";
      }
      str2 = currencyCode;
      if (currencyCode == null) {
        str2 = "unknown";
      }
      str3 = productId;
      if (productId == null) {
        str3 = "unknown";
      }
      const obj = { tags: obj2 };
      const result = captureBillingException(error, obj);
    }
  }, items1);
  return priceString;
};
