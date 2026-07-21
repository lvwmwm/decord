// Module ID: 7154
// Function ID: 57721
// Name: handleConnectionStateUpdated
// Dependencies: []

// Module 7154 (handleConnectionStateUpdated)
function handleConnectionStateUpdated(connectionState) {
  connectionState = connectionState.connectionState;
  importDefault(dependencyMap[16]).dispatch({ type: "GPLAY_UPDATE_CONNECTION_STATE", connectionState });
  if (connectionState === constants.CONNECTED) {
    const userCountry = arg1(dependencyMap[17]).loadUserCountry();
    userCountry.finally(() => callback(closure_2[17]).loadSkus());
    const obj2 = arg1(dependencyMap[17]);
  }
}
function handlePurchaseStateUpdated(arg0) {
  let billingResult;
  let isActivePurchase;
  ({ billingResult, isActivePurchase } = arg0);
  importDefault(dependencyMap[16]).dispatch({ type: "GPLAY_UPDATE_PURCHASE_STATE", billingResult, isActivePurchase });
}
function handlePurchaseUpdated() {
  return _handlePurchaseUpdated(...arguments);
}
async function _handlePurchaseUpdated(arg0, arg1) {
  const fn = function*(purchase) {
    purchase = purchase.purchase;
    yield undefined;
    if (!purchasingProduct.isPurchasingProduct(purchase.productId)) {
      state.getState().analyticsByProductId[purchase.productId];
      let giftOptionsForKey = tmp6;
      let obj = callback2(closure_2[18]);
      const v3Result = obj.v3(purchase.purchaseToken);
      if (null != closure_24[purchase.productId]) {
        let obj1 = callback2(closure_2[16]);
        obj = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: v3Result };
        obj = {};
        const merged = Object.assign(giftOptionsForKey);
        obj.giftOptions = obj;
        obj1.dispatch(obj);
      } else {
        giftOptionsForKey = giftOptionsForKey.getGiftOptionsForKey(v3Result);
      }
      let obj4 = callback2(closure_2[16]);
      obj1 = { type: "GPLAY_VERIFICATION_START", productId: purchase.productId };
      obj4.dispatch(obj1);
      const IAPProductIds = callback(closure_2[19]).IAPProductIds;
      if (IAPProductIds.includes(purchase.productId)) {
        let obj6 = callback2(closure_2[20])();
        const subtractResult = obj6.subtract(callback(closure_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days");
        let obj8 = callback(closure_2[19]);
        const planIdForGift = obj8.getPlanIdForGift(purchase.productId);
        let tmp33;
        if (null != planIdForGift) {
          let skuId;
          if (null != closure_19[planIdForGift]) {
            skuId = tmp35.skuId;
          }
          tmp33 = skuId;
        }
        let obj9 = callback(closure_2[21]);
        const obj2 = { status: constants2.DRAFT, createdAfter: obj6.subtract(callback(closure_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString(), skuId: tmp33, paymentGateway: constants.GOOGLE, isGift: true };
        const arr = yield obj9.getOrders(obj2);
        if (arr.length > 0) {
          const id = arr[0].id;
          const obj3 = { orderId: id, productId: purchase.productId, skuId: tmp33 };
          closure_21.info("[handlePurchaseUpdated] Signing order from backend query", obj3);
          yield callback(closure_2[21]).markOrderAsSigningInProgress(id);
          const obj14 = callback(closure_2[21]);
        } else {
          obj4 = { productId: purchase.productId, skuId: tmp38 };
          closure_21.warn("[handlePurchaseUpdated] No draft order found for signing", obj4);
        }
        const tmp38 = tmp33;
        const toISOStringResult = obj6.subtract(callback(closure_2[21]).DRAFT_ORDER_LOOKBACK_DAYS, "days").toISOString();
      }
      const tmp58 = yield callback(closure_2[17]).verifyPurchase(purchase, giftOptionsForKey);
      let tmp61 = tmp60;
      if (null != tmp58) {
        tmp61 = null != giftOptionsForKey;
      }
      if (tmp61) {
        const obj5 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: v3Result };
        callback2(closure_2[16]).dispatch(obj5);
        const productId = purchase.productId;
        delete r10[r8];
        const obj16 = callback2(closure_2[16]);
      }
      if (null != tmp58) {
        obj6 = { type: "GPLAY_PURCHASE_VERIFIED", productId: purchase.productId };
        callback2(closure_2[16]).dispatch(obj6);
        const obj18 = callback2(closure_2[16]);
      }
      if (null != tmp58) {
        const SubscriptionProductIds = callback(closure_2[19]).SubscriptionProductIds;
        if (!SubscriptionProductIds.includes(purchase.productId)) {
          const result = callback(closure_2[17]).sendPaymentCompleteAnalytics(purchase);
          const _HermesInternal = HermesInternal;
          closure_21.info("[handlePurchaseUpdated] One Time Purchase verified and consumed: " + purchase.productId);
          const obj20 = callback(closure_2[17]);
        }
        const obj7 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
        callback2(closure_2[16]).dispatch(obj7);
        const obj29 = callback2(closure_2[16]);
      }
      if (null != tmp58) {
        if (null != tmp59.pendingDowngrade) {
          obj8 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: tmp58.pendingDowngrade };
          callback2(closure_2[16]).dispatch(obj8);
          const obj26 = callback2(closure_2[16]);
          yield callback(closure_2[23]).fetchSubscriptions();
          const obj28 = callback(closure_2[23]);
        }
      }
      if (purchase.isActive) {
        const tmp91 = yield closure_37();
        obj9 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
        callback2(closure_2[16]).dispatch(obj9);
        return tmp91;
      } else {
        const obj21 = callback(closure_2[23]);
        const tmp85 = yield callback(closure_2[23]).fetchSubscriptions();
        const obj10 = { type: "GPLAY_VERIFICATION_END", productId: purchase.productId };
        callback2(closure_2[16]).dispatch(obj10);
        return tmp85;
      }
      const obj15 = callback(closure_2[17]);
    }
  };
  fn.next();
  return fn;
}
function handleDowngradeCommand() {
  return _handleDowngradeCommand(...arguments);
}
async function _handleDowngradeCommand(arg0, arg1) {
  const fn = function*(downgradeCommand) {
    downgradeCommand = downgradeCommand.downgradeCommand;
    yield undefined;
    if (constants.EXECUTE === downgradeCommand) {
      yield function executePendingDowngrade() {
        return callback(...arguments);
      }();
    } else if (constants.CLEAR === downgradeCommand) {
      callback();
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid downgrade state " + downgradeCommand);
      throw error;
    }
  };
  fn.next();
  return fn;
}
async function _executePendingDowngrade() {
  const pendingDowngrade = pendingDowngrade.getPendingDowngrade();
  if (null != pendingDowngrade) {
    callback2(closure_2[16]).dispatch({});
    const obj2 = callback2(closure_2[16]);
    yield callback(closure_2[17]).downgradeSubscription(tmp2);
    callback3();
    yield closure_37();
    const obj3 = callback(closure_2[17]);
    const dispatch = callback2(closure_2[16]).dispatch;
    dispatch({ "Null": "isArray", "Null": "isArray" });
    const tmp12 = callback2(closure_2[16]);
    callback2(closure_2[16]).dispatch({ "Null": "isArray", "Null": "isArray" });
    return dispatch;
  }
}
function clearPendingDowngrade() {
  importDefault(dependencyMap[16]).dispatch({});
}
function fetchAndAlertActiveSubscription() {
  return _fetchAndAlertActiveSubscription(...arguments);
}
async function _fetchAndAlertActiveSubscription() {
  let premiumTypeSubscription;
  yield premiumTypeSubscription(closure_2[23]).fetchSubscriptions();
  premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
  if (null == premiumTypeSubscription) {
    const _Error = Error;
    const intl = premiumTypeSubscription(closure_2[26]).intl;
    const error = new Error(intl.string(premiumTypeSubscription(closure_2[26]).t.PjfUXe));
    throw error;
  } else {
    callback();
    callback2(() => {
      let obj = callback(closure_2[25]);
      obj = {
        importer() {
          return callback(paths[28])(paths[27], paths.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              let closure_0 = arg0;
              const obj = {};
              const merged = Object.assign(arg0);
              obj["subscription"] = closure_0;
              obj["onClose"] = function onClose() { ... };
              return callback(closure_0, obj);
            };
          });
        }
      };
      obj.openLazy(obj);
    });
  }
  const obj = premiumTypeSubscription(closure_2[23]);
}
function handleAppStateUpdated() {
  return _handleAppStateUpdated(...arguments);
}
async function _handleAppStateUpdated(arg0, arg1) {
  const fn = function*(state) {
    yield undefined;
    if (ready.isReady()) {
      if (authenticated.isAuthenticated()) {
        if (state.state === constants.ACTIVE) {
          yield closure_22.loadPurchases();
        }
      }
    }
  };
  fn.next();
  return fn;
}
let closure_3 = ["Kaaba"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ setPaymentSuccess: closure_7, showOldPaymentFlowSuccess: closure_8 } = arg1(dependencyMap[5]));
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const useGPlayAnalyticsStore = arg1(dependencyMap[9]).useGPlayAnalyticsStore;
const tmp4 = arg1(dependencyMap[5]);
({ GPlayConnectionState: closure_13, GPlayDowngradeCommand: closure_14 } = arg1(dependencyMap[10]));
const tmp5 = arg1(dependencyMap[10]);
({ AnalyticEvents: closure_15, AppStates: closure_16, PaymentGateways: closure_17 } = arg1(dependencyMap[11]));
const OrderStatus = arg1(dependencyMap[12]).OrderStatus;
const SubscriptionPlanInfo = arg1(dependencyMap[13]).SubscriptionPlanInfo;
const jsx = arg1(dependencyMap[14]).jsx;
let importDefaultResult = importDefault(dependencyMap[15]);
importDefaultResult = new importDefaultResult("GPlayManager.android");
const BillingManager = tmp3.NativeModules.BillingManager;
const nativeEventEmitter = new tmp3.NativeEventEmitter(BillingManager);
let obj = {};
let closure_25 = null;
let closure_26 = null;
let closure_27 = null;
let closure_28 = null;
obj = {
  giftInfoOptionsCache: obj,
  initialize() {
    BillingManager.open();
    let closure_25 = nativeEventEmitter.addListener("billing-manager-connection-state-updated", handleConnectionStateUpdated);
    let closure_26 = nativeEventEmitter.addListener("billing-manager-purchase-state-updated", handlePurchaseStateUpdated);
    let closure_27 = nativeEventEmitter.addListener("billing-manager-purchase-updated", handlePurchaseUpdated);
    let closure_28 = nativeEventEmitter.addListener("billing-manager-downgrade-command", handleDowngradeCommand);
    const subscription = importDefault(dependencyMap[16]).subscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  },
  terminate() {
    BillingManager.close();
    if (null != closure_25) {
      closure_25.remove();
    }
    if (null != closure_26) {
      closure_26.remove();
    }
    if (null != closure_27) {
      closure_27.remove();
    }
    if (null != closure_28) {
      closure_28.remove();
    }
    importDefault(dependencyMap[16]).unsubscribe("APP_STATE_UPDATE", handleAppStateUpdated);
  }
};
const tmp6 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/gplay/native/GPlayManager.android.tsx");

export default obj;
