// Module ID: 17784
// Function ID: 17785
// Name: ShopCategory
// Dependencies: [19, 17, 1074, 1072, 21, 9437, 5009, 575, 5090, 5249, 1114, 7320, 1498, 16922, 17781, 7288, 17785, 9440, 9547, 5253, 8739, 7712, 7345, 6974, 5712, 7372, 2]
// Exports: ShopCategory, ShopCategorySkeleton

// Module 17784 (ShopCategory)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 8739 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9437 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9440 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const CollectiblesShopCardV2Default = CollectiblesShopCardV2;
let _require, dependencyMap, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
function Spacing() {
  return metroImportDefault(View, { style: { width: 12 } });
}
function HeaderAndFooterSpacing() {
  return metroImportDefault(View, { style: { width: 16 } });
}
let View = react_native.View;
let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const sum = 100 + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT;
let createStyles = createStyles_mod;
let obj = { categoryContainer: obj2, categoryHeader: obj3, categoryHeaderBorderDark: obj4, categoryHeaderBorderLight: obj5, imageBackground: { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" }, categoryHeaderSkeleton: obj6, productSkeleton: size, productsSkeleton: { flexDirection: "row", gap: 12, paddingHorizontal: 16 }, viewAllIcon: obj7 };
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
obj4 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj6 = { height: 84, marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
size = { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH, height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles(obj);
const __initData = { code: "function ShopCategoryTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export function ShopCategorySkeleton() {
  let arr;
  let intl;
  let items1;
  let items2;
  let productSkeleton;
  const tmp = closure_9();
  _require = tmp;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const fn = function s() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 1317875237641;
  fn.__initData = __initData;
  const obj2 = require("ReanimatedRexport");
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items1, accessibilityLabel: intl.string(require("intl").t.ZTNur7), accessibilityState: { busy: true }, accessible: true, children: items2 };
  items1 = [tmp.categoryContainer, animatedStyle];
  View = sharedValue(5090).View;
  intl = require("intl").intl;
  items2 = [, ];
  const obj4 = { style: tmp.categoryHeaderSkeleton };
  items2[0] = closure_7(View, obj4);
  const obj5 = {
    style: tmp.productsSkeleton,
    children: arr.map((item, index) => {
      const obj = { style: productSkeleton.productSkeleton };
      return metroImportDefault(View, obj, index);
    })
  };
  arr = Array.from({ length: 3 });
  items2[1] = closure_7(View, obj5);
  return closure_8(View, obj3);
}
export function ShopCategory(category) {
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
  let isInImprovedMobileShopLoading;
  let tmp = analyticsLocations;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(7320)().analyticsLocations;
  const tmp3 = isInImprovedMobileShopLoading();
  let obj = category(1498);
  dependencyMap = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  const products = category.products;
  let obj2 = category(16922);
  const obj3 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts(obj3);
  const mobileBannerUrl = category.mobileBannerUrl;
  const obj4 = category(17781);
  const collectiblesShopDeepLinkProps = obj4.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  let items = [category.storeListingId];
  const obj6 = category(7288);
  const recyclingState = obj6.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  let tmp10 = null != productIndex;
  const useScrollToInitialIndexOnce = category(17785).useScrollToInitialIndexOnce;
  const tmp9 = category(17785);
  if (tmp10) {
    tmp10 = productIndex > 0;
  }
  const obj7 = { shouldScroll: tmp10, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(17785).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  const scrollToInitialIndexOnce = useScrollToInitialIndexOnce(obj7);
  const tmp4Result = category(9440);
  collectiblesAnalyticsContext = tmp4Result.useCollectiblesAnalyticsContext();
  const tmp4Result2 = category(9547);
  isInImprovedMobileShopLoading = tmp4Result2.useIsInImprovedMobileShopLoading();
  const items1 = [isInImprovedMobileShopLoading, initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = obj5.useEffect(() => {
    let tmp13;
    const tmp = isInImprovedMobileShopLoading;
    if (!tmp) {
      let found = null;
      if (null != initialProductSkuId) {
        found = filteredAndSortedProducts.find((skuId) => skuId.skuId === initialProductSkuId);
      }
      if (null != found) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: tmp13 };
        const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
        openProductDetailsActionSheet2;
        const result = openProductDetailsActionSheet(obj2);
        tmp13 = collectiblesAnalyticsContext;
      }
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
  let CollectiblesAnalyticsProvider = tmp4(9440).CollectiblesAnalyticsProvider;
  const items3 = [tmp3.categoryHeader, ];
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const obj10 = {
    style: items3,
    accessibilityRole: "button",
    accessibilityLabel: intl.formatToPlainString(category(1114).t.FNtLb3, obj11),
    accessibilityHint: intl2.string(category(1114).t.F8ma9x),
    activeOpacity: 0.8,
    androidRippleConfig: { radius: tmp(575).radii.lg },
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
  const PressableOpacity = tmp4(6974).PressableOpacity;
  intl = tmp4(1114).intl;
  obj11 = { category: category.name };
  intl2 = tmp4(1114).intl;
  let tmp16Result = null != mobileBannerUrl;
  ({ radius: tmp(575).radii.lg });
  if (tmp16Result) {
    const obj13 = { source: obj14, resizeMode: "cover", style: tmp3.imageBackground };
    obj14 = { uri: mobileBannerUrl };
    tmp16Result = tmp16(tmp(5712), obj13);
  }
  items4 = [tmp16Result, ];
  const obj15 = { style: tmp3.viewAllIcon, children: ref(category(7372).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
  items4[1] = ref(filteredAndSortedProducts, obj15);
  items5 = [collectiblesAnalyticsContext(PressableOpacity, obj10, category.storeListingId), ];
  const obj16 = { ref, horizontal: true, accessibilityLabel: intl3.formatToPlainString(category(1114).t.FNtLb3, obj17), accessibilityRole: "list", data: filteredAndSortedProducts, renderItem: callback, drawDistance: 150, decelerationRate: "fast", snapToInterval: category(9437).COLLECTIBLES_SHOP_CARD_WIDTH + 12, showsHorizontalScrollIndicator: false, ListHeaderComponent: HeaderAndFooterSpacing, ListFooterComponent: HeaderAndFooterSpacing, ItemSeparatorComponent: Spacing, initialScrollIndex: productIndex };
  const FlashList = tmp4(7288).FlashList;
  intl3 = tmp4(1114).intl;
  obj17 = { category: category.name };
  items5[1] = ref(FlashList, obj16);
  return ref(CollectiblesAnalyticsProvider, obj8);
}
