// Module ID: 7366
// Function ID: 59414
// Name: getHeaderBackground
// Dependencies: []
// Exports: default

// Module 7366 (getHeaderBackground)
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
function getHeaderBackground(arg0, arg1) {
  return obj5[arg0][arg1];
}
function getPremiumImage(premiumBranding, ACTIVE) {
  return obj11[premiumBranding][ACTIVE];
}
function getPremiumImageStyle(premiumBranding, ACTIVE) {
  return closure_22[premiumBranding][ACTIVE];
}
function getLogo(arg0, arg1) {
  return obj22[arg0][arg1];
}
function getLogoStyle(premiumBranding) {
  return obj28[premiumBranding];
}
function getPlanDescriptionStyle(ACTIVE) {
  return closure_25[ACTIVE];
}
function handleCancelSubscription() {
  return _handleCancelSubscription(...arguments);
}
async function _handleCancelSubscription(isPurchasedViaApple, analyticsLocations, fromStep, arg3) {
  let obj = callback(closure_2[44]);
  obj = { subscription: isPurchasedViaApple, analyticsLocations, fromStep, toStep: callback(closure_2[44]).STEP_ANALYTICS_NAMES[closure_0(undefined, closure_2[44]).CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE] };
  const result = obj.trackPremiumSubscriptionCancellationFlowStep(obj);
  if (null != isPurchasedViaApple) {
    if (isPurchasedViaApple.isPurchasedViaApple) {
      yield callback(closure_2[45]).manageSubscription();
      const obj4 = callback(closure_2[45]);
    }
  }
  if (tmp2) {
    closure_8.openURL(callback(closure_2[11]).getExternalSubscriptionMethodUrl(isPurchasedViaApple.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
    const obj3 = callback(closure_2[11]);
  }
}
function onCancelClick(subscription, analyticsLocations) {
  analyticsLocations = subscription;
  const importDefault = analyticsLocations;
  let obj = analyticsLocations(dependencyMap[44]);
  const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4Result = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    obj = {
      subscription,
      mode: analyticsLocations(dependencyMap[47]).WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
          return callback(arg0, arg1, arg0);
        }
    };
    tmp4Result = importDefault(dependencyMap[46])(obj);
    const tmp4 = importDefault(dependencyMap[46]);
  }
  return tmp4Result;
}
function handleManageSubscription(subscription, closure_3, analyticsLocations) {
  if (subscription.status === constants3.ACCOUNT_HOLD) {
    closure_8.openURL(closure_3(dependencyMap[11]).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    const obj4 = closure_3(dependencyMap[11]);
  } else {
    let obj = closure_3(dependencyMap[48]);
    obj = { navigation: closure_3 };
    obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_PREMIUM };
    obj.analyticsLocation = obj;
    obj.analyticsLocations = analyticsLocations;
    const result = obj.launchPremiumPlanSelect(obj);
  }
}
function onResubscribeClick(arg0) {
  return _onResubscribeClick(...arguments);
}
async function _onResubscribeClick(isACOM, arg1) {
  if (isACOM.isACOM) {
    let obj = {};
    const obj3 = callback(closure_2[49]);
    obj.requestIdentifier = callback(closure_2[50]).v4();
    obj.subscriptionId = isACOM.id;
    yield obj3.resubscribeGenericSubscription(obj, true);
    const obj5 = callback(closure_2[50]);
    yield callback(closure_2[51]).fetchSubscriptions();
    const obj6 = callback(closure_2[51]);
  } else if (isACOM.isPurchasedViaApple) {
    return yield callback(closure_2[45]).manageSubscription();
  } else if (isACOM.isPurchasedViaGoogle) {
    obj = callback(closure_2[11]);
    closure_8.openURL(obj.getExternalSubscriptionMethodUrl(isACOM.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
  }
}
class PremiumSubscriptionHeader {
  constructor(arg0) {
    subscription = global.subscription;
    arg1 = subscription;
    ({ renewalInvoicePreview, onClickManagePremiumGuild } = global);
    tmp = jsxs();
    obj = arg1(closure_2[52]);
    importDefault = obj.useNavigation();
    obj2 = arg1(closure_2[53]);
    items = [];
    items[0] = closure_10;
    stateFromStores = obj2.useStateFromStores(items, () => {
      const currentUser = currentUser.getCurrentUser();
      callback(closure_2[54])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    obj3 = arg1(closure_2[53]);
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj3.useStateFromStores(items1, () => {
      if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
        if (subscription.isACOM) {
          return null;
        } else {
          if (null != subscription.paymentGatewayPlanId) {
            if ("" !== subscription.paymentGatewayPlanId) {
              return product.getProduct(subscription.paymentGatewayPlanId);
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
    obj4 = importDefault(closure_2[11]);
    planIdFromInvoice = obj4.getPlanIdFromInvoice(subscription, renewalInvoicePreview);
    tmp5 = analyticsLocations(importAll.useState(false), 2);
    first = tmp5[0];
    closure_2 = tmp5[1];
    obj5 = arg1(closure_2[11]);
    premiumBranding = obj5.getPremiumBranding(subscription);
    analyticsLocations = importDefault(closure_2[55])().analyticsLocations;
    if (premiumBranding === arg1(closure_2[11]).Branding.PREMIUM_GUILD) {
      tmp12 = arg1;
      tmp13 = closure_2;
      obj7 = arg1(closure_2[11]);
      coercedPremiumGuildSubscriptionStatus = obj7.getCoercedPremiumGuildSubscriptionStatus(subscription);
      obj8 = arg1(closure_2[11]);
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
      tmp64 = importDefault;
      tmp65 = closure_2;
      obj26 = importDefault(closure_2[11]);
      statusFromInvoice = obj26.getStatusFromInvoice(subscription, renewalInvoicePreview);
      tmp66 = SubscriptionPlanInfo;
      tmp67 = SubscriptionPlanInfo[planIdFromInvoice];
      num12 = 54;
      formatRateResult = null;
      str7 = "missing subscription planInfo";
      tmp68 = importDefault(closure_2[54])(null != tmp67, "missing subscription planInfo");
      obj27 = importDefault(closure_2[11]);
      obj1 = {};
      obj1.subscription = subscription;
      obj1.planId = planIdFromInvoice;
      if (null != stateFromStores1) {
        tmp8 = arg1;
        tmp9 = closure_2;
        num = 56;
        obj6 = arg1(closure_2[56]);
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
      tmp23 = arg1;
      tmp24 = closure_2;
      num2 = 57;
      obj10 = arg1(closure_2[57]);
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
    items5[1] = jsx(arg1(closure_2[58]).LegacyText, obj7);
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
          tmp37 = arg1;
          tmp38 = closure_2;
          num3 = 59;
          obj10 = {};
          tmp39 = closure_4;
          obj10.onPress = closure_4(async () => {
            callback(true);
            yield closure_36(closure_0);
            callback(false);
          });
          str = "primary-overlay";
          obj10.variant = "primary-overlay";
          num4 = 60;
          intl = arg1(closure_2[60]).intl;
          obj10.text = intl.string(arg1(closure_2[60]).t.lTCb0c);
          str2 = "sm";
          obj10.size = "sm";
          obj10.disabled = first;
          obj10.loading = first;
          obj9.children = jsx(arg1(closure_2[59]).Button, obj10);
          tmp33 = jsx(View, obj9);
        }
      }
    }
    items6 = [, , , ];
    items6[0] = tmp33;
    if (!tmp22) {
      items6[1] = null;
      tmp52 = arg1;
      tmp53 = closure_2;
      obj22 = arg1(closure_2[11]);
      tmp54 = null;
      if (obj22.subscriptionHasPremiumGuildPlan(subscription)) {
        tmp54 = null;
        if (null != onClickManagePremiumGuild) {
          tmp55 = jsx;
          tmp56 = View;
          obj11 = {};
          obj11.style = tmp.buttonWrapper;
          tmp57 = jsx;
          tmp58 = arg1;
          tmp59 = closure_2;
          num8 = 59;
          obj12 = {};
          obj12.onPress = onClickManagePremiumGuild;
          str5 = "primary-overlay";
          obj12.variant = "primary-overlay";
          num9 = 60;
          intl4 = arg1(closure_2[60]).intl;
          obj12.text = intl4.string(arg1(closure_2[60]).t.gIVkjm);
          str6 = "sm";
          obj12.size = "sm";
          obj11.children = jsx(arg1(closure_2[59]).Button, obj12);
          tmp54 = jsx(View, obj11);
        }
      }
      items6[2] = tmp54;
      tmp60 = null;
      if (isOnPlatformMatchingExternalPaymentGateway) {
        tmp61 = jsx;
        tmp62 = arg1;
        tmp63 = closure_2;
        num10 = 61;
        obj13 = {};
        obj13.style = tmp.cancelLink;
        obj13.onPress = function onPress() {
          return callback2(subscription, analyticsLocations);
        };
        num11 = 60;
        intl5 = arg1(closure_2[60]).intl;
        obj13.children = intl5.string(arg1(closure_2[60]).t.ETE/oC);
        tmp60 = jsx(arg1(closure_2[61]).Text, obj13);
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
      tmp43 = arg1;
      tmp44 = closure_2;
      num5 = 59;
      tmp40 = jsx;
      tmp41 = View;
      tmp42 = jsx;
      obj15 = {};
      obj15.onPress = function onPress() {
        callback3(subscription, closure_1, analyticsLocations);
      };
      str3 = "primary-overlay";
      obj15.variant = "primary-overlay";
      tmp45 = SubscriptionStatusTypes;
      if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
        tmp49 = arg1;
        tmp50 = closure_2;
        num7 = 60;
        intl3 = arg1(closure_2[60]).intl;
        stringResult = intl3.string(arg1(closure_2[60]).t.SgX7Ra);
      } else {
        tmp46 = arg1;
        tmp47 = closure_2;
        num6 = 60;
        intl2 = arg1(closure_2[60]).intl;
        stringResult = intl2.string(arg1(closure_2[60]).t.gmVtgF);
      }
      obj15.text = stringResult;
      str4 = "sm";
      obj15.size = "sm";
      obj15 = tmp42(arg1(closure_2[59]).Button, obj15);
      obj14.children = obj15;
      tmp40Result = tmp40(tmp41, obj14);
    }
    return;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Image: closure_6, ImageBackground: closure_7, Linking: closure_8, View: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticsPages: closure_12, AnalyticsSections: closure_13, SubscriptionStatusTypes: closure_14, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = arg1(dependencyMap[6]));
const SubscriptionPlanInfo = arg1(dependencyMap[7]).SubscriptionPlanInfo;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[8]));
let obj = { imageTier2: { <string:1140607356>: 411, <string:1751293292>: 134 }, imageTier1: { <string:1140607356>: "png", <string:1751293292>: true }, imageTier0: { <string:1140607356>: "5dd914546a21d2f37ba762b2209e8ec8", <string:1751293292>: "img_bundle_mobile" }, imageBundle: { <string:1140607356>: "png", <string:1751293292>: true }, imagePremiumNonActive: { <string:1140607356>: "png", <string:1751293292>: true }, imagePremiumGuild: {}, imagePremiumGuildNonActive: {}, logoPremiumBundle: { <string:1140607356>: 51, <string:1751293292>: 33 }, logoPremiumTier0: { <string:1140607356>: null, <string:1751293292>: "fffb876f7b3f447f47b0591850317fff" }, logoPremiumTier1: {}, logoPremiumTier2: {}, logoPremiumGuild: {} };
obj = {};
obj = { color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE };
obj.price = obj;
const tmp4 = arg1(dependencyMap[8]);
obj.priceDark = { color: importDefault(dependencyMap[9]).unsafe_rawColors.BLACK };
let obj4 = arg1(dependencyMap[10]);
const obj2 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, wumpusImg: { marginRight: 10 }, logoContainer: { -9223372036854775808: true, filter: true } };
const obj3 = { 9223372036854775807: null, 9223372036854775807: "24a795d24a7018dbf13e204b38f24588", backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
obj2.container = obj3;
obj2.buttonContainer = {};
obj2.buttonWrapper = {};
obj2.cancelLink = { height: "center", alignSelf: 16, flexDirection: 20, justifyContent: null };
obj2.desktopSubtext = { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
let closure_18 = obj4.createStyles(obj2);
obj4 = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
const obj5 = {};
const obj6 = {};
obj6[obj4.ACTIVE] = importDefault(dependencyMap[12]);
obj6[obj4.ERROR] = importDefault(dependencyMap[13]);
obj6[obj4.RESUB] = importDefault(dependencyMap[14]);
obj5[arg1(dependencyMap[11]).Branding.BUNDLE] = obj6;
const obj7 = {};
obj7[obj4.ACTIVE] = importDefault(dependencyMap[15]);
obj7[obj4.ERROR] = importDefault(dependencyMap[13]);
obj7[obj4.RESUB] = importDefault(dependencyMap[14]);
obj5[arg1(dependencyMap[11]).Branding.TIER_0] = obj7;
const obj8 = {};
obj8[obj4.ACTIVE] = importDefault(dependencyMap[16]);
obj8[obj4.ERROR] = importDefault(dependencyMap[13]);
obj8[obj4.RESUB] = importDefault(dependencyMap[14]);
obj5[arg1(dependencyMap[11]).Branding.TIER_1] = obj8;
const obj9 = {};
obj9[obj4.ACTIVE] = importDefault(dependencyMap[17]);
obj9[obj4.ERROR] = importDefault(dependencyMap[13]);
obj9[obj4.RESUB] = importDefault(dependencyMap[14]);
obj5[arg1(dependencyMap[11]).Branding.TIER_2] = obj9;
const obj10 = {};
obj10[obj4.ACTIVE] = importDefault(dependencyMap[18]);
obj10[obj4.ERROR] = importDefault(dependencyMap[19]);
obj10[obj4.RESUB] = importDefault(dependencyMap[20]);
obj5[arg1(dependencyMap[11]).Branding.PREMIUM_GUILD] = obj10;
const obj11 = {};
const obj12 = {};
obj12[obj4.ACTIVE] = importDefault(dependencyMap[21]);
obj12[obj4.ERROR] = importDefault(dependencyMap[21]);
obj12[obj4.RESUB] = importDefault(dependencyMap[21]);
obj11[arg1(dependencyMap[11]).Branding.BUNDLE] = obj12;
const obj13 = {};
obj13[obj4.ACTIVE] = importDefault(dependencyMap[22]);
obj13[obj4.ERROR] = importDefault(dependencyMap[23]);
obj13[obj4.RESUB] = importDefault(dependencyMap[24]);
obj11[arg1(dependencyMap[11]).Branding.TIER_0] = obj13;
const obj14 = {};
obj14[obj4.ACTIVE] = importDefault(dependencyMap[25]);
obj14[obj4.ERROR] = importDefault(dependencyMap[26]);
obj14[obj4.RESUB] = importDefault(dependencyMap[27]);
obj11[arg1(dependencyMap[11]).Branding.TIER_1] = obj14;
const obj15 = {};
obj15[obj4.ACTIVE] = importDefault(dependencyMap[28]);
obj15[obj4.ERROR] = importDefault(dependencyMap[29]);
obj15[obj4.RESUB] = importDefault(dependencyMap[30]);
obj11[arg1(dependencyMap[11]).Branding.TIER_2] = obj15;
const obj16 = {};
obj16[obj4.ACTIVE] = importDefault(dependencyMap[31]);
obj16[obj4.ERROR] = importDefault(dependencyMap[32]);
obj16[obj4.RESUB] = importDefault(dependencyMap[33]);
obj11[arg1(dependencyMap[11]).Branding.PREMIUM_GUILD] = obj16;
let closure_22 = { [arg1(dependencyMap[11]).Branding.BUNDLE]: { [obj4.ACTIVE]: obj.imageBundle, [obj4.ERROR]: obj.imageBundle, [obj4.RESUB]: obj.imageBundle }, [arg1(dependencyMap[11]).Branding.TIER_0]: { [obj4.ACTIVE]: obj.imageTier0, [obj4.ERROR]: obj.imagePremiumNonActive, [obj4.RESUB]: obj.imagePremiumNonActive }, [arg1(dependencyMap[11]).Branding.TIER_1]: { [obj4.ACTIVE]: obj.imageTier1, [obj4.ERROR]: obj.imagePremiumNonActive, [obj4.RESUB]: obj.imagePremiumNonActive }, [arg1(dependencyMap[11]).Branding.TIER_2]: { [obj4.ACTIVE]: obj.imageTier2, [obj4.ERROR]: obj.imagePremiumNonActive, [obj4.RESUB]: obj.imagePremiumNonActive }, [arg1(dependencyMap[11]).Branding.PREMIUM_GUILD]: { [obj4.ACTIVE]: obj.imagePremiumGuild, [obj4.ERROR]: obj.imagePremiumGuildNonActive, [obj4.RESUB]: obj.imagePremiumGuildNonActive } };
const obj22 = {};
const obj23 = {};
obj23[obj4.ACTIVE] = importDefault(dependencyMap[34]);
obj23[obj4.ERROR] = importDefault(dependencyMap[34]);
obj23[obj4.RESUB] = importDefault(dependencyMap[35]);
obj22[arg1(dependencyMap[11]).Branding.BUNDLE] = obj23;
const obj24 = {};
obj24[obj4.ACTIVE] = importDefault(dependencyMap[36]);
obj24[obj4.ERROR] = importDefault(dependencyMap[36]);
obj24[obj4.RESUB] = importDefault(dependencyMap[37]);
obj22[arg1(dependencyMap[11]).Branding.TIER_0] = obj24;
const obj25 = {};
obj25[obj4.ACTIVE] = importDefault(dependencyMap[38]);
obj25[obj4.ERROR] = importDefault(dependencyMap[38]);
obj25[obj4.RESUB] = importDefault(dependencyMap[39]);
obj22[arg1(dependencyMap[11]).Branding.TIER_1] = obj25;
const obj26 = {};
obj26[obj4.ACTIVE] = importDefault(dependencyMap[40]);
obj26[obj4.ERROR] = importDefault(dependencyMap[40]);
obj26[obj4.RESUB] = importDefault(dependencyMap[41]);
obj22[arg1(dependencyMap[11]).Branding.TIER_2] = obj26;
const obj27 = {};
obj27[obj4.ACTIVE] = importDefault(dependencyMap[42]);
obj27[obj4.ERROR] = importDefault(dependencyMap[42]);
obj27[obj4.RESUB] = importDefault(dependencyMap[43]);
obj22[arg1(dependencyMap[11]).Branding.PREMIUM_GUILD] = obj27;
const obj28 = { [arg1(dependencyMap[11]).Branding.BUNDLE]: obj.logoPremiumBundle, [arg1(dependencyMap[11]).Branding.TIER_0]: obj.logoPremiumTier0, [arg1(dependencyMap[11]).Branding.TIER_1]: obj.logoPremiumTier1, [arg1(dependencyMap[11]).Branding.TIER_2]: obj.logoPremiumTier2, [arg1(dependencyMap[11]).Branding.PREMIUM_GUILD]: obj.logoPremiumGuild };
let closure_25 = { [obj4.ACTIVE]: obj.price, [obj4.ERROR]: obj.price, [obj4.RESUB]: obj.priceDark };
const obj1 = { color: importDefault(dependencyMap[9]).unsafe_rawColors.BLACK };
const obj17 = { [obj4.ACTIVE]: obj.imageBundle, [obj4.ERROR]: obj.imageBundle, [obj4.RESUB]: obj.imageBundle };
const obj18 = { [obj4.ACTIVE]: obj.imageTier0, [obj4.ERROR]: obj.imagePremiumNonActive, [obj4.RESUB]: obj.imagePremiumNonActive };
const obj19 = { [obj4.ACTIVE]: obj.imageTier1, [obj4.ERROR]: obj.imagePremiumNonActive, [obj4.RESUB]: obj.imagePremiumNonActive };
const obj20 = { [obj4.ACTIVE]: obj.imageTier2, [obj4.ERROR]: obj.imagePremiumNonActive, [obj4.RESUB]: obj.imagePremiumNonActive };
const obj21 = { [obj4.ACTIVE]: obj.imagePremiumGuild, [obj4.ERROR]: obj.imagePremiumGuildNonActive, [obj4.RESUB]: obj.imagePremiumGuildNonActive };
const result = arg1(dependencyMap[66]).fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  let onClickManagePremiumGuild;
  let style;
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = callback5();
  let obj = arg1(dependencyMap[62]);
  obj = { subscriptionId: subscription.id, renewal: true, analyticsLocations: importDefault(dependencyMap[55])().analyticsLocations, analyticsLocation: importDefault(dependencyMap[63]).PREMIUM_SUBSCRIPTION_DETAILS };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let tmp4Result = null;
  if (null != first) {
    obj = { style };
    const obj1 = { 0: -1841229468, 9223372036854775807: 1912603216, 0: 51, -9223372036854775808: 36, style: tmp.title };
    const intl = arg1(dependencyMap[60]).intl;
    obj1.children = intl.string(arg1(dependencyMap[60]).t.ITurwY);
    const items = [callback3(arg1(dependencyMap[61]).Text, obj1), , , , ];
    let tmp9 = null != subscription.renewalMutations;
    if (tmp9) {
      tmp9 = subscription.status !== constants3.CANCELED;
    }
    if (tmp9) {
      const obj2 = { subscription, renewalMutations: subscription.renewalMutations };
      tmp9 = callback3(importDefault(dependencyMap[64]), obj2);
    }
    items[1] = tmp9;
    let tmp15 = subscription.status === constants3.ACCOUNT_HOLD;
    if (tmp15) {
      const obj3 = { subscription };
      tmp15 = callback3(importDefault(dependencyMap[65]), obj3);
    }
    items[2] = tmp15;
    const obj4 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
    items[3] = callback3(PremiumSubscriptionHeader, obj4);
    const obj5 = { style: tmp.desktopSubtext, variant: "text-sm/medium" };
    const intl2 = arg1(dependencyMap[60]).intl;
    obj5.children = intl2.string(arg1(dependencyMap[60]).t.MTG+3O);
    items[4] = callback3(arg1(dependencyMap[61]).Text, obj5);
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
