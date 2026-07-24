// Module ID: 7118
// Function ID: 57208
// Name: validatePurchase
// Dependencies: [29, 5, 31, 7119, 1194, 3782, 5619, 653, 482, 507, 7120, 4029, 7121, 1212, 3798, 4470, 5622, 566, 6686, 7125, 7128, 7156, 7157, 7159, 5617, 3791, 7160, 675, 2]
// Exports: useHandlePremiumPurchase

// Module 7118 (validatePurchase)
import _objectWithoutProperties from "_objectWithoutProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";
import { setGPlayAnalytics } from "setGPlayAnalytics";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { PaymentGateways } from "sum";

let closure_11;
let closure_12;
const require = arg1;
function validatePurchase() {
  return _validatePurchase(...arguments);
}
async function _validatePurchase(arg0, arg1) {
  let iter = (function*(arg0) {
    let currency;
    let isGift;
    let offerId;
    let premiumSubscription;
    let price;
    let productId;
    ({ premiumSubscription, productId, offerId, currency, price, isGift } = arg0);
    yield undefined;
    const HTTP = outer2_0(outer2_2[9]).HTTP;
    let obj = { url: outer2_12.GOOGLE_PLAY_VALIDATE_PURCHASE };
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
  })();
  iter.next();
  return iter;
}
let closure_3 = ["succeededOnlyFields"];
({ AnalyticEvents: closure_11, Endpoints: closure_12 } = ME);
let result = require("result").fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export const useHandlePremiumPurchase = function useHandlePremiumPurchase() {
  const items = [closure_9];
  stateFromStores = stateFromStores(premiumDiscountOffer[17]).useStateFromStores(items, () => outer1_9.getPremiumTypeSubscription());
  let obj = stateFromStores(premiumDiscountOffer[17]);
  const premiumTrialOffer = stateFromStores(premiumDiscountOffer[18]).usePremiumTrialOffer();
  let obj2 = stateFromStores(premiumDiscountOffer[18]);
  premiumDiscountOffer = stateFromStores(premiumDiscountOffer[19]).usePremiumDiscountOffer();
  let obj3 = stateFromStores(premiumDiscountOffer[19]);
  const isEligibleForBogoOffer = stateFromStores(premiumDiscountOffer[20]).useIsEligibleForBogoOffer();
  let _objectWithoutProperties = tmp5;
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let paymentGatewayPlanId;
  if (null != stateFromStores) {
    paymentGatewayPlanId = stateFromStores.paymentGatewayPlanId;
  }
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.paymentGatewaySubscriptionId;
  }
  const items1 = [null != stateFromStores, paymentGatewayPlanId, prop, id, premiumTrialOffer, premiumDiscountOffer, stateFromStores, isEligibleForBogoOffer];
  return paymentGatewayPlanId.useCallback((() => {
    let closure_0 = id(async (arg0) => {
      const iter = (function*(isOneTimePurchase) {
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
        const id = outer3_8.getId();
        const product = outer3_10.getProduct(productId);
        let obj = stateFromStores(premiumDiscountOffer[21]);
        const basePurchaseFlowAnalyticsFields = obj.getBasePurchaseFlowAnalyticsFields({ isGift: tmp3, analyticsLoadId, analyticsLocation, analyticsLocations });
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
        const merged1 = Object.assign(callback(analyticsData, isEligibleForBogoOffer));
        obj = {};
        const merged2 = Object.assign(obj);
        obj["succeededOnlyFields"] = analyticsData.succeededOnlyFields;
        prop(productId, obj);
        let offerIds;
        if (null != product) {
          offerIds = product.offerIds;
        }
        if (null != offerIds) {
          if (null != tmp20) {
            const tmp34 = stateFromStores(premiumDiscountOffer[16]).TrialIdToProductOfferId[tmp20.trial_id];
            let tmp35;
            if (null != tmp34) {
              tmp35 = tmp34[productId];
            }
            let BOGO_OFFER_ID = tmp35;
          } else if (null != tmp21) {
            const tmp30 = stateFromStores(premiumDiscountOffer[16]).DiscountIdToProductOfferId[tmp21.discountId];
            let tmp31;
            if (null != tmp30) {
              tmp31 = tmp30[productId];
            }
            BOGO_OFFER_ID = tmp31;
          }
          let obj3 = stateFromStores(premiumDiscountOffer[22]);
          const obj1 = {};
          const merged3 = Object.assign(obj);
          obj1["payment_gateway"] = outer3_13.GOOGLE;
          const result = obj3.trackPaymentFlowStartedAnalyticsAndCTP(obj1);
          if (!tmp3) {
            if (!flag) {
              let tmp46 = outer2_4;
              if (outer2_4) {
                tmp46 = !flag2;
              }
              if (!tmp46) {
                let tmp49 = tmp48;
                if (null != outer2_6) {
                  tmp49 = null != outer2_7;
                }
                let tmp51 = tmp49;
                if (tmp49) {
                  tmp51 = null != outer2_5;
                }
                if (tmp51) {
                  let obj5 = stateFromStores(premiumDiscountOffer[26]);
                  const result1 = obj5.updatePendingDowngrade(productId, outer2_6, outer2_7, outer2_5);
                }
                const obj2 = { productId, premiumSubscription: closure_0, offerId: tmp36 };
                yield outer3_14(obj2);
                const obj8 = stateFromStores(premiumDiscountOffer[26]);
                return yield obj8.subscribe(productId, id, outer2_6, outer2_7, tmp36);
              }
            }
            let onPurchaseCompleteResult = onPurchaseComplete;
            if (null != onPurchaseComplete) {
              onPurchaseCompleteResult = onPurchaseComplete;
              obj3 = {};
              onPurchaseCompleteResult = outer3_13;
              obj3.paymentGateway = outer3_13.GOOGLE;
              onPurchaseCompleteResult = onPurchaseComplete(obj3);
            }
          }
          let tmp75 = tmp3;
          if (tmp3) {
            tmp75 = null != giftInfoOptions;
          }
          if (tmp75) {
            const tmp79 = null != premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache;
            let tmp80 = tmp79;
            if (tmp79) {
              tmp80 = null != premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache[productId];
            }
            if (tmp80) {
              const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache;
              delete tmp2[tmp];
            }
            const obj4 = {};
            const merged4 = Object.assign(giftInfoOptions);
            premiumTrialOffer(premiumDiscountOffer[23]).giftInfoOptionsCache[productId] = obj4;
          }
          let result2 = null;
          if (null != product) {
            result2 = stateFromStores(premiumDiscountOffer[24]).convertToMinorCurrencyUnits(product.price / 100, product.currencyCode);
            const obj10 = stateFromStores(premiumDiscountOffer[24]);
          }
          while (true) {
            obj5 = {};
            let tmp99 = productId;
            obj5.productId = productId;
            onPurchaseCompleteResult = closure_0;
            obj5.premiumSubscription = closure_0;
            obj5.offerId = null;
            onPurchaseCompleteResult = product;
            onPurchaseCompleteResult = undefined;
            let tmp98 = outer3_14;
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
                break;
              }
            }
            obj5.currency = onPurchaseCompleteResult;
            obj5.price = result2;
            obj5.isGift = isGift;
            onPurchaseCompleteResult = yield tmp98(obj5);
            onPurchaseCompleteResult = stateFromStores;
            onPurchaseCompleteResult = premiumDiscountOffer;
            let num10 = 26;
            let obj12 = stateFromStores(premiumDiscountOffer[26]);
            onPurchaseCompleteResult = yield obj12.purchase(productId, id);
          }
        }
        BOGO_OFFER_ID = null;
        if (outer2_3) {
          BOGO_OFFER_ID = null;
          if (productId === stateFromStores(premiumDiscountOffer[16]).ProductIds.PREMIUM_TIER_2_MONTHLY) {
            BOGO_OFFER_ID = stateFromStores(premiumDiscountOffer[16]).BOGO_OFFER_ID;
          }
        }
      })();
      iter.next();
      return iter;
    });
    return function() {
      return callback(...arguments);
    };
  })(), items1);
};
