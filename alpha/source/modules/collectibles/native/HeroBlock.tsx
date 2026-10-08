// Module ID: 16009
// Function ID: 16010
// Name: HeroBlock
// Dependencies: [19, 17, 7252, 1087, 1085, 21, 8937, 5090, 587, 558, 576, 9051, 16010, 1502, 8940, 504, 10576, 4991, 16011, 4778, 4927, 16012, 15154, 6841, 6865, 16022, 1264, 10572, 5982, 4929, 16024, 16025, 5387, 6164, 5086, 5375, 1126, 6189, 6892, 6835, 16026, 8600, 16029, 2]

// Module 16009 (HeroBlock)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8937 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8940 */;
import SkeletonCardDefault from "SkeletonCard" /* 9051 */;
import react_mod from "react" /* 19 */;
import CollectiblesCategoryStore_mod from "CollectiblesCategoryStore" /* 7252 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let CollectiblesAnalyticsProvider, dependencyMap, heroBlock, navigation, obj1, tmp3, tmpResult1;

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
const FeaturedFirstCardCoachmarkAnchorDefault = tmp2(16022);
let react = react_mod;
const View = react_native.View;
let CollectiblesCategoryStore = CollectiblesCategoryStore_mod;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function SkeletonLoading(accessibilityLabel) {
  let first;
  let tmp4;
  let obj = react2;
  const cResult = obj.c(5);
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  const tmp2 = closure_13();
  const skeletonContainer = tmp2.skeletonContainer;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { busy: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const _Array = Array;
    const arr = Array.from({ length: 10 });
    const mapped = arr.map((item, index) => {
      const obj = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
      const tmp = SkeletonCardDefault;
      return closure_1_10(tmp, obj, index);
    });
    cResult[1] = mapped;
    tmp4 = mapped;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === accessibilityLabel) {
    let tmp6;
    if (cResult[3] === tmp2.skeletonContainer) {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  const tmp7 = authStore(View, { style: skeletonContainer, accessibilityRole: "list", accessibilityLabel, accessibilityState: first, accessible: true, children: tmp4 });
  cResult[2] = accessibilityLabel;
  cResult[3] = tmp2.skeletonContainer;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function SkeletonLoading(accessibilityLabel) {
  let arr;
  let obj = {
    style: closure_13().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: arr.map((item, index) => {
      const obj = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
      const tmp = SkeletonCardDefault;
      return closure_1_10(tmp, obj, index);
    })
  };
  arr = Array.from({ length: 10 });
  return authStore(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((heroBlock) => {
  let closure_5;
  let first;
  let tmp24;
  let tmp8;
  const tmp = heroBlock;
  let tmp2 = navigation;
  let obj = heroBlock(navigation[10]);
  const cResult = obj.c(70);
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  const screen = heroBlock.screen;
  let obj2 = heroBlock(navigation[12]);
  const handleDismissCoachmarkOnScroll = obj2.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  let obj3 = heroBlock(navigation[13]);
  navigation = obj3.useNavigation();
  const obj4 = heroBlock(navigation[14]);
  const collectiblesAnalyticsContext = obj4.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== heroBlock.categorySkuId) {
    class C {
      constructor() {
        return closure_5.getCategory(heroBlock.categorySkuId);
      }
    }
    cResult[1] = heroBlock.categorySkuId;
    cResult[2] = C;
    tmp8 = C;
  } else {
    class C {
      constructor() {
        return closure_5.getCategory(heroBlock.categorySkuId);
      }
    }
  }
  let tmpResult = tmp(tmp2[15]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_5.getCategory(heroBlock.categorySkuId);
      }
    }
    const isEligibleForQuests = obj6.getIsEligibleForQuests();
    cResult[3] = isEligibleForQuests;
  } else {
    class C {
      constructor() {
        return closure_5.getCategory(heroBlock.categorySkuId);
      }
    }
  }
  preferVCPrice(tmp2[17])();
  const tmpResult6 = tmp(tmp2[18]);
  const handleCardVisibilityChange = tmpResult6.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange;
  closure_13();
  const tmpResult7 = tmp(tmp2[19]);
  const token = tmpResult7.useToken(preferVCPrice(tmp2[8]).colors.BACKGROUND_BASE_LOW);
  if (cResult[4] !== token) {
    class C {
      constructor() {
        return closure_5.getCategory(heroBlock.categorySkuId);
      }
    }
    const hexToRgbaString = tmp18.hexToRgbaString;
    const tmpResult8 = tmp(tmp2[20]);
    cResult[4] = token;
    cResult[5] = hexToRgbaString(tmpResult8.hexWithOpacity(token, 0));
    const hexToRgbaStringResult = hexToRgbaString(tmpResult8.hexWithOpacity(token, 0));
  } else {
    class C {
      constructor() {
        return closure_5.getCategory(heroBlock.categorySkuId);
      }
    }
  }
  const tmpResult9 = tmp(tmp2[19]);
  const token1 = tmpResult9.useToken(tmp13(tmp2[8]).colors.BACKGROUND_BASE_LOWEST);
  const tmp21 = preferVCPrice(tmp2[21])();
  const rankedSkuIds = heroBlock.rankedSkuIds;
  if (cResult[6] === tmp21) {
    class C {
      constructor() {
        return closure_5.getCategory(heroBlock.categorySkuId);
      }
    }
    if (cResult[9] === tmp22) {
      class C {
        constructor() {
          return closure_5.getCategory(heroBlock.categorySkuId);
        }
      }
      const tmpResult10 = tmp(tmp2[22]);
      const filteredAndSortedProducts = tmpResult10.useFilteredAndSortedProducts(tmp24);
      CollectiblesCategoryStore = tmp27;
      const tmp13Result = preferVCPrice(tmp2[23]);
      const analyticsLocations = tmp13Result(tmp13(tmp2[24]).COLLECTIBLES_SHOP_HERO).analyticsLocations;
      const tmp29 = cResult[12];
      if (stateFromStores != null) {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
      }
      if (tmp29 === undefined) {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
      }
      if (stateFromStores != null) {
        class C {
          constructor() {
            return closure_5.getCategory(heroBlock.categorySkuId);
          }
        }
      }
      class M {
        constructor(arg0) {
          index = heroBlock.index;
          tmp = jsx;
          tmp3 = closure_2;
          tmp2 = closure_1;
          obj = { solidBackground: true, product: heroBlock.item, unpublishedAt: null, preferVCPrice: null };
          unpublishedAt = undefined;
          tmp4 = closure_1(closure_2[6]);
          if (closure_4 != null) {
            unpublishedAt = closure_4.unpublishedAt;
          }
          obj.unpublishedAt = unpublishedAt;
          obj.preferVCPrice = preferVCPrice;
          tmpResult = tmp(tmp4, obj);
          obj1 = { newValue: { tilePosition: index }, children: null };
          tmpResult1 = tmpResult;
          CollectiblesAnalyticsProvider = closure_0(tmp3[14]).CollectiblesAnalyticsProvider;
          if (0 === index) {
            tmp8 = closure_5;
            tmpResult1 = tmpResult;
            if (closure_5) {
              obj4 = { children: null };
              obj4.children = tmpResult;
              tmpResult1 = tmp(tmp2(tmp3[25]), obj4);
            }
          }
          obj1.children = tmpResult1;
          return tmp(CollectiblesAnalyticsProvider, obj1);
        }
      }
      cResult[12] = undefined;
      cResult[13] = screen === constants.FEATURED_PAGE;
      cResult[14] = preferVCPrice;
      cResult[15] = M;
    }
    const obj5 = { products: tmp22, bypassAndroidUnsyncedFilter: null != stateFromStores && stateFromStores.isOrbsExclusive };
    cResult[9] = tmp22;
    cResult[10] = null != stateFromStores && stateFromStores.isOrbsExclusive;
    cResult[11] = obj5;
    tmp24 = obj5;
  }
  cResult[6] = tmp21;
  cResult[7] = rankedSkuIds;
  cResult[8] = tmp21(rankedSkuIds);
  const tmp21Result = tmp21(rankedSkuIds);
}) : ((heroBlock) => {
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
  let obj = heroBlock(16010);
  const handleDismissCoachmarkOnScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  let obj2 = heroBlock(1502);
  dependencyMap = obj2.useNavigation();
  let obj3 = heroBlock(8940);
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
  const tmpResult9 = tmp(10576);
  let isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
  const tmp7 = preferVCPrice(4991)();
  const tmpResult10 = tmp(16011);
  const handleCardVisibilityChange = tmpResult10.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange;
  const tmp8 = closure_13();
  const tmpResult11 = tmp(4778);
  const token = tmpResult11.useToken(preferVCPrice(587).colors.BACKGROUND_BASE_LOW);
  const hexToRgbaString = tmp(4927).hexToRgbaString;
  tmp(4927);
  const tmpResult13 = tmp(4927);
  const hexToRgbaStringResult = hexToRgbaString(tmpResult13.hexWithOpacity(token, 0));
  const tmpResult14 = tmp(4778);
  const token1 = tmpResult14.useToken(preferVCPrice(587).colors.BACKGROUND_BASE_LOWEST);
  const tmp13 = preferVCPrice(16012)();
  closure_5 = tmp13;
  const items1 = [heroBlock.rankedSkuIds, tmp13];
  const memo = react.useMemo(() => closure_5(heroBlock.rankedSkuIds), items1);
  const tmpResult15 = tmp(15154);
  const filteredAndSortedProducts = tmpResult15.useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  constants = tmp15;
  let unpublishedAt;
  const tmp16 = preferVCPrice(6841);
  const analyticsLocations = tmp16(preferVCPrice(6865).COLLECTIBLES_SHOP_HERO).analyticsLocations;
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
      const tmpResult16 = tmp(4929);
      if (tmpResult16.isThemeDark(tmp7)) {
        tmp6Result = tmp6(16024);
      } else {
        tmp6Result = tmp6(16025);
      }
      heroBannerUrl = tmp6Result;
    }
    const obj4 = { value: analyticsLocations, children: closure_10(tmp6Result3, obj5) };
    const AnalyticsLocationProvider = tmp(6841).AnalyticsLocationProvider;
    obj5 = { onChange: handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId, children: closure_12(stateFromStores, obj6) };
    const obj7 = { style: tmp8.heroBannerContainer, children: tmp24Result };
    tmp24Result = null != heroBannerUrl;
    obj6 = { style: tmp8.heroContainer, children: items5 };
    tmp6Result3 = preferVCPrice(16029);
    if (tmp24Result) {
      let tmp22Result = tmp4;
      const tmp27 = closure_11;
      if (tmp4) {
        const obj8 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"], start: null, end: null, style: tmp8.orbsBackgroundGradient };
        ({ START: obj16.start, END: obj16.end } = closure_9);
        tmp22Result = tmp22(tmp6(5387), obj8);
      }
      const obj9 = { children: items3 };
      items3 = [tmp22Result, , ];
      const obj10 = { style: tmp8.heroBannerImage, source: obj11 };
      obj11 = { uri: heroBannerUrl };
      items3[1] = closure_10(preferVCPrice(6164), obj10);
      const obj12 = { colors: items4, start: null, end: null, style: tmp8.fadeOutGradient };
      items4 = [hexToRgbaStringResult, token1];
      ({ START: obj20.start, END: obj20.end } = closure_9);
      items3[2] = closure_10(preferVCPrice(5387), obj12);
      tmp24Result = tmp24(tmp27, obj9);
    }
    items5 = [closure_10(stateFromStores, obj7), , ];
    const obj13 = { style: tmp8.heroInfoContainer, children: tmp24Result2 };
    if (tmp4) {
      let tmp22Result6 = null != tmp19;
      const obj14 = { style: tmp8.orbsInnerContainer, children: items7 };
      if (tmp22Result6) {
        const obj15 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp8.orbsTitle, children: tmp19 };
        tmp22Result6 = tmp22(tmp(5086).Text, obj15);
      }
      const items6 = [tmp22Result6, ];
      let tmp22Result7 = null != tmp20 && "" !== tmp20;
      if (tmp22Result7) {
        const obj17 = { variant: "text-md/medium", children: tmp20 };
        tmp22Result7 = tmp22(tmp(5086).Text, obj17);
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
          text: intl3.string(tmp(1126).t.ynollq),
          onPress: function onTapEarnOrbs() {
                  const obj = heroBlock(navigation[27]);
                  const obj2 = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[28]).QuestContent.ORBS_SHOP_HERO_CTA };
                  obj.openQuestHome(obj2);
                }
        };
        const Button = tmp(5375).Button;
        intl3 = tmp(1126).intl;
        isEligibleForQuests = tmp22(Button, obj19);
      }
      items7[1] = isEligibleForQuests;
      tmp24Result2 = tmp24(tmp25, obj14);
    } else {
      const obj21 = {
        accessibilityRole: "button",
        accessibilityLabel: intl.formatToPlainString(tmp(1126).t.FNtLb3, obj22),
        accessibilityHint: intl2.string(tmp(1126).t.F8ma9x),
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
      const PressableOpacity = tmp(6189).PressableOpacity;
      intl = tmp(1126).intl;
      obj22 = { category: stateFromStores.name };
      intl2 = tmp(1126).intl;
      let tmp22Result8 = null != heroLogoUrl;
      obj23 = { radius: preferVCPrice(587).radii.lg };
      obj24 = { style: tmp8.innerContainer, children: items8 };
      if (tmp22Result8) {
        const obj25 = { style: tmp8.heroLogoContainer, children: closure_10(preferVCPrice(6164), obj26) };
        obj26 = { style: tmp8.heroLogo, source: obj27 };
        obj27 = { uri: heroLogoUrl };
        tmp22Result8 = tmp22(tmp25, obj25);
      }
      items8 = [tmp22Result8, ];
      const obj28 = { style: tmp8.heroViewAllIcon, children: closure_10(tmp(6892).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
      items8[1] = closure_10(stateFromStores, obj28);
      tmp24Result2 = tmp22(PressableOpacity, obj21, stateFromStores.storeListingId);
    }
    items5[1] = closure_10(stateFromStores, obj13);
    const obj29 = { style: tmp8.productCardsContainer, children: closure_10(LayerScope, obj37) };
    LayerScope = tmp(6835).LayerScope;
    if (tmp4) {
      const obj30 = { products: filteredAndSortedProducts, loadingCardsNum: num, preferVCPrice, accessibilityLabel: intl5.formatToPlainString(tmp(1126).t.FNtLb3, obj31) };
      num = 4;
      const tmp6Result4 = preferVCPrice(16026);
      if (0 !== filteredAndSortedProducts.length) {
        num = filteredAndSortedProducts.length;
      }
      intl5 = tmp(1126).intl;
      obj31 = { category: stateFromStores.name };
      tmp22Result9 = tmp22(tmp6Result4, obj30);
    } else {
      let tmp22Result10;
      const tmp35 = closure_11;
      if (0 === filteredAndSortedProducts.length) {
        const obj32 = { accessibilityLabel: intl4.formatToPlainString(tmp(1126).t.FNtLb3, obj33) };
        intl4 = tmp(1126).intl;
        obj33 = { category: stateFromStores.name };
        tmp22Result10 = tmp22(closure_14, obj32);
      } else {
        const obj34 = {
          horizontal: true,
          accessibilityLabel: intl6.formatToPlainString(tmp(1126).t.FNtLb3, obj35),
          accessibilityRole: "list",
          data: filteredAndSortedProducts,
          onScroll: handleDismissCoachmarkOnScroll,
          renderItem: tmp18,
          decelerationRate: "fast",
          snapToInterval: tmp(8937).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(587).space.PX_12,
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
        const FlashList = tmp(8600).FlashList;
        intl6 = tmp(1126).intl;
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
});
size = size_mod;
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default tmp6;
