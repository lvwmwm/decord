// Module ID: 14351
// Function ID: 108360
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14351 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    return importDefault(dependencyMap[12]).COLLECTIBLES_SHOP_INDEX_PAGE;
  } else if (constants.ORBS === screen) {
    return importDefault(dependencyMap[12]).COLLECTIBLES_SHOP_ORBS_TAB;
  } else {
    const FEATURED_PAGE = constants.FEATURED_PAGE;
    return importDefault(dependencyMap[12]).COLLECTIBLES_SHOP_HOME_SCREEN;
  }
}
class CollectiblesShopV2 {
  constructor(arg0) {
    obj = closure_1(dependencyMap[22]);
    nativeIAPPayments = obj.useNativeIAPPayments();
    nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
    arg1 = nativePaymentsConnected;
    tmp2 = closure_19();
    obj2 = arg1(dependencyMap[15]);
    items = [];
    items[0] = closure_9;
    stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
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
    tmp5 = closure_3(importAll.useState(false), 2);
    first = tmp5[0];
    closure_1 = tmp5[1];
    items1 = [];
    items1[0] = nativePaymentsConnected;
    effect = importAll.useEffect(() => {
      if (!timeout) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          callback(true);
        }, 10000);
        return () => clearTimeout(closure_0);
      }
    }, items1);
    obj4 = arg1(dependencyMap[20]);
    isIOSResult = obj4.isIOS();
    if (isIOSResult) {
      tmp9 = arg1;
      tmp10 = dependencyMap;
      num = 44;
      isIOSResult = !arg1(dependencyMap[44]).isStable;
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
      tmp14 = closure_1;
      tmp15 = dependencyMap;
      num2 = 37;
      obj6 = closure_1(dependencyMap[37]);
      tmp16 = arg1;
      obj7 = arg1(dependencyMap[20]);
      str2 = "collectibles mobile shop failed to connect to native payments isIOS: ";
      num3 = 44;
      text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`;
      str3 = " isStable: ";
      captureMessageResult = obj6.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj7.isIOS()}`} isStable: ${closure_0(closure_2[44]).isStable}`);
    }
    obj1 = {};
    merged = Object.assign(global);
    obj1["storeFront"] = nativeIAPPayments.storeFront;
    obj1["screen"] = global.screen;
    tmp13 = jsx(CollectiblesShopInternal, obj1);
    return;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const FramesBannerBlockRecord = arg1(dependencyMap[7]).FramesBannerBlockRecord;
const tmp2 = arg1(dependencyMap[2]);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_12, CollectiblesMobileShopScreen: closure_13, CollectibleShopTab: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ AnalyticEvents: closure_15, PaymentGateways: closure_16 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[10]));
const tmp5 = arg1(dependencyMap[10]);
let closure_19 = arg1(dependencyMap[11]).createStyles({ rootContainer: {}, spinner: { position: "100%", top: "absolute", left: 0, right: 0, bottom: 0 } });
function CollectiblesShopInternal(analyticsSource) {
  let screen;
  let storeFront;
  analyticsSource = analyticsSource.analyticsSource;
  const arg1 = analyticsSource;
  const onNavigateAway = analyticsSource.onNavigateAway;
  const importDefault = onNavigateAway;
  ({ storeFront, screen } = analyticsSource);
  const dependencyMap = screen;
  let sessionId;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let FramesBannerBlockRecord;
  let currentUserIfAvailable;
  let stateFromStores;
  let analyticsLocations;
  let navigation;
  let constants2;
  let memo3;
  let obj = arg1(dependencyMap[13]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(arg1(dependencyMap[14]).CollectiblesShopOpenTriggerPoint);
  let obj1 = arg1(dependencyMap[15]);
  const items = [closure_10];
  const first = callback(obj1.useStateFromStoresArray(items, () => {
    const lastSuccessfulFetch = fetchShopHomeError.lastSuccessfulFetch;
    let num = 0;
    if (null != lastSuccessfulFetch) {
      num = lastSuccessfulFetch;
    }
    const items = [num];
    return items;
  }), 1)[0];
  let obj2 = arg1(dependencyMap[15]);
  const items1 = [closure_7];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ bypassGoogleSkuSync: categories.get("bypass_google_sku_sync"), noCache: categories.get("shop_disable_cache"), includeUnpublished: categories.get("shop_include_unpublished") }));
  const bypassGoogleSkuSync = stateFromStoresObject.bypassGoogleSkuSync;
  let callback = bypassGoogleSkuSync;
  const noCache = stateFromStoresObject.noCache;
  const React = noCache;
  const includeUnpublished = stateFromStoresObject.includeUnpublished;
  let str = callback3();
  let country;
  if (null != storeFront) {
    country = storeFront.country;
  }
  const tmp5 = importDefault(dependencyMap[16])(() => {
    const obj = { sessionId: analyticsSource(screen[17]).v4() };
    return obj;
  });
  sessionId = tmp5.sessionId;
  const items2 = [sessionId, screen];
  const memo = React.useMemo(() => {
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
  const tmp7Result = importDefault(dependencyMap[18])(obj, memo);
  const categories = tmp7Result.categories;
  closure_7 = categories;
  const isFetchingCategories = tmp7Result.isFetchingCategories;
  closure_8 = isFetchingCategories;
  let obj6 = arg1(dependencyMap[19]);
  if (screen === stateFromStores.ORBS) {
    let HOME = analyticsLocations.ORBS;
  } else {
    HOME = analyticsLocations.HOME;
  }
  const maybeFetchCollectiblesShopHome = obj6.useMaybeFetchCollectiblesShopHome(HOME, { noCache, includeUnpublished, logPerf: true }, memo);
  const shopBlocks = maybeFetchCollectiblesShopHome.shopBlocks;
  closure_9 = shopBlocks;
  const fetchShopHomeError = maybeFetchCollectiblesShopHome.fetchShopHomeError;
  closure_10 = fetchShopHomeError;
  const items3 = [categories, isFetchingCategories];
  const memo1 = React.useMemo(() => {
    let done;
    if (true !== isFetchingCategories) {
      if (false !== obj.isAndroid()) {
        const items = [];
        const analyticsSource = items;
        const tmp3 = callback(categories.values());
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
                const push = closure_0.push;
                const _Object = Object;
                const items = [];
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
                    const push = closure_0.push;
                    const _Object = Object;
                    const items = [];
                    HermesBuiltin.arraySpread(Object.values(googleSkuIds.googleSkuIds), 0);
                    HermesBuiltin.apply(items, closure_0);
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
      const obj = analyticsSource(screen[20]);
    }
    return [];
  }, items3);
  let obj7 = importDefault(dependencyMap[22]);
  const googleSkuIds = obj7.useGoogleSkuIds(memo1, true === isFetchingCategories);
  const isFetchingGoogleSkus = googleSkuIds.isFetchingGoogleSkus;
  FramesBannerBlockRecord = isFetchingGoogleSkus;
  const fetchError = googleSkuIds.fetchError;
  let obj8 = arg1(dependencyMap[23]);
  currentUserIfAvailable = obj8.useCurrentUserIfAvailable();
  let obj9 = arg1(dependencyMap[24]);
  const currentUserWishlist = obj9.useCurrentUserWishlist();
  let obj10 = arg1(dependencyMap[15]);
  const items4 = [closure_8];
  stateFromStores = obj10.useStateFromStores(items4, () => analyticsSource(screen[25]).isThemeDark(isFetchingCategories.theme));
  const tmp7 = importDefault(dependencyMap[18]);
  const items5 = [importDefault(dependencyMap[12]).COLLECTIBLES_SHOP, screenToAnalyticsLocation(screen)];
  analyticsLocations = importDefault(dependencyMap[26])(items5).analyticsLocations;
  let obj11 = arg1(dependencyMap[27]);
  navigation = obj11.useNavigation();
  const items6 = [navigation, onNavigateAway];
  const effect = React.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if ("RESET" !== data.data.action.type) {
      if (null != callback) {
        callback();
      }
    }
  }), items6);
  const items7 = [categories, bypassGoogleSkuSync, isFetchingGoogleSkus, isFetchingCategories];
  const memo2 = React.useMemo(() => {
    const items = [...closure_7.values()];
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
  const tmp18 = importDefault(dependencyMap[26]);
  const tmp21 = Date.now() - first > currentUserIfAvailable;
  const categoryIndex = arg1(dependencyMap[30]).useCollectiblesShopDeepLinkProps({ categories: memo2 }).categoryIndex;
  constants2 = React.useRef({ [closure_13.SHOP_ALL]: false, [closure_13.FEATURED_PAGE]: false, [closure_13.ORBS]: false });
  const items8 = [analyticsLocations, analyticsSource, sessionId, includeUnpublished, screen, noCache];
  const effect1 = React.useEffect(() => {
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
  const effect2 = React.useEffect(() => {
    if (null != currentUserIfAvailable) {
      onNavigateAway(screen[33])(currentUserIfAvailable.id);
    }
  }, items9);
  const items10 = [shopBlocks];
  memo3 = React.useMemo(() => {
    let found;
    if (null != shopBlocks) {
      found = shopBlocks.find((arg0) => arg0 instanceof closure_11);
    }
    return found;
  }, items10);
  const items11 = [sessionId, includeUnpublished, noCache, stateFromStores];
  const items12 = [sessionId, includeUnpublished, noCache, fetchShopHomeError, memo3];
  callback = React.useCallback((category) => {
    const index = category.index;
    let tmp = 0 !== index;
    if (!tmp) {
      tmp = closure_16.current[closure_13.SHOP_ALL];
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
  const callback1 = React.useCallback((index) => {
    let tmp = 0 !== index.index;
    if (!tmp) {
      tmp = closure_16.current[closure_13.FEATURED_PAGE];
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
  const callback2 = React.useCallback(() => {
    if (!closure_16.current[closure_13.ORBS]) {
      closure_16.current[stateFromStores.ORBS] = true;
      let obj = analyticsSource(screen[32]);
      obj = { sessionId, checkpoint: analyticsSource(screen[32]).CollectiblesShopPerfCheckpoint.SHOP_RENDERED, tab: stateFromStores.ORBS, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
      obj.trackShopPerf(obj);
    }
  }, items13);
  const callback3 = React.useCallback((type) => type.type, []);
  importDefault(dependencyMap[36])({ currentScreen: screen });
  if (null == currentUserIfAvailable) {
    return null;
  } else {
    if (screen !== stateFromStores.FEATURED_PAGE) {
      if (!tmp30) {
        if (tmp35) {
          importDefault(dependencyMap[37]).captureMessage("collectibles mobile shop loaded empty categories");
          const obj15 = importDefault(dependencyMap[37]);
        }
        if (null !== fetchError) {
          importDefault(dependencyMap[37]).captureMessage(`collectibles mobile shop failed to fetch google sku ids: ${fetchError}`);
          const obj16 = importDefault(dependencyMap[37]);
        }
        obj2 = { value: analyticsLocations };
        const obj3 = { newValue: tmp5 };
        const obj4 = { style: str.rootContainer };
        const obj5 = { skuIDs: [], activeSubscription: null };
        if (screen === stateFromStores.SHOP_ALL) {
          obj6 = { data: memo2, renderItem: callback };
          let tmp65;
          if (null != categoryIndex) {
            tmp65 = categoryIndex;
          }
          obj6.initialScrollIndex = tmp65;
          let tmp56Result = memo3(importDefault(dependencyMap[40]), obj6);
          const tmp61 = memo3;
          const tmp64 = importDefault(dependencyMap[40]);
        } else if (screen === stateFromStores.ORBS) {
          obj7 = { shopBlocks };
          let tmp60 = null;
          if (null != fetchShopHomeError) {
            tmp60 = fetchShopHomeError;
          }
          obj7.fetchShopHomeError = tmp60;
          obj7.onRenderFirstOrbsItem = callback2;
          obj7.getItemType = callback3;
          tmp56Result = memo3(importDefault(dependencyMap[41]), obj7);
          const tmp56 = memo3;
          const tmp59 = importDefault(dependencyMap[41]);
        } else {
          obj8 = {};
          obj9 = { data: shopBlocks, renderItem: callback1, getItemType: callback3 };
          obj8.children = memo3(importDefault(dependencyMap[40]), obj9);
          tmp56Result = memo3(arg1(dependencyMap[42]).CollectiblesCoachmarkScrollDismissProvider, obj8);
        }
        obj5.children = tmp56Result;
        obj4.children = memo3(arg1(dependencyMap[39]).NativePaymentContextProvider, obj5);
        const items14 = [memo3(sessionId, obj4), memo3(importDefault(dependencyMap[43]), {})];
        obj3.children = items14;
        obj2.children = closure_18(arg1(dependencyMap[38]).CollectiblesAnalyticsProvider, obj3);
        let tmp42Result = memo3(arg1(dependencyMap[26]).AnalyticsLocationProvider, obj2);
        const tmp35 = first > 0 && false === isFetchingCategories && 0 === categories.size;
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
    const tmp30 = 0 === memo2.length || tmp21;
  }
}
const obj = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[45]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopV2.tsx");

export default CollectiblesShopV2;
export { CollectiblesShopV2 };
