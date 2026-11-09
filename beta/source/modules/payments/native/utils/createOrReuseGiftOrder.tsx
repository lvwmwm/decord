// Module ID: 10723
// Function ID: 10724
// Name: createOrReuseGiftOrder
// Dependencies: [5, 19, 5872, 1387, 1083, 3, 1377, 10031, 10032, 7690, 2166, 4953, 2]
// Exports: useCreateOrReuseGiftOrder

// Module 10723 (createOrReuseGiftOrder)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1083 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PaymentConstants from "PaymentConstants" /* 5872 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6;

const ItemPurchaseType = PaymentConstants.ItemPurchaseType;
const SubscriptionPlanInfo = PremiumConstants.SubscriptionPlanInfo;
const PaymentGateways = Constants.PaymentGateways;
const tmp2 = new LoggerDefault("createOrReuseGiftOrder");
let closure_8 = tmp2;
let result = size.fileFinishedImporting("modules/payments/native/utils/createOrReuseGiftOrder.tsx");

export function useCreateOrReuseGiftOrder(GiftPurchaseButton) {
  let mobileStoreFront;
  let obj = mobileStoreFront(10032);
  mobileStoreFront = obj.useMobileStoreFront();
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let c1;
    let c2;
    let items;
    let obj12;
    let subtractResult;
    function getGiftPaymentGateway() {
      let APPLE;
      const obj = closure_1_0(external_product_id[6]);
      if (obj.isAndroid()) {
        APPLE = constants.GOOGLE;
      } else {
        const tmpResult = closure_1_0(external_product_id[6]);
        if (tmpResult.isIOS()) {
          const NitroGiftACOMExperiment = tmp(tmp2[7]).NitroGiftACOMExperiment;
          if (NitroGiftACOMExperiment.getConfig({ location: "useCreateOrReuseGiftOrder" }).enabled) {
            APPLE = constants.APPLE_ADVANCED_COMMERCE;
          }
        }
        APPLE = constants.APPLE;
      }
      return APPLE;
    }
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      let skuId;
      try {
        let subscriptionPlanId;
        let recipientUserId;
        let external_product_id;
        let paymentGateway;
        let obj5;
        let country;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            subscriptionPlanId = undefined;
            recipientUserId = undefined;
            external_product_id = undefined;
            ({ planId: c0, recipientUserId: c1, productId: c2 } = location);
            skuId = undefined;
            paymentGateway = undefined;
            obj5 = undefined;
            country = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "flexDirection", done: true };
          }
        } else {
          let error;
          if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              skuId = SubscriptionPlanInfo[subscriptionPlanId];
              if (null == skuId) {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const self3 = this;
                const self4 = this;
                error = new Error("Invalid plan id: " + subscriptionPlanId);
                throw error;
              } else {
                skuId = skuId.skuId;
                paymentGateway = getGiftPaymentGateway();
                let tmp23;
                if (paymentGateway !== constants2.APPLE_ADVANCED_COMMERCE) {
                  obj5 = { line_items: items };
                  const obj6 = { external_product_id };
                  items = [obj6];
                  tmp23 = obj5;
                }
                obj5 = tmp23;
                c4 = 1;
                country = undefined;
                if (recipientUserId != null) {
                  country = recipientUserId.country;
                }
                if (paymentGateway === constants2.APPLE_ADVANCED_COMMERCE) {
                  if (null == country) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error1 = new Error("Missing App Store country");
                    throw error1;
                  }
                }
                const obj7 = { skuId, paymentGateway, recipientUserId, purchaseType: constants.ONE_TIME, isGift: true, createdAfter: subtractResult.toISOString(), subscriptionPlanId, externalGatewayFacet: obj5, countryCode: country };
                const getOrCreateOrder = location(dependencyMap[9]).getOrCreateOrder;
                const tmp37 = location(dependencyMap[9]);
                const obj9 = mobileStoreFront(dependencyMap[10])();
                const utcResult = obj9.utc();
                subtractResult = utcResult.subtract(location(dependencyMap[9]).DRAFT_ORDER_LOOKBACK_DAYS, "days");
                c5 = 3;
                c6 = 1;
                const obj8 = { value: getOrCreateOrder(obj7), done: false };
                return obj8;
              }
            }
          } else if (2 === tmp4) {
            c4 = 0;
            error = skuId;
            const obj10 = { error, skuId, location };
            logger.error("Failed to create order for gift purchase", obj10);
            const obj11 = { tags: obj12 };
            obj12 = { skuId, source: "" + location + "_createOrder" };
            const _HermesInternal = HermesInternal;
            const captureBillingException = location(dependencyMap[11]).captureBillingException;
            const tmp16 = location(dependencyMap[11]);
            const result = captureBillingException(error, obj11);
            throw error;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            c4 = 0;
            c6 = 3;
            let obj = { value, done: true };
            return obj;
          }
        }
      } catch (tmp56) {
        skuId = tmp56;
        if (0 === c4) {
          c6 = 3;
          throw tmp56;
        } else {
          c5 = 2;
        }
      }
    }
  });
  let items = [GiftPurchaseButton, mobileStoreFront];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
}
