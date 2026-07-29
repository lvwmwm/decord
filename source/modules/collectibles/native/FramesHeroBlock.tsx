// Module ID: 14613
// Function ID: 14614
// Name: SkeletonLoading
// Dependencies: [19, 17, 5798, 678, 676, 21, 8660, 4189, 712, 14109, 14614, 1480, 8663, 589, 4125, 11916, 14101, 14103, 5515, 5535, 14615, 698, 4035, 14617, 14618, 11919, 8738, 4611, 4185, 4600, 1236, 10960, 5038, 4717, 5565, 5502, 14619, 6676, 2]
// Exports: default

// Module 14613 (SkeletonLoading)
import QUICK_SWITCHER from "QUICK_SWITCHER";
import get_ActivityIndicator from "useFilteredAndSortedProducts";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { CollectiblesMobileShopScreen as closure_7 } from "items";
import ME from "ME";
import jsxProd from "expandEventProperties";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function SkeletonLoading(accessibilityLabel) {
  let obj = { style: createCacheKey().skeletonContainer, accessibilityRole: "list", accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityState: { busy: true }, accessible: true, children: null };
  obj[5] = Array.from({ length: 10 }).map((arg0, arg1) => {
    const obj = { width: null };
    obj[0] = callback(8660).COLLECTIBLES_SHOP_CARD_WIDTH;
    return callback3(callback2(14109), obj, arg1);
  });
  return callback(closure_5, obj);
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ AnalyticEvents: metroImportAll, UserSettingsSections: c9, VerticalGradient: c10 } = ME);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
const result = 0.75 * require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH;
createCacheKey = { heroContainer: { width: "100%" }, framesBadgeContainer: null, framesBannerWrapper: null, framesBannerBackgroundImage: null, framesBannerTextContainer: null, framesBannerTitle: null, framesBannerForegroundImage: null, heroBannerContainer: null, heroBannerImage: null, orbsBackgroundGradient: null, heroInfoContainer: null, innerContainer: null, heroLogoContainer: null, heroLogo: null, heroViewAllIcon: null, orbsInnerContainer: null, orbsTitle: null, productCardsContainer: null, skeletonContainer: null };
createCacheKey = { position: "absolute", top: require("Themes").space.PX_24, left: 0, right: 0, paddingHorizontal: require("Themes").space.PX_16, alignItems: "flex-start", zIndex: 2 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: -250, paddingTop: 240, paddingBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center", borderRadius: require("Themes").radii.lg, overflow: "hidden", zIndex: 0 };
let obj1 = { marginTop: -250, paddingTop: 240, paddingBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center", borderRadius: require("Themes").radii.lg, overflow: "hidden", zIndex: 0 };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, resizeMode: "stretch", borderRadius: require("Themes").radii.lg };
let obj2 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, resizeMode: "stretch", borderRadius: require("Themes").radii.lg };
createCacheKey[4] = { flex: 1, paddingRight: require("Themes").space.PX_4, marginTop: require("Themes").space.PX_24 };
let obj3 = { flex: 1, paddingRight: require("Themes").space.PX_4, marginTop: require("Themes").space.PX_24 };
createCacheKey[5] = { marginBottom: require("Themes").space.PX_4 };
let obj5 = { width: 125, height: 125, resizeMode: "contain", transform: null };
let obj4 = { marginBottom: require("Themes").space.PX_4 };
let items = [{ translateY: require("Themes").space.PX_16 }];
obj5[3] = items;
createCacheKey[6] = obj5;
createCacheKey[7] = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
createCacheKey[8] = { width: "100%", height: "100%", resizeMode: "cover" };
createCacheKey[9] = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 };
createCacheKey[10] = { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 };
let obj6 = { translateY: require("Themes").space.PX_16 };
let obj7 = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
createCacheKey[11] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("Themes").space.PX_16, width: "100%", height: "100%" };
createCacheKey[12] = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
createCacheKey[13] = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
let obj8 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("Themes").space.PX_16, width: "100%", height: "100%" };
createCacheKey[14] = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round };
let obj9 = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round };
createCacheKey[15] = { paddingHorizontal: require("Themes").space.PX_16, alignItems: "flex-start", gap: require("Themes").space.PX_16 };
createCacheKey[16] = { fontSize: 24, lineHeight: 30 };
createCacheKey[17] = { zIndex: 1 };
let obj10 = { paddingHorizontal: require("Themes").space.PX_16, alignItems: "flex-start", gap: require("Themes").space.PX_16 };
createCacheKey[18] = { flexDirection: "row", gap: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj11 = { flexDirection: "row", gap: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 };
const result1 = require("updateCategoriesAndProducts").fileFinishedImporting("modules/collectibles/native/FramesHeroBlock.tsx");

export default function _default(heroBlock) {
  let bannerBlock;
  let preferVCPrice;
  heroBlock = heroBlock.heroBlock;
  ({ bannerBlock, preferVCPrice } = heroBlock);
  let dependencyMap;
  let React;
  let stateFromStores;
  let c5;
  let c6;
  let obj = heroBlock(14614);
  let obj1 = heroBlock(1480);
  dependencyMap = obj1.useNavigation();
  let obj2 = heroBlock(8663);
  React = obj2.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let tmpResult = tmp(589);
  const items = [c6];
  stateFromStores = tmpResult.useStateFromStores(items, () => _undefined2.getCategory(heroBlock.categorySkuId));
  tmpResult = tmp(11916);
  const tmp7 = createCacheKey();
  const tmp8 = preferVCPrice(14101)();
  c5 = tmp8;
  const items1 = [heroBlock.rankedSkuIds, tmp8];
  const memo = React.useMemo(() => _undefined(heroBlock.rankedSkuIds), items1);
  const tmp6 = preferVCPrice(4125)();
  const filteredAndSortedProducts = heroBlock(14103).useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  c6 = tmp10;
  const tmpResult1 = heroBlock(14103);
  let unpublishedAt;
  if (stateFromStores != null) {
    unpublishedAt = stateFromStores.unpublishedAt;
  }
  const items2 = [unpublishedAt, preferVCPrice, heroBlock.screen === constants.FEATURED_PAGE];
  if (undefined === stateFromStores) {
    return null;
  } else {
    const tmp14 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
    const tmp15 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
    if (!tmp4) {
      obj = { value: null, children: null };
      obj[0] = tmp11(preferVCPrice(5535).COLLECTIBLES_SHOP_HERO).analyticsLocations;
      obj = { onChange: null, resetKey: null, children: null };
      obj[0] = tmpResult.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange;
      obj[1] = heroBlock.categoryStoreListingId;
      obj1 = { style: null, children: null };
      obj1[0] = tmp7.heroContainer;
      obj2 = { style: null, children: null };
      obj2[0] = tmp7.framesBadgeContainer;
      let tmp5Result = tmp5(11919);
      obj2[1] = callback(tmp5(8738), { location: "CollectiblesShop", disablePressable: true });
      const items3 = [callback(c5, obj2), , , , ];
      const obj3 = { style: null, children: null };
      obj3[0] = tmp7.heroBannerContainer;
      let tmp20Result = null != heroBannerUrl;
      if (tmp20Result) {
        let tmp18Result = tmp4;
        if (tmp4) {
          const obj4 = { colors: null, start: null, end: null, style: null };
          obj4[0] = ["rgba(39, 30, 173, 0.3)", "transparent"];
          ({ START: obj13[1], END: obj13[2] } = closure_10);
          obj4[3] = tmp7.orbsBackgroundGradient;
          tmp18Result = tmp18(tmp5(4611), obj4);
        }
        const obj5 = { children: null };
        const items4 = [tmp18Result, ];
        const obj6 = { style: null, source: null };
        const items5 = [tmp7.heroBannerImage];
        obj6[0] = items5;
        const obj7 = { uri: null };
        obj7[0] = heroBannerUrl;
        obj6[1] = obj7;
        items4[1] = tmp18(stateFromStores, obj6);
        obj5[0] = items4;
        tmp20Result = tmp20(closure_12, obj5);
        const tmp23 = closure_12;
      }
      obj3[1] = tmp20Result;
      items3[1] = callback(c5, obj3);
      const obj8 = { style: null, children: null };
      obj8[0] = tmp7.heroInfoContainer;
      if (tmp4) {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp7.orbsInnerContainer;
        tmp18Result = null != tmp14;
        if (tmp18Result) {
          const obj10 = { variant: "display-md", color: "mobile-text-heading-primary", style: null, children: null };
          obj10[2] = tmp7.orbsTitle;
          obj10[3] = tmp14;
          tmp18Result = tmp18(tmp(4185).Text, obj10);
        }
        const items6 = [tmp18Result, ];
        let tmp18Result1 = null != tmp15;
        if (tmp18Result1) {
          tmp18Result1 = "" !== tmp15;
        }
        if (tmp18Result1) {
          const obj11 = { variant: "text-md/medium", children: null };
          obj11[1] = tmp15;
          tmp18Result1 = tmp18(tmp(4185).Text, obj11);
        }
        const obj12 = { children: null };
        items6[1] = tmp18Result1;
        obj12[0] = items6;
        const items7 = [tmp20(tmp21, obj12), ];
        const obj13 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
        const intl3 = tmp(1236).intl;
        obj13[4] = intl3.string(tmp(1236).t.ynollq);
        obj13[5] = function onPress() {
          let obj = heroBlock(navigation[31]);
          obj = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[32]).QuestContent.ORBS_SHOP_HERO_CTA };
          obj.openQuestHome(obj);
        };
        items7[1] = tmp18(tmp(4600).Button, obj13);
        obj9[1] = items7;
        tmp20Result = tmp20(tmp21, obj9);
      } else {
        const obj14 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.6, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
        const intl = tmp(1236).intl;
        const obj15 = { category: null };
        obj15[0] = stateFromStores.name;
        obj14[1] = intl.formatToPlainString(tmp(1236).t.FNtLb3, obj15);
        const intl2 = tmp(1236).intl;
        obj14[2] = intl2.string(tmp(1236).t.F8ma9x);
        const obj16 = { radius: null };
        obj16[0] = tmp5(712).radii.lg;
        obj14[4] = obj16;
        obj14[6] = function onPress() {
          let obj = preferVCPrice(navigation[21]);
          let sessionId;
          if (QUICK_SWITCHER != null) {
            sessionId = tmp2.sessionId;
          }
          obj = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "HERO_BLOCK", tile_position: null, cta_name: null };
          let pageSection;
          if (QUICK_SWITCHER != null) {
            pageSection = tmp2.pageSection;
          }
          obj[3] = pageSection;
          let pageCategory;
          if (QUICK_SWITCHER != null) {
            pageCategory = tmp2.pageCategory;
          }
          obj[4] = pageCategory;
          let tilePosition;
          if (QUICK_SWITCHER != null) {
            tilePosition = tmp2.tilePosition;
          }
          obj[6] = String(tilePosition);
          obj.track(outer1_8.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          navigation.navigate(outer1_9.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { category: stateFromStores, analyticsContext: QUICK_SWITCHER });
        };
        const obj17 = { style: null, children: null };
        obj17[0] = tmp7.innerContainer;
        let tmp18Result2 = null != heroLogoUrl;
        if (tmp18Result2) {
          const obj18 = { style: null, children: null };
          obj18[0] = tmp7.heroLogoContainer;
          const obj19 = { style: null, source: null };
          obj19[0] = tmp7.heroLogo;
          const obj20 = { uri: null };
          obj20[0] = heroLogoUrl;
          obj19[1] = obj20;
          obj18[1] = tmp18(stateFromStores, obj19);
          tmp18Result2 = tmp18(tmp21, obj18);
        }
        const items8 = [tmp18Result2, ];
        const obj21 = { style: null, children: null };
        obj21[0] = tmp7.heroViewAllIcon;
        obj21[1] = tmp18(tmp(5565).ChevronSmallRightIcon, { size: "sm", color: "white" });
        items8[1] = tmp18(tmp21, obj21);
        obj17[1] = items8;
        obj14[7] = tmp20(tmp21, obj17);
        tmp20Result = tmp18(tmp(4717).PressableOpacity, obj14, stateFromStores.storeListingId);
      }
      obj8[1] = tmp20Result;
      items3[2] = callback(c5, obj8);
      const obj22 = { style: null, children: null };
      obj22[0] = tmp7.productCardsContainer;
      if (tmp4) {
        const obj23 = { products: null, loadingCardsNum: null, preferVCPrice: null, accessibilityLabel: null };
        obj23[0] = filteredAndSortedProducts;
        let num2 = 4;
        tmp5Result = tmp5(14619);
        if (0 !== filteredAndSortedProducts.length) {
          num2 = filteredAndSortedProducts.length;
        }
        obj23[1] = num2;
        obj23[2] = preferVCPrice;
        const intl5 = tmp(1236).intl;
        const obj24 = { category: null };
        obj24[0] = stateFromStores.name;
        obj23[3] = intl5.formatToPlainString(tmp(1236).t.FNtLb3, obj24);
        let tmp18Result3 = tmp18(tmp5Result, obj23);
      } else {
        if (0 === filteredAndSortedProducts.length) {
          const obj25 = { accessibilityLabel: null };
          const intl4 = tmp(1236).intl;
          const obj26 = { category: null };
          obj26[0] = stateFromStores.name;
          obj25[0] = intl4.formatToPlainString(tmp(1236).t.FNtLb3, obj26);
          let tmp18Result4 = tmp18(SkeletonLoading, obj25);
        } else {
          const obj27 = { horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, onScroll: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
          const intl6 = tmp(1236).intl;
          const obj28 = { category: null };
          obj28[0] = stateFromStores.name;
          obj27[1] = intl6.formatToPlainString(tmp(1236).t.FNtLb3, obj28);
          obj27[3] = filteredAndSortedProducts;
          obj27[4] = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj27[5] = tmp13;
          obj27[7] = tmp(8660).COLLECTIBLES_SHOP_CARD_WIDTH + tmp5(712).space.PX_12;
          obj27[9] = function ListHeaderComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj[0] = obj;
            return callback(c5, obj);
          };
          obj27[10] = function ListFooterComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_16 };
            obj[0] = obj;
            return callback(c5, obj);
          };
          obj27[11] = function ItemSeparatorComponent() {
            let obj = { style: null };
            obj = { width: preferVCPrice(navigation[8]).space.PX_12 };
            obj[0] = obj;
            return callback(c5, obj);
          };
          tmp18Result4 = tmp18(tmp(6676).FlashList, obj27);
        }
        const obj29 = { children: null };
        obj29[0] = tmp18Result4;
        tmp18Result3 = tmp18(closure_12, obj29);
        const tmp32 = closure_12;
      }
      const obj30 = { children: null };
      obj30[0] = tmp18Result3;
      obj22[1] = callback(tmp(5502).LayerScope, obj30);
      items3[3] = callback(c5, obj22);
      const obj31 = { style: null, children: null };
      obj31[0] = tmp7.framesBannerWrapper;
      let tmp18Result5 = null != bannerBlock.mobileBackgroundImage;
      if (tmp18Result5) {
        const obj32 = { style: null, source: null };
        obj32[0] = tmp7.framesBannerBackgroundImage;
        const obj33 = { uri: null };
        obj33[0] = bannerBlock.mobileBackgroundImage;
        obj32[1] = obj33;
        tmp18Result5 = tmp18(stateFromStores, obj32);
      }
      const items9 = [tmp18Result5, , ];
      const obj34 = { style: null, children: null };
      obj34[0] = tmp7.framesBannerTextContainer;
      const obj35 = { variant: "text-lg/bold", color: "control-overlay-secondary-text-default", style: null, children: null };
      obj35[2] = tmp7.framesBannerTitle;
      obj35[3] = bannerBlock.title;
      const items10 = [callback(tmp(4185).Text, obj35), ];
      const obj36 = { variant: "text-sm/normal", color: "control-overlay-secondary-text-default", children: null };
      obj36[2] = bannerBlock.body;
      items10[1] = callback(tmp(4185).Text, obj36);
      obj34[1] = items10;
      items9[1] = closure_13(c5, obj34);
      let tmp18Result6 = null != bannerBlock.mobileForegroundImage;
      if (tmp18Result6) {
        const obj37 = { style: null, source: null };
        obj37[0] = tmp7.framesBannerForegroundImage;
        const obj38 = { uri: null };
        obj38[0] = bannerBlock.mobileForegroundImage;
        obj37[1] = obj38;
        tmp18Result6 = tmp18(stateFromStores, obj37);
      }
      items9[2] = tmp18Result6;
      obj31[1] = items9;
      items3[4] = closure_13(c5, obj31);
      obj1[1] = items3;
      obj[2] = closure_13(c5, obj1);
      obj[1] = callback(tmp5Result, obj);
      return callback(tmp(5515).AnalyticsLocationProvider, obj);
    } else {
      if (tmpResult2.isThemeDark(tmp6)) {
        let tmp5Result1 = tmp5(14617);
      } else {
        tmp5Result1 = tmp5(14618);
      }
      tmpResult2 = tmp(4035);
    }
  }
};
