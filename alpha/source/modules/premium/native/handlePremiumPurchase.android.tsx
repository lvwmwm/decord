// Module ID: 10547
// Function ID: 10548
// Name: handlePremiumPurchase
// Dependencies: [109, 5, 19, 9891, 502, 2053, 7590, 1072, 1083, 1283, 10548, 6440, 10549, 1114, 4829, 5953, 7586, 504, 7620, 10551, 10552, 10540, 10558, 7408, 4822, 9890, 1253, 2]
// Exports: useHandlePremiumPurchase

// Module 10547 (handlePremiumPurchase)
import Constants2 from "Constants" /* 1083 */;
import GPlayAnalyticsStore from "GPlayAnalyticsStore" /* 9891 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import IAPStore from "IAPStore" /* 7590 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_5, currency, is_gift, offer_id, product_id;

let closure_12;
let unpackModuleId;
function validatePurchase() {
  return obj(...arguments);
}
let obj = function _validatePurchase() {
  obj = _asyncToGenerator(async (product_id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let obj5;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === is_gift) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let closure_2 = tmp;
              product_id = undefined;
              id = undefined;
              offer_id = undefined;
              currency = undefined;
              price = undefined;
              ({ productId: c0, premiumSubscription: c1, offerId: c2, currency: c3, price: c4, isGift: c5 } = closure_0);
              is_gift = 1;
              c6 = 1;
              return { value: "flexDirection", done: true };
            }
          } else {
            let self;
            if (1 === is_gift) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                price = 1;
                const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                self = HTTP.post;
                const request = { url: closure_130_12.GOOGLE_PLAY_VALIDATE_PURCHASE, body: obj5, rejectWithError: false };
                obj5 = { product_id, offer_id, subscription_id: id, currency, price, is_gift };
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                self = self(request);
                is_gift = 3;
                c6 = 1;
                return { value: self, done: false };
              }
            } else if (2 === is_gift) {
              price = 0;
              let closure_6 = closure_3;
              self = this;
              const self2 = this;
              const tmp12 = new closure_130_1(closure_130_2[10])(closure_6);
              throw tmp12;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              price = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              price = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (0 === price) {
            c6 = 3;
            throw tmp19;
          } else {
            is_gift = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let closure_3 = ["succeededOnlyFields"];
const setGPlayAnalytics = GPlayAnalyticsStore.setGPlayAnalytics;
({ AnalyticEvents: unpackModuleId, Endpoints: closure_12 } = Constants);
const PaymentGateways = Constants2.PaymentGateways;
let result = size.fileFinishedImporting("modules/premium/native/handlePremiumPurchase.android.tsx");

export function useHandlePremiumPurchase() {
  let premiumDiscountOffer;
  let premiumTypeSubscription;
  let stateFromStores;
  obj = stateFromStores(premiumDiscountOffer[17]);
  const items = [SubscriptionStore];
  stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj2 = stateFromStores(premiumDiscountOffer[18]);
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  const obj3 = stateFromStores(premiumDiscountOffer[19]);
  premiumDiscountOffer = obj3.usePremiumDiscountOffer();
  const obj4 = stateFromStores(premiumDiscountOffer[20]);
  const isEligibleForBogoOffer = obj4.useIsEligibleForBogoOffer();
  let tmp5 = null != stateFromStores;
  let closure_4 = tmp5;
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let paymentGatewayPlanId;
  if (stateFromStores != null) {
    paymentGatewayPlanId = stateFromStores.paymentGatewayPlanId;
  }
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.paymentGatewaySubscriptionId;
  }
  const useCallback = paymentGatewayPlanId.useCallback;
  let closure_0 = id(function*(arg0, value) {
    let analyticsLocation;
    let application_id;
    let c0;
    let c1;
    let c10;
    let c11;
    let c12;
    let c13;
    let c2;
    let c3;
    let c4;
    let c5;
    let c7;
    let c9;
    let closure_16;
    let flag;
    let flag2;
    let formatted;
    let formatted1;
    let id2;
    let isGift;
    let obj7;
    let offerId;
    let price2;
    let tmp;
    function getOneTimeOffer(oneTimeOffers, c11) {
      closure_0 = c11;
      let tmp = null;
      if (null != c11) {
        let found;
        if (oneTimeOffers != null) {
          oneTimeOffers = oneTimeOffers.oneTimeOffers;
          if (oneTimeOffers != null) {
            found = oneTimeOffers.find((offerId) => offerId.offerId === closure_0);
          }
        }
        if (found == null) {
          found = null;
        }
        tmp = found;
      }
      return tmp;
    }
    function getOfferId(c0, c3, price1, arg3, offerIds) {
      offerIds = undefined;
      if (offerIds != null) {
        offerIds = offerIds.offerIds;
      }
      if (null != offerIds) {
        if (null != price1) {
          const tmp13 = closure_1_0(analyticsLoadId[16]).TrialIdToProductOfferId[price1.trialId];
          let tmp14;
          if (tmp13 != null) {
            tmp14 = tmp13[c0];
          }
          return tmp14;
        } else if (null != arg3) {
          const tmp9 = closure_1_0(analyticsLoadId[16]).DiscountIdToProductOfferId[arg3.discountId];
          let tmp10;
          if (tmp9 != null) {
            tmp10 = tmp9[c0];
          }
          return tmp10;
        }
      }
      let BOGO_OFFER_ID = null;
      if (c3) {
        BOGO_OFFER_ID = null;
        const tmp5 = closure_1_0;
        const tmp6 = analyticsLoadId;
        if (c0 === closure_1_0(analyticsLoadId[16]).ProductIds.PREMIUM_TIER_2_MONTHLY) {
          BOGO_OFFER_ID = tmp5(tmp6[16]).BOGO_OFFER_ID;
        }
      }
      return BOGO_OFFER_ID;
    }
    function showPurchaseErrorModal(message) {
      let intl2;
      let billingError = message;
      if (!(message instanceof closure_1_0(analyticsLoadId[11]).BillingError)) {
        const self = this;
        const self2 = this;
        billingError = new tmp(tmp2[11]).BillingError(message);
      }
      const tmpResult = closure_1_0(analyticsLoadId[12]);
      if (tmpResult.isSpendingLimitError(billingError)) {
        const tmpResult2 = closure_1_0(analyticsLoadId[12]);
        const result = tmpResult2.showSpendingLimitReachedAlert();
      } else {
        const intl = tmp(tmp2[13]).intl;
        const stringResult = intl.string(closure_1_0(analyticsLoadId[13]).t.LFFx5G);
        message = stringResult;
        const tmp6 = billingError.code !== tmp(tmp2[14]).ErrorCodes.UNKNOWN && -1 !== billingError.code && null != billingError.message;
        if (tmp6) {
          message = billingError.message;
        }
        obj = { title: intl2.string(closure_1_0(analyticsLoadId[13]).t["U+H+kd"]), body: message, isDismissable: true };
        const show = sku_id(analyticsLoadId[15]).show;
        sku_id(analyticsLoadId[15]);
        intl2 = tmp(tmp2[13]).intl;
        show(obj);
      }
    }
    if (1 === tmp4) {
      if (arg0 === 1) {
        application_id = 3;
        throw value;
      } else if (arg0 === 2) {
        application_id = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        id2 = id.getId();
        const product2 = product.getProduct(productId);
        closure_16 = getOneTimeOffer(product2, c11);
        let price;
        if (closure_16 != null) {
          price = closure_16.price;
        }
        let price1 = price;
        if (price == null) {
          price1 = undefined;
          if (product2 != null) {
            price1 = product2.price;
          }
        }
        price = price1;
        const obj6 = { isGift, analyticsLoadId, analyticsLocation, analyticsLocations };
        const obj11 = premiumSubscription(premiumDiscountOffer[21]);
        const basePurchaseFlowAnalyticsFields = obj11.getBasePurchaseFlowAnalyticsFields(obj6);
        let closure_2 = c5;
        if (c5 == null) {
          closure_2 = {};
        }
        let succeededOnlyFields = closure_2;
        succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
        let closure_21 = closure_2_4(succeededOnlyFields, isEligibleForBogoOffer);
        obj7 = { subscription_plan_gateway_plan_id: productId, sku_id, price, regular_price: price2, currency: formatted, application_id };
        const merged = Object.assign(basePurchaseFlowAnalyticsFields);
        price2 = undefined;
        if (product2 != null) {
          price2 = product2.price;
        }
        formatted = undefined;
        if (product2 != null) {
          const str = product2.currencyCode;
          formatted = str.toLowerCase();
        }
        const merged1 = Object.assign(closure_21);
        const obj9 = { succeededOnlyFields };
        const merged2 = Object.assign(obj7);
        prop(productId, obj9);
        offerId = getOfferId(productId, analyticsLocation, price1, closure_2, product2);
        c7 = 1;
        const tmp108 = isGift;
        if (!tmp108) {
          const tmp109 = flag;
          if (!tmp109) {
            const tmp111 = closure_4 && !flag2;
            if (tmp111) {
              if (c12 != null) {
                const obj12 = { paymentGateway: constants2.GOOGLE };
                tmp137(obj12);
              }
              c7 = 0;
            } else {
              const tmp115 = null != closure_6 && null != c7 && null != closure_5;
              if (tmp115) {
                const obj15 = premiumSubscription(premiumDiscountOffer[25]);
                let result = obj15.updatePendingDowngrade(productId, closure_6, c7, closure_5);
              }
              const obj13 = { productId, premiumSubscription, offerId };
              let c8 = 6;
              application_id = 1;
              const obj14 = { value: validatePurchase(obj13), done: false };
              return obj14;
            }
          }
        }
        const tmp141 = isGift && null != c10;
        if (tmp141) {
          const tmp146 = null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache && null != premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache[productId];
          if (tmp146) {
            delete premiumTrialOffer(undefined, premiumDiscountOffer[22]).giftInfoOptionsCache[productId];
          }
          const obj16 = {};
          const giftInfoOptionsCache = premiumTrialOffer(premiumDiscountOffer[22]).giftInfoOptionsCache;
          const merged3 = Object.assign(c10);
          giftInfoOptionsCache[productId] = obj16;
        }
        if (null != c11) {
          if (null == closure_16) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            let self = this;
            let self2 = this;
            const error = new Error("Google Play offer " + c11 + " is unavailable for " + productId);
            throw error;
          }
        }
        price2 = null;
        if (null != product2) {
          if (null != price) {
            const obj20 = premiumSubscription(premiumDiscountOffer[23]);
            price2 = obj20.convertToMinorCurrencyUnits(price / 100, product2.currencyCode);
            c7 = 1;
          }
        }
        const obj17 = { productId, premiumSubscription, offerId: null, currency: formatted1, price: price2, isGift };
        formatted1 = undefined;
        const tmp180 = validatePurchase;
        if (product2 != null) {
          if (product2.currencyCode != null) {
            formatted1 = str2.toLowerCase();
          }
        }
        c8 = 4;
        application_id = 1;
        const obj18 = { value: tmp180(obj17), done: false };
        return obj18;
      }
    } else if (2 === tmp4) {
      c7 = 0;
      let message = closure_6;
      const obj19 = { payment_gateway: constants2.GOOGLE, error_message: message.message };
      const track = premiumTrialOffer(premiumDiscountOffer[26]).track;
      const PAYMENT_FLOW_FAILED = constants.PAYMENT_FLOW_FAILED;
      const tmp38 = premiumTrialOffer(premiumDiscountOffer[26]);
      const merged4 = Object.assign(obj7);
      track(PAYMENT_FLOW_FAILED, obj19);
      if (constants2 != null) {
        constants2();
      }
      const obj10 = premiumSubscription(premiumDiscountOffer[24]);
      const result1 = obj10.captureBillingException(message);
      showPurchaseErrorModal(message);
      if (message instanceof premiumTrialOffer(premiumDiscountOffer[10])) {
        throw message;
      }
    } else if (3 === tmp4) {
      c7 = 1;
      let closure_25 = closure_6;
      const obj8 = premiumSubscription(premiumDiscountOffer[24]);
      const result2 = obj8.captureBillingException(closure_25);
    } else if (4 === tmp4) {
      if (arg0 === 1) {
        application_id = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        application_id = 3;
        const obj21 = { value, done: true };
        return obj21;
      } else {
        offerId = undefined;
        const purchase = premiumSubscription(premiumDiscountOffer[25]).purchase;
        const tmp19 = premiumSubscription(premiumDiscountOffer[25]);
        const tmp20 = productId;
        const tmp21 = id2;
        if (closure_16 != null) {
          offerId = closure_16.offerId;
        }
        analyticsLocation = offerId;
        if (offerId == null) {
          analyticsLocation = null;
        }
        c8 = 5;
        application_id = 1;
        const obj22 = { value: purchase(tmp20, tmp21, analyticsLocation), done: false };
        return obj22;
      }
    } else if (5 === tmp4) {
      if (arg0 === 1) {
        application_id = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        application_id = 3;
        const obj23 = { value, done: true };
        return obj23;
      }
    } else if (6 === tmp4) {
      if (arg0 === 1) {
        application_id = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        application_id = 3;
        const obj24 = { value, done: true };
        return obj24;
      } else {
        let tmp5 = closure_4;
        let tmp6 = closure_5;
        const obj2 = premiumSubscription(premiumDiscountOffer[25]);
        let tmp9 = productId;
        let tmp10 = id2;
        let tmp13 = offerId;
        let tmp14 = obj2;
        c8 = 7;
        application_id = 1;
        const obj25 = { value: obj2.subscribe(productId, id2, closure_6, c7, offerId), done: false };
        return obj25;
      }
    } else if (arg0 === 1) {
      application_id = 3;
      throw value;
    } else if (arg0 === 2) {
      c7 = 0;
      application_id = 3;
      obj = { value, done: true };
      return obj;
    }
    yield "HermesInternal";
    closure_5 = tmp;
    ({ productId: c0, skuId: c1, analyticsLoadId: c2, analyticsLocation: c3, analyticsLocations: c4, analyticsData: c5, isGift } = premiumSubscription);
    if (isGift === undefined) {
      isGift = false;
    }
    flag = tmp207.isOneTimePurchase ?? false;
    flag2 = tmp207.allowPlanChange ?? true;
    ({ applicationId: c9, giftInfoOptions: c10, googleOfferId: c11, onPurchaseComplete: c12, onPurchaseError: c13 } = premiumSubscription);
    return "flexDirection";
  });
  const items1 = [tmp5, paymentGatewayPlanId, prop, id, premiumTrialOffer, premiumDiscountOffer, stateFromStores, isEligibleForBogoOffer];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items1);
}
