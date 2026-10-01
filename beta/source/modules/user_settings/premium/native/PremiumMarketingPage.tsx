// Module ID: 13004
// Function ID: 13005
// Name: PremiumMarketingPage
// Dependencies: [32, 19, 17, 1074, 2042, 1374, 21, 4836, 576, 5753, 12997, 12998, 1485, 6583, 12999, 1613, 13005, 4566, 12959, 10203, 4654, 2029, 2031, 13006, 1115, 11769, 4488, 6813, 6419, 1241, 13007, 12965, 8663, 13010, 13015, 13032, 13035, 2]
// Exports: default

// Module 13004 (PremiumMarketingPage)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation, set;

let c10;
let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex" }, scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 }, arrowIcon: obj2, backButton: obj3, sectionWithTopMargin: { marginTop: 48 }, sectionWithPadding: { paddingHorizontal: 12 }, sectionWidth: { maxWidth: 464 }, accountCreditContainer: { width: "100%" }, accountCreditContainerWithSpacing: { marginTop: 24, marginBottom: 20 }, themedBackground: obj4, backButtonBackground: obj5 };
obj2 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { transform: items, position: "absolute", left: 16 };
items = [{ scaleX: -1 }];
obj4 = { backgroundColor: LegacyTokens.DARK_PRIMARY_700_LIGHT_WHITE_500 };
obj5 = { backgroundColor: LegacyTokens.TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
  let _undefined;
  let accountCredit;
  let applicationId;
  let billingInfo;
  let c3;
  let c4;
  let c5;
  let enabled;
  let entitlements;
  let intl;
  let isFullScreenPresentation;
  let items10;
  let items11;
  let items2;
  let items4;
  let items5;
  let items7;
  let items8;
  let items9;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
  let ref3;
  let subscriptionDetails;
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ onClose, entitlements, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = userHasSubscription);
  ({ subscriptionDetails, billingInfo, accountCredit, applicationId, premiumFeatureCardOrder } = userHasSubscription);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  let closure_6;
  let ref;
  let ref2;
  FractionalPremiumStates = undefined;
  let sharedValue;
  let promotionMarketingComponent;
  onClose = undefined;
  const tmp = userHasSubscription;
  let tmp2 = analyticsLocations;
  let obj = userHasSubscription(analyticsLocations[10]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(userHasSubscription(analyticsLocations[11]).OpenNitroTriggerPoint);
  const tmp4 = onClose();
  let obj2 = userHasSubscription(analyticsLocations[12]);
  navigation = obj2.useNavigation();
  analyticsLocations = navigation(analyticsLocations[13])().analyticsLocations;
  let obj3 = react;
  [c3, c4] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  const obj4 = userHasSubscription(analyticsLocations[14]);
  let top = obj4.useYouBarSettingsCustomHeaderPaddingTop();
  const rect = navigation(analyticsLocations[15])();
  const bottom = rect.bottom;
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  const tmp6Result = navigation(tmp2[16]);
  const config = tmp6Result.useConfig({ location: "PremiumMarketingPage" });
  ({ enabled, showAfterLastCard: c5 } = config);
  closure_6 = tmp9;
  ref = obj3.useRef(0);
  ref2 = obj3.useRef(0);
  FractionalPremiumStates = obj3.useRef(0);
  const tmpResult = tmp(tmp2[17]);
  sharedValue = tmpResult.useSharedValue(false);
  const callback = obj3.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const y = layout.y;
    ref.current = y;
    ref3.current = y + layout.height;
  }, []);
  const items = [navigation, userHasSubscription];
  const callback1 = obj3.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height;
  }, []);
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = { headerShown: userHasSubscription };
    navigation.setOptions(obj);
  }, items);
  const tmpResult3 = tmp(tmp2[18]);
  promotionMarketingComponent = tmpResult3.usePromotionMarketingComponent(tmp(tmp2[19]).MarketingComponentType.PREMIUM_TAB);
  const items1 = [promotionMarketingComponent];
  const effect = obj3.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent || "premiumTab" !== tmp.properties.properties.oneofKind;
    if (!isDismissed) {
      const obj = DismissibleContentUnsafeUtils;
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const obj2 = DismissibleContentUtils;
      const result = obj2.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId, obj3);
    }
  }, items1);
  if (onClose == null) {
    onClose = () => navigation.pop();
  }
  let tmp16 = !userHasSubscription;
  if (tmp16) {
    const obj5 = {
      style: items2,
      accessibilityLabel: intl.string(tmp(tmp2[24]).t["13/7kX"]),
      source: navigation(tmp2[25]),
      size: tmp(tmp2[23]).CircularIconButton.Sizes.MEDIUM_32,
      iconStyle: tmp4.arrowIcon,
      onPress() {
          return onClose();
        }
    };
    items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    const CircularIconButton = tmp(tmp2[23]).CircularIconButton;
    intl = tmp(tmp2[24]).intl;
    tmp16 = sharedValue(CircularIconButton, obj5);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    const tmp6Result4 = navigation(tmp2[26]);
    hasAccountCreditResult = tmp6Result4.hasAccountCredit(entitlements);
  }
  const tmp19 = navigation(tmp2[27])({ forceFetch: true });
  const tmpResult4 = tmp(tmp2[18]);
  const promotionMarketingComponent1 = tmpResult4.usePromotionMarketingComponent(tmp(tmp2[19]).MarketingComponentType.MARKETING_PAGE_BANNER);
  const items3 = [, , ];
  ({ container: arr4[0], themedBackground: arr4[1] } = tmp4);
  let num = 0;
  if (!userHasSubscription) {
    num = top;
  }
  const obj6 = { style: items3, children: items4 };
  items3[2] = { paddingTop: num };
  items4 = [sharedValue(tmp6(tmp2[28]), {}), , ];
  const obj7 = {
    contentContainerStyle: tmp4.scrollContainer,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      const tmp2 = !c3 && nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      if (tmp2) {
        const obj2 = { location_stack: analyticsLocations };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
        _undefined(true);
      }
      const tmp10 = closure_6;
      if (tmp10) {
        let current;
        const tmp11 = c5;
        if (tmp11) {
          current = ref3.current;
        } else {
          current = ref.current + ref2.current;
        }
        let tmp16 = current > 0;
        set = sharedValue.set;
        if (tmp16) {
          tmp16 = contentOffset.y > current;
        }
        const result = set(tmp16);
      }
    },
    scrollEventThrottle: 0,
    showsVerticalScrollIndicator: false,
    children: items5
  };
  items5 = [tmp16, subscriptionDetails, billingInfo, , , , , , , ];
  let tmp23Result = null;
  const tmp24 = closure_6;
  if (hasAccountCreditResult) {
    const items6 = [tmp4.accountCreditContainer, ];
    const obj8 = { style: items6, children: accountCredit };
    items6[1] = userHasSubscription ? {} : tmp4.accountCreditContainerWithSpacing;
    tmp23Result = tmp23(tmp22, obj8);
  }
  items5[3] = tmp23Result;
  const obj9 = { style: items7 };
  items7 = [userHasSubscription ? tmp4.sectionWithTopMargin : {}, tmp4.sectionWidth];
  items5[4] = sharedValue(navigation(tmp2[30]), obj9);
  let tmp23Result3 = null != promotionMarketingComponent1;
  if (tmp23Result3) {
    tmp23Result3 = "marketingPageBanner" === promotionMarketingComponent1.properties.properties.oneofKind;
  }
  if (tmp23Result3) {
    const obj10 = { style: items8, bannerFields: promotionMarketingComponent1.properties.properties.marketingPageBanner, analyticsPage: "Marketing Page Banner Tile", onPaymentSuccess, onPaymentDismiss, componentId: null, promotionId: null };
    items8 = [, , ];
    ({ sectionWithPadding: arr9[0], sectionWidth: arr9[1] } = tmp4);
    const obj11 = { marginBottom: navigation(tmp2[8]).space.PX_24 };
    items8[2] = obj11;
    ({ id: obj15.componentId, promotionId: obj15.promotionId } = promotionMarketingComponent1);
    const tmp6Result5 = navigation(tmp2[31]);
    tmp23Result3 = tmp23(tmp6Result5, obj10);
  }
  items5[5] = tmp23Result3;
  const obj12 = { style: items9, order: premiumFeatureCardOrder, applicationId, onPaymentSuccess, onPaymentDismiss, onLayout: callback, onFirstCardLayout: callback1 };
  items9 = [, ];
  ({ sectionWithPadding: arr10[0], sectionWidth: arr10[1] } = tmp4);
  items5[6] = sharedValue(navigation(tmp2[32]), obj12);
  const obj13 = { style: items10 };
  items10 = [, ];
  ({ sectionWithTopMargin: arr11[0], sectionWidth: arr11[1] } = tmp4);
  items5[7] = sharedValue(navigation(tmp2[33]), obj13);
  const obj14 = { style: items11, isFractionalOnly: tmp19.fractionalState === FractionalPremiumStates.FP_ONLY };
  items11 = [, , ];
  ({ sectionWithTopMargin: arr12[0], sectionWithPadding: arr12[1], sectionWidth: arr12[2] } = tmp4);
  items5[8] = sharedValue(navigation(tmp2[34]), obj14);
  const items12 = [, , , ];
  ({ sectionWithTopMargin: arr13[0], sectionWithPadding: arr13[1], sectionWidth: arr13[2] } = tmp4);
  let tmp29 = null;
  const tmp6Result6 = navigation(tmp2[35]);
  if (!userHasSubscription && enabled) {
    const _Math = Math;
    tmp29 = { marginBottom: Math.max(bottom, navigation(tmp2[8]).space.PX_16) + 48 };
    const obj16 = { marginBottom: Math.max(bottom, navigation(tmp2[8]).space.PX_16) + 48 };
  }
  const obj17 = { style: items12, showSubscribeButton: !userHasSubscription && !enabled };
  items12[3] = tmp29;
  items5[9] = sharedValue(tmp6Result6, obj17);
  items4[1] = promotionMarketingComponent(tmp24, obj7);
  let tmp23Result4 = null;
  if (!userHasSubscription && enabled) {
    const obj18 = { style: tmp4.sectionWidth, isVisible: sharedValue, backgroundColor: tmp4.themedBackground.backgroundColor };
    tmp23Result4 = tmp23(tmp6(tmp2[36]), obj18);
  }
  items4[2] = tmp23Result4;
  return promotionMarketingComponent(c5, obj6);
};
