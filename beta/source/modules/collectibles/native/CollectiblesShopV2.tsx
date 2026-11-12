// Module ID: 18194
// Function ID: 18195
// Name: CollectiblesShopV2
// Dependencies: [32, 19, 17, 5786, 1192, 1385, 7829, 5844, 7861, 1074, 1072, 5016, 21, 5170, 7445, 15659, 18195, 15326, 15327, 504, 5771, 1266, 10757, 18196, 18198, 18199, 9702, 1377, 9668, 10065, 8853, 9587, 5177, 7420, 1499, 18201, 2183, 18203, 5202, 5003, 2171, 18204, 1252, 7872, 8862, 18205, 18206, 18208, 18209, 18245, 1242, 9576, 10840, 9689, 18248, 18249, 18218, 18250, 6627, 1624, 2]

// Module 18194 (CollectiblesShopV2)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2183 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5202 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7861 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7872 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8862 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9668 */;
import ImprovedMobileShopLoadingExperiment from "ImprovedMobileShopLoadingExperiment" /* 9689 */;
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 9702 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 10065 */;
import takeWhileDefault from "takeWhile" /* 18201 */;
import ShopCategory from "ShopCategory" /* 18206 */;
import ShopNitroUpsellBanner2 from "ShopNitroUpsellBanner" /* 18208 */;
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage" /* 18209 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5786 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserStore from "UserStore" /* 1385 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7829 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 5844 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let kind, map, navigation;

