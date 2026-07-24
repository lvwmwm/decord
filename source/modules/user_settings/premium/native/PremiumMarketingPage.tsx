// Module ID: 12447
// Function ID: 96574
// Name: items
// Dependencies: [57, 31, 27, 653, 1345, 1851, 33, 4130, 689, 4973, 12397, 12398, 1456, 5462, 7422, 1557, 12448, 3991, 7425, 7429, 3946, 1334, 1336, 12449, 1212, 7535, 3776, 6636, 12450, 9270, 675, 12455, 4126, 12457, 7536, 8059, 12458, 12459, 12476, 12479, 2]
// Exports: default

// Module 12447 (items)
import _slicedToArray from "_slicedToArray";
import Header from "Header";
import get_ActivityIndicator from "calculateFractionalPremiumInfo";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "PremiumPromotionCard";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex" }, scrollContainer: { flexDirection: "column", alignItems: "center", marginTop: 16 } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.arrowIcon = _createForOfIteratorHelperLoose;
let obj1 = { transform: null, position: "absolute", left: 16 };
let items = [{ scaleX: -1 }];
obj1.transform = items;
_createForOfIteratorHelperLoose.backButton = obj1;
_createForOfIteratorHelperLoose.sectionWithTopMargin = { marginTop: 48 };
_createForOfIteratorHelperLoose.sectionWithPadding = { paddingHorizontal: 12 };
_createForOfIteratorHelperLoose.sectionWidth = { maxWidth: 464 };
_createForOfIteratorHelperLoose.accountCreditContainer = { width: "100%" };
_createForOfIteratorHelperLoose.accountCreditContainerWithSpacing = { marginTop: 24, marginBottom: 20 };
_createForOfIteratorHelperLoose.themedBackground = { backgroundColor: require("result").DARK_PRIMARY_700_LIGHT_WHITE_500 };
let obj2 = { backgroundColor: require("result").DARK_PRIMARY_700_LIGHT_WHITE_500 };
_createForOfIteratorHelperLoose.backButtonBackground = { backgroundColor: require("result").TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
_createForOfIteratorHelperLoose.promotionCardHeader = { marginBottom: 16, marginHorizontal: "auto", textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("result").TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

export default function PremiumMarketingPage(userHasSubscription) {
  let accountCredit;
  let applicationId;
  let billingInfo;
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
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj1 = userHasSubscription(analyticsLocations[12]);
  navigation = obj1.useNavigation();
  analyticsLocations = navigation(analyticsLocations[13])().analyticsLocations;
  const tmp4 = callback(React.useState(false), 2);
  callback = tmp4[0];
  React = tmp4[1];
  let obj2 = userHasSubscription(analyticsLocations[14]);
  let top = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  const rect = navigation(analyticsLocations[15])();
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  let obj3 = navigation(analyticsLocations[16]);
  const enabled = obj3.useConfig({ location: "PremiumMarketingPage" }).enabled;
  c5 = tmp5;
  closure_6 = React.useRef(0);
  closure_7 = React.useRef(0);
  let obj4 = userHasSubscription(analyticsLocations[17]);
  sharedValue = obj4.useSharedValue(false);
  callback = React.useCallback((nativeEvent) => {
    closure_6.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items = [navigation, userHasSubscription];
  const callback1 = React.useCallback((nativeEvent) => {
    closure_7.current = nativeEvent.nativeEvent.layout.y + nativeEvent.nativeEvent.layout.height;
  }, []);
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: userHasSubscription });
  }, items);
  let obj5 = userHasSubscription(analyticsLocations[18]);
  promotionMarketingComponent = obj5.usePromotionMarketingComponent(userHasSubscription(analyticsLocations[19]).MarketingComponentType.PREMIUM_TAB);
  const items1 = [promotionMarketingComponent];
  const effect = React.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = userHasSubscription(analyticsLocations[20]);
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(userHasSubscription(analyticsLocations[21]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: sharedValue.AUTO_DISMISS };
      const result = userHasSubscription(analyticsLocations[22]).markSnowflakeBoundDismissibleContentAsDismissed(userHasSubscription(analyticsLocations[21]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
      const obj2 = userHasSubscription(analyticsLocations[22]);
    }
  }, items1);
  if (null == onClose) {
    onClose = (c5, arg1) => navigation.pop();
  }
  let tmp12 = !userHasSubscription;
  if (tmp12) {
    obj = {};
    const items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp2);
    obj.style = items2;
    const intl = userHasSubscription(analyticsLocations[24]).intl;
    obj.accessibilityLabel = intl.string(userHasSubscription(analyticsLocations[24]).t["13/7kX"]);
    obj.source = navigation(analyticsLocations[25]);
    obj.size = userHasSubscription(analyticsLocations[23]).CircularIconButton.Sizes.MEDIUM_32;
    obj.iconStyle = tmp2.arrowIcon;
    obj.onPress = function onPress() {
      return onClose();
    };
    tmp12 = onClose(userHasSubscription(analyticsLocations[23]).CircularIconButton, obj);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    let obj7 = navigation(analyticsLocations[26]);
    hasAccountCreditResult = obj7.hasAccountCredit(entitlements);
  }
  let obj8 = userHasSubscription(analyticsLocations[28]);
  let isEligibleForBogoPromotion = obj8.useIsEligibleForBogoPromotion();
  let obj9 = userHasSubscription(analyticsLocations[18]);
  const promotionMarketingComponent1 = obj9.usePromotionMarketingComponent(userHasSubscription(analyticsLocations[19]).MarketingComponentType.MARKETING_PAGE_BANNER);
  obj = {};
  const items3 = [, , ];
  ({ container: arr4[0], themedBackground: arr4[1] } = tmp2);
  obj1 = {};
  let num5 = 0;
  if (!userHasSubscription) {
    num5 = top;
  }
  obj1.paddingTop = num5;
  items3[2] = obj1;
  obj.style = items3;
  const items4 = [onClose(navigation(analyticsLocations[29]), {}), , ];
  obj2 = {
    contentContainerStyle: tmp2.scrollContainer,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      if (tmp2) {
        let obj = navigation(analyticsLocations[30]);
        obj = { location_stack: analyticsLocations };
        obj.track(ref2.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
        callback(true);
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
    showsVerticalScrollIndicator: false
  };
  const items5 = [tmp12, subscriptionDetails, billingInfo, , , , , , , , , ];
  if (!hasAccountCreditResult) {
    items5[3] = null;
    obj3 = {};
    const items6 = [userHasSubscription ? tmp2.sectionWithTopMargin : {}, tmp2.sectionWidth];
    obj3.style = items6;
    items5[4] = onClose(navigation(analyticsLocations[31]), obj3);
    let tmp31 = isEligibleForBogoPromotion;
    if (isEligibleForBogoPromotion) {
      obj4 = {};
      const items7 = [, ];
      ({ sectionWithPadding: arr9[0], sectionWidth: arr9[1] } = tmp2);
      obj4.style = items7;
      obj5 = { style: tmp2.promotionCardHeader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
      const intl2 = userHasSubscription(analyticsLocations[24]).intl;
      obj5.children = intl2.string(userHasSubscription(analyticsLocations[24]).t["QPC/ee"]);
      obj4.children = onClose(userHasSubscription(analyticsLocations[32]).Text, obj5);
      tmp31 = onClose(c5, obj4);
    }
    items5[5] = tmp31;
    if (isEligibleForBogoPromotion) {
      const obj6 = {};
      const items8 = [, ];
      ({ sectionWithPadding: arr10[0], sectionWidth: arr10[1] } = tmp2);
      obj6.style = items8;
      obj6.applicationId = applicationId;
      obj6.onPaymentSuccess = onPaymentSuccess;
      obj6.onPaymentDismiss = onPaymentDismiss;
      isEligibleForBogoPromotion = onClose(navigation(analyticsLocations[33]), obj6);
    }
    items5[6] = isEligibleForBogoPromotion;
    let tmp39 = null != promotionMarketingComponent1;
    if (tmp39) {
      tmp39 = "marketingPageBanner" === promotionMarketingComponent1.properties.properties.oneofKind;
    }
    if (tmp39) {
      obj7 = {};
      const items9 = [, , ];
      ({ sectionWithPadding: arr11[0], sectionWidth: arr11[1] } = tmp2);
      obj8 = { marginBottom: navigation(analyticsLocations[8]).space.PX_24 };
      items9[2] = obj8;
      obj7.style = items9;
      obj7.bannerFields = promotionMarketingComponent1.properties.properties.marketingPageBanner;
      obj7.analyticsPage = "Marketing Page Banner Tile";
      obj7.onPaymentSuccess = onPaymentSuccess;
      obj7.onPaymentDismiss = onPaymentDismiss;
      obj7.componentId = promotionMarketingComponent1.id;
      tmp39 = onClose(navigation(analyticsLocations[34]), obj7);
      const tmp43 = navigation(analyticsLocations[34]);
    }
    items5[7] = tmp39;
    obj9 = {};
    const items10 = [, ];
    ({ sectionWithPadding: arr12[0], sectionWidth: arr12[1] } = tmp2);
    obj9.style = items10;
    obj9.order = premiumFeatureCardOrder;
    obj9.applicationId = applicationId;
    obj9.onPaymentSuccess = onPaymentSuccess;
    obj9.onPaymentDismiss = onPaymentDismiss;
    obj9.onLayout = callback;
    obj9.onFirstCardLayout = callback1;
    items5[8] = onClose(navigation(analyticsLocations[35]), obj9);
    const obj10 = {};
    const items11 = [, ];
    ({ sectionWithTopMargin: arr13[0], sectionWidth: arr13[1] } = tmp2);
    obj10.style = items11;
    items5[9] = onClose(navigation(analyticsLocations[36]), obj10);
    const obj11 = {};
    const items12 = [, , ];
    ({ sectionWithTopMargin: arr14[0], sectionWithPadding: arr14[1], sectionWidth: arr14[2] } = tmp2);
    obj11.style = items12;
    obj11.isFractionalOnly = tmp20.fractionalState === promotionMarketingComponent.FP_ONLY;
    items5[10] = onClose(navigation(analyticsLocations[37]), obj11);
    const obj12 = {};
    const items13 = [, , , ];
    ({ sectionWithTopMargin: arr15[0], sectionWithPadding: arr15[1], sectionWidth: arr15[2] } = tmp2);
    let tmp49 = null;
    if (tmp5) {
      const obj13 = {};
      const _Math = Math;
      obj13.marginBottom = Math.max(rect.bottom, navigation(analyticsLocations[8]).space.PX_16) + 48;
      tmp49 = obj13;
    }
    items13[3] = tmp49;
    obj12.style = items13;
    obj12.showSubscribeButton = !userHasSubscription && !enabled;
    items5[11] = onClose(navigation(analyticsLocations[38]), obj12);
    obj2.children = items5;
    items4[1] = tmp25(tmp26, obj2);
    let tmp53 = null;
    if (tmp5) {
      const obj14 = { style: tmp2.sectionWidth, isVisible: sharedValue, backgroundColor: tmp2.themedBackground.backgroundColor };
      tmp53 = onClose(navigation(analyticsLocations[39]), obj14);
    }
    items4[2] = tmp53;
    obj.children = items4;
    return closure_11(c5, obj);
  } else {
    const obj15 = {};
    const items14 = [tmp2.accountCreditContainer, userHasSubscription ? {} : tmp2.accountCreditContainerWithSpacing];
    obj15.style = items14;
    obj15.children = accountCredit;
    onClose(c5, obj15);
  }
};
