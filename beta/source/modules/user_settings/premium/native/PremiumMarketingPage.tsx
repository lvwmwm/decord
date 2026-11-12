// Module ID: 15663
// Function ID: 15664
// Name: PremiumMarketingPage
// Dependencies: [32, 19, 17, 1385, 1072, 5016, 21, 5170, 575, 6866, 15664, 15656, 15657, 1499, 7420, 15658, 1627, 15665, 1652, 15617, 10762, 5202, 5003, 5004, 15508, 1113, 14100, 2171, 504, 7736, 8632, 15666, 15667, 15620, 15670, 10061, 15675, 15680, 15697, 7262, 1252, 15700, 2]
// Exports: default

// Module 15663 (PremiumMarketingPage)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 5004 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5202 */;
import LegacyTokens from "LegacyTokens" /* 6866 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7420 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 15620 */;
import NitroMobileRefreshExperiment from "NitroMobileRefreshExperiment" /* 15664 */;
import PremiumMarketingFloatingSubscribeExperimentDefault from "PremiumMarketingFloatingSubscribeExperiment" /* 15665 */;
import PlanSelectHeaderDefault from "PlanSelectHeader" /* 15666 */;
import HeaderDefault from "Header" /* 15667 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let navigation, set;

let c10;
let closure_12;
let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function NitroMobileRefreshGate(children) {
  children = children.children;
  const obj = NitroMobileRefreshExperiment;
  const obj2 = { children: children(obj.useIsNitroMobileRefreshEnabled("PremiumMarketingPage")) };
  return unpackModuleId(authStore, obj2);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ Fragment: c10, jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex" }, scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 }, arrowIcon: obj2, backButton: obj3, sectionWithTopMargin: { marginTop: 48 }, sectionWithPadding: { paddingHorizontal: 12 }, planSelectCardsSection: obj4, sectionWidth: { maxWidth: 464 }, accountCreditContainer: { width: "100%" }, accountCreditContainerWithSpacing: { marginTop: 24, marginBottom: 20 }, themedBackground: obj5, backButtonBackground: obj6 };
obj2 = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { transform: items, position: "absolute", left: 16 };
items = [{ scaleX: -1 }];
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: LegacyTokens.DARK_PRIMARY_700_LIGHT_WHITE_500 };
obj6 = { backgroundColor: LegacyTokens.TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
  let _undefined;
  let applicationId;
  let c11;
  let c12;
  let children;
  let closure_5;
  let closure_6;
  let entitlements;
  let intl;
  let isFullScreenPresentation;
  let items2;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ subscriptionDetails: importDefault, billingInfo: dependencyMap, accountCredit: _slicedToArray, applicationId: react, onClose, premiumFeatureCardOrder: closure_5, entitlements, onPaymentSuccess: closure_6, onPaymentDismiss: UserStore, isFullScreenPresentation } = userHasSubscription);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  c11 = undefined;
  c12 = undefined;
  let bottom;
  let enabled;
  let showAfterLastCard;
  let closure_16;
  let ref;
  let ref2;
  let ref3;
  let sharedValue;
  let onLayout;
  let onFirstCardLayout;
  let promotionMarketingComponent;
  onClose = undefined;
  let closure_25;
  let c26;
  let flag;
  let properties;
  let tmp = userHasSubscription;
  let tmp2 = dependencyMap;
  let obj = userHasSubscription(15656);
  const commonTriggerPoint = obj.useCommonTriggerPoint(userHasSubscription(15657).OpenNitroTriggerPoint);
  const tmp4 = bottom();
  let closure_8 = tmp4;
  let obj2 = userHasSubscription(1499);
  navigation = obj2.useNavigation();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj3 = react;
  [c11, c12] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  let obj4 = userHasSubscription(15658);
  let top = obj4.useYouBarSettingsCustomHeaderPaddingTop();
  const rect = useSafeAreaInsetsDefault();
  bottom = rect.bottom;
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  const tmp6Result = PremiumMarketingFloatingSubscribeExperimentDefault;
  const config = tmp6Result.useConfig({ location: "PremiumMarketingPage" });
  enabled = config.enabled;
  showAfterLastCard = config.showAfterLastCard;
  let tmp9 = !userHasSubscription && enabled;
  closure_16 = tmp9;
  ref = obj3.useRef(0);
  ref2 = obj3.useRef(0);
  ref3 = obj3.useRef(0);
  const tmpResult = tmp(1652);
  sharedValue = tmpResult.useSharedValue(false);
  onLayout = obj3.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const y = layout.y;
    ref.current = y;
    ref3.current = y + layout.height;
  }, []);
  onFirstCardLayout = obj3.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height;
  }, []);
  let items = [navigation, userHasSubscription];
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = { headerShown: userHasSubscription };
    navigation.setOptions(obj);
  }, items);
  const tmpResult6 = tmp(15617);
  promotionMarketingComponent = tmpResult6.usePromotionMarketingComponent(tmp(10762).MarketingComponentType.PREMIUM_TAB);
  let items1 = [promotionMarketingComponent];
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
  let tmp14 = !userHasSubscription;
  if (tmp14) {
    const obj5 = {
      style: items2,
      accessibilityLabel: intl.string(tmp(1113).t["13/7kX"]),
      source: tmp6(14100),
      size: tmp(15508).CircularIconButton.Sizes.MEDIUM_32,
      iconStyle: tmp4.arrowIcon,
      onPress() {
          return onClose();
        }
    };
    items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    const CircularIconButton = tmp(15508).CircularIconButton;
    intl = tmp(1113).intl;
    tmp14 = c11(CircularIconButton, obj5);
  }
  closure_25 = tmp14;
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    const tmp6Result2 = PremiumUtilsDefault;
    hasAccountCreditResult = tmp6Result2.hasAccountCredit(entitlements);
  }
  c26 = hasAccountCreditResult;
  let items3 = [UserStore];
  const tmpResult7 = tmp(504);
  const stateFromStores = tmpResult7.useStateFromStores(items3, () => UserStore.getCurrentUser());
  flag = undefined;
  if (stateFromStores != null) {
    flag = stateFromStores.isFractionalPremiumWithNoStandardSub();
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult8 = tmp(15617);
  properties = tmpResult8.usePromotionMarketingComponent(tmp(10762).MarketingComponentType.MARKETING_PAGE_BANNER);
  const tmpResult9 = tmp(7736);
  const premiumTrialOffer = tmpResult9.usePremiumTrialOffer();
  let items4 = [, , ];
  ({ container: arr5[0], themedBackground: arr5[1] } = tmp4);
  let num = 0;
  const tmpResult10 = tmp(8632);
  const premiumDiscountOffer = tmpResult10.usePremiumDiscountOffer();
  const tmp20 = order;
  const tmp19 = c12;
  if (!userHasSubscription) {
    num = top;
  }
  function renderScrollContent(arg0) {
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let tmp29Result;
    let tmp3;
    let tmp32;
    let tmp40;
    let tmp42;
    let tmp54;
    const tmp = authStore2;
    const tmp2 = authStore;
    if (arg0) {
      const obj = { style: closure_8.sectionWidth, onBack: onClose };
      tmp3 = unpackModuleId(PlanSelectHeaderDefault, obj);
    } else {
      tmp3 = closure_25;
    }
    const items = [tmp3, importDefault, dependencyMap, , , , , , , ];
    let tmp9 = null;
    if (c26) {
      const items1 = [closure_8.accountCreditContainer, ];
      const obj2 = { style: items1, children: _slicedToArray };
      items1[1] = userHasSubscription ? {} : closure_8.accountCreditContainerWithSpacing;
      tmp9 = unpackModuleId(hasOwnProperty, obj2);
    }
    items[3] = tmp9;
    let tmp13Result = null;
    if (!arg0) {
      let sectionWithTopMargin;
      const tmp13 = unpackModuleId;
      const tmp16 = HeaderDefault;
      if (userHasSubscription) {
        sectionWithTopMargin = closure_8.sectionWithTopMargin;
      } else {
        sectionWithTopMargin = {};
      }
      const obj3 = { style: items2 };
      items2 = [sectionWithTopMargin, closure_8.sectionWidth];
      tmp13Result = tmp13(tmp16, obj3);
    }
    items[4] = tmp13Result;
    let tmp21 = null != properties && "marketingPageBanner" === tmp20.properties.properties.oneofKind;
    if (tmp21) {
      const obj4 = { style: items3, bannerFields: properties.properties.properties.marketingPageBanner, analyticsPage: "Marketing Page Banner Tile", onPaymentSuccess, onPaymentDismiss: UserStore, componentId: null, promotionId: null };
      items3 = [, , ];
      ({ sectionWithPadding: arr4[0], sectionWidth: arr4[1] } = closure_8);
      const obj6 = { marginBottom: nativeDefault.space.PX_24 };
      items3[2] = obj6;
      ({ id: obj5.componentId, promotionId: obj5.promotionId } = properties);
      const tmp25 = MarketingPageBannerTileDefault;
      tmp21 = unpackModuleId(tmp25, obj4);
    }
    items[5] = tmp21;
    if (arg0) {
      const obj7 = { style: items4, order, applicationId: react, onPaymentSuccess, onPaymentDismiss: UserStore, onLayout, onFirstCardLayout };
      items4 = [, ];
      ({ planSelectCardsSection: arr6[0], sectionWidth: arr6[1] } = closure_8);
      tmp29Result = tmp29(tmp30(15670), obj7);
      tmp40 = tmp29;
      tmp42 = tmp30;
      tmp32 = closure_8;
    } else {
      tmp32 = closure_8;
      const obj8 = { style: items5, order, applicationId: react, onPaymentSuccess, onPaymentDismiss: UserStore, onLayout, onFirstCardLayout };
      items5 = [, ];
      ({ sectionWithPadding: arr5[0], sectionWidth: arr5[1] } = closure_8);
      tmp29Result = tmp29(tmp30(10061), obj8);
      tmp40 = tmp29;
      tmp42 = tmp30;
    }
    items[6] = tmp29Result;
    const obj9 = { style: items6 };
    items6 = [, ];
    ({ sectionWithTopMargin: arr7[0], sectionWidth: arr7[1] } = tmp32);
    items[7] = tmp40(tmp42(15675), obj9);
    const obj10 = { style: items7, isFractionalOnly: flag };
    items7 = [, , ];
    ({ sectionWithTopMargin: arr8[0], sectionWithPadding: arr8[1], sectionWidth: arr8[2] } = tmp32);
    items[8] = tmp40(tmp42(15680), obj10);
    const items8 = [, , , ];
    ({ sectionWithTopMargin: arr9[0], sectionWithPadding: arr9[1], sectionWidth: arr9[2] } = tmp32);
    let tmp51 = null;
    const tmp42Result = tmp42(15697);
    if (closure_16) {
      const _Math = Math;
      tmp51 = { marginBottom: Math.max(bottom, tmp42(575).space.PX_16) + 48 };
      const obj11 = { marginBottom: Math.max(bottom, tmp42(575).space.PX_16) + 48 };
    }
    const obj12 = { style: items8, showSubscribeButton: tmp54 };
    items8[3] = tmp51;
    const obj13 = { children: items };
    tmp54 = !userHasSubscription && !enabled;
    items[9] = tmp40(tmp42Result, obj12);
    return tmp(tmp2, obj13);
  }
  let obj6 = { style: items4, children: null };
  items4[2] = { paddingTop: num };
  let tmp21 = c11;
  let items5 = [c11(tmp6(7262), {}), , ];
  let obj7 = {
    contentContainerStyle: tmp4.scrollContainer,
    onScroll: function handleScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      const tmp2 = !c11 && nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      if (tmp2) {
        const obj2 = { location_stack: analyticsLocations };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
        _undefined(true);
      }
      const tmp10 = closure_16;
      if (tmp10) {
        let current;
        const tmp11 = showAfterLastCard;
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
    children: null
  };
  if (!userHasSubscription) {
    if (null == premiumTrialOffer) {
      let renderScrollContentResult;
      if (null == premiumDiscountOffer) {
        let obj8 = { children: renderScrollContent };
        renderScrollContentResult = tmp21(enabled, obj8);
      }
      obj7.children = renderScrollContentResult;
      items5[1] = tmp21(tmp22, obj7);
      let tmp21Result2 = null;
      if (tmp9) {
        let obj9 = { style: tmp4.sectionWidth, isVisible: sharedValue, backgroundColor: tmp4.themedBackground.backgroundColor };
        tmp21Result2 = tmp21(tmp6(15700), obj9);
      }
      items5[2] = tmp21Result2;
      obj6.children = items5;
      return tmp19(tmp20, obj6);
    }
  }
  renderScrollContentResult = renderScrollContent(false);
};
