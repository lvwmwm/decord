// Module ID: 7114
// Function ID: 57150
// Name: validatePurchase
// Dependencies: []
// Exports: useHandlePremiumPurchase

// Module 7114 (validatePurchase)
function validatePurchase() {
  return _validatePurchase(...arguments);
}
async function _validatePurchase(arg0, arg1) {
  const fn = function*(arg0) {
    let currency;
    let isGift;
    let offerId;
    let premiumSubscription;
    let price;
    let productId;
    ({ premiumSubscription, productId, offerId, currency, price, isGift } = arg0);
    yield undefined;
    const HTTP = callback(closure_2[9]).HTTP;
    let obj = { url: constants.GOOGLE_PLAY_VALIDATE_PURCHASE };
    obj = { product_id: productId, offer_id: offerId };
    let id;
    if (null != premiumSubscription) {
      id = premiumSubscription.id;
    }
    obj.subscription_id = id;
    obj.currency = currency;
    obj.price = price;
    obj.is_gift = isGift;
    obj.body = obj;
    obj.rejectWithError = false;
    yield HTTP.post(obj);
  };
  fn.next();
  return fn;
}
let closure_3 = ["Kaaba"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const setGPlayAnalytics = arg1(dependencyMap[3]).setGPlayAnalytics;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ AnalyticEvents: closure_11, Endpoints: closure_12 } = arg1(dependencyMap[7]));
const PaymentGateways = arg1(dependencyMap[8]).PaymentGateways;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export const useHandlePremiumPurchase = function useHandlePremiumPurchase() {
  const items = [closure_9];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const arg1 = stateFromStores;
  const obj = arg1(dependencyMap[17]);
  const premiumTrialOffer = arg1(dependencyMap[18]).usePremiumTrialOffer();
  const importDefault = premiumTrialOffer;
  const obj2 = arg1(dependencyMap[18]);
  const premiumDiscountOffer = arg1(dependencyMap[19]).usePremiumDiscountOffer();
  const dependencyMap = premiumDiscountOffer;
  const obj3 = arg1(dependencyMap[19]);
  const isEligibleForBogoOffer = arg1(dependencyMap[20]).useIsEligibleForBogoOffer();
  let closure_3 = isEligibleForBogoOffer;
  let closure_4 = tmp5;
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let closure_5 = id;
  let paymentGatewayPlanId;
  if (null != stateFromStores) {
    paymentGatewayPlanId = stateFromStores.paymentGatewayPlanId;
  }
  const React = paymentGatewayPlanId;
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.paymentGatewaySubscriptionId;
  }
  const setGPlayAnalytics = prop;
  const items1 = [null != stateFromStores, paymentGatewayPlanId, prop, id, premiumTrialOffer, premiumDiscountOffer, stateFromStores, isEligibleForBogoOffer];
  return React.useCallback(() => {
    let closure_0 = id(async (arg0) => {
      const fn = function*(isOneTimePurchase) {
        let analyticsData;
        let analyticsLoadId;
        let analyticsLocation;
        let analyticsLocations;
        let giftInfoOptions;
        let isGift;
        let onPurchaseComplete;
        let onPurchaseError;
        let productId;
        let skuId;
        ({ productId, analyticsData, isGift, skuId, analyticsLoadId, analyticsLocation, analyticsLocations } = isOneTimePurchase);
        if (isGift === undefined) {
          isGift = false;
        }
        let onPurchaseCompleteResult = isGift;
        let flag = isOneTimePurchase.isOneTimePurchase;
        if (flag === undefined) {
          flag = false;
        }
        let flag2 = isOneTimePurchase.allowPlanChange;
        if (flag2 === undefined) {
          flag2 = true;
        }
        ({ giftInfoOptions, onPurchaseComplete, onPurchaseError } = isOneTimePurchase);
        yield undefined;
        const id = id.getId();
        const product = product.getProduct(productId);
        let obj = callback(closure_2[21]);
        const basePurchaseFlowAnalyticsFields = obj.getBasePurchaseFlowAnalyticsFields({ isGift: onPurchaseCompleteResult, analyticsLoadId, analyticsLocation, analyticsLocations });
        if (null == analyticsData) {
          analyticsData = {};
        }
        obj = {};
        const merged = Object.assign(basePurchaseFlowAnalyticsFields);
        obj["subscription_plan_gateway_plan_id"] = productId;
        obj["sku_id"] = skuId;
        let price;
        if (null != product) {
          price = product.price;
        }
        obj["price"] = price;
        let price1;
        if (null != product) {
          price1 = product.price;
        }
        obj["regular_price"] = price1;
        let formatted;
        if (null != product) {
          formatted = product.currencyCode.toLowerCase();
          const str = product.currencyCode;
        }
        obj["currency"] = formatted;
        obj["application_id"] = isOneTimePurchase.applicationId;
        const merged1 = Object.assign(callback3(analyticsData, closure_3));
        obj = {};
        const merged2 = Object.assign(obj);
        obj["succeededOnlyFields"] = analyticsData.succeededOnlyFields;
        callback4(productId, obj);
        let offerIds;
        if (null != product) {
          offerIds = product.offerIds;
        }
        if (null != offerIds) {
          if (null != tmp18) {
            const tmp32 = callback(closure_2[16]).TrialIdToProductOfferId[tmp18.trial_id];
            let tmp33;
            if (null != tmp32) {
              tmp33 = tmp32[productId];
            }
            let BOGO_OFFER_ID = tmp33;
          } else if (null != tmp19) {
            const tmp28 = callback(closure_2[16]).DiscountIdToProductOfferId[tmp19.discountId];
            let tmp29;
            if (null != tmp28) {
              tmp29 = tmp28[productId];
            }
            BOGO_OFFER_ID = tmp29;
          }
          let obj3 = callback(closure_2[22]);
          const obj1 = {};
          const merged3 = Object.assign(obj);
          obj1["payment_gateway"] = constants.GOOGLE;
          const result = obj3.trackPaymentFlowStartedAnalyticsAndCTP(obj1);
          if (!onPurchaseCompleteResult) {
            if (!flag) {
              let tmp44 = callback3;
              if (callback3) {
                tmp44 = !flag2;
              }
              if (!tmp44) {
                let tmp47 = tmp46;
                if (null != closure_6) {
                  tmp47 = null != callback4;
                }
                let tmp49 = tmp47;
                if (tmp47) {
                  tmp49 = null != closure_5;
                }
                if (tmp49) {
                  let obj5 = callback(closure_2[26]);
                  const result1 = obj5.updatePendingDowngrade(productId, closure_6, callback4, closure_5);
                }
                const obj2 = { productId, premiumSubscription: callback, offerId: tmp34 };
                yield closure_14(obj2);
                const obj8 = callback(closure_2[26]);
                return yield obj8.subscribe(productId, id, closure_6, closure_7, tmp34);
              }
            }
            onPurchaseCompleteResult = onPurchaseComplete;
            if (null != onPurchaseComplete) {
              onPurchaseCompleteResult = onPurchaseComplete;
              obj3 = {};
              onPurchaseCompleteResult = constants;
              obj3.paymentGateway = constants.GOOGLE;
              onPurchaseCompleteResult = onPurchaseComplete(obj3);
            }
          }
          let tmp73 = onPurchaseCompleteResult;
          if (onPurchaseCompleteResult) {
            tmp73 = null != giftInfoOptions;
          }
          if (tmp73) {
            const tmp77 = null != callback2(closure_2[23]).giftInfoOptionsCache;
            let tmp78 = tmp77;
            if (tmp77) {
              tmp78 = null != callback2(closure_2[23]).giftInfoOptionsCache[productId];
            }
            if (tmp78) {
              const giftInfoOptionsCache = callback2(closure_2[23]).giftInfoOptionsCache;
              delete r10[r6];
            }
            const obj4 = {};
            const merged4 = Object.assign(giftInfoOptions);
            callback2(closure_2[23]).giftInfoOptionsCache[productId] = obj4;
          }
          let result2 = null;
          if (null != product) {
            result2 = callback(closure_2[24]).convertToMinorCurrencyUnits(product.price / 100, product.currencyCode);
            const obj10 = callback(closure_2[24]);
          }
          while (true) {
            obj5 = {};
            let tmp97 = productId;
            obj5.productId = productId;
            let tmp98 = callback;
            obj5.premiumSubscription = callback;
            obj5.offerId = null;
            let tmp99 = product;
            onPurchaseCompleteResult = undefined;
            let tmp96 = closure_14;
            if (null == product) {
              break;
            } else {
              let currencyCode = product.currencyCode;
              let str3 = currencyCode;
              if (null == currencyCode) {
                break;
              } else {
                onPurchaseCompleteResult = currencyCode;
                onPurchaseCompleteResult = str3.toLowerCase();
                // break
              }
            }
            obj5.currency = onPurchaseCompleteResult;
            obj5.price = result2;
            obj5.isGift = isGift;
            onPurchaseCompleteResult = yield tmp96(obj5);
            onPurchaseCompleteResult = callback;
            onPurchaseCompleteResult = closure_2;
            let num10 = 26;
            let obj12 = callback(closure_2[26]);
            onPurchaseCompleteResult = yield obj12.purchase(productId, id);
          }
        }
        BOGO_OFFER_ID = null;
        if (closure_3) {
          BOGO_OFFER_ID = null;
          if (productId === callback(closure_2[16]).ProductIds.PREMIUM_TIER_2_MONTHLY) {
            BOGO_OFFER_ID = callback(closure_2[16]).BOGO_OFFER_ID;
          }
        }
      };
      fn.next();
      return fn;
    });
    return function() {
      return callback(...arguments);
    };
  }(), items1);
};
