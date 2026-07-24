// Module ID: 12399
// Function ID: 96383
// Name: NitroHomeHeader
// Dependencies: [57, 31, 27, 4122, 3782, 12400, 653, 1345, 1851, 33, 3974, 666, 689, 4130, 1456, 12401, 4660, 5091, 4126, 1212, 675, 5791, 12402, 7831, 12403, 7425, 7429, 12424, 12425, 7536, 12426, 12430, 12442, 7443, 12397, 12398, 5799, 1557, 7422, 566, 6636, 7835, 12443, 8404, 3991, 4542, 3976, 12444, 3946, 1334, 7830, 1336, 5085, 12445, 12446, 8797, 8799, 4554, 477, 4532, 2]
// Exports: default

// Module 12399 (NitroHomeHeader)
import LinearGradient from "LinearGradient";
import ReferredFriendAvatar from "ReferredFriendAvatar";
import get_ActivityIndicator from "useScrollToSection";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import { NitroHomeSectionId } from "zustandStore";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "fetchCurrentAppIcon";
import hexToRgb from "hexToRgb";
import importDefaultResult from "t";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_17;
let closure_18;
let closure_5;
let closure_6;
const require = arg1;
function NitroHomeHeader(arg0) {
  let onClose;
  let subscription;
  ({ subscription, onClose } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onClose(1456);
  const navigation = obj.useNavigation();
  let obj1 = onClose(12401);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = obj1.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "NitroHomeHeader" });
  let tmp5 = null == subscription;
  const callback = React.useCallback(() => {
    if (undefined !== onClose) {
      onClose();
    } else {
      navigation.pop();
    }
  }, items);
  if (!tmp5) {
    tmp5 = !subscription.hasActiveTrial;
  }
  let tmp6 = !tmp5;
  obj = { style: tmp.contentContainer };
  obj = { style: tmp.headerContainer };
  obj1 = { style: tmp.backButtonWrapper, onPress: callback, children: callback2(onClose(5091).ArrowLargeLeftIcon, { size: "md", color: "white" }) };
  const items1 = [callback2(onClose(4660).PressableOpacity, obj1), , ];
  const obj2 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header" };
  const intl = onClose(1212).intl;
  obj2.children = intl.string(onClose(1212).t["BnquQ/"]);
  items1[1] = callback2(onClose(4126).Text, obj2);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj3 = { style: tmp.backButtonWrapper };
    let tmp11Result = tmp11(closure_5, obj3);
  } else {
    const obj4 = {
      style: tmp.backButtonWrapper,
      onPress() {
          let obj = navigation(outer1_2[20]);
          obj = { current_component: outer1_23.YOUR_NITRO_HOME, next_component: outer1_23.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" };
          obj.track(outer1_11.NITRO_HOME_NAVIGATION, obj);
          navigation.push(outer1_14.PREMIUM_MANAGE_PLAN);
        },
      children: callback2(onClose(5791).SettingsIcon, { size: "md", color: "white" })
    };
    tmp11Result = tmp11(onClose(4660).PressableOpacity, obj4);
  }
  items1[2] = tmp11Result;
  obj.children = items1;
  const items2 = [closure_18(closure_5, obj), ];
  if (!tmp5) {
    const obj5 = { style: tmp.pillParent };
    const obj6 = { hasExtraMargin: true };
    obj5.children = callback2(onClose(12402).PremiumReferralTrialPill, obj6);
    tmp6 = callback2(closure_5, obj5);
  }
  items2[1] = tmp6;
  obj.children = items2;
  return closure_18(closure_5, obj);
}
function NewTab(arg0) {
  let extraBottomHeight;
  let scrollToSectionId;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = callback3();
  let obj = _require(7831);
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  let obj1 = _require(12403);
  const premiumPerkCard = obj1.usePremiumPerkCard();
  let obj2 = _require(7425);
  const promotionMarketingComponent = obj2.usePromotionMarketingComponent(_require(7429).MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = React.useRef(false);
  const ref = React.useRef(null);
  const callback = React.useCallback((nativeEvent) => {
    let obj = callback(outer1_2[28]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: outer1_19, hasTrackedScrolledToBottom: callback };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = { ref, contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0 };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  let tmp9 = null != promotionMarketingComponent;
  if (tmp9) {
    tmp9 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp9) {
    obj = {};
    obj1 = { width: _require(12403).PERK_CARD_SIZES[_require(undefined, 12403).PerkCardVariant.WIDE].width };
    obj.style = obj1;
    obj.cardStyle = tmp.marketingBannerCard;
    obj.bannerFields = promotionMarketingComponent.properties.properties.marketingPageBanner;
    obj.analyticsPage = "Nitro Home Banner Tile";
    obj.componentId = promotionMarketingComponent.id;
    tmp9 = callback2(importDefault(7536), obj);
    const tmp13 = importDefault(7536);
  }
  const items1 = [tmp9, callback2(_require(12426).TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15 = null;
  if (isEligibleSenderForReferralProgram) {
    obj2 = { onLayout: importDefault(12424)(ref, scrollToSectionId).createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: callback2(_require(12430).ReferralProgramPerkCard, {}) };
    tmp15 = callback2(closure_5, obj2);
  }
  items1[2] = tmp15;
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = callback2(importDefault(12403), {});
  const obj3 = {};
  const obj4 = {};
  const tmp22 = importDefault(12403);
  const tmp7 = closure_18;
  const tmp8 = closure_6;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = callback2(importDefault(12403), obj4);
  const obj5 = {};
  const tmp24 = importDefault(12403);
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = callback2(importDefault(12403), obj5);
  const obj6 = {};
  const tmp26 = importDefault(12403);
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = callback2(importDefault(12403), obj6);
  obj.children = items1;
  return tmp7(tmp8, obj);
}
function PerksTab(extraBottomHeight) {
  let fractionalState;
  let isInReverseTrial;
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  let obj = _require(12403);
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = React.useCallback((section_name) => {
    let obj = callback2(outer1_2[20]);
    obj = { section_name };
    obj.track(outer1_11.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj);
  }, []);
  const importDefault = React.useRef(false);
  const callback = React.useCallback((nativeEvent) => {
    let obj = callback(outer1_2[28]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: outer1_20, hasTrackedScrolledToBottom: closure_1 };
    const result = obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = { contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0 };
  items = [callback4().featureCardsContainer, { paddingBottom: extraBottomHeight.extraBottomHeight }];
  obj = {};
  const tmp = callback4();
  const tmp4 = closure_18;
  const tmp5 = closure_6;
  const tmp6 = callback2;
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.DOb6x0);
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let clientThemes = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      const items1 = [clientThemes, ];
      clientThemes = premiumPerkCard.clientThemes;
      items1[1] = clientThemes;
      let items2 = items1;
    } else {
      items2 = [clientThemes, , ];
      ({ clientThemes: arr3[1], greyServerBoosts: arr3[2] } = premiumPerkCard);
    }
  } else {
    const items3 = [, , ];
    ({ customProfile: arr2[0], clientThemes: arr2[1], serverBoosts: arr2[2] } = premiumPerkCard);
    obj.perks = items3;
    obj.onItemChange = function onItemChange(arg0) {
      return callback(outer1_22.CAROUSEL_SECTION_NAME_1, arg0);
    };
    const items4 = [tmp6(tmp7, obj), , , ];
    const obj1 = {};
    const intl2 = _require(1212).intl;
    obj1.title = intl2.string(_require(1212).t["+vt7w9"]);
    const tmp12 = importDefault(12442);
    const tmp9 = callback2;
    if (obj5.isAppIconsSupported()) {
      const items5 = [premiumPerkCard.customAppIcons];
      let items6 = items5;
    } else {
      items6 = [];
    }
    const items7 = [, , ];
    const arraySpreadResult = HermesBuiltin.arraySpread(items6, 0);
    items7[arraySpreadResult] = premiumPerkCard.emoji;
    const sum = arraySpreadResult + 1;
    ({ customSounds: arr8[tmp17], sticker: arr8[tmp17 + 1] } = premiumPerkCard);
    obj1.perks = items7;
    obj1.onItemChange = function onItemChange(arg0) {
      return callback(outer1_22.CAROUSEL_SECTION_NAME_2, arg0);
    };
    items4[1] = tmp9(tmp12, obj1);
    const obj2 = {};
    obj5 = _require(7443);
    const intl3 = _require(1212).intl;
    obj2.title = intl3.string(_require(1212).t.LgHbnL);
    const items8 = [, , , , ];
    ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
    obj2.perks = items8;
    obj2.onItemChange = function onItemChange(arg0) {
      return callback(outer1_22.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = callback2(importDefault(12442), obj2);
    const obj3 = {};
    const tmp21 = importDefault(12442);
    const tmp23 = callback2;
    const intl4 = _require(1212).intl;
    obj3.title = intl4.string(_require(1212).t.LTaxu9);
    if (fractionalState === FractionalPremiumStates.FP_ONLY) {
      const entranceSounds = premiumPerkCard.entranceSounds;
      if (isInReverseTrial) {
        const items9 = [entranceSounds];
        let items10 = items9;
      } else {
        items10 = [entranceSounds, premiumPerkCard.greyBadge];
      }
    } else {
      const items11 = [, ];
      ({ entranceSounds: arr10[0], badge: arr10[1] } = premiumPerkCard);
      obj3.perks = items11;
      obj3.onItemChange = function onItemChange(arg0) {
        return callback(outer1_22.CAROUSEL_SECTION_NAME_4, arg0);
      };
      items4[3] = tmp23(tmp24, obj3);
      obj.children = items4;
      return tmp4(tmp5, obj);
    }
    tmp24 = importDefault(12442);
  }
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_11, HorizontalGradient: closure_12, ThemeTypes: closure_13, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
NewTab = "NewTab";
PerksTab = "PerksTab";
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_24);
let closure_21 = hexToRgb.hexToRgbaString(require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_24).alpha(0.6).hex());
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
hexToRgb = {};
hexToRgb = { display: "flex", width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
hexToRgb.container = hexToRgb;
hexToRgb.background = { position: "absolute", width: "100%" };
hexToRgb.tabContent = { flex: 1 };
hexToRgb.featureCardsContainer = { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" };
hexToRgb.segmentedControlActual = { zIndex: 3, paddingHorizontal: 16 };
let obj1 = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
hexToRgb.segmentedControlVirtual = obj1;
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_24).alpha(0.6);
hexToRgb.androidSegmentedControlBackground = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
hexToRgb.backSwipeSensor = { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" };
hexToRgb = _createForOfIteratorHelperLoose.createStyles(hexToRgb);
_createForOfIteratorHelperLoose = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" } };
let obj4 = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.backButtonWrapper = obj4;
_createForOfIteratorHelperLoose.headerText = { textAlign: "center", width: "80%", lineHeight: 28 };
_createForOfIteratorHelperLoose.pillParent = { display: "flex", flexDirection: "column", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 } };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj5.marketingBannerCard = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let closure_26 = _createForOfIteratorHelperLoose.createStyles(obj5);
let closure_27 = _createForOfIteratorHelperLoose.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
let closure_28 = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let LinearGradient;
  let closure_5;
  let tmp10;
  let tmp14;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  let obj = bottom(12397);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(12398).OpenNitroTriggerPoint);
  let obj1 = bottom(5799);
  const giftCardMobileConsumptionHalfsheet = obj1.useGiftCardMobileConsumptionHalfsheet();
  const tmp3 = hexToRgb();
  bottom = navigation(1557)().bottom;
  let obj2 = bottom(7422);
  const youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = bottom(1456);
  navigation = obj3.useNavigation();
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  const tmp7 = callback(stateFromStores.useState(0), 2);
  const dependencyMap = tmp7[1];
  callback = stateFromStores.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.width);
  }, []);
  [tmp10, LinearGradient] = callback(stateFromStores.useState(0), 2);
  const callback1 = stateFromStores.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj4 = bottom(566);
  const items1 = [isEligibleSenderForReferralProgram];
  stateFromStores = obj4.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  const tmp9 = callback(stateFromStores.useState(0), 2);
  [tmp14, closure_5] = callback(stateFromStores.useState(true), 2);
  let obj5 = bottom(566);
  const items2 = [promotionMarketingComponent];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => promotionMarketingComponent.getPremiumTypeSubscription());
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = navigation(675);
      obj = { target: outer1_19 };
      obj.track(outer1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      callback2(true);
    } else if (1 === arg0) {
      obj = { target: outer1_20 };
      navigation(675).track(outer1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      callback2(false);
      const obj3 = navigation(675);
    }
  }, []);
  const tmp17 = navigation(6636)();
  let obj6 = bottom(7835);
  const isInReverseTrial = obj6.useIsInReverseTrial();
  let obj7 = bottom(12443);
  const maybeFetchTieredTenureBadgeData = obj7.useMaybeFetchTieredTenureBadgeData();
  const field = zustandStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    outer2_9.resetState();
  }, []);
  let obj8 = bottom(8404);
  obj = {};
  obj = {};
  const intl = bottom(1212).intl;
  obj.label = intl.string(bottom(1212).t.tahjbP);
  const intl2 = bottom(1212).intl;
  obj.id = intl2.string(bottom(1212).t.tahjbP);
  obj1 = { extraBottomHeight: tmp10 + 16, scrollToSectionId: field };
  obj.page = callback2(NewTab, obj1);
  const items3 = [obj, ];
  obj2 = {};
  const intl3 = bottom(1212).intl;
  obj2.label = intl3.string(bottom(1212).t.w3RBdW);
  const intl4 = bottom(1212).intl;
  obj2.id = intl4.string(bottom(1212).t.w3RBdW);
  obj3 = { extraBottomHeight: tmp10 + 16, fractionalState: tmp17.fractionalState, isInReverseTrial };
  obj2.page = callback2(PerksTab, obj3);
  items3[1] = obj2;
  obj.items = items3;
  obj.pageWidth = tmp7[0];
  obj.onPageChange = callback2;
  const segmentedControlState = obj8.useSegmentedControlState(obj);
  let obj14 = bottom(3991);
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = obj14.useSharedValue(num);
  let obj15 = bottom(3991);
  class Q {
    constructor() {
      obj = { bottom: c6.get() };
      return obj;
    }
  }
  Q.__closure = { floatTabBottomOffset: sharedValue };
  Q.__workletHash = 15088278002673;
  Q.__initData = closure_28;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = obj15.useAnimatedStyle(Q);
  const effect1 = stateFromStores.useEffect(() => {
    if (!stateFromStores) {
      const obj = bottom(3991);
      const result = sharedValue.set(obj.withDelay(500, bottom(4542).withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })));
      const obj2 = bottom(4542);
    }
  }, items4);
  let obj16 = bottom(3976);
  const theme = obj16.useThemeContext().theme;
  const tmp13 = callback(stateFromStores.useState(true), 2);
  const isThemeDarkResult = bottom(3976).isThemeDark(theme);
  const obj18 = bottom(3976);
  const tmp27 = navigation(12444);
  const tmp27Result = navigation(12444)(tmp17.endsAt, bottom(12444).CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram = bottom(7831).useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = stateFromStores.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(1334).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const result = bottom(3946).UNSAFE_markDismissibleContentAsDismissed(bottom(1334).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
      const obj2 = bottom(3946);
    }
    obj = bottom(3946);
    if (!obj3.UNSAFE_isDismissibleContentDismissed(bottom(1334).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const result1 = bottom(3946).UNSAFE_markDismissibleContentAsDismissed(bottom(1334).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE);
      const obj4 = bottom(3946);
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = bottom(7830).markReferralProgramEntrypointBadgeAcknowledged();
      const obj5 = bottom(7830);
    }
  }, items5);
  const effect3 = stateFromStores.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(1334).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const result = bottom(3946).UNSAFE_markDismissibleContentAsDismissed(bottom(1334).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
      const obj2 = bottom(3946);
    }
  }, []);
  const obj19 = bottom(7831);
  promotionMarketingComponent = bottom(7425).usePromotionMarketingComponent(bottom(7429).MarketingComponentType.PREMIUM_TAB);
  const items6 = [promotionMarketingComponent];
  const effect4 = stateFromStores.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = bottom(3946);
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(bottom(1334).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: outer1_15.AUTO_DISMISS };
      const result = bottom(1336).markSnowflakeBoundDismissibleContentAsDismissed(bottom(1334).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
      const obj2 = bottom(1336);
    }
  }, items6);
  obj4 = { style: items7 };
  items7 = [tmp3.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj5 = { style: tmp3.background };
  const obj20 = bottom(7425);
  const tmp34 = closure_18;
  const tmp35 = closure_5;
  obj5.source = navigation(12445);
  const items8 = [callback2(navigation(5085), obj5), callback2(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }), , , ];
  let tmp37 = tmp17.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp37) {
    obj6 = { countdownText: tmp27Result };
    tmp37 = callback2(navigation(12446), obj6);
  }
  items8[2] = tmp37;
  obj7 = { style: tmp3.tabContent };
  const items9 = [callback2(bottom(8797).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp14) {
    obj8 = {};
    const items10 = [tmp3.backSwipeSensor];
    obj8.style = items10;
    tmp14 = callback2(closure_5, obj8);
  }
  items9[1] = tmp14;
  obj7.children = items9;
  items8[3] = closure_18(closure_5, obj7);
  const obj9 = { style: animatedStyle, onLayout: callback1 };
  const obj10 = { style: tmp3.segmentedControlActual, onLayout: callback, children: callback2(bottom(8799).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  const items11 = [callback2(closure_5, obj10), , ];
  let tmp46 = !isThemeDarkResult;
  if (tmp46) {
    const obj11 = {};
    ({ START: obj28.start, END: obj28.end } = closure_12);
    obj11.colors = ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"];
    const items12 = [tmp3.segmentedControlVirtual, ];
    const obj12 = { height: tmp10, zIndex: 2 };
    items12[1] = obj12;
    obj11.style = items12;
    tmp46 = callback2(navigation(4554), obj11);
  }
  items11[1] = tmp46;
  const tmp36 = navigation(5085);
  const tmp41 = closure_18;
  const tmp42 = closure_5;
  const tmp45 = closure_18;
  if (obj30.isAndroid()) {
    const obj13 = {};
    const items13 = [, , ];
    ({ segmentedControlVirtual: arr15[0], androidSegmentedControlBackground: arr15[1] } = tmp3);
    obj14 = { height: tmp10, zIndex: 1, overflow: "hidden" };
    items13[2] = obj14;
    obj13.style = items13;
    let tmp51Result = tmp51(closure_5, obj13);
  } else {
    obj15 = {};
    let num6 = 0.5;
    if (isThemeDarkResult) {
      num6 = 0.2;
    }
    obj15.blurAmount = num6;
    const items14 = [tmp3.segmentedControlVirtual, ];
    obj16 = { height: tmp10, zIndex: 1, overflow: "hidden" };
    items14[1] = obj16;
    obj15.style = items14;
    obj15.blurTheme = theme;
    let tmp55;
    if (theme === constants.MIDNIGHT) {
      tmp55 = closure_21;
    }
    obj15.blurTintRgba = tmp55;
    tmp51Result = tmp51(navigation(4532), obj15);
    const tmp54 = navigation(4532);
  }
  items11[2] = tmp51Result;
  obj9.children = items11;
  items8[4] = tmp45(navigation(3991).View, obj9);
  obj4.children = items8;
  return tmp34(tmp35, obj4);
};
export const BACK_BUTTON_SIZE = 24;
