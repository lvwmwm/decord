// Module ID: 14359
// Function ID: 108427
// Name: SkeletonLoading
// Dependencies: []
// Exports: default

// Module 14359 (SkeletonLoading)
function SkeletonLoading(accessibilityLabel) {
  const obj = {
    style: callback2().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: Array.from({ length: 10 }).map((arg0, arg1) => {
      const obj = { width: callback(closure_2[6]).COLLECTIBLES_SHOP_CARD_WIDTH };
      return callback3(callback2(closure_2[9]), obj, arg1);
    })
  };
  return callback(closure_5, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).CollectiblesMobileShopScreen;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = arg1(dependencyMap[5]));
const result = 0.75 * arg1(dependencyMap[6]).COLLECTIBLES_SHOP_CARD_WIDTH;
let obj = arg1(dependencyMap[7]);
obj = { heroContainer: { width: "100%" }, heroBannerContainer: obj, heroBannerImage: { "Null": "5489cb913a06f6a88877637630ce77b7", "Null": "pl.messages.5489cb913a06f6a88877637630ce77b7.compiled.messages", "Null": "jsona" }, orbsBackgroundGradient: { <string:2410165992>: "isArray", <string:1391293622>: "skuId", <string:3282027431>: "T", <string:3696331617>: "r", <string:1368088986>: "isArray" }, fadeOutGradient: {}, heroInfoContainer: {} };
obj = { maxHeight: 240 + result };
const obj1 = { "Bool(false)": "/assets/.cache/intl/aW50bA==", "Bool(false)": null, "Bool(false)": "b0aab43a708e01f81d83932d47cbb74d", "Bool(false)": "bg.messages.b0aab43a708e01f81d83932d47cbb74d.compiled.messages", "Bool(false)": "jsona", "Bool(false)": "Dansk", paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.innerContainer = obj1;
obj.heroLogoContainer = { "Bool(false)": 132, "Bool(false)": 182, "Bool(false)": 132 };
obj.heroLogo = {};
const tmp4 = arg1(dependencyMap[5]);
obj.heroViewAllIcon = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: importDefault(dependencyMap[8]).space.PX_8, borderRadius: importDefault(dependencyMap[8]).radii.round };
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: importDefault(dependencyMap[8]).space.PX_8, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.orbsInnerContainer = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, alignItems: "flex-start", gap: importDefault(dependencyMap[8]).space.PX_16 };
obj.orbsTitle = { "Null": null, "Null": null };
obj.productCardsContainer = { zIndex: 1 };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, alignItems: "flex-start", gap: importDefault(dependencyMap[8]).space.PX_16 };
obj.skeletonContainer = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
let closure_14 = obj.createStyles(obj);
const obj4 = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
const result1 = arg1(dependencyMap[39]).fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const arg1 = heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  const importDefault = preferVCPrice;
  let stateFromStores;
  let tmp8;
  let closure_6;
  let obj = arg1(closure_2[10]);
  let obj1 = arg1(closure_2[11]);
  closure_2 = obj1.useNavigation();
  let obj2 = arg1(closure_2[12]);
  const React = obj2.useCollectiblesAnalyticsContext();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (null == heroBannerUrl) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  let obj3 = arg1(closure_2[13]);
  const items = [closure_6];
  stateFromStores = obj3.useStateFromStores(items, () => tmp10.getCategory(heroBlock.categorySkuId));
  let obj4 = arg1(closure_2[15]);
  const tmp4 = callback2();
  let obj5 = arg1(closure_2[16]);
  const token = obj5.useToken(importDefault(closure_2[8]).colors.BACKGROUND_BASE_LOW);
  let obj6 = arg1(closure_2[17]);
  let obj7 = arg1(closure_2[17]);
  const tmp3 = importDefault(closure_2[14])();
  let obj8 = arg1(closure_2[16]);
  const token1 = obj8.useToken(importDefault(closure_2[8]).colors.BACKGROUND_BASE_LOWEST);
  tmp8 = importDefault(closure_2[18])();
  const items1 = [heroBlock.rankedSkuIds, tmp8];
  const memo = React.useMemo(() => tmp8(heroBlock.rankedSkuIds), items1);
  let obj9 = arg1(closure_2[19]);
  const filteredAndSortedProducts = obj9.useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp2 });
  closure_6 = tmp10;
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
      obj = { value: tmp11(importDefault(closure_2[21]).COLLECTIBLES_SHOP_HERO).analyticsLocations };
      obj = { onChange: obj4.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId };
      obj1 = { style: tmp4.heroContainer };
      obj2 = { style: tmp4.heroBannerContainer };
      let tmp33Result = null != heroBannerUrl;
      if (tmp33Result) {
        obj3 = {};
        let tmp35 = tmp2;
        if (tmp2) {
          obj4 = { colors: [true, true] };
          ({ START: obj17.start, END: obj17.end } = closure_10);
          obj4.style = tmp4.orbsBackgroundGradient;
          tmp35 = callback(importDefault(closure_2[28]), obj4);
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
        items3[2] = callback(importDefault(closure_2[28]), obj7);
        obj3.children = items3;
        tmp33Result = closure_13(closure_12, obj3);
        const tmp33 = closure_13;
        const tmp34 = closure_12;
      }
      obj2.children = tmp33Result;
      const items6 = [callback(tmp8, obj2), , ];
      obj8 = { style: tmp4.heroInfoContainer };
      if (tmp2) {
        obj9 = { style: tmp4.orbsInnerContainer };
        let obj10 = {};
        let tmp68 = null != tmp14;
        if (tmp68) {
          const obj11 = { INTEGRATION_CREATE: false, ConstraintReasonCode: false, style: tmp4.orbsTitle, children: tmp14 };
          tmp68 = callback(arg1(closure_2[29]).Text, obj11);
        }
        const items7 = [tmp68, ];
        let tmp72 = null != tmp15;
        if (tmp72) {
          tmp72 = "" !== tmp15;
        }
        if (tmp72) {
          const obj12 = { variant: "text-md/medium", children: tmp15 };
          tmp72 = callback(arg1(closure_2[29]).Text, obj12);
        }
        items7[1] = tmp72;
        obj10.children = items7;
        const items8 = [closure_13(tmp8, obj10), ];
        const obj13 = {};
        const intl3 = arg1(closure_2[31]).intl;
        obj13.text = intl3.string(arg1(closure_2[31]).t.ynollq);
        obj13.onPress = function onPress() {
          let obj = heroBlock(closure_2[32]);
          obj = { mergeExistingRoutes: true, fromContent: heroBlock(closure_2[33]).QuestContent.ORBS_SHOP_HERO_CTA };
          obj.openQuestHome(obj);
        };
        items8[1] = callback(arg1(closure_2[30]).Button, obj13);
        obj9.children = items8;
        let tmp48Result = tmp65(tmp8, obj9);
        const tmp66 = tmp8;
        const tmp67 = tmp8;
      } else {
        const obj14 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
        const intl = arg1(closure_2[31]).intl;
        const obj15 = { category: stateFromStores.name };
        obj14.accessibilityLabel = intl.formatToPlainString(arg1(closure_2[31]).t.FNtLb3, obj15);
        const intl2 = arg1(closure_2[31]).intl;
        obj14.accessibilityHint = intl2.string(arg1(closure_2[31]).t.F8ma9x);
        const obj16 = { radius: importDefault(closure_2[8]).radii.lg };
        obj14.androidRippleConfig = obj16;
        obj14.onPress = function onPress() {
          let obj = preferVCPrice(navigation[23]);
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
          obj.track(constants.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          obj = { category: stateFromStores, analyticsContext: closure_3 };
          navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
        };
        const obj17 = { style: tmp4.innerContainer };
        let tmp54 = null != heroLogoUrl;
        if (tmp54) {
          const obj18 = { style: tmp4.heroLogoContainer };
          const obj19 = { style: tmp4.heroLogo };
          const obj20 = { uri: heroLogoUrl };
          obj19.source = obj20;
          obj18.children = callback(stateFromStores, obj19);
          tmp54 = callback(tmp8, obj18);
        }
        const items9 = [tmp54, ];
        const obj21 = { style: tmp4.heroViewAllIcon, children: callback(arg1(closure_2[35]).ChevronSmallRightIcon, { flexDirection: null, alignItems: "4550be26e4ce88ab0a8f2d917df660a6" }) };
        items9[1] = callback(tmp8, obj21);
        obj17.children = items9;
        obj14.children = closure_13(tmp8, obj17);
        tmp48Result = callback(arg1(closure_2[34]).PressableOpacity, obj14, stateFromStores.storeListingId);
        const tmp48 = callback;
        const tmp52 = closure_13;
        const tmp53 = tmp8;
      }
      obj8.children = tmp48Result;
      items6[1] = callback(tmp8, obj8);
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
        const intl5 = arg1(closure_2[31]).intl;
        const obj25 = { category: stateFromStores.name };
        obj24.accessibilityLabel = intl5.formatToPlainString(arg1(closure_2[31]).t.FNtLb3, obj25);
        let tmp84Result = tmp84(importDefault(closure_2[37]), obj24);
        const tmp94 = importDefault(closure_2[37]);
      } else {
        const obj26 = {};
        if (0 === filteredAndSortedProducts.length) {
          const obj27 = {};
          const intl4 = arg1(closure_2[31]).intl;
          const obj28 = { category: stateFromStores.name };
          obj27.accessibilityLabel = intl4.formatToPlainString(arg1(closure_2[31]).t.FNtLb3, obj28);
          let tmp90 = callback(SkeletonLoading, obj27);
        } else {
          const obj29 = {};
          const intl6 = arg1(closure_2[31]).intl;
          const obj30 = { category: stateFromStores.name };
          obj29.accessibilityLabel = intl6.formatToPlainString(arg1(closure_2[31]).t.FNtLb3, obj30);
          obj29.data = filteredAndSortedProducts;
          obj29.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj29.renderItem = tmp13;
          obj29.decelerationRate = "fast";
          stateFromStores = importDefault;
          obj29.snapToInterval = arg1(closure_2[6]).COLLECTIBLES_SHOP_CARD_WIDTH + importDefault(closure_2[8]).space.PX_12;
          obj29.showsHorizontalScrollIndicator = false;
          obj29.ListHeaderComponent = function ListHeaderComponent() {
            let obj = {};
            obj = { width: preferVCPrice(closure_2[8]).space.PX_16 };
            obj.style = obj;
            return callback(tmp8, obj);
          };
          obj29.ListFooterComponent = function ListFooterComponent() {
            let obj = {};
            obj = { width: preferVCPrice(closure_2[8]).space.PX_16 };
            obj.style = obj;
            return callback(tmp8, obj);
          };
          obj29.ItemSeparatorComponent = function ItemSeparatorComponent() {
            let obj = {};
            obj = { width: preferVCPrice(closure_2[8]).space.PX_12 };
            obj.style = obj;
            return callback(tmp8, obj);
          };
          tmp90 = callback(arg1(closure_2[38]).FlashList, obj29);
        }
        obj26.children = tmp90;
        tmp84Result = tmp84(closure_12, obj26);
        const tmp85 = closure_12;
      }
      obj23.children = tmp84Result;
      obj22.children = callback(arg1(closure_2[36]).LayerScope, obj23);
      items6[2] = callback(tmp8, obj22);
      obj1.children = items6;
      obj.children = closure_13(tmp8, obj1);
      obj.children = callback(importDefault(closure_2[27]), obj);
      return callback(arg1(closure_2[20]).AnalyticsLocationProvider, obj);
    } else {
      obj10 = arg1(closure_2[24]);
      if (obj10.isThemeDark(tmp3)) {
        let tmp18Result = tmp18(tmp19[25]);
      } else {
        tmp18Result = tmp18(tmp19[26]);
      }
    }
  }
};
