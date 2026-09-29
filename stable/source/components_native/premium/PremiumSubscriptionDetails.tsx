// Module ID: 13651
// Function ID: 13652
// Name: PremiumSubscriptionDetails
// Dependencies: [32, 5, 19, 17, 1372, 7514, 1074, 1374, 21, 576, 4788, 4446, 11009, 13652, 13653, 11006, 11007, 11008, 11010, 13654, 13655, 13656, 9531, 13657, 13658, 13659, 13660, 13661, 11012, 13662, 13663, 13664, 13665, 13666, 13667, 13668, 11015, 13669, 13670, 13671, 8358, 13672, 13673, 13674, 10959, 11345, 13675, 13676, 7683, 7517, 7685, 7693, 1255, 5111, 1484, 504, 38, 7439, 7511, 1364, 1177, 5218, 1115, 4784, 13685, 7459, 13686, 13687, 2]
// Exports: default, onCancelClick

// Module 13651 (PremiumSubscriptionDetails)
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4446 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7439 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7459 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7683 */;
import _modDef8358 from "module_8358" /* 8358 */;
import _modDef9531 from "module_9531" /* 9531 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10959 */;
import _modDef11006 from "module_11006" /* 11006 */;
import _modDef11007 from "module_11007" /* 11007 */;
import _modDef11008 from "module_11008" /* 11008 */;
import _modDef11009 from "module_11009" /* 11009 */;
import _modDef11010 from "module_11010" /* 11010 */;
import _modDef11012 from "module_11012" /* 11012 */;
import _modDef11015 from "module_11015" /* 11015 */;
import _modDef13652 from "module_13652" /* 13652 */;
import _modDef13653 from "module_13653" /* 13653 */;
import _modDef13654 from "module_13654" /* 13654 */;
import _modDef13655 from "module_13655" /* 13655 */;
import _modDef13656 from "module_13656" /* 13656 */;
import _modDef13657 from "module_13657" /* 13657 */;
import _modDef13658 from "module_13658" /* 13658 */;
import _modDef13659 from "module_13659" /* 13659 */;
import _modDef13660 from "module_13660" /* 13660 */;
import _modDef13661 from "module_13661" /* 13661 */;
import _modDef13662 from "module_13662" /* 13662 */;
import _modDef13663 from "module_13663" /* 13663 */;
import _modDef13664 from "module_13664" /* 13664 */;
import _modDef13665 from "module_13665" /* 13665 */;
import _modDef13666 from "module_13666" /* 13666 */;
import _modDef13667 from "module_13667" /* 13667 */;
import _modDef13668 from "module_13668" /* 13668 */;
import _modDef13669 from "module_13669" /* 13669 */;
import _modDef13670 from "module_13670" /* 13670 */;
import _modDef13671 from "module_13671" /* 13671 */;
import _modDef13672 from "module_13672" /* 13672 */;
import _modDef13673 from "module_13673" /* 13673 */;
import _modDef13674 from "module_13674" /* 13674 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13685 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import IAPStore from "IAPStore" /* 7514 */;

const require = globalThis.__r;

