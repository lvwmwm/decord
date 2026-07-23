// Module ID: 14491
// Function ID: 110678
// Name: SkeletonLoading
// Dependencies: [31, 27, 6774, 655, 653, 33, 8663, 4130, 689, 13981, 14483, 1456, 8666, 566, 4066, 11845, 3834, 3974, 13973, 13975, 5464, 5484, 14484, 675, 3976, 14486, 14487, 11848, 4554, 4126, 4543, 1212, 10919, 4981, 4660, 5514, 5449, 14488, 7879, 2]
// Exports: default

// Module 14491 (SkeletonLoading)
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "onChange";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_7 } from "items";
import ME from "ME";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function SkeletonLoading(accessibilityLabel) {
  let obj = {
    style: _createForOfIteratorHelperLoose().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: Array.from({ length: 10 }).map((arg0, arg1) => {
      const obj = { width: outer1_0(outer1_2[6]).COLLECTIBLES_SHOP_CARD_WIDTH };
      return outer1_11(outer1_1(outer1_2[9]), obj, arg1);
    })
  };
  return callback(closure_5, obj);
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: closure_10 } = ME);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = jsxProd);
const result = 0.75 * require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH;
_createForOfIteratorHelperLoose = { heroContainer: { width: "100%" }, heroBannerContainer: _createForOfIteratorHelperLoose, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 } };
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.innerContainer = obj1;
_createForOfIteratorHelperLoose.heroLogoContainer = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
_createForOfIteratorHelperLoose.heroLogo = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
_createForOfIteratorHelperLoose.heroViewAllIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.orbsInnerContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.orbsTitle = { fontSize: 24, lineHeight: 30 };
_createForOfIteratorHelperLoose.productCardsContainer = { zIndex: 1 };
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.skeletonContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result1 = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  let stateFromStores;
  let c5;
  let c6;
  let obj = heroBlock(14483);
  let obj1 = heroBlock(1456);
  const dependencyMap = obj1.useNavigation();
  let obj2 = heroBlock(8666);
  const React = obj2.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (null == heroBannerUrl) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let obj3 = heroBlock(566);
  const items = [c6];
  stateFromStores = obj3.useStateFromStores(items, () => _undefined2.getCategory(heroBlock.categorySkuId));
  let obj4 = heroBlock(11845);
  const tmp4 = _createForOfIteratorHelperLoose();
  let obj5 = heroBlock(3834);
  const token = obj5.useToken(preferVCPrice(689).colors.BACKGROUND_BASE_LOW);
  let obj6 = heroBlock(3974);
  let obj7 = heroBlock(3974);
  const tmp3 = preferVCPrice(4066)();
  let obj8 = heroBlock(3834);
  const token1 = obj8.useToken(preferVCPrice(689).colors.BACKGROUND_BASE_LOWEST);
  const tmp8 = preferVCPrice(13973)();
  c5 = tmp8;
  const items1 = [heroBlock.rankedSkuIds, tmp8];
  const memo = React.useMemo(() => _undefined(heroBlock.rankedSkuIds), items1);
  let obj9 = heroBlock(13975);
  const filteredAndSortedProducts = obj9.useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp2 });
  c6 = tmp10;
  const hexToRgbaStringResult = obj6.hexToRgbaString(obj7.hexWithOpacity(token, 0));
  let unpublishedAt;
  if (null != stateFromStores) {
    unpublishedAt = stateFromStores.unpublishedAt;
  }
  const items2 = [unpublishedAt, preferVCPrice, heroBlock.screen === constants.FEATURED_PAGE];
  if (undefined === stateFromStores) {
    return null;
  } else {
    const tmp14 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
    const tmp15 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
    if (!tmp2) {
      obj = { value: tmp11(preferVCPrice(5484).COLLECTIBLES_SHOP_HERO).analyticsLocations };
      obj = { onChange: obj4.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId };
      obj1 = { style: tmp4.heroContainer };
      obj2 = { style: tmp4.heroBannerContainer };
      let tmp33Result = null != heroBannerUrl;
      if (tmp33Result) {
        obj3 = {};
        let tmp35 = tmp2;
        if (tmp2) {
          obj4 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"] };
          ({ START: obj17.start, END: obj17.end } = closure_10);
          obj4.style = tmp4.orbsBackgroundGradient;
          tmp35 = callback(preferVCPrice(4554), obj4);
        }
        const items3 = [tmp35, , ];
        obj5 = {};
        const items4 = [tmp4.heroBannerImage];
        obj5.style = items4;
        obj6 = { uri: heroBannerUrl };
        obj5.source = obj6;
        items3[1] = callback(stateFromStores, obj5);
        obj7 = {};
        const items5 = [hexToRgbaStringResult, token1];
        obj7.colors = items5;
        ({ START: obj20.start, END: obj20.end } = closure_10);
        obj7.style = tmp4.fadeOutGradient;
        items3[2] = callback(preferVCPrice(4554), obj7);
        obj3.children = items3;
        tmp33Result = closure_13(closure_12, obj3);
        const tmp33 = closure_13;
        const tmp34 = closure_12;
      }
      obj2.children = tmp33Result;
      const items6 = [callback(c5, obj2), , ];
      obj8 = { style: tmp4.heroInfoContainer };
      if (tmp2) {
        obj9 = { style: tmp4.orbsInnerContainer };
        let obj10 = {};
        let tmp68 = null != tmp14;
        if (tmp68) {
          const obj11 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp4.orbsTitle, children: tmp14 };
          tmp68 = callback(heroBlock(4126).Text, obj11);
        }
        const items7 = [tmp68, ];
        let tmp72 = null != tmp15;
        if (tmp72) {
          tmp72 = "" !== tmp15;
        }
        if (tmp72) {
          const obj12 = { variant: "text-md/medium", children: tmp15 };
          tmp72 = callback(heroBlock(4126).Text, obj12);
        }
        items7[1] = tmp72;
        obj10.children = items7;
        const items8 = [closure_13(c5, obj10), ];
        const obj13 = { variant: "tertiary", shrink: true, grow: false, size: "sm" };
        const intl3 = heroBlock(1212).intl;
        obj13.text = intl3.string(heroBlock(1212).t.ynollq);
        obj13.onPress = function onPress() {
          let obj = heroBlock(navigation[32]);
          obj = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[33]).QuestContent.ORBS_SHOP_HERO_CTA };
          obj.openQuestHome(obj);
        };
        items8[1] = callback(heroBlock(4543).Button, obj13);
        obj9.children = items8;
        let tmp48Result = tmp65(c5, obj9);
        const tmp66 = c5;
        const tmp67 = c5;
      } else {
        const obj14 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.6, androidRippleConfig: null, hitSlop: 8 };
        const intl = heroBlock(1212).intl;
        const obj15 = { category: stateFromStores.name };
        obj14.accessibilityLabel = intl.formatToPlainString(heroBlock(1212).t.FNtLb3, obj15);
        const intl2 = heroBlock(1212).intl;
        obj14.accessibilityHint = intl2.string(heroBlock(1212).t.F8ma9x);
        const obj16 = { radius: preferVCPrice(689).radii.lg };
        obj14.androidRippleConfig = obj16;
        obj14.onPress = function onPress() {
          let obj = preferVCPrice(navigation[23]);
          obj = {};
          let sessionId;
          if (null != getSystemLocale) {
            sessionId = getSystemLocale.sessionId;
          }
          obj.collectibles_shop_session_id = sessionId;
          obj.sku_id = heroBlock.categoryStoreListingId;
          obj.page_type = "mobile_home";
          let pageSection;
          if (null != getSystemLocale) {
            pageSection = getSystemLocale.pageSection;
          }
          obj.page_section = pageSection;
          let pageCategory;
          if (null != getSystemLocale) {
            pageCategory = getSystemLocale.pageCategory;
          }
          obj.page_category = pageCategory;
          obj.tile_type = "HERO_BLOCK";
          let tilePosition;
          if (null != getSystemLocale) {
            tilePosition = getSystemLocale.tilePosition;
          }
          obj.tile_position = String(tilePosition);
          obj.cta_name = null;
          obj.track(outer1_8.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          obj = { category: stateFromStores, analyticsContext: getSystemLocale };
          navigation.navigate(outer1_9.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
        };
        const obj17 = { style: tmp4.innerContainer };
        let tmp54 = null != heroLogoUrl;
        if (tmp54) {
          const obj18 = { style: tmp4.heroLogoContainer };
          const obj19 = { style: tmp4.heroLogo };
          const obj20 = { uri: heroLogoUrl };
          obj19.source = obj20;
          obj18.children = callback(stateFromStores, obj19);
          tmp54 = callback(c5, obj18);
        }
        const items9 = [tmp54, ];
        const obj21 = { style: tmp4.heroViewAllIcon, children: callback(heroBlock(5514).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
        items9[1] = callback(c5, obj21);
        obj17.children = items9;
        obj14.children = closure_13(c5, obj17);
        tmp48Result = callback(heroBlock(4660).PressableOpacity, obj14, stateFromStores.storeListingId);
        const tmp48 = callback;
        const tmp52 = closure_13;
        const tmp53 = c5;
      }
      obj8.children = tmp48Result;
      items6[1] = callback(c5, obj8);
      const obj22 = { style: tmp4.productCardsContainer };
      const obj23 = {};
      if (tmp2) {
        const obj24 = { products: filteredAndSortedProducts };
        let num17 = 4;
        if (0 !== filteredAndSortedProducts.length) {
          num17 = filteredAndSortedProducts.length;
        }
        obj24.loadingCardsNum = num17;
        obj24.preferVCPrice = preferVCPrice;
        const intl5 = heroBlock(1212).intl;
        const obj25 = { category: stateFromStores.name };
        obj24.accessibilityLabel = intl5.formatToPlainString(heroBlock(1212).t.FNtLb3, obj25);
        let tmp84Result = tmp84(preferVCPrice(14488), obj24);
        const tmp94 = preferVCPrice(14488);
      } else {
        const obj26 = {};
        if (0 === filteredAndSortedProducts.length) {
          const obj27 = {};
          const intl4 = heroBlock(1212).intl;
          const obj28 = { category: stateFromStores.name };
          obj27.accessibilityLabel = intl4.formatToPlainString(heroBlock(1212).t.FNtLb3, obj28);
          let tmp90 = callback(SkeletonLoading, obj27);
        } else {
          const obj29 = { horizontal: true, accessibilityLabel: null, accessibilityRole: "list" };
          const intl6 = heroBlock(1212).intl;
          const obj30 = { category: stateFromStores.name };
          obj29.accessibilityLabel = intl6.formatToPlainString(heroBlock(1212).t.FNtLb3, obj30);
          obj29.data = filteredAndSortedProducts;
          obj29.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj29.renderItem = tmp13;
          obj29.decelerationRate = "fast";
          stateFromStores = preferVCPrice;
          obj29.snapToInterval = heroBlock(8663).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(689).space.PX_12;
          obj29.showsHorizontalScrollIndicator = false;
          obj29.ListHeaderComponent = function ListHeaderComponent() {
            let obj = {};
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj.style = obj;
            return outer1_11(c5, obj);
          };
          obj29.ListFooterComponent = function ListFooterComponent() {
            let obj = {};
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj.style = obj;
            return outer1_11(c5, obj);
          };
          obj29.ItemSeparatorComponent = function ItemSeparatorComponent() {
            let obj = {};
            obj = { width: preferVCPrice(navigation[8]).space.PX_12 };
            obj.style = obj;
            return outer1_11(c5, obj);
          };
          tmp90 = callback(heroBlock(7879).FlashList, obj29);
        }
        obj26.children = tmp90;
        tmp84Result = tmp84(closure_12, obj26);
        const tmp85 = closure_12;
      }
      obj23.children = tmp84Result;
      obj22.children = callback(heroBlock(5449).LayerScope, obj23);
      items6[2] = callback(c5, obj22);
      obj1.children = items6;
      obj.children = closure_13(c5, obj1);
      obj.children = callback(preferVCPrice(11848), obj);
      return callback(heroBlock(5464).AnalyticsLocationProvider, obj);
    } else {
      obj10 = heroBlock(3976);
      if (obj10.isThemeDark(tmp3)) {
        let tmp18Result = tmp18(14486);
      } else {
        tmp18Result = tmp18(14487);
      }
    }
  }
};
