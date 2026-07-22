// Module ID: 12275
// Function ID: 94095
// Name: items
// Dependencies: []
// Exports: default

// Module 12275 (items)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const FractionalPremiumStates = arg1(dependencyMap[5]).FractionalPremiumStates;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { display: "flex" }, scrollContainer: { 9223372036854775807: 0.0000000000000000000000000000000000000000000000000000000009659784425801879, 9223372036854775807: 15177101141243970000000000000000000000000000000000000000000000000000000000000000000, 0: 15186806633716527000000000000000000000000000000000000000000000000000000000000000000 } };
obj = { tintColor: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
obj.arrowIcon = obj;
const obj1 = { 961631329: false, 102585544: false, 1389626910: false };
const items = [{ scaleX: -1 }];
obj1.transform = items;
obj.backButton = obj1;
obj.sectionWithTopMargin = { marginTop: 48 };
obj.sectionWithPadding = { paddingHorizontal: 12 };
obj.sectionWidth = { maxWidth: 464 };
obj.accountCreditContainer = { width: "100%" };
obj.accountCreditContainerWithSpacing = {};
const tmp3 = arg1(dependencyMap[6]);
obj.themedBackground = { backgroundColor: arg1(dependencyMap[9]).DARK_PRIMARY_700_LIGHT_WHITE_500 };
const obj2 = { backgroundColor: arg1(dependencyMap[9]).DARK_PRIMARY_700_LIGHT_WHITE_500 };
obj.backButtonBackground = { backgroundColor: arg1(dependencyMap[9]).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
obj.promotionCardHeader = {};
let closure_12 = obj.createStyles(obj);
const obj3 = { backgroundColor: arg1(dependencyMap[9]).TIER_0_MARKETING_PAGE_BACK_BUTTON_BG };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingPage.tsx");

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
  const arg1 = userHasSubscription;
  ({ applicationId, onClose, entitlements, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = userHasSubscription);
  ({ subscriptionDetails, billingInfo, accountCredit, premiumFeatureCardOrder } = userHasSubscription);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  let tmp5;
  let closure_6;
  let closure_7;
  let ContentDismissActionType;
  let FractionalPremiumStates;
  onClose = undefined;
  let obj = arg1(dependencyMap[10]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(arg1(dependencyMap[11]).OpenNitroTriggerPoint);
  const tmp2 = callback2();
  let obj1 = arg1(dependencyMap[12]);
  const navigation = obj1.useNavigation();
  importDefault = navigation;
  dependencyMap = importDefault(dependencyMap[13])().analyticsLocations;
  const tmp4 = callback(React.useState(false), 2);
  callback = tmp4[0];
  React = tmp4[1];
  let obj2 = arg1(dependencyMap[14]);
  let top = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  const rect = importDefault(dependencyMap[15])();
  if (isFullScreenPresentation) {
    top = rect.top;
  }
  let obj3 = importDefault(dependencyMap[16]);
  const enabled = obj3.useConfig({ location: "PremiumMarketingPage" }).enabled;
  tmp5 = !userHasSubscription && enabled;
  closure_6 = React.useRef(0);
  closure_7 = React.useRef(0);
  let obj4 = arg1(dependencyMap[17]);
  const sharedValue = obj4.useSharedValue(false);
  ContentDismissActionType = sharedValue;
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
  let obj5 = arg1(dependencyMap[18]);
  const promotionMarketingComponent = obj5.usePromotionMarketingComponent(arg1(dependencyMap[19]).MarketingComponentType.PREMIUM_TAB);
  FractionalPremiumStates = promotionMarketingComponent;
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
    onClose = (CircularIconButton, arg1) => navigation.pop();
  }
  let tmp12 = !userHasSubscription;
  if (tmp12) {
    obj = {};
    const items2 = [, ];
    ({ backButton: arr3[0], backButtonBackground: arr3[1] } = tmp2);
    obj.style = items2;
    const intl = arg1(dependencyMap[24]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[24]).t.13/7kX);
    obj.source = importDefault(dependencyMap[25]);
    obj.size = arg1(dependencyMap[23]).CircularIconButton.Sizes.MEDIUM_32;
    obj.iconStyle = tmp2.arrowIcon;
    obj.onPress = function onPress() {
      return onClose();
    };
    tmp12 = onClose(arg1(dependencyMap[23]).CircularIconButton, obj);
  }
  let hasAccountCreditResult = null != entitlements;
  if (hasAccountCreditResult) {
    let obj7 = importDefault(dependencyMap[26]);
    hasAccountCreditResult = obj7.hasAccountCredit(entitlements);
  }
  let obj8 = arg1(dependencyMap[28]);
  let isEligibleForBogoPromotion = obj8.useIsEligibleForBogoPromotion();
  let obj9 = arg1(dependencyMap[18]);
  const promotionMarketingComponent1 = obj9.usePromotionMarketingComponent(arg1(dependencyMap[19]).MarketingComponentType.MARKETING_PAGE_BANNER);
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
  const items4 = [onClose(importDefault(dependencyMap[29]), {}), , ];
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
        const tmp5 = ref2;
      }
      if (tmp5) {
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
    items5[4] = onClose(importDefault(dependencyMap[31]), obj3);
    let tmp31 = isEligibleForBogoPromotion;
    if (isEligibleForBogoPromotion) {
      obj4 = {};
      const items7 = [, ];
      ({ sectionWithPadding: arr9[0], sectionWidth: arr9[1] } = tmp2);
      obj4.style = items7;
      obj5 = { style: tmp2.promotionCardHeader };
      const intl2 = arg1(dependencyMap[24]).intl;
      obj5.children = intl2.string(arg1(dependencyMap[24]).t.QPC/ee);
      obj4.children = onClose(arg1(dependencyMap[32]).Text, obj5);
      tmp31 = onClose(tmp5, obj4);
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
      isEligibleForBogoPromotion = onClose(importDefault(dependencyMap[33]), obj6);
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
      obj8 = { marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
      items9[2] = obj8;
      obj7.style = items9;
      obj7.bannerFields = promotionMarketingComponent1.properties.properties.marketingPageBanner;
      obj7.analyticsPage = "Marketing Page Banner Tile";
      obj7.onPaymentSuccess = onPaymentSuccess;
      obj7.onPaymentDismiss = onPaymentDismiss;
      obj7.componentId = promotionMarketingComponent1.id;
      tmp39 = onClose(importDefault(dependencyMap[34]), obj7);
      const tmp43 = importDefault(dependencyMap[34]);
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
    items5[8] = onClose(importDefault(dependencyMap[35]), obj9);
    const obj10 = {};
    const items11 = [, ];
    ({ sectionWithTopMargin: arr13[0], sectionWidth: arr13[1] } = tmp2);
    obj10.style = items11;
    items5[9] = onClose(importDefault(dependencyMap[36]), obj10);
    const obj11 = {};
    const items12 = [, , ];
    ({ sectionWithTopMargin: arr14[0], sectionWithPadding: arr14[1], sectionWidth: arr14[2] } = tmp2);
    obj11.style = items12;
    obj11.isFractionalOnly = tmp20.fractionalState === FractionalPremiumStates.FP_ONLY;
    items5[10] = onClose(importDefault(dependencyMap[37]), obj11);
    const obj12 = {};
    const items13 = [, , , ];
    ({ sectionWithTopMargin: arr15[0], sectionWithPadding: arr15[1], sectionWidth: arr15[2] } = tmp2);
    let tmp49 = null;
    if (tmp5) {
      const obj13 = {};
      const _Math = Math;
      obj13.marginBottom = Math.max(rect.bottom, importDefault(dependencyMap[8]).space.PX_16) + 48;
      tmp49 = obj13;
    }
    items13[3] = tmp49;
    obj12.style = items13;
    obj12.showSubscribeButton = !userHasSubscription && !enabled;
    items5[11] = onClose(importDefault(dependencyMap[38]), obj12);
    obj2.children = items5;
    items4[1] = tmp25(tmp26, obj2);
    let tmp53 = null;
    if (tmp5) {
      const obj14 = { style: tmp2.sectionWidth, isVisible: sharedValue, backgroundColor: tmp2.themedBackground.backgroundColor };
      tmp53 = onClose(importDefault(dependencyMap[39]), obj14);
    }
    items4[2] = tmp53;
    obj.children = items4;
    return closure_11(tmp5, obj);
  } else {
    const obj15 = {};
    const items14 = [tmp2.accountCreditContainer, userHasSubscription ? {} : tmp2.accountCreditContainerWithSpacing];
    obj15.style = items14;
    obj15.children = accountCredit;
    onClose(tmp5, obj15);
  }
};
