// Module ID: 18253
// Function ID: 18254
// Name: CollectiblesShopViewAllCategoryItems
// Dependencies: [5, 32, 19, 17, 5786, 9701, 7706, 1074, 1072, 21, 5170, 575, 1499, 18254, 504, 2183, 9668, 10066, 7445, 9689, 18255, 1113, 5783, 5790, 18206, 14765, 7420, 1627, 17343, 1652, 5793, 5794, 1252, 7872, 9576, 10840, 18256, 18235, 2]

// Module 18253 (CollectiblesShopViewAllCategoryItems)
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import spring_spring from "spring/spring" /* 5793 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7872 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9668 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5786 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 9701 */;
import IAPStore from "IAPStore" /* 7706 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c1, c3, constants, set;

let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
let tmp2;
const springPresets = tmp2(5794);
const AnalyticsLocationDefault = tmp(7445);
function CategoryItemsBySku(categorySkuId) {
  let _undefined;
  let _undefined2;
  let analyticsContext;
  let c10;
  let c9;
  let categoryName;
  let intl2;
  let intl3;
  let items11;
  let items12;
  let name;
  let obj4;
  let retry;
  let state;
  let tmp17;
  let tmp19;
  let tmp36Result1;
  categorySkuId = categorySkuId.categorySkuId;
  let category;
  retry = undefined;
  let stateFromStores1;
  let closure_6;
  let memo;
  let isBillingReady;
  c9 = undefined;
  c10 = undefined;
  let closure_11;
  constants = undefined;
  ({ categoryName, analyticsContext } = categorySkuId);
  let tmp = closure_17();
  let tmp2 = categorySkuId;
  let tmp3 = category;
  let obj = categorySkuId(category[12]);
  const stackNavigation = obj.useStackNavigation();
  const tmp5 = stackNavigation;
  let tmp6 = stackNavigation(category[13])(categorySkuId, { includePricing: true });
  category = tmp6.category;
  ({ state, retry } = tmp6);
  let obj2 = categorySkuId(category[14]);
  let items = [c10];
  const items1 = [categorySkuId];
  let tmp9 = "ready" === state;
  let stateFromStores = obj2.useStateFromStores(items, () => {
    const tmp2 = "success" === StorefrontCollectionStore.getFetchState(categorySkuId) && StorefrontCollectionStore.hasPricingCoverage(categorySkuId);
    return tmp2;
  }, items1);
  const tmp7 = c10;
  if (tmp9) {
    tmp9 = null != category;
  }
  if (tmp9) {
    tmp9 = stateFromStores;
  }
  stateFromStores = tmp9;
  const items2 = [tmp7];
  const items3 = [categorySkuId, tmp9];
  const tmp2Result = tmp2(tmp3[14]);
  stateFromStores1 = tmp2Result.useStateFromStores(items2, () => {
    let tmp = stateFromStores;
    if (tmp) {
      const collection = StorefrontCollectionStore.getCollection(categorySkuId);
      let isOrbsExclusive;
      if (collection != null) {
        isOrbsExclusive = collection.isOrbsExclusive;
      }
      tmp = true === isOrbsExclusive;
    }
    return tmp;
  }, items3);
  const items4 = [c9];
  const tmp2Result4 = tmp2(tmp3[14]);
  const stateFromStores2 = tmp2Result4.useStateFromStores(items4, () => _undefined.get("bypass_google_sku_sync"));
  const tmp2Result5 = tmp2(tmp3[15]);
  let tmp13 = tmp2Result5.isGooglePlayBillingSupported() && !stateFromStores2 && !stateFromStores1;
  closure_6 = tmp13;
  const items5 = [category];
  memo = stateFromStores1.useMemo(() => {
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
  }, items5);
  const items6 = [closure_11];
  const tmp2Result6 = tmp2(tmp3[14]);
  const stateFromStoresObject = tmp2Result6.useStateFromStoresObject(items6, () => {
    const obj = { isBillingReady: closure_11.isReady(), hasConnectionError: closure_11.hasConnectionError() };
    return obj;
  });
  isBillingReady = stateFromStoresObject.isBillingReady;
  const hasConnectionError = stateFromStoresObject.hasConnectionError;
  [tmp17, c9] = stateFromStores(stateFromStores1.useState(0), 2);
  const tmp16 = stateFromStores(stateFromStores1.useState(0), 2);
  [tmp19, c10] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp18 = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp20 = stateFromStores(stateFromStores1.useState(null), 2);
  closure_11 = tmp20[1];
  let tmp22 = tmp9;
  const first = tmp20[0];
  if (tmp9) {
    tmp22 = tmp13;
  }
  if (tmp22) {
    let tmp23 = !isBillingReady;
    if (isBillingReady) {
      const str = "";
      tmp23 = !("" === memo || first === memo);
    }
    tmp22 = tmp23;
  }
  constants = tmp22;
  const items7 = [tmp22, tmp17];
  const effect = obj6.useEffect(() => {
    let closure_0;
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => _undefined2(true), 30000);
      return () => clearTimeout(closure_0);
    }
  }, items7);
  const items8 = [tmp9, tmp13, isBillingReady, memo, tmp17];
  const effect1 = obj6.useEffect(() => {
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
            return { value: "HermesInternal", done: null };
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
              return { value: "HermesInternal", done: null };
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
    const tmp = stateFromStores;
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
  }, items8);
  const items9 = [tmp13, tmp9, retry];
  const items10 = [stateFromStores1, stackNavigation];
  const callback = obj6.useCallback(() => {
    _undefined2(false);
    closure_11(null);
    _undefined((arg0) => arg0 + 1);
    const tmp4 = closure_6 && !IAPStore.isReady();
    if (tmp4) {
      metroRequire = metroRequire.BillingManager;
      metroRequire.open();
    }
    const tmp8 = stateFromStores;
    if (!tmp8) {
      retry();
    }
  }, items9);
  const effect2 = obj6.useEffect(() => {
    const tmp = stateFromStores1;
    if (tmp) {
      const replace = stackNavigation.replace;
      const COLLECTIBLES_SHOP = constants.COLLECTIBLES_SHOP;
      const obj = { screen: constants.ORBS, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP };
      const replaced = replace(COLLECTIBLES_SHOP, obj);
    }
  }, items10);
  let tmp29 = null == categorySkuId;
  if (!tmp29) {
    tmp29 = "" === categorySkuId;
  }
  let tmp30 = tmp29 || "error" === state;
  if (!tmp30) {
    if (tmp13) {
      tmp13 = tmp19;
    }
    tmp30 = tmp13;
  }
  if (!tmp30) {
    if (tmp9) {
      if (!tmp22) {
        let tmp34Result2;
        if (!stateFromStores1) {
          let obj3 = { value: true, children: closure_15(CategoryItemsContent, obj4) };
          obj4 = { category, analyticsContext };
          const ImprovedMobileShopLoadingProvider = tmp2(tmp3[19]).ImprovedMobileShopLoadingProvider;
          tmp34Result2 = closure_15(ImprovedMobileShopLoadingProvider, obj3);
        }
        return tmp34Result2;
      }
    }
  }
  let obj5 = { style: tmp.rootContainer, children: items11 };
  let logoUrl;
  const tmp5Result = tmp5(tmp3[20]);
  if (category != null) {
    logoUrl = category.logoUrl;
  }
  const obj7 = { logoUrl, buttonColor: "Array", categoryName: name };
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
  items11 = [closure_15(tmp5Result, obj7), ];
  if (tmp30) {
    const obj8 = { style: tmp.errorContainer, children: items12 };
    const obj9 = { variant: "body-md/medium", color: "text-default", accessibilityLiveRegion: "polite", children: intl2.string(tmp2(tmp3[21]).t.eAn6z2) };
    const Text = tmp2(tmp3[22]).Text;
    intl2 = tmp2(tmp3[21]).intl;
    items12 = [closure_15(Text, obj9), ];
    let tmp36Result = !tmp29;
    if (tmp36Result) {
      const obj10 = { variant: "secondary", text: intl3.string(tmp2(tmp3[21]).t["+hivLW"]), onPress: callback };
      const Button = tmp2(tmp3[23]).Button;
      intl3 = tmp2(tmp3[21]).intl;
      tmp36Result = tmp36(Button, obj10);
    }
    items12[1] = tmp36Result;
    tmp36Result1 = tmp34(tmp35, obj8);
  } else {
    tmp36Result1 = tmp36(tmp2(tmp3[24]).ShopCategorySkeleton, {});
  }
  items11[1] = tmp36Result1;
  tmp34Result2 = tmp34(tmp35, obj5);
}
function CategoryItemsContent(category) {
  let CollectiblesAnalyticsProvider;
  let NativePaymentContextProvider;
  let intl;
  let items5;
  let items6;
  let logoUrl;
  let mobileBgUrl;
  let obj14;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp17;
  let tmp18;
  let toHexStringResult;
  category = category.category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  let tmp = closure_17();
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
  const items2 = [closure_19, sharedValue];
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
    const COLLECTIBLES_SHOP_VIEWED = map1.COLLECTIBLES_SHOP_VIEWED;
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
    const obj2 = { sessionId: sessionId1, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: map1.SHOP_ALL, unpublishedCategoriesShown: false, cacheDisabled: false };
    trackShopPerf(obj2);
  }, items4);
  const obj5 = { value: analyticsLocations, children: closure_15(CollectiblesAnalyticsProvider, obj6) };
  const AnalyticsLocationProvider = tmp5(tmp3[26]).AnalyticsLocationProvider;
  obj6 = { newValue: obj7, children: closure_15(NativePaymentContextProvider, obj8) };
  obj7 = { pageCategory: category.name };
  CollectiblesAnalyticsProvider = tmp5(tmp3[34]).CollectiblesAnalyticsProvider;
  const merged = Object.assign(analyticsContext);
  obj8 = { skuIDs: [], activeSubscription: null, children: tmp17(tmp18, obj9) };
  obj9 = { style: tmp.rootContainer, children: items5 };
  NativePaymentContextProvider = tmp5(tmp3[35]).NativePaymentContextProvider;
  items5 = [, , , ];
  const obj10 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  items5[0] = closure_15(category(tmp3[36]).CollectiblesProgressiveImage, obj10);
  const obj11 = { logoUrl, buttonColor: toHexStringResult, categoryName: category.name };
  toHexStringResult = undefined;
  tmp17 = closure_16;
  tmp18 = closure_7;
  const tmp2Result = tmp2(tmp3[20]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  items5[1] = closure_15(tmp2Result, obj11);
  const obj12 = { style: items6 };
  items6 = [tmp.border, animatedStyle];
  items5[2] = closure_15(tmp2(tmp3[29]).View, obj12);
  const obj13 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback, paddingTop: tmp2(tmp3[11]).space.PX_16, paddingBottom: bottom + tmp2(tmp3[11]).space.PX_16, muteBundleStaticBackground: true, accessibilityLabel: intl.formatToPlainString(category(tmp3[21]).t.FNtLb3, obj14) };
  const tmp2Result2 = tmp2(tmp3[37]);
  intl = tmp5(tmp3[21]).intl;
  obj14 = { category: category.name };
  items5[3] = closure_15(tmp2Result2, obj13);
  return closure_15(AnalyticsLocationProvider, obj5);
}
({ NativeModules: metroRequire, View: metroImportDefault, StyleSheet: metroImportAll } = react_native);
let closure_12 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: map1, UserSettingsSections: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { rootContainer: obj2, border: obj3, errorContainer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { flex: 1, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_17 = createStyles(obj);
let closure_19 = { code: "(function CollectiblesShopViewAllCategoryItemsTsx1(){let[borderOpacity]=this.__closure;return{opacity:borderOpacity.get()};})" };
const memoResult = react.memo(function CollectiblesShopViewAllCategoryItems(category) {
  let tmp6;
  if (null != category.category) {
    const obj3 = { category: null, analyticsContext: null };
    ({ category: obj2.category, analyticsContext: obj2.analyticsContext } = category);
    tmp6 = closure_15(CategoryItemsContent, obj3);
  } else {
    const obj = {};
    const merged = Object.assign(category);
    tmp6 = closure_15(CategoryItemsBySku, obj);
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;