const openPremiumPlanWhatYouLoseActionSheetDefault = tmp4(13675);
const PremiumPlanWhatYouLoseActionSheet = tmp3(13676);
require = fn;
function handleCancelSubscription() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_29 = async function _handleCancelSubscription(subscription, analyticsLocations, fromStep) {
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { subscription, analyticsLocations, fromStep, toStep: require("PremiumAnalyticsUtils").STEP_ANALYTICS_NAMES[require("PremiumAnalyticsUtils").CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE] };
            const result = require("PremiumAnalyticsUtils").trackPremiumSubscriptionCancellationFlowStep(obj4);
            let isPurchasedViaApple;
            if (subscription != null) {
              isPurchasedViaApple = tmp14.isPurchasedViaApple;
            }
            if (isPurchasedViaApple) {
              c4 = 1;
              c3 = 1;
              obj5 = { value: tmp17(11345).manageSubscription(), done: false };
              return obj5;
            } else {
              let isPurchasedViaGoogle;
              if (tmp14 != null) {
                isPurchasedViaGoogle = tmp14.isPurchasedViaGoogle;
              }
              if (isPurchasedViaGoogle) {
                closure_2_8.openURL(tmp17(4446).getExternalSubscriptionMethodUrl(tmp14.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
                const tmp17Result2 = tmp17(4446);
              }
            }
            obj7 = require("PremiumAnalyticsUtils");
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        c3 = tmp;
        throw tmp9;
      }
    }
  })();
};
function handleManageSubscription(subscription, navigation, analyticsLocations) {
  _require = subscription;
  if (subscription.status === constants4.ACCOUNT_HOLD) {
    closure_8.openURL(require("PremiumUtils").getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    const obj6 = require("PremiumUtils");
  } else {
    const hasActiveTrial = subscription.hasActiveTrial;
    dependencyMap = false;
    try {
      const productIdFromSubscription = require("PremiumBundledPlansUtils").getProductIdFromSubscription(subscription, false);
      let tmp4 = require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
      let interval;
      if (tmp4 != null) {
        interval = tmp4.interval;
      }
      dependencyMap = interval === constants5.YEAR;
      let flag = false;
      if (subscription.paymentGateway === constants3.APPLE_ADVANCED_COMMERCE) {
        try {
          const productIdFromSubscription1 = require("PremiumBundledPlansUtils").getProductIdFromSubscription(subscription, true);
          const tmp12 = require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
          let interval1;
          if (tmp12 != null) {
            interval1 = tmp12.interval;
          }
          flag = interval1 === constants5.YEAR;
          const obj2 = require("PremiumBundledPlansUtils");
        } catch (err) {
        }
      }
      let obj = require("PremiumBundledPlansUtils");
      const obj4 = { navigation, analyticsLocation: null, analyticsLocations: null, showCurrentPlan: null, allowYearlyBundles: null, predicate: null };
      obj5 = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_PREMIUM };
      obj4.analyticsLocation = obj5;
      obj4.analyticsLocations = analyticsLocations;
      obj4.showCurrentPlan = !hasActiveTrial;
      obj4.allowYearlyBundles = flag;
      obj4.predicate = function predicate(interval) {
        let tmp = hasActiveTrial;
        if (hasActiveTrial) {
          tmp = !PremiumBundledPlansUtils.excludeNitroOnlyPlansForActiveTrial(interval);
        }
        let tmp4 = !tmp;
        if (!tmp) {
          let tmp5 = closure_2;
          if (closure_2) {
            tmp5 = subscription.paymentGateway === constants3.APPLE_ADVANCED_COMMERCE;
          }
          if (tmp5) {
            tmp5 = interval.interval === constants5.MONTH;
          }
          if (tmp5) {
            tmp5 = null != interval.premiumTier;
          }
          if (tmp5) {
            tmp5 = interval.numPremiumGuild > 0;
          }
          tmp4 = !tmp5;
        }
        return tmp4;
      };
      const result = require("launchPremiumPlanSelect").launchPremiumPlanSelect(obj4);
      const obj3 = require("launchPremiumPlanSelect");
    } catch (err) {
    }
  }
}
function onResubscribeClick() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_32 = async function _onResubscribeClick(arg0) {
  let isACOM = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp2;
            if (isACOM.isACOM) {
              obj5 = { requestIdentifier: null, subscriptionId: null };
              const obj9 = require("BillingActionCreators");
              obj5.requestIdentifier = require("v1").v4();
              obj5.subscriptionId = tmp24.id;
              c2 = 1;
              c3 = 1;
              const obj8 = { value: obj9.resubscribeGenericSubscription(obj5, true), done: false };
              return obj8;
            } else if (tmp24.isPurchasedViaApple) {
              c2 = 3;
              c3 = 1;
              const obj10 = { value: require("IAPUtils").manageSubscription(), done: false };
              return obj10;
            } else if (tmp24.isPurchasedViaGoogle) {
              closure_2_8.openURL(require("PremiumUtils").getExternalSubscriptionMethodUrl(tmp24.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
              const obj6 = require("PremiumUtils");
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            c2 = 2;
            c3 = 1;
            obj13 = { value: closure_129_0(closure_129_2[53]).fetchSubscriptions(), done: false };
            return obj13;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj14 = { value, done: true };
            return obj14;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  })();
};
class PremiumSubscriptionHeader {
  constructor(arg0) {
    subscription = global.subscription;
    ({ renewalInvoicePreview, onClickManagePremiumGuild } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    analyticsLocations = undefined;
    tmp = closure_20();
    tmp2 = subscription;
    tmp3 = closure_2;
    obj = subscription(closure_2[54]);
    closure_1 = obj.useNavigation();
    obj2 = subscription(closure_2[55]);
    items = [];
    items[0] = closure_10;
    stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      closure_1(_undefined[56])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    obj3 = subscription(closure_2[55]);
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj3.useStateFromStores(items1, () => {
      if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
        if (tmp.isACOM) {
          return null;
        } else {
          if (null != tmp.paymentGatewayPlanId) {
            if ("" !== tmp.paymentGatewayPlanId) {
              return IAPStore.getProduct(tmp.paymentGatewayPlanId);
            }
          }
          const _Error = Error;
          const error = new Error("Subscription missing plan ID");
          throw error;
        }
      } else {
        return null;
      }
    });
    tmp6 = closure_1;
    obj4 = closure_1(closure_2[11]);
    planIdFromInvoice = obj4.getPlanIdFromInvoice(subscription, renewalInvoicePreview);
    tmp8 = analyticsLocations(closure_5.useState(false), 2);
    [tmp9, closure_2] = tmp8;
    obj5 = subscription(closure_2[11]);
    premiumBranding = obj5.getPremiumBranding(subscription);
    analyticsLocations = closure_1(closure_2[57])().analyticsLocations;
    if (premiumBranding === subscription(closure_2[11]).Branding.PREMIUM_GUILD) {
      tmp2Result = tmp2(tmp3[11]);
      coercedPremiumGuildSubscriptionStatus = tmp2Result.getCoercedPremiumGuildSubscriptionStatus(subscription);
      tmp2Result1 = tmp2(tmp3[11]);
      obj1 = { subscription: null, user: null, price: null, renewalInvoicePreview: null };
      obj1.subscription = subscription;
      obj1.user = stateFromStores;
      tmp15 = null;
      priceString = undefined;
      if (stateFromStores1 != null) {
        priceString = stateFromStores1.priceString;
      }
      obj1.price = priceString;
      obj1.renewalInvoicePreview = renewalInvoicePreview;
      premiumGuildHeaderDescription = tmp2Result1.getPremiumGuildHeaderDescription(obj1);
      tmp13 = coercedPremiumGuildSubscriptionStatus;
    } else {
      tmp6Result = tmp6(tmp3[11]);
      tmp38 = SubscriptionPlanInfo;
      tmp39 = SubscriptionPlanInfo[planIdFromInvoice];
      statusFromInvoice = tmp6Result.getStatusFromInvoice(subscription, renewalInvoicePreview);
      formatRateResult = null;
      str = "missing subscription planInfo";
      tmp40 = tmp6(tmp3[56])(null != tmp39, "missing subscription planInfo");
      tmp6Result1 = tmp6(tmp3[11]);
      obj29 = { subscription: null, planId: null, price: null, includePremiumGuilds: true };
      obj29.subscription = subscription;
      obj29.planId = planIdFromInvoice;
      if (null != stateFromStores1) {
        tmp2Result2 = tmp2(tmp3[58]);
        formatRateResult = tmp2Result2.formatRate(stateFromStores1.priceString, tmp39.interval, tmp39.intervalCount);
      }
      obj29.price = formatRateResult;
      premiumGuildHeaderDescription = tmp6Result1.getPlanDescription(obj29);
      tmp13 = statusFromInvoice;
    }
    tmp18 = tmp13 === SubscriptionStatusTypes.CANCELED;
    tmp17 = SubscriptionStatusTypes;
    if (tmp13 === SubscriptionStatusTypes.ACTIVE) {
      tmp20 = closure_21;
      ACTIVE = closure_21.ACTIVE;
    } else {
      tmp19 = closure_21;
      ACTIVE = tmp18 ? tmp19.RESUB : tmp19.ERROR;
    }
    tmp21 = tmp18;
    if (!tmp18) {
      tmp21 = !subscription.isOnPlatformMatchingExternalPaymentGateway;
    }
    tmp22 = !tmp21;
    if (!tmp21) {
      tmp2Result3 = tmp2(tmp3[59]);
      isAndroidResult = tmp2Result3.isAndroid();
      tmp24 = !isAndroidResult;
      if (isAndroidResult) {
        tmp25 = null;
        tmp24 = null == subscription.renewalMutations;
      }
      tmp22 = tmp24;
    }
    isOnPlatformMatchingExternalPaymentGateway = !tmp18;
    if (!tmp18) {
      isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    }
    tmp26 = jsx;
    tmp27 = View;
    obj30 = { style: null, children: null };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = global.style;
    obj30.style = items2;
    tmp28 = jsxs;
    obj31 = { source: closure_22[premiumBranding][ACTIVE], style: tmp.header, children: null };
    obj32 = { style: tmp.logoContainer, children: null };
    obj33 = { source: closure_23[premiumBranding][ACTIVE], style: null };
    items3 = [, ];
    items3[0] = closure_24[premiumBranding][ACTIVE];
    items3[1] = tmp.wumpusImg;
    obj33.style = items3;
    tmp29 = ImageBackground;
    items4 = [, ];
    items4[0] = jsx(Image, obj33);
    obj34 = { source: closure_25[premiumBranding][ACTIVE], style: closure_26[premiumBranding] };
    items4[1] = jsx(Image, obj34);
    obj32.children = items4;
    items5 = [, , ];
    items5[0] = jsxs(View, obj32);
    obj35 = { style: closure_27[ACTIVE], children: premiumGuildHeaderDescription };
    items5[1] = jsx(tmp2(tmp3[60]).LegacyText, obj35);
    obj36 = { style: tmp.buttonContainer, children: null };
    tmp26Result = null;
    if (tmp18) {
      prop = undefined;
      if (subscription != null) {
        prop = subscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp26Result = null;
      if (prop) {
        obj37 = { style: null, children: null };
        obj37.style = tmp.buttonWrapper;
        obj38 = { onPress: null, variant: "primary-overlay", text: null, size: "sm", disabled: null, loading: null };
        tmp32 = closure_4;
        obj38.onPress = closure_4(async (arg0, value) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
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
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = tmp3;
                  tmp23(true);
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj4 = { value: onResubscribeClick(subscription), done: false };
                  return obj4;
                }
              } else if (1 === tmp7) {
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
                const obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                closure_128_2(false);
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp23) {
              closure_2 = tmp23;
              if (tmp4 === c3) {
                c4 = tmp2;
                throw tmp23;
              } else {
                c1 = tmp;
              }
            }
          }
        });
        intl = tmp2(tmp3[62]).intl;
        obj38.text = intl.string(tmp2(tmp3[62]).t.lTCb0c);
        obj38.disabled = tmp9;
        obj38.loading = tmp9;
        obj37.children = tmp26(tmp2(tmp3[61]).Button, obj38);
        tmp26Result = tmp26(tmp27, obj37);
      }
    }
    items6 = [, , , ];
    items6[0] = tmp26Result;
    if (!tmp22) {
      items6[1] = null;
      tmp2Result4 = tmp2(tmp3[11]);
      tmp26Result1 = null;
      if (tmp2Result4.subscriptionHasPremiumGuildPlan(subscription)) {
        tmp26Result1 = null;
        if (null != onClickManagePremiumGuild) {
          obj39 = { style: null, children: null };
          obj39.style = tmp.buttonWrapper;
          obj40 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
          obj40.onPress = onClickManagePremiumGuild;
          intl4 = tmp2(tmp3[62]).intl;
          obj40.text = intl4.string(tmp2(tmp3[62]).t.gIVkjm);
          obj39.children = tmp26(tmp2(tmp3[61]).Button, obj40);
          tmp26Result1 = tmp26(tmp27, obj39);
        }
      }
      items6[2] = tmp26Result1;
      tmp26Result2 = null;
      if (isOnPlatformMatchingExternalPaymentGateway) {
        obj41 = { accessibilityRole: "link", style: null, onPress: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
        obj41.style = tmp.cancelLink;
        obj41.onPress = function onPress() {
          closure_0 = subscription;
          closure_1 = analyticsLocations;
          const result = PremiumAnalyticsUtils.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
          const tmp2 = analyticsLocations;
          if (obj2.isBoostOnlySubscription(subscription)) {
            let tmp6ResultResult = handleCancelSubscription(tmp, tmp2);
          } else {
            const obj3 = {
              subscription: tmp,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.CANCEL,
              onContinue(arg0) {
                  return handleCancelSubscription(closure_0, closure_1, arg0);
                }
            };
            tmp6ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
            const tmp6Result = openPremiumPlanWhatYouLoseActionSheetDefault;
          }
          return tmp6ResultResult;
        };
        intl5 = tmp2(tmp3[62]).intl;
        obj41.children = intl5.string(tmp2(tmp3[62]).t["ETE/oC"]);
        tmp26Result2 = tmp26(tmp2(tmp3[63]).Text, obj41);
      }
      items6[3] = tmp26Result2;
      obj36.children = items6;
      items5[2] = tmp28(tmp27, obj36);
      obj31.children = items5;
      obj30.children = tmp28(tmp29, obj31);
      return tmp26(tmp27, obj30);
    } else {
      obj42 = { style: null, children: null };
      obj42.style = tmp.buttonWrapper;
      obj43 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
      obj43.onPress = function onPress() {
        handleManageSubscription(subscription, closure_1, analyticsLocations);
      };
      if (subscription.status === tmp17.ACCOUNT_HOLD) {
        intl3 = tmp2(tmp3[62]).intl;
        stringResult = intl3.string(tmp2(tmp3[62]).t.SgX7Ra);
      } else {
        intl2 = tmp2(tmp3[62]).intl;
        stringResult = intl2.string(tmp2(tmp3[62]).t.gmVtgF);
      }
      obj43.text = stringResult;
      obj43 = tmp26(tmp2(tmp3[61]).Button, obj43);
      obj42.children = obj43;
      tmp26Result3 = tmp26(tmp27, obj42);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ImageBackground: closure_7, Linking: closure_8, View: closure_9 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsPages: closure_12, AnalyticsSections: map1, PaymentGateways: closure_14, SubscriptionStatusTypes: closure_15, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const PremiumConstants = fn(1374);
({ SubscriptionIntervalTypes: closure_16, SubscriptionPlanInfo: closure_17 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let size = { height: 35, width: 49 };
const size1 = { height: 36, width: 51 };
const size2 = { width: 51, height: 36 };
let obj = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.WHITE };
const createStyles = fn(4788);
let obj3 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, wumpusImg: { marginRight: 10 }, logoContainer: { flexDirection: "row", alignItems: "center" }, container: null, buttonContainer: null, buttonWrapper: null, cancelLink: null, desktopSubtext: null };
let obj2 = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.BLACK };
obj3.container = { marginTop: 8, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.buttonContainer = { marginTop: 8, flexDirection: "row" };
obj3.buttonWrapper = { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 };
obj3.cancelLink = { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 };
obj3.desktopSubtext = { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
let closure_20 = createStyles.createStyles(obj3);
let obj5 = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj7 = {};
let obj8 = {};
obj8[obj5.ACTIVE] = _modDef11009;
obj8[obj5.ERROR] = _modDef13652;
obj8[obj5.RESUB] = _modDef13653;
obj7[fn(4446).Branding.BUNDLE] = obj8;
let obj9 = {};
obj9[obj5.ACTIVE] = _modDef11006;
obj9[obj5.ERROR] = _modDef13652;
obj9[obj5.RESUB] = _modDef13653;
obj7[fn(4446).Branding.TIER_0] = obj9;
let obj10 = {};
obj10[obj5.ACTIVE] = _modDef11007;
obj10[obj5.ERROR] = _modDef13652;
obj10[obj5.RESUB] = _modDef13653;
obj7[fn(4446).Branding.TIER_1] = obj10;
let obj11 = {};
obj11[obj5.ACTIVE] = _modDef11008;
obj11[obj5.ERROR] = _modDef13652;
obj11[obj5.RESUB] = _modDef13653;
obj7[fn(4446).Branding.TIER_2] = obj11;
let obj12 = {};
obj12[obj5.ACTIVE] = _modDef11010;
obj12[obj5.ERROR] = _modDef13654;
obj12[obj5.RESUB] = _modDef13655;
obj7[fn(4446).Branding.PREMIUM_GUILD] = obj12;
let obj13 = {};
let obj14 = {};
obj14[obj5.ACTIVE] = _modDef13656;
obj14[obj5.ERROR] = _modDef13656;
obj14[obj5.RESUB] = _modDef13656;
obj13[fn(4446).Branding.BUNDLE] = obj14;
let obj15 = {};
obj15[obj5.ACTIVE] = _modDef9531;
obj15[obj5.ERROR] = _modDef13657;
obj15[obj5.RESUB] = _modDef13658;
obj13[fn(4446).Branding.TIER_0] = obj15;
let obj16 = {};
obj16[obj5.ACTIVE] = _modDef13659;
obj16[obj5.ERROR] = _modDef13660;
obj16[obj5.RESUB] = _modDef13661;
obj13[fn(4446).Branding.TIER_1] = obj16;
let obj17 = {};
obj17[obj5.ACTIVE] = _modDef11012;
obj17[obj5.ERROR] = _modDef13662;
obj17[obj5.RESUB] = _modDef13663;
obj13[fn(4446).Branding.TIER_2] = obj17;
let obj18 = {};
obj18[obj5.ACTIVE] = _modDef13664;
obj18[obj5.ERROR] = _modDef13665;
obj18[obj5.RESUB] = _modDef13666;
obj13[fn(4446).Branding.PREMIUM_GUILD] = obj18;
const __initData4 = { [fn(4446).Branding.BUNDLE]: { [obj5.ACTIVE]: size, [obj5.ERROR]: size, [obj5.RESUB]: size }, [fn(4446).Branding.TIER_0]: { [obj5.ACTIVE]: { height: 35, width: 29 }, [obj5.ERROR]: size1, [obj5.RESUB]: size1 }, [fn(4446).Branding.TIER_1]: { [obj5.ACTIVE]: { height: 35, width: 49 }, [obj5.ERROR]: size1, [obj5.RESUB]: size1 }, [fn(4446).Branding.TIER_2]: { [obj5.ACTIVE]: { height: 37, width: 49 }, [obj5.ERROR]: size1, [obj5.RESUB]: size1 }, [fn(4446).Branding.PREMIUM_GUILD]: { [obj5.ACTIVE]: { width: 51, height: 36 }, [obj5.ERROR]: size2, [obj5.RESUB]: size2 } };
let obj19 = {};
let obj20 = {};
obj20[obj5.ACTIVE] = _modDef13667;
obj20[obj5.ERROR] = _modDef13667;
obj20[obj5.RESUB] = _modDef13668;
obj19[fn(4446).Branding.BUNDLE] = obj20;
let obj21 = {};
obj21[obj5.ACTIVE] = _modDef11015;
obj21[obj5.ERROR] = _modDef11015;
obj21[obj5.RESUB] = _modDef13669;
obj19[fn(4446).Branding.TIER_0] = obj21;
const obj22 = {};
obj22[obj5.ACTIVE] = _modDef13670;
obj22[obj5.ERROR] = _modDef13670;
obj22[obj5.RESUB] = _modDef13671;
obj19[fn(4446).Branding.TIER_1] = obj22;
const obj23 = {};
obj23[obj5.ACTIVE] = _modDef8358;
obj23[obj5.ERROR] = _modDef8358;
obj23[obj5.RESUB] = _modDef13672;
obj19[fn(4446).Branding.TIER_2] = obj23;
const obj24 = {};
obj24[obj5.ACTIVE] = _modDef13673;
obj24[obj5.ERROR] = _modDef13673;
obj24[obj5.RESUB] = _modDef13674;
obj19[fn(4446).Branding.PREMIUM_GUILD] = obj24;
let dependencyMap = { [fn(4446).Branding.BUNDLE]: { height: 33, width: 205 }, [fn(4446).Branding.TIER_0]: { height: 32, width: 59 }, [fn(4446).Branding.TIER_1]: { height: 16, width: 156 }, [fn(4446).Branding.TIER_2]: { height: 32, width: 78 }, [fn(4446).Branding.PREMIUM_GUILD]: { height: 17, width: 184 } };
const __initData5 = { [obj5.ACTIVE]: obj, [obj5.ERROR]: obj, [obj5.RESUB]: obj2 };
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = closure_20();
  const obj = PremiumSubscriptionInvoice;
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview({ subscriptionId: subscription.id, renewal: true, analyticsLocations: useAnalyticsLocationsDefault().analyticsLocations, analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS }), 1)[0];
  let tmp7Result = null;
  if (null != first) {
    const obj3 = { style, children: null };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp4(1115).intl;
    obj4.children = intl.string(tmp4(1115).t.ITurwY);
    const items = [collapsedCategories(tmp4(4784).Text, obj4), , , , ];
    let tmp9Result = null != subscription.renewalMutations;
    if (tmp9Result) {
      tmp9Result = subscription.status !== constants4.CANCELED;
    }
    if (tmp9Result) {
      obj5 = { subscription, renewalMutations: subscription.renewalMutations };
      tmp9Result = tmp9(tmp2(13686), obj5);
    }
    items[1] = tmp9Result;
    let tmp9Result2 = subscription.status === constants4.ACCOUNT_HOLD;
    if (tmp9Result2) {
      const obj6 = { subscription };
      tmp9Result2 = tmp9(tmp2(13687), obj6);
    }
    items[2] = tmp9Result2;
    obj7 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
    items[3] = collapsedCategories(PremiumSubscriptionHeader, obj7);
    const obj8 = { style: tmp.desktopSubtext, variant: "text-sm/medium", children: null };
    const intl2 = tmp4(1115).intl;
    obj8.children = intl2.string(tmp4(1115).t["MTG+3O"]);
    items[4] = collapsedCategories(tmp4(4784).Text, obj8);
    obj3.children = items;
    tmp7Result = closure_1_19(React7, obj3);
  }
  return tmp7Result;
};
export const onCancelClick = function onCancelClick(subscription, analyticsLocations) {
  _require = subscription;
  importDefault = analyticsLocations;
  const result = require("PremiumAnalyticsUtils").trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  const obj = require("PremiumAnalyticsUtils");
  const tmp = _require;
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4ResultResult = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    const obj3 = {
      subscription,
      mode: tmp(13676).WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
          return handleCancelSubscription(closure_0, closure_1, arg0);
        }
    };
    tmp4ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheetDefault;
  }
  return tmp4ResultResult;
};
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };
