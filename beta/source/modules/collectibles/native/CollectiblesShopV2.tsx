// Module ID: 15420
// Function ID: 15421
// Name: CollectiblesShopV2
// Dependencies: [32, 19, 17, 4835, 1182, 1372, 6962, 1076, 1074, 2042, 21, 4836, 6603, 12997, 15421, 504, 5910, 1255, 10198, 15422, 1364, 6973, 8667, 7623, 8238, 4685, 6583, 1485, 8313, 4501, 15424, 4654, 2029, 4488, 15425, 1241, 7009, 7632, 15426, 15427, 15429, 15454, 1231, 8229, 10282, 15457, 15458, 15432, 15459, 5180, 2]

// Module 15420 (CollectiblesShopV2)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4501 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7009 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8313 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 8667 */;
import ShopNitroUpsellBanner2 from "ShopNitroUpsellBanner" /* 15426 */;
import ShopCategory from "ShopCategory" /* 15427 */;
import CollectiblesShopFeaturedPageDefault from "CollectiblesShopFeaturedPage" /* 15429 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserStore from "UserStore" /* 1372 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let constants, navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
let unpackModuleId;
const SentryUtilsDefault = tmp(1231);
const MobileNitroUpsellInShopFeedExperimentDefault = tmp(15425);
class CollectiblesShopV2 {
  constructor(screen) {
    let currentUser;
    let tmp9;
    const obj = NativePaymentHooksDefault;
    const nativeIAPPayments = obj.useNativeIAPPayments();
    const nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    const storeFront = nativeIAPPayments.storeFront;
    const items = [UserStore];
    const tmp4 = closure_19();
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
    const tmp5Result = nativePaymentsConnected(1364);
    const tmp11 = tmp5Result.isIOS() && !nativePaymentsConnected(5180).isStable && isStaffResult;
    if (!nativePaymentsConnected) {
      if (!tmp11) {
        let tmp14;
        if (!tmp9) {
          const obj3 = { style: tmp4.spinner, size: "large" };
          tmp14 = closure_17(closure_5, obj3);
        }
        return tmp14;
      }
    }
    if (tmp9) {
      const captureMessage = SentryUtilsDefault.captureMessage;
      SentryUtilsDefault;
      nativePaymentsConnected(1364);
      const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`;
      captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj6.isIOS()}`} isStable: ${nativePaymentsConnected(5180).isStable}`);
    }
    const obj4 = { storeFront, screen: screen.screen };
    const merged = Object.assign(screen);
    tmp14 = closure_17(CollectiblesShopInternal, obj4);
  }
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: unpackModuleId, CollectiblesMobileShopScreen: closure_12, CollectibleShopTab: map1 } = CollectiblesShopConstants);
({ AnalyticEvents: closure_14, PaymentGateways: closure_15 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
let closure_20 = { CATEGORY: "category", NITRO_UPSELL: "nitro_upsell" };
function CollectiblesShopInternal(analyticsSource) {
  let COLLECTIBLES_SHOP_HOME_SCREEN;
  let CollectiblesAnalyticsProvider;
  let HOME;
  let NativePaymentContextProvider;
  let fetchShopHomeError;
  let items17;
  let obj11;
  let obj15;
  let obj7;
  let obj9;
  let screen;
  let shopBlocks;
  let storeFront;
  let tmp52Result;
  let tmp53;
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  let bypassGoogleSkuSync;
  let sessionId;
  let categories;
  let isFetchingCategories;
  fetchShopHomeError = undefined;
  let isFetchingGoogleSkus;
  let currentUserIfAvailable;
  let stateFromStores;
  let analyticsLocations;
  navigation = undefined;
  let memo2;
  let categoryIndex;
  let first1;
  let closure_18;
  let first2;
  constants = undefined;
  let dismiss;
  let memo3;
  let closure_23;
  let tmp = analyticsSource;
  let tmp2 = screen;
  let obj = analyticsSource(screen[13]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(analyticsSource(screen[14]).CollectiblesShopOpenTriggerPoint);
  let obj2 = analyticsSource(screen[15]);
  let items = [isFetchingGoogleSkus];
  const tmp4 = bypassGoogleSkuSync;
  const first = bypassGoogleSkuSync(obj2.useStateFromStoresArray(items, () => {
    let num = isFetchingGoogleSkus.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj3 = analyticsSource(screen[15]);
  let items1 = [categories];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    const obj = { bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"), noCache: categories.get("shop_disable_cache"), includeUnpublished: categories.get("shop_include_unpublished") };
    return obj;
  });
  bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  const tmp7 = first2();
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  const tmp9 = onNavigateAway;
  const tmp10 = onNavigateAway(tmp2[16])(() => {
    let obj2;
    const obj = { sessionId: obj2.v4() };
    obj2 = analyticsSource(screen[17]);
    return obj;
  });
  sessionId = tmp10.sessionId;
  const items2 = [sessionId, screen];
  const memo = noCache.useMemo(() => {
    let FEATURED_PAGE;
    const obj = { sessionId, tab: FEATURED_PAGE };
    FEATURED_PAGE = screen;
    if (screen == null) {
      FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
    }
    return obj;
  }, items2);
  const obj5 = { paymentGateway: memo2.APPLE, logPerf: true };
  const tmp12 = onNavigateAway(tmp2[18]);
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
  let tmpResult = tmp(tmp2[19]);
  let tmp16 = stateFromStores;
  const useMaybeFetchCollectiblesShopHome = tmpResult.useMaybeFetchCollectiblesShopHome;
  if (screen === stateFromStores.ORBS) {
    let tmp18 = analyticsLocations;
    HOME = analyticsLocations.ORBS;
  } else {
    let tmp17 = analyticsLocations;
    HOME = analyticsLocations.HOME;
  }
  const maybeFetchCollectiblesShopHome = useMaybeFetchCollectiblesShopHome(HOME, { noCache, includeUnpublished, logPerf: true }, memo);
  ({ shopBlocks, fetchShopHomeError } = maybeFetchCollectiblesShopHome);
  const items3 = [categories, isFetchingCategories];
  const isFetchingShopHome = maybeFetchCollectiblesShopHome.isFetchingShopHome;
  const memo1 = obj4.useMemo(() => {
    if (true !== isFetchingCategories) {
      let tmp2 = dependencyMap;
      let obj = PlatformUtils;
      if (false !== obj.isAndroid()) {
        let items = [];
        const values = categories.values();
        for (const item10017 of values) {
          let products = item10017.products;
          let item = products.forEach((googleSkuIds) => {
            let tmp2 = undefined !== googleSkuIds.googleSkuIds;
            if (tmp2) {
              tmp2 = null !== googleSkuIds.googleSkuIds;
            }
            if (tmp2) {
              let push = items.push;
              let _Object = Object;
              items = [];
              HermesBuiltin.arraySpread(items, Object.values(googleSkuIds.googleSkuIds), 0);
              HermesBuiltin.apply(push, items, items);
            }
            const obj = analyticsSource(screen[21]);
            if (obj.getIsVariantProduct(googleSkuIds)) {
              const variants = googleSkuIds.variants;
              const item = variants.forEach((googleSkuIds) => {
                const tmp2 = undefined !== googleSkuIds.googleSkuIds && null !== googleSkuIds.googleSkuIds;
                if (tmp2) {
                  const push = navigation.push;
                  const _Object = Object;
                  items = [];
                  HermesBuiltin.arraySpread(items, Object.values(googleSkuIds.googleSkuIds), 0);
                  HermesBuiltin.apply(push, items, navigation);
                }
              });
            }
          });
          continue;
        }
        return items;
      }
    }
    return [];
  }, items3);
  const tmp9Result = tmp9(tmp2[22]);
  const googleSkuIds = tmp9Result.useGoogleSkuIds(memo1, true === isFetchingCategories);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  const tmpResult7 = tmp(tmp2[23]);
  currentUserIfAvailable = tmpResult7.useCurrentUserIfAvailable();
  const tmpResult8 = tmp(tmp2[24]);
  const currentUserWishlist = tmpResult8.useCurrentUserWishlist();
  const items4 = [isFetchingCategories];
  const tmpResult9 = tmp(tmp2[15]);
  stateFromStores = tmpResult9.useStateFromStores(items4, () => {
    const obj = analyticsSource(screen[25]);
    return obj.isThemeDark(isFetchingCategories.theme);
  });
  const items5 = [, ];
  const tmp9Result6 = tmp9(tmp2[26]);
  items5[0] = tmp9(tmp2[12]).COLLECTIBLES_SHOP;
  if (tmp16.SHOP_ALL === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[12]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (tmp16.ORBS === screen) {
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[12]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    let FEATURED_PAGE = tmp16.FEATURED_PAGE;
    COLLECTIBLES_SHOP_HOME_SCREEN = tmp9(tmp2[12]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
  items5[1] = COLLECTIBLES_SHOP_HOME_SCREEN;
  analyticsLocations = tmp9Result6(items5).analyticsLocations;
  const tmpResult10 = tmp(tmp2[27]);
  navigation = tmpResult10.useNavigation();
  const items6 = [navigation, onNavigateAway];
  const effect = obj4.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (onNavigateAway != null) {
        tmp();
      }
    }
  }), items6);
  const items7 = [categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  memo2 = obj4.useMemo(() => {
    const items = [...categories.values()];
    const filterHiddenCategories = collectibles_CollectiblesUtils.filterHiddenCategories;
    collectibles_CollectiblesUtils;
    let result = items;
    const obj = BillingPlatformUtils;
    if (obj.isGooglePlayBillingSupported()) {
      result = items;
      if (!bypassGoogleSkuSync) {
        result = items;
        if (!isFetchingGoogleSkus) {
          result = items;
          if (!isFetchingCategories) {
            const tmpResult = collectibles_CollectiblesUtils;
            result = tmpResult.filterGPlaySyncedCategories(items);
          }
        }
      }
    }
    return filterHiddenCategories(result);
  }, items7);
  const tmp28 = Date.now() - first > currentUserIfAvailable;
  const tmpResult11 = tmp(tmp2[30]);
  categoryIndex = tmpResult11.useCollectiblesShopDeepLinkProps({ categories: memo2 }).categoryIndex;
  const useState = obj4.useState;
  const tmpResult12 = tmp(tmp2[31]);
  const tmp4Result = tmp4(useState(tmpResult12.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[32]).DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL)), 2);
  first1 = tmp4Result[0];
  closure_18 = tmp31;
  const items8 = [currentUserIfAvailable, screen, first1];
  const tmp4Result2 = tmp4(noCache.useMemo(() => {
    const obj = PremiumUtilsDefault;
    if (!obj.canUseShopDiscounts(currentUserIfAvailable)) {
      if (screen === stateFromStores.SHOP_ALL) {
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
  }, items8), 2);
  first2 = tmp4Result2[0];
  constants = tmp34;
  const items9 = [tmp4Result[1]];
  dismiss = obj4.useCallback(() => {
    closure_18(true);
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction: ContentDismissActionType.USER_DISMISS };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_SHOP_BROWSE_ALL_NITRO_UPSELL, obj2);
  }, items9);
  const items10 = [memo2, first2];
  memo3 = obj4.useMemo(() => {
    const mapped = memo2.map((category, categoryIndex) => ({ kind: constants.CATEGORY, category, categoryIndex }));
    const tmp = first2 && mapped.length > 0;
    if (tmp) {
      const obj = { kind: constants.NITRO_UPSELL };
      mapped.splice(1, 0, obj);
    }
    return mapped;
  }, items10);
  const items11 = [categoryIndex, memo3.length, memo2.length];
  const memo4 = obj4.useMemo(() => {
    if (null != categoryIndex) {
      let sum = tmp;
      if (memo3.length > memo2.length) {
        sum = tmp;
        if (categoryIndex >= 1) {
          sum = tmp + 1;
        }
      }
      return sum;
    }
  }, items11);
  closure_23 = obj4.useRef({ [tmp16.SHOP_ALL]: false, [tmp16.FEATURED_PAGE]: false, [tmp16.ORBS]: false });
  const items12 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect1 = obj4.useEffect(() => {
    let str;
    let FEATURED_PAGE = screen;
    const obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: analyticsSource, page_type: str };
    str = "home";
    const tmp = null == screen || FEATURED_PAGE === stateFromStores.FEATURED_PAGE || FEATURED_PAGE === stateFromStores.SHOP_ALL;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_VIEWED = navigation.COLLECTIBLES_SHOP_VIEWED;
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
      FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
    }
    trackShopPerf(obj2);
  }, items12);
  const items13 = [currentUserIfAvailable];
  const effect2 = obj4.useEffect(() => {
    if (null != currentUserIfAvailable) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items13);
  const items14 = [sessionId, includeUnpublished, noCache, stateFromStores, dismiss, tmp4Result2[1]];
  const callback1 = obj4.useCallback((item) => {
    let GET_NITRO;
    let tmp18Result;
    item = item.item;
    if (item.kind === stateFromStores.NITRO_UPSELL) {
      const obj2 = { isDarkTheme: stateFromStores, dismiss, buttonVariant: GET_NITRO };
      GET_NITRO = stateFromStores;
      const ShopNitroUpsellBanner = ShopNitroUpsellBanner2.ShopNitroUpsellBanner;
      const tmp18 = first1;
      const tmp19 = require;
      if (stateFromStores == null) {
        GET_NITRO = tmp19(15425).NitroUpsellBannerButtonVariant.GET_NITRO;
      }
      tmp18Result = tmp18(ShopNitroUpsellBanner, obj2);
    } else {
      const tmp3 = 0 !== item.categoryIndex || closure_23.current[stateFromStores.SHOP_ALL];
      if (!tmp3) {
        closure_23.current[stateFromStores.SHOP_ALL] = true;
        const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: stateFromStores.SHOP_ALL, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
        const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
        CollectiblesPerfLogging;
        trackShopPerf(obj);
      }
      const obj3 = { category: item.category, isDarkTheme: stateFromStores, index: item.categoryIndex };
      tmp18Result = first1(ShopCategory.ShopCategory, obj3);
    }
    return tmp18Result;
  }, items14);
  const items15 = [sessionId, includeUnpublished, noCache, fetchShopHomeError];
  const callback2 = obj4.useCallback((kind) => kind.kind, []);
  const items16 = [sessionId, includeUnpublished, noCache];
  const callback3 = obj4.useCallback((index) => {
    let tmp17;
    let tmp = 0 !== index.index;
    const item = index.item;
    if (!tmp) {
      tmp = closure_23.current[stateFromStores.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_23.current[stateFromStores.FEATURED_PAGE] = true;
      const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: stateFromStores.FEATURED_PAGE, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
      CollectiblesPerfLogging;
      trackShopPerf(obj);
    }
    const obj2 = { shopBlock: item, fetchShopHomeError: tmp17 };
    tmp17 = fetchShopHomeError;
    const tmp15 = closure_17;
    const tmp16 = CollectiblesShopFeaturedPageDefault;
    if (fetchShopHomeError == null) {
      tmp17 = null;
    }
    return tmp15(tmp16, obj2);
  }, items15);
  const callback4 = obj4.useCallback(() => {
    if (!closure_23.current[stateFromStores.ORBS]) {
      closure_23.current[stateFromStores.ORBS] = true;
      const obj = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: stateFromStores.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
      CollectiblesPerfLogging;
      trackShopPerf(obj);
    }
  }, items16);
  const callback5 = obj4.useCallback((type) => type.type, []);
  tmp9(tmp2[41])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    let tmp48;
    let num = 0;
    const tmp45 = 0 === memo2.length || tmp28;
    if (screen !== tmp16.FEATURED_PAGE) {
      let tmp52Result2;
      if (!tmp45) {
        const tmp49 = first > 0 && false === isFetchingCategories && 0 === categories.size;
        if (tmp49) {
          let str = "collectibles mobile shop loaded empty categories";
          const tmp9Result7 = tmp9(tmp2[42]);
          tmp9Result7.captureMessage("collectibles mobile shop loaded empty categories");
        }
        if (null !== fetchError) {
          const tmp9Result8 = tmp9(tmp2[42]);
          tmp9Result8.captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
        }
        const obj8 = { value: analyticsLocations, children: tmp53(CollectiblesAnalyticsProvider, obj9) };
        const AnalyticsLocationProvider = tmp(tmp2[26]).AnalyticsLocationProvider;
        obj9 = { newValue: tmp10, children: items17 };
        const obj10 = { style: tmp7.rootContainer, children: first1(NativePaymentContextProvider, obj11) };
        CollectiblesAnalyticsProvider = tmp(tmp2[43]).CollectiblesAnalyticsProvider;
        obj11 = { skuIDs: [], activeSubscription: null, children: tmp52Result };
        NativePaymentContextProvider = tmp(tmp2[44]).NativePaymentContextProvider;
        tmp53 = closure_18;
        const tmp54 = sessionId;
        if (screen === tmp16.SHOP_ALL) {
          const obj12 = { data: memo3, renderItem: callback1, getItemType: callback2, initialScrollIndex: memo4 };
          const tmp9Result9 = tmp9(tmp2[45]);
          tmp52Result = tmp52(tmp9Result9, obj12);
        } else if (screen === tmp16.ORBS) {
          const obj13 = { shopBlocks, fetchShopHomeError, onRenderFirstOrbsItem: callback4, getItemType: callback5 };
          const tmp9Result10 = tmp9(tmp2[46]);
          if (fetchShopHomeError == null) {
            fetchShopHomeError = null;
          }
          tmp52Result = tmp52(tmp9Result10, obj13);
        } else {
          const obj14 = { children: first1(tmp9(tmp2[45]), obj15) };
          const CollectiblesCoachmarkScrollDismissProvider = tmp(tmp2[47]).CollectiblesCoachmarkScrollDismissProvider;
          obj15 = { data: shopBlocks, renderItem: callback3, getItemType: callback5 };
          tmp52Result = tmp52(CollectiblesCoachmarkScrollDismissProvider, obj14);
        }
        items17 = [first1(tmp54, obj10), first1(tmp9(tmp2[48]), {})];
        tmp52Result2 = tmp52(AnalyticsLocationProvider, obj8);
      } else {
        const obj16 = { style: tmp7.spinner, size: "large" };
        tmp52Result2 = first1(includeUnpublished, obj16);
      }
      tmp48 = tmp52Result2;
      return tmp48;
    }
    if (isFetchingShopHome) {
      const obj17 = { style: tmp7.spinner, size: "large" };
      tmp48 = first1(includeUnpublished, obj17);
    }
  }
}
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };
