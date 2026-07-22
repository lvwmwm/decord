// Module ID: 12366
// Function ID: 94580
// Name: getViewerProductId
// Dependencies: []
// Exports: usePremiumTier2DeltaPriceString

// Module 12366 (getViewerProductId)
function getViewerProductId(subscription) {
  if (null == subscription) {
    return null;
  } else {
    return arg1(dependencyMap[5]).getProductIdFromSubscription(tmp, false);
  }
}
let closure_2 = importAll(dependencyMap[0]);
const useNativeCheckoutStore = arg1(dependencyMap[1]).useNativeCheckoutStore;
let closure_4 = importDefault(dependencyMap[2]);
({ PremiumTypes: closure_5, SubscriptionIntervalTypes: closure_6 } = arg1(dependencyMap[3]));
const CurrencyCodes = arg1(dependencyMap[4]).CurrencyCodes;
let closure_8 = { GuildBadgeDollarSign: "o", markAt: "o" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/hooks/usePremiumTier2DeltaPriceString.tsx");

export const usePremiumTier2DeltaPriceString = function usePremiumTier2DeltaPriceString(plan, subscription, first, flag3) {
  let productId = plan;
  let currencyCode = first;
  const callback = getViewerProductId(subscription);
  let obj = callback(dependencyMap[11]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != closure_0) {
      product = product.getProduct(closure_0);
    }
    return product;
  });
  let numPremiumGuild = flag3;
  let flag = false;
  if (flag3) {
    flag = false;
    if (!tmp) {
      numPremiumGuild = productId.premiumTier;
      flag = false;
      if (numPremiumGuild === TIER_2.TIER_2) {
        numPremiumGuild = productId.interval;
        flag = false;
        if (numPremiumGuild === constants.MONTH) {
          numPremiumGuild = productId.numPremiumGuild;
          flag = false;
          if (numPremiumGuild >= 1) {
            const tmp5 = getViewerProductId(subscription);
            numPremiumGuild = null != tmp5;
            let tmp7 = null;
            if (numPremiumGuild) {
              tmp7 = callback(dependencyMap[6]).AppStorePremiumProductIdsToPremiumBundledItems[tmp5];
            }
            let tmp10 = null != tmp7;
            if (tmp10) {
              tmp10 = tmp7.basePlanId === productId.basePlanId;
            }
            if (tmp10) {
              tmp10 = 0 === tmp7.numPremiumGuild;
            }
            flag = tmp10;
          }
        }
      }
    }
  }
  if (flag) {
    let obj4 = null;
    if (null != currencyCode) {
      if (obj4 != stateFromStores) {
        numPremiumGuild = callback(dependencyMap[7]).getPlatformName();
        if (currencyCode.currencyCode === stateFromStores.currencyCode) {
          const diff = currencyCode.price - stateFromStores.price;
          if (diff > 0) {
            if (diff < currencyCode.price) {
              obj4 = callback(dependencyMap[7]);
              let result = diff;
              if (obj4.isAndroid()) {
                result = callback(dependencyMap[8]).convertToMajorCurrencyUnits(diff, CurrencyCodes.USD);
                const obj6 = callback(dependencyMap[8]);
              }
              obj = {};
              obj = { convertToMajorUnits: false };
              obj.priceString = callback(dependencyMap[9]).formatPrice(result, currencyCode.currencyCode, obj);
              obj.failure = obj4;
              let obj1 = obj;
              const obj8 = callback(dependencyMap[9]);
            }
          }
          obj1 = { priceString: obj4 };
          const obj2 = { kind: "delta_out_of_range", platform: numPremiumGuild, productId: productId.productId, currencyCode: currencyCode.currencyCode };
          obj1.failure = obj2;
        }
        const obj11 = callback(dependencyMap[7]);
      }
      const obj3 = { priceString: obj4 };
      obj4 = { kind: "currency_mismatch", platform: numPremiumGuild };
      productId = productId.productId;
      obj4.productId = productId;
      currencyCode = currencyCode.currencyCode;
      obj4.currencyCode = currencyCode;
      obj3.failure = obj4;
      obj1 = obj3;
    }
    obj1 = closure_8;
  } else {
    function useReportDeltaFailure(failure) {
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
      let currencyCode;
      if (null != failure) {
        currencyCode = failure.currencyCode;
      }
      let tmp6 = null;
      if (null != currencyCode) {
        tmp6 = currencyCode;
      }
      let productId;
      if (null != failure) {
        productId = failure.productId;
      }
      let tmp8 = null;
      if (null != productId) {
        tmp8 = productId;
      }
      const items = [tmp2, tmp4, tmp6, tmp8];
      const effect = tmp6.useEffect(() => {
        if (null != tmp2) {
          let obj = tmp2(tmp4[10]);
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("delta_price_integrity_" + tmp2);
          obj = {};
          obj = { source: "usePremiumTier2DeltaPriceString", delta_failure_kind: tmp2 };
          let str2 = "unknown";
          let str = "unknown";
          if (null != tmp4) {
            str = tmp4;
          }
          obj.delta_platform = str;
          let tmp2 = str2;
          if (null != tmp4) {
            tmp2 = tmp6;
          }
          obj.delta_currency_code = tmp2;
          if (null != tmp2) {
            str2 = tmp8;
          }
          obj.delta_product_id = str2;
          obj.tags = obj;
          const result = obj.captureBillingException(error, obj);
        }
      }, items);
    }(closure_8.failure);
    return closure_8.priceString;
  }
};
