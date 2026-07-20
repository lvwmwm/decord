// Module ID: 14350
// Function ID: 108380
// Name: SkeletonLoading
// Dependencies: []
// Exports: default

// Module 14350 (SkeletonLoading)
function SkeletonLoading(accessibilityLabel) {
  const obj = {
    style: callback3().skeletonContainer,
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
obj = { heroContainer: { width: "100%" } };
obj = { -1599449500: "centeredContainer", 1650222843: "frameRateAggregated", 1454022907: "a", 1446722147: "isArray", 1707619409: "PACKED", 1454006944: "GameUpdatePlatformIcon", 1387159867: "BITRATE_MIN", top: importDefault(dependencyMap[8]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.framesBadgeContainer = obj;
const tmp4 = arg1(dependencyMap[5]);
obj.framesBannerWrapper = { paddingBottom: importDefault(dependencyMap[8]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, borderRadius: importDefault(dependencyMap[8]).radii.lg };
const obj1 = { paddingBottom: importDefault(dependencyMap[8]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.framesBannerBackgroundImage = { borderRadius: importDefault(dependencyMap[8]).radii.lg };
const obj2 = { borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.framesBannerTextContainer = { flex: 1, paddingRight: importDefault(dependencyMap[8]).space.PX_4, marginTop: importDefault(dependencyMap[8]).space.PX_24 };
const obj3 = { flex: 1, paddingRight: importDefault(dependencyMap[8]).space.PX_4, marginTop: importDefault(dependencyMap[8]).space.PX_24 };
obj.framesBannerTitle = { marginBottom: importDefault(dependencyMap[8]).space.PX_4 };
const obj5 = { "Null": true, "Null": true, "Null": true };
const obj4 = { marginBottom: importDefault(dependencyMap[8]).space.PX_4 };
const items = [{ translateY: importDefault(dependencyMap[8]).space.PX_16 }];
obj5.transform = items;
obj.framesBannerForegroundImage = obj5;
obj.heroBannerContainer = { maxHeight: 240 + result };
obj.heroBannerImage = { "Null": "5489cb913a06f6a88877637630ce77b7", "Null": "pl.messages.5489cb913a06f6a88877637630ce77b7.compiled.messages", "Null": "jsona" };
obj.orbsBackgroundGradient = { <string:2410165992>: "isArray", <string:1391293622>: "skuId", <string:3282027431>: "T", <string:3696331617>: "r", <string:1368088986>: "isArray" };
obj.heroInfoContainer = {};
const obj7 = { "Bool(false)": "/assets/.cache/intl/aW50bA==", "Bool(false)": null, "Bool(false)": "b0aab43a708e01f81d83932d47cbb74d", "Bool(false)": "bg.messages.b0aab43a708e01f81d83932d47cbb74d.compiled.messages", "Bool(false)": "jsona", "Bool(false)": "Dansk", paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.innerContainer = obj7;
obj.heroLogoContainer = { "Bool(false)": 132, "Bool(false)": 182, "Bool(false)": 132 };
obj.heroLogo = {};
const obj6 = { translateY: importDefault(dependencyMap[8]).space.PX_16 };
obj.heroViewAllIcon = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: importDefault(dependencyMap[8]).space.PX_8, borderRadius: importDefault(dependencyMap[8]).radii.round };
const obj8 = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: importDefault(dependencyMap[8]).space.PX_8, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.orbsInnerContainer = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, alignItems: "flex-start", gap: importDefault(dependencyMap[8]).space.PX_16 };
obj.orbsTitle = { "Null": null, "Null": null };
obj.productCardsContainer = { zIndex: 1 };
const obj9 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, alignItems: "flex-start", gap: importDefault(dependencyMap[8]).space.PX_16 };
obj.skeletonContainer = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
let closure_14 = obj.createStyles(obj);
const obj10 = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
const result1 = arg1(dependencyMap[38]).fileFinishedImporting("modules/collectibles/native/FramesHeroBlock.tsx");

export default function _default(heroBlock) {
  let bannerBlock;
  let preferVCPrice;
  heroBlock = heroBlock.heroBlock;
  const arg1 = heroBlock;
  ({ bannerBlock, preferVCPrice } = heroBlock);
  const importDefault = preferVCPrice;
  let stateFromStores;
  let tmp5;
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
  stateFromStores = obj3.useStateFromStores(items, () => tmp7.getCategory(heroBlock.categorySkuId));
  let obj4 = arg1(closure_2[15]);
  const tmp4 = callback3();
  tmp5 = importDefault(closure_2[16])();
  const items1 = [heroBlock.rankedSkuIds, tmp5];
  const memo = React.useMemo(() => tmp5(heroBlock.rankedSkuIds), items1);
  let obj5 = arg1(closure_2[17]);
  const filteredAndSortedProducts = obj5.useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp2 });
  closure_6 = tmp7;
  const tmp3 = importDefault(closure_2[14])();
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
      obj = { value: tmp8(importDefault(closure_2[19]).COLLECTIBLES_SHOP_HERO).analyticsLocations };
      obj = { onChange: obj4.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId };
      obj1 = { style: tmp4.heroContainer };
      obj2 = { style: tmp4.framesBadgeContainer, children: callback(importDefault(closure_2[26]), { "Bool(false)": null, "Bool(false)": "62f081ad3e24555b5cc4aecbbf701e62" }) };
      const items3 = [callback(tmp5, obj2), , , , ];
      obj3 = { style: tmp4.heroBannerContainer };
      let tmp33Result = null != heroBannerUrl;
      if (tmp33Result) {
        obj4 = {};
        let tmp35 = tmp2;
        if (tmp2) {
          obj5 = { colors: [true, true] };
          ({ START: obj14.start, END: obj14.end } = closure_10);
          obj5.style = tmp4.orbsBackgroundGradient;
          tmp35 = callback(importDefault(closure_2[27]), obj5);
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
      items3[1] = callback(tmp5, obj3);
      const obj8 = { style: tmp4.heroInfoContainer };
      if (tmp2) {
        const obj9 = { style: tmp4.orbsInnerContainer };
        const obj10 = {};
        let tmp64 = null != tmp11;
        if (tmp64) {
          const obj11 = { INTEGRATION_CREATE: false, ConstraintReasonCode: false, style: tmp4.orbsTitle, children: tmp11 };
          tmp64 = callback(arg1(closure_2[28]).Text, obj11);
        }
        const items6 = [tmp64, ];
        let tmp68 = null != tmp12;
        if (tmp68) {
          tmp68 = "" !== tmp12;
        }
        if (tmp68) {
          const obj12 = { variant: "text-md/medium", children: tmp12 };
          tmp68 = callback(arg1(closure_2[28]).Text, obj12);
        }
        items6[1] = tmp68;
        obj10.children = items6;
        const items7 = [callback2(tmp5, obj10), ];
        const obj13 = {};
        const intl3 = arg1(closure_2[30]).intl;
        obj13.text = intl3.string(arg1(closure_2[30]).t.ynollq);
        obj13.onPress = function onPress() {
          let obj = heroBlock(closure_2[31]);
          obj = { mergeExistingRoutes: true, fromContent: heroBlock(closure_2[32]).QuestContent.ORBS_SHOP_HERO_CTA };
          obj.openQuestHome(obj);
        };
        items7[1] = callback(arg1(closure_2[29]).Button, obj13);
        obj9.children = items7;
        let tmp44Result = tmp61(tmp5, obj9);
        const tmp62 = tmp5;
        const tmp63 = tmp5;
      } else {
        const obj14 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
        const intl = arg1(closure_2[30]).intl;
        const obj15 = { category: stateFromStores.name };
        obj14.accessibilityLabel = intl.formatToPlainString(arg1(closure_2[30]).t.FNtLb3, obj15);
        const intl2 = arg1(closure_2[30]).intl;
        obj14.accessibilityHint = intl2.string(arg1(closure_2[30]).t.F8ma9x);
        const obj16 = { radius: importDefault(closure_2[8]).radii.lg };
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
          obj.track(constants.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          obj = { category: stateFromStores, analyticsContext: closure_3 };
          navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
        };
        const obj17 = { style: tmp4.innerContainer };
        let tmp50 = null != heroLogoUrl;
        if (tmp50) {
          const obj18 = { style: tmp4.heroLogoContainer };
          const obj19 = { style: tmp4.heroLogo };
          const obj20 = { uri: heroLogoUrl };
          obj19.source = obj20;
          obj18.children = callback(stateFromStores, obj19);
          tmp50 = callback(tmp5, obj18);
        }
        const items8 = [tmp50, ];
        const obj21 = { style: tmp4.heroViewAllIcon, children: callback(arg1(closure_2[34]).ChevronSmallRightIcon, { flexDirection: null, alignItems: "4550be26e4ce88ab0a8f2d917df660a6" }) };
        items8[1] = callback(tmp5, obj21);
        obj17.children = items8;
        obj14.children = callback2(tmp5, obj17);
        tmp44Result = callback(arg1(closure_2[33]).PressableOpacity, obj14, stateFromStores.storeListingId);
        const tmp44 = callback;
        const tmp48 = callback2;
        const tmp49 = tmp5;
      }
      obj8.children = tmp44Result;
      items3[2] = callback(tmp5, obj8);
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
        const intl5 = arg1(closure_2[30]).intl;
        const obj25 = { category: stateFromStores.name };
        obj24.accessibilityLabel = intl5.formatToPlainString(arg1(closure_2[30]).t.FNtLb3, obj25);
        let tmp80Result = tmp80(importDefault(closure_2[36]), obj24);
        const tmp90 = importDefault(closure_2[36]);
      } else {
        const obj26 = {};
        if (0 === filteredAndSortedProducts.length) {
          const obj27 = {};
          const intl4 = arg1(closure_2[30]).intl;
          const obj28 = { category: stateFromStores.name };
          obj27.accessibilityLabel = intl4.formatToPlainString(arg1(closure_2[30]).t.FNtLb3, obj28);
          let tmp86 = callback(SkeletonLoading, obj27);
        } else {
          stateFromStores = callback;
          stateFromStores = arg1;
          stateFromStores = closure_2;
          const obj29 = {};
          const intl6 = arg1(closure_2[30]).intl;
          const obj30 = { category: stateFromStores.name };
          obj29.accessibilityLabel = intl6.formatToPlainString(arg1(closure_2[30]).t.FNtLb3, obj30);
          obj29.data = filteredAndSortedProducts;
          obj29.onScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
          obj29.renderItem = tmp10;
          obj29.decelerationRate = "fast";
          stateFromStores = importDefault;
          obj29.snapToInterval = arg1(closure_2[6]).COLLECTIBLES_SHOP_CARD_WIDTH + importDefault(closure_2[8]).space.PX_12;
          obj29.showsHorizontalScrollIndicator = false;
          obj29.ListHeaderComponent = function ListHeaderComponent() {
            let obj = {};
            obj = { width: preferVCPrice(closure_2[8]).space.PX_16 };
            obj.style = obj;
            return callback(tmp5, obj);
          };
          obj29.ListFooterComponent = function ListFooterComponent() {
            let obj = {};
            obj = { width: preferVCPrice(closure_2[8]).space.PX_16 };
            obj.style = obj;
            return callback(tmp5, obj);
          };
          obj29.ItemSeparatorComponent = function ItemSeparatorComponent() {
            let obj = {};
            obj = { width: preferVCPrice(closure_2[8]).space.PX_12 };
            obj.style = obj;
            return callback(tmp5, obj);
          };
          tmp86 = callback(arg1(closure_2[37]).FlashList, obj29);
        }
        obj26.children = tmp86;
        tmp80Result = tmp80(closure_12, obj26);
        const tmp81 = closure_12;
      }
      obj23.children = tmp80Result;
      obj22.children = callback(arg1(closure_2[35]).LayerScope, obj23);
      items3[3] = callback(tmp5, obj22);
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
      stateFromStores = arg1;
      stateFromStores = closure_2;
      const obj35 = { INTEGRATION_CREATE: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004778309877068035, ConstraintReasonCode: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003003287250791, style: tmp4.framesBannerTitle, children: bannerBlock.title };
      const items10 = [callback(arg1(closure_2[28]).Text, obj35), ];
      stateFromStores = callback;
      const obj36 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null, children: bannerBlock.body };
      items10[1] = callback(arg1(closure_2[28]).Text, obj36);
      obj34.children = items10;
      items9[1] = callback2(tmp5, obj34);
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
      items3[4] = callback2(tmp5, obj31);
      obj1.children = items3;
      obj.children = callback2(tmp5, obj1);
      obj.children = callback(importDefault(closure_2[25]), obj);
      return callback(arg1(closure_2[18]).AnalyticsLocationProvider, obj);
    } else {
      obj6 = arg1(closure_2[22]);
      if (obj6.isThemeDark(tmp3)) {
        let tmp15Result = tmp15(tmp16[23]);
      } else {
        tmp15Result = tmp15(tmp16[24]);
      }
    }
  }
};
