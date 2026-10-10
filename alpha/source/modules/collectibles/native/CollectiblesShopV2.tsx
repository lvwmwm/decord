// Module ID: 16176
// Function ID: 16177
// Name: CollectiblesShopV2
// Dependencies: [32, 19, 17, 5091, 1205, 1390, 7263, 7305, 7298, 1087, 1085, 2062, 21, 5092, 6878, 558, 576, 13726, 16177, 504, 1279, 6169, 10089, 16178, 16180, 16181, 9090, 1382, 9058, 9398, 8302, 8979, 4969, 6851, 1503, 16183, 4782, 16185, 4938, 2049, 4769, 16186, 1265, 7309, 8311, 16187, 16188, 16190, 16191, 16223, 1255, 16226, 16227, 16194, 10175, 9078, 16228, 8970, 5730, 1628, 2]

// Module 16176 (CollectiblesShopV2)
import react2 from "react" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4782 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4938 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7298 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7309 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9058 */;
import ImprovedMobileShopLoadingExperiment from "ImprovedMobileShopLoadingExperiment" /* 9078 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 9090 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9398 */;
import takeWhileDefault from "takeWhile" /* 16183 */;
import ShopCategory from "ShopCategory" /* 16188 */;
import ShopNitroUpsellBanner2 from "ShopNitroUpsellBanner" /* 16190 */;
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage" /* 16191 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5091 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserStore from "UserStore" /* 1390 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7263 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7305 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let analyticsSource, kind, map, navigation;

