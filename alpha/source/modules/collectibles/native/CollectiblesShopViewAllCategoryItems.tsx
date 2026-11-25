// Module ID: 17486
// Function ID: 17487
// Name: CollectiblesShopViewAllCategoryItems
// Dependencies: [5, 32, 19, 17, 5606, 11234, 9062, 1073, 1071, 21, 5012, 575, 1500, 504, 17487, 2185, 11199, 9189, 6349, 11219, 17488, 1112, 5603, 5610, 17438, 9370, 6348, 1628, 16542, 1653, 5613, 5614, 1255, 6333, 11168, 11266, 17489, 17466, 17481, 2]

// Module 17486 (CollectiblesShopViewAllCategoryItems)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import spring_spring from "spring/spring" /* 5613 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 6333 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11199 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5606 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 11234 */;
import IAPStore from "IAPStore" /* 9062 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let c1, c3, constants, set;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
let tmp2;
const springPresets = tmp2(5614);
const AnalyticsLocationDefault = tmp(6349);
function CategoryItemsBySku(categorySkuId) {
  let _undefined;
  let _undefined2;
  let analyticsContext;
  let c10;
  let c9;
  let categoryName;
  let intl2;
  let intl3;
  let items12;
  let items13;
  let name;
  let obj5;
  let retry;
  let state;
  let tmp19;
  let tmp21;
  let tmp38Result1;
  categorySkuId = categorySkuId.categorySkuId;
  let category;
  retry = undefined;
  let stateFromStores2;
  let closure_6;
  let memo;
  let isBillingReady;
  c9 = undefined;
  c10 = undefined;
  let closure_11;
  constants = undefined;
  ({ categoryName, analyticsContext } = categorySkuId);
  let tmp = closure_18();
  let tmp2 = categorySkuId;
  let tmp3 = category;
  let obj = categorySkuId(category[12]);
  const stackNavigation = obj.useStackNavigation();
  let obj2 = categorySkuId(category[13]);
  let items = [c9];
  const tmp5 = c9;
  const stateFromStores = obj2.useStateFromStores(items, () => c9.get("shop_include_unpublished"));
  let tmp8 = stackNavigation(category[14])(categorySkuId, { includeUnpublished: stateFromStores, includePricing: true });
  category = tmp8.category;
  ({ state, retry } = tmp8);
  let obj3 = categorySkuId(category[13]);
  const items1 = [c10];
  const items2 = [categorySkuId];
  let tmp11 = "ready" === state;
  let stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const tmp2 = "success" === StorefrontCollectionStore.getFetchState(categorySkuId) && StorefrontCollectionStore.hasPricingCoverage(categorySkuId);
    return tmp2;
  }, items2);
  const tmp7 = stackNavigation;
  const tmp9 = c10;
  if (tmp11) {
    tmp11 = null != category;
  }
  if (tmp11) {
    tmp11 = stateFromStores1;
  }
  stateFromStores1 = tmp11;
  const items3 = [tmp9];
  const items4 = [categorySkuId, tmp11];
  const tmp2Result = tmp2(tmp3[13]);
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => {
    let tmp = stateFromStores1;
    if (tmp) {
      const collection = StorefrontCollectionStore.getCollection(categorySkuId);
      let isOrbsExclusive;
      if (collection != null) {
        isOrbsExclusive = collection.isOrbsExclusive;
      }
      tmp = true === isOrbsExclusive;
    }
    return tmp;
  }, items4);
  const items5 = [tmp5];
  const tmp2Result4 = tmp2(tmp3[13]);
  const stateFromStores3 = tmp2Result4.useStateFromStores(items5, () => c9.get("bypass_google_sku_sync"));
  const tmp2Result5 = tmp2(tmp3[15]);
  let tmp15 = tmp2Result5.isGooglePlayBillingSupported() && !stateFromStores3 && !stateFromStores2;
  closure_6 = tmp15;
  const items6 = [category];
  memo = stateFromStores2.useMemo(() => {
    let googleSkuIds;
    const _Set = Set;
    if (null != category) {
      const obj = collectibles_CollectiblesUtils;
      googleSkuIds = obj.getGoogleSkuIds(tmp.products);
    } else {
      googleSkuIds = [];
    }
    const _Set1 = new _Set(googleSkuIds);
    const items = [..._Set1];
    const sorted = items.sort();
    return sorted.join(",");
  }, items6);
  const items7 = [closure_11];
  const tmp2Result6 = tmp2(tmp3[13]);
  const stateFromStoresObject = tmp2Result6.useStateFromStoresObject(items7, () => {
    const obj = { isBillingReady: closure_11.isReady(), hasConnectionError: closure_11.hasConnectionError() };
    return obj;
  });
  isBillingReady = stateFromStoresObject.isBillingReady;
  const hasConnectionError = stateFromStoresObject.hasConnectionError;
  [tmp19, c9] = stateFromStores1(stateFromStores2.useState(0), 2);
  const tmp18 = stateFromStores1(stateFromStores2.useState(0), 2);
  [tmp21, c10] = stateFromStores1(stateFromStores2.useState(false), 2);
  const tmp20 = stateFromStores1(stateFromStores2.useState(false), 2);
  const tmp22 = stateFromStores1(stateFromStores2.useState(null), 2);
  closure_11 = tmp22[1];
  let tmp24 = tmp11;
  const first = tmp22[0];
  if (tmp11) {
    tmp24 = tmp15;
  }
  if (tmp24) {
    let tmp25 = !isBillingReady;
    if (isBillingReady) {
      const str = "";
      tmp25 = !("" === memo || first === memo);
    }
    tmp24 = tmp25;
  }
  constants = tmp24;
  const items8 = [tmp24, tmp19];
  const effect = obj7.useEffect(() => {
    let closure_0;
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => _undefined2(true), 30000);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  const items9 = [tmp11, tmp15, isBillingReady, memo, tmp19];
  const effect1 = obj7.useEffect(() => {
    let _false;
    function loadSkus() {
      return obj(...arguments);
    }
    let obj = function _loadSkus() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c2;
          try {
            c3 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_0 = tmp;
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj5 = { value: obj2.loadInAppSkus(closure_1_7.split(",")), done: false };
                obj2 = _false(category[17]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                c2 = 0;
                const tmp11 = closure_128_0;
                if (tmp11) {
                  closure_1_10(true);
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const tmp6 = closure_128_0;
                if (tmp6) {
                  closure_1_11(closure_1_7);
                }
                c2 = 0;
              }
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp17) {
            if (0 === c2) {
              c3 = 3;
              throw tmp17;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = stateFromStores1;
    if (tmp) {
      const tmp2 = closure_6;
      if (tmp2) {
        const tmp3 = isBillingReady;
        if (tmp3) {
          const tmp4 = memo;
          if ("" !== memo) {
            let c0 = true;
            loadSkus();
            return () => {
              let c0 = false;
            };
          }
        }
      }
    }
  }, items9);
  const items10 = [tmp15, tmp11, retry];
  const items11 = [stateFromStores2, stackNavigation];
  const callback = obj7.useCallback(() => {
    _undefined2(false);
    closure_11(null);
    c9((arg0) => arg0 + 1);
    const tmp4 = closure_6 && !IAPStore.isReady();
    if (tmp4) {
      metroRequire = metroRequire.BillingManager;
      metroRequire.open();
    }
    const tmp8 = stateFromStores1;
    if (!tmp8) {
      retry();
    }
  }, items10);
  const effect2 = obj7.useEffect(() => {
    const tmp = stateFromStores2;
    if (tmp) {
      const replace = stackNavigation.replace;
      const COLLECTIBLES_SHOP = constants2.COLLECTIBLES_SHOP;
      const obj = { screen: constants.ORBS, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP };
      const replaced = replace(COLLECTIBLES_SHOP, obj);
    }
  }, items11);
  let tmp31 = null == categorySkuId;
  if (!tmp31) {
    tmp31 = "" === categorySkuId;
  }
  let tmp32 = tmp31 || "error" === state;
  if (!tmp32) {
    if (tmp15) {
      tmp15 = tmp21;
    }
    tmp32 = tmp15;
  }
  if (!tmp32) {
    if (tmp11) {
      if (!tmp24) {
        let tmp36Result2;
        if (!stateFromStores2) {
          let obj4 = { value: true, children: closure_16(CategoryItemsContent, obj5) };
          obj5 = { category, analyticsContext };
          const ImprovedMobileShopLoadingProvider = tmp2(tmp3[19]).ImprovedMobileShopLoadingProvider;
          tmp36Result2 = closure_16(ImprovedMobileShopLoadingProvider, obj4);
        }
        return tmp36Result2;
      }
    }
  }
  let logoUrl;
  const obj6 = { style: tmp.rootContainer, children: items12 };
  const tmp7Result = tmp7(tmp3[20]);
  if (category != null) {
    logoUrl = category.logoUrl;
  }
  const obj8 = { logoUrl, buttonColor: "Array", categoryName: name };
  name = undefined;
  if (category != null) {
    name = category.name;
  }
  if (name == null) {
    name = categoryName;
  }
  if (name == null) {
    const intl = tmp2(tmp3[21]).intl;
    name = intl.string(tmp2(tmp3[21]).t.ZTNur7);
  }
  items12 = [closure_16(tmp7Result, obj8), ];
  if (tmp32) {
    const obj9 = { style: tmp.errorContainer, children: items13 };
    const obj10 = { variant: "body-md/medium", color: "text-default", accessibilityLiveRegion: "polite", children: intl2.string(tmp2(tmp3[21]).t.eAn6z2) };
    const Text = tmp2(tmp3[22]).Text;
    intl2 = tmp2(tmp3[21]).intl;
    items13 = [closure_16(Text, obj10), ];
    let tmp38Result = !tmp31;
    if (tmp38Result) {
      const obj11 = { variant: "secondary", text: intl3.string(tmp2(tmp3[21]).t["+hivLW"]), onPress: callback };
      const Button = tmp2(tmp3[23]).Button;
      intl3 = tmp2(tmp3[21]).intl;
      tmp38Result = tmp38(Button, obj11);
    }
    items13[1] = tmp38Result;
    tmp38Result1 = tmp36(tmp37, obj9);
  } else {
    tmp38Result1 = tmp38(tmp2(tmp3[24]).ShopCategorySkeleton, {});
  }
  items12[1] = tmp38Result1;
  tmp36Result2 = tmp36(tmp37, obj6);
}
function CategoryItemsContent(category) {
  let CollectiblesAnalyticsProvider;
  let NativePaymentContextProvider;
  let intl;
  let items5;
  let items6;
  let logoUrl;
  let mobileBgUrl;
  let obj15;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp15Result;
  let tmp17;
  let tmp18;
  let toHexStringResult;
  category = category.category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  let tmp = closure_18();
  let tmp2 = analyticsContext;
  const tmp3 = analyticsLocations;
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[25])(category.styles).backgroundColors;
  const tmp4 = analyticsContext(analyticsLocations[26]);
  const items = [analyticsContext(analyticsLocations[18]).COLLECTIBLES_SHOP_INDEX_PAGE];
  analyticsLocations = tmp4(items).analyticsLocations;
  const bottom = analyticsContext(analyticsLocations[27])().bottom;
  let obj = category(analyticsLocations[28]);
  let obj2 = { products: category.products };
  const filteredAndSortedProducts = obj.useFilteredAndSortedProducts(obj2);
  const obj3 = category(analyticsLocations[29]);
  const sharedValue = obj3.useSharedValue(0);
  const tmp8 = react;
  const items1 = [sharedValue];
  const callback = react.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.Reanimated3DefaultSpringConfig));
  }, items1);
  const items2 = [closure_20, sharedValue];
  let c0;
  [tmp10, tmp11] = items2;
  const obj4 = category(analyticsLocations[29]);
  class CollectiblesShopViewAllCategoryItemsTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp11];
  CollectiblesShopViewAllCategoryItemsTsx1.__closure = items3;
  CollectiblesShopViewAllCategoryItemsTsx1.__workletHash = 3426078799765;
  CollectiblesShopViewAllCategoryItemsTsx1.__initData = tmp10;
  let sessionId;
  const animatedStyle = obj4.useAnimatedStyle(CollectiblesShopViewAllCategoryItemsTsx1);
  const useEffect = tmp8.useEffect;
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items4 = [sessionId, analyticsLocations, category.name];
  const effect = useEffect(() => {
    let sessionId;
    const obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: AnalyticsLocationDefault.COLLECTIBLES_SHOP, page_type: "index", category: category.name };
    sessionId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_VIEWED = constants2.COLLECTIBLES_SHOP_VIEWED;
    AnalyticsUtilsDefault;
    if (analyticsContext != null) {
      sessionId = tmp4.sessionId;
    }
    track(COLLECTIBLES_SHOP_VIEWED, obj);
    let sessionId1;
    const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
    CollectiblesPerfLogging;
    if (analyticsContext != null) {
      sessionId1 = tmp4.sessionId;
    }
    const obj2 = { sessionId: sessionId1, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: constants.SHOP_ALL, unpublishedCategoriesShown: false, cacheDisabled: false };
    trackShopPerf(obj2);
  }, items4);
  const obj5 = { value: analyticsLocations, children: closure_16(CollectiblesAnalyticsProvider, obj6) };
  const AnalyticsLocationProvider = tmp5(tmp3[26]).AnalyticsLocationProvider;
  obj6 = { newValue: obj7, children: closure_16(NativePaymentContextProvider, obj8) };
  obj7 = { pageCategory: category.name };
  CollectiblesAnalyticsProvider = tmp5(tmp3[34]).CollectiblesAnalyticsProvider;
  const merged = Object.assign(analyticsContext);
  obj8 = { skuIDs: [], activeSubscription: null, children: tmp17(tmp18, obj9) };
  obj9 = { style: tmp.rootContainer, children: items5 };
  NativePaymentContextProvider = tmp5(tmp3[35]).NativePaymentContextProvider;
  items5 = [, , , ];
  const obj10 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  items5[0] = closure_16(category(tmp3[36]).CollectiblesProgressiveImage, obj10);
  const obj11 = { logoUrl, buttonColor: toHexStringResult, categoryName: category.name };
  toHexStringResult = undefined;
  tmp17 = closure_17;
  tmp18 = closure_7;
  const tmp2Result = tmp2(tmp3[20]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  items5[1] = closure_16(tmp2Result, obj11);
  const obj12 = { style: items6 };
  items6 = [tmp.border, animatedStyle];
  items5[2] = closure_16(tmp2(tmp3[29]).View, obj12);
  const obj13 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback, paddingTop: tmp2(tmp3[11]).space.PX_16, paddingBottom: bottom + tmp2(tmp3[11]).space.PX_16, muteBundleStaticBackground: true, header: tmp15Result, accessibilityLabel: intl.formatToPlainString(category(tmp3[21]).t.FNtLb3, obj15) };
  tmp15Result = undefined;
  const tmp2Result2 = tmp2(tmp3[37]);
  if (category.skuId === closure_13) {
    const obj14 = { collectionSkuId: category.skuId };
    tmp15Result = tmp15(tmp5(tmp3[38]).TwelveDaysIndexNotice, obj14);
  }
  intl = tmp5(tmp3[21]).intl;
  obj15 = { category: category.name };
  items5[3] = closure_16(tmp2Result2, obj13);
  return closure_16(AnalyticsLocationProvider, obj5);
}
({ NativeModules: metroRequire, View: metroImportDefault, StyleSheet: metroImportAll } = react_native);
({ CollectiblesMobileShopScreen: closure_12, TWELVE_DAYS_COLLECTION_SKU_ID: map1 } = CollectiblesShopConstants);
({ AnalyticEvents: closure_14, UserSettingsSections: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { rootContainer: obj2, border: obj3, errorContainer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { flex: 1, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_18 = createStyles(obj);
let closure_20 = { code: "(function CollectiblesShopViewAllCategoryItemsTsx1(){let[borderOpacity]=this.__closure;return{opacity:borderOpacity.get()};})" };
const memoResult = react.memo(function CollectiblesShopViewAllCategoryItems(category) {
  let tmp6;
  if (null != category.category) {
    const obj3 = { category: null, analyticsContext: null };
    ({ category: obj2.category, analyticsContext: obj2.analyticsContext } = category);
    tmp6 = authStore3(CategoryItemsContent, obj3);
  } else {
    const obj = {};
    const merged = Object.assign(category);
    tmp6 = authStore3(CategoryItemsBySku, obj);
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;
