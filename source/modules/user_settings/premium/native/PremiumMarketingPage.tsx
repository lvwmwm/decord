// Module ID: 12494
// Function ID: 12495
// Name: PremiumMarketingPage
// Dependencies: [32, 19, 17, 676, 1369, 1876, 21, 4189, 712, 5030, 12440, 12441, 1480, 5515, 6560, 1581, 12495, 4050, 6563, 6567, 4005, 1358, 1360, 12496, 1236, 6684, 3835, 5848, 12497, 9230, 698, 12502, 4185, 12504, 6685, 9322, 12505, 12506, 12523, 12526, 2]
// Exports: default

// Module 12494 (PremiumMarketingPage)
import Text from "Text";
import MarketingComponentType from "MarketingComponentType";
import get_ActivityIndicator from "module_4050";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "DismissibleContent";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let closure_6;
let unpackModuleId;
const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: { display: "flex" }, scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 }, arrowIcon: null, backButton: null, sectionWithTopMargin: null, sectionWithPadding: null, sectionWidth: null, accountCreditContainer: null, accountCreditContainerWithSpacing: null, themedBackground: null, backButtonBackground: null, promotionCardHeader: null };
createCacheKey = { tintColor: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[2] = createCacheKey;
let items = [{ scaleX: -1 }];
createCacheKey[3] = { transform: items, position: "absolute", left: 16 };
createCacheKey[4] = { marginTop: 48 };
createCacheKey[5] = { paddingHorizontal: 12 };
createCacheKey[6] = { maxWidth: 464 };
createCacheKey[7] = { width: "100%" };
createCacheKey[8] = { marginTop: 24, marginBottom: 20 };
createCacheKey[9] = { backgroundColor: require("result").DARK_PRIMARY_700_LIGHT_WHITE_500 };
let obj1 = { backgroundColor: require("result").DARK_PRIMARY_700_LIGHT_WHITE_500 };
createCacheKey[10] = { backgroundColor: require("result").TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
createCacheKey[11] = { marginBottom: 16, marginHorizontal: "auto", textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { backgroundColor: require("result").TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
  let accountCredit;
  let applicationId;
  let billingInfo;
  let c3;
  let c4;
  let entitlements;
  let isFullScreenPresentation;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
  let subscriptionDetails;
  userHasSubscription = userHasSubscription.userHasSubscription;
  ({ applicationId, onClose, entitlements, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = userHasSubscription);
  ({ subscriptionDetails, billingInfo, accountCredit, premiumFeatureCardOrder } = userHasSubscription);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let navigation;
  let analyticsLocations;
  let callback;
  let React;
  let c5;
  let closure_6;
  let closure_7;
  let sharedValue;
  let promotionMarketingComponent;
  onClose = undefined;
  let obj = userHasSubscription(analyticsLocations[10]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(userHasSubscription(analyticsLocations[11]).OpenNitroTriggerPoint);
  const tmp4 = createCacheKey();
  let obj1 = userHasSubscription(analyticsLocations[12]);
  navigation = obj1.useNavigation();
  analyticsLocations = navigation(analyticsLocations[13])().analyticsLocations;
  let obj2 = React;
  [c3, c4] = callback(React.useState(false), 2);
  let obj3 = userHasSubscription(analyticsLocations[14]);
  let top = obj3.useYouBarSettingsCustomHeaderPaddingTop();
  const rect = navigation(analyticsLocations[15])();
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  let tmp6Result = tmp6(tmp2[16]);
  const enabled = tmp6Result.useConfig({ location: "PremiumMarketingPage" }).enabled;
  let tmp8 = !userHasSubscription;
  if (!userHasSubscription) {
    tmp8 = enabled;
  }
  c5 = tmp8;
  closure_6 = obj2.useRef(0);
  closure_7 = obj2.useRef(0);
  let tmpResult = tmp(tmp2[17]);
  sharedValue = tmpResult.useSharedValue(false);
  callback = obj2.useCallback((nativeEvent) => {
    closure_6.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items = [navigation, userHasSubscription];
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_7.current = nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height;
  }, []);
  const layoutEffect = obj2.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: userHasSubscription });
  }, items);
  tmpResult = tmp(tmp2[18]);
  promotionMarketingComponent = tmpResult.usePromotionMarketingComponent(tmp(tmp2[19]).MarketingComponentType.PREMIUM_TAB);
  const items1 = [promotionMarketingComponent];
  const effect = obj2.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== tmp.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = userHasSubscription(analyticsLocations[20]);
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(userHasSubscription(analyticsLocations[21]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: null };
      obj[0] = sharedValue.AUTO_DISMISS;
      const result = userHasSubscription(analyticsLocations[22]).markSnowflakeBoundDismissibleContentAsDismissed(userHasSubscription(analyticsLocations[21]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId, obj);
      const obj2 = userHasSubscription(analyticsLocations[22]);
    }
  }, items1);
  if (onClose == null) {
    onClose = (CircularIconButton, arg1) => navigation.pop();
  }
  let tmp15 = !userHasSubscription;
  if (!userHasSubscription) {
    obj = { style: null, accessibilityLabel: null, source: null, size: null, iconStyle: null, onPress: null };
    const items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp4);
    obj[0] = items2;
    const intl = tmp(tmp2[24]).intl;
    obj[1] = intl.string(tmp(tmp2[24]).t["13/7kX"]);
    obj[2] = tmp6(tmp2[25]);
    obj[3] = tmp(tmp2[23]).CircularIconButton.Sizes.MEDIUM_32;
    obj[4] = tmp4.arrowIcon;
    obj[5] = function onPress() {
      return onClose();
    };
    tmp15 = onClose(tmp(tmp2[23]).CircularIconButton, obj);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    tmp6Result = tmp6(tmp2[26]);
    hasAccountCreditResult = tmp6Result.hasAccountCredit(entitlements);
  }
  const tmp7 = callback(React.useState(false), 2);
  const tmp18 = navigation(analyticsLocations[27])({ forceFetch: true });
  let isEligibleForBogoPromotion = userHasSubscription(analyticsLocations[28]).useIsEligibleForBogoPromotion();
  const tmpResult1 = userHasSubscription(analyticsLocations[28]);
  const promotionMarketingComponent1 = userHasSubscription(analyticsLocations[18]).usePromotionMarketingComponent(tmp(tmp2[19]).MarketingComponentType.MARKETING_PAGE_BANNER);
  const items3 = [, , ];
  ({ container: arr4[0], themedBackground: arr4[1] } = tmp4);
  let num = 0;
  if (!userHasSubscription) {
    num = top;
  }
  obj = { style: items3, children: null };
  items3[2] = { paddingTop: num };
  const items4 = [onClose(navigation(analyticsLocations[29]), {}), , ];
  obj1 = {
    contentContainerStyle: tmp4.scrollContainer,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      let tmp2 = !c3;
      if (!c3) {
        tmp2 = nativeEvent.layoutMeasurement.height + contentOffset.y >= tmp.height;
      }
      if (tmp2) {
        let obj = navigation(analyticsLocations[30]);
        obj = { location_stack: null };
        obj[0] = analyticsLocations;
        obj.track(ref2.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
        _undefined(true);
      }
      if (c5) {
        const sum = ref.current + ref2.current;
        let tmp14 = sum > 0;
        if (tmp14) {
          tmp14 = contentOffset.y > sum;
        }
        const result = sharedValue.set(tmp14);
      }
    },
    scrollEventThrottle: 0,
    showsVerticalScrollIndicator: false,
    children: null
  };
  const items5 = [tmp15, subscriptionDetails, billingInfo, , , , , , , , , ];
  if (!hasAccountCreditResult) {
    items5[3] = null;
    obj2 = { style: null };
    const items6 = [userHasSubscription ? tmp4.sectionWithTopMargin : {}, tmp4.sectionWidth];
    obj2[0] = items6;
    items5[4] = tmp23(tmp6(tmp2[31]), obj2);
    let tmp23Result = isEligibleForBogoPromotion;
    if (isEligibleForBogoPromotion) {
      obj3 = { style: null, children: null };
      const items7 = [, ];
      ({ sectionWithPadding: arr9[0], sectionWidth: arr9[1] } = tmp4);
      obj3[0] = items7;
      const obj4 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      obj4[0] = tmp4.promotionCardHeader;
      const intl2 = tmp(tmp2[24]).intl;
      obj4[3] = intl2.string(tmp(tmp2[24]).t["QPC/ee"]);
      obj3[1] = tmp23(tmp(tmp2[32]).Text, obj4);
      tmp23Result = tmp23(tmp22, obj3);
    }
    items5[5] = tmp23Result;
    if (isEligibleForBogoPromotion) {
      const obj5 = { style: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
      const items8 = [, ];
      ({ sectionWithPadding: arr10[0], sectionWidth: arr10[1] } = tmp4);
      obj5[0] = items8;
      obj5[1] = applicationId;
      obj5[2] = onPaymentSuccess;
      obj5[3] = onPaymentDismiss;
      isEligibleForBogoPromotion = tmp23(tmp6(tmp2[33]), obj5);
    }
    items5[6] = isEligibleForBogoPromotion;
    tmp23Result = null != promotionMarketingComponent1;
    if (tmp23Result) {
      tmp23Result = "marketingPageBanner" === promotionMarketingComponent1.properties.properties.oneofKind;
    }
    if (tmp23Result) {
      const obj6 = { style: null, bannerFields: null, analyticsPage: "Marketing Page Banner Tile", onPaymentSuccess: null, onPaymentDismiss: null, componentId: null };
      const items9 = [, , ];
      ({ sectionWithPadding: arr11[0], sectionWidth: arr11[1] } = tmp4);
      const obj7 = { marginBottom: null };
      obj7[0] = tmp6(tmp2[8]).space.PX_24;
      items9[2] = obj7;
      obj6[0] = items9;
      obj6[1] = promotionMarketingComponent1.properties.properties.marketingPageBanner;
      obj6[3] = onPaymentSuccess;
      obj6[4] = onPaymentDismiss;
      obj6[5] = promotionMarketingComponent1.id;
      tmp23Result = tmp23(tmp6(tmp2[34]), obj6);
      const tmp6Result1 = tmp6(tmp2[34]);
    }
    items5[7] = tmp23Result;
    const obj8 = { style: null, order: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null, onLayout: null, onFirstCardLayout: null };
    const items10 = [, ];
    ({ sectionWithPadding: arr12[0], sectionWidth: arr12[1] } = tmp4);
    obj8[0] = items10;
    obj8[1] = premiumFeatureCardOrder;
    obj8[2] = applicationId;
    obj8[3] = onPaymentSuccess;
    obj8[4] = onPaymentDismiss;
    obj8[5] = callback;
    obj8[6] = callback1;
    items5[8] = tmp23(tmp6(tmp2[35]), obj8);
    const obj9 = { style: null };
    const items11 = [, ];
    ({ sectionWithTopMargin: arr13[0], sectionWidth: arr13[1] } = tmp4);
    obj9[0] = items11;
    items5[9] = tmp23(tmp6(tmp2[36]), obj9);
    const obj10 = { style: null, isFractionalOnly: null };
    const items12 = [, , ];
    ({ sectionWithTopMargin: arr14[0], sectionWithPadding: arr14[1], sectionWidth: arr14[2] } = tmp4);
    obj10[0] = items12;
    obj10[1] = tmp18.fractionalState === promotionMarketingComponent.FP_ONLY;
    items5[10] = tmp23(tmp6(tmp2[37]), obj10);
    const items13 = [, , , ];
    ({ sectionWithTopMargin: arr15[0], sectionWithPadding: arr15[1], sectionWidth: arr15[2] } = tmp4);
    let tmp31 = null;
    if (tmp8) {
      const obj11 = { marginBottom: null };
      const _Math = Math;
      obj11[0] = Math.max(rect.bottom, tmp6(tmp2[8]).space.PX_16) + 48;
      tmp31 = obj11;
    }
    const obj12 = { style: null, showSubscribeButton: null };
    items13[3] = tmp31;
    obj12[0] = items13;
    let tmp33 = !userHasSubscription;
    if (!userHasSubscription) {
      tmp33 = !enabled;
    }
    obj12[1] = tmp33;
    items5[11] = tmp23(tmp6(tmp2[38]), obj12);
    obj1[4] = items5;
    items4[1] = tmp21(tmp24, obj1);
    let tmp23Result1 = null;
    if (tmp8) {
      const obj13 = { style: null, isVisible: null, backgroundColor: null };
      obj13[0] = tmp4.sectionWidth;
      obj13[1] = sharedValue;
      obj13[2] = tmp4.themedBackground.backgroundColor;
      tmp23Result1 = tmp23(tmp6(tmp2[39]), obj13);
    }
    items4[2] = tmp23Result1;
    obj[1] = items4;
    return tmp21(tmp22, obj);
  } else {
    const items14 = [tmp4.accountCreditContainer, ];
    const obj14 = { style: null, children: null };
    items14[1] = userHasSubscription ? {} : tmp4.accountCreditContainerWithSpacing;
    obj14[0] = items14;
    obj14[1] = accountCredit;
    tmp23(tmp22, obj14);
  }
};
