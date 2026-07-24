// Module ID: 7378
// Function ID: 59517
// Name: getHeaderBackground
// Dependencies: [57, 5, 31, 27, 1849, 5619, 653, 1851, 33, 689, 4130, 3776, 7165, 7379, 7380, 7162, 7163, 7164, 7166, 7381, 7382, 7383, 7114, 7384, 7385, 7386, 7387, 7388, 7167, 7389, 7390, 7391, 7392, 7393, 7394, 7395, 7170, 7396, 7397, 7398, 7172, 7399, 7400, 7401, 7156, 7203, 7402, 7403, 6647, 6658, 491, 4451, 1456, 566, 44, 5462, 5616, 477, 1273, 4543, 1212, 4126, 7414, 5482, 7415, 7416, 2]
// Exports: default

// Module 7378 (getHeaderBackground)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import registerAsset from "registerAsset";
import get_ActivityIndicator from "registerAsset";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { SubscriptionPlanInfo } from "GuildFeatures";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let closure_12;
let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getHeaderBackground(arg0, arg1) {
  return obj5[arg0][arg1];
}
function getPremiumImage(premiumBranding, ACTIVE) {
  return obj11[premiumBranding][ACTIVE];
}
function getPremiumImageStyle(premiumBranding, ACTIVE) {
  return table[premiumBranding][ACTIVE];
}
function getLogo(arg0, arg1) {
  return obj22[arg0][arg1];
}
function getLogoStyle(premiumBranding) {
  return obj28[premiumBranding];
}
function getPlanDescriptionStyle(ACTIVE) {
  return table2[ACTIVE];
}
function handleCancelSubscription() {
  return _handleCancelSubscription(...arguments);
}
async function _handleCancelSubscription(arg0, arg1, arg2, arg3) {
  let obj = outer2_0(outer2_2[44]);
  obj = { subscription: arg0, analyticsLocations: arg1, fromStep: arg2, toStep: outer2_0(outer2_2[44]).STEP_ANALYTICS_NAMES[outer2_0(undefined, outer2_2[44]).CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE] };
  const result = obj.trackPremiumSubscriptionCancellationFlowStep(obj);
  if (null != arg0) {
    if (arg0.isPurchasedViaApple) {
      yield outer2_0(outer2_2[45]).manageSubscription();
      const obj4 = outer2_0(outer2_2[45]);
    }
  }
  if (tmp2) {
    outer2_8.openURL(outer2_0(outer2_2[11]).getExternalSubscriptionMethodUrl(arg0.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
    const obj3 = outer2_0(outer2_2[11]);
  }
}
function onCancelClick(subscription, analyticsLocations) {
  const _require = subscription;
  const importDefault = analyticsLocations;
  let obj = _require(7156);
  const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4Result = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    obj = {
      subscription,
      mode: _require(7403).WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
          return outer1_32(closure_0, closure_1, arg0);
        }
    };
    tmp4Result = importDefault(7402)(obj);
    const tmp4 = importDefault(7402);
  }
  return tmp4Result;
}
function handleManageSubscription(subscription, set, analyticsLocations) {
  if (subscription.status === constants3.ACCOUNT_HOLD) {
    closure_8.openURL(require(3776) /* _createForOfIteratorHelperLoose */.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    const obj4 = require(3776) /* _createForOfIteratorHelperLoose */;
  } else {
    let obj = require(6647) /* launchPremiumPlanSelect */;
    obj = { navigation: set };
    obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_PREMIUM };
    obj.analyticsLocation = obj;
    obj.analyticsLocations = analyticsLocations;
    const result = obj.launchPremiumPlanSelect(obj);
  }
}
function onResubscribeClick(arg0) {
  return _onResubscribeClick(...arguments);
}
async function _onResubscribeClick(arg0, arg1) {
  if (arg0.isACOM) {
    let obj = {};
    const obj3 = outer2_0(outer2_2[49]);
    obj.requestIdentifier = outer2_0(outer2_2[50]).v4();
    obj.subscriptionId = arg0.id;
    yield obj3.resubscribeGenericSubscription(obj, true);
    const obj5 = outer2_0(outer2_2[50]);
    yield outer2_0(outer2_2[51]).fetchSubscriptions();
    const obj6 = outer2_0(outer2_2[51]);
  } else if (arg0.isPurchasedViaApple) {
    return yield outer2_0(outer2_2[45]).manageSubscription();
  } else if (arg0.isPurchasedViaGoogle) {
    obj = outer2_0(outer2_2[11]);
    outer2_8.openURL(obj.getExternalSubscriptionMethodUrl(arg0.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
  }
}
class PremiumSubscriptionHeader {
  constructor(arg0) {
    subscription = global.subscription;
    ({ renewalInvoicePreview, onClickManagePremiumGuild } = global);
    tmp = jsxs();
    obj = require("useNavigation");
    useNavigation = obj.useNavigation();
    obj2 = require("initialize");
    items = [];
    items[0] = c10;
    stateFromStores = obj2.useStateFromStores(items, () => {
      const currentUser = outer1_10.getCurrentUser();
      callback(table[54])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    obj3 = require("initialize");
    items1 = [];
    items1[0] = c11;
    stateFromStores1 = obj3.useStateFromStores(items1, () => {
      if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
        if (subscription.isACOM) {
          return null;
        } else {
          if (null != subscription.paymentGatewayPlanId) {
            if ("" !== subscription.paymentGatewayPlanId) {
              return outer1_11.getProduct(subscription.paymentGatewayPlanId);
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
    obj4 = require("_createForOfIteratorHelperLoose");
    planIdFromInvoice = obj4.getPlanIdFromInvoice(subscription, renewalInvoicePreview);
    tmp5 = analyticsLocations(registerAsset.useState(false), 2);
    first = tmp5[0];
    c2 = tmp5[1];
    obj5 = require("_createForOfIteratorHelperLoose");
    premiumBranding = obj5.getPremiumBranding(subscription);
    analyticsLocations = require("mergeLocations")().analyticsLocations;
    if (premiumBranding === require("_createForOfIteratorHelperLoose").Branding.PREMIUM_GUILD) {
      tmp12 = subscription;
      tmp13 = c2;
      obj7 = require("_createForOfIteratorHelperLoose");
      coercedPremiumGuildSubscriptionStatus = obj7.getCoercedPremiumGuildSubscriptionStatus(subscription);
      obj8 = require("_createForOfIteratorHelperLoose");
      obj = {};
      obj.subscription = subscription;
      obj.user = stateFromStores;
      tmp15 = null;
      priceString = undefined;
      if (null != stateFromStores1) {
        priceString = stateFromStores1.priceString;
      }
      obj.price = priceString;
      obj.renewalInvoicePreview = renewalInvoicePreview;
      premiumGuildHeaderDescription = obj8.getPremiumGuildHeaderDescription(obj);
      statusFromInvoice = coercedPremiumGuildSubscriptionStatus;
    } else {
      tmp64 = useNavigation;
      tmp65 = c2;
      obj26 = require("_createForOfIteratorHelperLoose");
      statusFromInvoice = obj26.getStatusFromInvoice(subscription, renewalInvoicePreview);
      tmp66 = SubscriptionPlanInfo;
      tmp67 = SubscriptionPlanInfo[planIdFromInvoice];
      num12 = 54;
      formatRateResult = null;
      str7 = "missing subscription planInfo";
      tmp68 = require("invariant")(null != tmp67, "missing subscription planInfo");
      obj27 = require("_createForOfIteratorHelperLoose");
      obj1 = {};
      obj1.subscription = subscription;
      obj1.planId = planIdFromInvoice;
      if (null != stateFromStores1) {
        tmp8 = subscription;
        tmp9 = c2;
        num = 56;
        obj6 = require("formatSingleCurrencyPrice");
        formatRateResult = obj6.formatRate(stateFromStores1.priceString, tmp67.interval, tmp67.intervalCount);
      }
      obj1.price = formatRateResult;
      flag = true;
      obj1.includePremiumGuilds = true;
      premiumGuildHeaderDescription = obj27.getPlanDescription(obj1);
    }
    tmp18 = statusFromInvoice === SubscriptionStatusTypes.CANCELED;
    if (statusFromInvoice === SubscriptionStatusTypes.ACTIVE) {
      tmp20 = createStyles;
      ACTIVE = createStyles.ACTIVE;
    } else {
      tmp19 = createStyles;
      ACTIVE = tmp18 ? tmp19.RESUB : tmp19.ERROR;
    }
    tmp21 = tmp18;
    if (!tmp18) {
      tmp21 = !subscription.isOnPlatformMatchingExternalPaymentGateway;
    }
    tmp22 = !tmp21;
    if (!tmp21) {
      tmp23 = subscription;
      tmp24 = c2;
      num2 = 57;
      obj10 = require("set");
      tmp25 = !obj10.isAndroid();
      if (!tmp25) {
        tmp26 = null;
        tmp25 = null == subscription.renewalMutations;
      }
      tmp22 = tmp25;
    }
    isOnPlatformMatchingExternalPaymentGateway = !tmp18;
    if (!tmp18) {
      isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    }
    obj2 = { style: items2 };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = global.style;
    obj3 = {};
    tmp27 = jsx;
    tmp28 = View;
    tmp29 = jsxs;
    tmp30 = ImageBackground;
    obj3.source = getHeaderBackground(premiumBranding, ACTIVE);
    obj3.style = tmp.header;
    obj4 = { style: tmp.logoContainer };
    obj5 = {};
    obj5.source = getPremiumImage(premiumBranding, ACTIVE);
    items3 = [, ];
    items3[0] = getPremiumImageStyle(premiumBranding, ACTIVE);
    items3[1] = tmp.wumpusImg;
    obj5.style = items3;
    items4 = [, ];
    items4[0] = jsx(Image, obj5);
    obj6 = {};
    obj6.source = getLogo(premiumBranding, ACTIVE);
    obj6.style = getLogoStyle(premiumBranding);
    items4[1] = jsx(Image, obj6);
    obj4.children = items4;
    items5 = [, , ];
    items5[0] = jsxs(View, obj4);
    obj7 = {};
    obj7.style = getPlanDescriptionStyle(ACTIVE);
    obj7.children = premiumGuildHeaderDescription;
    items5[1] = jsx(require("Button").LegacyText, obj7);
    obj8 = { style: tmp.buttonContainer };
    tmp33 = null;
    tmp31 = jsxs;
    tmp32 = View;
    if (tmp18) {
      tmp33 = null;
      if (null != subscription) {
        tmp33 = null;
        if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
          tmp34 = jsx;
          tmp35 = View;
          obj9 = {};
          obj9.style = tmp.buttonWrapper;
          tmp36 = jsx;
          tmp37 = subscription;
          tmp38 = c2;
          num3 = 59;
          obj10 = {};
          tmp39 = c4;
          obj10.onPress = c4(async () => {
            outer1_2(true);
            yield outer2_36(outer1_0);
            outer1_2(false);
          });
          str = "primary-overlay";
          obj10.variant = "primary-overlay";
          num4 = 60;
          intl = require("getSystemLocale").intl;
          obj10.text = intl.string(require("getSystemLocale").t.lTCb0c);
          str2 = "sm";
          obj10.size = "sm";
          obj10.disabled = first;
          obj10.loading = first;
          obj9.children = jsx(require("Button").Button, obj10);
          tmp33 = jsx(View, obj9);
        }
      }
    }
    items6 = [, , , ];
    items6[0] = tmp33;
    if (!tmp22) {
      items6[1] = null;
      tmp52 = subscription;
      tmp53 = c2;
      obj22 = require("_createForOfIteratorHelperLoose");
      tmp54 = null;
      if (obj22.subscriptionHasPremiumGuildPlan(subscription)) {
        tmp54 = null;
        if (null != onClickManagePremiumGuild) {
          tmp55 = jsx;
          tmp56 = View;
          obj11 = {};
          obj11.style = tmp.buttonWrapper;
          tmp57 = jsx;
          tmp58 = subscription;
          tmp59 = c2;
          num8 = 59;
          obj12 = {};
          obj12.onPress = onClickManagePremiumGuild;
          str5 = "primary-overlay";
          obj12.variant = "primary-overlay";
          num9 = 60;
          intl4 = require("getSystemLocale").intl;
          obj12.text = intl4.string(require("getSystemLocale").t.gIVkjm);
          str6 = "sm";
          obj12.size = "sm";
          obj11.children = jsx(require("Button").Button, obj12);
          tmp54 = jsx(View, obj11);
        }
      }
      items6[2] = tmp54;
      tmp60 = null;
      if (isOnPlatformMatchingExternalPaymentGateway) {
        tmp61 = jsx;
        tmp62 = subscription;
        tmp63 = c2;
        num10 = 61;
        obj13 = { accessibilityRole: "link", style: null, onPress: null, variant: "text-sm/medium", color: "text-overlay-light" };
        obj13.style = tmp.cancelLink;
        obj13.onPress = function onPress() {
          return outer1_34(subscription, analyticsLocations);
        };
        num11 = 60;
        intl5 = require("getSystemLocale").intl;
        obj13.children = intl5.string(require("getSystemLocale").t["ETE/oC"]);
        tmp60 = jsx(require("Text").Text, obj13);
      }
      items6[3] = tmp60;
      obj8.children = items6;
      items5[2] = tmp31(tmp32, obj8);
      obj3.children = items5;
      obj2.children = tmp29(tmp30, obj3);
      return tmp27(tmp28, obj2);
    } else {
      obj14 = {};
      obj14.style = tmp.buttonWrapper;
      tmp43 = subscription;
      tmp44 = c2;
      num5 = 59;
      tmp40 = jsx;
      tmp41 = View;
      tmp42 = jsx;
      obj15 = {};
      obj15.onPress = function onPress() {
        outer1_35(subscription, closure_1, analyticsLocations);
      };
      str3 = "primary-overlay";
      obj15.variant = "primary-overlay";
      tmp45 = SubscriptionStatusTypes;
      if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
        tmp49 = subscription;
        tmp50 = c2;
        num7 = 60;
        intl3 = require("getSystemLocale").intl;
        stringResult = intl3.string(require("getSystemLocale").t.SgX7Ra);
      } else {
        tmp46 = subscription;
        tmp47 = c2;
        num6 = 60;
        intl2 = require("getSystemLocale").intl;
        stringResult = intl2.string(require("getSystemLocale").t.gmVtgF);
      }
      obj15.text = stringResult;
      str4 = "sm";
      obj15.size = "sm";
      obj15 = tmp42(require("Button").Button, obj15);
      obj14.children = obj15;
      tmp40Result = tmp40(tmp41, obj14);
    }
    return;
  }
}
({ Image: closure_6, ImageBackground: closure_7, Linking: closure_8, View: closure_9 } = get_ActivityIndicator);
({ AnalyticsPages: closure_12, AnalyticsSections: closure_13, SubscriptionStatusTypes: closure_14, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { imageTier2: { height: 37, width: 49 }, imageTier1: { height: 35, width: 49 }, imageTier0: { height: 35, width: 29 }, imageBundle: { height: 35, width: 49 }, imagePremiumNonActive: { height: 36, width: 51 }, imagePremiumGuild: { width: 51, height: 36 }, imagePremiumGuildNonActive: { width: 51, height: 36 }, logoPremiumBundle: { height: 33, width: 205 }, logoPremiumTier0: { height: 32, width: 59 }, logoPremiumTier1: { height: 16, width: 156 }, logoPremiumTier2: { height: 32, width: 78 }, logoPremiumGuild: { height: 17, width: 184 } };
obj = {};
obj = { fontSize: 14, marginTop: 10, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
obj.price = obj;
let obj1 = { fontSize: 14, marginTop: 10, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK };
obj.priceDark = obj1;
let obj2 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, wumpusImg: { marginRight: 10 }, logoContainer: { flexDirection: "row", alignItems: "center" } };
let obj3 = { marginTop: 8, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj2.container = obj3;
obj2.buttonContainer = { marginTop: 8, flexDirection: "row" };
obj2.buttonWrapper = { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 };
obj2.cancelLink = { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 };
obj2.desktopSubtext = { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
let closure_18 = _createForOfIteratorHelperLoose.createStyles(obj2);
_createForOfIteratorHelperLoose = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj5 = {};
let obj6 = {};
obj6[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj6[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj6[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj5[require("_createForOfIteratorHelperLoose").Branding.BUNDLE] = obj6;
let obj7 = {};
obj7[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj7[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj7[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj5[require("_createForOfIteratorHelperLoose").Branding.TIER_0] = obj7;
let obj8 = {};
obj8[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj8[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj8[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj5[require("_createForOfIteratorHelperLoose").Branding.TIER_1] = obj8;
let obj9 = {};
obj9[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj9[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj9[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj5[require("_createForOfIteratorHelperLoose").Branding.TIER_2] = obj9;
let obj10 = {};
obj10[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj10[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj10[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj5[require("_createForOfIteratorHelperLoose").Branding.PREMIUM_GUILD] = obj10;
let obj11 = {};
let obj12 = {};
obj12[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj12[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj12[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj11[require("_createForOfIteratorHelperLoose").Branding.BUNDLE] = obj12;
let obj13 = {};
obj13[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj13[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj13[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj11[require("_createForOfIteratorHelperLoose").Branding.TIER_0] = obj13;
let obj14 = {};
obj14[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj14[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj14[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj11[require("_createForOfIteratorHelperLoose").Branding.TIER_1] = obj14;
const obj15 = {};
obj15[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj15[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj15[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj11[require("_createForOfIteratorHelperLoose").Branding.TIER_2] = obj15;
const obj16 = {};
obj16[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj16[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj16[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj11[require("_createForOfIteratorHelperLoose").Branding.PREMIUM_GUILD] = obj16;
let closure_22 = { [arg1(3776).Branding.BUNDLE]: { [_createForOfIteratorHelperLoose.ACTIVE]: obj.imageBundle, [_createForOfIteratorHelperLoose.ERROR]: obj.imageBundle, [_createForOfIteratorHelperLoose.RESUB]: obj.imageBundle }, [arg1(3776).Branding.TIER_0]: { [_createForOfIteratorHelperLoose.ACTIVE]: obj.imageTier0, [_createForOfIteratorHelperLoose.ERROR]: obj.imagePremiumNonActive, [_createForOfIteratorHelperLoose.RESUB]: obj.imagePremiumNonActive }, [arg1(3776).Branding.TIER_1]: { [_createForOfIteratorHelperLoose.ACTIVE]: obj.imageTier1, [_createForOfIteratorHelperLoose.ERROR]: obj.imagePremiumNonActive, [_createForOfIteratorHelperLoose.RESUB]: obj.imagePremiumNonActive }, [arg1(3776).Branding.TIER_2]: { [_createForOfIteratorHelperLoose.ACTIVE]: obj.imageTier2, [_createForOfIteratorHelperLoose.ERROR]: obj.imagePremiumNonActive, [_createForOfIteratorHelperLoose.RESUB]: obj.imagePremiumNonActive }, [arg1(3776).Branding.PREMIUM_GUILD]: { [_createForOfIteratorHelperLoose.ACTIVE]: obj.imagePremiumGuild, [_createForOfIteratorHelperLoose.ERROR]: obj.imagePremiumGuildNonActive, [_createForOfIteratorHelperLoose.RESUB]: obj.imagePremiumGuildNonActive } };
const obj22 = {};
const obj23 = {};
obj23[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj23[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj23[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj22[require("_createForOfIteratorHelperLoose").Branding.BUNDLE] = obj23;
const obj24 = {};
obj24[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj24[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj24[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj22[require("_createForOfIteratorHelperLoose").Branding.TIER_0] = obj24;
const obj25 = {};
obj25[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj25[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj25[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj22[require("_createForOfIteratorHelperLoose").Branding.TIER_1] = obj25;
let obj26 = {};
obj26[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj26[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj26[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj22[require("_createForOfIteratorHelperLoose").Branding.TIER_2] = obj26;
let obj27 = {};
obj27[_createForOfIteratorHelperLoose.ACTIVE] = require("registerAsset");
obj27[_createForOfIteratorHelperLoose.ERROR] = require("registerAsset");
obj27[_createForOfIteratorHelperLoose.RESUB] = require("registerAsset");
obj22[require("_createForOfIteratorHelperLoose").Branding.PREMIUM_GUILD] = obj27;
const obj28 = { [arg1(3776).Branding.BUNDLE]: obj.logoPremiumBundle, [arg1(3776).Branding.TIER_0]: obj.logoPremiumTier0, [arg1(3776).Branding.TIER_1]: obj.logoPremiumTier1, [arg1(3776).Branding.TIER_2]: obj.logoPremiumTier2, [arg1(3776).Branding.PREMIUM_GUILD]: obj.logoPremiumGuild };
let closure_25 = { [_createForOfIteratorHelperLoose.ACTIVE]: obj.price, [_createForOfIteratorHelperLoose.ERROR]: obj.price, [_createForOfIteratorHelperLoose.RESUB]: obj.priceDark };
let result = require("result").fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  let onClickManagePremiumGuild;
  let style;
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = callback5();
  let obj = require(7414) /* createSubscriptionInvoicePreview */;
  obj = { subscriptionId: subscription.id, renewal: true, analyticsLocations: importDefault(5462)().analyticsLocations, analyticsLocation: importDefault(5482).PREMIUM_SUBSCRIPTION_DETAILS };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let tmp4Result = null;
  if (null != first) {
    obj = { style };
    const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t.ITurwY);
    const items = [callback3(require(4126) /* Text */.Text, obj1), , , , ];
    let tmp9 = null != subscription.renewalMutations;
    if (tmp9) {
      tmp9 = subscription.status !== constants3.CANCELED;
    }
    if (tmp9) {
      const obj2 = { subscription, renewalMutations: subscription.renewalMutations };
      tmp9 = callback3(importDefault(7415), obj2);
    }
    items[1] = tmp9;
    let tmp15 = subscription.status === constants3.ACCOUNT_HOLD;
    if (tmp15) {
      const obj3 = { subscription };
      tmp15 = callback3(importDefault(7416), obj3);
    }
    items[2] = tmp15;
    const obj4 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
    items[3] = callback3(PremiumSubscriptionHeader, obj4);
    const obj5 = { style: tmp.desktopSubtext, variant: "text-sm/medium" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj5.children = intl2.string(require(1212) /* getSystemLocale */.t["MTG+3O"]);
    items[4] = callback3(require(4126) /* Text */.Text, obj5);
    obj.children = items;
    tmp4Result = closure_17(closure_9, obj);
    const tmp4 = closure_17;
    const tmp5 = closure_9;
  }
  return tmp4Result;
};
export { onCancelClick };
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };
