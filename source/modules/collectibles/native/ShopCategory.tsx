// Module ID: 14353
// Function ID: 108383
// Name: Spacing
// Dependencies: []
// Exports: ShopCategory

// Module 14353 (Spacing)
function Spacing() {
  return callback(View, { style: { width: 12 } });
}
function HeaderAndFooterSpacing() {
  return callback(View, { style: { width: 16 } });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).CollectiblesMobileShopScreen;
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const sum = 100 + arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_HEIGHT;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[7]).space.PX_16, marginBottom: 24, height: sum };
obj.categoryContainer = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.categoryHeader = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.categoryHeaderBorderDark = { borderColor: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_660 };
const obj2 = { borderColor: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_660 };
obj.categoryHeaderBorderLight = { borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.imageBackground = {};
const obj3 = { borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.viewAllIcon = { backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: importDefault(dependencyMap[7]).radii.round };
let closure_9 = obj.createStyles(obj);
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: importDefault(dependencyMap[7]).radii.round };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategory = function ShopCategory(category) {
  let index;
  let initialProductSkuId;
  let isDarkTheme;
  let productIndex;
  category = category.category;
  const arg1 = category;
  let collectiblesAnalyticsContext;
  ({ index, isDarkTheme } = category);
  const analyticsLocations = importDefault(closure_2[8])().analyticsLocations;
  const importDefault = analyticsLocations;
  const tmp = callback2();
  let obj = arg1(closure_2[9]);
  closure_2 = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  const React = unpublishedAt;
  let obj1 = arg1(closure_2[10]);
  obj = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj1.useFilteredAndSortedProducts(obj);
  const View = filteredAndSortedProducts;
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj3 = arg1(closure_2[11]);
  const collectiblesShopDeepLinkProps = obj3.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  let closure_5 = initialProductSkuId;
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const UserSettingsSections = initialVariantIndex;
  const ref = React.useRef(null);
  let obj4 = arg1(closure_2[12]);
  const items = [category.storeListingId];
  const recyclingState = obj4.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (null != current) {
      current.scrollToOffset({ -437125116: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002488040065571517, -435748860: -823154013994709700000000000000000000000000000000000000000000000 });
    }
  });
  let obj5 = arg1(closure_2[13]);
  obj = {};
  let tmp6 = null != productIndex;
  if (tmp6) {
    tmp6 = productIndex > 0;
  }
  obj.shouldScroll = tmp6;
  obj.initialScrollIndex = productIndex;
  obj.flashListRef = ref;
  obj.afterMs = arg1(closure_2[13]).INITIAL_SCROLL_DELAY_MS;
  obj.resetKey = category.storeListingId;
  const scrollToInitialIndexOnce = obj5.useScrollToInitialIndexOnce(obj);
  let obj7 = arg1(closure_2[14]);
  collectiblesAnalyticsContext = obj7.useCollectiblesAnalyticsContext();
  const items1 = [initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = React.useEffect(() => {
    let found = null;
    if (null != initialProductSkuId) {
      found = filteredAndSortedProducts.find((skuId) => skuId.skuId === closure_5);
    }
    if (null != found) {
      let tmp5;
      let obj = analyticsLocations(closure_2[15]);
      obj.hideActionSheet();
      obj = { product: found, initialVariantIndex, analyticsLocations };
      if (null != collectiblesAnalyticsContext) {
        tmp5 = collectiblesAnalyticsContext;
      }
      obj.shopAnalyticsContext = tmp5;
      const result = category(closure_2[16]).openProductDetailsActionSheet(obj);
      const obj2 = category(closure_2[16]);
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index } };
    obj = { product: item, unpublishedAt };
    obj.children = ref(analyticsLocations(closure_2[5]), obj);
    return ref(category(closure_2[14]).CollectiblesAnalyticsProvider, obj);
  }, items2);
  obj1 = { newValue: { categoryPosition: index } };
  const obj2 = { style: tmp.categoryContainer };
  obj3 = { style: items3, accessibilityRole: "button" };
  const items3 = [tmp.categoryHeader, isDarkTheme ? tmp.categoryHeaderBorderDark : tmp.categoryHeaderBorderLight];
  const intl = arg1(closure_2[20]).intl;
  obj4 = { category: category.name };
  obj3.accessibilityLabel = intl.formatToPlainString(arg1(closure_2[20]).t.FNtLb3, obj4);
  const intl2 = arg1(closure_2[20]).intl;
  obj3.accessibilityHint = intl2.string(arg1(closure_2[20]).t.F8ma9x);
  obj3.activeOpacity = 0.8;
  obj5 = { radius: importDefault(closure_2[7]).radii.lg };
  obj3.androidRippleConfig = obj5;
  obj3.hitSlop = 8;
  obj3.onPress = function onPress() {
    if (category.isOrbsExclusive) {
      let obj = {};
      const items = [analyticsLocations(navigation[18]).COLLECTIBLES_SHOP];
      obj.analyticsLocations = items;
      obj.analyticsSource = analyticsLocations(navigation[18]).COLLECTIBLES_SHOP;
      obj.screen = initialProductSkuId.ORBS;
      const result = category(navigation[17]).openCollectiblesShopMobile(obj);
      const obj2 = category(navigation[17]);
    } else {
      obj = { category: tmp, analyticsContext: collectiblesAnalyticsContext };
      navigation.navigate(initialVariantIndex.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
    }
  };
  let tmp14 = null != mobileBannerUrl;
  if (tmp14) {
    const obj6 = {};
    obj7 = { uri: mobileBannerUrl };
    obj6.source = obj7;
    obj6.resizeMode = "cover";
    obj6.style = tmp.imageBackground;
    tmp14 = ref(importDefault(closure_2[21]), obj6);
  }
  const items4 = [tmp14, ref(View, { style: tmp.viewAllIcon, children: ref(arg1(closure_2[22]).ChevronSmallRightIcon, {}) })];
  obj3.children = items4;
  const items5 = [collectiblesAnalyticsContext(arg1(closure_2[19]).PressableOpacity, obj3, category.storeListingId), ];
  const obj9 = { ref, horizontal: true };
  const intl3 = arg1(closure_2[20]).intl;
  obj9.accessibilityLabel = intl3.formatToPlainString(arg1(closure_2[20]).t.FNtLb3, { category: category.name });
  obj9.accessibilityRole = "list";
  obj9.data = filteredAndSortedProducts;
  obj9.renderItem = callback;
  obj9.drawDistance = 150;
  obj9.decelerationRate = "fast";
  obj9.snapToInterval = arg1(closure_2[5]).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj9.showsHorizontalScrollIndicator = false;
  obj9.ListHeaderComponent = HeaderAndFooterSpacing;
  obj9.ListFooterComponent = HeaderAndFooterSpacing;
  obj9.ItemSeparatorComponent = Spacing;
  obj9.initialScrollIndex = productIndex;
  items5[1] = ref(arg1(closure_2[12]).FlashList, obj9);
  obj2.children = items5;
  obj1.children = collectiblesAnalyticsContext(View, obj2);
  return ref(arg1(closure_2[14]).CollectiblesAnalyticsProvider, obj1);
};
