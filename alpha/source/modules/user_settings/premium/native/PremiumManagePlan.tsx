// Module ID: 15341
// Function ID: 15342
// Name: PremiumManagePlan
// Dependencies: [5, 32, 19, 17, 6967, 2046, 1384, 2049, 2052, 2053, 7573, 1994, 7590, 1072, 5742, 1386, 21, 3, 5009, 575, 1498, 6974, 6996, 5619, 1114, 7320, 15233, 7345, 504, 5075, 5016, 1093, 6529, 5607, 10540, 7580, 1253, 15230, 15238, 2048, 38, 7407, 5712, 15342, 15343, 15207, 15217, 8527, 5629, 15196, 15237, 8655, 9886, 15242, 8018, 2062, 6971, 5582, 1188, 8511, 1626, 15305, 7572, 5588, 7425, 8525, 15307, 15266, 4875, 5594, 7155, 7159, 15239, 15320, 2]
// Exports: default

// Module 15341 (PremiumManagePlan)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import intl13 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import useNavigation from "useNavigation" /* 1498 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 2046 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5594 */;
import Text_Text from "Text/Text" /* 5619 */;
import PaymentConstants from "PaymentConstants" /* 5742 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 6529 */;
import TableRowConstants from "TableRowConstants" /* 6967 */;
import Card_Card from "Card/Card" /* 6971 */;
import Pressables from "Pressables" /* 6974 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6996 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7155 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7572 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7580 */;
import AssetRegistryDefault from "AssetRegistry" /* 8511 */;
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 9886 */;
import PremiumSubscriptionDetails from "PremiumSubscriptionDetails" /* 15196 */;
import PremiumBillingInfoDefault from "PremiumBillingInfo" /* 15237 */;
import PremiumAccountCreditDefault from "PremiumAccountCredit" /* 15239 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 15266 */;
import useFPDurationLeftDefault from "useFPDurationLeft" /* 15307 */;
import PremiumFeaturesTableDefault from "PremiumFeaturesTable" /* 15320 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1384 */;
import BillingInfoStore from "BillingInfoStore" /* 2049 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2052 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import EntitlementStore from "EntitlementStore" /* 7573 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import IAPStore from "IAPStore" /* 7590 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c1, c4, forApplication, importDefault, navigation;

let c9;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
function ManagePlanHeader() {
  let intl;
  let items;
  const tmp = closure_32();
  const obj = useNavigation;
  let closure_0 = obj.useNavigation();
  const obj2 = { style: tmp.headerContainer, children: items };
  const obj3 = {
    style: tmp.backButtonWrapper,
    onPress() {
      return closure_0.pop();
    },
    children: closure_28(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" })
  };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [closure_28(PressableOpacity, obj3), , ];
  const obj4 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: intl.string(intl13.t["1bX7Tx"]) };
  const Text = Text_Text.Text;
  intl = intl13.intl;
  items[1] = closure_28(Text, obj4);
  const obj5 = { style: tmp.backButtonWrapper };
  items[2] = closure_28(metroImportDefault, obj5);
  return closure_29(metroImportDefault, obj2);
}
function SubscriptionAndBillingInfo(subscription) {
  let Button;
  let _undefined;
  let c8;
  let closure_3;
  let closure_5;
  let formatRateResult;
  let fractionalPremiumInfo;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let isPremiumGroup;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items8;
  let items9;
  let logger;
  let obj46;
  let premiumGroupRole;
  let premiumTypeSubscription;
  let state;
  let tmp21;
  subscription = subscription.subscription;
  ({ fractionalPremiumInfo, isPremiumGroup, premiumGroupRole } = subscription);
  let analyticsLocations;
  let stateFromStores2;
  let first2;
  react = undefined;
  c8 = undefined;
  const tmp = closure_34();
  let tmp2 = analyticsLocations;
  let tmp3 = stateFromStores2;
  analyticsLocations = analyticsLocations(stateFromStores2[25])().analyticsLocations;
  const tmp4 = subscription;
  let obj = subscription(stateFromStores2[26]);
  let obj2 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations, analyticsLocation: analyticsLocations(stateFromStores2[27]).PREMIUM_SUBSCRIPTION_DETAILS };
  let tmp5 = first2;
  const first = first2(obj.useFetchSubscriptionInvoicePreview(obj2), 1)[0];
  let obj3 = subscription(stateFromStores2[26]);
  let obj4 = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  const first1 = first2(obj3.useGetSubscriptionInvoice(obj4), 1)[0];
  let obj5 = subscription(stateFromStores2[28]);
  let items = [IAPStore];
  const stateFromStores = obj5.useStateFromStores(items, function() {
    if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
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
    } else {
      return null;
    }
  });
  const items1 = [SubscriptionStore];
  const obj6 = subscription(stateFromStores2[28]);
  const stateFromStores1 = obj6.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items2 = [BillingInfoStore];
  const obj7 = subscription(stateFromStores2[28]);
  stateFromStores2 = obj7.useStateFromStores(items2, () => BillingInfoStore.isSubscriptionFetching);
  let tmp12 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  const tmp4Result = tmp4(tmp3[20]);
  _asyncToGenerator = tmp4Result.useNavigation();
  const tmp4Result9 = tmp4(tmp3[29]);
  const theme = tmp4Result9.useThemeContext().theme;
  const tmp4Result10 = tmp4(tmp3[30]);
  const isThemeLightResult = tmp4Result10.isThemeLight(theme);
  const tmp5Result = tmp5(react.useState(null), 2);
  first2 = tmp5Result[0];
  react = tmp5Result[1];
  const items3 = [AppStateStore];
  const tmp4Result11 = tmp4(tmp3[28]);
  const stateFromStores3 = tmp4Result11.useStateFromStores(items3, () => state.getState());
  const items4 = [first2, stateFromStores2, stateFromStores3];
  const effect = react.useEffect(() => {
    const tmp2 = "opening_mobile_web" === first2 && stateFromStores3 !== ConstantsIOS.AppStates.ACTIVE;
    if (tmp2) {
      closure_5("in_mobile_web");
    }
    const tmp8 = "in_mobile_web" === tmp && stateFromStores3 === ConstantsIOS.AppStates.ACTIVE;
    if (tmp8) {
      const obj = actions_BillingActionCreators;
      const subscriptions = obj.fetchSubscriptions();
      closure_5("start_fetching_update");
    }
    const tmp17 = "start_fetching_update" === first2 && stateFromStores2;
    if (tmp17) {
      closure_5("fetching_update");
    }
    const tmp20 = "fetching_update" !== first2 || stateFromStores2;
    if (!tmp20) {
      closure_5(null);
    }
  }, items4);
  const tmp18 = tmp2(tmp3[33])(() => {
    const obj = subscription(stateFromStores2[34]);
    return obj.getNewAnalyticsLoadId();
  });
  const loadId = tmp18;
  const items5 = [subscription, first2, analyticsLocations, tmp18];
  const memo = react.useMemo(() => {
    let args;
    let load_id;
    if ("start_fetching_update" !== first2) {
      if ("fetching_update" !== tmp) {
        let obj2 = PremiumManagementUtils;
        const obj3 = {
          returnCtaAsComponent: true,
          loadId,
          shouldAllowExternalManagement: true,
          onSuccessCallback() {
                let items;
                logger.log("Successfully opened mobile web Nitro Management page");
                const obj2 = { load_id, location_stack: items, custom_checkout_flow: constants2.MOBILE_WEB_REDIRECT_CHECKOUT };
                const obj = analyticsLocations(stateFromStores2[36]);
                items = [...closure_1_1, analyticsLocations(stateFromStores2[27]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA];
                obj.track(constants.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE, obj2);
                closure_1_5("opening_mobile_web");
              }
        };
        const externalManagementMessage = obj2.getExternalManagementMessage(subscription, obj3);
        let tmp5 = null;
        const tmp6 = require;
        if (null != externalManagementMessage) {
          let tmp3 = externalManagementMessage;
          if (!react.isValidElement(externalManagementMessage)) {
            let obj = { variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
            tmp3 = closure_28(tmp6(5619).Text, obj);
          }
          tmp5 = tmp3;
        }
        return tmp5;
      }
    }
    return closure_28(React4, { size: "small" });
  }, items5);
  [tmp21, c8] = tmp5(react.useState(false), 2);
  tmp5(react.useState(false), 2);
  const tmp4Result12 = tmp4(tmp3[37]);
  const appleSubscriptionOwnership = tmp4Result12.useAppleSubscriptionOwnership(subscription);
  const obj8 = { fractionalPremiumInfo };
  const tmp4Result13 = tmp4(tmp3[38]);
  const billingInformationNative = tmp4Result13.useBillingInformationNative(subscription, first, first1, false, obj8);
  if (null == first) {
    return null;
  } else {
    const tmp2Result = tmp2(tmp3[39]);
    const planIdFromInvoice = tmp2Result.getPlanIdFromInvoice(subscription, first);
    const tmp2Result7 = tmp2(tmp3[39]);
    const statusFromInvoice = tmp2Result7.getStatusFromInvoice(subscription, first);
    tmp2(tmp3[40])(null != closure_27[planIdFromInvoice], "missing subscription planInfo");
    const obj9 = { subscription, planId: planIdFromInvoice, price: formatRateResult, includePremiumGuilds: true };
    formatRateResult = null;
    const getPlanDescription = tmp2(tmp3[39]).getPlanDescription;
    tmp2(tmp3[39]);
    if (null != stateFromStores) {
      const tmp4Result14 = tmp4(tmp3[41]);
      formatRateResult = tmp4Result14.formatRate(stateFromStores.priceString, tmp52.interval, tmp52.intervalCount);
    }
    const planDescription = getPlanDescription(obj9);
    if (statusFromInvoice !== constants2.CANCELED) {
      if (statusFromInvoice !== constants2.PAUSE_PENDING) {
        if (statusFromInvoice !== constants2.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            let self = this;
            let self2 = this;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              const tmp4Result15 = tmp4(tmp3[39]);
              result = tmp4Result15.extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
            }
            const obj10 = { style: tmp.container, children: null };
            const obj11 = { style: tmp.mutationWarningContainer, children: null };
            const items6 = [closure_28(tmp4(tmp3[51]).AnnouncementsWarningIcon, { size: "md" }), ];
            const obj12 = { style: tmp.mutationText, variant: "heading-sm/medium", color: "text-default", children: null };
            const Text6 = tmp4(tmp3[23]).Text;
            const intl7 = tmp4(tmp3[24]).intl;
            const format = intl7.format;
            if (!subscription.hasExternalPlanChange) {
              let displayName;
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                const tmp2Result9 = tmp2(tmp3[39]);
                displayName = tmp2Result9.getDisplayName(subscription.renewalMutations.planId);
              }
              const obj13 = { planName: displayName, date: result };
              obj12.children = format(tmp38, obj13);
              items6[1] = closure_28(Text6, obj12);
              obj11.children = items6;
              const items7 = [closure_29(loadId, obj11), , ];
              const obj14 = { premiumType: closure_26.TIER_2, hideButton: true, isPremiumGroup, premiumGroupRole };
              items7[1] = closure_28(tmp2(tmp3[52]), obj14);
              const obj15 = { style: tmp.extraInfoContainer, children: items8 };
              const obj16 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: intl8.string(tmp4(tmp3[24]).t.YCrcPL) };
              const Text7 = tmp4(tmp3[23]).Text;
              intl8 = tmp4(tmp3[24]).intl;
              items8 = [closure_28(Text7, obj16), ];
              const obj17 = { style: tmp.extraInfoTextContainer, children: items9 };
              const obj18 = { variant: "text-sm/medium", color: "text-default", children: intl9.string(tmp4(tmp3[24]).t["MTG+3O"]) };
              const Text8 = tmp4(tmp3[23]).Text;
              intl9 = tmp4(tmp3[24]).intl;
              items9 = [closure_28(Text8, obj18), , ];
              const obj19 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
              items9[1] = closure_28(tmp4(tmp3[23]).Text, obj19);
              items9[2] = null != memo && memo;
              items8[1] = closure_29(loadId, obj17);
              items7[2] = closure_29(loadId, obj15);
              obj10.children = items7;
              return closure_29(loadId, obj10);
            }
            const tmp4Result16 = tmp4(tmp3[39]);
            displayName = tmp4Result16.getExternalPlanDisplayName(subscription.renewalMutations);
          } else {
            let tmp55Result;
            const obj20 = { style: tmp.container, children: items11 };
            const obj21 = { style: tmp.pillAndCardContainer, children: items10 };
            if (tmp12) {
              const obj22 = { style: tmp.pillPosition, children: closure_28(tmp4(tmp3[53]).PremiumReferralTrialPill, {}) };
              tmp12 = closure_28(tmp56, obj22);
            }
            items10 = [tmp12, ];
            const obj23 = { premiumType: closure_26.TIER_2, forFractionalPremium: fractionalPremiumInfo.fractionalState !== constants4.NONE, hideButton: true, isPremiumGroup, premiumGroupRole };
            items10[1] = closure_28(tmp2(tmp3[52]), obj23);
            items11 = [closure_29(loadId, obj21), ];
            const obj24 = { style: tmp.extraInfoContainer, children: items12 };
            const obj25 = { variant: "eyebrow", color: "text-default", children: intl.string(tmp4(tmp3[24]).t.YCrcPL) };
            const Text = tmp4(tmp3[23]).Text;
            intl = tmp4(tmp3[24]).intl;
            items12 = [closure_28(Text, obj25), , , ];
            if (appleSubscriptionOwnership.isMismatch()) {
              const obj26 = { accessibilityRole: "alert", style: tmp.appleAccountMismatchNotice, children: items13 };
              const obj27 = { size: "sm", color: tmp2(tmp3[19]).colors.ICON_FEEDBACK_WARNING };
              const WarningIcon = tmp4(tmp3[54]).WarningIcon;
              items13 = [tmp26(WarningIcon, obj27), ];
              const obj28 = { variant: "text-sm/medium", color: "text-strong", style: tmp.appleAccountMismatchNoticeText, children: intl4.string(tmp4(tmp3[24]).t.meauFg) };
              const Text3 = tmp4(tmp3[23]).Text;
              intl4 = tmp4(tmp3[24]).intl;
              items13[1] = closure_28(Text3, obj28);
              tmp55Result = tmp55(tmp56, obj26);
            } else {
              let stringResult;
              const obj29 = { style: tmp.extraInfoTextContainer, children: items14 };
              const Text2 = tmp4(tmp3[23]).Text;
              if (null != memo) {
                const intl3 = tmp4(tmp3[24]).intl;
                stringResult = intl3.string(tmp4(tmp3[24]).t["MTG+3O"]);
              } else {
                const intl2 = tmp4(tmp3[24]).intl;
                const obj30 = {
                  onSwitchPlans() {
                                  const obj = PremiumSubscriptionDetails;
                                  return obj.handleManageSubscription(subscription, closure_3, analyticsLocations);
                                },
                  onCancel() {
                                  const obj = PremiumSubscriptionDetails;
                                  return obj.onCancelClick(subscription, analyticsLocations);
                                }
                };
                stringResult = intl2.format(tmp4(tmp3[24]).t.fvk30i, obj30);
              }
              const obj31 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
              items14 = [tmp26(Text2, obj31), , ];
              const obj32 = { subscription };
              items14[1] = closure_28(tmp4(tmp3[50]).GoogleManagementLink, obj32);
              items14[2] = null != memo && memo;
              tmp55Result = tmp55(tmp56, obj29);
            }
            items12[1] = tmp55Result;
            const obj33 = { variant: "eyebrow", color: "text-default", children: intl5.string(tmp4(tmp3[24]).t.Sb6wI1) };
            const Text4 = tmp4(tmp3[23]).Text;
            intl5 = tmp4(tmp3[24]).intl;
            items12[2] = closure_28(Text4, obj33);
            const obj34 = { style: items15, children: items16 };
            items15 = [tmp.extraInfoTextContainer, { gap: 4 }];
            const obj35 = { variant: "text-md/semibold", color: "text-default", children: intl6.string(tmp4(tmp3[24]).t.KXQjfc) };
            const Text5 = tmp4(tmp3[23]).Text;
            intl6 = tmp4(tmp3[24]).intl;
            items16 = [tmp26(Text5, obj35), ];
            const obj36 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
            items16[1] = closure_28(tmp4(tmp3[23]).Text, obj36);
            items12[3] = closure_29(loadId, obj34);
            items11[1] = closure_29(loadId, obj24);
            return closure_29(loadId, obj20);
          }
        }
      }
    }
    const obj37 = { style: tmp.container, children: items20 };
    const obj38 = { style: tmp.errorHeader, children: items19 };
    const obj39 = { style: tmp.headerBackground, children: items17 };
    const obj40 = { source: tmp2(isThemeLightResult ? tmp3[43] : tmp3[44]), style: tmp.headerBackgroundImage };
    const tmp2Result10 = tmp2(tmp3[42]);
    items17 = [closure_28(tmp2Result10, obj40), , ];
    const obj41 = { style: tmp.logoContainer, children: items18 };
    const obj42 = { source: tmp2(tmp3[45]), style: tmp.wumpusImg };
    const tmp2Result11 = tmp2(tmp3[42]);
    items18 = [closure_28(tmp2Result11, obj42), ];
    const obj43 = { source: tmp2(isThemeLightResult ? tmp3[46] : tmp3[47]), style: tmp.logoStyle };
    const tmp2Result12 = tmp2(tmp3[42]);
    items18[1] = closure_28(tmp2Result12, obj43);
    items17[1] = closure_29(loadId, obj41);
    const obj44 = { variant: "heading-sm/medium", color: "text-default", children: planDescription };
    items17[2] = closure_28(tmp4(tmp3[23]).Text, obj44);
    items19 = [closure_29(loadId, obj39), ];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      const obj45 = { style: tmp.errorHeaderPrimaryButton, children: closure_28(Button, obj46) };
      obj46 = {
        size: "sm",
        variant: "secondary",
        text: intl10.string(tmp4(tmp3[24]).t.lTCb0c),
        onPress: _asyncToGenerator(async (arg0, value) => {
              let closure_0;
              let closure_2;
              let obj2;
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: null };
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
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      _undefined(true);
                      c3 = 1;
                      c1 = 2;
                      c4 = 1;
                      const obj5 = { value: obj2.onResubscribeClick(subscription), done: false };
                      obj2 = tmp(stateFromStores2[49]);
                      return obj5;
                    }
                  } else if (1 === tmp4) {
                    c3 = 0;
                    closure_128_8(false);
                    throw stateFromStores2;
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    closure_128_8(false);
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    c3 = 0;
                    closure_128_8(false);
                    c4 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp21) {
                  stateFromStores2 = tmp21;
                  if (0 === c3) {
                    c4 = 3;
                    throw tmp21;
                  } else {
                    c1 = 1;
                  }
                }
              }
            }),
        loading: tmp21,
        disabled: tmp21
      };
      Button = tmp4(tmp3[48]).Button;
      intl10 = tmp4(tmp3[24]).intl;
      isOnPlatformMatchingExternalPaymentGateway = tmp44(tmp43, obj45);
    }
    items19[1] = isOnPlatformMatchingExternalPaymentGateway;
    items20 = [closure_29(loadId, obj38), ];
    const obj47 = { style: tmp.extraInfoContainer, children: items21 };
    const obj48 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: intl11.string(tmp4(tmp3[24]).t.YCrcPL) };
    const Text9 = tmp4(tmp3[23]).Text;
    intl11 = tmp4(tmp3[24]).intl;
    items21 = [closure_28(Text9, obj48), ];
    const obj49 = { style: tmp.extraInfoTextContainer, children: items22 };
    const obj50 = { variant: "text-sm/medium", color: "text-default", children: intl12.string(tmp4(tmp3[24]).t["MTG+3O"]) };
    const Text10 = tmp4(tmp3[23]).Text;
    intl12 = tmp4(tmp3[24]).intl;
    items22 = [closure_28(Text10, obj50), , , ];
    const obj51 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
    items22[1] = closure_28(tmp4(tmp3[23]).Text, obj51);
    const obj52 = { subscription };
    items22[2] = closure_28(tmp4(tmp3[50]).GoogleManagementLink, obj52);
    items22[3] = null != memo && memo;
    items21[1] = closure_29(loadId, obj49);
    items20[1] = closure_29(loadId, obj47);
    return closure_29(loadId, obj37);
  }
}
function FractionalPremiumCredits(durationText) {
  let AYGoBn;
  let Icon;
  let activationDate;
  let format;
  let fractionalPremiumInfo;
  let hasUnactivatedUnits;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items2;
  let obj10;
  let obj11;
  let obj12;
  let obj13;
  let obj18;
  let obj23;
  let obj26;
  let obj29;
  let obj6;
  let obj7;
  let showPremiumFeaturesCard;
  let tmp11;
  let unactivatedHoursString;
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } = durationText);
  durationText = durationText.durationText;
  const tmp = closure_34();
  const obj = { style: tmp.container, children: null };
  if (showPremiumFeaturesCard) {
    const obj2 = { premiumType: closure_26.TIER_2, forFractionalPremium: true, hideButton: true };
    showPremiumFeaturesCard = closure_28(PremiumFeaturesCardDefault, obj2);
  }
  const items = [showPremiumFeaturesCard, ];
  const obj3 = { style: tmp.extraInfoContainer, children: null };
  const obj4 = { variant: "eyebrow", color: "text-default", children: intl.string(intl13.t.Obre8v) };
  const Text = Text_Text.Text;
  intl = intl13.intl;
  const items1 = [closure_28(Text, obj4), , ];
  const obj5 = { variant: "text-md/semibold", color: "text-default", children: format(AYGoBn, obj6) };
  const Text2 = Text_Text.Text;
  const intl2 = intl13.intl;
  format = intl2.format;
  obj6 = { helpCenterLink: obj7.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT) };
  AYGoBn = intl13.t.AYGoBn;
  obj7 = HelpdeskUtilsDefault;
  items1[1] = closure_28(Text2, obj5);
  const obj8 = { style: tmp.fpRowStart, start: true, end: false, variant: "primary", children: null };
  const obj9 = { style: tmp.fpRowIcon, children: closure_28(tmp11, obj10) };
  const Card = Card_Card.Card;
  obj10 = { style: obj11, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items2, children: closure_28(metroImportDefault, obj12) };
  obj11 = { padding: 6, borderRadius: nativeDefault.radii.sm };
  tmp11 = LinearGradientDefault;
  items2 = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj12 = { children: closure_28(Icon, obj13) };
  obj13 = { color: nativeDefault.unsafe_rawColors.WHITE, source: AssetRegistryDefault, size: native.IconSizes.LARGE };
  Icon = native.Icon;
  const items3 = [closure_28(metroImportDefault, obj9), ];
  const obj14 = { style: tmp.fpRowContent, children: null };
  const obj15 = { variant: "text-sm/semibold", style: tmp.fpUnitsTitle, children: intl3.string(intl13.t.DFMPWS) };
  const Text3 = Text_Text.Text;
  intl3 = intl13.intl;
  const items4 = [closure_28(Text3, obj15), ];
  if (hasUnactivatedUnits) {
    let tmp8Result;
    if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
      const obj16 = { variant: "text-sm/medium", children: unactivatedHoursString };
      tmp8Result = tmp8(tmp9(5619).Text, obj16);
    }
    items4[1] = tmp8Result;
    obj14.children = items4;
    items3[1] = closure_29(metroImportDefault, obj14);
    obj8.children = items3;
    const items5 = [closure_29(Card, obj8), , ];
    const obj17 = { style: tmp.dividerContainer, children: closure_28(metroImportDefault, obj18) };
    obj18 = { style: tmp.divider };
    items5[1] = closure_28(metroImportDefault, obj17);
    const obj19 = { start: false, end: true, style: tmp.fpRowEnd, variant: "secondary", children: null };
    const obj20 = { style: tmp.fpRowContent, children: null };
    if (hasUnactivatedUnits) {
      let tmp8Result5;
      if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
        const obj21 = { variant: "text-md/semibold", children: intl6.string(intl13.t["hT6i/0"]) };
        const Text6 = tmp9(5619).Text;
        intl6 = tmp9(1114).intl;
        const items6 = [closure_28(Text6, obj21), ];
        let tmp8Result3 = undefined !== activationDate;
        if (tmp8Result3) {
          const obj22 = { variant: "text-xs/medium", color: "text-subtle", children: intl7.format(intl13.t["0Vwb/l"], obj23) };
          const Text7 = tmp9(5619).Text;
          intl7 = tmp9(1114).intl;
          obj23 = { activateDate: activationDate };
          tmp8Result3 = tmp8(Text7, obj22);
        }
        const obj24 = { children: items6 };
        items6[1] = tmp8Result3;
        tmp8Result5 = tmp2(tmp3, obj24);
      }
      const items7 = [tmp8Result5, ];
      if (hasUnactivatedUnits) {
        let tmp8Result4;
        if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
          const obj25 = { style: tmp.fpUnactivatedHoursPill, children: closure_28(Text_Text.Text, obj26) };
          obj26 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: unactivatedHoursString };
          tmp8Result4 = tmp8(tmp3, obj25);
        }
        const obj27 = { children: items5 };
        items7[1] = tmp8Result4;
        obj20.children = items7;
        obj19.children = closure_29(metroImportDefault, obj20);
        items5[2] = closure_28(tmp14, obj19);
        items1[2] = closure_29(metroImportDefault, obj27);
        obj3.children = items1;
        items[1] = closure_29(metroImportDefault, obj3);
        obj.children = items;
        return closure_29(metroImportDefault, obj);
      }
      const obj28 = { style: tmp.fpTimeRemainingPill, children: closure_28(Text_Text.Text, obj29) };
      obj29 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: durationText };
      tmp8Result4 = tmp8(tmp3, obj28);
    }
    const obj30 = { variant: "text-md/semibold", style: tmp.fpTimeRemaining, children: intl5.string(intl13.t["3G0CTC"]) };
    const Text5 = tmp9(5619).Text;
    intl5 = tmp9(1114).intl;
    tmp8Result5 = tmp8(Text5, obj30);
  }
  const obj31 = { variant: "text-sm/medium", style: tmp.fpUnitsStatusText, children: intl4.string(intl13.t["B66Z+f"]) };
  const Text4 = tmp9(5619).Text;
  intl4 = tmp9(1114).intl;
  tmp8Result = tmp8(Text4, obj31);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ StyleSheet: metroRequire, View: metroImportDefault, ScrollView: metroImportAll, ActivityIndicator: c9 } = react_native);
const TABLE_DIVIDER_WIDTH = TableRowConstants.TABLE_DIVIDER_WIDTH;
const isNoneSubscription = SubscriptionPlanRecord.isNoneSubscription;
({ AnalyticEvents: closure_19, HelpdeskArticles: closure_20, SubscriptionStatusTypes: closure_21, UserSettingsSections: closure_22 } = Constants);
const CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
({ FractionalPremiumStates: closure_24, PREMIUM_SUBSCRIPTION_APPLICATION: closure_25, PremiumTypes: closure_26, SubscriptionPlanInfo: closure_27 } = PremiumConstants);
({ jsx: closure_28, jsxs: closure_29 } = Fragment);
let tmp6 = new LoggerDefault("PremiumManagePlan");
let closure_30 = tmp6;
let createStyles = createStyles_mod;
let obj = { background: obj2, container: obj3, contentContainer: { marginTop: 24, display: "flex", gap: 12 }, topBlur: { position: "absolute", zIndex: 5, top: 0, left: 0, right: 0 }, accountCredit: { paddingHorizontal: 16 }, accountCreditList: obj4, featuresTable: { paddingTop: 16 }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj4 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_31 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between" }, backButtonWrapper: size };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_32 = createStyles.createStyles(obj5);
createStyles = createStyles_mod;
let closure_34 = createStyles.createStyles(() => {
  let obj3;
  const obj = { container: { display: "flex", flexDirection: "column", gap: 12 }, errorHeader: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, headerBackground: { padding: 16 }, headerBackgroundImage: obj3, logoContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 }, wumpusImg: { marginRight: 10, height: 36, width: 51 }, logoStyle: { height: 32, width: 78 }, errorHeaderPrimaryButton: { marginBottom: 16, marginHorizontal: 16 }, extraInfoContainer: { paddingTop: 16, paddingHorizontal: 16, display: "flex", gap: 8 }, extraInfoTextContainer: { padding: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 }, mutationWarningContainer: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, mutationText: { flex: 1 }, fpTimeRemaining: { color: nativeDefault.colors.TEXT_BRAND }, fpTimeRemainingPill: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 }, fpUnactivatedHoursPill: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 }, fpTimeRemainingText: { color: nativeDefault.colors.WHITE }, fpUnitsTitle: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, fpUnitsStatusText: { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 }, fpRowStart: { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, fpRowIcon: { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING }, fpRowContent: { flexShrink: 1, flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, fpRowEnd: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, dividerContainer: { height: TABLE_DIVIDER_WIDTH }, divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE }, pillAndCardContainer: { position: "relative" }, pillPosition: { position: "absolute", top: -18, left: 5, zIndex: 99 }, appleAccountMismatchNotice: { alignSelf: "stretch", width: "100%", flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING }, appleAccountMismatchNoticeText: { flex: 1 } };
  obj3 = { width: undefined, height: undefined };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" });
  const merged = Object.assign(metroRequire.absoluteFillObject);
  ({ padding: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 });
  ({ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  ({ borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 });
  ({ borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 });
  ({ color: nativeDefault.colors.WHITE });
  ({ color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY });
  ({ color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 });
  ({ padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ alignSelf: "stretch", width: "100%", flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING });
  return obj;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlan.tsx");

export default function PremiumManagePlan() {
  let currentPeriodEnd;
  let currentUser;
  let flag;
  let hasTrackedScrolledToBottom;
  let intl;
  let items10;
  let items6;
  let items8;
  let items9;
  let tmp10;
  let tmp11;
  const f108044 = () => {
    const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
    return items;
  };
  const tmp = closure_31();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const bottom = rect.bottom;
  let obj = navigation(15305);
  const youBarSettingsOutsideSafeAreaTop = obj.useYouBarSettingsOutsideSafeAreaTop();
  let obj2 = navigation(1498);
  navigation = obj2.useNavigation();
  let obj3 = react;
  let items = [navigation];
  const layoutEffect = react.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  const items1 = [SubscriptionPlanStore];
  const obj4 = navigation(504);
  const stateFromStores = obj4.useStateFromStores(items1, () => SubscriptionPlanStore.isLoadedForPremiumSKUs());
  const items2 = [SubscriptionStore];
  const obj5 = navigation(504);
  [tmp10, tmp11] = obj5.useStateFromStoresArray(items2, f108044);
  _slicedToArray(obj5.useStateFromStoresArray(items2, f108044), 2);
  const items3 = [UserStore];
  const obj6 = navigation(504);
  const stateFromStores1 = obj6.useStateFromStores(items3, () => currentUser.getCurrentUser());
  const tmp12 = useFractionalPremiumInfoDefault({ forceFetch: true });
  useMountEffectDefault(() => {
    const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
    if (!isSubscriptionFetching) {
      const obj = navigation(dependencyMap[32]);
      const subscriptions = obj.fetchSubscriptions();
    }
    const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
    if (!tmp5) {
      const obj3 = navigation(dependencyMap[64]);
      const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
    }
  });
  const obj8 = navigation(8525);
  let isInReverseTrial = obj8.useIsInReverseTrial();
  const tmp15 = useFPDurationLeftDefault;
  const tmp15Result = tmp15(tmp12.endsAt, navigation(15307).CountDownMessageTypes.SHORT_TIME);
  const obj9 = navigation(2048);
  const unactivatedFractionalPremiumDurationString = obj9.getUnactivatedFractionalPremiumDurationString(tmp12);
  if (null !== tmp10) {
    if (!tmp10.isPurchasedExternally) {
      currentPeriodEnd = tmp10.currentPeriodEnd;
    }
  }
  let tmp29Result4 = tmp12.fractionalState !== constants4.NONE;
  if (tmp29Result4) {
    tmp29Result4 = !(isInReverseTrial && tmp12.unactivatedUnits.length <= 0);
  }
  if (!tmp29Result4) {
    tmp29Result4 = tmp17;
  }
  const tmp4Result = navigation(5075);
  const theme = tmp4Result.useThemeContext().theme;
  importDefault = obj3.useRef(false);
  const callback = obj3.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
    return obj.trackIfScrolledToBottom(obj2);
  }, []);
  const items4 = [EntitlementStore];
  let tmp23 = null != tmp10;
  const tmp4Result2 = navigation(504);
  const stateFromStores2 = tmp4Result2.useStateFromStores(items4, function() {
    forApplication = forApplication.getForApplication(closure_1_25);
    if (forApplication == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      forApplication = new Set();
    }
    return forApplication;
  }, [], tmp4(4875).areSetsEqual);
  if (tmp23) {
    tmp23 = !tmp10.isBoostOnly;
  }
  if (tmp23) {
    tmp23 = stateFromStores;
  }
  if (tmp23) {
    tmp23 = tmp11;
  }
  let tmp27Result = null != tmp10 && tmp10.isBoostOnly && stateFromStores && tmp11;
  let premiumGroupRole;
  if (stateFromStores1 != null) {
    premiumGroupRole = stateFromStores1.premiumGroupRole;
  }
  let result;
  if (stateFromStores1 != null) {
    result = stateFromStores1.isPremiumWithPremiumGroup();
  }
  const items5 = [tmp.topBlur, ];
  let num = 0;
  const obj7 = { style: tmp.background, children: items6 };
  const tmp2Result = VisualEffectViewAnimatedDefault;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num = top;
  }
  items5[1] = { height: num };
  items6 = [closure_28(tmp2Result, { blurAmount: 0.2, style: items5, blurTheme: theme }), ];
  const items7 = [tmp.container, ];
  let num2 = 16;
  const tmp31 = closure_8;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num2 = top;
  }
  const obj10 = { contentContainerStyle: items7, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items8 };
  items7[1] = { paddingTop: num2, paddingBottom: bottom };
  items8 = [closure_28(ManagePlanHeader, {}), ];
  let tmp29Result = tmp23;
  const obj11 = { style: tmp.contentContainer, children: items9 };
  if (tmp29Result) {
    const obj12 = { subscription: tmp10, fractionalPremiumInfo: tmp12, isPremiumGroup: result, premiumGroupRole };
    tmp29Result = tmp29(SubscriptionAndBillingInfo, obj12);
  }
  items9 = [tmp29Result, , , , , , ];
  if (isInReverseTrial) {
    const obj13 = { premiumType: closure_26.TIER_2, forFractionalPremium: true, hideButton: true };
    isInReverseTrial = tmp29(tmp2(9886), obj13);
  }
  items9[1] = isInReverseTrial;
  let tmp29Result3 = result && !tmp23;
  if (tmp29Result3) {
    const obj14 = { premiumType: closure_26.TIER_2, hideButton: true, hidePrice: true, isPremiumGroup: true, premiumGroupRole };
    tmp29Result3 = tmp29(tmp2(9886), obj14);
  }
  items9[2] = tmp29Result3;
  if (tmp29Result4) {
    const obj15 = { fractionalPremiumInfo: tmp12, showPremiumFeaturesCard: tmp12.fractionalState === constants4.FP_ONLY, hasUnactivatedUnits: unactivatedFractionalPremiumDurationString.length > 0, unactivatedHoursString: unactivatedFractionalPremiumDurationString, activationDate: currentPeriodEnd, durationText: tmp15Result };
    tmp29Result4 = tmp29(FractionalPremiumCredits, obj15);
  }
  items9[3] = tmp29Result4;
  if (tmp27Result) {
    const obj16 = { children: items10 };
    const obj17 = {
      style: tmp.subscriptionHeader,
      onClickManagePremiumGuild: function handleLearnMorePremiumGuild() {
          const routes = navigation.getState().routes;
          const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(constants.GUILD_BOOSTING);
          const obj2 = UserSettingsUtils;
          const obj3 = { destinationPane: constants.GUILD_BOOSTING };
          const result = obj2.trackUserSettingsPaneViewed(obj3);
          if (null != found) {
            navigation.navigate(constants.GUILD_BOOSTING, undefined, { pop: true });
          } else {
            navigation.push(constants.GUILD_BOOSTING);
          }
        },
      subscription: tmp10
    };
    items10 = [closure_28(tmp2(15196), obj17), ];
    const obj18 = { style: tmp.billingInfo, subscription: tmp10 };
    items10[1] = closure_28(PremiumBillingInfoDefault, obj18);
    tmp27Result = tmp27(tmp28, obj16);
  }
  items9[4] = tmp27Result;
  const obj19 = { style: tmp.accountCredit, creditListContainerStyle: tmp.accountCreditList, currentSubscription: tmp10, entitlements: stateFromStores2, hasPremiumGroup: flag };
  flag = result;
  const tmp2Result3 = PremiumAccountCreditDefault;
  if (result == null) {
    flag = false;
  }
  items9[5] = closure_28(tmp2Result3, obj19);
  const obj20 = { style: tmp.featuresTable, variant: "nitro_home", titleOverride: intl.string(navigation(1114).t.QXx2gs), isFractionalOnly: tmp12.fractionalState === constants4.FP_ONLY, isPremiumGroup: result, premiumGroupRole };
  const tmp2Result4 = PremiumFeaturesTableDefault;
  intl = tmp4(1114).intl;
  items9[6] = closure_28(tmp2Result4, obj20);
  items8[1] = closure_29(closure_7, obj11);
  items6[1] = closure_29(tmp31, obj10);
  return closure_29(closure_7, obj7);
};
export const BACK_BUTTON_SIZE = 24;
