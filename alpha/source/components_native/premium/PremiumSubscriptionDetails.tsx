// Module ID: 15235
// Function ID: 15236
// Name: PremiumSubscriptionDetails
// Dependencies: [32, 5, 19, 17, 1383, 7597, 1072, 1385, 21, 575, 5014, 2047, 10583, 15236, 15237, 10580, 10581, 10582, 10584, 15238, 15239, 15240, 9930, 15241, 15242, 15243, 15244, 15245, 10586, 15246, 15247, 15248, 15249, 15250, 15251, 15252, 10589, 15253, 15254, 15255, 8535, 15256, 15257, 15258, 10560, 14451, 15259, 15260, 7592, 7593, 7594, 7604, 1266, 6535, 1497, 504, 38, 15269, 7326, 7413, 5717, 1187, 5634, 1113, 5624, 8026, 15272, 7351, 15273, 15274, 2]
// Exports: default, onCancelClick

// Module 15235 (PremiumSubscriptionDetails)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7592 */;
import AssetRegistryDefault from "AssetRegistry" /* 8535 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9930 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10560 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10580 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10581 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10582 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10583 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10584 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10586 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 10589 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 15236 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 15237 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 15238 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 15239 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 15240 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 15241 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 15242 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 15243 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 15244 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 15245 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 15246 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 15247 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 15248 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 15249 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 15250 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 15251 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 15252 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 15253 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 15254 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 15255 */;
import AssetRegistryDefault30 from "AssetRegistry" /* 15256 */;
import AssetRegistryDefault31 from "AssetRegistry" /* 15257 */;
import AssetRegistryDefault32 from "AssetRegistry" /* 15258 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 15272 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1383 */;
import IAPStore from "IAPStore" /* 7597 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;
let _require, c1, closure_1, currentUser, dependencyMap, importDefault, openURL;

let StyleSheet;
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportDefault;
let metroRequire;
let obj4;
let obj5;
let obj6;
let tmp3;
let tmp4;
let tmp6;
let unpackModuleId;
const _modDef38 = tmp6(38);
const FastImageDefault = tmp6(5717);
const openPremiumPlanWhatYouLoseActionSheetDefault = tmp4(15259);
const PremiumPlanWhatYouLoseActionSheet = tmp3(15260);
function handleCancelSubscription() {
  return obj(...arguments);
}
let obj = function _handleCancelSubscription() {
  obj = _asyncToGenerator(async (subscription, analyticsLocations, fromStep) => {
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let tmp15Result;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              const obj4 = { subscription, analyticsLocations, fromStep, toStep: require("PremiumAnalyticsUtils").STEP_ANALYTICS_NAMES[require("PremiumAnalyticsUtils").CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE] };
              const trackPremiumSubscriptionCancellationFlowStep = require("PremiumAnalyticsUtils").trackPremiumSubscriptionCancellationFlowStep;
              require("PremiumAnalyticsUtils");
              const result = trackPremiumSubscriptionCancellationFlowStep(obj4);
              let isPurchasedViaApple;
              if (subscription != null) {
                isPurchasedViaApple = tmp12.isPurchasedViaApple;
              }
              if (isPurchasedViaApple) {
                c4 = 1;
                c3 = 1;
                const obj5 = { value: tmp15Result.manageSubscription(), done: false };
                tmp15Result = require("IAPUtils");
                return obj5;
              } else {
                let isPurchasedViaGoogle;
                if (subscription != null) {
                  isPurchasedViaGoogle = tmp12.isPurchasedViaGoogle;
                }
                if (isPurchasedViaGoogle) {
                  openURL = openURL.openURL;
                  const tmp15Result2 = require("PremiumUtils");
                  openURL(tmp15Result2.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp8) {
          c3 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
function handleManageSubscription(subscription, navigation, analyticsLocations) {
  let closure_2;
  let obj5;
  _require = subscription;
  if (subscription.status === constants4.ACCOUNT_HOLD) {
    openURL = openURL.openURL;
    const obj6 = require("PremiumUtils");
    openURL(obj6.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
  } else {
    const hasActiveTrial = subscription.hasActiveTrial;
    dependencyMap = false;
    try {
      let tmp = _require;
      obj = require("PremiumBundledPlansUtils");
      const productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
      let tmp4 = require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
      let tmp5 = null;
      let interval;
      if (tmp4 != null) {
        interval = tmp4.interval;
      }
      dependencyMap = interval === constants5.YEAR;
    } catch (err) {
    }
    let flag = false;
    if (subscription.paymentGateway === constants3.APPLE_ADVANCED_COMMERCE) {
      try {
        const obj2 = require("PremiumBundledPlansUtils");
        const productIdFromSubscription1 = obj2.getProductIdFromSubscription(subscription, true);
        const tmp12 = require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
        let interval1;
        if (tmp12 != null) {
          interval1 = tmp12.interval;
        }
        flag = interval1 === constants5.YEAR;
      } catch (err) {
      }
    }
    const obj4 = {
      navigation,
      analyticsLocation: obj5,
      analyticsLocations,
      showCurrentPlan: !hasActiveTrial,
      allowYearlyBundles: flag,
      predicate(interval) {
          let tmp = hasActiveTrial;
          if (tmp) {
            obj = PremiumBundledPlansUtils;
            tmp = !obj.excludeNitroOnlyPlansForActiveTrial(interval);
          }
          let tmp4 = !tmp;
          if (tmp4) {
            tmp4 = !(closure_2 && subscription.paymentGateway === constants.APPLE_ADVANCED_COMMERCE && interval.interval === constants2.MONTH && null != interval.premiumTier && interval.numPremiumGuild > 0);
            const tmp5 = closure_2 && subscription.paymentGateway === constants.APPLE_ADVANCED_COMMERCE && interval.interval === constants2.MONTH && null != interval.premiumTier && interval.numPremiumGuild > 0;
          }
          return tmp4;
        }
    };
    obj5 = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_PREMIUM };
    const obj3 = require("launchPremiumPlanSelect");
    const result = obj3.launchPremiumPlanSelect(obj4);
  }
}
function onResubscribeClick() {
  return obj(...arguments);
}
obj = function _onResubscribeClick() {
  obj = _asyncToGenerator(async (arg0) => {
    const isACOM = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj10;
      let obj3;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              if (isACOM.isACOM) {
                const obj5 = { requestIdentifier: obj10.v4(), subscriptionId: isACOM.id };
                const resubscribeGenericSubscription = require("BillingActionCreators").resubscribeGenericSubscription;
                require("BillingActionCreators");
                c2 = 1;
                c3 = 1;
                obj10 = require("v1");
                obj8 = { value: resubscribeGenericSubscription(obj5, true), done: false };
                return obj8;
              } else if (isACOM.isPurchasedViaApple) {
                c2 = 3;
                c3 = 1;
                const obj9 = { value: obj7.manageSubscription(), done: false };
                obj7 = require("IAPUtils");
                return obj9;
              } else if (isACOM.isPurchasedViaGoogle) {
                openURL = openURL.openURL;
                const obj6 = require("PremiumUtils");
                openURL(obj6.getExternalSubscriptionMethodUrl(isACOM.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
              }
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              c2 = 2;
              c3 = 1;
              const obj12 = { value: obj3.fetchSubscriptions(), done: false };
              obj3 = closure_129_0(closure_129_2[53]);
              return obj12;
            }
          } else if (2 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
class PremiumSubscriptionHeader {
  constructor(subscription) {
    let ACTIVE;
    let Button;
    let Button2;
    let Button3;
    let _undefined;
    let c2;
    let intl;
    let intl4;
    let intl5;
    let intl6;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let obj18;
    let obj22;
    let onClickManagePremiumGuild;
    let premiumGuildHeaderDescription;
    let priceString;
    let renewalInvoicePreview;
    let stringResult;
    let tmp14;
    let tmp9;
    subscription = subscription.subscription;
    ({ renewalInvoicePreview, onClickManagePremiumGuild } = subscription);
    dependencyMap = undefined;
    let analyticsLocations;
    const style = subscription.style;
    const tmp = closure_18();
    let tmp2 = subscription;
    let tmp3 = dependencyMap;
    obj = subscription(1497);
    importDefault = obj.useNavigation();
    let obj2 = subscription(504);
    const items = [UserStore];
    const stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      closure_1(c2[56])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    let obj3 = subscription(504);
    const items1 = [IAPStore];
    const stateFromStores1 = obj3.useStateFromStores(items1, function() {
      if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
        if (subscription.isACOM) {
          return null;
        } else {
          if (null != subscription.paymentGatewayPlanId) {
            if ("" !== subscription.paymentGatewayPlanId) {
              return IAPStore.getProduct(subscription.paymentGatewayPlanId);
            }
          }
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Subscription missing plan ID");
          throw error;
        }
      } else {
        return null;
      }
    });
    let tmp6 = importDefault;
    let obj4 = PremiumUtilsDefault;
    const planIdFromInvoice = obj4.getPlanIdFromInvoice(subscription, renewalInvoicePreview);
    [tmp9, c2] = analyticsLocations(react.useState(false), 2);
    const tmp8 = analyticsLocations(react.useState(false), 2);
    const obj5 = subscription(15269);
    const appleSubscriptionOwnership = obj5.useAppleSubscriptionOwnership(subscription);
    const isMismatchResult = appleSubscriptionOwnership.isMismatch();
    obj7 = subscription(2047);
    const premiumBranding = obj7.getPremiumBranding(subscription);
    analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
    if (premiumBranding === subscription(2047).Branding.PREMIUM_GUILD) {
      const tmp2Result = tmp2(2047);
      const coercedPremiumGuildSubscriptionStatus = tmp2Result.getCoercedPremiumGuildSubscriptionStatus(subscription);
      const obj6 = { subscription, user: stateFromStores, price: priceString, renewalInvoicePreview };
      priceString = undefined;
      const getPremiumGuildHeaderDescription = tmp2(2047).getPremiumGuildHeaderDescription;
      tmp2(2047);
      if (stateFromStores1 != null) {
        priceString = stateFromStores1.priceString;
      }
      premiumGuildHeaderDescription = getPremiumGuildHeaderDescription(obj6);
      tmp14 = coercedPremiumGuildSubscriptionStatus;
    } else {
      let tmp6Result = PremiumUtilsDefault;
      const statusFromInvoice = tmp6Result.getStatusFromInvoice(subscription, renewalInvoicePreview);
      let formatRateResult = null;
      _modDef38(null != closure_15[planIdFromInvoice], "missing subscription planInfo");
      obj8 = { subscription, planId: planIdFromInvoice, price: formatRateResult, includePremiumGuilds: true };
      const getPlanDescription = PremiumUtilsDefault.getPlanDescription;
      PremiumUtilsDefault;
      if (null != stateFromStores1) {
        const tmp2Result5 = tmp2(7413);
        formatRateResult = tmp2Result5.formatRate(stateFromStores1.priceString, tmp38.interval, tmp38.intervalCount);
      }
      premiumGuildHeaderDescription = getPlanDescription(obj8);
      tmp14 = statusFromInvoice;
    }
    const tmp20 = tmp14 === constants4.CANCELED;
    if (tmp14 === constants4.ACTIVE) {
      ACTIVE = obj7.ACTIVE;
    } else {
      ACTIVE = tmp20 ? tmp21.RESUB : tmp21.ERROR;
    }
    const obj9 = { style: items2, children: items7 };
    items2 = [tmp.container, style];
    const obj10 = { style: tmp.header, children: items3 };
    items3 = [, , , ];
    const obj11 = { source: obj8[premiumBranding][ACTIVE], style: tmp.headerBackground };
    const tmp24 = !isMismatchResult && !tmp20 && subscription.isOnPlatformMatchingExternalPaymentGateway && null == subscription.renewalMutations && subscription.status !== constants4.BILLING_RETRY;
    items3[0] = closure_16(FastImageDefault, obj11);
    const obj13 = { source: obj14[premiumBranding][ACTIVE], style: items4 };
    items4 = [closure_22[premiumBranding][ACTIVE], tmp.wumpusImg];
    const obj12 = { style: tmp.logoContainer, children: items5 };
    items5 = [closure_16(FastImageDefault, obj13), ];
    obj14 = { source: obj20[premiumBranding][ACTIVE], style: closure_24[premiumBranding] };
    items5[1] = closure_16(FastImageDefault, obj14);
    items3[1] = closure_17(closure_7, obj12);
    const obj15 = { style: closure_25[ACTIVE], children: premiumGuildHeaderDescription };
    items3[2] = closure_16(tmp2(1187).LegacyText, obj15);
    let tmp27Result = null;
    const obj16 = { style: tmp.buttonContainer, children: items6 };
    if (tmp20) {
      let prop;
      if (subscription != null) {
        prop = subscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp27Result = null;
      if (prop) {
        const obj17 = { style: tmp.buttonWrapper, children: closure_16(Button, obj18) };
        obj18 = {
          onPress: _asyncToGenerator(async (arg0, value) => {
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
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else {
                  let c3;
                  try {
                    c4 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_0 = tmp;
                        tmp20(true);
                        c3 = 1;
                        c1 = 2;
                        c4 = 1;
                        const obj4 = { value: onResubscribeClick(subscription), done: false };
                        return obj4;
                      }
                    } else if (1 === tmp4) {
                      c3 = 0;
                      closure_128_2(false);
                      throw closure_2;
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      closure_128_2(false);
                      c4 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c3 = 0;
                      closure_128_2(false);
                      c4 = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } catch (tmp20) {
                    closure_2 = tmp20;
                    if (0 === c3) {
                      c4 = 3;
                      throw tmp20;
                    } else {
                      c1 = 1;
                    }
                  }
                }
              }),
          variant: "primary-overlay",
          text: intl.string(tmp2(1113).t.lTCb0c),
          size: "sm",
          disabled: tmp9,
          loading: tmp9
        };
        Button = tmp2(5634).Button;
        intl = tmp2(1113).intl;
        tmp27Result = tmp27(tmp26, obj17);
      }
    }
    items6 = [tmp27Result, , , ];
    let tmp27Result4 = null;
    if (tmp24) {
      const obj19 = { style: tmp.buttonWrapper, children: closure_16(Button2, obj20) };
      obj20 = {
        onPress() {
            handleManageSubscription(subscription, closure_1, analyticsLocations);
          },
        variant: "primary-overlay",
        text: stringResult,
        size: "sm"
      };
      Button2 = tmp2(5634).Button;
      if (subscription.status === constants4.ACCOUNT_HOLD) {
        const intl3 = tmp2(1113).intl;
        stringResult = intl3.string(tmp2(1113).t.SgX7Ra);
      } else {
        const intl2 = tmp2(1113).intl;
        stringResult = intl2.string(tmp2(1113).t.gmVtgF);
      }
      tmp27Result4 = tmp27(tmp26, obj19);
    }
    items6[1] = tmp27Result4;
    let tmp27Result5 = null;
    const tmp2Result6 = tmp2(2047);
    if (tmp2Result6.subscriptionHasPremiumGuildPlan(subscription)) {
      tmp27Result5 = null;
      if (null != onClickManagePremiumGuild) {
        const obj21 = { style: tmp.buttonWrapper, children: closure_16(Button3, obj22) };
        obj22 = { onPress: onClickManagePremiumGuild, variant: "primary-overlay", text: intl4.string(tmp2(1113).t.gIVkjm), size: "sm" };
        Button3 = tmp2(5634).Button;
        intl4 = tmp2(1113).intl;
        tmp27Result5 = tmp27(tmp26, obj21);
      }
    }
    items6[2] = tmp27Result5;
    let tmp27Result6 = null;
    if (!isMismatchResult && !tmp20 && subscription.isOnPlatformMatchingExternalPaymentGateway) {
      const obj23 = {
        accessibilityRole: "link",
        style: tmp.cancelLink,
        onPress() {
            let tmp6ResultResult;
            let closure_0 = subscription;
            closure_1 = analyticsLocations;
            obj = PremiumAnalyticsUtils;
            const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
            const obj2 = PremiumUtilsDefault;
            const tmp2 = analyticsLocations;
            if (obj2.isBoostOnlySubscription(subscription)) {
              tmp6ResultResult = handleCancelSubscription(tmp, tmp2);
            } else {
              const obj3 = {
                subscription,
                mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.CANCEL,
                onContinue(arg0) {
                    return closure_2_26(closure_0, closure_1, arg0);
                  }
              };
              const tmp6Result = openPremiumPlanWhatYouLoseActionSheetDefault;
              tmp6ResultResult = tmp6Result(obj3);
            }
            return tmp6ResultResult;
          },
        variant: "text-sm/medium",
        color: "text-overlay-light",
        children: intl5.string(tmp2(1113).t["ETE/oC"])
      };
      const Text = tmp2(5624).Text;
      intl5 = tmp2(1113).intl;
      tmp27Result6 = tmp27(Text, obj23);
    }
    items6[3] = tmp27Result6;
    items3[3] = closure_17(closure_7, obj16);
    items7 = [tmp25(closure_7, obj10), ];
    let tmp25Result = null;
    if (isMismatchResult) {
      const obj24 = { accessibilityRole: "alert", style: tmp.appleAccountMismatchNotice, children: items8 };
      const obj25 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
      const WarningIcon = tmp2(8026).WarningIcon;
      items8 = [closure_16(WarningIcon, obj25), ];
      const obj26 = { variant: "text-sm/medium", color: "text-strong", style: tmp.appleAccountMismatchNoticeText, children: intl6.string(tmp2(1113).t.meauFg) };
      const Text2 = tmp2(5624).Text;
      intl6 = tmp2(1113).intl;
      items8[1] = closure_16(Text2, obj26);
      tmp25Result = tmp25(tmp26, obj24);
    }
    items7[1] = tmp25Result;
    return closure_17(closure_7, obj9);
  }
}
({ Linking: metroRequire, View: metroImportDefault, StyleSheet } = react_native);
({ AnalyticsPages: c10, AnalyticsSections: unpackModuleId, PaymentGateways: closure_12, SubscriptionStatusTypes: map1, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
({ SubscriptionIntervalTypes: closure_14, SubscriptionPlanInfo: closure_15 } = PremiumConstants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let size = { height: 35, width: 49 };
const size1 = { height: 36, width: 51 };
const size2 = { width: 51, height: 36 };
obj = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.WHITE };
let obj2 = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.BLACK };
let createStyles = createStyles_mod;
let obj3 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, headerBackground: obj4, wumpusImg: { marginRight: 10 }, logoContainer: { flexDirection: "row", alignItems: "center" }, container: obj5, buttonContainer: { marginTop: 8, flexDirection: "row" }, buttonWrapper: { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 }, cancelLink: { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 }, appleAccountMismatchNotice: obj6, appleAccountMismatchNoticeText: { flex: 1 }, desktopSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } };
obj4 = { width: undefined, height: undefined };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { marginTop: 8, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj6 = { alignSelf: "stretch", flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg };
const authStore5 = createStyles(obj3);
let obj7 = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj8 = {};
let obj9 = {};
const BUNDLE = PremiumUtils.Branding.BUNDLE;
obj9[obj7.ACTIVE] = AssetRegistryDefault6;
obj9[obj7.ERROR] = AssetRegistryDefault10;
obj9[obj7.RESUB] = AssetRegistryDefault11;
obj8[BUNDLE] = obj9;
let obj10 = {};
const TIER_0 = PremiumUtils.Branding.TIER_0;
obj10[obj7.ACTIVE] = AssetRegistryDefault3;
obj10[obj7.ERROR] = AssetRegistryDefault10;
obj10[obj7.RESUB] = AssetRegistryDefault11;
obj8[TIER_0] = obj10;
let obj11 = {};
const TIER_1 = PremiumUtils.Branding.TIER_1;
obj11[obj7.ACTIVE] = AssetRegistryDefault4;
obj11[obj7.ERROR] = AssetRegistryDefault10;
obj11[obj7.RESUB] = AssetRegistryDefault11;
obj8[TIER_1] = obj11;
let obj12 = {};
const TIER_2 = PremiumUtils.Branding.TIER_2;
obj12[obj7.ACTIVE] = AssetRegistryDefault5;
obj12[obj7.ERROR] = AssetRegistryDefault10;
obj12[obj7.RESUB] = AssetRegistryDefault11;
obj8[TIER_2] = obj12;
let obj13 = {};
const PREMIUM_GUILD = PremiumUtils.Branding.PREMIUM_GUILD;
obj13[obj7.ACTIVE] = AssetRegistryDefault7;
obj13[obj7.ERROR] = AssetRegistryDefault12;
obj13[obj7.RESUB] = AssetRegistryDefault13;
obj8[PREMIUM_GUILD] = obj13;
let obj14 = {};
let obj15 = {};
const BUNDLE2 = PremiumUtils.Branding.BUNDLE;
obj15[obj7.ACTIVE] = AssetRegistryDefault14;
obj15[obj7.ERROR] = AssetRegistryDefault14;
obj15[obj7.RESUB] = AssetRegistryDefault14;
obj14[BUNDLE2] = obj15;
let obj16 = {};
const TIER_02 = PremiumUtils.Branding.TIER_0;
obj16[obj7.ACTIVE] = AssetRegistryDefault2;
obj16[obj7.ERROR] = AssetRegistryDefault15;
obj16[obj7.RESUB] = AssetRegistryDefault16;
obj14[TIER_02] = obj16;
let obj17 = {};
const TIER_12 = PremiumUtils.Branding.TIER_1;
obj17[obj7.ACTIVE] = AssetRegistryDefault17;
obj17[obj7.ERROR] = AssetRegistryDefault18;
obj17[obj7.RESUB] = AssetRegistryDefault19;
obj14[TIER_12] = obj17;
let obj18 = {};
const TIER_22 = PremiumUtils.Branding.TIER_2;
obj18[obj7.ACTIVE] = AssetRegistryDefault8;
obj18[obj7.ERROR] = AssetRegistryDefault20;
obj18[obj7.RESUB] = AssetRegistryDefault21;
obj14[TIER_22] = obj18;
let obj19 = {};
const PREMIUM_GUILD2 = PremiumUtils.Branding.PREMIUM_GUILD;
obj19[obj7.ACTIVE] = AssetRegistryDefault22;
obj19[obj7.ERROR] = AssetRegistryDefault23;
obj19[obj7.RESUB] = AssetRegistryDefault24;
obj14[PREMIUM_GUILD2] = obj19;
const authStore6 = { [PremiumUtils.Branding.BUNDLE]: { [obj7.ACTIVE]: size, [obj7.ERROR]: size, [obj7.RESUB]: size }, [PremiumUtils.Branding.TIER_0]: { [obj7.ACTIVE]: { height: 35, width: 29 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [PremiumUtils.Branding.TIER_1]: { [obj7.ACTIVE]: { height: 35, width: 49 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [PremiumUtils.Branding.TIER_2]: { [obj7.ACTIVE]: { height: 37, width: 49 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [PremiumUtils.Branding.PREMIUM_GUILD]: { [obj7.ACTIVE]: { width: 51, height: 36 }, [obj7.ERROR]: size2, [obj7.RESUB]: size2 } };
let obj20 = {};
let obj21 = {};
const BUNDLE3 = PremiumUtils.Branding.BUNDLE;
obj21[obj7.ACTIVE] = AssetRegistryDefault25;
obj21[obj7.ERROR] = AssetRegistryDefault25;
obj21[obj7.RESUB] = AssetRegistryDefault26;
obj20[BUNDLE3] = obj21;
let obj22 = {};
const TIER_03 = PremiumUtils.Branding.TIER_0;
obj22[obj7.ACTIVE] = AssetRegistryDefault9;
obj22[obj7.ERROR] = AssetRegistryDefault9;
obj22[obj7.RESUB] = AssetRegistryDefault27;
obj20[TIER_03] = obj22;
let obj23 = {};
const TIER_13 = PremiumUtils.Branding.TIER_1;
obj23[obj7.ACTIVE] = AssetRegistryDefault28;
obj23[obj7.ERROR] = AssetRegistryDefault28;
obj23[obj7.RESUB] = AssetRegistryDefault29;
obj20[TIER_13] = obj23;
let obj24 = {};
const TIER_23 = PremiumUtils.Branding.TIER_2;
obj24[obj7.ACTIVE] = AssetRegistryDefault;
obj24[obj7.ERROR] = AssetRegistryDefault;
obj24[obj7.RESUB] = AssetRegistryDefault30;
obj20[TIER_23] = obj24;
let obj25 = {};
const PREMIUM_GUILD3 = PremiumUtils.Branding.PREMIUM_GUILD;
obj25[obj7.ACTIVE] = AssetRegistryDefault31;
obj25[obj7.ERROR] = AssetRegistryDefault31;
obj25[obj7.RESUB] = AssetRegistryDefault32;
obj20[PREMIUM_GUILD3] = obj25;
let closure_24 = { [PremiumUtils.Branding.BUNDLE]: { height: 33, width: 205 }, [PremiumUtils.Branding.TIER_0]: { height: 32, width: 59 }, [PremiumUtils.Branding.TIER_1]: { height: 16, width: 156 }, [PremiumUtils.Branding.TIER_2]: { height: 32, width: 78 }, [PremiumUtils.Branding.PREMIUM_GUILD]: { height: 17, width: 184 } };
let closure_25 = { [obj7.ACTIVE]: obj, [obj7.ERROR]: obj, [obj7.RESUB]: obj2 };
size = size_mod;
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  let intl;
  let intl2;
  let items;
  let onClickManagePremiumGuild;
  let style;
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = closure_18();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  obj = PremiumSubscriptionInvoice;
  const obj2 = { subscriptionId: subscription.id, renewal: true, analyticsLocations, analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS };
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview(obj2), 1)[0];
  let tmp7Result = null;
  if (null != first) {
    const obj3 = { style, children: items };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl.string(intl7.t.ITurwY) };
    const Text = tmp4(5624).Text;
    intl = tmp4(1113).intl;
    items = [authStore4(Text, obj4), , , , ];
    let tmp9Result = null != subscription.renewalMutations;
    const tmp7 = closure_17;
    const tmp8 = metroImportDefault;
    if (tmp9Result) {
      tmp9Result = subscription.status !== map1.CANCELED;
    }
    if (tmp9Result) {
      const obj5 = { subscription, renewalMutations: subscription.renewalMutations };
      tmp9Result = tmp9(tmp2(15273), obj5);
    }
    items[1] = tmp9Result;
    let tmp9Result2 = subscription.status === map1.ACCOUNT_HOLD;
    if (tmp9Result2) {
      const obj6 = { subscription };
      tmp9Result2 = tmp9(tmp2(15274), obj6);
    }
    items[2] = tmp9Result2;
    obj7 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
    items[3] = authStore4(PremiumSubscriptionHeader, obj7);
    obj8 = { style: tmp.desktopSubtext, variant: "text-sm/medium", children: intl2.string(intl7.t["MTG+3O"]) };
    const Text2 = tmp4(5624).Text;
    intl2 = tmp4(1113).intl;
    items[4] = authStore4(Text2, obj8);
    tmp7Result = tmp7(tmp8, obj3);
  }
  return tmp7Result;
};
export function onCancelClick(subscription, analyticsLocations) {
  let tmp4ResultResult;
  _require = subscription;
  importDefault = analyticsLocations;
  obj = require("PremiumAnalyticsUtils");
  const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  const obj2 = PremiumUtilsDefault;
  const tmp = _require;
  if (obj2.isBoostOnlySubscription(subscription)) {
    tmp4ResultResult = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    const obj3 = {
      subscription,
      mode: tmp(15260).WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
          return closure_2_26(closure_0, closure_1, arg0);
        }
    };
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheetDefault;
    tmp4ResultResult = tmp4Result(obj3);
  }
  return tmp4ResultResult;
}
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };
