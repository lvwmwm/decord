// Module ID: 7667
// Function ID: 7668
// Name: PremiumPlanSelectionActionSheet
// Dependencies: [109, 5, 32, 19, 17, 7668, 2113, 7484, 7665, 1378, 1078, 1185, 4740, 1089, 21, 4758, 580, 4418, 558, 568, 1119, 4754, 38, 7675, 1885, 504, 13611, 7481, 5188, 5173, 5182, 11001, 7661, 4693, 7694, 8324, 9491, 8444, 7409, 7429, 5813, 10961, 7650, 5203, 11107, 4725, 1245, 7649, 1613, 5111, 11002, 5081, 7653, 4610, 11019, 11020, 11021, 11022, 11023, 11024, 1368, 2112, 7397, 11567, 7401, 5802, 8885, 13612, 1181, 9477, 11005, 11103, 2]
// Exports: default, getItemsByPremiumTypePredicate

// Module 7667 (PremiumPlanSelectionActionSheet)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import NumberUtils from "NumberUtils" /* 1885 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import PremiumUtils from "PremiumUtils" /* 4418 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5182 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 7650 */;
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader" /* 7675 */;
import ACOMExperiments from "ACOMExperiments" /* 9477 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 11103 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 11107 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2113 */;
import IAPStore from "IAPStore" /* 7484 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
function renderPlanOptionBadge(arg0) {
  ({ customBadgeComponent, discount } = arg0);
  if (null == customBadgeComponent) {
    if (tmp3) {
      customBadgeComponent = null;
    } else if (tmp2) {
      const obj2 = { text: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(util.t.iQTfWx);
      let tmp4 = __initData8(closure_40, obj2);
    } else if (null != discount) {
      const obj = { text: null };
      const intl = util.intl;
      const obj4 = { discount: NumberUtils.formatPercent(tmp, discount / 100) };
      obj.text = intl.format(util.t.IAybsG, obj4);
      tmp4 = __initData8(closure_40, obj);
    }
  }
  return customBadgeComponent;
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  ({ applicationId: require, analyticsLocation, premiumType } = premiumItems);
  premiumItems = premiumItems.premiumItems;
  const onPaymentStart = premiumItems.onPaymentStart;
  const onPaymentSuccess = premiumItems.onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ analyticsLocations, userIsEligibleForBogoPromotion, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  c12 = undefined;
  orderRequired = undefined;
  isPatchOrderLoading = undefined;
  closure_15 = undefined;
  discountedPriceString = undefined;
  first = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  let analyticsLocations2;
  closure_21 = undefined;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  c25 = undefined;
  let memo1;
  constants2 = async function _onPlanSelectionChange(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            if (!ref.current) {
              if (!isPatchOrderLoading) {
                find = find.find;
                const found = find((productId) => productId.productId === closure_1_0);
                closure_129_1 = found;
                if (null != found) {
                  if (found !== first) {
                    find = closure_0(tmp3[52]).getSubscriptionItemsForProduct(tmp35);
                    ref.current = true;
                    c4 = 1;
                    const obj5 = closure_0(tmp3[52]);
                  }
                  c5 = 2;
                  c6 = 1;
                  const obj4 = {
                    value: _undefined(find.map((planId) => {
                                    const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                                    const obj2 = closure_1_0(4418);
                                    obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(4418).getSkuIdForPlan(planId.planId));
                                    ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                                    obj.purchase_type = constants.SUBSCRIPTION;
                                    return obj;
                                  })),
                    done: false
                  };
                  return obj4;
                }
              }
            }
            c6 = 3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_130_19.current = false;
          throw closure_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_130_19.current = false;
          c6 = 3;
          let obj = { value, done: true };
          return obj;
        } else if (null == value) {
          c4 = 0;
          closure_130_19.current = false;
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
        closure_130_18(closure_129_1);
        c4 = 0;
        closure_130_19.current = false;
      } catch (tmp25) {
        closure_3 = tmp25;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp25;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  let tmp = closure_38();
  _slicedToArray = tmp;
  const tmp2 = closure_15((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  noop = tmp2;
  const tmp5 = premiumItems;
  let tmp3 = closure_15((mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus);
  const items = [c12];
  let stateFromStores = require("initialize").useStateFromStores(items, () => _undefined.isBusy());
  let obj = require("initialize");
  const tmp6 = c12;
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const ref = noop.useRef(null);
  const items1 = [tmp2, isScreenReaderEnabled];
  const effect = noop.useEffect(() => {
    let tmp = closure_7;
    if (closure_7) {
      tmp = isScreenReaderEnabled;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items1);
  let obj2 = require("useIsScreenReaderEnabled");
  const handlePremiumPurchase = require("handlePremiumPurchase").useHandlePremiumPurchase();
  let obj4 = require("handlePremiumPurchase");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const tmp14 = premiumType(premiumItems[33])();
  const tmp15 = handlePremiumPurchase((orderRecord) => orderRecord.orderRecord);
  closure_11 = tmp15;
  let obj5 = require("BlockedPaymentsCountryExperiment");
  ({ patchOrderLineItems: c12, isPatchOrderLoading, orderRequired } = handlePremiumPurchase((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired })));
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = handlePremiumPurchase((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  const tmp16 = handlePremiumPurchase((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  const premiumTrialOffer = require("usePremiumTrialOffer").usePremiumTrialOffer();
  const tmp4Result = require("usePremiumTrialOffer");
  const premiumDiscountOffer = require("usePremiumDiscountOffer").usePremiumDiscountOffer();
  let tmp19 = null != premiumTrialOffer && null != premiumType;
  if (tmp19) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp19 = skuId === tmp13(tmp5[17]).getSkuIdForPremiumType(premiumType);
    const tmp13Result = tmp13(tmp5[17]);
  }
  let tmp21 = tmp19;
  if (tmp21) {
    let tmp22 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (tmp15 != null) {
        const subscriptionFacet = tmp15.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp22 = premiumTrialOffer.trialId === subscriptionTrialId;
    }
    tmp21 = tmp22;
  }
  closure_15 = tmp21;
  const tmp4Result13 = require("usePremiumDiscountOffer");
  const discountedPremiumProductInfo = require("useDiscountedPremiumProductInfo").useDiscountedPremiumProductInfo(premiumDiscountOffer, premiumItems);
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  const tmp4Result14 = require("useDiscountedPremiumProductInfo");
  let productId;
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  let obj6 = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  obj6.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = require("useCheckoutPlanPriceString").useCheckoutPlanDiscountPrices(productId, obj6);
  [first, closure_18] = noop.useState(initialSelectedItem);
  closure_19 = obj3.useRef(false);
  const tmp4Result15 = require("useCheckoutPlanPriceString");
  const items2 = [tmp6];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let product = null;
    if (null != first) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp4Result16 = require("initialize");
  const tmp4Result17 = require("useBottomSheetRef");
  analyticsLocations2 = premiumType(tmp5[38])(analyticsLocations, tmp13(tmp5[39]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
  const tmp32 = premiumType(tmp5[40])(() => require("PremiumAnalyticsUtils").getNewAnalyticsLoadId());
  closure_21 = tmp32;
  const items3 = [premiumType];
  memo = obj3.useMemo(() => {
    const obj = PremiumUtils;
    return obj.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPremiumType(premiumType));
  }, items3);
  const tmp13Result8 = premiumType(tmp5[38]);
  let obj7 = { analyticsLoadId: tmp32, analyticsLocation: null, analyticsLocations: null };
  let merged = Object.assign(analyticsLocation);
  obj7.analyticsLocation = { object: constants2.BUTTON_CTA, object_type: memo1.BUY };
  obj7.analyticsLocations = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields(obj7);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  function onClose() {
    discountedPriceString();
    premiumType(premiumItems[45]).hideActionSheet();
  }
  let obj8 = { object: constants2.BUTTON_CTA, object_type: memo1.BUY };
  const tmp4Result18 = require("PremiumAnalyticsUtils");
  let result = require("MobileWebRedirectCheckoutUtils").isMobileWebRedirectCheckoutEnabled();
  c25 = result;
  premiumType(tmp5[43])(() => {
    const obj2 = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj2.application_id = application_id;
    obj2.subscription_plan_id = basePlanId;
    obj2.sku_id = memo;
    let customCheckoutFlowForAnalytics;
    if (c25) {
      customCheckoutFlowForAnalytics = MobileWebRedirectCheckoutUtils.getCustomCheckoutFlowForAnalytics();
      const tmpResult = MobileWebRedirectCheckoutUtils;
    }
    obj2.custom_checkout_flow = customCheckoutFlowForAnalytics;
    const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
  });
  const items4 = [memo, basePurchaseFlowAnalyticsFields, tmp32, analyticsLocations2, handlePremiumPurchase, result, onPaymentDismiss, onPaymentStart, onPaymentSuccess, tmp15, first];
  const items5 = [tmp21, result];
  const callback = obj3.useCallback(onPaymentDismiss(function*(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            premiumType = tmp7;
            closure_129_0 = undefined;
            let obj8 = closure_0;
            if (closure_0 === undefined) {
              obj8 = { shouldRedirectToMobileWeb: false };
            }
            closure_129_0 = obj8.shouldRedirectToMobileWeb;
            basePlanId = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            let paymentFlowStepAnalyticsFields;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              premiumType(tmp3[22])(null != closure_130_17, "cannot start payment without a selectedItem");
              basePlanId = closure_130_17.basePlanId;
              let tmp33 = closure_130_25;
              if (closure_130_25) {
                tmp33 = closure_129_0;
              }
              closure_129_2 = tmp33;
              const PaymentFlowStep = closure_0(tmp3[41]).PaymentFlowStep;
              if (closure_129_2) {
                let EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
              } else {
                EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
              }
              closure_129_3 = EXTERNAL_PAYMENT;
              const obj10 = { from_step: closure_0(tmp3[41]).PaymentFlowStep.PLAN_SELECT, to_step: closure_129_3, subscription_plan_gateway_plan_id: closure_130_17.productId, sku_id: closure_130_22 };
              paymentFlowStepAnalyticsFields = closure_0(tmp3[41]).getPaymentFlowStepAnalyticsFields(closure_130_23, obj10);
              if (!closure_129_2) {
                premiumType(tmp3[46]).track(constants.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
                const obj7 = premiumType(tmp3[46]);
              }
              const obj12 = { productId: closure_130_17.productId, onPaymentStart: closure_130_3, onPaymentSuccess: closure_130_4, onPaymentDismiss: closure_130_5 };
              orderRequired(obj12);
              if (closure_129_2) {
                const obj11 = closure_0(tmp3[47]);
                const obj13 = { planId: basePlanId, isGift: false, loadId: closure_130_21 };
                const result = obj11.goToStandalonePremiumCheckoutFromMobileApp("premium_plan_selection_action_sheet", obj13, () => {
                  if (obj.isMetaQuest()) {
                    closure_1_16();
                    closure_1_1(4725).hideActionSheet();
                    const obj3 = closure_1_1(4725);
                  } else {
                    isPatchOrderLoading("in_mobile_web");
                    premiumType(premiumItems[46]).track(constants.PAYMENT_FLOW_STEP, closure_1_4);
                    const obj2 = premiumType(premiumItems[46]);
                  }
                }, () => {
                  const obj2 = { title: null, body: null, hideActionSheet: true };
                  const intl = closure_1_0(1119).intl;
                  obj2.title = intl.string(closure_1_0(1119).t.NrBVjw);
                  const intl2 = closure_1_0(1119).intl;
                  obj2.body = intl2.string(closure_1_0(1119).t["gD+grx"]);
                  closure_1_1(5111).show(obj2);
                });
              } else {
                c4 = 1;
                const obj14 = { productId: closure_130_17.productId, analyticsLocation: closure_130_23.location, analyticsLoadId: closure_130_21, analyticsLocations: closure_130_20, orderId: null };
                let id;
                if (closure_130_11 != null) {
                  id = closure_130_11.id;
                }
                obj14.orderId = id;
                c5 = 3;
                c6 = 1;
                const obj15 = { value: closure_130_10(obj14), done: false };
                return obj15;
              }
              const obj5 = closure_0(tmp3[41]);
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
              closure_129_5 = closure_3;
              if (closure_129_5 instanceof premiumType(tmp3[50])) {
                const subscriptions = closure_0(tmp3[51]).fetchSubscriptions();
                let obj2 = closure_0(tmp3[51]);
                const obj16 = { title: null, body: null, hideActionSheet: true };
                let intl = closure_0(tmp3[20]).intl;
                obj16.title = intl.string(closure_0(tmp3[20]).t["U+H+kd"]);
                let intl2 = closure_0(tmp3[20]).intl;
                obj16.body = intl2.string(closure_0(tmp3[20]).t.F9ktNa);
                premiumType(tmp3[49]).show(obj16);
                let obj3 = premiumType(tmp3[49]);
              } else {
                throw closure_129_5;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c6 = 3;
        }
      } catch (tmp82) {
        closure_3 = tmp82;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp82;
        } else {
          c5 = tmp;
        }
      }
    }
  }), items4);
  memo1 = obj3.useMemo(() => {
    if (c25) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.rylrdY);
    } else if (closure_15) {
      const tmp2Result = tmp2(1368);
      const intl2 = util.intl;
      const string = intl2.string;
      let rKD72m = util.t;
      if (isAndroidResult) {
        rKD72m = rKD72m.rKD72m;
        let stringResult1 = string(rKD72m);
      } else {
        stringResult1 = string(rKD72m.bboTul);
      }
      isAndroidResult = tmp2(1368).isAndroid();
    } else {
      const intl = tmp2(1119).intl;
      stringResult = intl.string(util.t.nIlrxd);
    }
    return stringResult;
  }, items5);
  const items6 = [tmp2, first, tmp21, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = obj3.useMemo(() => {
    if (closure_7) {
      return null;
    } else {
      let interval;
      if (first != null) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else if (closure_15) {
        const obj2 = { style: selectedPremiumType.legalDisclaimerText, variant: "text-xxs/medium", children: null };
        const intl3 = util.intl;
        const tmp31 = __initData8;
        const t = util.t;
        const obj4 = { paidURL: constants3.PAID_TERMS, interval: null, cancelURL: null };
        const isAndroidResult = PlatformUtils.isAndroid();
        const tmp42 = PlatformUtils.isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj4.interval = PremiumUtilsDefault.getIntervalStringAsNoun(interval);
        obj4.cancelURL = HelpdeskUtilsDefault.getArticleURL(constants4.PREMIUM_DETAILS_CANCEL_SUB);
        obj2.children = intl3.format(tmp42, obj4);
        return tmp31(Text_Text.Text, obj2);
      } else if (null != discountedPriceString) {
        const obj5 = { style: selectedPremiumType.legalDisclaimerText, variant: "text-xxs/medium", children: null };
        const intl2 = util.intl;
        const obj9 = { buttonText: memo1, interval: PremiumUtilsDefault.formatInterval(interval), cancelSubscriptionArticle: null, paidServiceTermsArticle: null };
        obj9.cancelSubscriptionArticle = HelpdeskUtilsDefault.getArticleURL(constants4.PREMIUM_DETAILS_CANCEL_SUB);
        obj9.paidServiceTermsArticle = HelpdeskUtilsDefault.getArticleURL(constants4.PAID_TERMS);
        obj5.children = intl2.format(util.t["3uC7vj"], obj9);
        return __initData8(Text_Text.Text, obj5);
      } else {
        const t2 = util.t;
        const isAndroidResult1 = PlatformUtils.isAndroid();
        const obj = { style: selectedPremiumType.legalDisclaimerText, variant: "text-xxs/medium", children: null };
        const intl = util.intl;
        const obj11 = { paidURL: constants3.PAID_TERMS, interval: null, ctaText: null };
        const tmp3 = PlatformUtils.isAndroid() ? t2.COObWR : t2["7wpqfj"];
        obj11.interval = PremiumUtilsDefault.getIntervalStringAsNoun(interval);
        obj11.ctaText = memo1;
        obj.children = intl.format(tmp3, obj11);
        return __initData8(Text_Text.Text, obj);
      }
    }
  }, items6);
  let obj9 = { ref: tmp4Result17.useBottomSheetRef().bottomSheetRef, handleDisabled: true, onDismiss: discountedPriceString, startExpanded: true, children: null };
  if (isPaymentsBlocked) {
    let obj10 = { style: tmp.blockedPaymentContainer, children: null };
    const items7 = [tmp42(tmp13(tmp5[63]), {}), ];
    let obj11 = { variant: "floating", onPress: onClose };
    items7[1] = tmp42(tmp4(tmp5[64]).ActionSheetHeaderBar, obj11);
    obj10.children = items7;
    let tmp43Result = tmp43(isScreenReaderEnabled, obj10);
  } else {
    let obj12 = { premiumType, isPaymentSuccess: tmp2, selectedPremiumType: null, trialOffer: null, discountOffer: null };
    let premiumTier;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    obj12.selectedPremiumType = premiumTier;
    obj12.trialOffer = premiumTrialOffer;
    let tmp47 = null;
    if (null != discountedPriceString) {
      tmp47 = premiumDiscountOffer;
    }
    obj12.discountOffer = tmp47;
    const items8 = [tmp42(closure_39, obj12), , ];
    let obj13 = { style: tmp.body, children: null };
    if ("in_mobile_web" === tmp3) {
      let obj14 = { size: "large", style: tmp.loadingIndicator };
      let tmp43Result3 = tmp42(ref, obj14);
    } else if (tmp2) {
      let obj15 = { style: tmp.contentActivated, children: null };
      let obj16 = { ref, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
      const intl5 = tmp4(tmp5[20]).intl;
      obj16.accessibilityLabel = intl5.string(tmp4(tmp5[20]).t["Q+BB2w"]);
      let premiumTier1;
      if (first != null) {
        premiumTier1 = first.premiumTier;
      }
      if (closure_19.TIER_0 === premiumTier1) {
        if (tmp4Result20.isThemeDark(tmp14)) {
          let tmp13Result10 = tmp13(tmp5[54]);
        } else {
          tmp13Result10 = tmp13(tmp5[55]);
        }
        tmp4Result20 = tmp4(tmp5[53]);
      } else {
        if (tmp69.TIER_1 === premiumTier1) {
          if (tmp4Result21.isThemeDark(tmp14)) {
            let tmp13Result11 = tmp13(tmp5[56]);
          } else {
            tmp13Result11 = tmp13(tmp5[57]);
          }
          let tmp70 = tmp13Result11;
          tmp4Result21 = tmp4(tmp5[53]);
        } else if (tmp69.TIER_2 === premiumTier1) {
          if (tmp4Result22.isThemeDark(tmp14)) {
            let tmp13Result12 = tmp13(tmp5[58]);
          } else {
            tmp13Result12 = tmp13(tmp5[59]);
          }
          tmp70 = tmp13Result12;
          tmp4Result22 = tmp4(tmp5[53]);
        }
        const obj17 = { source: tmp70 };
        obj16.children = tmp42(tmp13Result9, obj17);
        const items9 = [tmp42(tmp48, obj16), ];
        let obj18 = { style: tmp.contentActivatedText, variant: "text-md/semibold", children: null };
        let premiumTier2;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (tmp69.TIER_0 === premiumTier2) {
          const intl7 = tmp4(tmp5[20]).intl;
          let stringResult = intl7.string(tmp4(tmp5[20]).t["6WWrVM"]);
          obj18.children = stringResult;
          obj18 = tmp42(tmp4(tmp5[21]).Text, obj18);
          items9[1] = obj18;
          obj15.children = items9;
          tmp43(tmp48, obj15);
        } else if (tmp69.TIER_1 !== premiumTier2) {
          if (tmp69.TIER_2 === premiumTier2) {
            const intl8 = tmp4(tmp5[20]).intl;
            stringResult = intl8.string(tmp4(tmp5[20]).t.I7xNzI);
          }
        }
        const intl6 = tmp4(tmp5[20]).intl;
        stringResult = intl6.string(tmp4(tmp5[20]).t.LAAgsy);
      }
      tmp13Result9 = tmp13(tmp5[65]);
    } else {
      const obj19 = { convertToMajorUnits: tmp4(tmp5[60]).isAndroid() };
      if (flag) {
        flag = !tmp21;
      }
      const obj20 = { style: tmp.contentSelectPlan, children: null };
      if (tmp21) {
        const obj21 = { variant: "text-md/normal", color: "text-strong", style: tmp.trialDisclaimer, children: null };
        let intl2 = tmp4(tmp5[20]).intl;
        obj21.children = intl2.string(tmp4(tmp5[20]).t.u95Dt4);
        let tmp42Result3 = tmp42(tmp4(tmp5[21]).Text, obj21);
      } else {
        tmp42Result3 = null;
        if (null != checkoutPlanDiscountPrices) {
          tmp42Result3 = null;
          if (null != premiumType) {
            const obj22 = { children: null };
            const obj23 = { variant: "text-md/normal", color: "text-strong", style: tmp.discountDisclaimer, children: null };
            let intl = tmp4(tmp5[20]).intl;
            obj23.children = intl.format(tmp4(tmp5[20]).t.yBn7uz, checkoutPlanDiscountPrices);
            const items10 = [tmp42(tmp4(tmp5[21]).Text, obj23), ];
            const obj24 = { style: null };
            const items11 = [, ];
            ({ divider: arr11[0], offerDividerMargin: arr11[1] } = tmp);
            obj24.style = items11;
            items10[1] = tmp42(tmp48, obj24);
            obj22.children = items10;
            tmp42Result3 = tmp43(tmp48, obj22);
          }
        }
      }
      const items12 = [tmp42Result3, ];
      let stringResult1;
      const tmp4Result23 = tmp4(tmp5[60]);
      if (flag) {
        let intl3 = tmp4(tmp5[20]).intl;
        stringResult1 = intl3.string(tmp4(tmp5[20]).t.u95Dt4);
      }
      const obj25 = { title: stringResult1, titleStyleType: TitleStyleType.NO_BORDER_OR_MARGIN, titleViewStyle: tmp.formTitle, sectionBodyStyle: null, inset: true, children: null };
      const items13 = [tmp.formSectionBody, ];
      let formSectionBodyWithNoTitle = !flag;
      if (!flag) {
        formSectionBodyWithNoTitle = tmp.formSectionBodyWithNoTitle;
      }
      items13[1] = formSectionBodyWithNoTitle;
      obj25.sectionBodyStyle = items13;
      let tmp42Result4 = null != stateFromStores1;
      if (tmp42Result4) {
        tmp42Result4 = "HR" === stateFromStores1.countryCode;
      }
      if (tmp42Result4) {
        tmp42Result4 = stateFromStores1.currencyCode.toLowerCase() === constants5.EUR;
      }
      if (tmp42Result4) {
        const obj26 = { message: null };
        const intl4 = tmp4(tmp5[20]).intl;
        const obj27 = { kunaPriceWithCurrency: null };
        const tmp13Result14 = tmp13(tmp5[67]);
        obj27.kunaPriceWithCurrency = tmp4(tmp5[27]).formatPrice(stateFromStores1.price * closure_31, constants5.HRK, obj19);
        obj26.message = intl4.formatToPlainString(tmp4(tmp5[20]).t["9hnZoK"], obj27);
        tmp42Result4 = tmp42(tmp13Result14, obj26);
        const tmp4Result24 = tmp4(tmp5[27]);
      }
      const items14 = [tmp42Result4, ];
      let str4 = "auto";
      let str5 = "auto";
      if (isPatchOrderLoading) {
        str5 = "none";
      }
      const obj28 = { pointerEvents: str5, accessibilityElementsHidden: isPatchOrderLoading, importantForAccessibility: null, style: null, children: null };
      if (isPatchOrderLoading) {
        str4 = "no-hide-descendants";
      }
      obj28.importantForAccessibility = str4;
      let planOptionsBusy = null;
      if (isPatchOrderLoading) {
        planOptionsBusy = tmp.planOptionsBusy;
      }
      obj28.style = planOptionsBusy;
      let productId1;
      if (first != null) {
        productId1 = first.productId;
      }
      const obj29 = { value: productId1, options: null, onChange: null, withDividers: false, style: null, disabled: null, indicatorLeft: true };
      let productId2;
      if (first != null) {
        productId2 = first.productId;
      }
      let identifier;
      if (discountedProduct != null) {
        identifier = discountedProduct.identifier;
      }
      closure_129_0 = productId2;
      closure_129_1 = premiumTrialOffer;
      closure_129_2 = premiumDiscountOffer;
      closure_129_3 = identifier;
      closure_129_4 = discountedPriceString;
      closure_129_5 = userIsEligibleForBogoPromotion;
      closure_129_6 = premiumType;
      const _Set = Set;
      const set = new Set(premiumItems.map((premiumTier) => premiumTier.premiumTier));
      closure_129_7 = set.size > 1;
      obj29.options = premiumItems.map((premiumItem) => {
        const obj = { premiumItem, selectedProductId, optionNeedsProductNameLabel, trialOffer: premiumType, discountOffer: premiumItems, discountedPriceString: null, userIsEligibleForBogoPromotion: null, selectedPremiumType: null };
        let tmp3 = null;
        if (premiumItem.productId === onPaymentStart) {
          tmp3 = onPaymentSuccess;
        }
        obj.discountedPriceString = tmp3;
        obj.userIsEligibleForBogoPromotion = onPaymentDismiss;
        obj.selectedPremiumType = selectedPremiumType;
        return { name: __initData8(closure_42, obj), value: premiumItem.productId };
      });
      obj29.onChange = function onChange(value) {
        return (function onPlanSelectionChange(value) {
          const self = this;
          const apply = closure_1_26.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(value.value);
      };
      obj29.style = tmp.planOptionRowContainer;
      obj29.disabled = stateFromStores;
      obj28.children = tmp42(tmp4(tmp5[68]).RadioGroup, obj29);
      items14[1] = tmp42(tmp48, obj28);
      obj25.children = items14;
      items12[1] = tmp43(tmp13(tmp5[66]), obj25);
      obj20.children = items12;
      const items15 = [tmp43(tmp48, obj20), ];
      const obj30 = { isPaymentSuccess: tmp2, onClose, ctaText: memo1, onStartPayment: callback, shouldUseMobileWebRedirectCheckout: result, disabled: null, loading: null };
      let tmp79 = stateFromStores;
      if (!stateFromStores) {
        tmp79 = isPatchOrderLoading;
      }
      obj30.disabled = tmp79;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj31 = { children: null };
      obj30.loading = stateFromStores;
      items15[1] = tmp42(closure_43, obj30);
      obj31.children = items15;
      tmp43Result3 = tmp43(tmp44, obj31);
      const tmp13Result13 = tmp13(tmp5[66]);
    }
    const items16 = [tmp43Result3, ];
    let tmp82 = !result;
    if (!result) {
      tmp82 = memo2;
    }
    const obj32 = { children: null };
    items16[1] = tmp82;
    obj13.children = items16;
    items8[1] = tmp43(isScreenReaderEnabled, obj13);
    const obj33 = { variant: "floating", onPress: onClose };
    items8[2] = tmp42(tmp4(tmp5[64]).ActionSheetHeaderBar, obj33);
    obj32.children = items8;
    tmp43Result = tmp43(tmp44, obj32);
  }
  obj9.children = tmp43Result;
  return closure_35(require("Sheet/BottomSheet").BottomSheet, obj9);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "sortFn"];
get_ActivityIndicator = fn(17);
({ View: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
const useNativeCheckoutStore = fn(7668).useNativeCheckoutStore;
const PremiumPlanPurchasedStore = fn(7665);
({ setInitiatedPurchaseFromNewFlow: map1, setMobileWebRedirectCheckoutStatus: closure_14, usePremiumPlanPurchasedStore: closure_15, reset: closure_16 } = PremiumPlanPurchasedStore);
const PremiumConstants = fn(1378);
({ DISCOUNTS: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumTypes: closure_19, SubscriptionIntervalTypes: closure_20, SubscriptionPlans: closure_21, SubscriptionPlanInfo: closure_22, PremiumSubscriptionSKUs: closure_23, PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_24 } = PremiumConstants);
let Constants = fn(1078);
({ AnalyticEvents: closure_25, AnalyticsObjects: closure_26, AnalyticsObjectTypes: closure_27, MarketingURLs: closure_28, HelpdeskArticles: closure_29 } = Constants);
const TitleStyleType = fn(1185).TitleStyleType;
const PaymentConstants = fn(4740);
({ EUR_TO_HRK_CONVERSION_RATE: items, ItemPurchaseType: closure_32 } = PaymentConstants);
Constants = fn(1089);
({ CurrencyCodes: closure_33, PaymentGateways: closure_34 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { body: { padding: 16 }, headerText: { paddingTop: 30, paddingHorizontal: 20 }, contentSelectPlan: { marginBottom: 16 }, contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 }, contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" }, formTitle: { paddingTop: 0, paddingLeft: 0 }, formSectionBody: { backgroundColor: "none" }, formSectionBodyWithNoTitle: { marginTop: -24 }, planOptionRowContainer: { paddingHorizontal: 10 }, planOptionsBusy: { opacity: 0.5 }, planOptionContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, planOptionPriceContainer: { flexGrow: 1, flexShrink: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }, planOptionDiscountContainer: { display: "flex", flexDirection: "row", flexShrink: 1 }, planOptionDiscount: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 }, planOptionDiscountWhite: null, planOptionDiscountText: null, blockedPaymentContainer: null, legalDisclaimerText: null, divider: null, offerDividerMargin: null, trialDisclaimer: null, discountDisclaimer: null, loadingIndicator: null, discountSubTextContainer: null, priceText: null };
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 };
obj2.planOptionDiscountWhite = { backgroundColor: nativeDefault.colors.WHITE };
obj2.planOptionDiscountText = { textTransform: "uppercase" };
obj2.blockedPaymentContainer = { marginVertical: 40 };
obj2.legalDisclaimerText = { marginTop: 16 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.divider = size;
obj2.offerDividerMargin = { marginBottom: 8 };
obj2.trialDisclaimer = { marginBottom: 8 };
obj2.discountDisclaimer = { marginBottom: 20 };
obj2.loadingIndicator = { marginVertical: 30 };
obj2.discountSubTextContainer = { alignItems: "flex-end" };
obj2.priceText = { flexShrink: 1 };
let closure_38 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedPremiumType) => {
  const cResult = c.c(8);
  ({ premiumType, isPaymentSuccess, trialOffer, discountOffer } = selectedPremiumType);
  const tmp4 = closure_38();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(orderRequired) {
      return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(first));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t.vLz3Zs);
        cResult[1] = stringResult;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.headerText) {
        const obj2 = { style: tmp4.headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp7 };
        const tmp11 = __initData8(tmp(4754).Text, obj2);
        cResult[2] = tmp4.headerText;
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType.selectedPremiumType;
  }
  _modDef38(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  let tmp14 = null != trialOffer && null != premiumType;
  if (tmp14) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp14 = skuId === tmp12(4418).getSkuIdForPremiumType(premiumType);
    const tmp12Result = tmp12(4418);
  }
  let tmp16 = tmp14;
  if (tmp16) {
    let tmp17 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp17 = trialOffer.trialId === subscriptionTrialId;
    }
    tmp16 = tmp17;
  }
  let tmp19 = null;
  if (tmp16) {
    tmp19 = trialOffer;
  }
  if (cResult[4] === discountOffer) {
    if (cResult[5] === tmp19) {
      if (cResult[6] === premiumType) {
        let tmp20 = cResult[7];
      }
      return tmp20;
    }
  }
  const tmp21 = __initData8(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: tmp19, discountOffer });
  cResult[4] = discountOffer;
  cResult[5] = tmp19;
  cResult[6] = premiumType;
  cResult[7] = tmp21;
  tmp20 = tmp21;
}) : ((arg0) => {
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = closure_38();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord })));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const obj = { style: tmp.headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.vLz3Zs);
      return __initData8(Text_Text.Text, obj);
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType;
  }
  _modDef38(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  let tmp9 = null != trialOffer && null != premiumType;
  if (tmp9) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp9 = skuId === tmp6(4418).getSkuIdForPremiumType(premiumType);
    const tmp6Result = tmp6(4418);
  }
  let tmp11 = tmp9;
  if (tmp11) {
    let tmp12 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp12 = trialOffer.trialId === subscriptionTrialId;
    }
    tmp11 = tmp12;
  }
  let trialOffer2 = null;
  if (tmp11) {
    trialOffer2 = trialOffer;
  }
  return __initData8(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: trialOffer2, discountOffer });
});
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ text, backgroundColorType } = arg0);
  let str = "green";
  if (undefined !== backgroundColorType) {
    str = backgroundColorType;
  }
  const tmp4 = closure_38();
  let prop = null;
  if ("white" === str) {
    prop = tmp4.planOptionDiscountWhite;
  }
  if (cResult[0] === tmp4.planOptionDiscount) {
    if (cResult[1] === prop) {
      let tmp7 = cResult[2];
    }
    let str2 = "text-overlay-light";
    if (tmp5) {
      str2 = "text-overlay-dark";
    }
    if (cResult[3] === tmp4.planOptionDiscountText) {
      if (cResult[4] === str2) {
        if (cResult[5] === text) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp8) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj2 = { style: tmp7, children: tmp8 };
        const tmp14 = __initData8(closure_1_8, obj2);
        cResult[7] = tmp7;
        cResult[8] = tmp8;
        cResult[9] = tmp14;
        tmp11 = tmp14;
      }
    }
    const obj3 = { style: tmp4.planOptionDiscountText, variant: "text-xs/bold", color: str2, children: text };
    const tmp10 = __initData8(Text_Text.Text, obj3);
    cResult[3] = tmp4.planOptionDiscountText;
    cResult[4] = str2;
    cResult[5] = text;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const items = [tmp4.planOptionDiscount, prop];
  cResult[0] = tmp4.planOptionDiscount;
  cResult[1] = prop;
  cResult[2] = items;
  tmp7 = items;
}) : ((backgroundColorType) => {
  let str = backgroundColorType.backgroundColorType;
  if (str === undefined) {
    str = "green";
  }
  const tmp = closure_38();
  const items = [tmp.planOptionDiscount, ];
  let prop = null;
  if ("white" === str) {
    prop = tmp.planOptionDiscountWhite;
  }
  const obj = { style: items, children: null };
  items[1] = prop;
  const obj2 = { style: tmp.planOptionDiscountText, variant: "text-xs/bold", color: null, children: null };
  let str2 = "text-overlay-light";
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  obj2.color = str2;
  obj2.children = backgroundColorType.text;
  obj.children = __initData8(Text_Text.Text, obj2);
  return __initData8(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumItem) => {
  const cResult = premiumItem(568).c(84);
  premiumItem = premiumItem.premiumItem;
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, trialOffer, discountOffer, discountedPriceString, userIsEligibleForBogoPromotion, selectedPremiumType } = premiumItem);
  const tmp5 = closure_38();
  let num = 2;
  [first, dependencyMap] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== premiumItem.productId) {
    const fn = function n() {
      return IAPStore.getProduct(premiumItem.productId);
    };
    cResult[1] = premiumItem.productId;
    cResult[num] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const obj = premiumItem(568);
  const stateFromStores = premiumItem(504).useStateFromStores(first1, tmp10);
  const tmpResult = premiumItem(504);
  const checkoutPlanPriceString = premiumItem(13611).useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (cResult[3] === discountedPriceString) {
    if (cResult[4] === priceString) {
      let tmp14 = cResult[5];
    }
    const checkoutPlanDiscountPrices = tmp(13611).useCheckoutPlanDiscountPrices(premiumItem.productId, tmp14);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      cResult[6] = W;
      const tmp16 = W;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    const tmpResult6 = tmp(13611);
    ({ orderRequired, orderRecord } = useNativeCheckoutStore(tmp16));
    if (cResult[7] === customBadgeComponent) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    const premiumTier = premiumItem.premiumTier;
    let tmp19 = null != trialOffer && null != premiumTier;
    if (tmp19) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (tmp20 != null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      tmp19 = tmp21 === first(4418).getSkuIdForPremiumType(premiumTier);
      const obj6 = first(4418);
    }
    let tmp23 = tmp19;
    if (tmp23) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (orderRequired) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
        if (orderRecord != null) {
          class W {
            constructor(arg0) {
              obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
              return obj;
            }
          }
          if (tmp26 != null) {
            class W {
              constructor(arg0) {
                obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
                return obj;
              }
            }
            if (tmp27 != null) {
              class W {
                constructor(arg0) {
                  obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
                  return obj;
                }
              }
            }
          }
        }
        const tmp24 = trialOffer.trialId === tmp25;
      }
      tmp23 = tmp24;
    }
    if (cResult[41] !== premiumItem.basePlanId) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      const tierDisplayNameByPlanId = obj7.getTierDisplayNameByPlanId(premiumItem.basePlanId);
      cResult[41] = premiumItem.basePlanId;
      cResult[42] = tierDisplayNameByPlanId;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (cResult[43] !== premiumItem.interval) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      const intervalString = first(4418).getIntervalString(premiumItem.interval, false);
      cResult[43] = premiumItem.interval;
      cResult[44] = intervalString;
      const obj8 = first(4418);
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    let tmp33 = tmp23;
    const basePlanId = premiumItem.basePlanId;
    const PREMIUM_YEAR_TIER_2 = closure_21.PREMIUM_YEAR_TIER_2;
    if (!tmp23) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (!tmp33) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (tmp4) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      tmp33 = tmp34;
    }
    if (!tmp33) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (tmp4) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    const productId = premiumItem.productId;
    if (null == stateFromStores) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      let USD = constants5.USD;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (str.toLowerCase() in constants5) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
        USD = str2.toLowerCase();
      } else {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
    }
    if (null != checkoutPlanDiscountPrices) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      obj9.formatRate(checkoutPlanDiscountPrices.discountedPrice, tmp38.interval, tmp38.intervalCount);
    }
    if (tmp23) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      const obj2 = { price: tmp(7481).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
      const formatToPlainStringResult = obj10.formatToPlainString(tmp(1119).t.hXcaLT, obj2);
      const tmpResult7 = tmp(7481);
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (checkoutPlanDiscountPrices != null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      if (formatToPlainStringResult == null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      if (formatToPlainStringResult == null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
    }
    const tmp18 = useNativeCheckoutStore(tmp16);
    const formatRate = tmp(7481).formatRate;
    if (checkoutPlanDiscountPrices != null) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (undefined == null) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (undefined == null) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (cResult[45] === tmp5.planOptionPriceContainer) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (first > 0) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      tmp44[0] = tmp5.planOptionPriceContainer;
      const obj3 = { transform: null };
      const obj4 = { translateY: first / num };
      const items1 = [obj4];
      obj3.transform = items1;
      tmp44[1] = obj3;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    cResult[45] = tmp5.planOptionPriceContainer;
    cResult[46] = first;
    num = 47;
    cResult[47] = tmp43;
    const tmpResult8 = tmp(7481);
  }
  const obj5 = { discountedPriceString, regularPriceString: priceString };
  cResult[3] = discountedPriceString;
  cResult[4] = priceString;
  cResult[5] = obj5;
  tmp14 = obj5;
}) : ((premiumItem) => {
  premiumItem = premiumItem.premiumItem;
  ({ trialOffer, discountOffer, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, discountedPriceString } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  first = undefined;
  dependencyMap = undefined;
  const tmp = closure_38();
  [first, dependencyMap] = noop.useState(0);
  const items = [IAPStore];
  const stateFromStores = premiumItem(504).useStateFromStores(items, () => IAPStore.getProduct(premiumItem.productId));
  const obj = premiumItem(504);
  let checkoutPlanPriceString = premiumItem(13611).useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const obj2 = premiumItem(13611);
  const obj4 = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  obj4.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = premiumItem(13611).useCheckoutPlanDiscountPrices(premiumItem.productId, obj4);
  const obj3 = premiumItem(13611);
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord })));
  const premiumTier = premiumItem.premiumTier;
  let tmp11 = null != trialOffer && null != premiumTier;
  if (tmp11) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp11 = skuId === first(4418).getSkuIdForPremiumType(premiumTier);
    const obj5 = first(4418);
  }
  let tmp14 = tmp11;
  if (tmp14) {
    let tmp15 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp15 = trialOffer.trialId === subscriptionTrialId;
    }
    tmp14 = tmp15;
  }
  const tmp10 = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord }));
  const tierDisplayNameByPlanId = premiumItem(4418).getTierDisplayNameByPlanId(premiumItem.basePlanId);
  const tmp4Result = premiumItem(4418);
  const intervalString = first(4418).getIntervalString(premiumItem.interval, false);
  let tmp20 = tmp14;
  if (!tmp14) {
    tmp20 = null != discountOffer;
  }
  if (!tmp20) {
    let tmp21 = userIsEligibleForBogoPromotion;
    if (userIsEligibleForBogoPromotion) {
      tmp21 = premiumItem.basePlanId === closure_21.PREMIUM_YEAR_TIER_2;
    }
    tmp20 = tmp21;
  }
  let tmp22 = null;
  if (!tmp20) {
    tmp22 = dependencyMap2[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === tmp19.PREMIUM_MONTH_TIER_2;
  }
  if (null == stateFromStores) {
    let USD = constants5.USD;
  } else {
    if (str.toLowerCase() in constants5) {
      USD = stateFromStores.currencyCode.toLowerCase();
    } else {
      USD = tmp24.USD;
    }
    str = stateFromStores.currencyCode;
  }
  let formatRateResult = null;
  if (null != checkoutPlanDiscountPrices) {
    formatRateResult = tmp4(7481).formatRate(checkoutPlanDiscountPrices.discountedPrice, tmp26.interval, tmp26.intervalCount);
    const tmp4Result4 = tmp4(7481);
  }
  if (tmp14) {
    const intl = tmp4(1119).intl;
    const obj6 = { price: tmp4(7481).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp4(1119).t.hXcaLT, obj6);
    const tmp4Result5 = tmp4(7481);
  } else {
    formatToPlainStringResult = undefined;
    if (checkoutPlanDiscountPrices != null) {
      formatToPlainStringResult = checkoutPlanDiscountPrices.discountedPrice;
    }
    if (formatToPlainStringResult == null) {
      formatToPlainStringResult = checkoutPlanPriceString;
    }
    if (formatToPlainStringResult == null) {
      formatToPlainStringResult = closure_18;
    }
  }
  const obj7 = first(4418);
  tmp19 = closure_21;
  let regularPrice;
  if (checkoutPlanDiscountPrices != null) {
    regularPrice = checkoutPlanDiscountPrices.regularPrice;
  }
  if (regularPrice == null) {
    regularPrice = checkoutPlanPriceString;
  }
  if (regularPrice == null) {
    regularPrice = closure_18;
  }
  const tmp4Result6 = premiumItem(7481);
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer, ];
    const obj8 = { transform: null };
    const obj9 = { translateY: first / 2 };
    const items2 = [obj9];
    obj8.transform = items2;
    items1[1] = obj8;
    let planOptionPriceContainer = items1;
  } else {
    planOptionPriceContainer = tmp.planOptionPriceContainer;
  }
  const obj10 = { style: tmp.planOptionContainer, children: null };
  if (null != discountOffer) {
    let str3 = "text-lg/medium";
  } else {
    str3 = "text-md/medium";
  }
  const obj11 = { variant: str3, color: null, children: null };
  let str4 = "interactive-text-default";
  let str5 = "interactive-text-default";
  if (premiumItem.productId === selectedProductId) {
    str5 = "interactive-text-active";
  }
  obj11.color = str5;
  let combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  obj11.children = combined;
  const items3 = [closure_35(premiumItem(4754).Text, obj11), ];
  const obj12 = { style: planOptionPriceContainer, children: null };
  const obj13 = { style: tmp.planOptionDiscountContainer, children: null };
  const items4 = [renderPlanOptionBadge({ userLocale: LocaleStore.locale, discount: tmp22, hideDefaultDiscountBadges: tmp20, customBadgeComponent, showBogoPromotionBadge: userIsEligibleForBogoPromotion }), ];
  const obj14 = { style: tmp.priceText, variant: "text-lg/medium", color: null, children: null };
  let str8 = str4;
  if (premiumItem.productId === selectedProductId) {
    str8 = "interactive-text-active";
  }
  obj14.color = str8;
  obj14.children = formatToPlainStringResult;
  items4[1] = closure_35(premiumItem(4754).Text, obj14);
  obj13.children = items4;
  const items5 = [closure_36(closure_8, obj13), , ];
  if (!tmp14) {
    items5[1] = null;
    const obj15 = {
      style: tmp.discountSubTextContainer,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          if (height !== first) {
            closure_2(height);
          }
        },
      children: null
    };
    let tmp33Result = null;
    if (null != formatRateResult) {
      tmp33Result = null;
      if (null != discountOffer) {
        tmp33Result = null;
        if (null == premiumItem.selectedPremiumType) {
          let str10 = str4;
          if (tmp34) {
            str10 = "text-default";
          }
          const obj16 = { variant: "text-sm/medium", color: str10, children: null };
          const intl4 = tmp4(1119).intl;
          const obj17 = { discountedPrice: formatRateResult, numMonths: null };
          const discount = discountOffer.discount;
          let num;
          if (discount != null) {
            num = discount.intervalCount;
          }
          if (num == null) {
            num = 1;
          }
          obj17.numMonths = num;
          obj16.children = intl4.formatToPlainString(tmp4(1119).t["02Gmgm"], obj17);
          tmp33Result = tmp33(tmp4(4754).Text, obj16);
        }
      }
    }
    const items6 = [tmp33Result, ];
    let tmp33Result3 = null != checkoutPlanDiscountPrices && null != discountOffer;
    if (tmp33Result3) {
      if (tmp34) {
        str4 = "text-default";
      }
      const obj18 = { variant: "text-sm/medium", color: str4, children: null };
      const intl5 = tmp4(1119).intl;
      const obj19 = { regularPrice: formatRateResult1, numMonths: null };
      const discount2 = discountOffer.discount;
      let num2;
      if (discount2 != null) {
        num2 = discount2.intervalCount;
      }
      if (num2 == null) {
        num2 = 1;
      }
      obj19.numMonths = num2;
      obj18.children = intl5.formatToPlainString(tmp4(1119).t["vZk+c/"], obj19);
      tmp33Result3 = tmp33(tmp4(4754).Text, obj18);
    }
    items6[1] = tmp33Result3;
    obj15.children = items6;
    items5[2] = tmp31(tmp32, obj15);
    obj12.children = items5;
    items3[1] = tmp31(tmp32, obj12);
    obj10.children = items3;
    return tmp31(tmp32, obj10);
  } else {
    let str9 = str4;
    if (tmp34) {
      str9 = "text-default";
    }
    const obj20 = { variant: "text-xs/medium", color: str9, children: null };
    if (premiumItem.interval === constants.YEAR) {
      const intl3 = tmp4(1119).intl;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj21 = { price: checkoutPlanPriceString };
      let formatToPlainStringResult1 = intl3.formatToPlainString(tmp4(1119).t.ECT4A5, obj21);
    } else {
      const intl2 = tmp4(1119).intl;
      let tmp38 = checkoutPlanPriceString;
      if (checkoutPlanPriceString == null) {
        tmp38 = closure_18;
      }
      const obj22 = { price: tmp38 };
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp4(1119).t.v9QeON, obj22);
    }
    obj20.children = formatToPlainStringResult1;
    tmp33(tmp4(4754).Text, obj20);
  }
});
ReactCompilerGating = fn(558);
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? ((shouldUseMobileWebRedirectCheckout) => {
  const cResult = c.c(14);
  ({ onClose, ctaText, onStartPayment } = shouldUseMobileWebRedirectCheckout);
  shouldUseMobileWebRedirectCheckout = shouldUseMobileWebRedirectCheckout.shouldUseMobileWebRedirectCheckout;
  ({ disabled, loading } = shouldUseMobileWebRedirectCheckout);
  if (shouldUseMobileWebRedirectCheckout.isPaymentSuccess) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.WAI6xu);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== onClose) {
      const obj2 = { text: first, size: "md", grow: true, onPress: onClose };
      const tmp18 = __initData8(tmp(5188).Button, obj2);
      cResult[1] = onClose;
      cResult[2] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[2];
    }
    return tmp16;
  } else if (cResult[3] !== shouldUseMobileWebRedirectCheckout) {
    const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
    cResult[3] = shouldUseMobileWebRedirectCheckout;
    cResult[4] = tmp5;
  } else {
    if (cResult[5] === onStartPayment) {
      if (cResult[6] === shouldUseMobileWebRedirectCheckout) {
        let tmp7 = cResult[7];
      }
      if (cResult[8] === ctaText) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === disabled) {
            if (cResult[11] === loading) {
              if (cResult[12] === tmp7) {
                let tmp8 = cResult[13];
              }
              return tmp8;
            }
          }
        }
      }
      class T {
        constructor() {
          obj = { shouldRedirectToMobileWeb: closure_1 };
          return onStartPayment(obj);
        }
      }
      const obj3 = { text: ctaText };
      const merged = Object.assign(tmp4);
      obj3.grow = true;
      obj3.onPress = tmp7;
      obj3.loading = loading;
      obj3.disabled = disabled;
      const tmp12 = __initData8(tmp(5188).Button, obj3);
      cResult[8] = ctaText;
      cResult[9] = tmp4;
      cResult[10] = disabled;
      cResult[11] = loading;
      cResult[12] = tmp7;
      cResult[13] = tmp12;
      tmp8 = tmp12;
    }
    class T {
      constructor() {
        obj = { shouldRedirectToMobileWeb: closure_1 };
        return onStartPayment(obj);
      }
    }
    cResult[5] = onStartPayment;
    cResult[6] = shouldUseMobileWebRedirectCheckout;
    cResult[7] = T;
    tmp7 = T;
  }
}) : ((isPaymentSuccess) => {
  ({ onStartPayment: require, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    const obj2 = { text: null, size: "md", grow: true, onPress: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.WAI6xu);
    obj2.onPress = tmp;
    return __initData8(components_Button_Button.Button, obj2);
  } else {
    const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
    const obj = { text: tmp2 };
    const merged = Object.assign(tmp5);
    obj.grow = true;
    obj.onPress = function onPress() {
      return require({ shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout });
    };
    obj.loading = tmp4;
    obj.disabled = tmp3;
    return __initData8(components_Button_Button.Button, obj);
  }
});
function getItemsByPremiumTypePredicate(arg0) {
  closure_0 = arg0;
  return (additionalPlans) => {
    let tmp = 0 === additionalPlans.additionalPlans.length;
    ({ numPremiumGuild, premiumTier } = additionalPlans);
    if (tmp) {
      tmp = !additionalPlans.isDeprecated;
    }
    if (tmp) {
      tmp = 0 === numPremiumGuild;
    }
    if (tmp) {
      tmp = premiumTier === TIER_2;
    }
    return tmp;
  };
}
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
  if (obj.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled) {
      let APPLE = tmp3.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = tmp3.APPLE;
    }
  } else {
    const GOOGLE = tmp3.GOOGLE;
    let fn = predicate.predicate;
    if (undefined === fn) {
      TIER_2 = predicate.premiumType;
      if (TIER_2 == null) {
        TIER_2 = closure_1_19.TIER_2;
      }
      fn = (additionalPlans) => {
        let tmp = 0 === additionalPlans.additionalPlans.length;
        ({ numPremiumGuild, premiumTier } = additionalPlans);
        if (tmp) {
          tmp = !additionalPlans.isDeprecated;
        }
        if (tmp) {
          tmp = 0 === numPremiumGuild;
        }
        if (tmp) {
          tmp = premiumTier === TIER_2;
        }
        return tmp;
      };
    }
    let fn2 = predicate.initialSelectedCriteria;
    if (undefined === fn2) {
      fn2 = (interval) => interval.interval === constants.YEAR;
    }
    let fn3 = predicate.sortFn;
    if (undefined === fn3) {
      fn3 = (interval, interval2) => interval2.interval - interval.interval;
    }
    const tmp13 = _objectWithoutProperties(predicate, closure_3);
    const premiumTrialOffer = tmp(7694).usePremiumTrialOffer();
    const premiumType = predicate.premiumType;
    let tmp16 = null != premiumTrialOffer && null != premiumType;
    if (tmp16) {
      const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      let skuId;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
      tmp16 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
    }
    let tmp19;
    if (tmp16) {
      let obj2 = { subscription_preview: null };
      const obj4 = { subscription_trial_id: premiumTrialOffer.trialId };
      obj2.subscription_preview = obj4;
      tmp19 = obj2;
    }
    const tmpResult = tmp(7694);
    const isEligibleForBogoOffer = tmp(11005).useIsEligibleForBogoOffer();
    if (null == fn3) {
      let premiumBundlesWithPredicate = tmp(7653).getPremiumBundlesWithPredicate(fn);
      const tmpResult7 = tmp(7653);
    } else {
      const premiumBundlesWithPredicate1 = tmp(7653).getPremiumBundlesWithPredicate(fn);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn3);
      const tmpResult8 = tmp(7653);
    }
    if (isEligibleForBogoOffer) {
      fn2 = (interval) => interval.interval === constants.MONTH;
    }
    const found = premiumBundlesWithPredicate.find(fn2);
    if (null != found) {
      const subscriptionItemsForProduct = tmp(7653).getSubscriptionItemsForProduct(found.productId);
      let mapped = subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = TIER_2(4418);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
      const tmpResult9 = tmp(7653);
    } else {
      const obj5 = { subscriptionPlanId: guild.PREMIUM_YEAR_TIER_2, skuId: tmp(4418).castPremiumSubscriptionAsSkuId(TIER_2.TIER_2), quantity: 1 };
      mapped = [obj5];
      const tmpResult10 = tmp(4418);
    }
    const obj6 = {
      paymentGateway: GOOGLE,
      orderRequired: GOOGLE === tmp3.APPLE_ADVANCED_COMMERCE,
      skuIds: [],
      defaultPlans: mapped,
      isGift: false,
      activeSubscription: null,
      initialSubscriptionFacet: tmp19,
      onOrderRetryCancellation() {
          return ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_24);
        },
      children: null
    };
    const obj7 = {};
    const tmpResult6 = tmp(11005);
    const merged = Object.assign(tmp13);
    obj7.premiumItems = premiumBundlesWithPredicate;
    obj7.userIsEligibleForBogoPromotion = isEligibleForBogoOffer;
    obj7.initialSelectedItem = found;
    obj6.children = __initData8(PremiumPlanSelectionActionSheet, obj7);
    return __initData8(NativeCheckoutStoreProviderDefault, obj6);
  }
};
export { getItemsByPremiumTypePredicate };
