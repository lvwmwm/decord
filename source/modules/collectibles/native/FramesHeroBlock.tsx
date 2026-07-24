// Module ID: 14532
// Function ID: 110954
// Name: SkeletonLoading
// Dependencies: [31, 27, 6774, 655, 653, 33, 8704, 4130, 689, 14031, 14533, 1456, 8707, 566, 4066, 11872, 14023, 14025, 5462, 5482, 14534, 675, 3976, 14536, 14537, 11875, 8782, 4554, 4126, 4543, 1212, 10946, 4981, 4660, 5512, 5449, 14538, 7527, 2]
// Exports: default

// Module 14532 (SkeletonLoading)
import closure_3 from "_createForOfIteratorHelperLoose";
import get_ActivityIndicator from "LinearGradient";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_7 } from "items";
import ME from "ME";
import jsxProd from "PressableBase";
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
_createForOfIteratorHelperLoose = { heroContainer: { width: "100%" } };
_createForOfIteratorHelperLoose = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_24, left: 0, right: 0, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "flex-start", zIndex: 2 };
_createForOfIteratorHelperLoose.framesBadgeContainer = _createForOfIteratorHelperLoose;
let obj1 = { marginTop: -250, paddingTop: 240, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "row", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", zIndex: 0 };
_createForOfIteratorHelperLoose.framesBannerWrapper = obj1;
let obj2 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, resizeMode: "stretch", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.framesBannerBackgroundImage = obj2;
_createForOfIteratorHelperLoose.framesBannerTextContainer = { flex: 1, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_4, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj3 = { flex: 1, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_4, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.framesBannerTitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj5 = { width: 125, height: 125, resizeMode: "contain" };
let obj4 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let items = [{ translateY: require("_createForOfIteratorHelperLoose").space.PX_16 }];
obj5.transform = items;
_createForOfIteratorHelperLoose.framesBannerForegroundImage = obj5;
let obj7 = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
_createForOfIteratorHelperLoose.heroBannerContainer = obj7;
_createForOfIteratorHelperLoose.heroBannerImage = { width: "100%", height: "100%", resizeMode: "cover" };
_createForOfIteratorHelperLoose.orbsBackgroundGradient = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 };
_createForOfIteratorHelperLoose.heroInfoContainer = { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 };
let obj8 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.innerContainer = obj8;
_createForOfIteratorHelperLoose.heroLogoContainer = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
_createForOfIteratorHelperLoose.heroLogo = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
let obj6 = { translateY: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.heroViewAllIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let obj9 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.orbsInnerContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.orbsTitle = { fontSize: 24, lineHeight: 30 };
_createForOfIteratorHelperLoose.productCardsContainer = { zIndex: 1 };
let obj10 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.skeletonContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj11 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result1 = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/FramesHeroBlock.tsx");

export default function _default(heroBlock) {
  let bannerBlock;
  let preferVCPrice;
  heroBlock = heroBlock.heroBlock;
  ({ bannerBlock, preferVCPrice } = heroBlock);
  let stateFromStores;
  let c5;
  let c6;
  let obj = heroBlock(14533);
  let obj1 = heroBlock(1456);
  const dependencyMap = obj1.useNavigation();
  let obj2 = heroBlock(8707);
  const React = obj2.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (null == heroBannerUrl) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let obj3 = heroBlock(566);
  const items = [c6];
  stateFromStores = obj3.useStateFromStores(items, () => _undefined2.getCategory(heroBlock.categorySkuId));
  let obj4 = heroBlock(11872);
  const tmp4 = _createForOfIteratorHelperLoose();
  const tmp5 = preferVCPrice(14023)();
  c5 = tmp5;
  const items1 = [heroBlock.rankedSkuIds, tmp5];
  const memo = React.useMemo(() => _undefined(heroBlock.rankedSkuIds), items1);
  let obj5 = heroBlock(14025);
  const filteredAndSortedProducts = obj5.useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp2 });
  c6 = tmp7;
  const tmp3 = preferVCPrice(4066)();
  let unpublishedAt;
  if (null != stateFromStores) {
    unpublishedAt = stateFromStores.unpublishedAt;
  }
  const items2 = [unpublishedAt, preferVCPrice, heroBlock.screen === constants.FEATURED_PAGE];
  if (undefined === stateFromStores) {
    return null;
  } else {
    const tmp11 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
    const tmp12 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
    if (!tmp2) {
      obj = { value: tmp8(preferVCPrice(5482).COLLECTIBLES_SHOP_HERO).analyticsLocations };
      obj = { onChange: obj4.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId };
      obj1 = { style: tmp4.heroContainer };
      obj2 = { style: tmp4.framesBadgeContainer, children: callback(preferVCPrice(8782), { location: "CollectiblesShop", disablePressable: true }) };
      const items3 = [callback(c5, obj2), , , , ];
      obj3 = { style: tmp4.heroBannerContainer };
      let tmp33Result = null != heroBannerUrl;
      if (tmp33Result) {
        obj4 = {};
        let tmp35 = tmp2;
        if (tmp2) {
          obj5 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"] };
          ({ START: obj14.start, END: obj14.end } = closure_10);
          obj5.style = tmp4.orbsBackgroundGradient;
          tmp35 = callback(preferVCPrice(4554), obj5);
        }
        const items4 = [tmp35, ];
        let obj6 = {};
        const items5 = [tmp4.heroBannerImage];
        obj6.style = items5;
        const obj7 = { uri: heroBannerUrl };
        obj6.source = obj7;
        items4[1] = callback(stateFromStores, obj6);
        obj4.children = items4;
        tmp33Result = callback2(closure_12, obj4);
        const tmp33 = callback2;
        const tmp34 = closure_12;
      }
      obj3.children = tmp33Result;
      items3[1] = callback(c5, obj3);
      const obj8 = { style: tmp4.heroInfoContainer };
      if (tmp2) {
        const obj9 = { style: tmp4.orbsInnerContainer };
        const obj10 = {};
        let tmp64 = null != tmp11;
        if (tmp64) {
          const obj11 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp4.orbsTitle, children: tmp11 };
          tmp64 = callback(heroBlock(4126).Text, obj11);
        }
        const items6 = [tmp64, ];
        let tmp68 = null != tmp12;
        if (tmp68) {
          tmp68 = "" !== tmp12;
        }
        if (tmp68) {
          const obj12 = { variant: "text-md/medium", children: tmp12 };
          tmp68 = callback(heroBlock(4126).Text, obj12);
        }
        items6[1] = tmp68;
        obj10.children = items6;
        const items7 = [callback2(c5, obj10), ];
        const obj13 = { variant: "tertiary", shrink: true, grow: false, size: "sm" };
        const intl3 = heroBlock(1212).intl;
        obj13.text = intl3.string(heroBlock(1212).t.ynollq);
        obj13.onPress = function onPress() {
          let obj = heroBlock(navigation[31]);
          obj = { mergeExistingRoutes: true, fromContent: heroBlock(navigation[32]).QuestContent.ORBS_SHOP_HERO_CTA };
          obj.openQuestHome(obj);
        };
        items7[1] = callback(heroBlock(4543).Button, obj13);
        obj9.children = items7;
        let tmp44Result = tmp61(c5, obj9);
        const tmp62 = c5;
        const tmp63 = c5;
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
          let obj = preferVCPrice(navigation[21]);
          obj = {};
          let sessionId;
          if (null != closure_3) {
            sessionId = closure_3.sessionId;
          }
          obj.collectibles_shop_session_id = sessionId;
          obj.sku_id = heroBlock.categoryStoreListingId;
          obj.page_type = "mobile_home";
          let pageSection;
          if (null != closure_3) {
            pageSection = closure_3.pageSection;
          }
          obj.page_section = pageSection;
          let pageCategory;
          if (null != closure_3) {
            pageCategory = closure_3.pageCategory;
          }
          obj.page_category = pageCategory;
          obj.tile_type = "HERO_BLOCK";
          let tilePosition;
          if (null != closure_3) {
            tilePosition = closure_3.tilePosition;
          }
          obj.tile_position = String(tilePosition);
          obj.cta_name = null;
          obj.track(outer1_8.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          obj = { category: stateFromStores, analyticsContext: closure_3 };
          navigation.navigate(outer1_9.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
        };
        const obj17 = { style: tmp4.innerContainer };
        let tmp50 = null != heroLogoUrl;
        if (tmp50) {
          const obj18 = { style: tmp4.heroLogoContainer };
          const obj19 = { style: tmp4.heroLogo };
          const obj20 = { uri: heroLogoUrl };
          obj19.source = obj20;
          obj18.children = callback(stateFromStores, obj19);
          tmp50 = callback(c5, obj18);
        }
        const items8 = [tmp50, ];
        const obj21 = { style: tmp4.heroViewAllIcon, children: callback(heroBlock(5512).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
        items8[1] = callback(c5, obj21);
        obj17.children = items8;
        obj14.children = callback2(c5, obj17);
        tmp44Result = callback(heroBlock(4660).PressableOpacity, obj14, stateFromStores.storeListingId);
        const tmp44 = callback;
        const tmp48 = callback2;
        const tmp49 = c5;
      }
      obj8.children = tmp44Result;
      items3[2] = callback(c5, obj8);
      const obj22 = { style: tmp4.productCardsContainer };
      const obj23 = {};
      if (tmp2) {
        const obj24 = { products: filteredAndSortedProducts };
        let num19 = 4;
        if (0 !== filteredAndSortedProducts.length) {
          num19 = filteredAndSortedProducts.length;
        }
        obj24.loadingCardsNum = num19;
        obj24.preferVCPrice = preferVCPrice;
        const intl5 = heroBlock(1212).intl;
        const obj25 = { category: stateFromStores.name };
        obj24.accessibilityLabel = intl5.formatToPlainString(heroBlock(1212).t.FNtLb3, obj25);
        let tmp80Result = tmp80(preferVCPrice(14538), obj24);
        const tmp90 = preferVCPrice(14538);
      } else {
        const obj26 = {};
        if (0 === filteredAndSortedProducts.length) {
          const obj27 = {};
          const intl4 = heroBlock(1212).intl;
          const obj28 = { category: stateFromStores.name };
          obj27.accessibilityLabel = intl4.formatToPlainString(heroBlock(1212).t.FNtLb3, obj28);
          let tmp86 = callback(SkeletonLoading, obj27);
        } else {
          stateFromStores = callback;
          stateFromStores = heroBlock;
          stateFromStores = dependencyMap;
          const obj29 = { horizontal: true, accessibilityLabel: null, accessibilityRole: "list" };
          const intl6 = heroBlock(1212).intl;
          const obj30 = { category: stateFromStores.name };
          obj29.accessibilityLabel = intl6.formatToPlainString(heroBlock(1212).t.FNtLb3, obj30);
          obj29.data = filteredAndSortedProducts;
          obj29.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj29.renderItem = tmp10;
          obj29.decelerationRate = "fast";
          stateFromStores = preferVCPrice;
          obj29.snapToInterval = heroBlock(8704).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(689).space.PX_12;
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
          tmp86 = callback(heroBlock(7527).FlashList, obj29);
        }
        obj26.children = tmp86;
        tmp80Result = tmp80(closure_12, obj26);
        const tmp81 = closure_12;
      }
      obj23.children = tmp80Result;
      obj22.children = callback(heroBlock(5449).LayerScope, obj23);
      items3[3] = callback(c5, obj22);
      const obj31 = { style: tmp4.framesBannerWrapper };
      let tmp95 = null != bannerBlock.mobileBackgroundImage;
      if (tmp95) {
        const obj32 = { style: tmp4.framesBannerBackgroundImage };
        const obj33 = { uri: bannerBlock.mobileBackgroundImage };
        obj32.source = obj33;
        tmp95 = callback(stateFromStores, obj32);
      }
      const items9 = [tmp95, , ];
      const obj34 = { style: tmp4.framesBannerTextContainer };
      stateFromStores = callback;
      stateFromStores = heroBlock;
      stateFromStores = dependencyMap;
      const obj35 = { variant: "text-lg/bold", color: "control-overlay-secondary-text-default", style: tmp4.framesBannerTitle, children: bannerBlock.title };
      const items10 = [callback(heroBlock(4126).Text, obj35), ];
      stateFromStores = callback;
      const obj36 = { variant: "text-sm/normal", color: "control-overlay-secondary-text-default", children: bannerBlock.body };
      items10[1] = callback(heroBlock(4126).Text, obj36);
      obj34.children = items10;
      items9[1] = callback2(c5, obj34);
      stateFromStores = null != bannerBlock.mobileForegroundImage;
      if (stateFromStores) {
        stateFromStores = callback;
        const obj37 = { style: tmp4.framesBannerForegroundImage };
        const obj38 = { uri: bannerBlock.mobileForegroundImage };
        obj37.source = obj38;
        stateFromStores = callback(stateFromStores, obj37);
      }
      items9[2] = stateFromStores;
      obj31.children = items9;
      items3[4] = callback2(c5, obj31);
      obj1.children = items3;
      obj.children = callback2(c5, obj1);
      obj.children = callback(preferVCPrice(11875), obj);
      return callback(heroBlock(5462).AnalyticsLocationProvider, obj);
    } else {
      obj6 = heroBlock(3976);
      if (obj6.isThemeDark(tmp3)) {
        let tmp15Result = tmp15(14536);
      } else {
        tmp15Result = tmp15(14537);
      }
    }
  }
};
