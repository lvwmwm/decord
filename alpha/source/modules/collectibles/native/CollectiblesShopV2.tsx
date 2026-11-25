// Module ID: 17427
// Function ID: 17428
// Name: CollectiblesShopV2
// Dependencies: [32, 19, 17, 5606, 1191, 1386, 6280, 5669, 6317, 1073, 1071, 21, 5012, 6349, 13851, 17428, 11226, 11227, 504, 5591, 1268, 11103, 17429, 17431, 17432, 11555, 1378, 11199, 9227, 9373, 11069, 5019, 6348, 1500, 17434, 2185, 17436, 1255, 6333, 6278, 17437, 17438, 17440, 17476, 1241, 11168, 11266, 11219, 17479, 17480, 17449, 17481, 17483, 5781, 1625, 2]

// Module 17427 (CollectiblesShopV2)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2185 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 6278 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 6317 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 6333 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9227 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11199 */;
import ImprovedMobileShopLoadingExperiment from "ImprovedMobileShopLoadingExperiment" /* 11219 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 11555 */;
import takeWhileDefault from "takeWhile" /* 17434 */;
import ShopCategory from "ShopCategory" /* 17438 */;
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage" /* 17440 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5606 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserStore from "UserStore" /* 1386 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6280 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 5669 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let kind, map, navigation;