let SHOP_ALL_PAGE_SIZE;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
const SentryUtilsDefault = tmp(1255);
const MobileNitroUpsellInShopFeedExperimentDefault = tmp(16186);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const FeedBlockRecord = FeedBlockRecord2.FeedBlockRecord;
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: map1, CollectiblesMobileShopScreen: closure_14, CollectibleShopTab: closure_15, SHOP_ALL_PAGE_SIZE } = CollectiblesShopConstants);
({ AnalyticEvents: closure_17, PaymentGateways: closure_18 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let closure_22 = createStyles.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
const constants5 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell", SKELETON: "skeleton" };
let closure_24 = 2 * SHOP_ALL_PAGE_SIZE;
let closure_25 = Array.from({ length: 3 }, (arg0, skeletonIndex) => ({ kind: constants5.SKELETON, skeletonIndex }));
let closure_26 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsSource) => {
  let HOME;
  let bypassGoogleSkuSync;
  let country;
  let dismiss;
  let fetchShopHomeError;
  let isDarkTheme;
  let isFetchingShopHome;
  let lastSuccessfulFetch;
  let length;
  let length2;
  let location_stack;
  let noCache;
  let screen;
  let shopBlocks;
  let storeFront;
  let tmp10;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = analyticsSource;
  let tmp2 = screen;
  let obj = analyticsSource(screen[16]);
  const cResult = obj.c(167);
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  const improvedLoading = analyticsSource.improvedLoading;
  let obj2 = analyticsSource(screen[17]);
  const commonTriggerPoint = obj2.useCommonTriggerPoint(analyticsSource(screen[18]).CollectiblesShopOpenTriggerPoint);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = CollectiblesCategoryStore;
    let items = [CollectiblesCategoryStore];
    const fn = function _() {
      let num = lastSuccessfulFetch.lastSuccessfulFetch;
      if (num == null) {
        num = 0;
      }
      const items = [num];
      return items;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[19]);
  const first = improvedLoading(tmpResult.useStateFromStoresArray(tmp5, tmp6), 1)[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [HOME];
    class N {
      constructor() {
        const obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
        return obj;
      }
    }
    cResult[2] = items1;
    cResult[3] = N;
    tmp10 = N;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(tmp2[19]);
  const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp9, tmp10);
  ({ bypassGoogleSkuSync, noCache } = stateFromStoresObject);
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  closure_22();
  if (storeFront != null) {
    country = storeFront.country;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        let obj2;
        const obj = { sessionId: obj2.v4() };
        obj2 = analyticsSource(screen[20]);
        return obj;
      }
    }
    cResult[4] = V;
    class N {
      constructor() {
        const obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
        return obj;
      }
    }
  } else {
    class V {
      constructor() {
        let obj2;
        const obj = { sessionId: obj2.v4() };
        obj2 = analyticsSource(screen[20]);
        return obj;
      }
    }
  }
  let tmp15 = onNavigateAway;
  let tmp16 = onNavigateAway(tmp2[21])(tmp14);
  const sessionId = tmp16.sessionId;
  let FEATURED_PAGE = screen;
  if (screen == null) {
    class V {
      constructor() {
        let obj2;
        const obj = { sessionId: obj2.v4() };
        obj2 = analyticsSource(screen[20]);
        return obj;
      }
    }
    FEATURED_PAGE = constants.FEATURED_PAGE;
  }
  if (cResult[5] === sessionId) {
    class V {
      constructor() {
        let obj2;
        const obj = { sessionId: obj2.v4() };
        obj2 = analyticsSource(screen[20]);
        return obj;
      }
    }
    if (cResult[8] !== country) {
      class V {
        constructor() {
          let obj2;
          const obj = { sessionId: obj2.v4() };
          obj2 = analyticsSource(screen[20]);
          return obj;
        }
      }
      cResult[8] = country;
      class N {
        constructor() {
          const obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
          return obj;
        }
      }
      cResult[9] = tmp19;
    } else {
      class V {
        constructor() {
          let obj2;
          const obj = { sessionId: obj2.v4() };
          obj2 = analyticsSource(screen[20]);
          return obj;
        }
      }
    }
    if (cResult[10] === improvedLoading) {
      class V {
        constructor() {
          let obj2;
          const obj = { sessionId: obj2.v4() };
          obj2 = analyticsSource(screen[20]);
          return obj;
        }
      }
      const categories = tmp15(tmp2[22])(tmp20, tmp17).categories;
      const tmp26 = tmp15(tmp2[22])(tmp20, tmp17);
      class N {
        constructor() {
          const obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
          return obj;
        }
      }
      if (screen === constants.ORBS) {
        class V {
          constructor() {
            let obj2;
            const obj = { sessionId: obj2.v4() };
            obj2 = analyticsSource(screen[20]);
            return obj;
          }
        }
        HOME = constants2.ORBS;
      } else {
        class V {
          constructor() {
            let obj2;
            const obj = { sessionId: obj2.v4() };
            obj2 = analyticsSource(screen[20]);
            return obj;
          }
        }
        HOME = constants2.HOME;
      }
      if (cResult[13] === includeUnpublished) {
        class V {
          constructor() {
            let obj2;
            const obj = { sessionId: obj2.v4() };
            obj2 = analyticsSource(screen[20]);
            return obj;
          }
        }
        tmp(tmp2[23]);
        class N {
          constructor() {
            const obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
            return obj;
          }
        }
        if (improvedLoading) {
          class V {
            constructor() {
              let obj2;
              const obj = { sessionId: obj2.v4() };
              obj2 = analyticsSource(screen[20]);
              return obj;
            }
          }
        }
        ({ shopBlocks, isFetchingShopHome, fetchShopHomeError } = tmp30(HOME, tmp28, tmp17, false, improvedLoading));
        tmp30(HOME, tmp28, tmp17, false, improvedLoading);
        if (cResult[16] === includeUnpublished) {
          class V {
            constructor() {
              let obj2;
              const obj = { sessionId: obj2.v4() };
              obj2 = analyticsSource(screen[20]);
              return obj;
            }
          }
        }
        let obj3 = { pageSize: SHOP_ALL_PAGE_SIZE, includeUnpublished, noCache, enabled: improvedLoading && screen === tmp27.SHOP_ALL };
        cResult[16] = includeUnpublished;
        cResult[17] = noCache;
        cResult[18] = improvedLoading && screen === constants.SHOP_ALL;
        cResult[19] = obj3;
      }
      const obj4 = { noCache, includeUnpublished, logPerf: true };
      cResult[13] = includeUnpublished;
      cResult[14] = noCache;
      cResult[15] = obj4;
    }
    class N {
      constructor() {
        const obj = { bypassGoogleSkuSync: HOME.get("bypass_google_sku_sync"), noCache: HOME.get("shop_disable_cache"), includeUnpublished: HOME.get("shop_include_unpublished") };
        return obj;
      }
    }
    tmp21[0] = constants4.APPLE;
    const merged = Object.assign(tmp18);
    tmp21.logPerf = true;
    tmp21.skipFetch = improvedLoading;
    cResult[10] = improvedLoading;
    cResult[11] = tmp18;
    cResult[12] = tmp21;
    tmp20 = tmp21;
  }
  const obj5 = { sessionId, tab: FEATURED_PAGE };
  cResult[5] = sessionId;
  cResult[6] = FEATURED_PAGE;
  cResult[7] = obj5;
  tmp17 = obj5;
}) : ((analyticsSource) => {
  let COLLECTIBLES_SHOP_HOME_SCREEN;
  let CollectiblesAnalyticsProvider;
  let ImprovedMobileShopLoadingProvider;
  let NativePaymentContextProvider;
  let fetchShopHomeError;
  let isFetchingShopHome;
  let items26;
  let obj14;
  let obj16;
  let obj17;
  let obj21;
  let obj7;
  let screen;
  let storeFront;
  let tmp22;
  let tmp73Result;
  let tmp74;
  let tmp79;
  let tmp80;
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  const improvedLoading = analyticsSource.improvedLoading;
  let sessionId;
  let categories;
  let isFetchingCategories;
  let HOME;
  let shopBlocks;
  fetchShopHomeError = undefined;
  let categories1;
  let isLoading;
  let hasMore;
  let prefetchThrough;
  let resolvedSkuIds;
  let stateFromStores;
  let isFetchingGoogleSkus;
  let loadedGoogleSkuIds;
  let currentUserIfAvailable;
  let stateFromStores1;
  let analyticsLocations;
  navigation = undefined;
  let memo4;
  let memo5;
  let categoryIndex;
  let first1;
  let closure_29;
  let first2;
  let closure_31;
  let dismiss;
  let memo6;
  let closure_34;
  let memo8;
  let first3;
  let closure_37;
  let tmp = analyticsSource;
  let tmp2 = screen;
  let obj = analyticsSource(screen[17]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(analyticsSource(screen[18]).CollectiblesShopOpenTriggerPoint);
  let obj2 = analyticsSource(screen[19]);
  let items = [HOME];
  let tmp4 = improvedLoading;
  const first = improvedLoading(obj2.useStateFromStoresArray(items, () => {
    let num = HOME.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj3 = analyticsSource(screen[19]);
  let items1 = [sessionId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    const obj = { bypassGoogleSkuSync: sessionId.get("bypass_google_sku_sync"), noCache: sessionId.get("shop_disable_cache"), includeUnpublished: sessionId.get("shop_include_unpublished") };
    return obj;
  });
  const bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  let tmp7 = stateFromStores1();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  const tmp9 = onNavigateAway;
  const tmp10 = onNavigateAway(tmp2[21])(() => {
    let obj2;
    const obj = { sessionId: obj2.v4() };
    obj2 = analyticsSource(screen[20]);
    return obj;
  });
  sessionId = tmp10.sessionId;
  let obj4 = bypassGoogleSkuSync;
  const items2 = [sessionId, screen];
  const memo = bypassGoogleSkuSync.useMemo(() => {
    let FEATURED_PAGE;
    const obj = { sessionId, tab: FEATURED_PAGE };
    FEATURED_PAGE = screen;
    if (screen == null) {
      FEATURED_PAGE = isLoading.FEATURED_PAGE;
    }
    return obj;
  }, items2);
  const obj5 = { paymentGateway: stateFromStores.APPLE, logPerf: true, skipFetch: improvedLoading };
  const tmp12 = onNavigateAway(tmp2[22]);
  if (null != country) {
    obj7 = { countryCode: country };
    const obj6 = { countryCode: country };
  } else {
    obj7 = {};
  }
  const merged = Object.assign(obj7);
  const tmp12Result = tmp12(obj5, memo);
  categories = tmp12Result.categories;
  isFetchingCategories = tmp12Result.isFetchingCategories;
  let tmp15 = isLoading;
  if (screen === isLoading.ORBS) {
    let tmp17 = hasMore;
    HOME = hasMore.ORBS;
  } else {
    let tmp16 = hasMore;
    HOME = hasMore.HOME;
  }
  let tmpResult = tmp(tmp2[23]);
  let tmp19 = improvedLoading;
  const useMaybeFetchCollectiblesShopHome = tmpResult.useMaybeFetchCollectiblesShopHome;
  const obj8 = { noCache, includeUnpublished, logPerf: true };
  if (improvedLoading) {
    tmp19 = screen === tmp15.SHOP_ALL;
  }
  const maybeFetchCollectiblesShopHome = useMaybeFetchCollectiblesShopHome(HOME, obj8, memo, false, tmp19);
  shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  ({ isFetchingShopHome, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const obj9 = { pageSize: prefetchThrough, includeUnpublished, noCache, enabled: tmp22 };
  tmp22 = improvedLoading;
  const tmp9Result = tmp9(tmp2[24]);
  if (improvedLoading) {
    tmp22 = screen === tmp15.SHOP_ALL;
  }
  const tmp9ResultResult = tmp9Result(obj9);
  categories1 = tmp9ResultResult.categories;
  isLoading = tmp9ResultResult.isLoading;
  hasMore = tmp9ResultResult.hasMore;
  prefetchThrough = tmp9ResultResult.prefetchThrough;
  const items3 = [shopBlocks];
  const memo1 = obj4.useMemo(() => shopBlocks.find((item) => item instanceof fetchShopHomeError), items3);
  resolvedSkuIds = tmp9(tmp2[25])(memo1).resolvedSkuIds;
  const items4 = [improvedLoading, screen, resolvedSkuIds];
  const effect = obj4.useEffect(() => {
    const tmp = improvedLoading && screen !== isLoading.SHOP_ALL;
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(resolvedSkuIds);
    }
  }, items4);
  const items5 = [shopBlocks];
  const items6 = [HOME];
  const tmpResult8 = tmp(tmp2[19]);
  stateFromStores = tmpResult8.useStateFromStores(items5, () => CollectiblesShopHomeStore.getCategories(HOME), items6);
  const items7 = [improvedLoading, categories, isFetchingCategories];
  const memo2 = obj4.useMemo(() => {
    const tmp2 = improvedLoading;
    if (!tmp2) {
      if (true !== isFetchingCategories) {
        const obj = PlatformUtils;
        if (false !== obj.isAndroid()) {
          const getGoogleSkuIds = tmp4(9058).getGoogleSkuIds;
          const items = [];
          collectibles_CollectiblesUtils;
          HermesBuiltin.arraySpread(items, categories.values(), 0);
          const googleSkuIds = getGoogleSkuIds(items.flatMap((products) => products.products));
        }
        return [];
      }
    }
  }, items7);
  const tmp9Result9 = tmp9(tmp2[29]);
  let googleSkuIds = tmp9Result9.useGoogleSkuIds(memo2, true === isFetchingCategories, !improvedLoading);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  const items8 = [improvedLoading, screen, categories1, stateFromStores];
  const memo3 = obj4.useMemo(() => {
    const tmp = improvedLoading;
    if (tmp) {
      const obj = screen === isLoading.SHOP_ALL ? categories1 : stateFromStores;
      const obj2 = collectibles_CollectiblesUtils;
      return obj2.getGoogleSkuIds(obj.flatMap((products) => products.products));
    } else {
      return closure_26;
    }
  }, items8);
  const tmp9Result10 = tmp9(tmp2[29]);
  loadedGoogleSkuIds = tmp9Result10.useLoadedGoogleSkuIds(memo3);
  const tmpResult9 = tmp(tmp2[30]);
  currentUserIfAvailable = tmpResult9.useCurrentUserIfAvailable();
  const tmpResult10 = tmp(tmp2[31]);
  const currentUserWishlist = tmpResult10.useCurrentUserWishlist();
  const items9 = [categories];
  const tmpResult11 = tmp(tmp2[19]);
  stateFromStores1 = tmpResult11.useStateFromStores(items9, () => {
    const obj = analyticsSource(screen[32]);
    return obj.isThemeDark(categories.theme);
  });
  const items10 = [, ];
  const tmp9Result11 = tmp9(tmp2[33]);
  items10[0] = tmp9(tmp2[14]).COLLECTIBLES_SHOP;
  if (tmp15.SHOP_ALL === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[14]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp15.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[14]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp15.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[14]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items10[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = tmp9Result11(items10).analyticsLocations;
  const tmpResult12 = tmp(tmp2[34]);
  navigation = tmpResult12.useNavigation();
  const items11 = [navigation, onNavigateAway];
  const effect1 = obj4.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (onNavigateAway != null) {
        tmp();
      }
    }
  }), items11);
  const items12 = [categories1, loadedGoogleSkuIds];
  memo4 = obj4.useMemo(() => takeWhileDefault(categories1, (products) => {
    const obj = analyticsSource(screen[28]);
    const googleSkuIds = obj.getGoogleSkuIds(products.products);
    return googleSkuIds.every((item) => set.has(item));
  }), items12);
  const items13 = [improvedLoading, memo4, categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  memo5 = obj4.useMemo(() => {
    const tmp2 = improvedLoading;
    if (tmp2) {
      let result1;
      const obj3 = BillingPlatformUtils;
      const result = obj3.isGooglePlayBillingSupported() && !bypassGoogleSkuSync;
      const filterHiddenCategories2 = collectibles_CollectiblesUtils.filterHiddenCategories;
      collectibles_CollectiblesUtils;
      if (result) {
        const obj4 = collectibles_CollectiblesUtils;
        result1 = obj4.filterGPlaySyncedCategories(memo4);
      } else {
        result1 = memo4;
      }
      return filterHiddenCategories2(result1);
    } else {
      const items = [];
      HermesBuiltin.arraySpread(items, categories.values(), 0);
      const filterHiddenCategories = collectibles_CollectiblesUtils.filterHiddenCategories;
      collectibles_CollectiblesUtils;
      const obj = BillingPlatformUtils;
      let result3 = obj.isGooglePlayBillingSupported();
      if (result3) {
        let tmp13 = !bypassGoogleSkuSync;
        if (tmp13) {
          tmp13 = !isFetchingGoogleSkus && !isFetchingCategories;
          const tmp15 = !isFetchingGoogleSkus && !isFetchingCategories;
        }
        result3 = tmp13;
      }
      let result2 = items;
      if (result3) {
        const obj2 = collectibles_CollectiblesUtils;
        result2 = obj2.filterGPlaySyncedCategories(items);
      }
      return filterHiddenCategories(result2);
    }
  }, items13);
  const tmp36 = Date.now() - first > categories1;
  const tmpResult13 = tmp(tmp2[37]);
  categoryIndex = tmpResult13.useCollectiblesShopDeepLinkProps({ categories: memo5 }).categoryIndex;
  const useState = obj4.useState;
  const tmpResult14 = tmp(tmp2[38]);
  const tmp4Result = tmp4(useState(tmpResult14.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[39]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL)), 2);
  first1 = tmp4Result[0];
  closure_29 = tmp39;
  const items14 = [currentUserIfAvailable, screen, first1];
  const tmp4Result3 = tmp4(obj4.useMemo(() => {
    const obj = PremiumUtilsDefault;
    if (!obj.canUseShopDiscounts(currentUserIfAvailable)) {
      if (screen === isLoading.SHOP_ALL) {
        const tmp5 = first1;
        if (!tmp5) {
          const tmpResult = MobileNitroUpsellInShopFeedExperimentDefault;
          const config = tmpResult.getConfig({ location: "CollectiblesShopV2ShopAll" });
          const items = [, ];
          ({ enabled: arr[0], buttonVariant: arr[1] } = config);
          return items;
        }
      }
    }
    const items1 = [false, null];
    return items1;
  }, items14), 2);
  first2 = tmp4Result3[0];
  closure_31 = tmp42;
  const items15 = [tmp4Result[1]];
  dismiss = obj4.useCallback(() => {
    closure_29(true);
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction: ContentDismissActionType.USER_DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL, obj2);
  }, items15);
  const items16 = [memo5, first2, improvedLoading, isLoading, hasMore, memo4.length, categories1.length];
  memo6 = obj4.useMemo(() => {
    const mapped = memo5.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
    const tmp2 = first2 && mapped.length > 0;
    if (tmp2) {
      const obj = { kind: analyticsLocations.NITRO_UPSELL };
      mapped.splice(1, 0, obj);
    }
    let tmp5 = improvedLoading;
    if (tmp5) {
      tmp5 = isLoading || hasMore || memo4.length < categories1.length;
      const tmp6 = isLoading || hasMore || memo4.length < categories1.length;
    }
    if (tmp5) {
      const push = mapped.push;
      const items = [];
      HermesBuiltin.arraySpread(items, closure_25, 0);
      HermesBuiltin.apply(push, items, mapped);
    }
    return mapped;
  }, items16);
  const items17 = [categoryIndex, memo6];
  const memo7 = obj4.useMemo(() => {
    if (null != categoryIndex) {
      let sum = tmp;
      if (memo6.some((kind) => kind.kind === constants.NITRO_UPSELL)) {
        sum = tmp;
        if (categoryIndex >= 1) {
          sum = tmp + 1;
        }
      }
      return sum;
    }
  }, items17);
  closure_34 = obj4.useRef({ [tmp15.SHOP_ALL]: false, [tmp15.FEATURED_PAGE]: false, [tmp15.ORBS]: false });
  const items18 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect2 = obj4.useEffect(() => {
    let str;
    let FEATURED_PAGE = screen;
    const obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: analyticsSource, page_type: str };
    str = "home";
    const tmp = null == screen || FEATURED_PAGE === isLoading.FEATURED_PAGE || FEATURED_PAGE === isLoading.SHOP_ALL;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_VIEWED = resolvedSkuIds.COLLECTIBLES_SHOP_VIEWED;
    AnalyticsUtilsDefault;
    const tmp6 = sessionId;
    if (!tmp) {
      str = FEATURED_PAGE;
    }
    track(COLLECTIBLES_SHOP_VIEWED, obj);
    const tmp8 = CollectiblesPerfLogging;
    const trackShopPerf = tmp8.trackShopPerf;
    const obj2 = { sessionId: tmp6, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: FEATURED_PAGE, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
    if (FEATURED_PAGE == null) {
      FEATURED_PAGE = isLoading.FEATURED_PAGE;
    }
    trackShopPerf(obj2);
  }, items18);
  const items19 = [currentUserIfAvailable];
  const effect3 = obj4.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items19);
  let tmp49 = improvedLoading;
  const tmp9Result12 = tmp9(tmp2[45]);
  if (improvedLoading) {
    tmp49 = screen === tmp15.SHOP_ALL;
  }
  tmp9Result12({ enabled: tmp49, analyticsLocations, shopAnalyticsContext: tmp10 });
  const items20 = [sessionId, includeUnpublished, noCache, stateFromStores1, dismiss, tmp4Result3[1]];
  const callback1 = obj4.useCallback((item) => {
    let GET_NITRO;
    let tmp19Result;
    item = item.item;
    if (item.kind === analyticsLocations.SKELETON) {
      tmp19Result = loadedGoogleSkuIds(ShopCategory.ShopCategorySkeleton, {});
    } else if (item.kind === tmp.NITRO_UPSELL) {
      const obj2 = { isDarkTheme: stateFromStores1, dismiss, buttonVariant: GET_NITRO };
      GET_NITRO = closure_31;
      const ShopNitroUpsellBanner = ShopNitroUpsellBanner2.ShopNitroUpsellBanner;
      const tmp19 = loadedGoogleSkuIds;
      const tmp20 = require;
      if (closure_31 == null) {
        GET_NITRO = tmp20(16186).NitroUpsellBannerButtonVariant.GET_NITRO;
      }
      tmp19Result = tmp19(ShopNitroUpsellBanner, obj2);
    } else {
      const tmp4 = 0 !== item.categoryIndex || closure_34.current[isLoading.SHOP_ALL];
      if (!tmp4) {
        closure_34.current[isLoading.SHOP_ALL] = true;
        const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: isLoading.SHOP_ALL, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
        const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
        CollectiblesPerfLogging;
        trackShopPerf(obj);
      }
      const obj3 = { category: item.category, isDarkTheme: stateFromStores1, index: item.categoryIndex };
      tmp19Result = loadedGoogleSkuIds(ShopCategory.ShopCategory, obj3);
    }
    return tmp19Result;
  }, items20);
  const callback2 = obj4.useCallback((kind) => kind.kind, []);
  const items21 = [categories1];
  const callback3 = obj4.useCallback((kind) => {
    kind = kind.kind;
    if (analyticsLocations.CATEGORY === kind) {
      return kind.category.skuId;
    } else if (tmp.SKELETON === kind) {
      const _HermesInternal = HermesInternal;
      return "" + kind.kind + "-" + kind.skeletonIndex;
    } else {
      return kind.kind;
    }
  }, []);
  memo8 = obj4.useMemo(() => {
    map = new Map(categories1.map((skuId, index) => {
      const items = [skuId.skuId, index];
      return items;
    }));
    return map;
  }, items21);
  const tmp4Result4 = tmp4(obj4.useState(0), 2);
  first3 = tmp4Result4[0];
  closure_37 = tmp4Result4[1];
  const items22 = [memo8, prefetchThrough];
  const items23 = [improvedLoading, screen, hasMore, isLoading, memo4.length, categories1.length, memo5.length, first3, prefetchThrough];
  const callback4 = obj4.useCallback((arg0) => {
    let num = 0;
    let bound = 0;
    let num2 = 0;
    const iter = arg0.viewableItems[Symbol.iterator]();
    while (iter !== undefined) {
      let item = iter.next().item;
      let tmp = item;
      if (item.kind === analyticsLocations.CATEGORY) {
        let _Math = Math;
        bound = Math.max(num, tmp.categoryIndex + 1);
        num = bound;
        let _Math2 = Math;
        categoryIndex = memo8.get(tmp.category.skuId);
        if (categoryIndex == null) {
          categoryIndex = tmp.categoryIndex;
        }
        num2 = max(num2, categoryIndex + 1);
      }
      continue;
    }
    prefetchThrough(num2);
    closure_37((arg0) => Math.max(arg0, bound));
  }, items22);
  const effect4 = obj4.useEffect(() => {
    const tmp = improvedLoading && screen === isLoading.SHOP_ALL && hasMore && !isLoading && memo4.length === categories1.length && memo5.length < first3 + closure_24;
    if (tmp) {
      prefetchThrough(categories1.length);
    }
  }, items23);
  const items24 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const items25 = [sessionId, includeUnpublished, noCache];
  const callback5 = obj4.useCallback((index) => {
    let tmp17;
    let tmp = 0 !== index.index;
    const item = index.item;
    if (!tmp) {
      tmp = closure_34.current[isLoading.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_34.current[isLoading.FEATURED_PAGE] = true;
      const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: isLoading.FEATURED_PAGE, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
      CollectiblesPerfLogging;
      trackShopPerf(obj);
    }
    const obj2 = { shopBlock: item, fetchShopHomeError: tmp17 };
    tmp17 = fetchShopHomeError;
    const tmp15 = closure_20;
    const tmp16 = CollectiblesShopFeaturedPageDefault;
    if (fetchShopHomeError == null) {
      tmp17 = null;
    }
    return tmp15(tmp16, obj2);
  }, items24);
  const callback6 = obj4.useCallback(() => {
    if (!closure_34.current[isLoading.ORBS]) {
      closure_34.current[isLoading.ORBS] = true;
      const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: isLoading.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
      CollectiblesPerfLogging;
      trackShopPerf(obj);
    }
  }, items25);
  const callback7 = obj4.useCallback((type) => type.type, []);
  tmp9(tmp2[49])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    const tmp63 = 0 === memo5.length || tmp36;
    if (improvedLoading) {
      const tmp69 = false !== isFetchingShopHome || memo3.some((item) => !loadedGoogleSkuIds.has(item));
      if (screen === tmp15.FEATURED_PAGE || screen === tmp15.ORBS || null == screen) {
        if (tmp69) {
          const obj10 = { style: tmp7.spinner, size: "large" };
          return loadedGoogleSkuIds(noCache, obj10);
        }
      }
    } else {
      if (screen === tmp15.FEATURED_PAGE || screen === tmp15.ORBS || null == screen) {
        if (isFetchingShopHome) {
          const obj11 = { style: tmp7.spinner, size: "large" };
          return loadedGoogleSkuIds(noCache, obj11);
        }
      }
      if (tmp63) {
        const obj12 = { style: tmp7.spinner, size: "large" };
        return loadedGoogleSkuIds(noCache, obj12);
      }
    }
    const tmp70 = !improvedLoading && first > 0 && false === isFetchingCategories && 0 === categories.size;
    if (tmp70) {
      let str = "collectibles mobile shop loaded empty categories";
      const tmp9Result13 = tmp9(tmp2[50]);
      tmp9Result13.captureMessage("collectibles mobile shop loaded empty categories");
    }
    if (null !== fetchError) {
      const tmp9Result14 = tmp9(tmp2[50]);
      tmp9Result14.captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
    }
    const obj13 = { value: analyticsLocations, children: tmp74(CollectiblesAnalyticsProvider, obj14) };
    const AnalyticsLocationProvider = tmp(tmp2[33]).AnalyticsLocationProvider;
    obj14 = { newValue: tmp10, children: items26 };
    const obj15 = { style: tmp7.rootContainer, children: loadedGoogleSkuIds(NativePaymentContextProvider, obj16) };
    CollectiblesAnalyticsProvider = tmp(tmp2[57]).CollectiblesAnalyticsProvider;
    obj16 = { skuIDs: [], activeSubscription: null, children: loadedGoogleSkuIds(ImprovedMobileShopLoadingProvider, obj17) };
    NativePaymentContextProvider = tmp(tmp2[54]).NativePaymentContextProvider;
    obj17 = { value: improvedLoading, children: tmp73Result };
    ImprovedMobileShopLoadingProvider = tmp(tmp2[55]).ImprovedMobileShopLoadingProvider;
    tmp74 = currentUserIfAvailable;
    const tmp75 = includeUnpublished;
    if (screen === tmp15.SHOP_ALL) {
      const obj18 = { data: memo6, renderItem: callback1, getItemType: callback2, keyExtractor: tmp79, initialScrollIndex: memo7, onViewableItemsChanged: tmp80 };
      tmp79 = undefined;
      const tmp9Result15 = tmp9(tmp2[51]);
      if (improvedLoading) {
        tmp79 = callback3;
      }
      tmp80 = undefined;
      if (improvedLoading) {
        tmp80 = callback4;
      }
      tmp73Result = tmp73(tmp9Result15, obj18);
    } else if (screen === tmp15.ORBS) {
      const obj19 = { shopBlocks, fetchShopHomeError, onRenderFirstOrbsItem: callback6, getItemType: callback7 };
      const tmp9Result16 = tmp9(tmp2[52]);
      if (fetchShopHomeError == null) {
        fetchShopHomeError = null;
      }
      tmp73Result = tmp73(tmp9Result16, obj19);
    } else {
      const obj20 = { children: loadedGoogleSkuIds(tmp9(tmp2[51]), obj21) };
      const CollectiblesCoachmarkScrollDismissProvider = tmp(tmp2[53]).CollectiblesCoachmarkScrollDismissProvider;
      obj21 = { data: shopBlocks, renderItem: callback5, getItemType: callback7 };
      tmp73Result = tmp73(CollectiblesCoachmarkScrollDismissProvider, obj20);
    }
    items26 = [loadedGoogleSkuIds(tmp75, obj15), loadedGoogleSkuIds(tmp9(tmp2[56]), {})];
    return loadedGoogleSkuIds(AnalyticsLocationProvider, obj13);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImprovedLoadingCollectiblesShopInternal(arg0) {
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = ImprovedMobileShopLoadingExperiment;
  const isImprovedMobileShopLoadingEnabled = obj2.useIsImprovedMobileShopLoadingEnabled("collectibles_shop_v2");
  if (cResult[0] === isImprovedMobileShopLoadingEnabled) {
    let tmp3;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj3 = { improvedLoading: isImprovedMobileShopLoadingEnabled };
  const merged = Object.assign(arg0);
  const tmp5 = closure_20(closure_27, obj3);
  cResult[0] = isImprovedMobileShopLoadingEnabled;
  cResult[1] = arg0;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function ImprovedLoadingCollectiblesShopInternal(arg0) {
  let isImprovedMobileShopLoadingEnabled;
  const obj2 = { improvedLoading: isImprovedMobileShopLoadingEnabled };
  const obj = ImprovedMobileShopLoadingExperiment;
  isImprovedMobileShopLoadingEnabled = obj.useIsImprovedMobileShopLoadingEnabled("collectibles_shop_v2");
  const merged = Object.assign(arg0);
  return closure_20(closure_27, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopV2(screen) {
  let currentUser;
  let nativePaymentsConnected;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  const tmp = nativePaymentsConnected;
  const obj = nativePaymentsConnected(576);
  const cResult = obj.c(13);
  const obj2 = NativePaymentHooksDefault;
  const nativeIAPPayments = obj2.useNativeIAPPayments();
  nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
  const storeFront = nativeIAPPayments.storeFront;
  closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (stateFromStores != null) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  [tmp12, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj5 = react;
  if (cResult[2] !== nativePaymentsConnected) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    const items1 = [nativePaymentsConnected];
    cResult[2] = nativePaymentsConnected;
    cResult[3] = E;
    cResult[4] = items1;
    tmp14 = items1;
    tmp13 = E;
  } else {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    tmp14 = cResult[4];
  }
  const effect = obj5.useEffect(tmp13, tmp14);
  const tmpResult3 = tmp(1382);
  tmpResult3.isIOS() && !tmp(5730).isStable && isStaffResult;
  if (!nativePaymentsConnected) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }
  if (tmp12) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }
  if (tmp12) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    const captureMessage = tmp18.captureMessage;
    tmp(1382);
    const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
    captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${tmp(5730).isStable}`);
  }
  if (screen.screen !== constants.ORBS) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
    if (!obj8.isMetaQuest()) {
      class E {
        constructor() {
          if (closure_0) {
            return;
          } else {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 10000;
            closure_0 = setTimeout(() => {
              closure_1_1(true);
            }, 10000);
            return () => clearTimeout(closure_0);
          }
        }
      }
      const obj3 = { storeFront, screen: screen.screen };
      const merged = Object.assign(screen);
      const tmp27 = closure_20(closure_28, obj3);
      cResult[10] = screen;
      cResult[11] = storeFront;
      cResult[12] = tmp27;
    }
  }
  if (cResult[7] === screen) {
    class E {
      constructor() {
        if (closure_0) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 10000;
          closure_0 = setTimeout(() => {
            closure_1_1(true);
          }, 10000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }
  const obj4 = { storeFront, screen: screen.screen, improvedLoading: false };
  const merged1 = Object.assign(screen);
  const tmp29 = closure_20(closure_27, obj4);
  cResult[7] = screen;
  cResult[8] = storeFront;
  cResult[9] = tmp29;
}) : (function CollectiblesShopV2(screen) {
  let currentUser;
  let tmp14;
  let tmp9;
  const obj = NativePaymentHooksDefault;
  const nativeIAPPayments = obj.useNativeIAPPayments();
  const nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
  const storeFront = nativeIAPPayments.storeFront;
  const items = [UserStore];
  const tmp4 = closure_22();
  const obj2 = nativePaymentsConnected(504);
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (stateFromStores != null) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  [tmp9, importDefault] = react.useState(false);
  const items1 = [nativePaymentsConnected];
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    if (!timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        closure_1_1(true);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const tmp5Result = nativePaymentsConnected(1382);
  const tmp11 = tmp5Result.isIOS() && !nativePaymentsConnected(5730).isStable && isStaffResult;
  if (!nativePaymentsConnected) {
    if (!tmp11) {
      if (!tmp9) {
        const obj3 = { style: tmp4.spinner, size: "large" };
        tmp14 = closure_20(closure_5, obj3);
      }
      return tmp14;
    }
  }
  if (tmp9) {
    const captureMessage = SentryUtilsDefault.captureMessage;
    SentryUtilsDefault;
    nativePaymentsConnected(1382);
    const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`;
    captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`} isStable: ${nativePaymentsConnected(5730).isStable}`);
  }
  if (screen.screen !== constants.ORBS) {
    let tmp23;
    const tmp5Result4 = nativePaymentsConnected(1628);
    if (!tmp5Result4.isMetaQuest()) {
      const obj4 = { storeFront, screen: screen.screen };
      const merged = Object.assign(screen);
      tmp23 = closure_20(closure_28, obj4);
    }
    tmp14 = tmp23;
  }
  const obj5 = { storeFront, screen: screen.screen, improvedLoading: false };
  const merged1 = Object.assign(screen);
  tmp23 = closure_20(closure_27, obj5);
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default tmp6;
export const CollectiblesShopV2 = tmp6;
