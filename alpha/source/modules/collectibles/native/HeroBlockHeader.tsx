// Module ID: 18203
// Function ID: 18204
// Name: HeroBlockHeader
// Dependencies: [19, 17, 1072, 21, 9546, 5142, 575, 9775, 6844, 1499, 9549, 5371, 5726, 5139, 9770, 5149, 18204, 18205, 5717, 5844, 5753, 5760, 1113, 7046, 1252, 7441, 2]
// Exports: default

// Module 18203 (HeroBlockHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import QuestContent from "QuestContent" /* 6844 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9546 */;
import QuestUtils from "QuestUtils" /* 9775 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let size;
function onTapEarnOrbs() {
  const obj = QuestUtils;
  const obj2 = { mergeExistingRoutes: true, fromContent: QuestContent.QuestContent.ORBS_SHOP_HERO_CTA };
  obj.openQuestHome(obj2);
}
const View = react_native.View;
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty, VerticalGradient: metroRequire } = Constants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const result = 0.75 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
let createStyles = createStyles_mod;
let obj = { heroBannerContainer: rect, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 }, innerContainer: size, heroLogoContainer: { flex: 1, maxWidth: "80%", maxHeight: "80%" }, heroLogo: { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 }, heroViewAllIcon: obj2, orbsInnerContainer: obj3, orbsTitle: { fontSize: 24, lineHeight: 30 } };
rect = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
size = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, width: "100%", height: "100%" };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlockHeader.tsx");

export default function HeroBlockHeader(heroBlock) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items4;
  let items5;
  let obj12;
  let obj22;
  let obj23;
  let obj24;
  let obj26;
  let obj27;
  let tmp14Result;
  let tmp14Result2;
  heroBlock = heroBlock.heroBlock;
  const category = heroBlock.category;
  dependencyMap = undefined;
  const tmp = heroBlock;
  const tmp2 = dependencyMap;
  let obj = heroBlock(1499);
  dependencyMap = obj.useNavigation();
  let obj2 = heroBlock(9549);
  const analyticsContext = obj2.useCollectiblesAnalyticsContext();
  const tmp4 = category(5371)();
  const tmp5 = closure_10();
  const obj3 = heroBlock(5726);
  const token = obj3.useToken(category(575).colors.BACKGROUND_BASE_LOW);
  const hexToRgbaString = heroBlock(5139).hexToRgbaString;
  heroBlock(5139);
  const obj4 = heroBlock(5139);
  const isOrbsExclusive = category.isOrbsExclusive;
  const hexToRgbaStringResult = hexToRgbaString(obj4.hexWithOpacity(token, 0));
  const obj5 = heroBlock(5726);
  const token1 = obj5.useToken(category(575).colors.BACKGROUND_BASE_LOWEST);
  const obj6 = heroBlock(9770);
  let isEligibleForQuests = obj6.getIsEligibleForQuests();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  const tmp11 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
  const tmp12 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
  if (isOrbsExclusive) {
    let tmp3Result;
    const tmpResult = tmp(5149);
    if (tmpResult.isThemeDark(tmp4)) {
      tmp3Result = tmp3(18204);
    } else {
      tmp3Result = tmp3(18205);
    }
    heroBannerUrl = tmp3Result;
  }
  const obj7 = { style: tmp5.heroBannerContainer, children: tmp14Result };
  tmp14Result = null != heroBannerUrl;
  if (tmp14Result) {
    let tmp16Result = isOrbsExclusive;
    if (tmp16Result) {
      const obj8 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"], start: null, end: null, style: tmp5.orbsBackgroundGradient };
      ({ START: obj9.start, END: obj9.end } = closure_6);
      tmp16Result = tmp16(tmp3(5717), obj8);
    }
    const obj10 = { children: items };
    items = [tmp16Result, , ];
    const obj11 = { style: tmp5.heroBannerImage, source: obj12 };
    obj12 = { uri: heroBannerUrl };
    items[1] = closure_7(category(5844), obj11);
    const obj14 = { colors: items1, start: null, end: null, style: tmp5.fadeOutGradient };
    items1 = [hexToRgbaStringResult, token1];
    ({ START: obj13.start, END: obj13.end } = closure_6);
    items[2] = closure_7(category(5717), obj14);
    tmp14Result = tmp14(tmp15, obj10);
  }
  const items2 = [closure_7(analyticsContext, obj7), ];
  const obj15 = { style: tmp5.heroInfoContainer, children: tmp14Result2 };
  if (isOrbsExclusive) {
    let tmp16Result4 = null != tmp11;
    const obj16 = { style: tmp5.orbsInnerContainer, children: items4 };
    if (tmp16Result4) {
      const obj17 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp5.orbsTitle, children: tmp11 };
      tmp16Result4 = tmp16(tmp(5753).Text, obj17);
    }
    const items3 = [tmp16Result4, ];
    let tmp16Result5 = null != tmp12 && "" !== tmp12;
    if (tmp16Result5) {
      const obj18 = { variant: "body-md/medium", children: tmp12 };
      tmp16Result5 = tmp16(tmp(5753).Text, obj18);
    }
    const obj19 = { children: items3 };
    items3[1] = tmp16Result5;
    items4 = [closure_9(analyticsContext, obj19), ];
    if (isEligibleForQuests) {
      const obj20 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: intl3.string(tmp(1113).t.ynollq), onPress: onTapEarnOrbs };
      const Button = tmp(5760).Button;
      intl3 = tmp(1113).intl;
      isEligibleForQuests = tmp16(Button, obj20);
    }
    items4[1] = isEligibleForQuests;
    tmp14Result2 = tmp14(tmp17, obj16);
  } else {
    const obj21 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.formatToPlainString(tmp(1113).t.FNtLb3, obj22),
      accessibilityHint: intl2.string(tmp(1113).t.F8ma9x),
      activeOpacity: 0.6,
      androidRippleConfig: obj23,
      hitSlop: 8,
      onPress: function onTapViewAll() {
          let _String;
          let pageCategory;
          let pageSection;
          let tilePosition;
          let sessionId;
          const track = AnalyticsUtilsDefault.track;
          const COLLECTIBLES_SHOP_ELEMENT_CLICKED = constants.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
          AnalyticsUtilsDefault;
          if (analyticsContext != null) {
            sessionId = tmp2.sessionId;
          }
          const obj = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: pageSection, page_category: pageCategory, tile_type: "HERO_BLOCK", tile_position: _String(tilePosition), cta_name: null };
          pageSection = undefined;
          if (analyticsContext != null) {
            pageSection = tmp2.pageSection;
          }
          pageCategory = undefined;
          if (analyticsContext != null) {
            pageCategory = tmp2.pageCategory;
          }
          tilePosition = undefined;
          _String = String;
          if (analyticsContext != null) {
            tilePosition = tmp2.tilePosition;
          }
          track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          const obj2 = { category, analyticsContext };
          navigation.navigate(hasOwnProperty.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj2);
        },
      children: closure_9(analyticsContext, obj24)
    };
    const PressableOpacity = tmp(7046).PressableOpacity;
    intl = tmp(1113).intl;
    obj22 = { category: category.name };
    intl2 = tmp(1113).intl;
    let tmp16Result6 = null != heroLogoUrl;
    obj23 = { radius: category(575).radii.lg };
    obj24 = { style: tmp5.innerContainer, children: items5 };
    if (tmp16Result6) {
      const obj25 = { style: tmp5.heroLogoContainer, children: closure_7(category(5844), obj26) };
      obj26 = { style: tmp5.heroLogo, source: obj27 };
      obj27 = { uri: heroLogoUrl };
      tmp16Result6 = tmp16(tmp17, obj25);
    }
    items5 = [tmp16Result6, ];
    const obj28 = { style: tmp5.heroViewAllIcon, children: closure_7(tmp(7441).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
    items5[1] = closure_7(analyticsContext, obj28);
    tmp14Result2 = tmp16(PressableOpacity, obj21, category.storeListingId);
  }
  const obj49 = { children: items2 };
  items2[1] = closure_7(analyticsContext, obj15);
  return closure_9(closure_8, obj49);
};
