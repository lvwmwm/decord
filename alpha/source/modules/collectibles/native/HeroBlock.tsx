// Module ID: 17789
// Function ID: 17790
// Name: HeroBlock
// Dependencies: [19, 17, 7713, 1074, 1072, 21, 9437, 5009, 575, 9556, 17790, 1498, 9440, 504, 9653, 5248, 17791, 5591, 5006, 17792, 16922, 7320, 7345, 17802, 1253, 5016, 17804, 17805, 17806, 5582, 5712, 5619, 5629, 1114, 9658, 6780, 6974, 7372, 5606, 17807, 7288, 2]
// Exports: default

// Module 17789 (HeroBlock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9437 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9440 */;
import SkeletonCardDefault from "SkeletonCard" /* 9556 */;
import react_mod from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7713 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let tmp2;
let unpackModuleId;
const FeaturedFirstCardCoachmarkAnchorDefault = tmp2(17802);
function SkeletonLoading(accessibilityLabel) {
  let arr;
  let obj = {
    style: closure_13().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: arr.map((item, index) => {
      const obj = { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH };
      const tmp = SkeletonCardDefault;
      return closure_1_10(tmp, obj, index);
    })
  };
  arr = Array.from({ length: 10 });
  return authStore(View, obj);
}
let react = react_mod;
const View = react_native.View;
let constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll, VerticalGradient: c9 } = Constants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
const result = 0.75 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
let createStyles = createStyles_mod;
let obj = { heroContainer: { width: "100%" }, heroBannerContainer: rect, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 }, innerContainer: size, heroLogoContainer: { flex: 1, maxWidth: "80%", maxHeight: "80%" }, heroLogo: { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 }, heroViewAllIcon: obj2, orbsInnerContainer: obj3, orbsTitle: { fontSize: 24, lineHeight: 30 }, productCardsContainer: { zIndex: 1 }, skeletonContainer: obj4 };
rect = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
size = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, width: "100%", height: "100%" };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  let LayerScope;
  let analyticsContext;
  let closure_6;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let items4;
  let items5;
  let items7;
  let items8;
  let num;
  let obj11;
  let obj22;
  let obj23;
  let obj24;
  let obj26;
  let obj27;
  let obj31;
  let obj33;
  let obj35;
  let obj37;
  let obj5;
  let obj6;
  let tmp24Result;
  let tmp24Result2;
  let tmp6Result3;
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  dependencyMap = undefined;
  let stateFromStores;
  let closure_5;
  constants = undefined;
  let tmp = heroBlock;
  let tmp2 = dependencyMap;
  const screen = heroBlock.screen;
  let obj = heroBlock(17790);
  const handleDismissCoachmarkOnScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  let obj2 = heroBlock(1498);
  dependencyMap = obj2.useNavigation();
  let obj3 = heroBlock(9440);
  react = obj3.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let tmpResult = tmp(504);
  const items = [closure_5];
  stateFromStores = tmpResult.useStateFromStores(items, () => CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId));
  let tmp4 = null != stateFromStores && stateFromStores.isOrbsExclusive;
  const tmpResult9 = tmp(9653);
  let isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
  const tmp7 = preferVCPrice(5248)();
  const tmpResult10 = tmp(17791);
  const handleCardVisibilityChange = tmpResult10.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange;
  const tmp8 = closure_13();
  const tmpResult11 = tmp(5591);
  const token = tmpResult11.useToken(preferVCPrice(575).colors.BACKGROUND_BASE_LOW);
  const hexToRgbaString = tmp(5006).hexToRgbaString;
  tmp(5006);
  const tmpResult13 = tmp(5006);
  const hexToRgbaStringResult = hexToRgbaString(tmpResult13.hexWithOpacity(token, 0));
  const tmpResult14 = tmp(5591);
  const token1 = tmpResult14.useToken(preferVCPrice(575).colors.BACKGROUND_BASE_LOWEST);
  const tmp13 = preferVCPrice(17792)();
  closure_5 = tmp13;
  const items1 = [heroBlock.rankedSkuIds, tmp13];
  const memo = react.useMemo(() => closure_5(heroBlock.rankedSkuIds), items1);
  const tmpResult15 = tmp(16922);
  const filteredAndSortedProducts = tmpResult15.useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  constants = tmp15;
  let unpublishedAt;
  const tmp16 = preferVCPrice(7320);
  const analyticsLocations = tmp16(preferVCPrice(7345).COLLECTIBLES_SHOP_HERO).analyticsLocations;
  if (stateFromStores != null) {
    unpublishedAt = stateFromStores.unpublishedAt;
  }
  const items2 = [unpublishedAt, preferVCPrice, screen === constants.FEATURED_PAGE];
  if (undefined === stateFromStores) {
    return null;
  } else {
    let tmp22Result9;
    const tmp19 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
    const tmp20 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
    if (tmp4) {
      let tmp6Result;
      const tmpResult16 = tmp(5016);
      if (tmpResult16.isThemeDark(tmp7)) {
        tmp6Result = tmp6(17804);
      } else {
        tmp6Result = tmp6(17805);
      }
      heroBannerUrl = tmp6Result;
    }
    const obj4 = { value: analyticsLocations, children: closure_10(tmp6Result3, obj5) };
    const AnalyticsLocationProvider = tmp(7320).AnalyticsLocationProvider;
    obj5 = { onChange: handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId, children: closure_12(stateFromStores, obj6) };
    const obj7 = { style: tmp8.heroBannerContainer, children: tmp24Result };
    tmp24Result = null != heroBannerUrl;
    obj6 = { style: tmp8.heroContainer, children: items5 };
    tmp6Result3 = preferVCPrice(17806);
    if (tmp24Result) {
      let tmp22Result = tmp4;
      const tmp27 = closure_11;
      if (tmp4) {
        const obj8 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"], start: null, end: null, style: tmp8.orbsBackgroundGradient };
        ({ START: obj16.start, END: obj16.end } = closure_9);
        tmp22Result = tmp22(tmp6(5582), obj8);
      }
      const obj9 = { children: items3 };
      items3 = [tmp22Result, , ];
      const obj10 = { style: tmp8.heroBannerImage, source: obj11 };
      obj11 = { uri: heroBannerUrl };
      items3[1] = closure_10(preferVCPrice(5712), obj10);
      const obj12 = { colors: items4, start: null, end: null, style: tmp8.fadeOutGradient };
      items4 = [hexToRgbaStringResult, token1];
      ({ START: obj20.start, END: obj20.end } = closure_9);
      items3[2] = closure_10(preferVCPrice(5582), obj12);
      tmp24Result = tmp24(tmp27, obj9);
    }
    items5 = [closure_10(stateFromStores, obj7), , ];
    const obj13 = { style: tmp8.heroInfoContainer, children: tmp24Result2 };
    if (tmp4) {
      let tmp22Result6 = null != tmp19;
      const obj14 = { style: tmp8.orbsInnerContainer, children: items7 };
      if (tmp22Result6) {
        const obj15 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp8.orbsTitle, children: tmp19 };
        tmp22Result6 = tmp22(tmp(5619).Text, obj15);
      }
      const items6 = [tmp22Result6, ];
      let tmp22Result7 = null != tmp20 && "" !== tmp20;
      if (tmp22Result7) {
        const obj17 = { variant: "text-md/medium", children: tmp20 };
        tmp22Result7 = tmp22(tmp(5619).Text, obj17);
      }
      const obj18 = { children: items6 };
      items6[1] = tmp22Result7;
      items7 = [closure_12(stateFromStores, obj18), ];
      if (isEligibleForQuests) {
        const obj19 = {
          variant: "tertiary",
          shrink: true,
          grow: false,
          size: "sm",
          text: intl3.string(tmp(1114).t.ynollq),
          onPress: function onTapEarnOrbs() {
                  const obj = heroBlock(navigation[34]);
                  const obj2 = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[35]).QuestContent.ORBS_SHOP_HERO_CTA };
                  obj.openQuestHome(obj2);
                }
        };
        const Button = tmp(5629).Button;
        intl3 = tmp(1114).intl;
        isEligibleForQuests = tmp22(Button, obj19);
      }
      items7[1] = isEligibleForQuests;
      tmp24Result2 = tmp24(tmp25, obj14);
    } else {
      const obj21 = {
        accessibilityRole: "button",
        accessibilityLabel: intl.formatToPlainString(tmp(1114).t.FNtLb3, obj22),
        accessibilityHint: intl2.string(tmp(1114).t.F8ma9x),
        activeOpacity: 0.6,
        androidRippleConfig: obj23,
        hitSlop: 8,
        onPress() {
              let _String;
              let pageCategory;
              let pageSection;
              let tilePosition;
              let sessionId;
              const track = AnalyticsUtilsDefault.track;
              const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportDefault.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
              AnalyticsUtilsDefault;
              const tmp = stateFromStores;
              if (analyticsContext != null) {
                sessionId = tmp3.sessionId;
              }
              const obj = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: pageSection, page_category: pageCategory, tile_type: "HERO_BLOCK", tile_position: _String(tilePosition), cta_name: null };
              pageSection = undefined;
              if (analyticsContext != null) {
                pageSection = tmp3.pageSection;
              }
              pageCategory = undefined;
              if (analyticsContext != null) {
                pageCategory = tmp3.pageCategory;
              }
              tilePosition = undefined;
              _String = String;
              if (analyticsContext != null) {
                tilePosition = tmp3.tilePosition;
              }
              track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
              navigation.navigate(metroImportAll.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { category: tmp, analyticsContext });
            },
        children: closure_12(stateFromStores, obj24)
      };
      const PressableOpacity = tmp(6974).PressableOpacity;
      intl = tmp(1114).intl;
      obj22 = { category: stateFromStores.name };
      intl2 = tmp(1114).intl;
      let tmp22Result8 = null != heroLogoUrl;
      obj23 = { radius: preferVCPrice(575).radii.lg };
      obj24 = { style: tmp8.innerContainer, children: items8 };
      if (tmp22Result8) {
        const obj25 = { style: tmp8.heroLogoContainer, children: closure_10(preferVCPrice(5712), obj26) };
        obj26 = { style: tmp8.heroLogo, source: obj27 };
        obj27 = { uri: heroLogoUrl };
        tmp22Result8 = tmp22(tmp25, obj25);
      }
      items8 = [tmp22Result8, ];
      const obj28 = { style: tmp8.heroViewAllIcon, children: closure_10(tmp(7372).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
      items8[1] = closure_10(stateFromStores, obj28);
      tmp24Result2 = tmp22(PressableOpacity, obj21, stateFromStores.storeListingId);
    }
    items5[1] = closure_10(stateFromStores, obj13);
    const obj29 = { style: tmp8.productCardsContainer, children: closure_10(LayerScope, obj37) };
    LayerScope = tmp(5606).LayerScope;
    if (tmp4) {
      const obj30 = { products: filteredAndSortedProducts, loadingCardsNum: num, preferVCPrice, accessibilityLabel: intl5.formatToPlainString(tmp(1114).t.FNtLb3, obj31) };
      num = 4;
      const tmp6Result4 = preferVCPrice(17807);
      if (0 !== filteredAndSortedProducts.length) {
        num = filteredAndSortedProducts.length;
      }
      intl5 = tmp(1114).intl;
      obj31 = { category: stateFromStores.name };
      tmp22Result9 = tmp22(tmp6Result4, obj30);
    } else {
      let tmp22Result10;
      const tmp35 = closure_11;
      if (0 === filteredAndSortedProducts.length) {
        const obj32 = { accessibilityLabel: intl4.formatToPlainString(tmp(1114).t.FNtLb3, obj33) };
        intl4 = tmp(1114).intl;
        obj33 = { category: stateFromStores.name };
        tmp22Result10 = tmp22(SkeletonLoading, obj32);
      } else {
        const obj34 = {
          horizontal: true,
          accessibilityLabel: intl6.formatToPlainString(tmp(1114).t.FNtLb3, obj35),
          accessibilityRole: "list",
          data: filteredAndSortedProducts,
          onScroll: handleDismissCoachmarkOnScroll,
          renderItem: tmp18,
          decelerationRate: "fast",
          snapToInterval: tmp(9437).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(575).space.PX_12,
          showsHorizontalScrollIndicator: false,
          ListHeaderComponent() {
                  const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
                  ({ width: preferVCPrice(navigation[8]).space.PX_16 });
                  return closure_1_10(stateFromStores, obj);
                },
          ListFooterComponent() {
                  const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_16 } };
                  ({ width: preferVCPrice(navigation[8]).space.PX_16 });
                  return closure_1_10(stateFromStores, obj);
                },
          ItemSeparatorComponent() {
                  const obj = { style: { width: preferVCPrice(navigation[8]).space.PX_12 } };
                  ({ width: preferVCPrice(navigation[8]).space.PX_12 });
                  return closure_1_10(stateFromStores, obj);
                }
        };
        const FlashList = tmp(7288).FlashList;
        intl6 = tmp(1114).intl;
        obj35 = { category: stateFromStores.name };
        tmp22Result10 = tmp22(FlashList, obj34);
      }
      const obj36 = { children: tmp22Result10 };
      tmp22Result9 = tmp22(tmp35, obj36);
    }
    obj37 = { children: tmp22Result9 };
    items5[2] = closure_10(stateFromStores, obj29);
    return closure_10(AnalyticsLocationProvider, obj4);
  }
};
