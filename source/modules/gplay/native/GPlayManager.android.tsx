// Module ID: 7159
// Function ID: 57795
// Name: handleConnectionStateUpdated
// Dependencies: [29, 5, 31, 27, 6659, 6660, 1194, 3782, 5619, 7119, 5620, 653, 4113, 1851, 33, 3, 686, 7160, 1193, 5622, 3712, 6668, 3791, 4451, 675, 4471, 1212, 7161, 1934, 4337, 6649, 2]

// Module 7159 (handleConnectionStateUpdated)
import module_4337 from "module_4337";
import closure_5 from "usePremiumPlanPurchasedStore";
import "set";
import get_ActivityIndicator from "getHeaderBackground";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { useGPlayAnalyticsStore } from "setGPlayAnalytics";
import GPlayConnectionState from "GPlayConnectionState";
import ME from "ME";
import { OrderStatus } from "CustomCheckoutFlow";
import { SubscriptionPlanInfo } from "GuildFeatures";
import { jsx } from "jsxProd";
import importDefaultResult from "get ActivityIndicator";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_7;
let closure_8;
const require = arg1;
function handleConnectionStateUpdated(connectionState) {
  connectionState = connectionState.connectionState;
  importDefault(686).dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === constants.CONNECTED) {
    const userCountry = require(7160) /* _createForOfIteratorHelperLoose */.loadUserCountry();
    userCountry.finally(() => outer1_0(outer1_2[17]).loadSkus());
    const obj2 = require(7160) /* _createForOfIteratorHelperLoose */;
  }
}
function handlePurchaseStateUpdated(arg0) {
  let billingResult;
  let isActivePurchase;
  ({ billingResult, isActivePurchase } = arg0);
  importDefault(686).dispatch({ type: "GPLAY_UPDATE_PURCHASE_STATE", billingResult, isActivePurchase });
}
function handlePurchaseUpdated() {
  return _handlePurchaseUpdated(...arguments);
}
async function _handlePurchaseUpdated(arg0, arg1) {
  let iter = (function*(purchase) {
    purchase = purchase.purchase;
    yield undefined;
    if (!outer2_11.isPurchasingProduct(purchase.productId)) {
      outer2_12.getState().analyticsByProductId[purchase.productId];
      let giftOptionsForKey = tmp8;
      let obj = outer2_1(outer2_2[18]);
      const v3Result = obj.v3(purchase.purchaseToken);
      if (null != outer2_24[purchase.productId]) {
        let obj1 = outer2_1(outer2_2[16]);
        obj = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: v3Result };
        obj = {};
        const merged = Object.assign(giftOptionsForKey);
        obj.giftOptions = obj;
        obj1.dispatch(obj);
      } else {
        giftOptionsForKey = outer2_6.getGiftOptionsForKey(v3Result);
      }
      let obj4 = outer2_1(outer2_2[16]);
      obj1 = { type: "GPLAY_VERIFICATION_START", productId: purchase.productId };
      obj4.dispatch(obj1);
      const IAPProductIds = outer2_0(outer2_2[19]).IAPProductIds;
      if (IAPProductIds.includes(purchase.productId)) {
        let obj6 = outer2_1(outer2_2[20])();
        const subtractResult = obj6.subtract(outer2_0(outer2_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days");
        let obj8 = outer2_0(outer2_2[19]);
        const planIdForGift = obj8.getPlanIdForGift(purchase.productId);
        let tmp35;
        if (null != planIdForGift) {
          let skuId;
          if (null != outer2_19[planIdForGift]) {
            skuId = tmp37.skuId;
          }
          tmp35 = skuId;
        }
        let obj9 = outer2_0(outer2_2[21]);
        const obj2 = { status: outer2_18.DRAFT, createdAfter: obj6.subtract(outer2_0(outer2_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString(), skuId: tmp35, paymentGateway: outer2_17.GOOGLE, isGift: true };
        const arr = yield obj9.getOrders(obj2);
        if (arr.length > 0) {
          const id = arr[0].id;
          const obj3 = { orderId: id, productId: purchase.productId, skuId: tmp35 };
          outer2_21.info("[handlePurchaseUpdated] Signing order from backend query", obj3);
          yield outer2_0(outer2_2[21]).markOrderAsSigningInProgress(id);
          const obj14 = outer2_0(outer2_2[21]);
        } else {
          obj4 = { productId: purchase.productId, skuId: tmp40 };
          outer2_21.warn("[handlePurchaseUpdated] No draft order found for signing", obj4);
        }
        tmp40 = tmp35;
        const toISOStringResult = obj6.subtract(outer2_0(outer2_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
      }
      const tmp60 = yield outer2_0(outer2_2[17]).verifyPurchase(purchase, giftOptionsForKey);
      let tmp63 = tmp62;
      if (null != tmp60) {
        tmp63 = null != giftOptionsForKey;
      }
      if (tmp63) {
        const obj5 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: v3Result };
        outer2_1(outer2_2[16]).dispatch(obj5);
        const productId = purchase.productId;
        delete tmp2[tmp];
        const obj16 = outer2_1(outer2_2[16]);
      }
      if (null != tmp60) {
        obj6 = { type: "GPLAY_PURCHASE_VERIFIED", productId: purchase.productId };
        outer2_1(outer2_2[16]).dispatch(obj6);
        const obj18 = outer2_1(outer2_2[16]);
      }
      if (null != tmp60) {
        const SubscriptionProductIds = outer2_0(outer2_2[19]).SubscriptionProductIds;
        if (!SubscriptionProductIds.includes(purchase.productId)) {
          const result = outer2_0(outer2_2[17]).sendPaymentCompleteAnalytics(purchase);
          const _HermesInternal = HermesInternal;
          outer2_21.info("[handlePurchaseUpdated] One Time Purchase verified and consumed: " + purchase.productId);
          const obj20 = outer2_0(outer2_2[17]);
        }
        const obj7 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
        outer2_1(outer2_2[16]).dispatch(obj7);
        const obj29 = outer2_1(outer2_2[16]);
      }
      if (null != tmp60) {
        if (null != tmp61.pendingDowngrade) {
          obj8 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: tmp60.pendingDowngrade };
          outer2_1(outer2_2[16]).dispatch(obj8);
          const obj26 = outer2_1(outer2_2[16]);
          yield outer2_0(outer2_2[23]).fetchSubscriptions();
          const obj28 = outer2_0(outer2_2[23]);
        }
      }
      if (purchase.isActive) {
        const tmp93 = yield outer2_37();
        obj9 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
        outer2_1(outer2_2[16]).dispatch(obj9);
        return tmp93;
      } else {
        const obj21 = outer2_0(outer2_2[23]);
        const tmp87 = yield outer2_0(outer2_2[23]).fetchSubscriptions();
        const obj10 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
        outer2_1(outer2_2[16]).dispatch(obj10);
        return tmp87;
      }
      const obj15 = outer2_0(outer2_2[17]);
    }
  })();
  iter.next();
  return iter;
}
function handleDowngradeCommand() {
  return _handleDowngradeCommand(...arguments);
}
async function _handleDowngradeCommand(arg0, arg1) {
  let iter = (function*(downgradeCommand) {
    downgradeCommand = downgradeCommand.downgradeCommand;
    yield undefined;
    if (outer2_14.EXECUTE === downgradeCommand) {
      yield (function executePendingDowngrade() {
        return outer3_35(...arguments);
      })();
    } else if (outer2_14.CLEAR === downgradeCommand) {
      outer2_36();
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid downgrade state " + downgradeCommand);
      throw error;
    }
  })();
  iter.next();
  return iter;
}
async function _executePendingDowngrade() {
  const pendingDowngrade = outer2_11.getPendingDowngrade();
  if (null != pendingDowngrade) {
    outer2_1(outer2_2[16]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: true });
    const obj2 = outer2_1(outer2_2[16]);
    yield outer2_0(outer2_2[17]).downgradeSubscription(tmp2);
    outer2_36();
    yield outer2_37();
    const obj3 = outer2_0(outer2_2[17]);
    const dispatch = outer2_1(outer2_2[16]).dispatch;
    dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
    const tmp12 = outer2_1(outer2_2[16]);
    outer2_1(outer2_2[16]).dispatch({ type: "GPLAY_UPDATE_IS_DOWNGRADING", isDowngrading: false });
    return dispatch;
  }
}
function clearPendingDowngrade() {
  importDefault(686).dispatch({ type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: null });
}
function fetchAndAlertActiveSubscription() {
  return _fetchAndAlertActiveSubscription(...arguments);
}
async function _fetchAndAlertActiveSubscription() {
  let premiumTypeSubscription;
  yield outer2_0(outer2_2[23]).fetchSubscriptions();
  premiumTypeSubscription = outer2_10.getPremiumTypeSubscription();
  if (null == premiumTypeSubscription) {
    const _Error = Error;
    const intl = outer2_0(outer2_2[26]).intl;
    const error = new Error(intl.string(outer2_0(outer2_2[26]).t.PjfUXe));
    throw error;
  } else {
    outer2_7();
    outer2_8(() => {
      let obj = outer3_1(outer3_2[25]);
      obj = {
        importer() {
          return outer4_0(outer4_2[28])(outer4_2[27], outer4_2.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              let closure_0 = arg0;
              const obj = {};
              const merged = Object.assign(arg0);
              obj["subscription"] = outer3_0;
              obj["onClose"] = function onClose() { ... };
              return outer6_20(closure_0, obj);
            };
          });
        }
      };
      obj.openLazy(obj);
    });
  }
  let obj = outer2_0(outer2_2[23]);
}
function handleAppStateUpdated() {
  return _handleAppStateUpdated(...arguments);
}
async function _handleAppStateUpdated(arg0, arg1) {
  let iter = (function*(state) {
    yield undefined;
    if (outer2_11.isReady()) {
      if (outer2_9.isAuthenticated()) {
        if (state.state === outer2_16.ACTIVE) {
          yield outer2_22.loadPurchases();
        }
      }
    }
  })();
  iter.next();
  return iter;
}
let closure_3 = ["succeededOnlyFields"];
({ setPaymentSuccess: closure_7, showOldPaymentFlowSuccess: closure_8 } = usePremiumPlanPurchasedStore);
({ GPlayConnectionState: closure_13, GPlayDowngradeCommand: closure_14 } = GPlayConnectionState);
({ AnalyticEvents: closure_15, AppStates: closure_16, PaymentGateways: closure_17 } = ME);
importDefaultResult = new importDefaultResult("GPlayManager.android");
const BillingManager = get_ActivityIndicator.NativeModules.BillingManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(BillingManager);
let obj = {};
let c25 = null;
let c26 = null;
let c27 = null;
let c28 = null;
obj = {
  giftInfoOptionsCache: obj,
  initialize() {
    BillingManager.open();
    let closure_25 = nativeEventEmitter.addListener("billing-manager-connection-state-updated", handleConnectionStateUpdated);
    let closure_26 = nativeEventEmitter.addListener("billing-manager-purchase-state-updated", handlePurchaseStateUpdated);
    let closure_27 = nativeEventEmitter.addListener("billing-manager-purchase-updated", handlePurchaseUpdated);
    let closure_28 = nativeEventEmitter.addListener("billing-manager-downgrade-command", handleDowngradeCommand);
    const subscription = importDefault(686).subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  },
  terminate() {
    BillingManager.close();
    if (null != c25) {
      c25.remove();
    }
    if (null != c26) {
      c26.remove();
    }
    if (null != c27) {
      c27.remove();
    }
    if (null != c28) {
      c28.remove();
    }
    importDefault(686).unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  }
};
let result = require("result").fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default obj;
