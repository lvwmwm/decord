// Module ID: 15427
// Function ID: 15428
// Name: ShopCategory
// Dependencies: [19, 17, 1076, 1074, 21, 8226, 4836, 576, 6583, 1485, 14604, 15424, 8179, 15428, 8229, 4800, 7621, 6961, 6603, 5435, 1115, 5899, 6630, 2]
// Exports: ShopCategory

// Module 15427 (ShopCategory)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 7621 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8226 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8229 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const CollectiblesShopCardV2Default = CollectiblesShopCardV2;
let dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function Spacing() {
  return metroImportDefault(View, { style: { width: 12 } });
}
function HeaderAndFooterSpacing() {
  return metroImportDefault(View, { style: { width: 16 } });
}
const View = react_native.View;
let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const sum = 100 + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT;
let createStyles = createStyles_mod;
let obj = { categoryContainer: obj2, categoryHeader: obj3, categoryHeaderBorderDark: obj4, categoryHeaderBorderLight: obj5, imageBackground: { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" }, viewAllIcon: obj6 };
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
obj4 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj6 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategory = function ShopCategory(category) {
  let index;
  let initialProductSkuId;
  let intl;
  let intl2;
  let intl3;
  let isDarkTheme;
  let items4;
  let items5;
  let obj11;
  let obj14;
  let obj17;
  let obj9;
  let productIndex;
  category = category.category;
  let analyticsLocations;
  initialProductSkuId = undefined;
  let collectiblesAnalyticsContext;
  const tmp = analyticsLocations;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  const tmp3 = closure_9();
  let obj = category(1485);
  dependencyMap = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  const products = category.products;
  let obj2 = category(14604);
  const obj3 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts(obj3);
  const mobileBannerUrl = category.mobileBannerUrl;
  const obj4 = category(15424);
  const collectiblesShopDeepLinkProps = obj4.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  let items = [category.storeListingId];
  const obj6 = category(8179);
  const recyclingState = obj6.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  let tmp10 = null != productIndex;
  const useScrollToInitialIndexOnce = category(15428).useScrollToInitialIndexOnce;
  const tmp9 = category(15428);
  if (tmp10) {
    tmp10 = productIndex > 0;
  }
  const obj7 = { shouldScroll: tmp10, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(15428).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  const scrollToInitialIndexOnce = useScrollToInitialIndexOnce(obj7);
  const tmp4Result = category(8229);
  collectiblesAnalyticsContext = tmp4Result.useCollectiblesAnalyticsContext();
  const items1 = [initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = obj5.useEffect(() => {
    let tmp10;
    let found = null;
    if (null != initialProductSkuId) {
      found = filteredAndSortedProducts.find((skuId) => skuId.skuId === initialProductSkuId);
    }
    if (null != found) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: tmp10 };
      const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
      openProductDetailsActionSheet2;
      const result = openProductDetailsActionSheet(obj2);
      tmp10 = collectiblesAnalyticsContext;
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = obj5.useCallback((arg0) => {
    let index;
    let item;
    let obj2;
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index }, children: metroImportDefault(CollectiblesShopCardV2Default, obj2) };
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    obj2 = { product: item, unpublishedAt };
    return metroImportDefault(CollectiblesAnalyticsProvider, obj);
  }, items2);
  const obj8 = { newValue: { categoryPosition: index }, children: collectiblesAnalyticsContext(filteredAndSortedProducts, obj9) };
  obj9 = { style: tmp3.categoryContainer, children: items5 };
  let CollectiblesAnalyticsProvider = tmp4(8229).CollectiblesAnalyticsProvider;
  const items3 = [tmp3.categoryHeader, ];
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const obj10 = {
    style: items3,
    accessibilityRole: "button",
    accessibilityLabel: intl.formatToPlainString(category(1115).t.FNtLb3, obj11),
    accessibilityHint: intl2.string(category(1115).t.F8ma9x),
    activeOpacity: 0.8,
    androidRippleConfig: { radius: tmp(576).radii.lg },
    hitSlop: 8,
    onPress() {
      let items;
      if (category.isOrbsExclusive) {
        const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: initialProductSkuId.ORBS };
        const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
        items = [];
        CollectiblesActionCreators;
        items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj2);
      } else {
        const obj = { category: tmp, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    },
    children: items4
  };
  const PressableOpacity = tmp4(5435).PressableOpacity;
  intl = tmp4(1115).intl;
  obj11 = { category: category.name };
  intl2 = tmp4(1115).intl;
  let tmp15Result = null != mobileBannerUrl;
  ({ radius: tmp(576).radii.lg });
  if (tmp15Result) {
    const obj13 = { source: obj14, resizeMode: "cover", style: tmp3.imageBackground };
    obj14 = { uri: mobileBannerUrl };
    tmp15Result = tmp15(tmp(5899), obj13);
  }
  items4 = [tmp15Result, ];
  const obj15 = { style: tmp3.viewAllIcon, children: ref(category(6630).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
  items4[1] = ref(filteredAndSortedProducts, obj15);
  items5 = [collectiblesAnalyticsContext(PressableOpacity, obj10, category.storeListingId), ];
  const obj16 = { ref, horizontal: true, accessibilityLabel: intl3.formatToPlainString(category(1115).t.FNtLb3, obj17), accessibilityRole: "list", data: filteredAndSortedProducts, renderItem: callback, drawDistance: 150, decelerationRate: "fast", snapToInterval: category(8226).COLLECTIBLES_SHOP_CARD_WIDTH + 12, showsHorizontalScrollIndicator: false, ListHeaderComponent: HeaderAndFooterSpacing, ListFooterComponent: HeaderAndFooterSpacing, ItemSeparatorComponent: Spacing, initialScrollIndex: productIndex };
  const FlashList = tmp4(8179).FlashList;
  intl3 = tmp4(1115).intl;
  obj17 = { category: category.name };
  items5[1] = ref(FlashList, obj16);
  return ref(CollectiblesAnalyticsProvider, obj8);
};