let SHOP_ALL_PAGE_SIZE;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
const SentryUtilsDefault = tmp(1242);
const MobileNitroUpsellInShopFeedExperimentDefault = tmp(18204);
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
    const tmp5Result = nativePaymentsConnected(1377);
    const tmp11 = tmp5Result.isIOS() && !nativePaymentsConnected(6627).isStable && isStaffResult;
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
      nativePaymentsConnected(1377);
      const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`;
      captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`} isStable: ${nativePaymentsConnected(6627).isStable}`);
    }
    if (screen.screen !== constants.ORBS) {
      let tmp23;
      const tmp5Result4 = nativePaymentsConnected(1624);
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
({ AnalyticEvents: closure_17, COLLECTIBLES_APPLICATION_ID: closure_18, PaymentGateways: closure_19 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
const sidebars = createStyles.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
const constants3 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell", SKELETON: "skeleton" };
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
  let items26;
  let obj13;
  let obj15;
  let obj16;
  let obj20;
  let obj6;
  let screen;
  let storeFront;
  let tmp26;
  let tmp77Result;
  let tmp78;
  let tmp83;
  let tmp84;
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
  let obj = analyticsSource(screen[15]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(analyticsSource(screen[16]).CollectiblesShopOpenTriggerPoint);
  let obj2 = analyticsSource(screen[17]);
  let tmp5 = onNavigateAway;
  const collectiblesPromotionEndpointReferenceMobile = obj2.useCollectiblesPromotionEndpointReferenceMobile("CollectiblesShopV2");
  let tmp7;
  let tmp6 = onNavigateAway(screen[18]);
  if (collectiblesPromotionEndpointReferenceMobile) {
    tmp7 = stateFromStores;
  }
  tmp6(tmp7);
  let tmpResult = tmp(tmp2[19]);
  let items = [HOME];
  const tmp9 = improvedLoading;
  const first = improvedLoading(tmpResult.useStateFromStoresArray(items, () => {
    let num = HOME.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let items1 = [sessionId];
  const tmpResult10 = tmp(tmp2[19]);
  const stateFromStoresObject = tmpResult10.useStateFromStoresObject(items1, () => {
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
  const tmp14 = tmp5(tmp2[20])(() => {
    let obj2;
    const obj = { sessionId: obj2.v4() };
    obj2 = analyticsSource(screen[21]);
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
  let obj3 = { paymentGateway: isFetchingGoogleSkus.APPLE, logPerf: true, skipFetch: improvedLoading };
  const tmp5Result = tmp5(tmp2[22]);
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
  let tmp19 = isLoading;
  if (screen === isLoading.ORBS) {
    HOME = hasMore.ORBS;
  } else {
    let tmp20 = hasMore;
    HOME = hasMore.HOME;
  }
  let tmp23 = improvedLoading;
  const useMaybeFetchCollectiblesShopHome = tmp(tmp2[23]).useMaybeFetchCollectiblesShopHome;
  const obj7 = { noCache, includeUnpublished, logPerf: true };
  tmp(tmp2[23]);
  if (improvedLoading) {
    tmp23 = screen === tmp19.SHOP_ALL;
  }
  const maybeFetchCollectiblesShopHome = useMaybeFetchCollectiblesShopHome(HOME, obj7, memo, false, tmp23);
  shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  ({ isFetchingShopHome, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const obj8 = { pageSize: prefetchThrough, includeUnpublished, noCache, enabled: tmp26 };
  tmp26 = improvedLoading;
  const tmp5Result10 = tmp5(tmp2[24]);
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
  resolvedSkuIds = tmp5(tmp2[25])(memo1).resolvedSkuIds;
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
  const tmpResult12 = tmp(tmp2[19]);
  stateFromStores = tmpResult12.useStateFromStores(items5, () => CollectiblesShopHomeStore.getCategories(HOME), items6);
  const items7 = [improvedLoading, categories, isFetchingCategories];
  const memo2 = obj5.useMemo(() => {
    const tmp2 = improvedLoading;
    if (!tmp2) {
      if (true !== isFetchingCategories) {
        const obj = PlatformUtils;
        if (false !== obj.isAndroid()) {
          const getGoogleSkuIds = tmp4(9668).getGoogleSkuIds;
          const items = [];
          collectibles_CollectiblesUtils;
          HermesBuiltin.arraySpread(items, categories.values(), 0);
          const googleSkuIds = getGoogleSkuIds(items.flatMap((products) => products.products));
        }
        return [];
      }
    }
  }, items7);
  const tmp5Result11 = tmp5(tmp2[29]);
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
  const tmp5Result12 = tmp5(tmp2[29]);
  loadedGoogleSkuIds = tmp5Result12.useLoadedGoogleSkuIds(memo3);
  const tmpResult13 = tmp(tmp2[30]);
  currentUserIfAvailable = tmpResult13.useCurrentUserIfAvailable();
  const tmpResult14 = tmp(tmp2[31]);
  const currentUserWishlist = tmpResult14.useCurrentUserWishlist();
  const items9 = [categories];
  const tmpResult15 = tmp(tmp2[19]);
  stateFromStores1 = tmpResult15.useStateFromStores(items9, () => {
    const obj = analyticsSource(screen[32]);
    return obj.isThemeDark(categories.theme);
  });
  const items10 = [, ];
  const tmp5Result13 = tmp5(tmp2[33]);
  items10[0] = tmp5(tmp2[14]).COLLECTIBLES_SHOP;
  if (tmp19.SHOP_ALL === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[14]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp19.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[14]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp19.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp5(tmp2[14]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items10[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = tmp5Result13(items10).analyticsLocations;
  const tmpResult16 = tmp(tmp2[34]);
  navigation = tmpResult16.useNavigation();
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
    const obj = analyticsSource(screen[28]);
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
  const tmpResult17 = tmp(tmp2[37]);
  categoryIndex = tmpResult17.useCollectiblesShopDeepLinkProps({ categories: memo5 }).categoryIndex;
  const useState = obj5.useState;
  const tmpResult18 = tmp(tmp2[38]);
  const tmp9Result = tmp9(useState(tmpResult18.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[39]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL)), 2);
  first1 = tmp9Result[0];
  closure_29 = tmp43;
  const items14 = [currentUserIfAvailable, screen, first1];
  const tmp9Result3 = tmp9(bypassGoogleSkuSync.useMemo(() => {
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
  first2 = tmp9Result3[0];
  closure_31 = tmp46;
  const items15 = [tmp9Result[1]];
  dismiss = obj5.useCallback(() => {
    closure_29(true);
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction: ContentDismissActionType.USER_DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL, obj2);
  }, items15);
  const items16 = [memo5, first2, improvedLoading, isLoading, hasMore, memo4.length, categories1.length];
  memo6 = obj5.useMemo(() => {
    const mapped = memo5.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
    const tmp2 = first2 && mapped.length > 0;
    if (tmp2) {
      const obj = { kind: navigation.NITRO_UPSELL };
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
      HermesBuiltin.arraySpread(items, closure_26, 0);
      HermesBuiltin.apply(push, items, mapped);
    }
    return mapped;
  }, items16);
  const items17 = [categoryIndex, memo6];
  const memo7 = obj5.useMemo(() => {
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
  closure_34 = obj5.useRef({ [tmp19.SHOP_ALL]: false, [tmp19.FEATURED_PAGE]: false, [tmp19.ORBS]: false });
  const items18 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect2 = obj5.useEffect(() => {
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
  const effect3 = obj5.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items19);
  let tmp53 = improvedLoading;
  const tmp5Result14 = tmp5(tmp2[45]);
  if (improvedLoading) {
    tmp53 = screen === tmp19.SHOP_ALL;
  }
  tmp5Result14({ enabled: tmp53, analyticsLocations, shopAnalyticsContext: tmp14 });
  const items20 = [sessionId, includeUnpublished, noCache, stateFromStores1, dismiss, tmp9Result3[1]];
  const callback1 = obj5.useCallback((item) => {
    let GET_NITRO;
    let tmp19Result;
    item = item.item;
    if (item.kind === navigation.SKELETON) {
      tmp19Result = currentUserIfAvailable(ShopCategory.ShopCategorySkeleton, {});
    } else if (item.kind === tmp.NITRO_UPSELL) {
      const obj2 = { isDarkTheme: stateFromStores1, dismiss, buttonVariant: GET_NITRO };
      GET_NITRO = closure_31;
      const ShopNitroUpsellBanner = ShopNitroUpsellBanner2.ShopNitroUpsellBanner;
      const tmp19 = currentUserIfAvailable;
      const tmp20 = require;
      if (closure_31 == null) {
        GET_NITRO = tmp20(18204).NitroUpsellBannerButtonVariant.GET_NITRO;
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
      tmp19Result = currentUserIfAvailable(ShopCategory.ShopCategory, obj3);
    }
    return tmp19Result;
  }, items20);
  const callback2 = obj5.useCallback((kind) => kind.kind, []);
  const items21 = [categories1];
  const callback3 = obj5.useCallback((kind) => {
    kind = kind.kind;
    if (navigation.CATEGORY === kind) {
      return kind.category.skuId;
    } else if (tmp.SKELETON === kind) {
      const _HermesInternal = HermesInternal;
      return "" + kind.kind + "-" + kind.skeletonIndex;
    } else {
      return kind.kind;
    }
  }, []);
  memo8 = obj5.useMemo(() => {
    map = new Map(categories1.map((skuId, index) => {
      const items = [skuId.skuId, index];
      return items;
    }));
    return map;
  }, items21);
  const tmp9Result4 = tmp9(bypassGoogleSkuSync.useState(0), 2);
  first3 = tmp9Result4[0];
  closure_37 = tmp9Result4[1];
  const items22 = [memo8, prefetchThrough, memo5.length, categories1.length];
  const items23 = [improvedLoading, screen, hasMore, isLoading, memo4.length, categories1.length, memo5.length, first3, prefetchThrough];
  const callback4 = obj5.useCallback((arg0) => {
    let num = 0;
    let bound1 = 0;
    let num2 = 0;
    const iter = arg0.viewableItems[Symbol.iterator]();
    while (iter !== undefined) {
      let item = iter.next().item;
      let tmp = item;
      if (item.kind === navigation.SKELETON) {
        let _Math = Math;
        let bound = Math.max(num, memo5.length);
        num = bound;
        bound1 = bound;
        let _Math2 = Math;
        num2 = Math.max(num2, categories1.length);
      } else if (tmp.kind === tmp2.CATEGORY) {
        let _Math3 = Math;
        bound1 = Math.max(num, tmp.categoryIndex + 1);
        num = bound1;
        let _Math4 = Math;
        categoryIndex = memo8.get(tmp.category.skuId);
        if (categoryIndex == null) {
          categoryIndex = tmp.categoryIndex;
        }
        num2 = max(num2, categoryIndex + 1);
      }
      continue;
    }
    prefetchThrough(num2);
    closure_37((arg0) => Math.max(arg0, bound1));
  }, items22);
  const effect4 = obj5.useEffect(() => {
    const tmp = improvedLoading && screen === isLoading.SHOP_ALL && hasMore && !isLoading && memo4.length === categories1.length && memo5.length < first3 + closure_25;
    if (tmp) {
      prefetchThrough(categories1.length);
    }
  }, items23);
  const items24 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const items25 = [sessionId, includeUnpublished, noCache];
  const callback5 = obj5.useCallback((index) => {
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
    const tmp15 = closure_21;
    const tmp16 = CollectiblesShopFeaturedPageDefault;
    if (fetchShopHomeError == null) {
      tmp17 = null;
    }
    return tmp15(tmp16, obj2);
  }, items24);
  const callback6 = obj5.useCallback(() => {
    if (!closure_34.current[isLoading.ORBS]) {
      closure_34.current[isLoading.ORBS] = true;
      const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: isLoading.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
      CollectiblesPerfLogging;
      trackShopPerf(obj);
    }
  }, items25);
  const callback7 = obj5.useCallback((type) => type.type, []);
  tmp5(tmp2[49])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    const tmp67 = 0 === memo5.length || tmp40;
    if (improvedLoading) {
      const tmp73 = false !== isFetchingShopHome || memo3.some((item) => !loadedGoogleSkuIds.has(item));
      if (screen === tmp19.FEATURED_PAGE || screen === tmp19.ORBS || null == screen) {
        if (tmp73) {
          const obj9 = { style: tmp12.spinner, size: "large" };
          return currentUserIfAvailable(noCache, obj9);
        }
      }
    } else {
      if (screen === tmp19.FEATURED_PAGE || screen === tmp19.ORBS || null == screen) {
        if (isFetchingShopHome) {
          const obj10 = { style: tmp12.spinner, size: "large" };
          return currentUserIfAvailable(noCache, obj10);
        }
      }
      if (tmp67) {
        const obj11 = { style: tmp12.spinner, size: "large" };
        return currentUserIfAvailable(noCache, obj11);
      }
    }
    const tmp74 = !improvedLoading && first > 0 && false === isFetchingCategories && 0 === categories.size;
    if (tmp74) {
      let str = "collectibles mobile shop loaded empty categories";
      const tmp5Result15 = tmp5(tmp2[50]);
      tmp5Result15.captureMessage("collectibles mobile shop loaded empty categories");
    }
    if (null !== fetchError) {
      const tmp5Result16 = tmp5(tmp2[50]);
      tmp5Result16.captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
    }
    const obj12 = { value: analyticsLocations, children: tmp78(CollectiblesAnalyticsProvider, obj13) };
    const AnalyticsLocationProvider = tmp(tmp2[33]).AnalyticsLocationProvider;
    obj13 = { newValue: tmp14, children: items26 };
    const obj14 = { style: tmp12.rootContainer, children: currentUserIfAvailable(NativePaymentContextProvider, obj15) };
    CollectiblesAnalyticsProvider = tmp(tmp2[51]).CollectiblesAnalyticsProvider;
    obj15 = { skuIDs: [], activeSubscription: null, children: currentUserIfAvailable(ImprovedMobileShopLoadingProvider, obj16) };
    NativePaymentContextProvider = tmp(tmp2[52]).NativePaymentContextProvider;
    obj16 = { value: improvedLoading, children: tmp77Result };
    ImprovedMobileShopLoadingProvider = tmp(tmp2[53]).ImprovedMobileShopLoadingProvider;
    tmp78 = stateFromStores1;
    const tmp79 = includeUnpublished;
    if (screen === tmp19.SHOP_ALL) {
      const obj17 = { data: memo6, renderItem: callback1, getItemType: callback2, keyExtractor: tmp83, initialScrollIndex: memo7, onViewableItemsChanged: tmp84 };
      tmp83 = undefined;
      const tmp5Result17 = tmp5(tmp2[54]);
      if (improvedLoading) {
        tmp83 = callback3;
      }
      tmp84 = undefined;
      if (improvedLoading) {
        tmp84 = callback4;
      }
      tmp77Result = tmp77(tmp5Result17, obj17);
    } else if (screen === tmp19.ORBS) {
      const obj18 = { shopBlocks, fetchShopHomeError, onRenderFirstOrbsItem: callback6, getItemType: callback7 };
      const tmp5Result18 = tmp5(tmp2[55]);
      if (fetchShopHomeError == null) {
        fetchShopHomeError = null;
      }
      tmp77Result = tmp77(tmp5Result18, obj18);
    } else {
      const obj19 = { children: currentUserIfAvailable(tmp5(tmp2[54]), obj20) };
      const CollectiblesCoachmarkScrollDismissProvider = tmp(tmp2[56]).CollectiblesCoachmarkScrollDismissProvider;
      obj20 = { data: shopBlocks, renderItem: callback5, getItemType: callback7 };
      tmp77Result = tmp77(CollectiblesCoachmarkScrollDismissProvider, obj19);
    }
    items26 = [currentUserIfAvailable(tmp79, obj14), currentUserIfAvailable(tmp5(tmp2[57]), {})];
    return currentUserIfAvailable(AnalyticsLocationProvider, obj12);
  }
}
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };
