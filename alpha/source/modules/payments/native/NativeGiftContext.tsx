// Module ID: 10690
// Function ID: 10691
// Name: NativeGiftContext
// Dependencies: [5, 32, 19, 8840, 9720, 10691, 1385, 1072, 7677, 1387, 1083, 21, 3, 7692, 10692, 7693, 4955, 10693, 1113, 10694, 2171, 7672, 10695, 10732, 504, 10733, 10740, 8845, 8832, 6093, 1252, 7415, 10741, 572, 1377, 10688, 10707, 2]
// Exports: NativeGiftContextProvider

// Module 10690 (NativeGiftContext)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import intl3 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6093 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7415 */;
import Constants3 from "Constants" /* 7677 */;
import ContextUtilsDefault from "ContextUtils" /* 7692 */;
import BadgeId from "BadgeId" /* 8832 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8845 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10688 */;
import PremiumGiftingIntentActionCreators from "PremiumGiftingIntentActionCreators" /* 10741 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8840 */;
import PromotionsStore from "PromotionsStore" /* 9720 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10691 */;
import UserStore from "UserStore" /* 1385 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let c3, c7, closure_3, closure_5, constants;

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
let tmp4 = new LoggerDefault("NativeGiftContext");
let closure_17 = tmp4;
[closure_18, tmp6, tmp7] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 3);
let result = size.fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export function NativeGiftContextProvider(basePurchaseAnalytics) {
  let children;
  let initialOrder;
  let obj7;
  let onClose;
  let order;
  let planInterval;
  let premiumType;
  let revision;
  let setOrder2;
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
  let setOrder;
  let planIdForPremiumType;
  let productIdForGift;
  let skuId;
  let payment_gateway;
  let handlePremiumPurchase;
  let createOrReuseGiftOrder;
  let stateFromStoresArray;
  let fetchClaimableGiftingPromotionRewardSkuIds;
  let closure_36;
  let enabled;
  let stateFromStores;
  let memo1;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
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
  let tmp10 = basePurchaseAnalytics;
  let tmp11 = onClose;
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
  let tmp29 = tmp2Result18[1];
  setSelectedGiftingPromotionReward = tmp29;
  const tmp2Result19 = tmp2(obj.useState(null), 2);
  first10 = tmp2Result19[0];
  closure_25 = tmp2Result19[1];
  let obj3 = basePurchaseAnalytics(onClose[19]);
  orderContext = obj3.useOrderContext(initialOrder, "NativeGiftContext");
  setOrder = orderContext.setOrder;
  let obj4 = basePurchaseAnalytics(onClose[20]);
  planIdForPremiumType = obj4.getPlanIdForPremiumType(premiumType, first1);
  let obj5 = basePurchaseAnalytics(onClose[21]);
  productIdForGift = obj5.getProductIdForGift(planIdForPremiumType);
  let tmp35 = first5[planIdForPremiumType];
  if (null == tmp35) {
    const tmp67 = globalThis;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    let str = "Invalid subscription plan for gift purchase: ";
    const self = this;
    const self2 = this;
    let error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
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
    const tmp10Result5 = tmp10(tmp11[23]);
    createOrReuseGiftOrder = tmp10Result5.useCreateOrReuseGiftOrder("NativeGiftContext");
    let tmp40 = setPlanInterval;
    const items1 = [setPlanInterval];
    const tmp10Result6 = tmp10(tmp11[24]);
    stateFromStoresArray = tmp10Result6.useStateFromStoresArray(items1, () => setPlanInterval.getGiftPromotionRewardSkuIds());
    const tmp10Result7 = tmp10(tmp11[25]);
    fetchClaimableGiftingPromotionRewardSkuIds = tmp10Result7.useFetchClaimableGiftingPromotionRewardSkuIds();
    let tmp42 = null != fetchClaimableGiftingPromotionRewardSkuIds;
    if (tmp42) {
      let num = 0;
      tmp42 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
    }
    closure_36 = tmp42;
    let obj10 = recipientUserId(tmp11[26]);
    enabled = obj10.useConfig({ location: "NativeGiftContext" }).enabled;
    const items2 = [enabled];
    const effect = obj.useEffect(() => {
      const tmp = enabled;
      if (tmp) {
        const obj = BadgeDirectoryActionCreators;
        const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    }, items2);
    const items3 = [setGiftStyle];
    const tmp10Result8 = tmp10(tmp11[24]);
    stateFromStores = tmp10Result8.useStateFromStores(items3, () => {
      let user;
      if (null != recipientUserId) {
        user = UserStore.getUser(tmp);
      }
      return user;
    });
    const items4 = [first2, recipientUserId, first3, , , , , ];
    let id;
    const useMemo = obj.useMemo;
    const tmp43 = recipientUserId;
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
    const items6 = [first9, tmp42];
    const effect2 = obj.useEffect(() => {
      const tmp = closure_36;
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
    ({ order, revision, setRevision, setOrder: setOrder2 } = orderContext);
    let closure_10 = tmp5;
    setCustomGiftMessage = tmp9;
    let closure_12 = tmp26;
    let obj6 = { orderId: "a", planId: "flexDirection", planSelection: obj7, giftInfo: "conjure.town" };
    obj7 = { premiumType, planInterval: first1 };
    constants = obj.useRef(obj6);
    let closure_14 = obj.useRef(false);
    setEmojiConfetti = obj.useRef(null);
    let num2 = 0;
    const tmp2Result20 = tmp2(obj.useState(0), 2);
    let closure_16 = tmp55;
    const first11 = tmp2Result20[0];
    const tmp56 = tmp43(tmp11[14])(tmp2Result20[1]);
    const waitForPause = tmp56.waitForPause;
    const flush = tmp56.flush;
    const waitForSync = tmp56.waitForSync;
    const resolveSyncs = tmp56.resolveSyncs;
    const isAwaitingSync = tmp56.isAwaitingSync;
    const items7 = [order, revision, planIdForPremiumType, memo, memo1, first7, premiumType, first1, tmp5, tmp9, setRevision, setOrder2, tmp26, first11, resolveSyncs, waitForPause, isAwaitingSync];
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
        ref.current.giftInfo = null;
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
                  let tmp30 = setOrder2;
                  const promise = setOrder2(function*(arg0, value) {
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
                const obj11 = recipientUserId(onClose[33]);
                const subscription = obj11.subscribe("GIFT_CODE_CREATE", error);
                const obj12 = error(onClose[34]);
                if (!obj12.isAndroid()) {
                  if (null != closure_1_26.orderId) {
                    if (closure_1_31 !== constants.APPLE_ADVANCED_COMMERCE) {
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
    const items10 = [skuId, orderContext.orderId, payment_gateway];
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
    const items12 = [setOrder, createOrReuseGiftOrder, planIdForPremiumType, recipientUserId, productIdForGift, onClose];
    callback4 = obj.useCallback(setCurrentAnalyticsStep(function*(arg0, value) {
      let c2;
      let closure_0;
      let closure_1;
      let intl;
      let intl2;
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              onClose = 1;
              basePurchaseAnalytics = setOrder;
              const obj4 = { planId: planIdForPremiumType, recipientUserId, productId: productIdForGift };
              c3 = 2;
              c4 = 1;
              const obj5 = { value: createOrReuseGiftOrder(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              onClose = 0;
              const obj6 = { title: intl.string(basePurchaseAnalytics(onClose[18]).t.R0RpRX), body: intl2.string(basePurchaseAnalytics(onClose[18]).t.CKsXk3) };
              const show = tmp(onClose[29]).show;
              const tmp10 = tmp(onClose[29]);
              intl = basePurchaseAnalytics(onClose[18]).intl;
              intl2 = basePurchaseAnalytics(onClose[18]).intl;
              show(obj6);
              closure_129_2();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              onClose = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              basePurchaseAnalytics(value);
              onClose = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          if (0 === onClose) {
            c4 = 3;
            throw tmp20;
          } else {
            c3 = 1;
          }
        }
      }
    }), items12);
    const useCallback2 = obj.useCallback;
    basePurchaseAnalytics = setCurrentAnalyticsStep(function*(arg0, value) {
      let error;
      let intl;
      let obj12;
      let obj13;
      let obj17;
      let obj18;
      let request_reference_id;
      closure_0 = arg0;
      if (c7 === 2) {
        c7 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const str2 = "GPLAY_UPDATE_PURCHASE_STATE";
        const str3 = "Failed to mark order signing-in-progress";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c5;
          try {
            let orderId;
            let tmp;
            c7 = 2;
            const tmp4 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                orderId = undefined;
                let closure_2;
                tmp = undefined;
                const obj19 = nextTier;
                if (null != nextTier.getNextTier(closure_0(onClose[28]).BadgeId.GIFTING)) {
                  const singleRequirementProgress = obj19.getSingleRequirementProgress(closure_0(onClose[28]).BadgeId.GIFTING);
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
                c6 = 1;
                c7 = 1;
                let obj5 = { value: callback(), done: false };
                return obj5;
              }
            } else {
              let obj;
              if (1 === tmp4) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  let obj6 = { value, done: true };
                  return obj6;
                } else {
                  if (value) {
                    tmp = callback1(closure_0);
                    let obj7 = closure_0(onClose[34]);
                    enabled = obj7.isAndroid();
                    if (enabled) {
                      const tmp35 = closure_0;
                      const AndroidNitroGiftOrdersExperiment = closure_0(onClose[36]).AndroidNitroGiftOrdersExperiment;
                      enabled = AndroidNitroGiftOrdersExperiment.getConfig({ location: "NativeGiftContext" }).enabled;
                    }
                    if (enabled) {
                      orderId = orderContext.orderId;
                    }
                    if (null != orderId) {
                      c5 = 1;
                      c6 = 3;
                      c7 = 1;
                      let obj10 = { value: obj13.markOrderAsSigningInProgress(orderId), done: false };
                      obj13 = closure_0(onClose[15]);
                      return obj10;
                    }
                  } else {
                    const tmp25 = tmp;
                    const tmp27 = closure_1_19(false);
                  }
                  c7 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } else if (2 === tmp4) {
                c5 = 0;
                let obj2 = closure_0(onClose[16]);
                const obj11 = { tags: { source: "NativeGiftContext_onPurchase_sign" }, extra: obj12 };
                obj12 = { skuId, orderId };
                let result = obj2.captureBillingException(error, obj11);
                const obj14 = { error, skuId, orderId };
                const errorResult = logger.error("Failed to mark order signing-in-progress", obj14);
                const tmp21 = closure_1_19(false);
                closure_1_21(error);
                c7 = 3;
                const obj15 = { value: undefined, done: true };
                return obj15;
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c5 = 0;
              }
              let obj8 = closure_0(onClose[34]);
              if (obj8.isAndroid()) {
                function handleGPlayUpdatePurchaseAction() {
                  return obj(...arguments);
                }
                obj = function _handleGPlayUpdatePurchaseAction() {
                  obj = closure_3((error) => {
                    c6 = 0;
                    c7 = 0;
                    let c4 = 0;
                    return (function*(arg0, value) {
                      let obj7;
                      let obj9;
                      if (c7 === 2) {
                        c7 = 3;
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
                          c7 = 2;
                          if (0 === c6) {
                            if (arg0 === 1) {
                              c7 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c7 = 3;
                              return { value, done: true };
                            } else {
                              closure_3 = tmp;
                              closure_2 = tmp4;
                              if (error.isActivePurchase) {
                                const obj6 = orderId(closure_2_2[33]);
                                obj6.unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
                                if (error.billingResult !== constants.OK) {
                                  if (null != orderId) {
                                    if (error.billingResult === tmp25.USER_CANCELED) {
                                      c4 = 1;
                                      closure_1 = closure_1_27;
                                      c6 = 2;
                                      c7 = 1;
                                      const obj5 = { value: obj7.cancelOrderSigning(orderId), done: false };
                                      obj7 = closure_2_0(closure_2_2[15]);
                                      return obj5;
                                    }
                                  }
                                }
                              }
                              c7 = 3;
                              return { value: "HermesInternal", done: null };
                            }
                          } else if (1 === c6) {
                            c4 = 0;
                            error = closure_5;
                            const obj8 = { tags: { source: "NativeGiftContext_cancelOrderSigning" }, extra: obj9 };
                            obj9 = { skuId, orderId: closure_131_1 };
                            const obj2 = closure_2_0(closure_2_2[16]);
                            const result = obj2.captureBillingException(error, obj8);
                            const obj10 = { error, skuId, orderId: closure_131_1 };
                            logger.error("Failed to cancel order signing", obj10);
                          } else if (arg0 === 1) {
                            c7 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c7 = 3;
                            return { value, done: true };
                          } else {
                            closure_1(value);
                            c4 = 0;
                          }
                          closure_1_43(closure_131_3);
                        } catch (tmp35) {
                          closure_5 = tmp35;
                          if (0 === c4) {
                            c7 = 3;
                            throw tmp35;
                          } else {
                            c6 = 1;
                          }
                        }
                      }
                    })();
                  });
                  return obj(...arguments);
                };
                let obj9 = recipientUserId(onClose[33]);
                const subscription = obj9.subscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
              }
              tmp(closure_0(onClose[35]).PaymentFlowStep.REVIEW);
              const obj16 = {
                productId,
                skuId,
                isGift: true,
                analyticsLoadId: closure_0.load_id,
                analyticsLocation: closure_0.location,
                analyticsLocations: closure_0.location_stack,
                allowPlanChange: false,
                giftInfoOptions,
                onPurchaseComplete() {
                          return closure_1_2(...arguments);
                        },
                onPurchaseError() {
                          return closure_2_43(closure_1_3);
                        },
                onOrderRevertedToDraft,
                onPurchaseIncomplete,
                orderId: orderContext.orderId,
                orderPaymentGateway,
                requestReferenceId: request_reference_id,
                analyticsData: obj17
              };
              closure_2 = setCurrentAnalyticsStep(function*() {
                let c0;
                yield closure_1_42(closure_2_3);
                return arg1;
              });
              const order = orderContext.order;
              request_reference_id = undefined;
              const tmp57 = handlePremiumPurchase;
              if (order != null) {
                const external_gateway_facet = order.external_gateway_facet;
                if (external_gateway_facet != null) {
                  request_reference_id = external_gateway_facet.request_reference_id;
                }
              }
              obj17 = { load_id: closure_0.load_id, succeededOnlyFields: obj18 };
              obj18 = { is_custom_message_edited: first3 !== intl.string(closure_0(onClose[18]).t.ZkOo1U), is_custom_emoji_sound_available: false };
              intl = closure_0(onClose[18]).intl;
              tmp57(obj16);
            }
          } catch (tmp96) {
            error = tmp96;
            if (0 === c5) {
              c7 = 3;
              throw tmp96;
            } else {
              c6 = 2;
            }
          }
        }
      }
    });
    const items13 = [callback, callback1, setCurrentAnalyticsStep, memo1, handlePremiumPurchase, productIdForGift, skuId, payment_gateway, basePurchaseAnalytics, callback2, callback3, callback4, , , , ];
    ({ orderId: arr15[12], order: arr15[13] } = orderContext);
    items13[14] = setOrder;
    items13[15] = first3;
    callback21 = useCallback2(function() {
      return closure_0(...arguments);
    }, items13);
    const items14 = [orderContext, recipientUserId, stateFromStores, first2, premiumType, first1, productIdForGift, first3, first4, first5, first6, first7, first10, basePurchaseAnalytics, setCurrentAnalyticsStep, tmp5, tmp9, onClose, callback21, stateFromStoresArray, fetchClaimableGiftingPromotionRewardSkuIds, first9, tmp29];
    let obj8 = {
      value: obj.useMemo(() => {
          const obj = { recipientUserId, recipientUser: stateFromStores, giftStyle: first2, premiumType, planInterval: first1, productId: productIdForGift, customGiftMessage: first3, soundEffect: first4, emojiConfetti: first5, giftCodeRecord: first6, isPurchasing: first7, prePurchaseGiftingBadgeProgress: first10, basePurchaseAnalytics, setCurrentAnalyticsStep, setPremiumType, setPlanInterval, setGiftStyle, setCustomGiftMessage, setSoundEffect, setEmojiConfetti, onClose, onPurchase: callback21, allRewards: stateFromStoresArray, claimableRewards: fetchClaimableGiftingPromotionRewardSkuIds, selectedGiftingPromotionReward: first9, setSelectedGiftingPromotionReward };
          const merged = Object.assign(orderContext);
          return obj;
        }, items14),
      children
    };
    return first6(first7.Provider, obj8);
  }
}
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;
