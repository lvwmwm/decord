// Module ID: 8809
// Function ID: 69425
// Name: importDefaultResult1
// Dependencies: [5, 57, 31, 8268, 7130, 8194, 1849, 653, 5622, 1851, 33, 3, 6667, 6668, 3791, 8810, 8781, 1212, 8811, 3776, 5624, 8740, 7119, 566, 8812, 8776, 8271, 8265, 4471, 675, 5484, 7110, 686, 477, 7156, 2]
// Exports: NativeGiftContextProvider

// Module 8809 (importDefaultResult1)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_slicedToArray";
import dismissGiftIntent from "dismissGiftIntent";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import GuildFeatures from "GuildFeatures";
import { jsx } from "set";
import importDefaultResult1 from "_isNativeReflectConstruct";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
require("GPlayConnectionState").GPlayBillingResult;
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: closure_13, SubscriptionPlanInfo: closure_14 } = GuildFeatures);
importDefaultResult1 = new importDefaultResult1("NativeGiftContext");
const importDefaultResultResult = importDefaultResult(require("createDefinedContext")(), 3);
let closure_17 = importDefaultResultResult[0];
let result = require("result").fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = function NativeGiftContextProvider(basePurchaseAnalytics) {
  let children;
  let initialOrder;
  let onClose;
  let planInterval;
  let premiumType;
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  let recipientUserId = basePurchaseAnalytics.recipientUserId;
  ({ premiumType, planInterval, onClose } = basePurchaseAnalytics);
  const setCurrentAnalyticsStep = basePurchaseAnalytics.setCurrentAnalyticsStep;
  let first;
  let React;
  let first1;
  let c7;
  let first2;
  let closure_9;
  let first3;
  let closure_11;
  let first4;
  let closure_13;
  let first5;
  let jsx;
  let first6;
  let redux;
  let first7;
  let closure_19;
  let first8;
  let c21;
  let first9;
  let c23;
  let first10;
  let closure_25;
  let orderContext;
  let planIdForPremiumType;
  let productIdForGift;
  let skuId;
  let androidShopOrdersEnabled;
  let handlePremiumPurchase;
  let stateFromStoresArray;
  let fetchClaimableGiftingPromotionRewardSkuIds;
  let c34;
  let enabled;
  let stateFromStores;
  let c37;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  ({ initialOrder, children } = basePurchaseAnalytics);
  if (null == premiumType) {
    premiumType = first4.TIER_2;
  }
  const tmp3 = first(React.useState(premiumType), 2);
  first = tmp3[0];
  React = tmp5;
  recipientUserId(onClose[15]);
  if (null != planInterval) {
    const tmp11 = first(React.useState(planInterval), 2);
    first1 = tmp11[0];
    c7 = tmp13;
    let obj = basePurchaseAnalytics(onClose[16]);
    const tmp17 = first(React.useState(obj.useGiftStyles()[0]), 2);
    first2 = tmp17[0];
    closure_9 = tmp17[1];
    let intl = basePurchaseAnalytics(onClose[17]).intl;
    let tmp19 = first(React.useState(intl.string(basePurchaseAnalytics(onClose[17]).t.ZkOo1U)), 2);
    first3 = tmp19[0];
    closure_11 = tmp19[1];
    const tmp21 = first(React.useState(undefined), 2);
    first4 = tmp21[0];
    closure_13 = tmp21[1];
    const tmp23 = first(React.useState(undefined), 2);
    first5 = tmp23[0];
    jsx = tmp23[1];
    const tmp25 = first(React.useState(undefined), 2);
    first6 = tmp25[0];
    redux = tmp25[1];
    const tmp27 = first(React.useState(false), 2);
    first7 = tmp27[0];
    closure_19 = tmp27[1];
    const tmp29 = first(React.useState(null), 2);
    first8 = tmp29[0];
    c21 = tmp31;
    const tmp32 = first(React.useState(), 2);
    first9 = tmp32[0];
    c23 = tmp34;
    const tmp35 = first(React.useState(null), 2);
    first10 = tmp35[0];
    closure_25 = tmp35[1];
    let obj1 = basePurchaseAnalytics(onClose[18]);
    orderContext = obj1.useOrderContext(initialOrder, "NativeGiftContext");
    let obj2 = basePurchaseAnalytics(onClose[19]);
    planIdForPremiumType = obj2.getPlanIdForPremiumType(first, first1);
    let obj3 = basePurchaseAnalytics(onClose[20]);
    productIdForGift = obj3.getProductIdForGift(planIdForPremiumType);
    if (null == first5[planIdForPremiumType]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
      throw error;
    } else {
      skuId = tmp41.skuId;
      obj = { location: "NativeGiftContext" };
      androidShopOrdersEnabled = basePurchaseAnalytics(onClose[21]).useAndroidShopOrdersEnabled(obj);
      let items = [androidShopOrdersEnabled, productIdForGift];
      const memo = React.useMemo(() => {
        let tmp;
        if (androidShopOrdersEnabled) {
          let obj = {};
          obj = { external_product_id: productIdForGift };
          const items = [obj];
          obj.line_items = items;
          tmp = obj;
        }
        return tmp;
      }, items);
      const obj11 = basePurchaseAnalytics(onClose[21]);
      handlePremiumPurchase = basePurchaseAnalytics(onClose[22]).useHandlePremiumPurchase();
      const obj13 = basePurchaseAnalytics(onClose[22]);
      const items1 = [c7];
      stateFromStoresArray = basePurchaseAnalytics(onClose[23]).useStateFromStoresArray(items1, () => _undefined2.getGiftPromotionRewardSkuIds());
      const obj14 = basePurchaseAnalytics(onClose[23]);
      fetchClaimableGiftingPromotionRewardSkuIds = basePurchaseAnalytics(onClose[24]).useFetchClaimableGiftingPromotionRewardSkuIds();
      c34 = tmp42;
      const obj15 = basePurchaseAnalytics(onClose[24]);
      obj = { location: "NativeGiftContext" };
      enabled = recipientUserId(onClose[25]).useConfig(obj).enabled;
      const items2 = [enabled];
      let effect = React.useEffect(() => {
        if (enabled) {
          const badge = basePurchaseAnalytics(onClose[26]).fetchBadge(basePurchaseAnalytics(onClose[27]).BadgeId.GIFTING);
          const obj = basePurchaseAnalytics(onClose[26]);
        }
      }, items2);
      const obj5 = recipientUserId(onClose[25]);
      const items3 = [closure_9];
      stateFromStores = basePurchaseAnalytics(onClose[23]).useStateFromStores(items3, () => {
        let user;
        if (null != recipientUserId) {
          user = authStore.getUser(recipientUserId);
        }
        return user;
      });
      obj1 = { giftStyle: first2, recipientUserId, customGiftMessage: first3, emojiConfetti: first5, soundEffect: first4, selectedGiftingPromotionReward: first9, premiumType: first };
      const tmp50 = (function useGiftInfoOptions(giftStyle) {
        giftStyle = giftStyle.giftStyle;
        const recipientUserId = giftStyle.recipientUserId;
        const customGiftMessage = giftStyle.customGiftMessage;
        const emojiConfetti = giftStyle.emojiConfetti;
        const soundEffect = giftStyle.soundEffect;
        const selectedGiftingPromotionReward = giftStyle.selectedGiftingPromotionReward;
        const premiumType = giftStyle.premiumType;
        let items = [giftStyle, recipientUserId, customGiftMessage, , , , , ];
        let id;
        if (null != emojiConfetti) {
          id = emojiConfetti.id;
        }
        items[3] = id;
        let surrogates;
        if (null != emojiConfetti) {
          surrogates = emojiConfetti.surrogates;
        }
        items[4] = surrogates;
        let soundId;
        if (null != soundEffect) {
          soundId = soundEffect.soundId;
        }
        items[5] = soundId;
        items[6] = selectedGiftingPromotionReward;
        items[7] = premiumType;
        return _undefined.useMemo(() => {
          const obj = { gift_style: giftStyle, recipient_id: recipientUserId, custom_message: customGiftMessage };
          let id;
          if (null != emojiConfetti) {
            id = emojiConfetti.id;
          }
          obj.emoji_id = id;
          let surrogates;
          if (null != emojiConfetti) {
            surrogates = emojiConfetti.surrogates;
          }
          obj.emoji_name = surrogates;
          let soundId;
          if (null != soundEffect) {
            soundId = soundEffect.soundId;
          }
          obj.sound_id = soundId;
          if (null != selectedGiftingPromotionReward) {
            if (premiumType === first4.TIER_2) {
              const items = [selectedGiftingPromotionReward];
            }
            obj.reward_sku_ids = [];
            return obj;
          }
        }, items);
      })(obj1);
      c37 = tmp50;
      const items4 = [first8];
      const effect1 = React.useEffect(() => {
        if (null != first8) {
          let obj = recipientUserId(onClose[28]);
          obj = {};
          const intl = basePurchaseAnalytics(onClose[17]).intl;
          obj.title = intl.string(basePurchaseAnalytics(onClose[17]).t.R0RpRX);
          const intl2 = basePurchaseAnalytics(onClose[17]).intl;
          obj.body = intl2.string(basePurchaseAnalytics(onClose[17]).t.CKsXk3);
          obj.show(obj);
          _undefined3(null);
        }
      }, items4);
      const items5 = [first9, null != fetchClaimableGiftingPromotionRewardSkuIds && fetchClaimableGiftingPromotionRewardSkuIds.length > 0];
      const effect2 = React.useEffect(() => {
        if (c34) {
          const currentUser = authStore.getCurrentUser();
          let id;
          let obj = recipientUserId(onClose[29]);
          obj = {};
          if (null != currentUser) {
            id = currentUser.id;
          }
          obj.user_id = id;
          obj.reward_sku_id = first9;
          obj.track(first3.GIFT_PROMOTION_REWARD_SELECTED, obj);
        }
      }, items5);
      obj2 = {};
      ({ order: obj9.order, revision: obj9.revision, setRevision: obj9.setRevision, setOrder: obj9.setOrder } = orderContext);
      obj2.planId = planIdForPremiumType;
      obj2.externalGatewayFacet = memo;
      obj2.giftInfoOptions = tmp50;
      obj2.isPurchasing = first7;
      obj2.premiumType = first;
      obj2.planInterval = first1;
      obj2.setPremiumType = tmp5;
      obj2.setPlanInterval = tmp13;
      obj2.setError = tmp31;
      (function useSyncOrder(order) {
        order = order.order;
        const revision = order.revision;
        const setRevision = order.setRevision;
        let setOrder = order.setOrder;
        let planId = order.planId;
        const externalGatewayFacet = order.externalGatewayFacet;
        const giftInfoOptions = order.giftInfoOptions;
        const isPurchasing = order.isPurchasing;
        const premiumType = order.premiumType;
        const planInterval = order.planInterval;
        const setPremiumType = order.setPremiumType;
        const setPlanInterval = order.setPlanInterval;
        const setError = order.setError;
        let closure_13 = _undefined.useRef({ orderId: undefined, planId: null, planSelection: { premiumType, planInterval }, giftInfo: null });
        let closure_14 = _undefined.useRef(false);
        const tmp = first(_undefined.useState(0), 2);
        let closure_15 = tmp[1];
        const items = [order, revision, planId, externalGatewayFacet, giftInfoOptions, isPurchasing, premiumType, planInterval, setPremiumType, setPlanInterval, setRevision, setOrder, setError, tmp[0]];
        const effect = _undefined.useEffect(() => {
          let id;
          if (null != id) {
            id = id.id;
          }
          let first;
          if (null != id) {
            const order_line_items = id.order_line_items;
            if (null != order_line_items) {
              first = order_line_items[0];
            }
          }
          let id1;
          if (null != first) {
            id1 = first.id;
          }
          if (null != first) {
            const sku_id = first.sku_id;
          }
          let subscription_plan_id;
          if (null != first) {
            subscription_plan_id = first.subscription_plan_id;
          }
          let tmp7 = null;
          if (null != subscription_plan_id) {
            tmp7 = subscription_plan_id;
          }
          let tmp8 = null != id;
          if (tmp8) {
            tmp8 = closure_13.current.orderId !== id.id;
          }
          if (tmp8) {
            closure_13.current.orderId = id.id;
            closure_13.current.planId = tmp7;
            let obj = { premiumType, planInterval };
            closure_13.current.planSelection = obj;
          }
          if (null != id) {
            if (null != first) {
              if (null != id1) {
                if (null != first) {
                  if (!closure_7) {
                    if (!ref.current) {
                      let tmp18 = closure_13.current.planId !== planId;
                      if (tmp18) {
                        let tmp19 = null == sku_id;
                        if (!tmp19) {
                          let skuId;
                          if (null != first5[planId]) {
                            skuId = tmp22.skuId;
                          }
                          tmp19 = skuId === sku_id;
                        }
                        tmp18 = tmp19;
                      }
                      const setOrder = tmp18;
                      planId = tmp26;
                      let c5 = false;
                      let id2;
                      if (null != id) {
                        id2 = id.id;
                      }
                      ref.current = true;
                      closure_7 = first;
                      // CreateGeneratorClosureLongIndex (0x67)
                      const promise = setCurrentAnalyticsStep(first)();
                      setCurrentAnalyticsStep(first)().catch((error) => {
                        let obj = basePurchaseAnalytics(onClose[14]);
                        obj = { orderId: id, planId: closure_4, needsPlanSync: _isNativeReflectConstruct, needsGiftSync: closure_4 };
                        const result = obj.captureBillingException(error, { tags: { source: "NativeGiftContext_syncOrder" }, extra: obj });
                        obj = { error, orderId: id };
                        first6.error("Failed to sync order", obj);
                        if (!c5) {
                          outer1_12(error);
                        }
                      }).finally(() => {
                        outer1_14.current = false;
                        if (outer1_13.current.orderId !== id2) {
                          outer1_15((arg0) => arg0 + 1);
                        }
                      });
                      return () => {
                        let c5 = true;
                      };
                    }
                  }
                }
              }
            }
          }
        }, items);
      })(obj2);
      const items6 = [planIdForPremiumType, recipientUserId, basePurchaseAnalytics];
      callback = React.useCallback((arg0) => {
        let closure_0 = arg0;
        function handleGiftCodeCreate(giftCode) {
          const fromServer = first2.createFromServer(giftCode.giftCode);
          if (fromServer.subscriptionPlanId === outer1_27) {
            outer1_17(fromServer);
            let tmp6 = null != handleGiftCodeCreate;
            if (tmp6) {
              const location_stack = lib.location_stack;
              let hasItem;
              if (null != location_stack) {
                hasItem = location_stack.includes(recipientUserId(onClose[30]).PREMIUM_GIFT_INTENT_CARD);
              }
              tmp6 = null != hasItem;
              const tmp7 = hasItem;
            }
            if (tmp6) {
              tmp6 = tmp7;
            }
            if (tmp6) {
              const result = basePurchaseAnalytics(onClose[31]).logGiftIntentFlowPurchasedGift(handleGiftCodeCreate);
              const obj = basePurchaseAnalytics(onClose[31]);
            }
            if (null != lib) {
              lib();
            }
            recipientUserId(onClose[32]).unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
            const obj2 = recipientUserId(onClose[32]);
          }
          outer1_19(false);
        }
        return handleGiftCodeCreate;
      }, items6);
      const items7 = [skuId, orderContext.orderId];
      callback1 = React.useCallback((() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = setCurrentAnalyticsStep(tmp);
        return function() {
          return callback(...arguments);
        };
      })(), items7);
      const items8 = [setCurrentAnalyticsStep];
      callback2 = React.useCallback((arg0) => {
        recipientUserId(onClose[32]).unsubscribe("GIFT_CODE_CREATE", arg0);
        setCurrentAnalyticsStep(basePurchaseAnalytics(onClose[34]).PaymentFlowStep.PLAN_SELECT);
        callback(false);
      }, items8);
      const items9 = [callback, setCurrentAnalyticsStep, tmp50, handlePremiumPurchase, productIdForGift, basePurchaseAnalytics, callback1, callback2, orderContext.orderId, first3];
      callback3 = React.useCallback((arg0) => {
        function handleGPlayUpdatePurchaseAction(isActivePurchase) {
          if (isActivePurchase.isActivePurchase) {
            recipientUserId(onClose[32]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
            if (isActivePurchase.billingResult !== constants.OK) {
              outer1_40(closure_1);
            }
            const obj = recipientUserId(onClose[32]);
          }
        }
        if (null != first1.getNextTier(basePurchaseAnalytics(onClose[27]).BadgeId.GIFTING)) {
          const singleRequirementProgress = first1.getSingleRequirementProgress(basePurchaseAnalytics(onClose[27]).BadgeId.GIFTING);
          let current;
          if (null != singleRequirementProgress) {
            current = singleRequirementProgress.current;
          }
          let tmp9 = null;
          if (null != current) {
            tmp9 = current;
          }
          callback2(tmp9);
        } else {
          callback2(null);
        }
        callback(true);
        let closure_1 = callback(arg0);
        let obj = basePurchaseAnalytics(onClose[33]);
        if (obj.isAndroid()) {
          let obj1 = recipientUserId(onClose[32]);
          const subscription = obj1.subscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
        }
        setCurrentAnalyticsStep(basePurchaseAnalytics(onClose[34]).PaymentFlowStep.REVIEW);
        obj = { productId: productIdForGift, isGift: true, analyticsLoadId: basePurchaseAnalytics.load_id, analyticsLocation: basePurchaseAnalytics.location, analyticsLocations: basePurchaseAnalytics.location_stack, allowPlanChange: false, giftInfoOptions: c37 };
        // CreateGeneratorClosureLongIndex (0x67)
        basePurchaseAnalytics = setCurrentAnalyticsStep(tmp);
        obj.onPurchaseComplete = function() {
          return callback(...arguments);
        };
        obj.onPurchaseError = function onPurchaseError() {
          return outer1_40(closure_1);
        };
        obj.orderId = orderContext.orderId;
        obj = { load_id: basePurchaseAnalytics.load_id };
        obj1 = {};
        const intl = basePurchaseAnalytics(onClose[17]).intl;
        obj1.is_custom_message_edited = first3 !== intl.string(basePurchaseAnalytics(onClose[17]).t.ZkOo1U);
        obj1.is_custom_emoji_sound_available = false;
        obj.succeededOnlyFields = obj1;
        obj.analyticsData = obj;
        handlePremiumPurchase(obj);
      }, items9);
      const items10 = [orderContext, recipientUserId, stateFromStores, first2, first, first1, productIdForGift, first3, first4, first5, first6, first7, first10, basePurchaseAnalytics, setCurrentAnalyticsStep, tmp5, tmp13, onClose, callback3, stateFromStoresArray, fetchClaimableGiftingPromotionRewardSkuIds, first9, tmp34];
      obj3 = {
        value: React.useMemo(() => {
              const obj = {};
              const merged = Object.assign(orderContext);
              obj["recipientUserId"] = recipientUserId;
              obj["recipientUser"] = stateFromStores;
              obj["giftStyle"] = first2;
              obj["premiumType"] = first;
              obj["planInterval"] = first1;
              obj["productId"] = productIdForGift;
              obj["customGiftMessage"] = first3;
              obj["soundEffect"] = first4;
              obj["emojiConfetti"] = first5;
              obj["giftCodeRecord"] = first6;
              obj["isPurchasing"] = first7;
              obj["prePurchaseGiftingBadgeProgress"] = first10;
              obj["basePurchaseAnalytics"] = basePurchaseAnalytics;
              obj["setCurrentAnalyticsStep"] = setCurrentAnalyticsStep;
              obj["setPremiumType"] = c5;
              obj["setPlanInterval"] = c7;
              obj["setGiftStyle"] = closure_9;
              obj["setCustomGiftMessage"] = closure_11;
              obj["setSoundEffect"] = closure_13;
              obj["setEmojiConfetti"] = closure_15;
              obj["onClose"] = onClose;
              obj["onPurchase"] = callback3;
              obj["allRewards"] = stateFromStoresArray;
              obj["claimableRewards"] = fetchClaimableGiftingPromotionRewardSkuIds;
              obj["selectedGiftingPromotionReward"] = first9;
              obj["setSelectedGiftingPromotionReward"] = c23;
              return obj;
            }, items10),
        children
      };
      return <redux.Provider value={React.useMemo(() => {
        const obj = {};
        const merged = Object.assign(orderContext);
        obj["recipientUserId"] = recipientUserId;
        obj["recipientUser"] = stateFromStores;
        obj["giftStyle"] = first2;
        obj["premiumType"] = first;
        obj["planInterval"] = first1;
        obj["productId"] = productIdForGift;
        obj["customGiftMessage"] = first3;
        obj["soundEffect"] = first4;
        obj["emojiConfetti"] = first5;
        obj["giftCodeRecord"] = first6;
        obj["isPurchasing"] = first7;
        obj["prePurchaseGiftingBadgeProgress"] = first10;
        obj["basePurchaseAnalytics"] = basePurchaseAnalytics;
        obj["setCurrentAnalyticsStep"] = setCurrentAnalyticsStep;
        obj["setPremiumType"] = c5;
        obj["setPlanInterval"] = c7;
        obj["setGiftStyle"] = closure_9;
        obj["setCustomGiftMessage"] = closure_11;
        obj["setSoundEffect"] = closure_13;
        obj["setEmojiConfetti"] = closure_15;
        obj["onClose"] = onClose;
        obj["onPurchase"] = callback3;
        obj["allRewards"] = stateFromStoresArray;
        obj["claimableRewards"] = fetchClaimableGiftingPromotionRewardSkuIds;
        obj["selectedGiftingPromotionReward"] = first9;
        obj["setSelectedGiftingPromotionReward"] = c23;
        return obj;
      }, items10)}>{children}</redux.Provider>;
    }
  }
};
export const useNativeGiftContext = importDefaultResultResult[1];
export const useForwardedNativeGiftContext = importDefaultResultResult[2];
