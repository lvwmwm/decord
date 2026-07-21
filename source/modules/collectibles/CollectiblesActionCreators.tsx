// Module ID: 6768
// Function ID: 53173
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: areRequestOptionsEqual, claimCollectiblesCategoryReward, claimPremiumCollectiblesProduct, closeCollectiblesShop, fetchCollectiblesCategories, fetchCollectiblesMarketings, fetchCollectiblesPurchases, fetchCollectiblesShopHome, isCollectiblesShopOpen, maybeFetchCollectiblesProduct, maybeFetchCollectiblesShopTabLayout, openCollectiblesShop, productDetailsOpened, seedCollectiblesProductFromStandaloneLoad, setShopHomeConfigOverride, setShopLayoutUrlOverride, setSkipNumCategories, validateCollectiblesRecipient, validateCollectiblesRecipientsBatch

// Module 6768 (_createForOfIteratorHelperLoose)
let Routes;
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
function openCollectiblesShop(arg0) {
  const obj = Object.create(null);
  obj.tab = 0;
  openCollectiblesShopMobile(Object.assign(arg0, obj));
}
function openCollectiblesShopMobile(screen) {
  dispatchOpenCollectiblesShop(screen);
  let obj = arg1(dependencyMap[16]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      screen = screen.screen;
      if (null != screen) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        screen = undefined;
        if (null != currentRoute) {
          const params = currentRoute.params;
          if (null != params) {
            screen = params.screen;
          }
        }
        if (screen !== screen) {
          obj = { screen: constants2.COLLECTIBLES_SHOP };
          obj = { analyticsSource: screen.analyticsSource, screen, onNavigateAway: screen.onNavigateAway };
          obj.params = obj;
          const obj1 = { name: "settings", params: obj };
          rootNavigationRef.navigate(obj1);
        }
      } else if (null != screen.initialProductSkuId) {
        let FEATURED_PAGE = constants.SHOP_ALL;
      } else {
        FEATURED_PAGE = constants.FEATURED_PAGE;
      }
    }
  }
}
function dispatchOpenCollectiblesShop(screen) {
  let obj = importDefault(dependencyMap[17]);
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  const merged = Object.assign(screen);
  obj.dispatch(obj);
}
function closeCollectiblesShop() {
  importDefault(dependencyMap[17]).dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" });
  const obj = importDefault(dependencyMap[17]);
  arg1(dependencyMap[18]).popLayer();
}
function areOptionalBooleansEqual(arg0, arg1) {
  return Boolean(arg0) === Boolean(arg1);
}
async function _fetchCollectiblesCategories(noCache, noOp, sessionId, arg3) {
  let obj = callback2(closure_2[17]);
  obj = { type: "COLLECTIBLES_CATEGORIES_FETCH", options: null != noCache ? noCache : {} };
  obj.dispatch(obj);
  let obj2 = callback(closure_2[19]);
  const fetchCollectiblesOptionsQuery = obj2.buildFetchCollectiblesOptionsQuery(tmp);
  const value = closure_4.get("shop_show_debug_overlay");
  let logPerf = null != tmp;
  if (logPerf) {
    logPerf = tmp.logPerf;
  }
  if (logPerf) {
    let obj3 = callback(closure_2[20]);
    obj = {};
    sessionId = undefined;
    if (null != sessionId) {
      sessionId = sessionId.sessionId;
    }
    obj.sessionId = sessionId;
    obj.checkpoint = callback(closure_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_STARTED;
    let tab;
    if (null != sessionId) {
      tab = sessionId.tab;
    }
    obj.tab = tab;
    let includeUnpublished;
    if (null != tmp) {
      includeUnpublished = tmp.includeUnpublished;
    }
    obj.unpublishedCategoriesShown = includeUnpublished;
    noCache = undefined;
    if (null != tmp) {
      noCache = tmp.noCache;
    }
    obj.cacheDisabled = noCache;
    obj3.trackShopPerf(obj);
  }
  if (value) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    callback3("fetchCollectiblesCategories started: " + JSON.stringify(fetchCollectiblesOptionsQuery, null, 2));
  }
  const HTTP = callback(closure_2[21]).HTTP;
  const tmp27 = yield HTTP.get({ url: obj.COLLECTIBLES_CATEGORIES_V2, query: fetchCollectiblesOptionsQuery, rejectWithError: true });
  let logPerf2 = tmp28;
  if (null != noCache) {
    logPerf2 = tmp.logPerf;
  }
  if (logPerf2) {
    obj2 = {};
    let sessionId1;
    if (null != sessionId) {
      sessionId1 = sessionId.sessionId;
    }
    obj2.sessionId = sessionId1;
    obj2.checkpoint = callback(closure_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_COMPLETED;
    let tab1;
    if (null != sessionId) {
      tab1 = sessionId.tab;
    }
    obj2.tab = tab1;
    let includeUnpublished1;
    if (null != tmp) {
      includeUnpublished1 = tmp.includeUnpublished;
    }
    obj2.unpublishedCategoriesShown = includeUnpublished1;
    let noCache1;
    if (null != tmp) {
      noCache1 = noCache.noCache;
    }
    obj2.cacheDisabled = noCache1;
    callback(closure_2[20]).trackShopPerf(obj2);
    const obj7 = callback(closure_2[20]);
  }
  if (value) {
    const _HermesInternal2 = HermesInternal;
    callback3("fetchCollectiblesCategories completed " + tmp27.body.categories.length + " categories");
  }
  obj3 = { type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: closure_10.fromServer(tmp27.body), noOp };
  callback2(closure_2[17]).dispatch(obj3);
}
function fetchCollectiblesPurchases() {
  return _fetchCollectiblesPurchases(...arguments);
}
async function _fetchCollectiblesPurchases() {
  if (!isFetching.isFetching) {
    let obj = callback2(closure_2[17]);
    obj = { type: "COLLECTIBLES_PURCHASES_FETCH" };
    obj.dispatch(obj);
    const value = closure_4.get("shop_show_debug_overlay");
    if (value) {
      callback3("fetchCollectiblesPurchases started");
    }
    obj = { url: constants.COLLECTIBLES_PURCHASES, rejectWithError: true };
    const obj1 = { variants_return_style: callback(closure_2[24]).ShopVariantsReturnStyle.VARIANTS_GROUP };
    obj.query = obj1;
    if (value) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      callback3("fetchCollectiblesPurchases request: " + JSON.stringify(tmp12, null, 2));
    }
    const HTTP = callback(closure_2[21]).HTTP;
    const tmp21 = yield HTTP.get(obj);
    if (value) {
      const _HermesInternal2 = HermesInternal;
      callback3("fetchCollectiblesPurchases completed with " + tmp22.body.length + " purchases");
    }
    const obj2 = { type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS" };
    const body = tmp21.body;
    obj2.purchases = body.map(fromServer.fromServer);
    callback2(closure_2[17]).dispatch(obj2);
    const obj5 = callback2(closure_2[17]);
  }
}
function fetchCollectiblesProduct(selectedSkuId, arg1) {
  return _fetchCollectiblesProduct(...arguments);
}
async function _fetchCollectiblesProduct(skuId, countryCode, arg2) {
  let obj = callback2(closure_2[17]);
  obj = { type: "COLLECTIBLES_PRODUCT_FETCH", skuId, startedAt: Date.now() };
  obj.dispatch(obj);
  obj = { locale: locale.locale };
  countryCode = undefined;
  if (null != countryCode) {
    countryCode = countryCode.countryCode;
  }
  if (null !== countryCode) {
    let countryCode1;
    if (null != countryCode) {
      countryCode1 = countryCode.countryCode;
    }
    tmp3.country_code = countryCode1;
  }
  let paymentGateway;
  if (null != countryCode) {
    paymentGateway = countryCode.paymentGateway;
  }
  if (null !== paymentGateway) {
    let paymentGateway1;
    if (null != countryCode) {
      paymentGateway1 = countryCode.paymentGateway;
    }
    tmp3.payment_gateway = paymentGateway1;
  }
  let includeBundles;
  if (null != countryCode) {
    includeBundles = countryCode.includeBundles;
  }
  if (null !== includeBundles) {
    let includeBundles1;
    if (null != countryCode) {
      includeBundles1 = countryCode.includeBundles;
    }
    tmp3.include_bundles = includeBundles1;
  }
  const HTTP = callback(closure_2[21]).HTTP;
  const obj1 = { url: closure_16.COLLECTIBLES_PRODUCTS(skuId), rejectWithError: true, query: obj };
  const tmp21 = yield HTTP.get({ url: closure_16.COLLECTIBLES_PRODUCTS(skuId), rejectWithError: true, query: obj });
  const obj5 = callback2(closure_2[17]);
  obj5.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId, product: closure_12.fromServer(tmp21.body), endedAt: Date.now() });
}
async function _maybeFetchCollectiblesProduct(arg0, arg1, arg2) {
  let isFetchingProductResult = closure_6.isFetchingProduct(arg0);
  if (!isFetchingProductResult) {
    isFetchingProductResult = closure_6.isProductFetchBackedOff(arg0);
  }
  if (!isFetchingProductResult) {
    return yield closure_25(arg0, arg1);
  }
}
function claimPremiumCollectiblesProduct(skuId) {
  return _claimPremiumCollectiblesProduct(...arguments);
}
async function _claimPremiumCollectiblesProduct(skuId, arg1) {
  let obj = callback2(closure_2[17]);
  obj = { type: "COLLECTIBLES_CLAIM", skuId };
  obj.dispatch(obj);
  const HTTP = callback(closure_2[21]).HTTP;
  obj = { url: constants.COLLECTIBLES_CLAIM, body: obj1, rejectWithError: true };
  const obj1 = { sku_id: skuId };
  const tmp = skuId;
  const tmp3 = yield HTTP.put(obj);
  const obj2 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: tmp };
  const body = tmp3.body;
  let mapped;
  if (null != body) {
    mapped = body.map(fromServer.fromServer);
  }
  obj2.purchases = mapped;
  callback2(closure_2[17]).dispatch(obj2);
}
async function _validateCollectiblesRecipient(recipient_id, sku_id, arg2) {
  const HTTP = callback(closure_2[21]).HTTP;
  let obj = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENT, query: obj, rejectWithError: true };
  obj = { sku_id, recipient_id };
  return yield HTTP.get(obj).body.valid;
}
async function _validateCollectiblesRecipientsBatch(recipient_id, sku_ids, arg2) {
  const HTTP = callback(closure_2[21]).HTTP;
  let obj = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH, query: obj, rejectWithError: true };
  obj = { sku_ids, recipient_id };
  return yield HTTP.get(obj).body;
}
async function _fetchCollectiblesMarketings(arg0, arg1) {
  const fn = function*(release) {
    let PROD = release.release;
    if (PROD === undefined) {
      PROD = callback(closure_2[26]).CollectiblesMarketingReleaseType.PROD;
    }
    yield undefined;
    let obj = callback2(closure_2[17]);
    obj.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
    obj = { platform: callback(closure_2[27]).CollectiblesMarketingPlatform.MOBILE };
    if (PROD !== callback(closure_2[26]).CollectiblesMarketingReleaseType.PROD) {
      obj.release = PROD;
    }
    const HTTP = callback(closure_2[21]).HTTP;
    obj = { url: constants.COLLECTIBLES_MARKETING, query: obj, rejectWithError: true };
    const tmp6 = yield HTTP.get(obj);
    const obj4 = callback2(closure_2[17]);
    obj4.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: closure_11.fromServer(tmp6.body) });
  };
  fn.next();
  return fn;
}
async function _fetchCollectiblesShopHome(tab, noCache, sessionId, arg3) {
  let obj = callback2(closure_2[17]);
  obj = { type: "COLLECTIBLES_SHOP_HOME_FETCH", tab, options: null != noCache ? noCache : {} };
  obj.dispatch(obj);
  let obj2 = callback(closure_2[19]);
  let logPerf = null != tmp2;
  const fetchCollectiblesOptionsQuery = obj2.buildFetchCollectiblesOptionsQuery(tmp2, tmp);
  if (logPerf) {
    logPerf = tmp2.logPerf;
  }
  if (logPerf) {
    let obj3 = callback(closure_2[20]);
    obj = {};
    sessionId = undefined;
    if (null != sessionId) {
      sessionId = sessionId.sessionId;
    }
    obj.sessionId = sessionId;
    obj.checkpoint = callback(closure_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_STARTED;
    tab = undefined;
    if (null != sessionId) {
      tab = sessionId.tab;
    }
    obj.tab = tab;
    let includeUnpublished;
    if (null != tmp2) {
      includeUnpublished = tmp2.includeUnpublished;
    }
    obj.unpublishedCategoriesShown = includeUnpublished;
    noCache = undefined;
    if (null != tmp2) {
      noCache = tmp2.noCache;
    }
    obj.cacheDisabled = noCache;
    obj3.trackShopPerf(obj);
  }
  const HTTP = callback(closure_2[21]).HTTP;
  let logPerf2 = tmp24;
  if (null != noCache) {
    logPerf2 = tmp2.logPerf;
  }
  if (logPerf2) {
    obj2 = {};
    let sessionId1;
    if (null != sessionId) {
      sessionId1 = sessionId.sessionId;
    }
    obj2.sessionId = sessionId1;
    obj2.checkpoint = callback(closure_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_COMPLETED;
    let tab1;
    if (null != sessionId) {
      tab1 = sessionId.tab;
    }
    obj2.tab = tab1;
    let includeUnpublished1;
    if (null != tmp2) {
      includeUnpublished1 = tmp2.includeUnpublished;
    }
    obj2.unpublishedCategoriesShown = includeUnpublished1;
    let noCache1;
    if (null != tmp2) {
      noCache1 = noCache.noCache;
    }
    obj2.cacheDisabled = noCache1;
    callback(closure_2[20]).trackShopPerf(obj2);
    const obj7 = callback(closure_2[20]);
  }
  const obj1 = { url: constants.COLLECTIBLES_SHOP, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
  const tmp23 = yield HTTP.get({ url: constants.COLLECTIBLES_SHOP, query: fetchCollectiblesOptionsQuery, rejectWithError: true });
  obj3 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: tmp, shopHome: closure_14.fromServer(tmp23.body) };
  callback2(closure_2[17]).dispatch(obj3);
}
async function _claimCollectiblesCategoryReward(category_id, skuId, arg2) {
  let obj = callback2(closure_2[17]);
  obj = { type: "COLLECTIBLES_CLAIM", skuId };
  obj.dispatch(obj);
  const HTTP = callback(closure_2[21]).HTTP;
  obj = { url: constants.COLLECTIBLES_CLAIM_CATEGORY_REWARD, body: obj1, rejectWithError: true };
  const obj1 = { category_id };
  const tmp = skuId;
  const tmp3 = yield HTTP.put(obj);
  const obj2 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: tmp };
  const body = tmp3.body;
  let mapped;
  if (null != body) {
    mapped = body.map(fromServer.fromServer);
  }
  obj2.purchases = mapped;
  callback2(closure_2[17]).dispatch(obj2);
}
async function _maybeFetchCollectiblesShopTabLayout(arg0, arg1) {
  const fn = function*(arg0) {
    let abortSignal;
    let tab;
    ({ tab, abortSignal } = arg0);
    yield undefined;
    if (!closure_9.isFetchingLayout(tab)) {
      const layoutFetchError = closure_9.getLayoutFetchError(tab);
      let status;
      if (null != layoutFetchError) {
        status = layoutFetchError.status;
      }
      if (404 !== status) {
        let status1;
        if (null != layoutFetchError) {
          status1 = layoutFetchError.status;
        }
        if (429 !== status1) {
          let obj = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab };
          callback2(closure_2[17]).dispatch(obj);
          const HTTP = callback(closure_2[21]).HTTP;
          obj = { url: closure_16.COLLECTIBLES_SHOP_TAB_LAYOUT(tab), rejectWithError: true, signal: abortSignal };
          const obj3 = callback2(closure_2[17]);
          obj = callback2(closure_2[17]);
          const obj1 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab, layoutId: yield HTTP.get(obj).body.layout_id };
          obj.dispatch(obj1);
          const tmp18 = yield HTTP.get(obj);
        }
      }
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const addDebugLog = arg1(dependencyMap[4]).addDebugLog;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = arg1(dependencyMap[7]).CollectiblesCategoriesRecord;
let closure_11 = arg1(dependencyMap[8]).CollectiblesMarketingsRecord;
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = arg1(dependencyMap[11]).CollectiblesShopHomeRecord;
let closure_15 = arg1(dependencyMap[12]).CollectiblesMobileShopScreen;
({ Endpoints: closure_16, Routes, UserSettingsSections: closure_17 } = arg1(dependencyMap[13]));
arg1(dependencyMap[14]);
arg1(dependencyMap[15]);
const tmp2 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/collectibles/CollectiblesActionCreators.tsx");

export default { openCollectiblesShop, closeCollectiblesShop, fetchCollectiblesPurchases, fetchCollectiblesProduct, claimPremiumCollectiblesProduct };
export { openCollectiblesShop };
export { openCollectiblesShopMobile };
export const isCollectiblesShopOpen = function isCollectiblesShopOpen() {
  const rootNavigationRef = arg1(dependencyMap[16]).getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = null != function findExistingCollectiblesShopRoute(rootNavigationRef) {
      function isCollectiblesShopRoute(value) {
        let tmp = "settings" === value.name;
        if (tmp) {
          const params = value.params;
          let screen;
          if (null != params) {
            screen = params.screen;
          }
          tmp = screen === constants.COLLECTIBLES_SHOP;
        }
        if (tmp) {
          let tmp7 = null == closure_0;
          if (!tmp7) {
            const params2 = value.params;
            let screen1;
            if (null != params2) {
              const params3 = params2.params;
              if (null != params3) {
                screen1 = params3.screen;
              }
            }
            tmp7 = screen1 === closure_0;
          }
          tmp = tmp7;
        }
        return tmp;
      }
      const rootState = rootNavigationRef.getRootState();
      if (null != rootState) {
        if (rootState.routes) {
          function searchRoutes(routes) {
            const tmp = callback(routes);
            const iter = tmp();
            let iter2 = iter;
            if (!iter.done) {
              const value = iter2.value;
              while (!isCollectiblesShopRoute(value)) {
                let state = value.state;
                let tmp4 = tmp2;
                if (null != state) {
                  tmp4 = tmp2;
                  if (state.routes) {
                    let tmp5 = searchRoutes;
                    let tmp6 = searchRoutes(value.state.routes);
                    tmp4 = tmp6;
                    if (tmp6) {
                      return tmp6;
                    }
                  }
                }
                let iter3 = tmp();
                let tmp2 = tmp4;
                iter2 = iter3;
              }
              return value;
            }
            return null;
          }
          return searchRoutes(rootState.routes);
        }
      }
      return null;
    }(rootNavigationRef);
  }
  return tmp2;
};
export { dispatchOpenCollectiblesShop };
export { closeCollectiblesShop };
export const productDetailsOpened = function productDetailsOpened(skuId) {
  let obj = importDefault(dependencyMap[17]);
  obj = { type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId };
  obj.dispatch(obj);
};
export const areRequestOptionsEqual = function areRequestOptionsEqual(noCache, noCache2) {
  noCache = undefined;
  if (null != noCache) {
    noCache = noCache.noCache;
  }
  let noCache1;
  if (null != noCache2) {
    noCache1 = noCache2.noCache;
  }
  let tmp5Result = areOptionalBooleansEqual(noCache, noCache1);
  if (tmp5Result) {
    let includeUnpublished;
    if (null != noCache) {
      includeUnpublished = noCache.includeUnpublished;
    }
    let includeUnpublished1;
    if (null != noCache2) {
      includeUnpublished1 = noCache2.includeUnpublished;
    }
    tmp5Result = areOptionalBooleansEqual(includeUnpublished, includeUnpublished1);
    const tmp5 = areOptionalBooleansEqual;
  }
  if (tmp5Result) {
    let includeBundles;
    if (null != noCache) {
      includeBundles = noCache.includeBundles;
    }
    let includeBundles1;
    if (null != noCache2) {
      includeBundles1 = noCache2.includeBundles;
    }
    tmp5Result = areOptionalBooleansEqual(includeBundles, includeBundles1);
    const tmp8 = areOptionalBooleansEqual;
  }
  if (tmp5Result) {
    let includeDynamicBlocks;
    if (null != noCache) {
      includeDynamicBlocks = noCache.includeDynamicBlocks;
    }
    let includeDynamicBlocks1;
    if (null != noCache2) {
      includeDynamicBlocks1 = noCache2.includeDynamicBlocks;
    }
    tmp5Result = areOptionalBooleansEqual(includeDynamicBlocks, includeDynamicBlocks1);
    const tmp11 = areOptionalBooleansEqual;
  }
  if (tmp5Result) {
    let countryCode;
    if (null != noCache) {
      countryCode = noCache.countryCode;
    }
    let countryCode1;
    if (null != noCache2) {
      countryCode1 = noCache2.countryCode;
    }
    tmp5Result = countryCode === countryCode1;
  }
  if (tmp5Result) {
    let paymentGateway;
    if (null != noCache) {
      paymentGateway = noCache.paymentGateway;
    }
    let paymentGateway1;
    if (null != noCache2) {
      paymentGateway1 = noCache2.paymentGateway;
    }
    tmp5Result = paymentGateway === paymentGateway1;
  }
  if (tmp5Result) {
    let shopHomeConfig;
    if (null != noCache) {
      shopHomeConfig = noCache.shopHomeConfig;
    }
    let shopHomeConfig1;
    if (null != noCache2) {
      shopHomeConfig1 = noCache2.shopHomeConfig;
    }
    tmp5Result = shopHomeConfig === shopHomeConfig1;
  }
  if (tmp5Result) {
    let skipNumCategories;
    if (null != noCache) {
      skipNumCategories = noCache.skipNumCategories;
    }
    let skipNumCategories1;
    if (null != noCache2) {
      skipNumCategories1 = noCache2.skipNumCategories;
    }
    tmp5Result = skipNumCategories === skipNumCategories1;
  }
  return tmp5Result;
};
export const fetchCollectiblesCategories = function fetchCollectiblesCategories(arg0, arg1, arg2) {
  return _fetchCollectiblesCategories(...arguments);
};
export { fetchCollectiblesPurchases };
export { fetchCollectiblesProduct };
export const maybeFetchCollectiblesProduct = function maybeFetchCollectiblesProduct(skuId) {
  return _maybeFetchCollectiblesProduct(...arguments);
};
export const seedCollectiblesProductFromStandaloneLoad = function seedCollectiblesProductFromStandaloneLoad(arg0) {
  let iter2;
  const timestamp = Date.now();
  let obj = arg1(dependencyMap[25]);
  const items = [arg0];
  const tmp2 = _createForOfIteratorHelperLoose(obj.extendVariantsProducts(items));
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp3 = closure_6;
      if (null == closure_6.getProduct(value.skuId)) {
        let tmp4 = closure_1;
        let tmp5 = closure_2;
        let obj2 = closure_1(closure_2[17]);
        obj = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: value.skuId, product: value, endedAt: timestamp };
        let dispatchResult = obj2.dispatch(obj);
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
};
export { claimPremiumCollectiblesProduct };
export const validateCollectiblesRecipient = function validateCollectiblesRecipient(arg0, skuId) {
  return _validateCollectiblesRecipient(...arguments);
};
export const validateCollectiblesRecipientsBatch = function validateCollectiblesRecipientsBatch() {
  return _validateCollectiblesRecipientsBatch(...arguments);
};
export const fetchCollectiblesMarketings = function fetchCollectiblesMarketings(arg0) {
  return _fetchCollectiblesMarketings(...arguments);
};
export const fetchCollectiblesShopHome = function fetchCollectiblesShopHome(arg0, arg1, arg2) {
  return _fetchCollectiblesShopHome(...arguments);
};
export const setShopHomeConfigOverride = function setShopHomeConfigOverride(shopHomeConfigOverride) {
  let obj = importDefault(dependencyMap[17]);
  obj = { type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride };
  obj.dispatch(obj);
};
export const setShopLayoutUrlOverride = function setShopLayoutUrlOverride(shopLayoutUrlOverride) {
  let obj = importDefault(dependencyMap[17]);
  obj = { type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride };
  obj.dispatch(obj);
};
export const setSkipNumCategories = function setSkipNumCategories(skipNumCategories) {
  let obj = importDefault(dependencyMap[17]);
  obj = { type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories };
  obj.dispatch(obj);
};
export const claimCollectiblesCategoryReward = function claimCollectiblesCategoryReward() {
  return _claimCollectiblesCategoryReward(...arguments);
};
export const maybeFetchCollectiblesShopTabLayout = function maybeFetchCollectiblesShopTabLayout() {
  return _maybeFetchCollectiblesShopTabLayout(...arguments);
};
