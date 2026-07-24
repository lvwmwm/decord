// Module ID: 14523
// Function ID: 110879
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 4129, 1278, 1849, 6774, 6810, 655, 653, 33, 4130, 5482, 12397, 14524, 566, 5450, 491, 7948, 14525, 477, 6785, 7433, 8708, 8717, 3976, 5462, 1456, 8760, 3789, 14527, 675, 6824, 7975, 14528, 14530, 14553, 1184, 8707, 8808, 14556, 14557, 14533, 14558, 6837, 2]

// Module 14523 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import expandLocation from "expandLocation";
import get_ActivityIndicator from "useNavigation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { FramesBannerBlockRecord } from "FramesBannerBlockRecord";
import items from "items";
import ME from "ME";
import jsxProd from "maybeFetchUserProfile";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_5;
let closure_6;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function screenToAnalyticsLocation(screen) {
  if (constants.SHOP_ALL === screen) {
    return importDefault(5482).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (constants.ORBS === screen) {
    return importDefault(5482).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    const FEATURED_PAGE = constants.FEATURED_PAGE;
    return importDefault(5482).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
}
class CollectiblesShopV2 {
  constructor(arg0) {
    obj = require("notSupported");
    nativeIAPPayments = obj.useNativeIAPPayments();
    nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    tmp2 = c19();
    obj2 = require("initialize");
    items = [];
    items[0] = c9;
    stateFromStores = obj2.useStateFromStores(items, () => outer1_9.getCurrentUser());
    isStaffResult = undefined;
    if (null != stateFromStores) {
      isStaffResult = stateFromStores.isStaff();
    }
    if (!isStaffResult) {
      isStaffPersonalResult = undefined;
      if (null != stateFromStores) {
        isStaffPersonalResult = stateFromStores.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    tmp5 = _slicedToArray(expandLocation.useState(false), 2);
    first = tmp5[0];
    c1 = tmp5[1];
    items1 = [];
    items1[0] = nativePaymentsConnected;
    effect = expandLocation.useEffect(() => {
      if (!timeout) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          outer1_1(true);
        }, 10000);
        return () => clearTimeout(closure_0);
      }
    }, items1);
    obj4 = require("set");
    isIOSResult = obj4.isIOS();
    if (isIOSResult) {
      tmp9 = nativePaymentsConnected;
      tmp10 = closure_2;
      num = 44;
      isIOSResult = !require("isStable").isStable;
    }
    if (isIOSResult) {
      isIOSResult = isStaffResult;
    }
    if (!nativePaymentsConnected) {
      if (!isIOSResult) {
        if (!first) {
          tmp11 = jsx;
          tmp12 = ActivityIndicator;
          obj = {};
          obj.style = tmp2.spinner;
          str = "large";
          obj.size = "large";
          tmp13 = jsx(ActivityIndicator, obj);
        }
        return tmp13;
      }
    }
    if (first) {
      first = !nativePaymentsConnected;
    }
    if (first) {
      tmp14 = c1;
      tmp15 = closure_2;
      num2 = 37;
      obj6 = require("isNonEmptyString");
      tmp16 = nativePaymentsConnected;
      obj7 = require("set");
      str2 = "collectibles mobile shop failed to connect to native payments isIOS: ";
      num3 = 44;
      text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
      str3 = " isStable: ";
      captureMessageResult = obj6.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${require("isStable").isStable}`);
    }
    obj1 = {};
    merged = Object.assign(global);
    obj1["storeFront"] = nativeIAPPayments.storeFront;
    obj1["screen"] = global.screen;
    tmp13 = jsx(CollectiblesShopInternal, obj1);
    return;
  }
}
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_12, CollectiblesMobileShopScreen: closure_13, CollectibleShopTab: closure_14 } = items);
({ AnalyticEvents: closure_15, PaymentGateways: closure_16 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = _createForOfIteratorHelperLoose.createStyles({ rootContainer: { height: "100%", width: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -8, marginLeft: -8 } });
function CollectiblesShopInternal(analyticsSource) {
  let screen;
  let storeFront;
  analyticsSource = analyticsSource.analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  let sessionId;
  let categories;
  let isFetchingCategories;
  let shopBlocks;
  let fetchShopHomeError;
  let isFetchingGoogleSkus;
  let currentUserIfAvailable;
  let stateFromStores;
  let analyticsLocations;
  let navigation;
  let constants2;
  let memo3;
  let obj = analyticsSource(screen[13]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(analyticsSource(screen[14]).CollectiblesShopOpenTriggerPoint);
  let obj1 = analyticsSource(screen[15]);
  let items = [fetchShopHomeError];
  const first = bypassGoogleSkuSync(obj1.useStateFromStoresArray(items, () => {
    const lastSuccessfulFetch = fetchShopHomeError.lastSuccessfulFetch;
    let num = 0;
    if (null != lastSuccessfulFetch) {
      num = lastSuccessfulFetch;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj2 = analyticsSource(screen[15]);
  const items1 = [categories];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"), noCache: categories.get("shop_disable_cache"), includeUnpublished: categories.get("shop_include_unpublished") }));
  bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  let str = callback3();
  let country;
  if (null != storeFront) {
    country = storeFront.country;
  }
  const tmp5 = onNavigateAway(screen[16])(() => {
    const obj = { sessionId: analyticsSource(screen[17]).v4() };
    return obj;
  });
  sessionId = tmp5.sessionId;
  const items2 = [sessionId, screen];
  const memo = noCache.useMemo(() => {
    const obj = { sessionId };
    if (null != screen) {
      let FEATURED_PAGE = screen;
    } else {
      FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
    }
    obj.tab = FEATURED_PAGE;
    return obj;
  }, items2);
  obj = { paymentGateway: constants2.APPLE };
  if (null != country) {
    obj = { countryCode: country };
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj["logPerf"] = true;
  const tmp7Result = onNavigateAway(screen[18])(obj, memo);
  categories = tmp7Result.categories;
  isFetchingCategories = tmp7Result.isFetchingCategories;
  let obj6 = analyticsSource(screen[19]);
  if (screen === stateFromStores.ORBS) {
    let HOME = analyticsLocations.ORBS;
  } else {
    HOME = analyticsLocations.HOME;
  }
  const maybeFetchCollectiblesShopHome = obj6.useMaybeFetchCollectiblesShopHome(HOME, { noCache, includeUnpublished, logPerf: true }, memo);
  shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  fetchShopHomeError = maybeFetchCollectiblesShopHome.fetchShopHomeError;
  const items3 = [categories, isFetchingCategories];
  const memo1 = noCache.useMemo(() => {
    let done;
    if (true !== isFetchingCategories) {
      if (false !== obj.isAndroid()) {
        const items = [];
        const tmp3 = outer1_21(categories.values());
        let iter = tmp3();
        if (!iter.done) {
          do {
            let products = iter.value.products;
            let item = products.forEach((googleSkuIds) => {
              let tmp = undefined !== googleSkuIds.googleSkuIds;
              if (tmp) {
                tmp = null !== googleSkuIds.googleSkuIds;
              }
              if (tmp) {
                let push = closure_0.push;
                let _Object = Object;
                let items = [];
                HermesBuiltin.arraySpread(Object.values(googleSkuIds.googleSkuIds), 0);
                HermesBuiltin.apply(items, closure_0);
              }
              if (obj.getIsVariantProduct(googleSkuIds)) {
                const variants = googleSkuIds.variants;
                const item = variants.forEach((googleSkuIds) => {
                  let tmp = undefined !== googleSkuIds.googleSkuIds;
                  if (tmp) {
                    tmp = null !== googleSkuIds.googleSkuIds;
                  }
                  if (tmp) {
                    const push = outer1_0.push;
                    const _Object = Object;
                    const items = [];
                    HermesBuiltin.arraySpread(Object.values(googleSkuIds.googleSkuIds), 0);
                    HermesBuiltin.apply(items, outer1_0);
                  }
                });
              }
            });
            let iter2 = tmp3();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        return items;
      }
      obj = analyticsSource(screen[20]);
    }
    return [];
  }, items3);
  let obj7 = onNavigateAway(screen[22]);
  const googleSkuIds = obj7.useGoogleSkuIds(memo1, true === isFetchingCategories);
  isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  let obj8 = analyticsSource(screen[23]);
  currentUserIfAvailable = obj8.useCurrentUserIfAvailable();
  let obj9 = analyticsSource(screen[24]);
  const currentUserWishlist = obj9.useCurrentUserWishlist();
  let obj10 = analyticsSource(screen[15]);
  const items4 = [isFetchingCategories];
  stateFromStores = obj10.useStateFromStores(items4, () => analyticsSource(screen[25]).isThemeDark(isFetchingCategories.theme));
  const tmp7 = onNavigateAway(screen[18]);
  const items5 = [onNavigateAway(screen[12]).COLLECTIBLES_SHOP, screenToAnalyticsLocation(screen)];
  analyticsLocations = onNavigateAway(screen[26])(items5).analyticsLocations;
  let obj11 = analyticsSource(screen[27]);
  navigation = obj11.useNavigation();
  const items6 = [navigation, onNavigateAway];
  const effect = noCache.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (null != outer1_1) {
        outer1_1();
      }
    }
  }), items6);
  const items7 = [categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  const memo2 = noCache.useMemo(() => {
    const items = [...categories.values()];
    const obj = analyticsSource(screen[28]);
    let result = items;
    if (obj2.isGooglePlayBillingSupported()) {
      result = items;
      if (!bypassGoogleSkuSync) {
        result = items;
        if (!isFetchingGoogleSkus) {
          result = items;
          if (!isFetchingCategories) {
            result = analyticsSource(screen[28]).filterGPlaySyncedCategories(items);
            const obj3 = analyticsSource(screen[28]);
          }
        }
      }
    }
    return obj.filterHiddenCategories(result);
  }, items7);
  const tmp18 = onNavigateAway(screen[26]);
  const tmp21 = Date.now() - first > currentUserIfAvailable;
  const categoryIndex = analyticsSource(screen[30]).useCollectiblesShopDeepLinkProps({ categories: memo2 }).categoryIndex;
  constants2 = noCache.useRef({ [closure_13.SHOP_ALL]: false, [closure_13.FEATURED_PAGE]: false, [closure_13.ORBS]: false });
  const items8 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect1 = noCache.useEffect(() => {
    let tmp = null == screen;
    if (!tmp) {
      tmp = screen === stateFromStores.FEATURED_PAGE;
    }
    if (!tmp) {
      tmp = screen === stateFromStores.SHOP_ALL;
    }
    let obj = onNavigateAway(screen[31]);
    obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: analyticsSource };
    let str = "home";
    if (!tmp) {
      str = screen;
    }
    obj.page_type = str;
    obj.track(navigation.COLLECTIBLES_SHOP_VIEWED, obj);
    obj = { sessionId, checkpoint: analyticsSource(screen[32]).CollectiblesShopPerfCheckpoint.SHOP_MOUNTED };
    if (null != screen) {
      let FEATURED_PAGE = screen;
    } else {
      FEATURED_PAGE = stateFromStores.FEATURED_PAGE;
    }
    obj.tab = FEATURED_PAGE;
    obj.unpublishedCategoriesShown = includeUnpublished;
    obj.cacheDisabled = noCache;
    analyticsSource(screen[32]).trackShopPerf(obj);
  }, items8);
  const items9 = [currentUserIfAvailable];
  const effect2 = noCache.useEffect(() => {
    if (null != currentUserIfAvailable) {
      onNavigateAway(screen[33])(currentUserIfAvailable.id);
    }
  }, items9);
  const items10 = [shopBlocks];
  memo3 = noCache.useMemo(() => {
    let found;
    if (null != shopBlocks) {
      found = shopBlocks.find((arg0) => arg0 instanceof isFetchingGoogleSkus);
    }
    return found;
  }, items10);
  const items11 = [sessionId, includeUnpublished, noCache, stateFromStores];
  const items12 = [sessionId, includeUnpublished, noCache, fetchShopHomeError, memo3];
  const callback = noCache.useCallback((category) => {
    const index = category.index;
    let tmp = 0 !== index;
    if (!tmp) {
      tmp = closure_16.current[stateFromStores.SHOP_ALL];
    }
    if (!tmp) {
      closure_16.current[stateFromStores.SHOP_ALL] = true;
      let obj = analyticsSource(screen[32]);
      obj = { sessionId, checkpoint: analyticsSource(screen[32]).CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: stateFromStores.SHOP_ALL, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      obj.trackShopPerf(obj);
    }
    obj = { category: category.item, isDarkTheme: stateFromStores, index };
    return memo3(analyticsSource(screen[34]).ShopCategory, obj);
  }, items11);
  const items13 = [sessionId, includeUnpublished, noCache];
  const callback1 = noCache.useCallback((index) => {
    let tmp = 0 !== index.index;
    if (!tmp) {
      tmp = closure_16.current[stateFromStores.FEATURED_PAGE];
    }
    if (!tmp) {
      closure_16.current[stateFromStores.FEATURED_PAGE] = true;
      let obj = analyticsSource(screen[32]);
      obj = { sessionId, checkpoint: analyticsSource(screen[32]).CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: stateFromStores.FEATURED_PAGE, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      obj.trackShopPerf(obj);
    }
    obj = { shopBlock: index.item };
    let tmp15 = null;
    if (null != fetchShopHomeError) {
      tmp15 = fetchShopHomeError;
    }
    obj.fetchShopHomeError = tmp15;
    obj.framesBannerBlock = memo3;
    return memo3(onNavigateAway(screen[35]), obj);
  }, items12);
  const callback2 = noCache.useCallback(() => {
    if (!closure_16.current[stateFromStores.ORBS]) {
      closure_16.current[stateFromStores.ORBS] = true;
      let obj = analyticsSource(screen[32]);
      obj = { sessionId, checkpoint: analyticsSource(screen[32]).CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: stateFromStores.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      obj.trackShopPerf(obj);
    }
  }, items13);
  callback3 = noCache.useCallback((type) => type.type, []);
  onNavigateAway(screen[36])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    if (screen !== stateFromStores.FEATURED_PAGE) {
      if (!tmp30) {
        if (tmp35) {
          onNavigateAway(screen[37]).captureMessage("collectibles mobile shop loaded empty categories");
          const obj15 = onNavigateAway(screen[37]);
        }
        if (null !== fetchError) {
          onNavigateAway(screen[37]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
          const obj16 = onNavigateAway(screen[37]);
        }
        obj2 = { value: analyticsLocations };
        let obj3 = { newValue: tmp5 };
        const obj4 = { style: str.rootContainer };
        const obj5 = { skuIDs: [], activeSubscription: null };
        if (screen === stateFromStores.SHOP_ALL) {
          obj6 = { data: memo2, renderItem: callback };
          let tmp65;
          if (null != categoryIndex) {
            tmp65 = categoryIndex;
          }
          obj6.initialScrollIndex = tmp65;
          let tmp56Result = memo3(onNavigateAway(screen[40]), obj6);
          const tmp61 = memo3;
          const tmp64 = onNavigateAway(screen[40]);
        } else if (screen === stateFromStores.ORBS) {
          obj7 = { shopBlocks };
          let tmp60 = null;
          if (null != fetchShopHomeError) {
            tmp60 = fetchShopHomeError;
          }
          obj7.fetchShopHomeError = tmp60;
          obj7.onRenderFirstOrbsItem = callback2;
          obj7.getItemType = callback3;
          tmp56Result = memo3(onNavigateAway(screen[41]), obj7);
          const tmp56 = memo3;
          const tmp59 = onNavigateAway(screen[41]);
        } else {
          obj8 = {};
          obj9 = { data: shopBlocks, renderItem: callback1, getItemType: callback3 };
          obj8.children = memo3(onNavigateAway(screen[40]), obj9);
          tmp56Result = memo3(analyticsSource(screen[42]).CollectiblesCoachmarkScrollDismissProvider, obj8);
        }
        obj5.children = tmp56Result;
        obj4.children = memo3(analyticsSource(screen[39]).NativePaymentContextProvider, obj5);
        const items14 = [memo3(sessionId, obj4), memo3(onNavigateAway(screen[43]), {})];
        obj3.children = items14;
        obj2.children = closure_18(analyticsSource(screen[38]).CollectiblesAnalyticsProvider, obj3);
        let tmp42Result = memo3(analyticsSource(screen[26]).AnalyticsLocationProvider, obj2);
        tmp35 = first > 0 && false === isFetchingCategories && 0 === categories.size;
        const tmp42 = memo3;
        const tmp45 = closure_18;
        const tmp46 = memo3;
        const tmp47 = sessionId;
        const tmp48 = memo3;
      }
      obj10 = { style: str.spinner };
      str = "large";
      obj10.size = "large";
      tmp42Result = memo3(includeUnpublished, obj10);
    }
    if (maybeFetchCollectiblesShopHome.isFetchingShopHome) {
      obj11 = { style: str.spinner, size: "large" };
      return memo3(includeUnpublished, obj11);
    }
    tmp30 = 0 === memo2.length || tmp21;
  }
}
let result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };
