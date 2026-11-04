// Module ID: 14808
// Function ID: 14809
// Name: PremiumMarketingPage
// Dependencies: [32, 19, 17, 1392, 1087, 4852, 21, 5003, 587, 6739, 558, 576, 14801, 14802, 1505, 7285, 14803, 1633, 14809, 5084, 14763, 10527, 5033, 4839, 4840, 1267, 14652, 1128, 13203, 2053, 504, 7125, 14810, 14766, 9825, 14813, 14818, 14835, 14838, 2]

// Module 14808 (PremiumMarketingPage)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import dismissible_content from "dismissible_content" /* 4839 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4840 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4852 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5033 */;
import LegacyTokens from "LegacyTokens" /* 6739 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumMarketingPage(userHasSubscription) {
  let accountCredit;
  let analyticsLocations;
  let applicationId;
  let billingInfo;
  let closure_4;
  let enabled;
  let entitlements;
  let et;
  let first;
  let first1;
  let isFullScreenPresentation;
  let items1;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
  let showAfterLastCard;
  let subscriptionDetails;
  const tmp = userHasSubscription;
  let tmp2 = analyticsLocations;
  let obj = userHasSubscription(analyticsLocations[11]);
  const cResult = obj.c(108);
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ subscriptionDetails, billingInfo, accountCredit, applicationId, onClose, premiumFeatureCardOrder, entitlements, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = userHasSubscription);
  const tmp4 = undefined !== isFullScreenPresentation && isFullScreenPresentation;
  const tmpResult = tmp(tmp2[12]);
  const commonTriggerPoint = tmpResult.useCommonTriggerPoint(tmp(tmp2[13]).OpenNitroTriggerPoint);
  closure_12();
  const tmpResult5 = tmp(tmp2[14]);
  navigation = tmpResult5.useNavigation();
  analyticsLocations = navigation(tmp2[15])().analyticsLocations;
  const tmp9 = first(react.useState(false), 2);
  first = tmp9[0];
  react = tmp9[1];
  const tmpResult6 = tmp(tmp2[16]);
  let top = tmpResult6.useYouBarSettingsCustomHeaderPaddingTop();
  let tmp11 = navigation(tmp2[17])();
  const tmp8 = navigation;
  if (tmp4) {
    top = tmp11.top;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "PremiumMarketingPage" };
    cResult[0] = obj2;
    first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const tmp8Result = tmp8(tmp2[18]);
  const config = tmp8Result.useConfig(first1);
  ({ enabled, showAfterLastCard } = config);
  let closure_6 = tmp14;
  const ref = obj4.useRef(0);
  const ref2 = obj4.useRef(0);
  const ref3 = obj4.useRef(0);
  const tmpResult7 = tmp(tmp2[19]);
  const sharedValue = tmpResult7.useSharedValue(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const y = layout.y;
        ref.current = y;
        ref3.current = y + layout.height;
      }
    }
    cResult[1] = V;
    let tmp16 = V;
  } else {
    class V {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const y = layout.y;
        ref.current = y;
        ref3.current = y + layout.height;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const y = layout.y;
        ref.current = y;
        ref3.current = y + layout.height;
      }
    }
    cResult[2] = tmp18;
  } else {
    class V {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const y = layout.y;
        ref.current = y;
        ref3.current = y + layout.height;
      }
    }
  }
  if (cResult[3] === navigation) {
    let tmp22;
    let tmp21;
    class V {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const y = layout.y;
        ref.current = y;
        ref3.current = y + layout.height;
      }
    }
    const layoutEffect = obj4.useLayoutEffect(et, items1);
    const tmpResult8 = tmp(tmp2[20]);
    const promotionMarketingComponent = tmpResult8.usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.PREMIUM_TAB);
    if (cResult[7] !== promotionMarketingComponent) {
      class V {
        constructor(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const y = layout.y;
          ref.current = y;
          ref3.current = y + layout.height;
        }
      }
      const items = [promotionMarketingComponent];
      cResult[7] = promotionMarketingComponent;
      cResult[8] = tmp23;
      cResult[9] = items;
      tmp22 = items;
      tmp21 = tmp23;
    } else {
      class V {
        constructor(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const y = layout.y;
          ref.current = y;
          ref3.current = y + layout.height;
        }
      }
      tmp22 = cResult[9];
    }
    const effect = obj4.useEffect(tmp21, tmp22);
    if (cResult[10] === analyticsLocations) {
      class V {
        constructor(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const y = layout.y;
          ref.current = y;
          ref3.current = y + layout.height;
        }
      }
    }
    function handleScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      const tmp2 = !first && nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      if (tmp2) {
        const obj2 = { location_stack: analyticsLocations };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
        closure_4(true);
      }
      const tmp10 = closure_6;
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
    }
    cResult[10] = analyticsLocations;
    cResult[11] = first;
    cResult[12] = sharedValue;
    cResult[13] = showAfterLastCard;
    cResult[14] = !userHasSubscription && enabled;
    cResult[15] = handleScroll;
  }
  et = function et() {
    const obj = { headerShown: userHasSubscription };
    navigation.setOptions(obj);
  };
  items1 = [navigation, userHasSubscription];
  cResult[3] = navigation;
  cResult[4] = userHasSubscription;
  cResult[5] = et;
  cResult[6] = items1;
}) : (function PremiumMarketingPage(userHasSubscription) {
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
  let items12;
  let items2;
  let items5;
  let items6;
  let items8;
  let items9;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
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
  let ref3;
  let sharedValue;
  let promotionMarketingComponent;
  onClose = undefined;
  const tmp = userHasSubscription;
  let tmp2 = analyticsLocations;
  let obj = userHasSubscription(analyticsLocations[12]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(userHasSubscription(analyticsLocations[13]).OpenNitroTriggerPoint);
  const tmp4 = onClose();
  let obj2 = userHasSubscription(analyticsLocations[14]);
  navigation = obj2.useNavigation();
  analyticsLocations = navigation(analyticsLocations[15])().analyticsLocations;
  let obj3 = react;
  [c3, c4] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  const obj4 = userHasSubscription(analyticsLocations[16]);
  let top = obj4.useYouBarSettingsCustomHeaderPaddingTop();
  const rect = navigation(analyticsLocations[17])();
  const bottom = rect.bottom;
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  const tmp6Result = navigation(tmp2[18]);
  const config = tmp6Result.useConfig({ location: "PremiumMarketingPage" });
  ({ enabled, showAfterLastCard: c5 } = config);
  closure_6 = tmp9;
  ref = obj3.useRef(0);
  ref2 = obj3.useRef(0);
  ref3 = obj3.useRef(0);
  const tmpResult = tmp(tmp2[19]);
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
  const tmpResult4 = tmp(tmp2[20]);
  promotionMarketingComponent = tmpResult4.usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.PREMIUM_TAB);
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
      accessibilityLabel: intl.string(tmp(tmp2[27]).t["13/7kX"]),
      source: navigation(tmp2[28]),
      size: tmp(tmp2[26]).CircularIconButton.Sizes.MEDIUM_32,
      iconStyle: tmp4.arrowIcon,
      onPress() {
          return onClose();
        }
    };
    items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    const CircularIconButton = tmp(tmp2[26]).CircularIconButton;
    intl = tmp(tmp2[27]).intl;
    tmp16 = sharedValue(CircularIconButton, obj5);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    const tmp6Result4 = navigation(tmp2[29]);
    hasAccountCreditResult = tmp6Result4.hasAccountCredit(entitlements);
  }
  const items3 = [ref];
  const tmpResult5 = tmp(tmp2[30]);
  const stateFromStores = tmpResult5.useStateFromStores(items3, () => ref.getCurrentUser());
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isFractionalPremiumWithNoStandardSub();
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult6 = tmp(tmp2[20]);
  const promotionMarketingComponent1 = tmpResult6.usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.MARKETING_PAGE_BANNER);
  const items4 = [, , ];
  ({ container: arr5[0], themedBackground: arr5[1] } = tmp4);
  let num = 0;
  if (!userHasSubscription) {
    num = top;
  }
  const obj6 = { style: items4, children: items5 };
  items4[2] = { paddingTop: num };
  items5 = [sharedValue(tmp6(tmp2[31]), {}), , ];
  const obj7 = {
    contentContainerStyle: tmp4.scrollContainer,
    onScroll: function handleScroll(nativeEvent) {
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
    children: items6
  };
  items6 = [tmp16, subscriptionDetails, billingInfo, , , , , , , ];
  let tmp22Result = null;
  const tmp23 = closure_6;
  if (hasAccountCreditResult) {
    const items7 = [tmp4.accountCreditContainer, ];
    const obj8 = { style: items7, children: accountCredit };
    items7[1] = userHasSubscription ? {} : tmp4.accountCreditContainerWithSpacing;
    tmp22Result = tmp22(tmp21, obj8);
  }
  items6[3] = tmp22Result;
  const obj9 = { style: items8 };
  items8 = [userHasSubscription ? tmp4.sectionWithTopMargin : {}, tmp4.sectionWidth];
  items6[4] = sharedValue(navigation(tmp2[32]), obj9);
  let tmp22Result3 = null != promotionMarketingComponent1;
  if (tmp22Result3) {
    tmp22Result3 = "marketingPageBanner" === promotionMarketingComponent1.properties.properties.oneofKind;
  }
  if (tmp22Result3) {
    const obj10 = { style: items9, bannerFields: promotionMarketingComponent1.properties.properties.marketingPageBanner, analyticsPage: "Marketing Page Banner Tile", onPaymentSuccess, onPaymentDismiss, componentId: null, promotionId: null };
    items9 = [, , ];
    ({ sectionWithPadding: arr10[0], sectionWidth: arr10[1] } = tmp4);
    const obj11 = { marginBottom: navigation(tmp2[8]).space.PX_24 };
    items9[2] = obj11;
    ({ id: obj17.componentId, promotionId: obj17.promotionId } = promotionMarketingComponent1);
    const tmp6Result5 = navigation(tmp2[33]);
    tmp22Result3 = tmp22(tmp6Result5, obj10);
  }
  items6[5] = tmp22Result3;
  const obj12 = { style: items10, order: premiumFeatureCardOrder, applicationId, onPaymentSuccess, onPaymentDismiss, onLayout: callback, onFirstCardLayout: callback1 };
  items10 = [, ];
  ({ sectionWithPadding: arr11[0], sectionWidth: arr11[1] } = tmp4);
  items6[6] = sharedValue(navigation(tmp2[34]), obj12);
  const obj13 = { style: items11 };
  items11 = [, ];
  ({ sectionWithTopMargin: arr12[0], sectionWidth: arr12[1] } = tmp4);
  items6[7] = sharedValue(navigation(tmp2[35]), obj13);
  const obj14 = { style: items12, isFractionalOnly: flag };
  items12 = [, , ];
  ({ sectionWithTopMargin: arr13[0], sectionWithPadding: arr13[1], sectionWidth: arr13[2] } = tmp4);
  items6[8] = sharedValue(navigation(tmp2[36]), obj14);
  const items13 = [, , , ];
  ({ sectionWithTopMargin: arr14[0], sectionWithPadding: arr14[1], sectionWidth: arr14[2] } = tmp4);
  let tmp28 = null;
  const tmp6Result6 = navigation(tmp2[37]);
  if (!userHasSubscription && enabled) {
    const _Math = Math;
    tmp28 = { marginBottom: Math.max(bottom, navigation(tmp2[8]).space.PX_16) + 48 };
    const obj15 = { marginBottom: Math.max(bottom, navigation(tmp2[8]).space.PX_16) + 48 };
  }
  const obj16 = { style: items13, showSubscribeButton: !userHasSubscription && !enabled };
  items13[3] = tmp28;
  items6[9] = sharedValue(tmp6Result6, obj16);
  items5[1] = promotionMarketingComponent(tmp23, obj7);
  let tmp22Result4 = null;
  if (!userHasSubscription && enabled) {
    const obj18 = { style: tmp4.sectionWidth, isVisible: sharedValue, backgroundColor: tmp4.themedBackground.backgroundColor };
    tmp22Result4 = tmp22(tmp6(tmp2[38]), obj18);
  }
  items5[2] = tmp22Result4;
  return promotionMarketingComponent(c5, obj6);
});
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default tmp5;