let SHOP_ALL_PAGE_SIZE;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
const SentryUtilsDefault = tmp(1241);
function ImprovedLoadingCollectiblesShopInternal(arg0) {
  let isImprovedMobileShopLoadingEnabled;
  const obj2 = { improvedLoading: isImprovedMobileShopLoadingEnabled };
  const obj = ImprovedMobileShopLoadingExperiment;
  isImprovedMobileShopLoadingEnabled = obj.useIsImprovedMobileShopLoadingEnabled("collectibles_shop_v2");
  const merged = Object.assign(arg0);
  return closure_21(CollectiblesShopInternal, obj2);
}
class CollectiblesShopV2 {
  constructor(screen) {
    let currentUser;
    let tmp14;
    let tmp9;
    const obj = NativePaymentHooksDefault;
    const nativeIAPPayments = obj.useNativeIAPPayments();
    const nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    const storeFront = nativeIAPPayments.storeFront;
    const items = [UserStore];
    const tmp4 = closure_23();
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
    const tmp5Result = nativePaymentsConnected(1378);
    const tmp11 = tmp5Result.isIOS() && !nativePaymentsConnected(5781).isStable && isStaffResult;
    if (!nativePaymentsConnected) {
      if (!tmp11) {
        if (!tmp9) {
          const obj3 = { style: tmp4.spinner, size: "large" };
          tmp14 = closure_21(closure_5, obj3);
        }
        return tmp14;
      }
    }
    if (tmp9) {
      const captureMessage = SentryUtilsDefault.captureMessage;
      SentryUtilsDefault;
      nativePaymentsConnected(1378);
      const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`;
      captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`} isStable: ${nativePaymentsConnected(5781).isStable}`);
    }
    if (screen.screen !== constants.ORBS) {
      let tmp23;
      const tmp5Result4 = nativePaymentsConnected(1625);
      if (!tmp5Result4.isMetaQuest()) {
        const obj4 = { storeFront, screen: screen.screen };
        const merged = Object.assign(screen);
        tmp23 = closure_21(ImprovedLoadingCollectiblesShopInternal, obj4);
      }
      tmp14 = tmp23;
    }
    const obj5 = { storeFront, screen: screen.screen, improvedLoading: false };
    const merged1 = Object.assign(screen);
    tmp23 = closure_21(CollectiblesShopInternal, obj5);
  }
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const FeedBlockRecord = FeedBlockRecord2.FeedBlockRecord;
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: map1, CollectiblesMobileShopScreen: closure_14, CollectibleShopTab: closure_15, SHOP_ALL_PAGE_SIZE } = CollectiblesShopConstants);
const TWELVE_DAYS_COLLECTION_SKU_ID = CollectiblesShopConstants.TWELVE_DAYS_COLLECTION_SKU_ID;
({ AnalyticEvents: closure_18, COLLECTIBLES_APPLICATION_ID: closure_19, PaymentGateways: closure_20 } = Constants);
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
const sidebars = createStyles.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
const constants3 = { CATEGORY: "category", SKELETON: "skeleton" };
let closure_25 = 2 * SHOP_ALL_PAGE_SIZE;
let closure_26 = Array.from({ length: 3 }, (arg0, skeletonIndex) => ({ kind: constants3.SKELETON, skeletonIndex }));
let closure_27 = [];
function CollectiblesShopInternal(analyticsSource) {
  let COLLECTIBLES_SHOP_HOME_SCREEN;
  let CollectiblesAnalyticsProvider;
  let ImprovedMobileShopLoadingProvider;
  let NativePaymentContextProvider;
  let fetchShopHomeError;
  let isFetchingShopHome;
  let items23;
  let items24;
  let obj13;
  let obj15;
  let obj16;
  let obj6;
  let screen;
  let storeFront;
  let tmp26;
  let tmp70Result;
  let tmp77;
  let tmp78;
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  const improvedLoading = analyticsSource.improvedLoading;
  let bypassGoogleSkuSync;
  let noCache;
  let includeUnpublished;
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
  closure_27 = undefined;
  let memo7;
  let first1;
  let closure_30;
  let tmp = analyticsSource;
  let tmp2 = screen;
  let obj = analyticsSource(screen[14]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(analyticsSource(screen[15]).CollectiblesShopOpenTriggerPoint);
  let obj2 = analyticsSource(screen[16]);
  const tmp5 = onNavigateAway;
  const collectiblesPromotionEndpointReferenceMobile = obj2.useCollectiblesPromotionEndpointReferenceMobile("CollectiblesShopV2");
  let tmp7;
  let tmp6 = onNavigateAway(screen[17]);
  if (collectiblesPromotionEndpointReferenceMobile) {
    tmp7 = isFetchingGoogleSkus;
  }
  tmp6(tmp7);
  let items = [HOME];
  let tmp9 = improvedLoading;
  const tmpResult = tmp(tmp2[18]);
  const first = improvedLoading(tmpResult.useStateFromStoresArray(items, () => {
    let num = HOME.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  const items1 = [sessionId];
  const tmpResult9 = tmp(tmp2[18]);
  const stateFromStoresObject = tmpResult9.useStateFromStoresObject(items1, () => {
    const obj = { bypassGoogleSkuSync: sessionId.get("bypass_google_sku_sync"), noCache: sessionId.get("shop_disable_cache"), includeUnpublished: sessionId.get("shop_include_unpublished") };
    return obj;
  });
  bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  noCache = stateFromStoresObject.noCache;
  includeUnpublished = stateFromStoresObject.includeUnpublished;
  let tmp12 = analyticsLocations();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  const tmp14 = tmp5(tmp2[19])(() => {
    let obj2;
    const obj = { sessionId: obj2.v4() };
    obj2 = analyticsSource(screen[20]);
    return obj;
  });
  sessionId = tmp14.sessionId;
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
  let obj3 = { paymentGateway: loadedGoogleSkuIds.APPLE, logPerf: true, skipFetch: improvedLoading };
  const tmp5Result = tmp5(tmp2[21]);
  if (null != country) {
    let obj4 = { countryCode: country };
    obj6 = obj4;
  } else {
    obj6 = {};
  }
  const merged = Object.assign(obj6);
  const tmp5ResultResult = tmp5Result(obj3, memo);
  categories = tmp5ResultResult.categories;
  isFetchingCategories = tmp5ResultResult.isFetchingCategories;
  if (screen === isLoading.ORBS) {
    HOME = hasMore.ORBS;
  } else {
    HOME = hasMore.HOME;
  }
  let tmp23 = improvedLoading;
  const useMaybeFetchCollectiblesShopHome = tmp(tmp2[22]).useMaybeFetchCollectiblesShopHome;
  const obj7 = { noCache, includeUnpublished, logPerf: true };
  tmp(tmp2[22]);
  if (improvedLoading) {
    tmp23 = screen === tmp19.SHOP_ALL;
  }
  const maybeFetchCollectiblesShopHome = useMaybeFetchCollectiblesShopHome(HOME, obj7, memo, false, tmp23);
  shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  ({ isFetchingShopHome, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const obj8 = { pageSize: prefetchThrough, includeUnpublished, noCache, enabled: tmp26 };
  tmp26 = improvedLoading;
  const tmp5Result10 = tmp5(tmp2[23]);
  if (improvedLoading) {
    tmp26 = screen === tmp19.SHOP_ALL;
  }
  const tmp5Result1Result = tmp5Result10(obj8);
  categories1 = tmp5Result1Result.categories;
  isLoading = tmp5Result1Result.isLoading;
  hasMore = tmp5Result1Result.hasMore;
  prefetchThrough = tmp5Result1Result.prefetchThrough;
  const items3 = [shopBlocks];
  const memo1 = obj5.useMemo(() => shopBlocks.find((item) => item instanceof fetchShopHomeError), items3);
  resolvedSkuIds = tmp5(tmp2[24])(memo1).resolvedSkuIds;
  const items4 = [improvedLoading, screen, resolvedSkuIds];
  const effect = obj5.useEffect(() => {
    const tmp = improvedLoading && screen !== isLoading.SHOP_ALL;
    if (tmp) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const products = CollectiblesShopManager.requestProducts(resolvedSkuIds);
    }
  }, items4);
  const items5 = [shopBlocks];
  const items6 = [HOME];
  const tmpResult11 = tmp(tmp2[18]);
  stateFromStores = tmpResult11.useStateFromStores(items5, () => CollectiblesShopHomeStore.getCategories(HOME), items6);
  const items7 = [improvedLoading, categories, isFetchingCategories];
  const memo2 = obj5.useMemo(() => {
    const tmp2 = improvedLoading;
    if (!tmp2) {
      if (true !== isFetchingCategories) {
        const obj = PlatformUtils;
        if (false !== obj.isAndroid()) {
          const getGoogleSkuIds = tmp4(11199).getGoogleSkuIds;
          const items = [];
          collectibles_CollectiblesUtils;
          HermesBuiltin.arraySpread(items, categories.values(), 0);
          const googleSkuIds = getGoogleSkuIds(items.flatMap((products) => products.products));
        }
        return [];
      }
    }
  }, items7);
  const tmp5Result11 = tmp5(tmp2[28]);
  let googleSkuIds = tmp5Result11.useGoogleSkuIds(memo2, true === isFetchingCategories, !improvedLoading);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  const items8 = [improvedLoading, screen, categories1, stateFromStores];
  const memo3 = obj5.useMemo(() => {
    const tmp = improvedLoading;
    if (tmp) {
      const obj = screen === isLoading.SHOP_ALL ? categories1 : stateFromStores;
      const obj2 = collectibles_CollectiblesUtils;
      return obj2.getGoogleSkuIds(obj.flatMap((products) => products.products));
    } else {
      return closure_27;
    }
  }, items8);
  const tmp5Result12 = tmp5(tmp2[28]);
  loadedGoogleSkuIds = tmp5Result12.useLoadedGoogleSkuIds(memo3);
  const tmpResult12 = tmp(tmp2[29]);
  currentUserIfAvailable = tmpResult12.useCurrentUserIfAvailable();
  const tmpResult13 = tmp(tmp2[30]);
  const currentUserWishlist = tmpResult13.useCurrentUserWishlist();
  const items9 = [categories];
  const tmpResult14 = tmp(tmp2[18]);
  stateFromStores1 = tmpResult14.useStateFromStores(items9, () => {
    const obj = analyticsSource(screen[31]);
    return obj.isThemeDark(categories.theme);
  });
  const items10 = [, ];
  const tmp5Result13 = tmp5(tmp2[32]);
  items10[0] = tmp5(tmp2[13]).COLLECTIBLES_SHOP;
  if (isLoading.SHOP_ALL === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[13]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (isLoading.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[13]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp19.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[13]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items10[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = tmp5Result13(items10).analyticsLocations;
  const tmpResult15 = tmp(tmp2[33]);
  navigation = tmpResult15.useNavigation();
  const items11 = [navigation, onNavigateAway];
  const effect1 = obj5.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (onNavigateAway != null) {
        tmp();
      }
    }
  }), items11);
  const items12 = [categories1, loadedGoogleSkuIds];
  memo4 = obj5.useMemo(() => takeWhileDefault(categories1, (products) => {
    const obj = analyticsSource(screen[27]);
    const googleSkuIds = obj.getGoogleSkuIds(products.products);
    return googleSkuIds.every((item) => set.has(item));
  }), items12);
  const items13 = [improvedLoading, memo4, categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  memo5 = obj5.useMemo(() => {
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
  const tmp40 = Date.now() - first > categories1;
  const tmpResult16 = tmp(tmp2[36]);
  let categoryIndex = tmpResult16.useCollectiblesShopDeepLinkProps({ categories: memo5 }).categoryIndex;
  const items14 = [memo5, improvedLoading, isLoading, hasMore, memo4.length, categories1.length];
  const memo6 = obj5.useMemo(() => {
    const mapped = memo5.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
    let tmp2 = improvedLoading;
    if (tmp2) {
      tmp2 = isLoading || hasMore || memo4.length < categories1.length;
      const tmp3 = isLoading || hasMore || memo4.length < categories1.length;
    }
    if (tmp2) {
      const push = mapped.push;
      const items = [];
      HermesBuiltin.arraySpread(items, closure_26, 0);
      HermesBuiltin.apply(push, items, mapped);
    }
    return mapped;
  }, items14);
  closure_27 = obj5.useRef({ [tmp19.SHOP_ALL]: false, [tmp19.FEATURED_PAGE]: false, [tmp19.ORBS]: false });
  const items15 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect2 = obj5.useEffect(() => {
    let str;
    let FEATURED_PAGE = screen;
    const obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: analyticsSource, page_type: str };
    str = "home";
    const tmp = null == screen || FEATURED_PAGE === isLoading.FEATURED_PAGE || FEATURED_PAGE === isLoading.SHOP_ALL;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_VIEWED = stateFromStores.COLLECTIBLES_SHOP_VIEWED;
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
  }, items15);
  const items16 = [currentUserIfAvailable];
  const effect3 = obj5.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items16);
  let tmp45 = improvedLoading;
  const tmp5Result14 = tmp5(tmp2[40]);
  if (improvedLoading) {
    tmp45 = screen === tmp19.SHOP_ALL;
  }
  tmp5Result14({ enabled: tmp45, analyticsLocations, shopAnalyticsContext: tmp14 });
  const items17 = [sessionId, includeUnpublished, noCache, stateFromStores1];
  const callback = obj5.useCallback((item) => {
    let tmp17;
    item = item.item;
    if (item.kind === navigation.SKELETON) {
      tmp17 = currentUserIfAvailable(ShopCategory.ShopCategorySkeleton, {});
    } else {
      const tmp3 = 0 !== item.categoryIndex || closure_27.current[isLoading.SHOP_ALL];
      if (!tmp3) {
        closure_27.current[isLoading.SHOP_ALL] = true;
        const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: isLoading.SHOP_ALL, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
        const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
        CollectiblesPerfLogging;
        trackShopPerf(obj);
      }
      const obj2 = { category: item.category, isDarkTheme: stateFromStores1, index: item.categoryIndex };
      tmp17 = currentUserIfAvailable(ShopCategory.ShopCategory, obj2);
    }
    return tmp17;
  }, items17);
  const callback1 = obj5.useCallback((kind) => kind.kind, []);
  const items18 = [categories1];
  const callback2 = obj5.useCallback((kind) => {
    kind = kind.kind;
    if (navigation.CATEGORY === kind) {
      return kind.category.skuId;
    } else if (tmp.SKELETON === kind) {
      const _HermesInternal = HermesInternal;
      return "" + kind.kind + "-" + kind.skeletonIndex;
    }
  }, []);
  memo7 = obj5.useMemo(() => {
    map = new Map(categories1.map((skuId, index) => {
      const items = [skuId.skuId, index];
      return items;
    }));
    return map;
  }, items18);
  const tmp9Result = tmp9(bypassGoogleSkuSync.useState(0), 2);
  first1 = tmp9Result[0];
  closure_30 = tmp9Result[1];
  const items19 = [memo7, prefetchThrough, memo5.length, categories1.length];
  const items20 = [improvedLoading, screen, hasMore, isLoading, memo4.length, categories1.length, memo5.length, first1, prefetchThrough];
  const callback3 = obj5.useCallback((arg0) => {
    let num = 0;
    let bound1 = 0;
    let num2 = 0;
    const iter = arg0.viewableItems[Symbol.iterator]();
    while (iter !== undefined) {
      let item = iter.next().item;
      let tmp = item;
      if (item.kind === navigation.SKELETON) {
        let _Math3 = Math;
        let bound = Math.max(num, memo5.length);
        num = bound;
        bound1 = bound;
        let _Math4 = Math;
        num2 = Math.max(num2, categories1.length);
      } else {
        let _Math = Math;
        bound1 = Math.max(num, tmp.categoryIndex + 1);
        num = bound1;
        let _Math2 = Math;
        let categoryIndex = memo7.get(tmp.category.skuId);
        if (categoryIndex == null) {
          categoryIndex = tmp.categoryIndex;
        }
        num2 = max(num2, categoryIndex + 1);
      }
      continue;
    }
    prefetchThrough(num2);
    closure_30((arg0) => Math.max(arg0, bound1));
  }, items19);
  const effect4 = obj5.useEffect(() => {
    const tmp = improvedLoading && screen === isLoading.SHOP_ALL && hasMore && !isLoading && memo4.length === categories1.length && memo5.length < first1 + closure_25;
    if (tmp) {
      prefetchThrough(categories1.length);
    }
  }, items20);
  const items21 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const items22 = [sessionId, includeUnpublished, noCache];
  const callback4 = obj5.useCallback((index) => {
    let tmp17;
    let tmp = 0 !== index.index;
    const item = index.item;
    if (!tmp) {
      tmp = closure_27.current[isLoading.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_27.current[isLoading.FEATURED_PAGE] = true;
      const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: isLoading.FEATURED_PAGE, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
      CollectiblesPerfLogging;
      trackShopPerf(obj);
    }
    const obj2 = { shopBlock: item, fetchShopHomeError: tmp17 };
    tmp17 = fetchShopHomeError;
    const tmp15 = closure_21;
    const tmp16 = CollectiblesShopFeaturedPageDefault;
    if (fetchShopHomeError == null) {
      tmp17 = null;
    }
    return tmp15(tmp16, obj2);
  }, items21);
  const callback5 = obj5.useCallback(() => {
    if (!closure_27.current[isLoading.ORBS]) {
      closure_27.current[isLoading.ORBS] = true;
      const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: isLoading.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
      CollectiblesPerfLogging;
      trackShopPerf(obj);
    }
  }, items22);
  const callback6 = obj5.useCallback((type) => type.type, []);
  tmp5(tmp2[43])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    const tmp59 = 0 === memo5.length || tmp40;
    if (improvedLoading) {
      const tmp65 = false !== isFetchingShopHome || memo3.some((item) => !loadedGoogleSkuIds.has(item));
      if (screen === isLoading.FEATURED_PAGE || screen === isLoading.ORBS || null == screen) {
        if (tmp65) {
          const obj9 = { style: tmp12.spinner, size: "large" };
          return currentUserIfAvailable(noCache, obj9);
        }
      }
    } else {
      if (screen === isLoading.FEATURED_PAGE || screen === isLoading.ORBS || null == screen) {
        if (isFetchingShopHome) {
          const obj10 = { style: tmp12.spinner, size: "large" };
          return currentUserIfAvailable(noCache, obj10);
        }
      }
      if (tmp59) {
        const obj11 = { style: tmp12.spinner, size: "large" };
        return currentUserIfAvailable(noCache, obj11);
      }
    }
    const tmp66 = !improvedLoading && first > 0 && false === isFetchingCategories && 0 === categories.size;
    if (tmp66) {
      let str = "collectibles mobile shop loaded empty categories";
      const tmp5Result15 = tmp5(tmp2[44]);
      tmp5Result15.captureMessage("collectibles mobile shop loaded empty categories");
    }
    if (null !== fetchError) {
      const tmp5Result16 = tmp5(tmp2[44]);
      tmp5Result16.captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
    }
    const obj12 = { value: analyticsLocations, children: stateFromStores1(CollectiblesAnalyticsProvider, obj13) };
    const AnalyticsLocationProvider = tmp(tmp2[32]).AnalyticsLocationProvider;
    obj13 = { newValue: tmp14, children: items24 };
    const obj14 = { style: tmp12.rootContainer, children: currentUserIfAvailable(NativePaymentContextProvider, obj15) };
    CollectiblesAnalyticsProvider = tmp(tmp2[45]).CollectiblesAnalyticsProvider;
    obj15 = { skuIDs: [], activeSubscription: null, children: currentUserIfAvailable(ImprovedMobileShopLoadingProvider, obj16) };
    NativePaymentContextProvider = tmp(tmp2[46]).NativePaymentContextProvider;
    obj16 = { value: improvedLoading, children: tmp70Result };
    ImprovedMobileShopLoadingProvider = tmp(tmp2[47]).ImprovedMobileShopLoadingProvider;
    const tmp71 = includeUnpublished;
    if (screen === isLoading.SHOP_ALL) {
      const obj17 = { data: memo6, renderItem: callback, getItemType: callback1, keyExtractor: tmp77, initialScrollIndex: categoryIndex, onViewableItemsChanged: tmp78 };
      tmp77 = undefined;
      const tmp5Result17 = tmp5(tmp2[48]);
      if (improvedLoading) {
        tmp77 = callback2;
      }
      tmp78 = undefined;
      if (improvedLoading) {
        tmp78 = callback3;
      }
      tmp70Result = tmp69(tmp5Result17, obj17);
    } else if (screen === isLoading.ORBS) {
      const obj18 = { shopBlocks, fetchShopHomeError, onRenderFirstOrbsItem: callback5, getItemType: callback6 };
      const tmp5Result18 = tmp5(tmp2[49]);
      if (fetchShopHomeError == null) {
        fetchShopHomeError = null;
      }
      tmp70Result = tmp69(tmp5Result18, obj18);
    } else {
      let tmp69Result2 = shopBlocks.length > 0;
      const CollectiblesCoachmarkScrollDismissProvider = tmp(tmp2[50]).CollectiblesCoachmarkScrollDismissProvider;
      if (tmp69Result2) {
        const obj19 = { collectionSkuId: resolvedSkuIds };
        tmp69Result2 = tmp69(tmp(tmp2[51]).TwelveDaysHomeNagbar, obj19);
      }
      const obj20 = { children: items23 };
      items23 = [tmp69Result2, ];
      const obj21 = { data: shopBlocks, renderItem: callback4, getItemType: callback6 };
      items23[1] = currentUserIfAvailable(tmp5(tmp2[48]), obj21);
      tmp70Result = tmp70(CollectiblesCoachmarkScrollDismissProvider, obj20);
    }
    items24 = [currentUserIfAvailable(tmp71, obj14), currentUserIfAvailable(tmp5(tmp2[52]), {})];
    return currentUserIfAvailable(AnalyticsLocationProvider, obj12);
  }
}
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };
