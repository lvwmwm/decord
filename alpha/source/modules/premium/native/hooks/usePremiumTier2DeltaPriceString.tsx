// Module ID: 13821
// Function ID: 13822
// Name: usePremiumTier2DeltaPriceString
// Dependencies: [19, 7143, 7131, 1392, 7125, 7126, 1382, 6939, 558, 576, 4784, 504, 2]

// Module 13821 (usePremiumTier2DeltaPriceString)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import BillingUtils from "BillingUtils" /* 4784 */;
import PriceUtils from "PriceUtils" /* 6939 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7125 */;
import ProductIds from "ProductIds" /* 7126 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 7143 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 7131 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
function computeDelta(productId, currencyCode, stateFromStores) {
  let obj5;
  let tmp4Result2;
  if (null != currencyCode) {
    if (null != stateFromStores) {
      const obj8 = PlatformUtils;
      const platformName = obj8.getPlatformName();
      if (currencyCode.currencyCode !== stateFromStores.currencyCode) {
        const obj2 = { priceString: null, failure: obj3 };
        return obj2;
      } else {
        const diff = currencyCode.price - stateFromStores.price;
        if (diff > 0) {
          let obj;
          if (diff < currencyCode.price) {
            let result = diff;
            const tmp4Result = PlatformUtils;
            if (tmp4Result.isAndroid()) {
              result = diff / 100;
            }
            const obj4 = { priceString: tmp4Result2.formatPrice(result, currencyCode.currencyCode, { convertToMajorUnits: false }), failure: null };
            obj = obj4;
            tmp4Result2 = PriceUtils;
          }
          return obj;
        }
        obj = { priceString: null, failure: obj5 };
        obj5 = { kind: "delta_out_of_range", platform: platformName, productId: productId.productId, currencyCode: currencyCode.currencyCode };
      }
    }
  }
  return closure_6;
}
function computeAcomDeltaResult(productId, checkoutContext, viewerProductId) {
  let tmp10Result3;
  let tmp10Result4;
  if (null == checkoutContext) {
    return closure_6;
  } else {
    const getAvailablePlanForItems = checkoutContext.getAvailablePlanForItems;
    const obj5 = PremiumBundledPlansUtils;
    const availablePlanForItems = getAvailablePlanForItems(obj5.getSubscriptionItemsForProduct(productId.productId));
    if (null == availablePlanForItems) {
      return closure_6;
    } else {
      const addOnPrice = availablePlanForItems.getAddOnPrice();
      if (null != addOnPrice) {
        if (addOnPrice.majorUnits > 0) {
          let tmp = null;
          if (null != viewerProductId) {
            tmp = tmp10(7126).AppStorePremiumProductIdsToPremiumBundledItems[viewerProductId];
          }
          if (null != viewerProductId) {
            if (null != tmp) {
              if (0 !== tmp.numPremiumGuild) {
                const getAvailablePlanForItems2 = checkoutContext.getAvailablePlanForItems;
                const tmp10Result = PremiumBundledPlansUtils;
                const availablePlanForItems2 = getAvailablePlanForItems2(tmp10Result.getSubscriptionItemsForProduct(viewerProductId));
                let addOnPrice1;
                if (availablePlanForItems2 != null) {
                  addOnPrice1 = availablePlanForItems2.getAddOnPrice();
                }
                if (null == addOnPrice1) {
                  return closure_6;
                } else {
                  let tmp4;
                  const diff = addOnPrice.majorUnits - addOnPrice1.majorUnits;
                  if (diff > 0) {
                    const obj = { priceString: tmp10Result3.formatPrice(diff, addOnPrice.currency, { convertToMajorUnits: false }), failure: null };
                    tmp4 = obj;
                    tmp10Result3 = PriceUtils;
                  } else {
                    tmp4 = closure_6;
                  }
                  return tmp4;
                }
              }
            }
          }
          const obj2 = { priceString: tmp10Result4.formatPrice(addOnPrice.majorUnits, addOnPrice.currency, { convertToMajorUnits: false }), failure: null };
          tmp10Result4 = PriceUtils;
          return obj2;
        }
      }
      return closure_6;
    }
  }
}
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const PremiumTypes = PremiumConstants.PremiumTypes;
let closure_6 = { priceString: null, failure: null };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReportDeltaFailure(kind) {
  let platform;
  let obj = kind(platform[9]);
  const cResult = obj.c(6);
  kind = undefined;
  if (kind != null) {
    kind = kind.kind;
  }
  if (kind == null) {
    kind = null;
  }
  platform = undefined;
  if (kind != null) {
    platform = kind.platform;
  }
  if (platform == null) {
    platform = null;
  }
  let currencyCode;
  if (kind != null) {
    currencyCode = kind.currencyCode;
  }
  if (currencyCode == null) {
    currencyCode = null;
  }
  let productId;
  if (kind != null) {
    productId = kind.productId;
  }
  if (productId == null) {
    productId = null;
  }
  if (cResult[0] === currencyCode) {
    if (cResult[1] === kind) {
      if (cResult[2] === platform) {
        let tmp6;
        let tmp7;
        if (cResult[3] === productId) {
          tmp6 = cResult[4];
          tmp7 = cResult[5];
        }
        const effect = currencyCode.useEffect(tmp6, tmp7);
      }
    }
  }
  const fn = function n() {
    let str;
    let str2;
    let str3;
    if (null != kind) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const captureBillingException = BillingUtils.captureBillingException;
      const self = this;
      const self2 = this;
      BillingUtils;
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
  };
  const items = [kind, platform, currencyCode, productId];
  cResult[0] = currencyCode;
  cResult[1] = kind;
  cResult[2] = platform;
  cResult[3] = productId;
  cResult[4] = fn;
  cResult[5] = items;
  tmp7 = items;
  tmp6 = fn;
}) : (function useReportDeltaFailure(kind) {
  kind = undefined;
  if (kind != null) {
    kind = kind.kind;
  }
  if (kind == null) {
    kind = null;
  }
  let platform;
  if (kind != null) {
    platform = kind.platform;
  }
  if (platform == null) {
    platform = null;
  }
  let currencyCode;
  if (kind != null) {
    currencyCode = kind.currencyCode;
  }
  if (currencyCode == null) {
    currencyCode = null;
  }
  let productId;
  if (kind != null) {
    productId = kind.productId;
  }
  if (productId == null) {
    productId = null;
  }
  const items = [kind, platform, currencyCode, productId];
  const effect = currencyCode.useEffect(function() {
    let str;
    let str2;
    let str3;
    if (null != kind) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const captureBillingException = BillingUtils.captureBillingException;
      const self = this;
      const self2 = this;
      BillingUtils;
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
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumTier2DeltaPriceString(premiumTier, subscription, arg2, arg3) {
  let checkoutContext;
  let closure_0;
  let orderRequired;
  let tmp12;
  let tmp18;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
    cResult[0] = P;
  } else {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
  }
  ({ orderRequired, checkoutContext } = useNativeCheckoutStore(tmp4));
  useNativeCheckoutStore(tmp4);
  if (cResult[1] !== subscription) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
    cResult[1] = subscription;
    cResult[2] = getViewerProductId(subscription);
    const tmp7 = getViewerProductId(subscription);
  } else {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
  }
  _require = tmp6;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
    const items = [IAPStore];
    cResult[3] = items;
    tmp8 = items;
  } else {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
  }
  if (cResult[4] !== tmp6) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
    cResult[4] = tmp6;
    cResult[5] = tmp10;
    tmp9 = tmp10;
  } else {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[6] !== orderRequired) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
    const tmp13 = obj3.isIOS() && orderRequired;
    cResult[6] = orderRequired;
    cResult[7] = tmp13;
    tmp12 = tmp13;
  } else {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
  }
  if (cResult[8] === stateFromStores) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
  }
  let flag = false;
  if (arg3) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
    flag = false;
    if (premiumTier.premiumTier === PremiumTypes.TIER_2) {
      class P {
        constructor(arg0) {
          obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
          return obj;
        }
      }
      flag = false;
      if (premiumTier.numPremiumGuild >= 1) {
        class P {
          constructor(arg0) {
            obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
            return obj;
          }
        }
        const tmp14 = getViewerProductId(subscription);
        if (null != tmp14) {
          class P {
            constructor(arg0) {
              obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
              return obj;
            }
          }
        }
        flag = null != null && null.basePlanId === premiumTier.basePlanId && null.numPremiumGuild < premiumTier.numPremiumGuild;
      }
    }
  }
  if (flag) {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
    tmp18 = tmp19;
  } else {
    class P {
      constructor(arg0) {
        obj = { orderRequired: premiumTier.orderRequired, checkoutContext: premiumTier.getCheckoutContextRecord() };
        return obj;
      }
    }
  }
  cResult[8] = stateFromStores;
  cResult[9] = arg2;
  cResult[10] = checkoutContext;
  cResult[11] = tmp12;
  cResult[12] = arg3;
  cResult[13] = premiumTier;
  cResult[14] = subscription;
  cResult[15] = tmp6;
  cResult[16] = tmp18;
}) : (function usePremiumTier2DeltaPriceString(premiumTier, subscription, currencyCode, arg3) {
  let checkoutContext;
  let closure_0;
  let orderRequired;
  let tmp13;
  const tmp = useNativeCheckoutStore((orderRequired) => {
    const obj = { orderRequired: orderRequired.orderRequired, checkoutContext: orderRequired.getCheckoutContextRecord() };
    return obj;
  });
  ({ orderRequired, checkoutContext } = tmp);
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
  let flag = false;
  const obj2 = require("PlatformUtils");
  const tmp2 = getViewerProductId;
  const tmp4 = _require;
  const tmp7 = obj2.isIOS() && orderRequired;
  if (arg3) {
    flag = false;
    if (premiumTier.premiumTier === PremiumTypes.TIER_2) {
      flag = false;
      if (premiumTier.numPremiumGuild >= 1) {
        const tmp2Result = tmp2(subscription);
        let tmp11 = null;
        if (null != tmp2Result) {
          tmp11 = tmp4(7126).AppStorePremiumProductIdsToPremiumBundledItems[tmp2Result];
        }
        flag = null != tmp11 && tmp11.basePlanId === premiumTier.basePlanId && tmp11.numPremiumGuild < premiumTier.numPremiumGuild;
      }
    }
  }
  if (flag) {
    let tmp16;
    if (tmp7) {
      tmp16 = computeAcomDeltaResult(premiumTier, checkoutContext, tmp3);
    } else {
      tmp16 = computeDelta(premiumTier, currencyCode, stateFromStores);
    }
    tmp13 = tmp16;
  } else {
    tmp13 = closure_6;
  }
  const priceString = tmp13.priceString;
  closure_10(tmp13.failure);
  return priceString;
});
let result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = tmp2;
