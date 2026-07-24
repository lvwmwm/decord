// Module ID: 14528
// Function ID: 110934
// Name: Spacing
// Dependencies: [31, 27, 655, 653, 33, 8704, 4130, 689, 5462, 1456, 14025, 14527, 7527, 14529, 8707, 4098, 8775, 6773, 5482, 4660, 1212, 5085, 5512, 2]
// Exports: ShopCategory

// Module 14528 (Spacing)
import result from "result";
import { View } from "get ActivityIndicator";
import { CollectiblesMobileShopScreen as closure_5 } from "items";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function Spacing() {
  return callback(View, { style: { width: 12 } });
}
function HeaderAndFooterSpacing() {
  return callback(View, { style: { width: 16 } });
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = 100 + require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: 24, height: sum };
_createForOfIteratorHelperLoose.categoryContainer = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
_createForOfIteratorHelperLoose.categoryHeader = obj1;
_createForOfIteratorHelperLoose.categoryHeaderBorderDark = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_660 };
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_660 };
_createForOfIteratorHelperLoose.categoryHeaderBorderLight = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.imageBackground = { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" };
let obj3 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.viewAllIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let result = require("items").fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategory = function ShopCategory(category) {
  let index;
  let initialProductSkuId;
  let isDarkTheme;
  let productIndex;
  category = category.category;
  let collectiblesAnalyticsContext;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(5462)().analyticsLocations;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = category(1456);
  const dependencyMap = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  let obj1 = category(14025);
  obj = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj1.useFilteredAndSortedProducts(obj);
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj3 = category(14527);
  const collectiblesShopDeepLinkProps = obj3.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  let obj4 = category(7527);
  let items = [category.storeListingId];
  const recyclingState = obj4.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (null != current) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  let obj5 = category(14529);
  obj = {};
  let tmp6 = null != productIndex;
  if (tmp6) {
    tmp6 = productIndex > 0;
  }
  obj.shouldScroll = tmp6;
  obj.initialScrollIndex = productIndex;
  obj.flashListRef = ref;
  obj.afterMs = category(14529).INITIAL_SCROLL_DELAY_MS;
  obj.resetKey = category.storeListingId;
  const scrollToInitialIndexOnce = obj5.useScrollToInitialIndexOnce(obj);
  let obj7 = category(8707);
  collectiblesAnalyticsContext = obj7.useCollectiblesAnalyticsContext();
  const items1 = [initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = unpublishedAt.useEffect(() => {
    let found = null;
    if (null != initialProductSkuId) {
      found = filteredAndSortedProducts.find((skuId) => skuId.skuId === outer1_5);
    }
    if (null != found) {
      let tmp5;
      let obj = analyticsLocations(navigation[15]);
      obj.hideActionSheet();
      obj = { product: found, initialVariantIndex, analyticsLocations };
      if (null != collectiblesAnalyticsContext) {
        tmp5 = collectiblesAnalyticsContext;
      }
      obj.shopAnalyticsContext = tmp5;
      const result = category(navigation[16]).openProductDetailsActionSheet(obj);
      const obj2 = category(navigation[16]);
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = unpublishedAt.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index } };
    obj = { product: item, unpublishedAt };
    obj.children = ref(analyticsLocations(navigation[5]), obj);
    return ref(category(navigation[14]).CollectiblesAnalyticsProvider, obj);
  }, items2);
  obj1 = { newValue: { categoryPosition: index } };
  let obj2 = { style: tmp.categoryContainer };
  obj3 = { style: items3, accessibilityRole: "button" };
  items3 = [tmp.categoryHeader, isDarkTheme ? tmp.categoryHeaderBorderDark : tmp.categoryHeaderBorderLight];
  const intl = category(1212).intl;
  obj4 = { category: category.name };
  obj3.accessibilityLabel = intl.formatToPlainString(category(1212).t.FNtLb3, obj4);
  const intl2 = category(1212).intl;
  obj3.accessibilityHint = intl2.string(category(1212).t.F8ma9x);
  obj3.activeOpacity = 0.8;
  obj5 = { radius: analyticsLocations(689).radii.lg };
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
    tmp14 = ref(analyticsLocations(5085), obj6);
  }
  const items4 = [tmp14, ref(filteredAndSortedProducts, { style: tmp.viewAllIcon, children: ref(category(5512).ChevronSmallRightIcon, { size: "sm", color: "white" }) })];
  obj3.children = items4;
  const items5 = [collectiblesAnalyticsContext(category(4660).PressableOpacity, obj3, category.storeListingId), ];
  const obj9 = { ref, horizontal: true };
  const intl3 = category(1212).intl;
  obj9.accessibilityLabel = intl3.formatToPlainString(category(1212).t.FNtLb3, { category: category.name });
  obj9.accessibilityRole = "list";
  obj9.data = filteredAndSortedProducts;
  obj9.renderItem = callback;
  obj9.drawDistance = 150;
  obj9.decelerationRate = "fast";
  obj9.snapToInterval = category(8704).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj9.showsHorizontalScrollIndicator = false;
  obj9.ListHeaderComponent = HeaderAndFooterSpacing;
  obj9.ListFooterComponent = HeaderAndFooterSpacing;
  obj9.ItemSeparatorComponent = Spacing;
  obj9.initialScrollIndex = productIndex;
  items5[1] = ref(category(7527).FlashList, obj9);
  obj2.children = items5;
  obj1.children = collectiblesAnalyticsContext(filteredAndSortedProducts, obj2);
  return ref(category(8707).CollectiblesAnalyticsProvider, obj1);
};
