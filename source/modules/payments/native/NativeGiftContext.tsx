// Module ID: 8802
// Function ID: 69384
// Name: importDefaultResult1
// Dependencies: []
// Exports: NativeGiftContextProvider

// Module 8802 (importDefaultResult1)
let closure_3 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
arg1(dependencyMap[8]).GPlayBillingResult;
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: closure_13, SubscriptionPlanInfo: closure_14 } = arg1(dependencyMap[9]));
const jsx = arg1(dependencyMap[10]).jsx;
let importDefaultResult1 = importDefault(dependencyMap[11]);
importDefaultResult1 = new importDefaultResult1("NativeGiftContext");
const importDefaultResultResult = importDefaultResult(importDefault(dependencyMap[12])(), 3);
let closure_17 = importDefaultResultResult[0];
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = function NativeGiftContextProvider(basePurchaseAnalytics) {
  let children;
  let initialOrder;
  let onClose;
  let planInterval;
  let premiumType;
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  const arg1 = basePurchaseAnalytics;
  const recipientUserId = basePurchaseAnalytics.recipientUserId;
  const importDefault = recipientUserId;
  ({ premiumType, planInterval, onClose } = basePurchaseAnalytics);
  const dependencyMap = onClose;
  const setCurrentAnalyticsStep = basePurchaseAnalytics.setCurrentAnalyticsStep;
  let closure_3 = setCurrentAnalyticsStep;
  let importDefaultResult;
  let React;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let AnalyticEvents;
  let closure_11;
  let first4;
  let closure_13;
  let first5;
  let jsx;
  let redux;
  let first7;
  let closure_19;
  let first8;
  let tmp31;
  let first9;
  let tmp34;
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
  let tmp42;
  let enabled;
  let stateFromStores;
  let tmp50;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  ({ initialOrder, children } = basePurchaseAnalytics);
  if (null == premiumType) {
    premiumType = first4.TIER_2;
  }
  const tmp3 = importDefaultResult(React.useState(premiumType), 2);
  const first = tmp3[0];
  importDefaultResult = first;
  React = tmp5;
  importDefault(dependencyMap[15]);
  if (null != planInterval) {
    const tmp11 = importDefaultResult(React.useState(planInterval), 2);
    const first1 = tmp11[0];
    closure_6 = first1;
    closure_7 = tmp13;
    let obj = arg1(dependencyMap[16]);
    const tmp17 = importDefaultResult(React.useState(obj.useGiftStyles()[0]), 2);
    const first2 = tmp17[0];
    closure_8 = first2;
    closure_9 = tmp17[1];
    const intl = arg1(dependencyMap[17]).intl;
    const tmp19 = importDefaultResult(React.useState(intl.string(arg1(dependencyMap[17]).t.ZkOo1U)), 2);
    const first3 = tmp19[0];
    AnalyticEvents = first3;
    closure_11 = tmp19[1];
    const tmp21 = importDefaultResult(React.useState(undefined), 2);
    first4 = tmp21[0];
    closure_13 = tmp21[1];
    const tmp23 = importDefaultResult(React.useState(undefined), 2);
    first5 = tmp23[0];
    jsx = tmp23[1];
    const tmp25 = importDefaultResult(React.useState(undefined), 2);
    const first6 = tmp25[0];
    redux = tmp25[1];
    const tmp27 = importDefaultResult(React.useState(false), 2);
    first7 = tmp27[0];
    closure_19 = tmp27[1];
    const tmp29 = importDefaultResult(React.useState(null), 2);
    first8 = tmp29[0];
    tmp31 = tmp29[1];
    const tmp32 = importDefaultResult(React.useState(), 2);
    first9 = tmp32[0];
    tmp34 = tmp32[1];
    const tmp35 = importDefaultResult(React.useState(null), 2);
    first10 = tmp35[0];
    closure_25 = tmp35[1];
    let obj1 = arg1(dependencyMap[18]);
    orderContext = obj1.useOrderContext(initialOrder, "NativeGiftContext");
    let obj2 = arg1(dependencyMap[19]);
    planIdForPremiumType = obj2.getPlanIdForPremiumType(first, first1);
    let obj3 = arg1(dependencyMap[20]);
    productIdForGift = obj3.getProductIdForGift(planIdForPremiumType);
    if (null == first5[planIdForPremiumType]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
      throw error;
    } else {
      skuId = tmp41.skuId;
      obj = { location: "NativeGiftContext" };
      androidShopOrdersEnabled = arg1(dependencyMap[21]).useAndroidShopOrdersEnabled(obj);
      const items = [androidShopOrdersEnabled, productIdForGift];
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
      const obj11 = arg1(dependencyMap[21]);
      handlePremiumPurchase = arg1(dependencyMap[22]).useHandlePremiumPurchase();
      const obj13 = arg1(dependencyMap[22]);
      const items1 = [closure_7];
      stateFromStoresArray = arg1(dependencyMap[23]).useStateFromStoresArray(items1, () => tmp13.getGiftPromotionRewardSkuIds());
      const obj14 = arg1(dependencyMap[23]);
      fetchClaimableGiftingPromotionRewardSkuIds = arg1(dependencyMap[24]).useFetchClaimableGiftingPromotionRewardSkuIds();
      tmp42 = null != fetchClaimableGiftingPromotionRewardSkuIds && fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
      const obj15 = arg1(dependencyMap[24]);
      obj = { location: "NativeGiftContext" };
      enabled = importDefault(dependencyMap[25]).useConfig(obj).enabled;
      const items2 = [enabled];
      const effect = React.useEffect(() => {
        if (enabled) {
          const badge = basePurchaseAnalytics(onClose[26]).fetchBadge(basePurchaseAnalytics(onClose[27]).BadgeId.GIFTING);
          const obj = basePurchaseAnalytics(onClose[26]);
        }
      }, items2);
      const obj5 = importDefault(dependencyMap[25]);
      const items3 = [closure_9];
      stateFromStores = arg1(dependencyMap[23]).useStateFromStores(items3, () => {
        let user;
        if (null != recipientUserId) {
          user = authStore.getUser(recipientUserId);
        }
        return user;
      });
      obj1 = { giftStyle: first2, recipientUserId, customGiftMessage: first3, emojiConfetti: first5, soundEffect: first4, selectedGiftingPromotionReward: first9, premiumType: first };
      tmp50 = function useGiftInfoOptions(giftStyle) {
        giftStyle = giftStyle.giftStyle;
        const basePurchaseAnalytics = giftStyle;
        const recipientUserId = giftStyle.recipientUserId;
        const customGiftMessage = giftStyle.customGiftMessage;
        const onClose = customGiftMessage;
        const emojiConfetti = giftStyle.emojiConfetti;
        const setCurrentAnalyticsStep = emojiConfetti;
        const soundEffect = giftStyle.soundEffect;
        const first = soundEffect;
        const selectedGiftingPromotionReward = giftStyle.selectedGiftingPromotionReward;
        const premiumType = giftStyle.premiumType;
        const first1 = premiumType;
        const items = [giftStyle, recipientUserId, customGiftMessage, , , , , ];
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
        return selectedGiftingPromotionReward.useMemo(() => {
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
            if (premiumType === TIER_2.TIER_2) {
              const items = [selectedGiftingPromotionReward];
            }
            obj.reward_sku_ids = [];
            return obj;
          }
        }, items);
      }(obj1);
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
          tmp31(null);
        }
      }, items4);
      const items5 = [first9, tmp42];
      const effect2 = React.useEffect(() => {
        if (tmp42) {
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
      function useSyncOrder(order) {
        order = order.order;
        const basePurchaseAnalytics = order;
        const revision = order.revision;
        const recipientUserId = revision;
        const setRevision = order.setRevision;
        const onClose = setRevision;
        const setOrder = order.setOrder;
        const setCurrentAnalyticsStep = setOrder;
        const planId = order.planId;
        const first = planId;
        const externalGatewayFacet = order.externalGatewayFacet;
        const giftInfoOptions = order.giftInfoOptions;
        const first1 = giftInfoOptions;
        const isPurchasing = order.isPurchasing;
        const premiumType = order.premiumType;
        const first2 = premiumType;
        const planInterval = order.planInterval;
        let closure_9 = planInterval;
        const setPremiumType = order.setPremiumType;
        const first3 = setPremiumType;
        const setPlanInterval = order.setPlanInterval;
        let closure_11 = setPlanInterval;
        const setError = order.setError;
        const first4 = setError;
        let closure_13 = tmp5.useRef({ orderId: undefined, planId: null, planSelection: { premiumType, planInterval }, giftInfo: null });
        let closure_14 = tmp5.useRef(false);
        const tmp = first(externalGatewayFacet.useState(0), 2);
        let closure_15 = tmp[1];
        const items = [order, revision, planId, externalGatewayFacet, giftInfoOptions, isPurchasing, premiumType, planInterval, setPremiumType, setPlanInterval, setRevision, setOrder, setError, tmp[0]];
        const effect = tmp5.useEffect(() => {
          let id;
          if (null != order) {
            id = order.id;
          }
          const order = id;
          let first;
          if (null != order) {
            const order_line_items = order.order_line_items;
            if (null != order_line_items) {
              first = order_line_items[0];
            }
          }
          const revision = first;
          let id1;
          if (null != first) {
            id1 = first.id;
          }
          const setRevision = id1;
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
          let tmp8 = null != order;
          if (tmp8) {
            tmp8 = closure_13.current.orderId !== order.id;
          }
          if (tmp8) {
            closure_13.current.orderId = order.id;
            closure_13.current.planId = tmp7;
            const obj = { premiumType, planInterval };
            closure_13.current.planSelection = obj;
          }
          if (null != id) {
            if (null != first) {
              if (null != id1) {
                if (null != revision) {
                  if (!closure_7) {
                    if (!ref.current) {
                      let tmp18 = closure_13.current.planId !== planId;
                      if (tmp18) {
                        let tmp19 = null == sku_id;
                        if (!tmp19) {
                          let skuId;
                          if (null != ref[closure_4]) {
                            skuId = tmp22.skuId;
                          }
                          tmp19 = skuId === sku_id;
                        }
                        tmp18 = tmp19;
                      }
                      const setOrder = tmp18;
                      const planId = tmp26;
                      let closure_5 = false;
                      let id2;
                      if (null != order) {
                        id2 = order.id;
                      }
                      const giftInfoOptions = id2;
                      ref.current = true;
                      closure_7 = revision;
                      // CreateGeneratorClosureLongIndex (0x67)
                      const promise = setOrder(revision)();
                      setOrder(revision)().catch((error) => {
                        let obj = id(id1[14]);
                        obj = { orderId: id, planId: tmp26, needsPlanSync: tmp18, needsGiftSync: tmp26 };
                        const result = obj.captureBillingException(error, { tags: { source: "NativeGiftContext_syncOrder" }, extra: obj });
                        obj = { error, orderId: id };
                        closure_16.error("Failed to sync order", obj);
                        if (!closure_5) {
                          callback(error);
                        }
                      }).finally(() => {
                        closure_14.current = false;
                        if (ref.current.orderId !== id2) {
                          callback2((arg0) => arg0 + 1);
                        }
                      });
                      return () => {
                        let closure_5 = true;
                      };
                    }
                  }
                }
              }
            }
          }
        }, items);
      }(obj2);
      const items6 = [planIdForPremiumType, recipientUserId, basePurchaseAnalytics];
      callback = React.useCallback((arg0) => {
        const basePurchaseAnalytics = arg0;
        function handleGiftCodeCreate(giftCode) {
          const fromServer = closure_8.createFromServer(giftCode.giftCode);
          if (fromServer.subscriptionPlanId === closure_27) {
            callback(fromServer);
            let tmp6 = null != handleGiftCodeCreate;
            if (tmp6) {
              const location_stack = giftCode.location_stack;
              let hasItem;
              if (null != location_stack) {
                hasItem = location_stack.includes(handleGiftCodeCreate(closure_2[30]).PREMIUM_GIFT_INTENT_CARD);
              }
              tmp6 = null != hasItem;
              const tmp7 = hasItem;
            }
            if (tmp6) {
              tmp6 = tmp7;
            }
            if (tmp6) {
              const result = giftCode(closure_2[31]).logGiftIntentFlowPurchasedGift(handleGiftCodeCreate);
              const obj = giftCode(closure_2[31]);
            }
            if (null != giftCode) {
              giftCode();
            }
            handleGiftCodeCreate(closure_2[32]).unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
            const obj2 = handleGiftCodeCreate(closure_2[32]);
          }
          callback2(false);
        }
        const recipientUserId = handleGiftCodeCreate;
        return handleGiftCodeCreate;
      }, items6);
      const items7 = [skuId, orderContext.orderId];
      callback1 = React.useCallback(() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = setCurrentAnalyticsStep(tmp);
        return function() {
          return callback(...arguments);
        };
      }(), items7);
      const items8 = [setCurrentAnalyticsStep];
      callback2 = React.useCallback((arg0) => {
        recipientUserId(onClose[32]).unsubscribe("GIFT_CODE_CREATE", arg0);
        setCurrentAnalyticsStep(basePurchaseAnalytics(onClose[34]).PaymentFlowStep.PLAN_SELECT);
        callback2(false);
      }, items8);
      const items9 = [callback, setCurrentAnalyticsStep, tmp50, handlePremiumPurchase, productIdForGift, basePurchaseAnalytics, callback1, callback2, orderContext.orderId, first3];
      callback3 = React.useCallback((arg0) => {
        function handleGPlayUpdatePurchaseAction(isActivePurchase) {
          if (isActivePurchase.isActivePurchase) {
            callback2(handleGPlayUpdatePurchaseAction[32]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
            if (isActivePurchase.billingResult !== constants.OK) {
              callback3(callback2);
            }
            const obj = callback2(handleGPlayUpdatePurchaseAction[32]);
          }
        }
        const onClose = handleGPlayUpdatePurchaseAction;
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
          callback3(tmp9);
        } else {
          callback3(null);
        }
        callback2(true);
        const callback = callback(arg0);
        let obj = basePurchaseAnalytics(onClose[33]);
        if (obj.isAndroid()) {
          let obj1 = callback(onClose[32]);
          const subscription = obj1.subscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
        }
        setCurrentAnalyticsStep(basePurchaseAnalytics(onClose[34]).PaymentFlowStep.REVIEW);
        obj = { productId: productIdForGift, isGift: true, analyticsLoadId: basePurchaseAnalytics.load_id, analyticsLocation: basePurchaseAnalytics.location, analyticsLocations: basePurchaseAnalytics.location_stack, allowPlanChange: false, giftInfoOptions: tmp50 };
        // CreateGeneratorClosureLongIndex (0x67)
        const basePurchaseAnalytics = setCurrentAnalyticsStep(tmp);
        obj.onPurchaseComplete = function() {
          return callback(...arguments);
        };
        obj.onPurchaseError = function onPurchaseError() {
          return callback3(closure_1);
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
              obj["setPremiumType"] = tmp5;
              obj["setPlanInterval"] = tmp13;
              obj["setGiftStyle"] = closure_9;
              obj["setCustomGiftMessage"] = closure_11;
              obj["setSoundEffect"] = closure_13;
              obj["setEmojiConfetti"] = closure_15;
              obj["onClose"] = onClose;
              obj["onPurchase"] = callback3;
              obj["allRewards"] = stateFromStoresArray;
              obj["claimableRewards"] = fetchClaimableGiftingPromotionRewardSkuIds;
              obj["selectedGiftingPromotionReward"] = first9;
              obj["setSelectedGiftingPromotionReward"] = tmp34;
              return obj;
            }, items10),
        children
      };
      return <redux.Provider {...obj3} />;
    }
  }
};
export const useNativeGiftContext = importDefaultResultResult[1];
export const useForwardedNativeGiftContext = importDefaultResultResult[2];
