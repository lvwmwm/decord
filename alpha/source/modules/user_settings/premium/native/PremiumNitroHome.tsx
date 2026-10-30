// Module ID: 15240
// Function ID: 15241
// Name: PremiumNitroHome
// Dependencies: [32, 19, 17, 5010, 2053, 15241, 1072, 4855, 1386, 21, 671, 575, 5009, 1498, 6974, 6996, 5619, 1114, 15242, 8516, 15243, 15264, 10589, 15265, 15266, 15267, 15272, 15277, 1253, 15300, 15301, 15303, 15304, 7560, 1626, 15305, 504, 7572, 8525, 15306, 8971, 5298, 5090, 5632, 5016, 15307, 5039, 4842, 8515, 4843, 5712, 15308, 15309, 11445, 9195, 5582, 1376, 5594, 2]
// Exports: default

// Module 15240 (PremiumNitroHome)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import useNavigation from "useNavigation" /* 1498 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4843 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5039 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6996 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8515 */;
import PremiumNitroNavigationStore2 from "PremiumNitroNavigationStore" /* 15241 */;
import PremiumReferralTrialPill from "PremiumReferralTrialPill" /* 15242 */;
import PremiumPerkCardDefault from "PremiumPerkCard" /* 15243 */;
import reactDefault from "react" /* 15265 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 15266 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 15267 */;
import PremiumPerkCarouselDefault from "PremiumPerkCarousel" /* 15300 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import module_671 from "module_671" /* 671 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumNitroNavigationStore = PremiumNitroNavigationStore2;
let _require, dependencyMap, importDefault, navigation, set;

let closure_12;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj5;
let rect;
let size;
let size1;
let unpackModuleId;
function NitroHomeHeader(arg0) {
  let intl;
  let items1;
  let items2;
  let onClose;
  let subscription;
  ({ subscription, onClose } = arg0);
  const tmp = closure_23();
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation, onClose];
  let hasActiveTrial;
  const callback = react.useCallback(() => {
    if (undefined !== onClose) {
      onClose();
    } else {
      navigation.pop();
    }
  }, items);
  if (subscription != null) {
    hasActiveTrial = subscription.hasActiveTrial;
  }
  let tmp10Result = hasActiveTrial;
  const obj2 = { style: tmp.contentContainer, children: items2 };
  const obj3 = { style: tmp.headerContainer, children: items1 };
  const obj4 = { style: tmp.backButtonWrapper, onPress: callback, children: authStore4(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md", color: "white" }) };
  const PressableOpacity = tmp2(6974).PressableOpacity;
  items1 = [authStore4(PressableOpacity, obj4), , ];
  const obj5 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: intl.string(intl5.t["BnquQ/"]) };
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items1[1] = authStore4(Text, obj5);
  const obj6 = { style: tmp.backButtonWrapper };
  items1[2] = authStore4(hasOwnProperty, obj6);
  items2 = [closure_17(hasOwnProperty, obj3), ];
  const tmp8 = closure_17;
  if (tmp10Result) {
    const obj7 = { style: tmp.pillParent, children: authStore4(PremiumReferralTrialPill.PremiumReferralTrialPill, { hasExtraMargin: true }) };
    tmp10Result = tmp10(tmp9, obj7);
  }
  items2[1] = tmp10Result;
  return tmp8(hasOwnProperty, obj2);
}
function NewTab(arg0) {
  let extraBottomHeight;
  let hasTrackedScrolledToBottom;
  let items;
  let items1;
  let obj7;
  let scrollToSectionId;
  _require = undefined;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = closure_25();
  let obj = require("useIsEligibleSenderForReferralProgram");
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  let obj2 = require("PremiumPerkCard");
  const premiumPerkCard = obj2.usePremiumPerkCard();
  const obj3 = require("usePromotionMarketingComponent");
  const promotionMarketingComponent = obj3.usePromotionMarketingComponent(require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = react.useRef(false);
  const ref = react.useRef(null);
  const createSectionLayoutHandler = reactDefault(ref, scrollToSectionId).createSectionLayoutHandler;
  const callback = react.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: NewTab_str, hasTrackedScrolledToBottom };
    return obj.trackIfScrolledToBottom(obj2);
  }, []);
  const obj4 = { ref, contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items1 };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  let tmp12 = null != promotionMarketingComponent;
  const tmp10 = closure_17;
  const tmp11 = closure_6;
  if (tmp12) {
    tmp12 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp12) {
    const obj6 = { style: obj7, cardStyle: tmp.marketingBannerCard, bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner, analyticsPage: "Nitro Home Banner Tile", componentId: null, promotionId: null };
    obj7 = { width: require("PremiumPerkCard").PERK_CARD_SIZES[require("PremiumPerkCard").PerkCardVariant.WIDE].width };
    ({ id: obj5.componentId, promotionId: obj5.promotionId } = promotionMarketingComponent);
    const tmp8Result = MarketingPageBannerTileDefault;
    tmp12 = closure_16(tmp8Result, obj6);
  }
  items1 = [tmp12, closure_16(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    const obj8 = { onLayout: createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_16(require("ReferralProgramPerkCard").ReferralProgramPerkCard, {}) };
    tmp15Result = tmp15(closure_5, obj8);
  }
  items1[2] = tmp15Result;
  const obj9 = {};
  const tmp8Result5 = PremiumPerkCardDefault;
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = closure_16(tmp8Result5, obj9);
  const obj10 = {};
  const tmp8Result6 = PremiumPerkCardDefault;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = closure_16(tmp8Result6, obj10);
  const obj11 = {};
  const tmp8Result7 = PremiumPerkCardDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = closure_16(tmp8Result7, obj11);
  const obj19 = {};
  const tmp8Result8 = PremiumPerkCardDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = closure_16(tmp8Result8, obj19);
  return tmp10(tmp11, obj4);
}
function PerksTab(extraBottomHeight) {
  let closure_0;
  let fractionalState;
  let hasTrackedScrolledToBottom;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isInReverseTrial;
  let items;
  let items11;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  _require = undefined;
  extraBottomHeight = extraBottomHeight.extraBottomHeight;
  const tmp = closure_27();
  let obj = require("PremiumPerkCard");
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = react.useCallback((section_name) => {
    const obj = hasTrackedScrolledToBottom(dependencyMap[28]);
    const obj2 = { section_name };
    obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj2);
  }, []);
  importDefault = react.useRef(false);
  const callback = react.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab_str, hasTrackedScrolledToBottom };
    const result = obj.trackIfScrolledToBottom(obj2);
  }, []);
  let obj2 = { contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items4 };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  const obj3 = {
    title: intl.string(require("intl").t.DOb6x0),
    perks: items3,
    onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_1, arg0);
    }
  };
  const tmp10 = PremiumPerkCarouselDefault;
  intl = require("intl").intl;
  const tmp11 = FractionalPremiumStates;
  const tmp6 = closure_17;
  const tmp7 = closure_6;
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let items2;
    const customProfile = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      const items1 = [customProfile, premiumPerkCard.clientThemes];
      items2 = items1;
    } else {
      items2 = [customProfile, , ];
      ({ clientThemes: arr3[1], greyServerBoosts: arr3[2] } = premiumPerkCard);
    }
    items3 = items2;
  } else {
    items3 = [, , ];
    ({ customProfile: arr2[0], clientThemes: arr2[1], serverBoosts: arr2[2] } = premiumPerkCard);
  }
  items4 = [closure_16(tmp10, obj3), , , ];
  const obj4 = {
    title: intl2.string(require("intl").t["+vt7w9"]),
    perks: items7,
    onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_2, arg0);
    }
  };
  const tmp9Result = PremiumPerkCarouselDefault;
  intl2 = tmp2(1114).intl;
  const tmp2Result = require("AppIconUtils");
  if (tmp2Result.isAppIconsSupported()) {
    const items5 = [premiumPerkCard.customAppIcons];
    items6 = items5;
  } else {
    items6 = [];
  }
  items7 = [...items6, premiumPerkCard.emoji, premiumPerkCard.customSounds, premiumPerkCard.sticker];
  items4[1] = closure_16(tmp9Result, obj4);
  const obj5 = {
    title: intl3.string(require("intl").t.LgHbnL),
    perks: items8,
    onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_3, arg0);
    }
  };
  const tmp9Result3 = PremiumPerkCarouselDefault;
  intl3 = tmp2(1114).intl;
  items8 = [, , , , ];
  ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
  items4[2] = closure_16(tmp9Result3, obj5);
  const obj6 = {
    title: intl4.string(require("intl").t.LTaxu9),
    perks: items11,
    onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_4, arg0);
    }
  };
  const tmp9Result4 = PremiumPerkCarouselDefault;
  intl4 = tmp2(1114).intl;
  if (fractionalState === tmp11.FP_ONLY) {
    let items10;
    const entranceSounds = premiumPerkCard.entranceSounds;
    if (isInReverseTrial) {
      const items9 = [entranceSounds];
      items10 = items9;
    } else {
      items10 = [entranceSounds, premiumPerkCard.greyBadge];
    }
    items11 = items10;
  } else {
    items11 = [, ];
    ({ entranceSounds: arr10[0], badge: arr10[1] } = premiumPerkCard);
  }
  items4[3] = closure_16(tmp9Result4, obj6);
  return tmp6(tmp7, obj2);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const NitroHomeSectionId = PremiumNitroNavigationStore2.NitroHomeSectionId;
({ AnalyticEvents: unpackModuleId, HorizontalGradient: closure_12, ThemeTypes: map1 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
const NewTab_str = "NewTab";
const PerksTab_str = "PerksTab";
const importDefaultResultResult = module_671(nativeDefault.unsafe_rawColors.PLUM_24);
const alphaResult = importDefaultResultResult.alpha(0.6);
let closure_20 = alphaResult.hex();
let closure_21 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let createStyles = createStyles_mod;
let obj = { container: size, background: { position: "absolute", width: "100%" }, tabContent: { flex: 1 }, featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" }, segmentedControlActual: { zIndex: 3, paddingHorizontal: 16 }, segmentedControlVirtual: rect, androidSegmentedControlBackground: obj2, backSwipeSensor: { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" } };
size = { display: "flex", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: nativeDefault.radii.lg };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_22 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: size1, headerText: { textAlign: "center", width: "80%", lineHeight: 28 }, pillParent: { display: "flex", flexDirection: "column", alignItems: "center" } };
size1 = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_23 = createStyles.createStyles(obj3);
createStyles = createStyles_mod;
let obj4 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: obj5 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let closure_25 = createStyles.createStyles(obj4);
createStyles = createStyles_mod;
let closure_27 = createStyles.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
const __initData = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c2;
  let c3;
  let c5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items13;
  let items3;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let tmp11;
  let tmp14;
  let tmp18;
  let tmp27Result4;
  let tmp27Result6;
  let tmp49;
  let bottom;
  navigation = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  c5 = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  let tmp = bottom;
  const tmp2 = dependencyMap;
  onClose = onClose.onClose;
  let obj = bottom(15303);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(15304).OpenNitroTriggerPoint);
  let obj2 = bottom(7560);
  const giftCardMobileConsumptionHalfsheet = obj2.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_22();
  bottom = navigation(1626)().bottom;
  let obj3 = bottom(15305);
  const youBarSettingsCustomHeaderPaddingTop = obj3.useYouBarSettingsCustomHeaderPaddingTop();
  let obj4 = bottom(1498);
  navigation = obj4.useNavigation();
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  [tmp11, c2] = _slicedToArray(stateFromStores.useState(0), 2);
  const tmp10 = _slicedToArray(stateFromStores.useState(0), 2);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    c2(nativeEvent.nativeEvent.layout.width);
  }, []);
  [tmp14, c3] = _slicedToArray(stateFromStores.useState(0), 2);
  const tmp13 = _slicedToArray(stateFromStores.useState(0), 2);
  const callback1 = stateFromStores.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [isEligibleSenderForReferralProgram];
  const obj6 = bottom(504);
  stateFromStores = obj6.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  [tmp18, c5] = stateFromStores.useState(true);
  _slicedToArray(stateFromStores.useState(true), 2);
  const items2 = [promotionMarketingComponent];
  const obj7 = bottom(504);
  const stateFromStores1 = obj7.useStateFromStores(items2, () => promotionMarketingComponent.getPremiumTypeSubscription());
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      const obj2 = { target: NewTab_str };
      const obj = AnalyticsUtilsDefault;
      obj.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj2);
      _undefined3(true);
    } else if (1 === arg0) {
      const obj4 = { target: PerksTab_str };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj4);
      _undefined3(false);
    }
  }, []);
  const tmp21 = navigation(7572)();
  const obj8 = bottom(8525);
  const isInReverseTrial = obj8.useIsInReverseTrial();
  const obj9 = bottom(15306);
  const maybeFetchTieredTenureBadgeData = obj9.useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    closure_1_9.resetState();
  }, []);
  const obj10 = { items: items3, pageWidth: tmp11, onPageChange: callback2 };
  const obj11 = { label: intl.string(bottom(1114).t.tahjbP), id: intl2.string(bottom(1114).t.tahjbP), page: closure_16(NewTab, obj12) };
  const useSegmentedControlState = bottom(8971).useSegmentedControlState;
  bottom(8971);
  intl = bottom(1114).intl;
  intl2 = bottom(1114).intl;
  items3 = [obj11, ];
  obj12 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  const obj13 = { label: intl3.string(bottom(1114).t.w3RBdW), id: intl4.string(bottom(1114).t.w3RBdW), page: closure_16(PerksTab, obj14) };
  intl3 = bottom(1114).intl;
  intl4 = bottom(1114).intl;
  obj14 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  items3[1] = obj13;
  const segmentedControlState = useSegmentedControlState(obj10);
  const memo = stateFromStores.useMemo(() => {
    const Gesture = bottom(c2[41]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  let num = -32;
  const useSharedValue = bottom(5090).useSharedValue;
  bottom(5090);
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = useSharedValue(num);
  let tmpResult = tmp(5090);
  class Q {
    constructor() {
      const obj = { bottom: sharedValue.get() };
      return obj;
    }
  }
  Q.__closure = { floatTabBottomOffset: sharedValue };
  Q.__workletHash = 15088278002673;
  Q.__initData = __initData;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = tmpResult.useAnimatedStyle(Q);
  const effect1 = obj5.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = spring;
      const result = set(withDelay(500, obj.withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })));
    }
  }, items4);
  let tmpResult6 = tmp(5016);
  const theme = tmpResult6.useThemeContext().theme;
  const tmpResult7 = tmp(5016);
  const isThemeDarkResult = tmpResult7.isThemeDark(theme);
  const ONYX = constants2.ONYX;
  const tmp6Result = navigation(15307);
  const tmp6ResultResult = tmp6Result(tmp21.endsAt, tmp(15307).CountDownMessageTypes.ENDS_IN);
  const tmpResult8 = tmp(8516);
  isEligibleSenderForReferralProgram = tmpResult8.useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj5.useEffect(() => {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult = DismissibleContentUnsafeUtils;
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(4842).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE, obj2);
    }
    const tmpResult4 = DismissibleContentUnsafeUtils;
    if (!tmpResult4.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const obj3 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult5 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult5.UNSAFE_markDismissibleContentAsDismissed(tmp(4842).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE, obj3);
    }
    const tmp7 = isEligibleSenderForReferralProgram;
    if (tmp7) {
      const tmpResult6 = ReferralProgramUtils;
      const result2 = tmpResult6.markReferralProgramEntrypointBadgeAcknowledged();
    }
  }, items5);
  const effect3 = obj5.useEffect(() => {
    const obj = bottom(c2[46]);
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(c2[47]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const tmpResult = bottom(c2[46]);
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[47]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
    }
  }, []);
  const tmpResult9 = tmp(15264);
  promotionMarketingComponent = tmpResult9.usePromotionMarketingComponent(tmp(10589).MarketingComponentType.PREMIUM_TAB);
  const items6 = [promotionMarketingComponent];
  const effect4 = obj5.useEffect(() => {
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
  }, items6);
  const obj15 = { style: items7, children: items8 };
  items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  const obj16 = { style: tmp5.background, source: navigation(15308) };
  const tmp6Result3 = navigation(5712);
  items8 = [closure_16(tmp6Result3, obj16), closure_16(NitroHomeHeader, { onClose, subscription: stateFromStores1 }), , , ];
  let tmp27Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp27Result) {
    const obj17 = { countdownText: tmp6ResultResult };
    tmp27Result = tmp27(tmp6(15309), obj17);
  }
  items8[2] = tmp27Result;
  const obj18 = { style: tmp5.tabContent, children: items9 };
  items9 = [closure_16(tmp(11445).SegmentedControlPages, { state: segmentedControlState, nativeGesture: memo }), ];
  if (tmp27Result4) {
    const obj19 = { style: tmp5.backSwipeSensor };
    tmp27Result4 = closure_16(c5, obj19);
  }
  items9[1] = tmp27Result4;
  items8[3] = closure_17(c5, obj18);
  const obj20 = { style: animatedStyle, onLayout: callback1, children: items10 };
  const obj21 = { style: tmp5.segmentedControlActual, onLayout: callback, children: closure_16(tmp(9195).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  const View = tmp6(5090).View;
  items10 = [closure_16(c5, obj21), , ];
  let tmp27Result5 = !isThemeDarkResult;
  if (tmp27Result5) {
    const obj22 = { start: null, end: null, colors: ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"], style: items11 };
    ({ START: obj27.start, END: obj27.end } = closure_12);
    items11 = [tmp5.segmentedControlVirtual, ];
    const obj23 = { height: tmp14, zIndex: 2 };
    items11[1] = obj23;
    tmp27Result5 = tmp27(tmp6(5582), obj22);
  }
  items10[1] = tmp27Result5;
  const tmpResult10 = tmp(1376);
  if (tmpResult10.isAndroid()) {
    const obj24 = { style: items12 };
    items12 = [, , ];
    ({ segmentedControlVirtual: arr14[0], androidSegmentedControlBackground: arr14[1] } = tmp5);
    const obj25 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items12[2] = obj25;
    tmp27Result6 = tmp27(tmp43, obj24);
  } else {
    let num3 = 0.5;
    const tmp6Result4 = navigation(5594);
    if (isThemeDarkResult) {
      num3 = 0.2;
    }
    const obj26 = { blurAmount: num3, style: items13, blurTheme: theme, tintColor: tmp49 };
    items13 = [tmp5.segmentedControlVirtual, ];
    const obj28 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items13[1] = obj28;
    tmp49 = undefined;
    if (theme === ONYX) {
      tmp49 = closure_20;
    }
    tmp27Result6 = tmp27(tmp6Result4, obj26);
  }
  items10[2] = tmp27Result6;
  items8[4] = closure_17(View, obj20);
  return closure_17(c5, obj15);
};
export const BACK_BUTTON_SIZE = 24;
