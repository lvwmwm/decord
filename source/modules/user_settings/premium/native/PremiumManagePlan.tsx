// Module ID: 12427
// Function ID: 96488
// Name: ManagePlanHeader
// Dependencies: [5, 57, 31, 27, 3777, 1849, 3778, 3781, 3782, 6637, 6651, 5621, 653, 5126, 4113, 1851, 33, 3, 4130, 689, 1456, 4660, 5091, 4126, 1212, 5127, 4973, 1324, 5464, 7412, 5484, 566, 3842, 3976, 668, 4451, 5450, 7156, 6642, 675, 3776, 44, 5618, 12428, 12429, 7387, 7397, 7172, 4543, 7376, 7417, 7416, 4648, 8000, 7422, 5459, 1920, 5167, 4554, 1273, 7738, 1557, 12384, 6636, 4559, 5638, 7427, 12386, 7455, 1390, 4532, 7375, 5793, 7418, 12406, 2]
// Exports: default

// Module 12427 (ManagePlanHeader)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getCardBackgroundToken from "getCardBackgroundToken";
import initialize from "initialize";
import get_ActivityIndicator from "useIsMobileVisualRefreshExperimentEnabled";
import { isNoneSubscription } from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import ME from "ME";
import { getTableDividerWidth } from "TABLE_ROW_HEIGHT";
import { CustomCheckoutFlow } from "CustomCheckoutFlow";
import GuildFeatures from "GuildFeatures";
import jsxProd from "AccessibilityAnnouncer";
import importDefaultResult from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function ManagePlanHeader() {
  const tmp = callback5();
  let obj = _require(1456);
  _require = obj.useNavigation();
  obj = { style: tmp.headerContainer };
  obj = {
    style: tmp.backButtonWrapper,
    onPress() {
      return arr.pop();
    },
    children: callback3(_require(5091).ArrowLargeLeftIcon, { size: "md" })
  };
  const items = [callback3(_require(4660).PressableOpacity, obj), , ];
  const obj1 = { variant: "redesign/heading-18/bold", accessibilityRole: "header" };
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t["1bX7Tx"]);
  items[1] = callback3(_require(4126).Text, obj1);
  items[2] = callback3(closure_8, { style: tmp.backButtonWrapper });
  obj.children = items;
  return callback4(closure_8, obj);
}
function SubscriptionAndBillingInfo(subscription) {
  let c8;
  let fractionalPremiumInfo;
  let isPremiumGroup;
  let premiumGroupRole;
  let tmp17;
  subscription = subscription.subscription;
  ({ fractionalPremiumInfo, isPremiumGroup, premiumGroupRole } = subscription);
  let callback;
  let first2;
  let React;
  let stateFromStores3;
  let c7;
  c8 = undefined;
  let tmp2 = callback6(analyticsLocations(stateFromStores2[27])("PremiumManagePlan"));
  analyticsLocations = analyticsLocations(stateFromStores2[28])().analyticsLocations;
  let obj = subscription(stateFromStores2[29]);
  obj = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations, analyticsLocation: analyticsLocations(stateFromStores2[30]).PREMIUM_SUBSCRIPTION_DETAILS };
  const first = first2(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let obj2 = subscription(stateFromStores2[29]);
  obj = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  const first1 = first2(obj2.useGetSubscriptionInvoice(obj), 1)[0];
  let obj4 = subscription(stateFromStores2[31]);
  let items = [closure_18];
  const stateFromStores = obj4.useStateFromStores(items, () => {
    if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
      if (null != subscription.paymentGatewayPlanId) {
        if ("" !== subscription.paymentGatewayPlanId) {
          return outer1_18.getProduct(subscription.paymentGatewayPlanId);
        }
      }
      const _Error = Error;
      const error = new Error("Subscription missing plan ID");
      throw error;
    } else {
      return null;
    }
  });
  let obj5 = subscription(stateFromStores2[31]);
  const items1 = [closure_15];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => outer1_15.getPremiumTypeSubscription());
  let obj6 = subscription(stateFromStores2[31]);
  const items2 = [closure_13];
  stateFromStores2 = obj6.useStateFromStores(items2, () => outer1_13.isSubscriptionFetching);
  let tmp8 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  let obj7 = subscription(stateFromStores2[20]);
  callback = obj7.useNavigation();
  let obj8 = subscription(stateFromStores2[32]);
  let obj9 = subscription(stateFromStores2[33]);
  const isThemeLightResult = obj9.isThemeLight(obj8.useThemeContext().theme);
  const tmp10 = first2(React.useState(null), 2);
  first2 = tmp10[0];
  React = tmp10[1];
  let obj10 = subscription(stateFromStores2[31]);
  const items3 = [closure_17];
  stateFromStores3 = obj10.useStateFromStores(items3, () => outer1_17.getState());
  const items4 = [first2, stateFromStores2, stateFromStores3];
  const effect = React.useEffect(() => {
    let tmp = "opening_mobile_web" === first2;
    if (tmp) {
      tmp = stateFromStores3 !== subscription(stateFromStores2[34]).AppStates.ACTIVE;
    }
    if (tmp) {
      validElement("in_mobile_web");
    }
    let tmp7 = "in_mobile_web" === first2;
    if (tmp7) {
      tmp7 = stateFromStores3 === subscription(stateFromStores2[34]).AppStates.ACTIVE;
    }
    if (tmp7) {
      const subscriptions = subscription(stateFromStores2[35]).fetchSubscriptions();
      validElement("start_fetching_update");
      const obj = subscription(stateFromStores2[35]);
    }
    if (tmp16) {
      validElement("fetching_update");
    }
    if (!tmp19) {
      validElement(null);
    }
  }, items4);
  const tmp14 = analyticsLocations(stateFromStores2[36])(() => subscription(stateFromStores2[37]).getNewAnalyticsLoadId());
  c7 = tmp14;
  const items5 = [subscription, first2, analyticsLocations, tmp14];
  const memo = React.useMemo(() => {
    if ("start_fetching_update" !== first2) {
      if ("fetching_update" !== first2) {
        let obj = {
          returnCtaAsComponent: true,
          loadId: c7,
          shouldAllowExternalManagement: true,
          onSuccessCallback(result_count) {
                outer2_31.log("Successfully opened mobile web Nitro Management page");
                let obj = analyticsLocations(stateFromStores2[39]);
                obj = { load_id: outer1_7 };
                const items = [...outer1_1, analyticsLocations(stateFromStores2[30]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA];
                obj.location_stack = items;
                obj.custom_checkout_flow = outer2_24.MOBILE_WEB_REDIRECT_CHECKOUT;
                obj.track(outer2_19.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE, obj);
                outer1_5("opening_mobile_web");
              }
        };
        const externalManagementMessage = subscription(stateFromStores2[38]).getExternalManagementMessage(subscription, obj);
        let tmp6 = null;
        if (null != externalManagementMessage) {
          let tmp2 = externalManagementMessage;
          if (!validElement.isValidElement(externalManagementMessage)) {
            obj = { variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
            tmp2 = outer1_29(subscription(stateFromStores2[23]).Text, obj);
          }
          tmp6 = tmp2;
        }
        return tmp6;
      }
    }
    return outer1_29(outer1_10, { size: "small" });
  }, items5);
  [tmp17, c8] = first2(React.useState(false), 2);
  if (null == first) {
    return null;
  } else {
    let planIdFromInvoice = analyticsLocations;
    planIdFromInvoice = stateFromStores2;
    planIdFromInvoice = analyticsLocations(stateFromStores2[40]).getPlanIdFromInvoice(subscription, first);
    const obj58 = analyticsLocations(stateFromStores2[40]);
    planIdFromInvoice = analyticsLocations(stateFromStores2[40]).getStatusFromInvoice(subscription, first);
    planIdFromInvoice = table;
    planIdFromInvoice = table[planIdFromInvoice];
    planIdFromInvoice = analyticsLocations(stateFromStores2[41])(null != planIdFromInvoice, "missing subscription planInfo");
    const obj59 = analyticsLocations(stateFromStores2[40]);
    const obj1 = { subscription, planId: planIdFromInvoice };
    let formatRateResult = null;
    if (null != stateFromStores) {
      let obj11 = subscription(stateFromStores2[42]);
      formatRateResult = obj11.formatRate(stateFromStores.priceString, planIdFromInvoice.interval, planIdFromInvoice.intervalCount);
    }
    obj1.price = formatRateResult;
    obj1.includePremiumGuilds = true;
    const planDescription = analyticsLocations(stateFromStores2[40]).getPlanDescription(obj1);
    if (planIdFromInvoice !== constants2.CANCELED) {
      planIdFromInvoice = constants2;
      if (planIdFromInvoice !== constants2.PAUSE_PENDING) {
        planIdFromInvoice = constants2;
        if (planIdFromInvoice !== constants2.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              let obj26 = subscription(stateFromStores2[40]);
              result = obj26.extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
            }
            obj2 = { style: tmp2.container };
            const obj3 = { style: tmp2.mutationWarningContainer };
            obj4 = { size: "md" };
            const items6 = [callback3(subscription(stateFromStores2[52]).AnnouncementsWarningIcon, obj4), ];
            obj5 = { style: tmp2.mutationText, variant: "heading-sm/medium", color: "text-default" };
            const intl6 = subscription(stateFromStores2[24]).intl;
            obj6 = {};
            if (!subscription.hasExternalPlanChange) {
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                let obj32 = analyticsLocations(stateFromStores2[40]);
                let displayName = obj32.getDisplayName(subscription.renewalMutations.planId);
              }
              obj6.planName = displayName;
              obj6.date = result;
              obj5.children = intl6.format(tmp76, obj6);
              items6[1] = tmp75(subscription(stateFromStores2[23]).Text, obj5);
              obj3.children = items6;
              const items7 = [tmp70(tmp71, obj3), , ];
              obj7 = { premiumType: closure_27.TIER_2, hideButton: true, isPremiumGroup, premiumGroupRole };
              items7[1] = callback3(analyticsLocations(stateFromStores2[53]), obj7);
              obj8 = { style: tmp2.extraInfoContainer };
              obj9 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header" };
              const intl7 = subscription(stateFromStores2[24]).intl;
              obj9.children = intl7.string(subscription(stateFromStores2[24]).t.YCrcPL);
              const items8 = [callback3(subscription(stateFromStores2[23]).Text, obj9), ];
              obj10 = { style: tmp2.extraInfoTextContainer };
              obj11 = { variant: "text-sm/medium", color: "text-default" };
              const intl8 = subscription(stateFromStores2[24]).intl;
              obj11.children = intl8.string(subscription(stateFromStores2[24]).t["MTG+3O"]);
              const items9 = [callback3(subscription(stateFromStores2[23]).Text, obj11), , ];
              const obj12 = { variant: "text-sm/medium", color: "text-default" };
              let obj40 = subscription(stateFromStores2[50]);
              obj12.children = obj40.getBillingInformationStringNative(subscription, first, first1);
              items9[1] = callback3(subscription(stateFromStores2[23]).Text, obj12);
              items9[2] = null != memo && memo;
              obj10.children = items9;
              items8[1] = callback4(c8, obj10);
              obj8.children = items8;
              items7[2] = callback4(c8, obj8);
              obj2.children = items7;
              return tmp68(tmp69, obj2);
            }
            let obj33 = subscription(stateFromStores2[40]);
            displayName = obj33.getExternalPlanDisplayName(subscription.renewalMutations);
            tmp68 = callback4;
            tmp69 = c8;
            tmp70 = callback4;
            tmp71 = c8;
            tmp75 = callback3;
          } else {
            const obj13 = { style: tmp2.container };
            const obj14 = { style: tmp2.pillAndCardContainer };
            planIdFromInvoice = callback4;
            planIdFromInvoice = c8;
            planIdFromInvoice = callback4;
            planIdFromInvoice = c8;
            if (tmp8) {
              const obj15 = { style: tmp2.pillPosition, children: callback3(subscription(stateFromStores2[54]).PremiumReferralTrialPill, {}) };
              tmp8 = callback3(c8, obj15);
            }
            const items10 = [tmp8, ];
            const obj16 = { premiumType: closure_27.TIER_2, forFractionalPremium: fractionalPremiumInfo.fractionalState !== constants3.NONE, hideButton: true, isPremiumGroup, premiumGroupRole };
            items10[1] = callback3(analyticsLocations(stateFromStores2[53]), obj16);
            obj14.children = items10;
            const items11 = [planIdFromInvoice(planIdFromInvoice, obj14), ];
            const obj17 = { style: tmp2.extraInfoContainer };
            const obj18 = { variant: "eyebrow", color: "text-default" };
            const intl = subscription(stateFromStores2[24]).intl;
            obj18.children = intl.string(subscription(stateFromStores2[24]).t.YCrcPL);
            const items12 = [callback3(subscription(stateFromStores2[23]).Text, obj18), , , ];
            const obj19 = { style: tmp2.extraInfoTextContainer };
            const obj20 = { variant: "text-sm/medium", color: "text-default" };
            if (null != memo) {
              const intl3 = subscription(stateFromStores2[24]).intl;
              let stringResult = intl3.string(subscription(stateFromStores2[24]).t["MTG+3O"]);
            } else {
              const intl2 = subscription(stateFromStores2[24]).intl;
              const obj21 = {
                onSwitchPlans() {
                              return subscription(stateFromStores2[49]).handleManageSubscription(subscription, _isNativeReflectConstruct, analyticsLocations);
                            },
                onCancel() {
                              return subscription(stateFromStores2[49]).onCancelClick(subscription, analyticsLocations);
                            }
              };
              stringResult = intl2.format(subscription(stateFromStores2[24]).t.fvk30i, obj21);
            }
            obj20.children = stringResult;
            const items13 = [callback3(subscription(stateFromStores2[55]).TextWithIOSLinkWorkaround, obj20), , ];
            const obj22 = { subscription };
            items13[1] = callback3(subscription(stateFromStores2[51]).GoogleManagementLink, obj22);
            items13[2] = null != memo && memo;
            obj19.children = items13;
            items12[1] = callback4(c8, obj19);
            const obj23 = { variant: "eyebrow", color: "text-default" };
            const intl4 = subscription(stateFromStores2[24]).intl;
            obj23.children = intl4.string(subscription(stateFromStores2[24]).t.Sb6wI1);
            items12[2] = callback3(subscription(stateFromStores2[23]).Text, obj23);
            const obj24 = {};
            const items14 = [tmp2.extraInfoTextContainer, ];
            let obj25 = { gap: 4 };
            items14[1] = obj25;
            obj24.style = items14;
            obj26 = { variant: "text-md/semibold", color: "text-default" };
            const intl5 = subscription(stateFromStores2[24]).intl;
            obj26.children = intl5.string(subscription(stateFromStores2[24]).t.KXQjfc);
            const items15 = [callback3(subscription(stateFromStores2[23]).Text, obj26), ];
            const obj27 = { variant: "text-sm/medium", color: "text-default" };
            obj25 = subscription(stateFromStores2[50]);
            obj27.children = obj25.getBillingInformationStringNative(subscription, first, first1, false, fractionalPremiumInfo);
            items15[1] = callback3(subscription(stateFromStores2[23]).Text, obj27);
            obj24.children = items15;
            items12[3] = callback4(c8, obj24);
            obj17.children = items12;
            items11[1] = callback4(c8, obj17);
            obj13.children = items11;
            return planIdFromInvoice(planIdFromInvoice, obj13);
          }
        }
      }
    }
    const obj28 = { style: tmp2.container };
    const obj29 = { style: tmp2.errorHeader };
    const obj30 = {};
    planIdFromInvoice = stateFromStores2;
    planIdFromInvoice = c7;
    planIdFromInvoice = analyticsLocations;
    if (isThemeLightResult) {
      planIdFromInvoice = planIdFromInvoice[43];
    } else {
      planIdFromInvoice = planIdFromInvoice[44];
    }
    obj30.source = planIdFromInvoice(planIdFromInvoice);
    obj30.style = tmp2.headerBackground;
    const obj31 = { style: tmp2.logoContainer };
    planIdFromInvoice = callback3;
    planIdFromInvoice = stateFromStores3;
    obj32 = {};
    planIdFromInvoice = stateFromStores2;
    planIdFromInvoice = callback4;
    planIdFromInvoice = c8;
    planIdFromInvoice = analyticsLocations;
    obj32.source = analyticsLocations(stateFromStores2[45]);
    obj32.style = tmp2.wumpusImg;
    const items16 = [callback3(stateFromStores3, obj32), ];
    obj33 = {};
    planIdFromInvoice = stateFromStores2;
    planIdFromInvoice = callback3;
    planIdFromInvoice = stateFromStores3;
    if (isThemeLightResult) {
      planIdFromInvoice = planIdFromInvoice[46];
    } else {
      planIdFromInvoice = planIdFromInvoice[47];
    }
    obj33.source = planIdFromInvoice(planIdFromInvoice);
    obj33.style = tmp2.logoStyle;
    items16[1] = planIdFromInvoice(planIdFromInvoice, obj33);
    obj31.children = items16;
    const items17 = [planIdFromInvoice(planIdFromInvoice, obj31), ];
    planIdFromInvoice = callback3;
    planIdFromInvoice = subscription;
    planIdFromInvoice = stateFromStores2;
    const obj34 = { variant: "heading-sm/medium", color: "text-default", children: planDescription };
    items17[1] = callback3(subscription(stateFromStores2[23]).Text, obj34);
    obj30.children = items17;
    const items18 = [callback4(planIdFromInvoice, obj30), ];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      planIdFromInvoice = callback3;
      planIdFromInvoice = c8;
      const obj35 = { style: tmp2.errorHeaderPrimaryButton };
      planIdFromInvoice = callback3;
      planIdFromInvoice = subscription;
      planIdFromInvoice = stateFromStores2;
      const obj36 = { size: "sm", variant: "secondary" };
      const intl9 = subscription(stateFromStores2[24]).intl;
      obj36.text = intl9.string(subscription(stateFromStores2[24]).t.lTCb0c);
      planIdFromInvoice = callback;
      // CreateGeneratorClosureLongIndex (0x67)
      obj36.onPress = callback(planIdFromInvoice);
      obj36.loading = tmp17;
      obj36.disabled = tmp17;
      obj35.children = callback3(subscription(stateFromStores2[48]).Button, obj36);
      isOnPlatformMatchingExternalPaymentGateway = callback3(c8, obj35);
    }
    items18[1] = isOnPlatformMatchingExternalPaymentGateway;
    obj29.children = items18;
    const items19 = [callback4(c8, obj29), ];
    const obj37 = { style: tmp2.extraInfoContainer };
    planIdFromInvoice = callback3;
    planIdFromInvoice = subscription;
    planIdFromInvoice = stateFromStores2;
    planIdFromInvoice = callback4;
    planIdFromInvoice = c8;
    const obj38 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header" };
    const intl10 = subscription(stateFromStores2[24]).intl;
    obj38.children = intl10.string(subscription(stateFromStores2[24]).t.YCrcPL);
    const items20 = [callback3(subscription(stateFromStores2[23]).Text, obj38), ];
    const obj39 = { style: tmp2.extraInfoTextContainer };
    planIdFromInvoice = callback3;
    planIdFromInvoice = callback4;
    planIdFromInvoice = c8;
    obj40 = { variant: "text-sm/medium", color: "text-default" };
    const intl11 = subscription(stateFromStores2[24]).intl;
    obj40.children = intl11.string(subscription(stateFromStores2[24]).t["MTG+3O"]);
    const items21 = [callback3(subscription(stateFromStores2[23]).Text, obj40), , , ];
    planIdFromInvoice = callback3;
    const obj41 = { variant: "text-sm/medium", color: "text-default" };
    const obj60 = analyticsLocations(stateFromStores2[40]);
    const tmp95 = callback4;
    const tmp96 = c8;
    const tmp97 = callback4;
    const tmp98 = c8;
    const tmp99 = callback4;
    obj41.children = subscription(stateFromStores2[50]).getBillingInformationStringNative(subscription, first, first1);
    items21[1] = callback3(subscription(stateFromStores2[23]).Text, obj41);
    planIdFromInvoice = callback3;
    const obj42 = { subscription };
    items21[2] = callback3(subscription(stateFromStores2[51]).GoogleManagementLink, obj42);
    items21[3] = null != memo && memo;
    obj39.children = items21;
    items20[1] = planIdFromInvoice(planIdFromInvoice, obj39);
    obj37.children = items20;
    items19[1] = planIdFromInvoice(planIdFromInvoice, obj37);
    obj28.children = items19;
    return tmp95(tmp96, obj28);
  }
  const tmp16 = first2(React.useState(false), 2);
}
function FractionalPremiumCredits(durationText) {
  let activationDate;
  let fractionalPremiumInfo;
  let hasUnactivatedUnits;
  let showPremiumFeaturesCard;
  let unactivatedHoursString;
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } = durationText);
  const tmp = callback6(importDefault(1324)("FractionalPremiumCredits"));
  let obj = { style: tmp.container };
  if (showPremiumFeaturesCard) {
    obj = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
    showPremiumFeaturesCard = callback3(importDefault(8000), obj);
  }
  const items = [showPremiumFeaturesCard, ];
  obj = { style: tmp.extraInfoContainer };
  const obj1 = { variant: "eyebrow", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.Obre8v);
  const items1 = [callback3(require(4126) /* Text */.Text, obj1), , ];
  const obj2 = { variant: "text-md/semibold", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const obj3 = {};
  let obj6 = importDefault(1920);
  obj3.helpCenterLink = obj6.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.AYGoBn, obj3);
  items1[1] = callback3(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj2);
  const obj4 = {};
  const obj5 = { style: tmp.fpRowStart, start: true, end: false, variant: "primary" };
  obj6 = { style: tmp.fpRowIcon };
  const obj7 = {};
  const obj8 = { padding: 6, borderRadius: importDefault(689).radii.sm };
  obj7.style = obj8;
  obj7.start = { x: 0, y: 0 };
  obj7.end = { x: 0, y: 1 };
  const items2 = [importDefault(689).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(689).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj7.colors = items2;
  const obj9 = {};
  const obj10 = { color: importDefault(689).unsafe_rawColors.WHITE, source: importDefault(7738), size: require(1273) /* Button */.IconSizes.LARGE };
  obj9.children = callback3(require(1273) /* Button */.Icon, obj10);
  obj7.children = callback3(closure_8, obj9);
  obj6.children = callback3(importDefault(4554), obj7);
  const items3 = [callback3(closure_8, obj6), ];
  const obj11 = { style: tmp.fpRowContent };
  const obj12 = { variant: "text-sm/semibold", style: tmp.fpUnitsTitle };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj12.children = intl3.string(require(1212) /* getSystemLocale */.t.DFMPWS);
  const items4 = [callback3(require(4126) /* Text */.Text, obj12), ];
  if (hasUnactivatedUnits) {
    if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
      const obj13 = { variant: "text-sm/medium", children: unactivatedHoursString };
      let tmp16 = callback3(require(4126) /* Text */.Text, obj13);
    }
    items4[1] = tmp16;
    obj11.children = items4;
    items3[1] = closure_30(closure_8, obj11);
    obj5.children = items3;
    const items5 = [tmp10(require(5167) /* getCardBackgroundToken */.Card, obj5), , ];
    const obj14 = { style: tmp.dividerContainer };
    const obj15 = { style: tmp.divider };
    obj14.children = callback3(closure_8, obj15);
    items5[1] = callback3(closure_8, obj14);
    const obj16 = { start: false, end: true, style: tmp.fpRowEnd, variant: "secondary" };
    const obj17 = { style: tmp.fpRowContent };
    if (hasUnactivatedUnits) {
      if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
        const obj18 = {};
        const obj19 = { variant: "text-md/semibold" };
        const intl6 = require(1212) /* getSystemLocale */.intl;
        obj19.children = intl6.string(require(1212) /* getSystemLocale */.t["hT6i/0"]);
        const items6 = [callback3(require(4126) /* Text */.Text, obj19), ];
        let tmp40 = undefined !== activationDate;
        if (tmp40) {
          const obj20 = { variant: "text-xs/medium", color: "text-subtle" };
          const intl7 = require(1212) /* getSystemLocale */.intl;
          const obj21 = { activateDate: activationDate };
          obj20.children = intl7.format(require(1212) /* getSystemLocale */.t["0Vwb/l"], obj21);
          tmp40 = callback3(require(4126) /* Text */.Text, obj20);
        }
        items6[1] = tmp40;
        obj18.children = items6;
        let tmp35Result = closure_30(closure_8, obj18);
        const tmp35 = closure_30;
        const tmp36 = closure_8;
      }
      const items7 = [tmp35Result, ];
      if (hasUnactivatedUnits) {
        if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
          const obj22 = { style: tmp.fpUnactivatedHoursPill };
          const obj23 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: unactivatedHoursString };
          obj22.children = callback3(require(4126) /* Text */.Text, obj23);
          let tmp50 = callback3(closure_8, obj22);
        }
        items7[1] = tmp50;
        obj17.children = items7;
        obj16.children = tmp28(tmp29, obj17);
        items5[2] = tmp24(tmp27, obj16);
        obj4.children = items5;
        items1[2] = tmp10(closure_8, obj4);
        obj.children = items1;
        items[1] = closure_30(closure_8, obj);
        obj.children = items;
        return closure_30(closure_8, obj);
      }
      const obj24 = { style: tmp.fpTimeRemainingPill };
      const obj25 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: durationText.durationText };
      obj24.children = callback3(require(4126) /* Text */.Text, obj25);
      tmp50 = callback3(closure_8, obj24);
    }
    const obj26 = { variant: "text-md/semibold", style: tmp.fpTimeRemaining };
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj26.children = intl5.string(require(1212) /* getSystemLocale */.t["3G0CTC"]);
    tmp35Result = callback3(require(4126) /* Text */.Text, obj26);
    tmp24 = callback3;
  }
  const obj27 = { variant: "text-sm/medium", style: tmp.fpUnitsStatusText };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj27.children = intl4.string(require(1212) /* getSystemLocale */.t["B66Z+f"]);
  tmp16 = callback3(require(4126) /* Text */.Text, obj27);
}
({ Image: closure_6, ImageBackground: closure_7, View: closure_8, ScrollView: closure_9, ActivityIndicator: closure_10 } = get_ActivityIndicator);
({ AnalyticEvents: closure_19, HelpdeskArticles: closure_20, SubscriptionStatusTypes: closure_21, UserSettingsSections: closure_22 } = ME);
({ FractionalPremiumStates: closure_25, PREMIUM_SUBSCRIPTION_APPLICATION: closure_26, PremiumTypes: closure_27, SubscriptionPlanInfo: closure_28 } = GuildFeatures);
({ jsx: closure_29, jsxs: closure_30 } = jsxProd);
importDefaultResult = new importDefaultResult("PremiumManagePlan");
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, height: "100%" };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { display: "flex", paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.contentContainer = { marginTop: 24, display: "flex", gap: 12 };
_createForOfIteratorHelperLoose.topBlur = { position: "absolute", zIndex: 5, top: 0, left: 0, right: 0 };
_createForOfIteratorHelperLoose.accountCredit = { paddingHorizontal: 16 };
let obj1 = { display: "flex", paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.accountCreditList = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.featuresTable = { paddingTop: 16 };
_createForOfIteratorHelperLoose.subscriptionHeader = { marginTop: 20, width: "100%" };
_createForOfIteratorHelperLoose.billingInfo = { marginTop: 20, width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between" } };
let obj4 = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", justifyContent: "center" };
obj3.backButtonWrapper = obj4;
let closure_33 = _createForOfIteratorHelperLoose.createStyles(obj3);
let closure_34 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  const tmp = getTableDividerWidth(arg0);
  let obj = { container: { display: "flex", flexDirection: "column", gap: 12 } };
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.lg, overflow: "hidden" };
  obj.errorHeader = obj;
  obj.headerBackground = { padding: 16 };
  obj.logoContainer = { flexDirection: "row", alignItems: "center", marginBottom: 12 };
  obj.wumpusImg = { marginRight: 10, height: 36, width: 51 };
  obj.logoStyle = { height: 32, width: 78 };
  obj.errorHeaderPrimaryButton = { marginBottom: 16, marginHorizontal: 16 };
  obj.extraInfoContainer = { paddingTop: 16, paddingHorizontal: 16, display: "flex", gap: 8 };
  obj = { padding: 16, borderRadius: importDefault(689).radii.sm, backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 };
  obj.extraInfoTextContainer = obj;
  const obj1 = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH };
  obj.mutationWarningContainer = obj1;
  obj.mutationText = { flex: 1 };
  obj.fpTimeRemaining = { color: importDefault(689).colors.TEXT_BRAND };
  const obj2 = { color: importDefault(689).colors.TEXT_BRAND };
  obj.fpTimeRemainingPill = { borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  const obj3 = { borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpUnactivatedHoursPill = { borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  const obj4 = { borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpTimeRemainingText = { color: importDefault(689).colors.WHITE };
  const obj5 = { color: importDefault(689).colors.WHITE };
  obj.fpUnitsTitle = { color: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY };
  const obj7 = { color: importDefault(689).colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  obj.fpUnitsStatusText = obj7;
  const obj6 = { color: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY };
  obj.fpRowStart = { padding: importDefault(689).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(689).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH };
  const obj8 = { padding: importDefault(689).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(689).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH };
  obj.fpRowIcon = { marginEnd: importDefault(689).modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowContent = { flexShrink: 1, flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj9 = { marginEnd: importDefault(689).modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowEnd = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST };
  const obj11 = {};
  let CARD_PRIMARY_BG;
  if (!arg0) {
    CARD_PRIMARY_BG = require(5127) /* createCardBackgroundToken */.CARD_PRIMARY_BG;
  }
  obj11.backgroundColor = CARD_PRIMARY_BG;
  obj11.height = tmp;
  obj.dividerContainer = obj11;
  const obj12 = { height: tmp };
  if (arg0) {
    let DIVIDER_BACKGROUND = importDefault(689).colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = require(4973) /* result */.DIVIDER_BACKGROUND;
  }
  obj12.backgroundColor = DIVIDER_BACKGROUND;
  obj.divider = obj12;
  obj.pillAndCardContainer = { position: "relative" };
  obj.pillPosition = { position: "absolute", top: -18, left: 5, zIndex: 99 };
  return obj;
});
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let result = require("result").fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlan.tsx");

export default function PremiumManagePlan() {
  const tmp = _createForOfIteratorHelperLoose();
  const rect = importDefault(1557)();
  const top = rect.top;
  let obj = navigation(12384);
  const youBarSettingsOutsideSafeAreaTop = obj.useYouBarSettingsOutsideSafeAreaTop();
  let obj1 = navigation(1456);
  navigation = obj1.useNavigation();
  let items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj2 = navigation(566);
  const items1 = [closure_14];
  const stateFromStores = obj2.useStateFromStores(items1, () => outer1_14.isLoadedForPremiumSKUs());
  let obj3 = navigation(566);
  const items2 = [closure_15];
  const tmp6 = callback2(obj3.useStateFromStoresArray(items2, () => {
    const items = [outer1_15.getPremiumTypeSubscription(), outer1_15.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const first = tmp6[0];
  let obj4 = navigation(566);
  const items3 = [closure_12];
  const stateFromStores1 = obj4.useStateFromStores(items3, () => outer1_12.getCurrentUser());
  const tmp9 = importDefault(6636)({ forceFetch: true });
  importDefault(4559)(() => {
    let isSubscriptionFetching = outer1_15.hasFetchedSubscriptions();
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = outer1_13.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      const subscriptions = navigation(outer1_2[35]).fetchSubscriptions();
      const obj = navigation(outer1_2[35]);
    }
    let result = outer1_14.isLoadedForPremiumSKUs();
    if (!result) {
      result = outer1_14.isFetchingForPremiumSKUs();
    }
    if (!result) {
      const premiumSubscriptionPlans = navigation(outer1_2[65]).fetchPremiumSubscriptionPlans();
      const obj2 = navigation(outer1_2[65]);
    }
  });
  let obj6 = navigation(7427);
  let isInReverseTrial = obj6.useIsInReverseTrial();
  const tmp12 = importDefault(12386);
  let obj7 = navigation(3776);
  const unactivatedFractionalPremiumDurationString = obj7.getUnactivatedFractionalPremiumDurationString(tmp9);
  if (null !== first) {
    if (!first.isPurchasedExternally) {
      const currentPeriodEnd = first.currentPeriodEnd;
    }
  }
  let tmp15 = tmp9.fractionalState !== constants3.NONE;
  if (tmp15) {
    let tmp16 = isInReverseTrial;
    if (isInReverseTrial) {
      tmp16 = tmp9.unactivatedUnits.length <= 0;
    }
    tmp15 = !tmp16;
  }
  if (!tmp15) {
    tmp15 = tmp14;
  }
  let obj8 = navigation(3842);
  importDefault = React.useRef(false);
  const callback = React.useCallback((nativeEvent) => {
    let obj = navigation(outer1_2[68]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  let obj9 = navigation(566);
  const items4 = [closure_16];
  let tmp19 = null != first;
  const stateFromStores2 = obj9.useStateFromStores(items4, () => {
    let forApplication = outer1_16.getForApplication(outer1_26);
    if (null == forApplication) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], navigation(1390).areSetsEqual);
  if (tmp19) {
    tmp19 = !first.isBoostOnly;
  }
  if (tmp19) {
    tmp19 = stateFromStores;
  }
  if (tmp19) {
    tmp19 = tmp8;
  }
  let tmp20 = null != first && first.isBoostOnly && stateFromStores && tmp8;
  let premiumGroupRole;
  if (null != stateFromStores1) {
    premiumGroupRole = stateFromStores1.premiumGroupRole;
  }
  let result;
  if (null != stateFromStores1) {
    result = stateFromStores1.isPremiumWithPremiumGroup();
  }
  obj = { style: tmp.background };
  obj = { blurAmount: 0.2 };
  const items5 = [tmp.topBlur, ];
  obj1 = {};
  let num = 0;
  const tmp12Result = importDefault(12386)(tmp9.endsAt, navigation(12386).CountDownMessageTypes.SHORT_TIME);
  const tmp23 = callback4;
  const tmp24 = closure_8;
  const tmp25 = callback3;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num = top;
  }
  obj1.height = num;
  items5[1] = obj1;
  obj.style = items5;
  obj.blurTheme = obj8.useThemeContext().theme;
  const items6 = [tmp25(importDefault(4532), obj), ];
  obj2 = {};
  const items7 = [tmp.container, ];
  obj3 = {};
  let num2 = 16;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num2 = top;
  }
  obj3.paddingTop = num2;
  obj3.paddingBottom = rect.bottom;
  items7[1] = obj3;
  obj2.contentContainerStyle = items7;
  obj2.onScrollEndDrag = callback;
  obj2.onMomentumScrollEnd = callback;
  obj2.scrollEventThrottle = 0;
  const items8 = [callback3(ManagePlanHeader, {}), ];
  obj4 = { style: tmp.contentContainer };
  let tmp31 = tmp19;
  if (tmp19) {
    const obj5 = { subscription: first, fractionalPremiumInfo: tmp9, isPremiumGroup: result, premiumGroupRole };
    tmp31 = callback3(SubscriptionAndBillingInfo, obj5);
  }
  const items9 = [tmp31, , , , , , ];
  if (isInReverseTrial) {
    obj6 = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
    isInReverseTrial = callback3(importDefault(8000), obj6);
  }
  items9[1] = isInReverseTrial;
  let tmp38 = result;
  if (result) {
    tmp38 = !tmp19;
  }
  if (tmp38) {
    obj7 = { premiumType: closure_27.TIER_2, hideButton: true, hidePrice: true, isPremiumGroup: true, premiumGroupRole };
    tmp38 = callback3(importDefault(8000), obj7);
  }
  items9[2] = tmp38;
  if (tmp15) {
    obj8 = { fractionalPremiumInfo: tmp9, showPremiumFeaturesCard: tmp9.fractionalState === constants3.FP_ONLY, hasUnactivatedUnits: tmp14, unactivatedHoursString: unactivatedFractionalPremiumDurationString, activationDate: currentPeriodEnd, durationText: tmp12Result };
    tmp15 = callback3(FractionalPremiumCredits, obj8);
  }
  items9[3] = tmp15;
  if (tmp20) {
    obj9 = {};
    const obj10 = {
      style: tmp.subscriptionHeader,
      onClickManagePremiumGuild() {
          const routes = navigation.getState().routes;
          const found = routes.find((name) => name.name === outer2_22.GUILD_BOOSTING);
          let obj = callback(outer1_2[71]);
          obj.setSection(outer1_22.GUILD_BOOSTING);
          obj = { destinationPane: outer1_22.GUILD_BOOSTING };
          const result = navigation(outer1_2[72]).trackUserSettingsPaneViewed(obj);
          if (null != found) {
            navigation.navigate(found);
          } else {
            navigation.push(outer1_22.GUILD_BOOSTING);
          }
        },
      subscription: first
    };
    const items10 = [callback3(importDefault(7376), obj10), ];
    const obj11 = { style: tmp.billingInfo, subscription: first };
    items10[1] = callback3(importDefault(7416), obj11);
    obj9.children = items10;
    tmp20 = callback4(closure_8, obj9);
  }
  items9[4] = tmp20;
  const obj12 = { style: tmp.accountCredit, creditListContainerStyle: tmp.accountCreditList, currentSubscription: first, entitlements: stateFromStores2 };
  let tmp54 = null != result;
  const tmp26 = importDefault(4532);
  const tmp27 = callback4;
  const tmp28 = closure_9;
  const tmp29 = callback4;
  const tmp30 = closure_8;
  const tmp52 = callback3;
  if (tmp54) {
    tmp54 = result;
  }
  obj12.hasPremiumGroup = tmp54;
  items9[5] = tmp52(importDefault(7418), obj12);
  const obj13 = { style: tmp.featuresTable, variant: "nitro_home" };
  const tmp53 = importDefault(7418);
  const intl = navigation(1212).intl;
  obj13.titleOverride = intl.string(navigation(1212).t.QXx2gs);
  obj13.isFractionalOnly = tmp9.fractionalState === constants3.FP_ONLY;
  obj13.isPremiumGroup = result;
  obj13.premiumGroupRole = premiumGroupRole;
  items9[6] = callback3(importDefault(12406), obj13);
  obj4.children = items9;
  items8[1] = tmp29(tmp30, obj4);
  obj2.children = items8;
  items6[1] = tmp27(tmp28, obj2);
  obj.children = items6;
  return tmp23(tmp24, obj);
};
export const BACK_BUTTON_SIZE = 24;
