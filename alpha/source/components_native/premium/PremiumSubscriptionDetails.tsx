// Module ID: 13476
// Function ID: 13477
// Name: PremiumSubscriptionDetails
// Dependencies: [32, 5, 19, 17, 1389, 7120, 1085, 1391, 21, 587, 5090, 4726, 10055, 13477, 13478, 10052, 10053, 10054, 10056, 13479, 13480, 13481, 7144, 13482, 13483, 13484, 13485, 13486, 10057, 13487, 13488, 13489, 13490, 13491, 13492, 13493, 10060, 13494, 13495, 13496, 8070, 13497, 13498, 13499, 10004, 12748, 13500, 13501, 7114, 7115, 7117, 7127, 1278, 5720, 1502, 504, 38, 13510, 6841, 6926, 1381, 1200, 5375, 1126, 5086, 5003, 558, 576, 6865, 13513, 13514, 13515, 2]
// Exports: onCancelClick

// Module 13476 (PremiumSubscriptionDetails)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import PremiumUtils from "PremiumUtils" /* 4726 */;
import Text_Text from "Text/Text" /* 5086 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7114 */;
import AssetRegistryDefault from "AssetRegistry" /* 7144 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8070 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10004 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10052 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10053 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10054 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10055 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10056 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10057 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 10060 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 13477 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 13478 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 13479 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 13480 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 13481 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 13482 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 13483 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 13484 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 13485 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 13486 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 13487 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 13488 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 13489 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 13490 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 13491 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 13492 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 13493 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 13494 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 13495 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 13496 */;
import AssetRegistryDefault30 from "AssetRegistry" /* 13497 */;
import AssetRegistryDefault31 from "AssetRegistry" /* 13498 */;
import AssetRegistryDefault32 from "AssetRegistry" /* 13499 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13513 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1389 */;
import IAPStore from "IAPStore" /* 7120 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;
let _require, c1, closure_1, currentUser, dependencyMap, importDefault, openURL;

let StyleSheet;
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
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
const openPremiumPlanWhatYouLoseActionSheetDefault = tmp4(13500);
const PremiumPlanWhatYouLoseActionSheet = tmp3(13501);
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
          return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
            tmp4 = !(closure_2 && subscription.paymentGateway === map1.APPLE_ADVANCED_COMMERCE && interval.interval === constants.MONTH && null != interval.premiumTier && interval.numPremiumGuild > 0);
            const tmp5 = closure_2 && subscription.paymentGateway === map1.APPLE_ADVANCED_COMMERCE && interval.interval === constants.MONTH && null != interval.premiumTier && interval.numPremiumGuild > 0;
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
          return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
    const tmp = closure_19();
    let tmp2 = subscription;
    let tmp3 = dependencyMap;
    obj = subscription(1502);
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
    const obj5 = subscription(13510);
    const appleSubscriptionOwnership = obj5.useAppleSubscriptionOwnership(subscription);
    const isMismatchResult = appleSubscriptionOwnership.isMismatch();
    obj7 = subscription(4726);
    const premiumBranding = obj7.getPremiumBranding(subscription);
    analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
    if (premiumBranding === subscription(4726).Branding.PREMIUM_GUILD) {
      const tmp2Result = tmp2(4726);
      const coercedPremiumGuildSubscriptionStatus = tmp2Result.getCoercedPremiumGuildSubscriptionStatus(subscription);
      const obj6 = { subscription, user: stateFromStores, price: priceString, renewalInvoicePreview };
      priceString = undefined;
      const getPremiumGuildHeaderDescription = tmp2(4726).getPremiumGuildHeaderDescription;
      tmp2(4726);
      if (stateFromStores1 != null) {
        priceString = stateFromStores1.priceString;
      }
      premiumGuildHeaderDescription = getPremiumGuildHeaderDescription(obj6);
      tmp14 = coercedPremiumGuildSubscriptionStatus;
    } else {
      let tmp6Result = PremiumUtilsDefault;
      const statusFromInvoice = tmp6Result.getStatusFromInvoice(subscription, renewalInvoicePreview);
      let formatRateResult = null;
      _modDef38(null != closure_16[planIdFromInvoice], "missing subscription planInfo");
      obj8 = { subscription, planId: planIdFromInvoice, price: formatRateResult, includePremiumGuilds: true };
      const getPlanDescription = PremiumUtilsDefault.getPlanDescription;
      PremiumUtilsDefault;
      if (null != stateFromStores1) {
        const tmp2Result6 = tmp2(6926);
        formatRateResult = tmp2Result6.formatRate(stateFromStores1.priceString, tmp41.interval, tmp41.intervalCount);
      }
      premiumGuildHeaderDescription = getPlanDescription(obj8);
      tmp14 = statusFromInvoice;
    }
    const tmp20 = tmp14 === constants4.CANCELED;
    const tmp19 = constants4;
    if (tmp14 === constants4.ACTIVE) {
      ACTIVE = obj7.ACTIVE;
    } else {
      ACTIVE = tmp20 ? tmp21.RESUB : tmp21.ERROR;
    }
    let tmp24 = tmp23;
    if (tmp24) {
      const tmp2Result7 = tmp2(1381);
      const isAndroidResult = tmp2Result7.isAndroid();
      let tmp26 = !isAndroidResult;
      if (isAndroidResult) {
        tmp26 = null == subscription.renewalMutations;
      }
      tmp24 = tmp26;
    }
    const obj9 = { style: items2, children: items7 };
    items2 = [tmp.container, style];
    const obj10 = { style: tmp.header, children: items3 };
    items3 = [, , , ];
    const obj11 = { source: obj8[premiumBranding][ACTIVE], style: tmp.headerBackground };
    items3[0] = closure_17(closure_6, obj11);
    const obj13 = { source: obj14[premiumBranding][ACTIVE], style: items4 };
    items4 = [closure_23[premiumBranding][ACTIVE], tmp.wumpusImg];
    const obj12 = { style: tmp.logoContainer, children: items5 };
    items5 = [closure_17(closure_6, obj13), ];
    obj14 = { source: obj20[premiumBranding][ACTIVE], style: closure_25[premiumBranding] };
    items5[1] = closure_17(closure_6, obj14);
    items3[1] = closure_18(closure_8, obj12);
    const obj15 = { style: closure_26[ACTIVE], children: premiumGuildHeaderDescription };
    items3[2] = closure_17(tmp2(1200).LegacyText, obj15);
    let tmp30Result = null;
    const obj16 = { style: tmp.buttonContainer, children: items6 };
    if (tmp20) {
      let prop;
      if (subscription != null) {
        prop = subscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp30Result = null;
      if (prop) {
        const obj17 = { style: tmp.buttonWrapper, children: closure_17(Button, obj18) };
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
                    return { value: "IconComponent", done: null };
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
                      return { value: "IconComponent", done: null };
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
          text: intl.string(tmp2(1126).t.lTCb0c),
          size: "sm",
          disabled: tmp9,
          loading: tmp9
        };
        Button = tmp2(5375).Button;
        intl = tmp2(1126).intl;
        tmp30Result = tmp30(tmp29, obj17);
      }
    }
    items6 = [tmp30Result, , , ];
    let tmp30Result4 = null;
    if (tmp24) {
      const obj19 = { style: tmp.buttonWrapper, children: closure_17(Button2, obj20) };
      obj20 = {
        onPress() {
            handleManageSubscription(subscription, closure_1, analyticsLocations);
          },
        variant: "primary-overlay",
        text: stringResult,
        size: "sm"
      };
      Button2 = tmp2(5375).Button;
      if (subscription.status === tmp19.ACCOUNT_HOLD) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(tmp2(1126).t.SgX7Ra);
      } else {
        const intl2 = tmp2(1126).intl;
        stringResult = intl2.string(tmp2(1126).t.gmVtgF);
      }
      tmp30Result4 = tmp30(tmp29, obj19);
    }
    items6[1] = tmp30Result4;
    let tmp30Result5 = null;
    const tmp2Result8 = tmp2(4726);
    if (tmp2Result8.subscriptionHasPremiumGuildPlan(subscription)) {
      tmp30Result5 = null;
      if (null != onClickManagePremiumGuild) {
        const obj21 = { style: tmp.buttonWrapper, children: closure_17(Button3, obj22) };
        obj22 = { onPress: onClickManagePremiumGuild, variant: "primary-overlay", text: intl4.string(tmp2(1126).t.gIVkjm), size: "sm" };
        Button3 = tmp2(5375).Button;
        intl4 = tmp2(1126).intl;
        tmp30Result5 = tmp30(tmp29, obj21);
      }
    }
    items6[2] = tmp30Result5;
    let tmp30Result6 = null;
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
                    return closure_2_27(closure_0, closure_1, arg0);
                  }
              };
              const tmp6Result = openPremiumPlanWhatYouLoseActionSheetDefault;
              tmp6ResultResult = tmp6Result(obj3);
            }
            return tmp6ResultResult;
          },
        variant: "text-sm/medium",
        color: "text-overlay-light",
        children: intl5.string(tmp2(1126).t["ETE/oC"])
      };
      const Text = tmp2(5086).Text;
      intl5 = tmp2(1126).intl;
      tmp30Result6 = tmp30(Text, obj23);
    }
    items6[3] = tmp30Result6;
    items3[3] = closure_18(closure_8, obj16);
    items7 = [closure_18(closure_8, obj10), ];
    let tmp28Result = null;
    if (isMismatchResult) {
      const obj24 = { accessibilityRole: "alert", style: tmp.appleAccountMismatchNotice, children: items8 };
      const obj25 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
      const WarningIcon = tmp2(5003).WarningIcon;
      items8 = [closure_17(WarningIcon, obj25), ];
      const obj26 = { variant: "text-sm/medium", color: "text-strong", style: tmp.appleAccountMismatchNoticeText, children: intl6.string(tmp2(1126).t.meauFg) };
      const Text2 = tmp2(5086).Text;
      intl6 = tmp2(1126).intl;
      items8[1] = closure_17(Text2, obj26);
      tmp28Result = tmp28(tmp29, obj24);
    }
    items7[1] = tmp28Result;
    return closure_18(closure_8, obj9);
  }
}
({ Image: metroRequire, Linking: metroImportDefault, View: metroImportAll, StyleSheet } = react_native);
({ AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12, PaymentGateways: map1, SubscriptionStatusTypes: closure_14, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
({ SubscriptionIntervalTypes: closure_15, SubscriptionPlanInfo: closure_16 } = PremiumConstants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
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
let closure_19 = createStyles(obj3);
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
obj16[obj7.ACTIVE] = AssetRegistryDefault;
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
const version = { [PremiumUtils.Branding.BUNDLE]: { [obj7.ACTIVE]: size, [obj7.ERROR]: size, [obj7.RESUB]: size }, [PremiumUtils.Branding.TIER_0]: { [obj7.ACTIVE]: { height: 35, width: 29 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [PremiumUtils.Branding.TIER_1]: { [obj7.ACTIVE]: { height: 35, width: 49 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [PremiumUtils.Branding.TIER_2]: { [obj7.ACTIVE]: { height: 37, width: 49 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [PremiumUtils.Branding.PREMIUM_GUILD]: { [obj7.ACTIVE]: { width: 51, height: 36 }, [obj7.ERROR]: size2, [obj7.RESUB]: size2 } };
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
obj24[obj7.ACTIVE] = AssetRegistryDefault2;
obj24[obj7.ERROR] = AssetRegistryDefault2;
obj24[obj7.RESUB] = AssetRegistryDefault30;
obj20[TIER_23] = obj24;
let obj25 = {};
const PREMIUM_GUILD3 = PremiumUtils.Branding.PREMIUM_GUILD;
obj25[obj7.ACTIVE] = AssetRegistryDefault31;
obj25[obj7.ERROR] = AssetRegistryDefault31;
obj25[obj7.RESUB] = AssetRegistryDefault32;
obj20[PREMIUM_GUILD3] = obj25;
let closure_25 = { [PremiumUtils.Branding.BUNDLE]: { height: 33, width: 205 }, [PremiumUtils.Branding.TIER_0]: { height: 32, width: 59 }, [PremiumUtils.Branding.TIER_1]: { height: 16, width: 156 }, [PremiumUtils.Branding.TIER_2]: { height: 32, width: 78 }, [PremiumUtils.Branding.PREMIUM_GUILD]: { height: 17, width: 184 } };
const prioritySpeakerDucking = { [obj7.ACTIVE]: obj, [obj7.ERROR]: obj, [obj7.RESUB]: obj2 };
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumSubscriptionDetails(arg0) {
  let items;
  let onClickManagePremiumGuild;
  let style;
  let subscription;
  obj = react2;
  const cResult = obj.c(24);
  ({ style, onClickManagePremiumGuild, subscription } = arg0);
  const tmp4 = closure_19();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    let tmp6;
    if (cResult[1] === subscription.id) {
      tmp6 = cResult[2];
    }
    const tmpResult = PremiumSubscriptionInvoice;
    const first = _slicedToArray(tmpResult.useFetchSubscriptionInvoicePreview(tmp6), 1)[0];
    if (null == first) {
      return null;
    } else {
      let tmp10;
      let tmp12;
      let tmp15;
      let tmp19;
      const _Symbol2 = Symbol;
      const title = tmp4.title;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(intl7.t.ITurwY);
        cResult[3] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp4.title) {
        const obj2 = { style: title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp10 };
        const tmp14 = closure_17(Text_Text.Text, obj2);
        cResult[4] = tmp4.title;
        cResult[5] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== subscription) {
        let tmp16 = null != subscription.renewalMutations && subscription.status !== constants4.CANCELED;
        if (tmp16) {
          const obj3 = { subscription, renewalMutations: subscription.renewalMutations };
          tmp16 = closure_17(tmp5(13514), obj3);
        }
        cResult[6] = subscription;
        cResult[7] = tmp16;
        tmp15 = tmp16;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== subscription) {
        let tmp21 = subscription.status === constants4.ACCOUNT_HOLD;
        if (tmp21) {
          const obj4 = { subscription };
          tmp21 = closure_17(tmp5(13515), obj4);
        }
        cResult[8] = subscription;
        cResult[9] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] === onClickManagePremiumGuild) {
        if (cResult[11] === first) {
          let tmp23;
          let tmp27;
          let tmp29;
          if (cResult[12] === subscription) {
            tmp23 = cResult[13];
          }
          const _Symbol = Symbol;
          const desktopSubtext = tmp4.desktopSubtext;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(intl7.t["MTG+3O"]);
            cResult[14] = stringResult1;
            tmp27 = stringResult1;
          } else {
            tmp27 = cResult[14];
          }
          if (cResult[15] !== tmp4.desktopSubtext) {
            const obj5 = { style: desktopSubtext, variant: "text-sm/medium", children: tmp27 };
            const tmp31 = closure_17(Text_Text.Text, obj5);
            cResult[15] = tmp4.desktopSubtext;
            cResult[16] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[16];
          }
          if (cResult[17] === style) {
            if (cResult[18] === tmp29) {
              if (cResult[19] === tmp12) {
                if (cResult[20] === tmp15) {
                  if (cResult[21] === tmp19) {
                    let tmp32;
                    if (cResult[22] === tmp23) {
                      tmp32 = cResult[23];
                    }
                    return tmp32;
                  }
                }
              }
            }
          }
          const obj6 = { style, children: items };
          items = [tmp12, tmp15, tmp19, tmp23, tmp29];
          const tmp35 = authStore5(metroImportAll, obj6);
          cResult[17] = style;
          cResult[18] = tmp29;
          cResult[19] = tmp12;
          cResult[20] = tmp15;
          cResult[21] = tmp19;
          cResult[22] = tmp23;
          cResult[23] = tmp35;
          tmp32 = tmp35;
        }
      }
      obj7 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
      const tmp26 = closure_17(PremiumSubscriptionHeader, obj7);
      cResult[10] = onClickManagePremiumGuild;
      cResult[11] = first;
      cResult[12] = subscription;
      cResult[13] = tmp26;
      tmp23 = tmp26;
    }
  }
  obj8 = { subscriptionId: subscription.id, renewal: true, analyticsLocations, analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS };
  cResult[0] = analyticsLocations;
  cResult[1] = subscription.id;
  cResult[2] = obj8;
  tmp6 = obj8;
}) : (function PremiumSubscriptionDetails(subscription) {
  let intl;
  let intl2;
  let items;
  let onClickManagePremiumGuild;
  let style;
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = closure_19();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  obj = PremiumSubscriptionInvoice;
  const obj2 = { subscriptionId: subscription.id, renewal: true, analyticsLocations, analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS };
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview(obj2), 1)[0];
  let tmp7Result = null;
  if (null != first) {
    const obj3 = { style, children: items };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl.string(intl7.t.ITurwY) };
    const Text = tmp4(5086).Text;
    intl = tmp4(1126).intl;
    items = [closure_17(Text, obj4), , , , ];
    let tmp9Result = null != subscription.renewalMutations;
    const tmp7 = authStore5;
    const tmp8 = metroImportAll;
    if (tmp9Result) {
      tmp9Result = subscription.status !== constants4.CANCELED;
    }
    if (tmp9Result) {
      const obj5 = { subscription, renewalMutations: subscription.renewalMutations };
      tmp9Result = tmp9(tmp2(13514), obj5);
    }
    items[1] = tmp9Result;
    let tmp9Result2 = subscription.status === constants4.ACCOUNT_HOLD;
    if (tmp9Result2) {
      const obj6 = { subscription };
      tmp9Result2 = tmp9(tmp2(13515), obj6);
    }
    items[2] = tmp9Result2;
    obj7 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
    items[3] = closure_17(PremiumSubscriptionHeader, obj7);
    obj8 = { style: tmp.desktopSubtext, variant: "text-sm/medium", children: intl2.string(intl7.t["MTG+3O"]) };
    const Text2 = tmp4(5086).Text;
    intl2 = tmp4(1126).intl;
    items[4] = closure_17(Text2, obj8);
    tmp7Result = tmp7(tmp8, obj3);
  }
  return tmp7Result;
});
function onCancelClick(subscription, analyticsLocations) {
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
      mode: tmp(13501).WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
          return closure_2_27(closure_0, closure_1, arg0);
        }
    };
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheetDefault;
    tmp4ResultResult = tmp4Result(obj3);
  }
  return tmp4ResultResult;
}
size = size_mod;
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default tmp8;
export { onCancelClick };
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };
