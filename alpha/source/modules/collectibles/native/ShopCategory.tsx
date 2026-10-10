// Module ID: 16188
// Function ID: 16189
// Name: ShopCategory
// Dependencies: [19, 17, 1087, 1085, 21, 8967, 5092, 587, 558, 576, 4850, 5093, 1126, 6851, 1503, 15328, 16185, 8624, 16189, 8970, 9078, 5056, 8300, 7262, 6878, 6156, 6905, 6184, 2]

// Module 16188 (ShopCategory)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import timing from "timing" /* 5093 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7262 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 8300 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8967 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8970 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const CollectiblesShopCardV2Default = CollectiblesShopCardV2;
let _require, dependencyMap, hideActionSheetResult, navigation, obj1, set, tmp11, tmp2;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function Spacing() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 12 } };
    const tmp5 = metroImportDefault(View, obj2);
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function Spacing() {
  return metroImportDefault(View, { style: { width: 12 } });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderAndFooterSpacing() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 16 } };
    const tmp5 = metroImportDefault(View, obj2);
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function HeaderAndFooterSpacing() {
  return metroImportDefault(View, { style: { width: 16 } });
});
const __initData = { code: "function ShopCategoryTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function ShopCategoryTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopCategorySkeleton() {
  let items1;
  let productSkeleton;
  let tmp6;
  let tmp7;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(20);
  const tmp4 = closure_9();
  _require = tmp4;
  const obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(0.3);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj = timing;
      const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  const fn2 = function h() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn2.__closure = { opacity: sharedValue };
  fn2.__workletHash = 1317875237641;
  fn2.__initData = __initData;
  const tmpResult = tmp(4850);
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[3] === animatedStyle) {
    let tmp10;
    let tmp13;
    let tmp12;
    let tmp15;
    let arr3;
    let tmp20;
    if (cResult[4] === tmp4.categoryContainer) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.ZTNur7);
      const obj3 = { busy: true };
      cResult[6] = stringResult;
      cResult[7] = obj3;
      tmp13 = obj3;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp4.categoryHeaderSkeleton) {
      const obj4 = { style: tmp4.categoryHeaderSkeleton };
      const tmp18 = closure_7(View, obj4);
      cResult[8] = tmp4.categoryHeaderSkeleton;
      cResult[9] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[9];
    }
    const _Symbol2 = Symbol;
    const productsSkeleton = tmp4.productsSkeleton;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const _Array = Array;
      const arr = Array.from({ length: 3 });
      cResult[10] = arr;
      arr3 = arr;
    } else {
      arr3 = cResult[10];
    }
    if (cResult[11] !== tmp4.productSkeleton) {
      const mapped = arr3.map((item, index) => {
        const obj = { style: productSkeleton.productSkeleton };
        return metroImportDefault(View, obj, index);
      });
      cResult[11] = tmp4.productSkeleton;
      cResult[12] = mapped;
      tmp20 = mapped;
    } else {
      tmp20 = cResult[12];
    }
    if (cResult[13] === tmp4.productsSkeleton) {
      let tmp22;
      if (cResult[14] === tmp20) {
        tmp22 = cResult[15];
      }
      if (cResult[16] === tmp10) {
        if (cResult[17] === tmp15) {
          let tmp26;
          if (cResult[18] === tmp22) {
            tmp26 = cResult[19];
          }
          return tmp26;
        }
      }
      const obj5 = { style: tmp10, accessibilityLabel: tmp12, accessibilityState: tmp13, accessible: true, children: items1 };
      items1 = [tmp15, tmp22];
      const tmp29 = closure_8(sharedValue(4850).View, obj5);
      cResult[16] = tmp10;
      cResult[17] = tmp15;
      cResult[18] = tmp22;
      cResult[19] = tmp29;
      tmp26 = tmp29;
    }
    const obj6 = { style: productsSkeleton, children: tmp20 };
    const tmp25 = closure_7(View, obj6);
    cResult[13] = tmp4.productsSkeleton;
    cResult[14] = tmp20;
    cResult[15] = tmp25;
    tmp22 = tmp25;
  }
  const items2 = [tmp4.categoryContainer, animatedStyle];
  cResult[3] = animatedStyle;
  cResult[4] = tmp4.categoryContainer;
  cResult[5] = items2;
  tmp10 = items2;
}) : (function ShopCategorySkeleton() {
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
  fn.__workletHash = 16889796144266;
  fn.__initData = __initData2;
  const obj2 = require("ReanimatedRexport");
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items1, accessibilityLabel: intl.string(require("intl").t.ZTNur7), accessibilityState: { busy: true }, accessible: true, children: items2 };
  items1 = [tmp.categoryContainer, animatedStyle];
  View = sharedValue(4850).View;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopCategory(isDarkTheme) {
  let analyticsLocations;
  let category;
  let closure_10;
  let index;
  let initialProductSkuId;
  let isInImprovedMobileShopLoading;
  let items2;
  let obj15;
  let productIndex;
  let products;
  let unpublishedAt;
  let tmp = category;
  let obj = category(navigation[9]);
  const cResult = obj.c(64);
  ({ index, category } = isDarkTheme);
  isDarkTheme = isDarkTheme.isDarkTheme;
  analyticsLocations = analyticsLocations(navigation[13])().analyticsLocations;
  const tmp5 = isInImprovedMobileShopLoading();
  let obj2 = category(navigation[14]);
  navigation = obj2.useNavigation();
  ({ products, unpublishedAt } = category);
  if (cResult[0] === category.isOrbsExclusive) {
    let tmp7;
    let tmp9;
    let tmp13;
    let tmp15;
    if (cResult[1] === products) {
      tmp7 = cResult[2];
    }
    const tmpResult = tmp(navigation[15]);
    const filteredAndSortedProducts = tmpResult.useFilteredAndSortedProducts(tmp7);
    const mobileBannerUrl = category.mobileBannerUrl;
    if (cResult[3] !== filteredAndSortedProducts) {
      const obj3 = { products: filteredAndSortedProducts };
      cResult[3] = filteredAndSortedProducts;
      cResult[4] = obj3;
      tmp9 = obj3;
    } else {
      tmp9 = cResult[4];
    }
    const tmpResult6 = tmp(navigation[16]);
    const collectiblesShopDeepLinkProps = tmpResult6.useCollectiblesShopDeepLinkProps(tmp9);
    ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
    const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
    const ref = unpublishedAt.useRef(null);
    const obj7 = unpublishedAt;
    if (cResult[5] !== category.storeListingId) {
      let items = [category.storeListingId];
      cResult[5] = category.storeListingId;
      cResult[6] = items;
      tmp13 = items;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function k() {
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      };
      cResult[7] = fn;
      tmp15 = fn;
    } else {
      tmp15 = cResult[7];
    }
    const tmpResult7 = tmp(navigation[17]);
    const recyclingState = tmpResult7.useRecyclingState(null, tmp13, tmp15);
    if (cResult[8] === category.storeListingId) {
      if (cResult[9] === productIndex) {
        let tmp18;
        if (cResult[10] === (null != productIndex && productIndex > 0)) {
          tmp18 = cResult[11];
        }
        const tmpResult8 = tmp(navigation[18]);
        const scrollToInitialIndexOnce = tmpResult8.useScrollToInitialIndexOnce(tmp18);
        const tmpResult9 = tmp(navigation[19]);
        const collectiblesAnalyticsContext = tmpResult9.useCollectiblesAnalyticsContext();
        const tmpResult10 = tmp(navigation[20]);
        isInImprovedMobileShopLoading = tmpResult10.useIsInImprovedMobileShopLoading();
        if (cResult[12] === collectiblesAnalyticsContext) {
          if (cResult[13] === analyticsLocations) {
            if (cResult[14] === initialProductSkuId) {
              if (cResult[15] === initialVariantIndex) {
                if (cResult[16] === isInImprovedMobileShopLoading) {
                  let tmp22;
                  let tmp23;
                  let tmp25;
                  if (cResult[17] === filteredAndSortedProducts) {
                    tmp22 = cResult[18];
                    tmp23 = cResult[19];
                  }
                  const effect = obj7.useEffect(tmp22, tmp23);
                  if (cResult[20] !== unpublishedAt) {
                    const fn2 = function z(arg0) {
                      let index;
                      let item;
                      let obj2;
                      ({ item, index } = arg0);
                      const obj = { newValue: { tilePosition: index }, children: metroImportDefault(CollectiblesShopCardV2Default, obj2) };
                      const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
                      obj2 = { product: item, unpublishedAt };
                      return metroImportDefault(CollectiblesAnalyticsProvider, obj);
                    };
                    cResult[20] = unpublishedAt;
                    cResult[21] = fn2;
                    tmp25 = fn2;
                  } else {
                    tmp25 = cResult[21];
                  }
                  if (cResult[22] === collectiblesAnalyticsContext) {
                    let tmp26;
                    let tmp27;
                    if (cResult[23] === navigation) {
                      tmp26 = cResult[24];
                    }
                    ItemSeparatorComponent = tmp26;
                    if (cResult[25] !== index) {
                      const obj4 = { categoryPosition: index };
                      cResult[25] = index;
                      cResult[26] = obj4;
                      tmp27 = obj4;
                    } else {
                      tmp27 = cResult[26];
                    }
                    const tmp30 = isDarkTheme ? tmp5.categoryHeaderBorderDark : tmp5.categoryHeaderBorderLight;
                    if (cResult[27] === tmp5.categoryHeader) {
                      let tmp31;
                      let tmp36;
                      if (cResult[28] === tmp30) {
                        tmp31 = cResult[29];
                      }
                      if (cResult[30] !== category.name) {
                        const intl = tmp(tmp2[12]).intl;
                        const obj5 = { category: category.name };
                        cResult[30] = category.name;
                        cResult[31] = intl.formatToPlainString(tmp(navigation[12]).t.FNtLb3, obj5);
                        intl.formatToPlainString(tmp(navigation[12]).t.FNtLb3, obj5);
                        class Q {
                          constructor() {
                            return closure_10(category);
                          }
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl2 = tmp(tmp2[12]).intl;
                        cResult[32] = intl2.string(tmp(navigation[12]).t.F8ma9x);
                        const stringResult = intl2.string(tmp(navigation[12]).t.F8ma9x);
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj6 = { radius: analyticsLocations(navigation[7]).radii.lg };
                        cResult[33] = obj6;
                        tmp36 = obj6;
                      } else {
                        tmp36 = cResult[33];
                      }
                      if (cResult[34] === category) {
                        let tmp37;
                        if (cResult[35] === tmp26) {
                          tmp37 = cResult[36];
                        }
                        if (cResult[37] === mobileBannerUrl) {
                          let tmp41;
                          const _Symbol4 = Symbol;
                          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp43 = ref(tmp(navigation[26]).ChevronSmallRightIcon, { size: "sm", color: "white" });
                            cResult[40] = tmp43;
                            tmp41 = tmp43;
                          } else {
                            tmp41 = cResult[40];
                          }
                          if (cResult[41] !== tmp5.viewAllIcon) {
                            const obj8 = { style: tmp5.viewAllIcon, children: tmp41 };
                            ref(filteredAndSortedProducts, obj8);
                            cResult[41] = tmp5.viewAllIcon;
                            class Q {
                              constructor() {
                                return closure_10(category);
                              }
                            }
                            class V {
                              constructor() {
                                tmp = closure_9;
                                if (!tmp) {
                                  tmp2 = initialProductSkuId;
                                  tmp3 = null;
                                  found = null;
                                  if (null != initialProductSkuId) {
                                    tmp5 = closure_4;
                                    found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                  }
                                  if (null != found) {
                                    tmp6 = closure_1;
                                    tmp7 = closure_2;
                                    obj = closure_1(closure_2[21]);
                                    hideActionSheetResult = obj.hideActionSheet();
                                    tmp9 = closure_0;
                                    tmp10 = closure_0(closure_2[22]);
                                    obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                    obj1.product = found;
                                    tmp11 = initialVariantIndex;
                                    obj1.initialVariantIndex = initialVariantIndex;
                                    tmp12 = analyticsLocations;
                                    obj1.analyticsLocations = analyticsLocations;
                                    tmp13 = closure_8;
                                    openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                                    obj1.shopAnalyticsContext = tmp13;
                                    result = openProductDetailsActionSheet(obj1);
                                  }
                                }
                                return;
                              }
                            }
                          }
                          if (cResult[43] === category.storeListingId) {
                            if (cResult[44] === tmp31) {
                              if (cResult[45] === tmp32) {
                                if (cResult[46] === tmp37) {
                                  if (cResult[47] === tmp38) {
                                    let tmp48;
                                    if (cResult[48] === tmp44) {
                                      tmp48 = cResult[49];
                                    }
                                    if (cResult[50] !== category.name) {
                                      const intl3 = tmp(tmp2[12]).intl;
                                      const obj9 = { category: category.name };
                                      cResult[50] = category.name;
                                      cResult[51] = intl3.formatToPlainString(tmp(navigation[12]).t.FNtLb3, obj9);
                                      intl3.formatToPlainString(tmp(navigation[12]).t.FNtLb3, obj9);
                                      class Q {
                                        constructor() {
                                          return closure_10(category);
                                        }
                                      }
                                    }
                                    if (cResult[52] === productIndex) {
                                      if (cResult[53] === tmp25) {
                                        if (cResult[54] === filteredAndSortedProducts) {
                                          let tmp53;
                                          if (cResult[55] === tmp51) {
                                            tmp53 = cResult[56];
                                          }
                                          if (cResult[57] === tmp5.categoryContainer) {
                                            if (cResult[58] === tmp48) {
                                              let tmp59;
                                              if (cResult[59] === tmp53) {
                                                tmp59 = cResult[60];
                                              }
                                              if (cResult[61] === tmp27) {
                                                let tmp63;
                                                if (cResult[62] === tmp59) {
                                                  tmp63 = cResult[63];
                                                }
                                                return tmp63;
                                              }
                                              const obj10 = { newValue: tmp27, children: tmp59 };
                                              const tmp65 = ref(tmp(navigation[19]).CollectiblesAnalyticsProvider, obj10);
                                              cResult[61] = tmp27;
                                              class Q {
                                                constructor() {
                                                  return closure_10(category);
                                                }
                                              }
                                              class V {
                                                constructor() {
                                                  tmp = closure_9;
                                                  if (!tmp) {
                                                    tmp2 = initialProductSkuId;
                                                    tmp3 = null;
                                                    found = null;
                                                    if (null != initialProductSkuId) {
                                                      tmp5 = closure_4;
                                                      found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                                    }
                                                    if (null != found) {
                                                      tmp6 = closure_1;
                                                      tmp7 = closure_2;
                                                      obj = closure_1(closure_2[21]);
                                                      hideActionSheetResult = obj.hideActionSheet();
                                                      tmp9 = closure_0;
                                                      tmp10 = closure_0(closure_2[22]);
                                                      obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                                      obj1.product = found;
                                                      tmp11 = initialVariantIndex;
                                                      obj1.initialVariantIndex = initialVariantIndex;
                                                      tmp12 = analyticsLocations;
                                                      obj1.analyticsLocations = analyticsLocations;
                                                      tmp13 = closure_8;
                                                      openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                                                      obj1.shopAnalyticsContext = tmp13;
                                                      result = openProductDetailsActionSheet(obj1);
                                                    }
                                                  }
                                                  return;
                                                }
                                              }
                                              cResult[63] = tmp65;
                                              tmp63 = tmp65;
                                            }
                                          }
                                          const items1 = [tmp48, tmp53];
                                          class Q {
                                            constructor() {
                                              return closure_10(category);
                                            }
                                          }
                                          class V {
                                            constructor() {
                                              tmp = closure_9;
                                              if (!tmp) {
                                                tmp2 = initialProductSkuId;
                                                tmp3 = null;
                                                found = null;
                                                if (null != initialProductSkuId) {
                                                  tmp5 = closure_4;
                                                  found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                                }
                                                if (null != found) {
                                                  tmp6 = closure_1;
                                                  tmp7 = closure_2;
                                                  obj = closure_1(closure_2[21]);
                                                  hideActionSheetResult = obj.hideActionSheet();
                                                  tmp9 = closure_0;
                                                  tmp10 = closure_0(closure_2[22]);
                                                  obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                                  obj1.product = found;
                                                  tmp11 = initialVariantIndex;
                                                  obj1.initialVariantIndex = initialVariantIndex;
                                                  tmp12 = analyticsLocations;
                                                  obj1.analyticsLocations = analyticsLocations;
                                                  tmp13 = closure_8;
                                                  openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                                                  obj1.shopAnalyticsContext = tmp13;
                                                  result = openProductDetailsActionSheet(obj1);
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          cResult[57] = tmp5.categoryContainer;
                                          cResult[58] = tmp48;
                                          cResult[59] = tmp53;
                                          cResult[60] = tmp62;
                                          tmp59 = tmp62;
                                        }
                                      }
                                    }
                                    const obj12 = { ref, horizontal: true, accessibilityLabel: tmp51, accessibilityRole: "list", data: filteredAndSortedProducts, renderItem: tmp25, drawDistance: 150, decelerationRate: "fast", snapToInterval: tmp(navigation[5]).COLLECTIBLES_SHOP_CARD_WIDTH + 12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListFooterComponent, ListFooterComponent, ItemSeparatorComponent, initialScrollIndex: productIndex };
                                    class Q {
                                      constructor() {
                                        return closure_10(category);
                                      }
                                    }
                                    class V {
                                      constructor() {
                                        tmp = closure_9;
                                        if (!tmp) {
                                          tmp2 = initialProductSkuId;
                                          tmp3 = null;
                                          found = null;
                                          if (null != initialProductSkuId) {
                                            tmp5 = closure_4;
                                            found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                          }
                                          if (null != found) {
                                            tmp6 = closure_1;
                                            tmp7 = closure_2;
                                            obj = closure_1(closure_2[21]);
                                            hideActionSheetResult = obj.hideActionSheet();
                                            tmp9 = closure_0;
                                            tmp10 = closure_0(closure_2[22]);
                                            obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                            obj1.product = found;
                                            tmp11 = initialVariantIndex;
                                            obj1.initialVariantIndex = initialVariantIndex;
                                            tmp12 = analyticsLocations;
                                            obj1.analyticsLocations = analyticsLocations;
                                            tmp13 = closure_8;
                                            openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                                            obj1.shopAnalyticsContext = tmp13;
                                            result = openProductDetailsActionSheet(obj1);
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    const tmp58 = ref(tmp55, obj12);
                                    cResult[52] = productIndex;
                                    cResult[53] = tmp25;
                                    cResult[54] = filteredAndSortedProducts;
                                    cResult[55] = tmp51;
                                    cResult[56] = tmp58;
                                    tmp53 = tmp58;
                                  }
                                }
                              }
                            }
                          }
                          const obj13 = { style: tmp31, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: tmp36, hitSlop: 8, onPress: tmp37, children: items2 };
                          class Q {
                            constructor() {
                              return closure_10(category);
                            }
                          }
                          class V {
                            constructor() {
                              tmp = closure_9;
                              if (!tmp) {
                                tmp2 = initialProductSkuId;
                                tmp3 = null;
                                found = null;
                                if (null != initialProductSkuId) {
                                  tmp5 = closure_4;
                                  found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                }
                                if (null != found) {
                                  tmp6 = closure_1;
                                  tmp7 = closure_2;
                                  obj = closure_1(closure_2[21]);
                                  hideActionSheetResult = obj.hideActionSheet();
                                  tmp9 = closure_0;
                                  tmp10 = closure_0(closure_2[22]);
                                  obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                  obj1.product = found;
                                  tmp11 = initialVariantIndex;
                                  obj1.initialVariantIndex = initialVariantIndex;
                                  tmp12 = analyticsLocations;
                                  obj1.analyticsLocations = analyticsLocations;
                                  tmp13 = closure_8;
                                  openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                                  obj1.shopAnalyticsContext = tmp13;
                                  result = openProductDetailsActionSheet(obj1);
                                }
                              }
                              return;
                            }
                          }
                          items2 = [tmp38, tmp44];
                          const tmp50 = collectiblesAnalyticsContext(tmp(navigation[27]).PressableOpacity, obj13, tmp29);
                          cResult[43] = category.storeListingId;
                          cResult[44] = tmp31;
                          cResult[45] = tmp32;
                          cResult[46] = tmp37;
                          cResult[47] = tmp38;
                          cResult[48] = tmp44;
                          cResult[49] = tmp50;
                          tmp48 = tmp50;
                        }
                        let tmp39 = null != mobileBannerUrl;
                        if (tmp39) {
                          const obj14 = { source: obj15, resizeMode: "cover", style: tmp5.imageBackground };
                          obj15 = { uri: mobileBannerUrl };
                          tmp39 = ref(tmp4(tmp2[25]), obj14);
                        }
                        cResult[37] = mobileBannerUrl;
                        cResult[38] = tmp5.imageBackground;
                        class Q {
                          constructor() {
                            return closure_10(category);
                          }
                        }
                        class V {
                          constructor() {
                            tmp = closure_9;
                            if (!tmp) {
                              tmp2 = initialProductSkuId;
                              tmp3 = null;
                              found = null;
                              if (null != initialProductSkuId) {
                                tmp5 = closure_4;
                                found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                              }
                              if (null != found) {
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj = closure_1(closure_2[21]);
                                hideActionSheetResult = obj.hideActionSheet();
                                tmp9 = closure_0;
                                tmp10 = closure_0(closure_2[22]);
                                obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                obj1.product = found;
                                tmp11 = initialVariantIndex;
                                obj1.initialVariantIndex = initialVariantIndex;
                                tmp12 = analyticsLocations;
                                obj1.analyticsLocations = analyticsLocations;
                                tmp13 = closure_8;
                                openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                                obj1.shopAnalyticsContext = tmp13;
                                result = openProductDetailsActionSheet(obj1);
                              }
                            }
                            return;
                          }
                        }
                      }
                      class Q {
                        constructor() {
                          return closure_10(category);
                        }
                      }
                      class V {
                        constructor() {
                          tmp = closure_9;
                          if (!tmp) {
                            tmp2 = initialProductSkuId;
                            tmp3 = null;
                            found = null;
                            if (null != initialProductSkuId) {
                              tmp5 = closure_4;
                              found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                            }
                            if (null != found) {
                              tmp6 = closure_1;
                              tmp7 = closure_2;
                              obj = closure_1(closure_2[21]);
                              hideActionSheetResult = obj.hideActionSheet();
                              tmp9 = closure_0;
                              tmp10 = closure_0(closure_2[22]);
                              obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                              obj1.product = found;
                              tmp11 = initialVariantIndex;
                              obj1.initialVariantIndex = initialVariantIndex;
                              tmp12 = analyticsLocations;
                              obj1.analyticsLocations = analyticsLocations;
                              tmp13 = closure_8;
                              openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                              obj1.shopAnalyticsContext = tmp13;
                              result = openProductDetailsActionSheet(obj1);
                            }
                          }
                          return;
                        }
                      }
                      cResult[34] = category;
                      cResult[35] = tmp26;
                      cResult[36] = Q;
                      tmp37 = Q;
                    }
                    const items3 = [tmp5.categoryHeader, tmp30];
                    class V {
                      constructor() {
                        tmp = closure_9;
                        if (!tmp) {
                          tmp2 = initialProductSkuId;
                          tmp3 = null;
                          found = null;
                          if (null != initialProductSkuId) {
                            tmp5 = closure_4;
                            found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                          }
                          if (null != found) {
                            tmp6 = closure_1;
                            tmp7 = closure_2;
                            obj = closure_1(closure_2[21]);
                            hideActionSheetResult = obj.hideActionSheet();
                            tmp9 = closure_0;
                            tmp10 = closure_0(closure_2[22]);
                            obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                            obj1.product = found;
                            tmp11 = initialVariantIndex;
                            obj1.initialVariantIndex = initialVariantIndex;
                            tmp12 = analyticsLocations;
                            obj1.analyticsLocations = analyticsLocations;
                            tmp13 = closure_8;
                            openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                            obj1.shopAnalyticsContext = tmp13;
                            result = openProductDetailsActionSheet(obj1);
                          }
                        }
                        return;
                      }
                    }
                    cResult[28] = tmp30;
                    cResult[29] = items3;
                    tmp31 = items3;
                  }
                  function onTapViewAll(isOrbsExclusive) {
                    let items;
                    if (isOrbsExclusive.isOrbsExclusive) {
                      const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: initialProductSkuId.ORBS };
                      const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                      items = [];
                      CollectiblesActionCreators;
                      items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                      const result = openCollectiblesShopMobile(obj2);
                    } else {
                      const obj = { category: isOrbsExclusive, analyticsContext: collectiblesAnalyticsContext };
                      navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
                    }
                  }
                  cResult[22] = collectiblesAnalyticsContext;
                  cResult[23] = navigation;
                  class V {
                    constructor() {
                      tmp = closure_9;
                      if (!tmp) {
                        tmp2 = initialProductSkuId;
                        tmp3 = null;
                        found = null;
                        if (null != initialProductSkuId) {
                          tmp5 = closure_4;
                          found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                        }
                        if (null != found) {
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj = closure_1(closure_2[21]);
                          hideActionSheetResult = obj.hideActionSheet();
                          tmp9 = closure_0;
                          tmp10 = closure_0(closure_2[22]);
                          obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                          obj1.product = found;
                          tmp11 = initialVariantIndex;
                          obj1.initialVariantIndex = initialVariantIndex;
                          tmp12 = analyticsLocations;
                          obj1.analyticsLocations = analyticsLocations;
                          tmp13 = closure_8;
                          openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                          obj1.shopAnalyticsContext = tmp13;
                          result = openProductDetailsActionSheet(obj1);
                        }
                      }
                      return;
                    }
                  }
                  tmp26 = onTapViewAll;
                }
              }
            }
          }
        }
        class V {
          constructor() {
            tmp = closure_9;
            if (!tmp) {
              tmp2 = initialProductSkuId;
              tmp3 = null;
              found = null;
              if (null != initialProductSkuId) {
                tmp5 = closure_4;
                found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
              }
              if (null != found) {
                tmp6 = closure_1;
                tmp7 = closure_2;
                obj = closure_1(closure_2[21]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp9 = closure_0;
                tmp10 = closure_0(closure_2[22]);
                obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                obj1.product = found;
                tmp11 = initialVariantIndex;
                obj1.initialVariantIndex = initialVariantIndex;
                tmp12 = analyticsLocations;
                obj1.analyticsLocations = analyticsLocations;
                tmp13 = closure_8;
                openProductDetailsActionSheet = tmp10.openProductDetailsActionSheet;
                obj1.shopAnalyticsContext = tmp13;
                result = openProductDetailsActionSheet(obj1);
              }
            }
            return;
          }
        }
        const items4 = [isInImprovedMobileShopLoading, initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
        cResult[12] = collectiblesAnalyticsContext;
        cResult[13] = analyticsLocations;
        cResult[14] = initialProductSkuId;
        cResult[15] = initialVariantIndex;
        cResult[16] = isInImprovedMobileShopLoading;
        cResult[17] = filteredAndSortedProducts;
        cResult[18] = V;
        cResult[19] = items4;
        tmp23 = items4;
        tmp22 = V;
      }
    }
    const obj16 = { shouldScroll: null != productIndex && productIndex > 0, initialScrollIndex: productIndex, flashListRef: ref, afterMs: tmp(navigation[18]).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
    cResult[8] = category.storeListingId;
    cResult[9] = productIndex;
    cResult[10] = null != productIndex && productIndex > 0;
    cResult[11] = obj16;
    tmp18 = obj16;
  }
  const obj17 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  cResult[0] = category.isOrbsExclusive;
  cResult[1] = products;
  cResult[2] = obj17;
  tmp7 = obj17;
}) : (function ShopCategory(category) {
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
  analyticsLocations = analyticsLocations(6851)().analyticsLocations;
  const tmp3 = isInImprovedMobileShopLoading();
  let obj = category(1503);
  dependencyMap = obj.useNavigation();
  const unpublishedAt = category.unpublishedAt;
  const products = category.products;
  let obj2 = category(15328);
  const obj3 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts(obj3);
  const mobileBannerUrl = category.mobileBannerUrl;
  const obj4 = category(16185);
  const collectiblesShopDeepLinkProps = obj4.useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  let items = [category.storeListingId];
  const obj6 = category(8624);
  const recyclingState = obj6.useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  let tmp10 = null != productIndex;
  const useScrollToInitialIndexOnce = category(16189).useScrollToInitialIndexOnce;
  const tmp9 = category(16189);
  if (tmp10) {
    tmp10 = productIndex > 0;
  }
  const obj7 = { shouldScroll: tmp10, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(16189).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  const scrollToInitialIndexOnce = useScrollToInitialIndexOnce(obj7);
  const tmp4Result = category(8970);
  collectiblesAnalyticsContext = tmp4Result.useCollectiblesAnalyticsContext();
  const tmp4Result2 = category(9078);
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
  let CollectiblesAnalyticsProvider = tmp4(8970).CollectiblesAnalyticsProvider;
  const items3 = [tmp3.categoryHeader, ];
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const obj10 = {
    style: items3,
    accessibilityRole: "button",
    accessibilityLabel: intl.formatToPlainString(category(1126).t.FNtLb3, obj11),
    accessibilityHint: intl2.string(category(1126).t.F8ma9x),
    activeOpacity: 0.8,
    androidRippleConfig: { radius: tmp(587).radii.lg },
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
  const PressableOpacity = tmp4(6184).PressableOpacity;
  intl = tmp4(1126).intl;
  obj11 = { category: category.name };
  intl2 = tmp4(1126).intl;
  let tmp16Result = null != mobileBannerUrl;
  ({ radius: tmp(587).radii.lg });
  if (tmp16Result) {
    const obj13 = { source: obj14, resizeMode: "cover", style: tmp3.imageBackground };
    obj14 = { uri: mobileBannerUrl };
    tmp16Result = tmp16(tmp(6156), obj13);
  }
  items4 = [tmp16Result, ];
  const obj15 = { style: tmp3.viewAllIcon, children: ref(category(6905).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
  items4[1] = ref(filteredAndSortedProducts, obj15);
  items5 = [collectiblesAnalyticsContext(PressableOpacity, obj10, category.storeListingId), ];
  const obj16 = { ref, horizontal: true, accessibilityLabel: intl3.formatToPlainString(category(1126).t.FNtLb3, obj17), accessibilityRole: "list", data: filteredAndSortedProducts, renderItem: callback, drawDistance: 150, decelerationRate: "fast", snapToInterval: category(8967).COLLECTIBLES_SHOP_CARD_WIDTH + 12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListFooterComponent, ListFooterComponent, ItemSeparatorComponent, initialScrollIndex: productIndex };
  const FlashList = tmp4(8624).FlashList;
  intl3 = tmp4(1126).intl;
  obj17 = { category: category.name };
  items5[1] = ref(FlashList, obj16);
  return ref(CollectiblesAnalyticsProvider, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategorySkeleton = tmp5;
export const ShopCategory = tmp6;
