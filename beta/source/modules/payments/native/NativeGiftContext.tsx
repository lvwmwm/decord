// Module ID: 10162
// Function ID: 10163
// Name: NativeGiftContext
// Dependencies: [5, 32, 19, 7637, 10128, 10163, 1372, 1074, 6659, 1374, 1085, 21, 3, 6848, 10164, 6849, 4503, 10165, 1115, 10166, 4488, 6661, 10167, 504, 10197, 10204, 7642, 7629, 5204, 1241, 6603, 10205, 573, 1364, 10126, 2]
// Exports: NativeGiftContextProvider

// Module 10162 (NativeGiftContext)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import intl3 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import Constants3 from "Constants" /* 6659 */;
import ContextUtilsDefault from "ContextUtils" /* 6848 */;
import BadgeId from "BadgeId" /* 7629 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10126 */;
import PremiumGiftingIntentActionCreators from "PremiumGiftingIntentActionCreators" /* 10205 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10163 */;
import UserStore from "UserStore" /* 1372 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let constants;

let closure_12;
let closure_14;
let closure_18;
let map1;
let tmp6;
let tmp7;
let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const unpackModuleId = Constants3.GPlayBillingResult;
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: map1, SubscriptionPlanInfo: closure_14 } = PremiumConstants);
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
const tmp4 = new LoggerDefault("NativeGiftContext");
let closure_17 = tmp4;
[closure_18, tmp6, tmp7] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 3);
let result = size.fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = function NativeGiftContextProvider(basePurchaseAnalytics) {
  let children;
  let initialOrder;
  let obj7;
  let onClose;
  let order;
  let planInterval;
  let premiumType;
  let revision;
  let setOrder;
  let setPremiumType;
  let setRevision;
  let setSoundEffect;
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  const recipientUserId = basePurchaseAnalytics.recipientUserId;
  ({ premiumType, planInterval, onClose } = basePurchaseAnalytics);
  const setCurrentAnalyticsStep = basePurchaseAnalytics.setCurrentAnalyticsStep;
  premiumType = undefined;
  react = undefined;
  let first1;
  let setPlanInterval;
  let first2;
  let setGiftStyle;
  let first3;
  let setCustomGiftMessage;
  let first4;
  constants = undefined;
  let first5;
  let setEmojiConfetti;
  let first6;
  closure_17 = undefined;
  let first7;
  let closure_19;
  let first8;
  let closure_21;
  let first9;
  let setSelectedGiftingPromotionReward;
  let first10;
  let closure_25;
  let orderContext;
  let planIdForPremiumType;
  let productIdForGift;
  let skuId;
  let payment_gateway;
  let handlePremiumPurchase;
  let stateFromStoresArray;
  let fetchClaimableGiftingPromotionRewardSkuIds;
  let closure_34;
  let enabled;
  let stateFromStores;
  let memo1;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback21;
  let obj = react;
  ({ initialOrder, children } = basePurchaseAnalytics);
  const useState = react.useState;
  if (premiumType == null) {
    let tmp = first4;
    premiumType = first4.TIER_2;
  }
  let tmp2 = premiumType;
  const tmp3 = premiumType(useState(premiumType), 2);
  premiumType = tmp3[0];
  let tmp5 = tmp3[1];
  react = tmp5;
  const useState2 = obj.useState;
  if (planInterval == null) {
    let tmp6 = constants;
    planInterval = constants.YEAR;
  }
  const tmp2Result = tmp2(useState2(planInterval), 2);
  first1 = tmp2Result[0];
  let tmp9 = tmp2Result[1];
  setPlanInterval = tmp9;
  const tmp10 = basePurchaseAnalytics;
  const tmp11 = onClose;
  let obj2 = basePurchaseAnalytics(onClose[17]);
  const tmp2Result11 = tmp2(obj.useState(obj2.useGiftStyles()[0]), 2);
  first2 = tmp2Result11[0];
  setGiftStyle = tmp2Result11[1];
  const useState3 = obj.useState;
  let intl = basePurchaseAnalytics(onClose[18]).intl;
  const tmp2Result12 = tmp2(useState3(intl.string(basePurchaseAnalytics(onClose[18]).t.ZkOo1U)), 2);
  first3 = tmp2Result12[0];
  setCustomGiftMessage = tmp2Result12[1];
  const tmp2Result13 = tmp2(obj.useState(undefined), 2);
  first4 = tmp2Result13[0];
  constants = tmp2Result13[1];
  const tmp2Result14 = tmp2(obj.useState(undefined), 2);
  first5 = tmp2Result14[0];
  setEmojiConfetti = tmp2Result14[1];
  const tmp2Result15 = tmp2(obj.useState(undefined), 2);
  first6 = tmp2Result15[0];
  closure_17 = tmp2Result15[1];
  const tmp2Result16 = tmp2(obj.useState(false), 2);
  first7 = tmp2Result16[0];
  closure_19 = tmp2Result16[1];
  const tmp2Result17 = tmp2(obj.useState(null), 2);
  first8 = tmp2Result17[0];
  let tmp26 = tmp2Result17[1];
  closure_21 = tmp26;
  const tmp2Result18 = tmp2(obj.useState(), 2);
  first9 = tmp2Result18[0];
  setSelectedGiftingPromotionReward = tmp29;
  const tmp2Result19 = tmp2(obj.useState(null), 2);
  first10 = tmp2Result19[0];
  closure_25 = tmp2Result19[1];
  let obj3 = basePurchaseAnalytics(onClose[19]);
  orderContext = obj3.useOrderContext(initialOrder, "NativeGiftContext");
  let obj4 = basePurchaseAnalytics(onClose[20]);
  planIdForPremiumType = obj4.getPlanIdForPremiumType(premiumType, first1);
  let obj5 = basePurchaseAnalytics(onClose[21]);
  productIdForGift = obj5.getProductIdForGift(planIdForPremiumType);
  if (null == first5[planIdForPremiumType]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    let str = "Invalid subscription plan for gift purchase: ";
    const self = this;
    const self2 = this;
    let error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
    const tmp67 = error;
    throw error;
  } else {
    skuId = tmp35.skuId;
    const order2 = orderContext.order;
    payment_gateway = undefined;
    if (order2 != null) {
      const billing_facet = order2.billing_facet;
      if (billing_facet != null) {
        payment_gateway = billing_facet.payment_gateway;
      }
    }
    let items = [payment_gateway, productIdForGift];
    const memo = obj.useMemo(() => {
      let items;
      let tmp;
      if (payment_gateway === PaymentGateways.GOOGLE) {
        const obj = { line_items: items };
        items = [{ external_product_id: productIdForGift }];
        tmp = obj;
        const obj2 = { external_product_id: productIdForGift };
      }
      return tmp;
    }, items);
    const tmp10Result = tmp10(tmp11[22]);
    handlePremiumPurchase = tmp10Result.useHandlePremiumPurchase();
    const items1 = [setPlanInterval];
    const tmp10Result4 = tmp10(tmp11[23]);
    stateFromStoresArray = tmp10Result4.useStateFromStoresArray(items1, () => setPlanInterval.getGiftPromotionRewardSkuIds());
    const tmp10Result5 = tmp10(tmp11[24]);
    fetchClaimableGiftingPromotionRewardSkuIds = tmp10Result5.useFetchClaimableGiftingPromotionRewardSkuIds();
    let tmp41 = null != fetchClaimableGiftingPromotionRewardSkuIds;
    if (tmp41) {
      let num = 0;
      tmp41 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
    }
    closure_34 = tmp41;
    let obj9 = recipientUserId(tmp11[25]);
    enabled = obj9.useConfig({ location: "NativeGiftContext" }).enabled;
    const items2 = [enabled];
    const effect = obj.useEffect(() => {
      const tmp = enabled;
      if (tmp) {
        const obj = BadgeDirectoryActionCreators;
        const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    }, items2);
    const items3 = [setGiftStyle];
    const tmp10Result6 = tmp10(tmp11[23]);
    stateFromStores = tmp10Result6.useStateFromStores(items3, () => {
      let user;
      if (null != recipientUserId) {
        user = UserStore.getUser(tmp);
      }
      return user;
    });
    const items4 = [first2, recipientUserId, first3, , , , , ];
    let id;
    const useMemo = obj.useMemo;
    const tmp42 = recipientUserId;
    if (first5 != null) {
      id = first5.id;
    }
    items4[3] = id;
    let surrogates;
    if (first5 != null) {
      surrogates = first5.surrogates;
    }
    items4[4] = surrogates;
    let soundId;
    if (first4 != null) {
      soundId = first4.soundId;
    }
    items4[5] = soundId;
    items4[6] = first9;
    items4[7] = premiumType;
    memo1 = useMemo(() => {
      let id;
      let soundId;
      let surrogates;
      const obj = { gift_style: first2, recipient_id: recipientUserId, custom_message: first3, emoji_id: id, emoji_name: surrogates, sound_id: soundId, reward_sku_ids: null };
      id = undefined;
      if (first5 != null) {
        id = tmp.id;
      }
      surrogates = undefined;
      if (first5 != null) {
        surrogates = tmp.surrogates;
      }
      soundId = undefined;
      if (first4 != null) {
        soundId = first4.soundId;
      }
      if (null != first9) {
        if (first === first4.TIER_2) {
          const items = [tmp5];
        }
        obj.reward_sku_ids = [];
        return obj;
      }
    }, items4);
    const items5 = [first8];
    const effect1 = obj.useEffect(() => {
      let intl;
      let intl2;
      if (null != first8) {
        const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.string(intl3.t.CKsXk3) };
        const show = actions_AlertActionCreatorsDefault.show;
        actions_AlertActionCreatorsDefault;
        intl = intl3.intl;
        intl2 = intl3.intl;
        show(obj);
        closure_21(null);
      }
    }, items5);
    const items6 = [first9, tmp41];
    const effect2 = obj.useEffect(() => {
      const tmp = closure_34;
      if (tmp) {
        const currentUser = UserStore.getCurrentUser();
        let id;
        const track = AnalyticsUtilsDefault.track;
        const GIFT_PROMOTION_REWARD_SELECTED = AnalyticEvents.GIFT_PROMOTION_REWARD_SELECTED;
        AnalyticsUtilsDefault;
        if (currentUser != null) {
          id = currentUser.id;
        }
        const obj = { user_id: id, reward_sku_id: first9 };
        track(GIFT_PROMOTION_REWARD_SELECTED, obj);
      }
    }, items6);
    ({ order, revision, setRevision, setOrder } = orderContext);
    let closure_10 = tmp5;
    setCustomGiftMessage = tmp9;
    closure_12 = tmp26;
    let obj6 = { orderId: "a", planId: 1056913937252952200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, planSelection: obj7, giftInfo: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000173333104240301 };
    obj7 = { premiumType, planInterval: first1 };
    constants = obj.useRef(obj6);
    let closure_14 = obj.useRef(false);
    setEmojiConfetti = obj.useRef(null);
    let num2 = 0;
    const tmp2Result20 = tmp2(obj.useState(0), 2);
    const tmp54 = tmp2Result20[1];
    let closure_16 = tmp54;
    const first11 = tmp2Result20[0];
    const tmp55 = tmp42(tmp11[14])(tmp54);
    const waitForPause = tmp55.waitForPause;
    const flush = tmp55.flush;
    const waitForSync = tmp55.waitForSync;
    const resolveSyncs = tmp55.resolveSyncs;
    const isAwaitingSync = tmp55.isAwaitingSync;
    const items7 = [order, revision, planIdForPremiumType, memo, memo1, first7, premiumType, first1, tmp5, tmp9, setRevision, setOrder, tmp26, first11, resolveSyncs, waitForPause, isAwaitingSync];
    const effect3 = obj.useEffect(() => {
      let closure_7;
      let id;
      let id2;
      let logger;
      let needsGiftSync;
      let sku_id;
      const tmp = id;
      id = undefined;
      if (id != null) {
        id = tmp.id;
      }
      premiumType = undefined;
      if (tmp != null) {
        const order_line_items = tmp.order_line_items;
        if (order_line_items != null) {
          premiumType = order_line_items[0];
        }
      }
      let id1;
      if (premiumType != null) {
        id1 = premiumType.id;
      }
      if (premiumType != null) {
        sku_id = premiumType.sku_id;
      }
      let subscription_plan_id;
      if (premiumType != null) {
        subscription_plan_id = premiumType.subscription_plan_id;
      }
      if (subscription_plan_id == null) {
        subscription_plan_id = null;
      }
      let tmp6 = null != tmp;
      if (tmp6) {
        tmp6 = ref.current.orderId !== tmp.id;
      }
      if (tmp6) {
        ref.current.orderId = tmp.id;
        ref.current.planId = subscription_plan_id;
        let obj = { premiumType, planInterval: first1 };
        ref.current.planSelection = obj;
        ref2.current = null;
      }
      if (null != id) {
        if (null != premiumType) {
          if (null != id1) {
            if (null != premiumType) {
              let tmp16 = ref.current.planId !== needsGiftSync;
              const tmp14 = ref;
              if (tmp16) {
                let tmp17 = null == sku_id;
                if (!tmp17) {
                  skuId = undefined;
                  if (ref[tmp15] != null) {
                    skuId = tmp19.skuId;
                  }
                  tmp17 = skuId === sku_id;
                }
                tmp16 = tmp17;
              }
              let needsPlanSync = tmp16;
              needsGiftSync = tmp22;
              if (!ref.current) {
                if (!tmp16) {
                  if (tmp14.current.giftInfo === id2) {
                    resolveSyncs(true);
                  }
                }
                const tmp26 = first7;
                if (!tmp26) {
                  let c5 = false;
                  id2 = undefined;
                  if (tmp != null) {
                    id2 = tmp.id;
                  }
                  tmp23.current = true;
                  first7 = tmp12;
                  let tmp30 = setOrder;
                  const promise = setOrder(function*(arg0, value) {
                    let c4;
                    let closure_2;
                    let expectedRevision;
                    let items;
                    let obj12;
                    let obj17;
                    let obj5;
                    let obj9;
                    let planId;
                    let v0;
                    if (c5 === 2) {
                      c5 = 3;
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
                      try {
                        let closure_1;
                        c5 = 2;
                        if (0 === planId) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_1 = tmp;
                            revision = undefined;
                            const tmp84 = needsPlanSync;
                            if (tmp84) {
                              needsPlanSync = 1;
                              if (null != c5) {
                                const obj4 = { orderId: id, expectedRevision, orderLineItems: items, externalGatewayFacet: tmp54 };
                                const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: planId };
                                ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                                items = [obj6];
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: obj12.patchOrder(obj4), done: false };
                                obj12 = id(id1[15]);
                                return obj7;
                              } else {
                                const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: obj9.patchOrderLineItem(obj8), done: false };
                                obj9 = id(id1[15]);
                                return obj10;
                              }
                            }
                          }
                        } else if (1 === planId) {
                          needsPlanSync = 0;
                          closure_1 = tmp67;
                          const tmp30 = closure_129_5;
                          if (!tmp30) {
                            closure_1_10(ref.current.planSelection.premiumType);
                            closure_1_11(ref.current.planSelection.planInterval);
                          }
                          throw closure_1;
                        } else {
                          if (2 === planId) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              needsPlanSync = 0;
                              c5 = 3;
                              const obj11 = { value, done: true };
                              return obj11;
                            } else {
                              revision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                needsPlanSync = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              } else {
                                expectedRevision = revision.revision;
                                needsPlanSync(revision);
                              }
                            }
                          } else {
                            if (3 === planId) {
                              if (arg0 === 1) {
                                c5 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                needsPlanSync = 0;
                                c5 = 3;
                                const obj13 = { value, done: true };
                                return obj13;
                              } else {
                                expectedRevision = value;
                                if (ref.current.orderId !== closure_129_6) {
                                  needsPlanSync = 0;
                                  c5 = 3;
                                  return { value: "HermesInternal", done: null };
                                }
                              }
                            } else if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c5 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              expectedRevision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              } else {
                                ref.current.giftInfo = current;
                                tmp67(expectedRevision);
                              }
                            }
                            c5 = 3;
                            return { value: "HermesInternal", done: null };
                          }
                          ref.current.planId = planId;
                          const obj15 = { premiumType, planInterval };
                          ref.current.planSelection = obj15;
                          tmp67(expectedRevision);
                          needsPlanSync = 0;
                        }
                        const tmp40 = closure_129_4;
                        if (tmp40) {
                          ref2.current = current;
                          const obj16 = { orderId, giftInfo: obj17, expectedRevision };
                          obj17 = { recipient_id: current.recipient_id, gift_style: current.gift_style, emoji_id: current.emoji_id, emoji_name: current.emoji_name, sound_id: current.sound_id, reward_sku_ids: current.reward_sku_ids, custom_message_contents: current.custom_message };
                          planId = 4;
                          c5 = 1;
                          const obj30 = { value: obj5.updateOrder(obj16), done: false };
                          obj5 = id(id1[15]);
                          return obj30;
                        }
                      } catch (tmp67) {
                        if (0 === needsPlanSync) {
                          c5 = 3;
                          throw tmp67;
                        } else {
                          planId = 1;
                        }
                      }
                    }
                  })();
                  const nextPromise = promise.then(() => {
                    closure_1_16((arg0) => arg0 + 1);
                  });
                  const catchPromise = nextPromise.catch((error) => {
                    let obj3;
                    const obj2 = { tags: { source: "NativeGiftContext_syncOrder" }, extra: obj3 };
                    obj3 = { orderId: id, planId: planIdForPremiumType, needsPlanSync, needsGiftSync };
                    const obj = basePurchaseAnalytics(onClose[16]);
                    const result = obj.captureBillingException(error, obj2);
                    const obj4 = { error, orderId: id };
                    logger.error("Failed to sync order", obj4);
                    if (ref.current.orderId === id2) {
                      closure_12(error);
                    }
                    resolveSyncs(false);
                  });
                  catchPromise.finally(() => {
                    closure_14.current = false;
                    if (ref.current.orderId !== id2) {
                      closure_16((arg0) => arg0 + 1);
                    }
                  });
                  return () => {
                    c5 = true;
                  };
                }
              }
            }
          }
        }
      }
      resolveSyncs(true);
    }, items7);
    const items8 = [memo1, flush, waitForSync];
    callback = obj.useCallback(() => {
      flush(memo1);
      const tmp2 = waitForSync();
      closure_16((arg0) => arg0 + 1);
      return tmp2;
    }, items8);
    const items9 = [planIdForPremiumType, recipientUserId, basePurchaseAnalytics];
    callback1 = obj.useCallback((arg0) => {
      let closure_0 = arg0;
      function handleGiftCodeCreate(giftCode) {
        const fromServer = GiftCodeRecord.createFromServer(giftCode.giftCode);
        if (fromServer.subscriptionPlanId === planIdForPremiumType) {
          closure_17(fromServer);
          let tmp6 = null != recipientUserId;
          const tmp18 = recipientUserId;
          if (tmp6) {
            const location_stack = basePurchaseAnalytics.location_stack;
            let hasItem;
            if (location_stack != null) {
              hasItem = location_stack.includes(AnalyticsLocationDefault.PREMIUM_GIFT_INTENT_CARD);
            }
            tmp6 = hasItem;
          }
          if (tmp6) {
            const obj = PremiumGiftingIntentActionCreators;
            const result = obj.logGiftIntentFlowPurchasedGift(tmp18);
          }
          if (closure_0 != null) {
            closure_0();
          }
          const obj2 = DispatcherDefault;
          obj2.unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
        }
        closure_19(false);
      }
      return handleGiftCodeCreate;
    }, items9);
    const useCallback = obj.useCallback;
    setCurrentAnalyticsStep((error) => {
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0, value) {
        let obj7;
        let obj9;
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
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                const obj11 = recipientUserId(onClose[32]);
                const subscription = obj11.subscribe("GIFT_CODE_CREATE", error);
                const obj12 = error(onClose[33]);
                if (!obj12.isAndroid()) {
                  if (null != closure_1_26.orderId) {
                    c4 = 1;
                    const obj5 = { orderId: closure_1_26.orderId, skuId };
                    logger.info("Starting order signing with pre-created order", obj5);
                    c5 = 2;
                    c6 = 1;
                    const obj6 = { value: obj7.markOrderAsSigningInProgress(closure_1_26.orderId), done: false };
                    obj7 = error(onClose[15]);
                    return obj6;
                  }
                }
              }
            } else if (1 === c5) {
              c4 = 0;
              error = closure_3;
              const obj8 = { tags: { source: "NativeGiftContext_handlePurchaseComplete_sign" }, extra: obj9 };
              obj9 = { skuId, orderId: closure_1_26.orderId };
              const obj2 = error(onClose[16]);
              const result = obj2.captureBillingException(error, obj8);
              const obj10 = { error, skuId, orderId: closure_1_26.orderId };
              logger.error("Failed to sign order in purchase completion", obj10);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp28) {
            closure_3 = tmp28;
            if (0 === c4) {
              c6 = 3;
              throw tmp28;
            } else {
              c5 = 1;
            }
          }
        }
      })();
    });
    const items10 = [skuId, orderContext.orderId];
    callback2 = useCallback(function() {
      return closure_0(...arguments);
    }, items10);
    const items11 = [setCurrentAnalyticsStep];
    callback3 = obj.useCallback((arg0) => {
      const obj = DispatcherDefault;
      obj.unsubscribe("GIFT_CODE_CREATE", arg0);
      setCurrentAnalyticsStep(PremiumAnalyticsUtils.PaymentFlowStep.PLAN_SELECT);
      closure_19(false);
    }, items11);
    const useCallback2 = obj.useCallback;
    let closure_0 = setCurrentAnalyticsStep(function*(arg0, value) {
      let closure_3;
      let intl;
      let obj17;
      let obj9;
      closure_0 = arg0;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_1;
              let closure_2;
              const obj10 = nextTier;
              if (null != nextTier.getNextTier(closure_0(onClose[27]).BadgeId.GIFTING)) {
                const singleRequirementProgress = obj10.getSingleRequirementProgress(closure_0(onClose[27]).BadgeId.GIFTING);
                let current;
                if (singleRequirementProgress != null) {
                  current = singleRequirementProgress.current;
                }
                let c1 = current;
                if (current == null) {
                  c1 = null;
                }
                closure_1_25(c1);
              } else {
                closure_1_25(null);
              }
              closure_1_19(true);
              c4 = 1;
              c5 = 1;
              const obj6 = { value: callback(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value) {
              closure_2 = callback1(closure_0);
              let obj = closure_0(onClose[33]);
              if (obj.isAndroid()) {
                function handleGPlayUpdatePurchaseAction(isActivePurchase) {
                  if (isActivePurchase.isActivePurchase) {
                    const obj = c1(closure_2[32]);
                    obj.unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
                    if (isActivePurchase.billingResult !== constants.OK) {
                      closure_2_41(closure_2);
                    }
                  }
                }
                const obj2 = recipientUserId(onClose[32]);
                const str = "GPLAY_UPDATE_PURCHASE_STATE";
                const subscription = obj2.subscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
              }
              tmp(closure_0(onClose[34]).PaymentFlowStep.REVIEW);
              const obj8 = {
                productId,
                isGift: true,
                analyticsLoadId: null,
                analyticsLocation: null,
                analyticsLocations: null,
                allowPlanChange: false,
                giftInfoOptions,
                onPurchaseComplete: function() {
                          return closure_1_1(...arguments);
                        },
                onPurchaseError() {
                          return closure_2_41(closure_1_2);
                        },
                orderId: orderId.orderId,
                analyticsData: obj9
              };
              ({ load_id: obj3.analyticsLoadId, location: obj3.analyticsLocation, location_stack: obj3.analyticsLocations } = closure_0);
              closure_1 = setCurrentAnalyticsStep(function*() {
                let c0;
                yield closure_1_40(closure_2_2);
                return arg1;
              });
              obj9 = { load_id: closure_0.load_id, succeededOnlyFields: obj17 };
              obj17 = { is_custom_message_edited: first3 !== intl.string(closure_0(onClose[18]).t.ZkOo1U), is_custom_emoji_sound_available: false };
              intl = closure_0(onClose[18]).intl;
              handlePremiumPurchase(obj8);
            } else {
              const tmp8 = closure_1_19(false);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp51) {
          c5 = 3;
          throw tmp51;
        }
      }
    });
    const items12 = [callback, callback1, setCurrentAnalyticsStep, memo1, handlePremiumPurchase, productIdForGift, basePurchaseAnalytics, callback2, callback3, orderContext.orderId, first3];
    callback21 = useCallback2(function() {
      return closure_0(...arguments);
    }, items12);
    const items13 = [orderContext, recipientUserId, stateFromStores, first2, premiumType, first1, productIdForGift, first3, first4, first5, first6, first7, first10, basePurchaseAnalytics, setCurrentAnalyticsStep, tmp5, tmp9, onClose, callback21, stateFromStoresArray, fetchClaimableGiftingPromotionRewardSkuIds, first9, tmp29];
    let obj8 = {
      value: obj.useMemo(() => {
          const obj = { recipientUserId, recipientUser: stateFromStores, giftStyle: first2, premiumType, planInterval: first1, productId: productIdForGift, customGiftMessage: first3, soundEffect: first4, emojiConfetti: first5, giftCodeRecord: first6, isPurchasing: first7, prePurchaseGiftingBadgeProgress: first10, basePurchaseAnalytics, setCurrentAnalyticsStep, setPremiumType, setPlanInterval, setGiftStyle, setCustomGiftMessage, setSoundEffect, setEmojiConfetti, onClose, onPurchase: callback21, allRewards: stateFromStoresArray, claimableRewards: fetchClaimableGiftingPromotionRewardSkuIds, selectedGiftingPromotionReward: first9, setSelectedGiftingPromotionReward };
          const merged = Object.assign(orderContext);
          return obj;
        }, items13),
      children
    };
    return first6(first7.Provider, obj8);
  }
};
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;
