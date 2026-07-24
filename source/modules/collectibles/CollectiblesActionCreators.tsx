// Module ID: 6773
// Function ID: 53246
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 4129, 1921, 6774, 6789, 6790, 6791, 6792, 6796, 6776, 6802, 6803, 655, 653, 6819, 6820, 3982, 686, 6821, 6822, 6824, 507, 4029, 5734, 6823, 6786, 6825, 6826, 2]
// Exports: areRequestOptionsEqual, claimCollectiblesCategoryReward, claimPremiumCollectiblesProduct, closeCollectiblesShop, fetchCollectiblesCategories, fetchCollectiblesMarketings, fetchCollectiblesPurchases, fetchCollectiblesShopHome, isCollectiblesShopOpen, maybeFetchCollectiblesProduct, maybeFetchCollectiblesShopTabLayout, openCollectiblesShop, productDetailsOpened, seedCollectiblesProductFromStandaloneLoad, setShopHomeConfigOverride, setShopLayoutUrlOverride, setSkipNumCategories, validateCollectiblesRecipient, validateCollectiblesRecipientsBatch

// Module 6773 (_createForOfIteratorHelperLoose)
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { addDebugLog } from "useCollectiblesDebugStore";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { CollectiblesCategoriesRecord as closure_10 } from "CollectiblesCategoriesRecord";
import { CollectiblesMarketingsRecord as closure_11 } from "CollectiblesMarketingsRecord";
import _callSuper from "_callSuper";
import CollectiblesPurchaseRecord from "CollectiblesPurchaseRecord";
import { CollectiblesShopHomeRecord as closure_14 } from "CollectiblesShopHomeRecord";
import { CollectiblesMobileShopScreen as closure_15 } from "items";
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let Routes;
let closure_16;
let closure_17;
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
function openCollectiblesShop(arg0) {
  const obj = Object.create(null);
  obj.tab = 0;
  openCollectiblesShopMobile(Object.assign(arg0, obj));
}
function openCollectiblesShopMobile(screen) {
  dispatchOpenCollectiblesShop(screen);
  let obj = require(3982) /* getRootNavigationRef */;
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
  let obj = importDefault(686);
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  const merged = Object.assign(screen);
  obj.dispatch(obj);
}
function closeCollectiblesShop() {
  importDefault(686).dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" });
  const obj = importDefault(686);
  require(6821) /* pushLayer */.popLayer();
}
function areOptionalBooleansEqual(arg0, arg1) {
  return Boolean(arg0) === Boolean(arg1);
}
async function _fetchCollectiblesCategories(arg0, arg1, arg2, arg3) {
  let obj = outer2_1(outer2_2[17]);
  obj = { type: "COLLECTIBLES_CATEGORIES_FETCH", options: null != arg0 ? arg0 : {} };
  obj.dispatch(obj);
  let obj2 = outer2_0(outer2_2[19]);
  const fetchCollectiblesOptionsQuery = obj2.buildFetchCollectiblesOptionsQuery(tmp);
  const value = outer2_4.get("shop_show_debug_overlay");
  let logPerf = null != tmp;
  if (logPerf) {
    logPerf = tmp.logPerf;
  }
  if (logPerf) {
    let obj3 = outer2_0(outer2_2[20]);
    obj = {};
    let sessionId;
    if (null != arg2) {
      sessionId = arg2.sessionId;
    }
    obj.sessionId = sessionId;
    obj.checkpoint = outer2_0(outer2_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_STARTED;
    let tab;
    if (null != arg2) {
      tab = arg2.tab;
    }
    obj.tab = tab;
    let includeUnpublished;
    if (null != tmp) {
      includeUnpublished = tmp.includeUnpublished;
    }
    obj.unpublishedCategoriesShown = includeUnpublished;
    let noCache;
    if (null != tmp) {
      noCache = tmp.noCache;
    }
    obj.cacheDisabled = noCache;
    obj3.trackShopPerf(obj);
  }
  if (value) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    outer2_7("fetchCollectiblesCategories started: " + JSON.stringify(fetchCollectiblesOptionsQuery, null, 2));
  }
  const HTTP = outer2_0(outer2_2[21]).HTTP;
  const tmp27 = yield HTTP.get({ url: outer2_16.COLLECTIBLES_CATEGORIES_V2, query: fetchCollectiblesOptionsQuery, rejectWithError: true });
  let logPerf2 = tmp28;
  if (null != arg0) {
    logPerf2 = tmp.logPerf;
  }
  if (logPerf2) {
    obj2 = {};
    let sessionId1;
    if (null != arg2) {
      sessionId1 = arg2.sessionId;
    }
    obj2.sessionId = sessionId1;
    obj2.checkpoint = outer2_0(outer2_2[20]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_COMPLETED;
    let tab1;
    if (null != arg2) {
      tab1 = arg2.tab;
    }
    obj2.tab = tab1;
    let includeUnpublished1;
    if (null != tmp) {
      includeUnpublished1 = tmp.includeUnpublished;
    }
    obj2.unpublishedCategoriesShown = includeUnpublished1;
    let noCache1;
    if (null != tmp) {
      noCache1 = arg0.noCache;
    }
    obj2.cacheDisabled = noCache1;
    outer2_0(outer2_2[20]).trackShopPerf(obj2);
    const obj7 = outer2_0(outer2_2[20]);
  }
  if (value) {
    const _HermesInternal2 = HermesInternal;
    outer2_7("fetchCollectiblesCategories completed " + tmp27.body.categories.length + " categories");
  }
  obj3 = { type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: outer2_10.fromServer(tmp27.body), noOp: arg1 };
  outer2_1(outer2_2[17]).dispatch(obj3);
}
function fetchCollectiblesPurchases() {
  return _fetchCollectiblesPurchases(...arguments);
}
async function _fetchCollectiblesPurchases() {
  if (!outer2_8.isFetching) {
    let obj = outer2_1(outer2_2[17]);
    obj = { type: "COLLECTIBLES_PURCHASES_FETCH" };
    obj.dispatch(obj);
    const value = outer2_4.get("shop_show_debug_overlay");
    if (value) {
      outer2_7("fetchCollectiblesPurchases started");
    }
    obj = { url: outer2_16.COLLECTIBLES_PURCHASES, rejectWithError: true };
    const obj1 = { variants_return_style: outer2_0(outer2_2[24]).ShopVariantsReturnStyle.VARIANTS_GROUP };
    obj.query = obj1;
    if (value) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      outer2_7("fetchCollectiblesPurchases request: " + JSON.stringify(tmp12, null, 2));
    }
    const HTTP = outer2_0(outer2_2[21]).HTTP;
    const tmp21 = yield HTTP.get(obj);
    if (value) {
      const _HermesInternal2 = HermesInternal;
      outer2_7("fetchCollectiblesPurchases completed with " + tmp22.body.length + " purchases");
    }
    const obj2 = { type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS" };
    const body = tmp21.body;
    obj2.purchases = body.map(outer2_13.fromServer);
    outer2_1(outer2_2[17]).dispatch(obj2);
    const obj5 = outer2_1(outer2_2[17]);
  }
}
function fetchCollectiblesProduct(closure_0, arg1) {
  return _fetchCollectiblesProduct(...arguments);
}
async function _fetchCollectiblesProduct(arg0, arg1, arg2) {
  let obj = outer2_1(outer2_2[17]);
  obj = { type: "COLLECTIBLES_PRODUCT_FETCH", skuId: arg0, startedAt: Date.now() };
  obj.dispatch(obj);
  obj = { locale: outer2_5.locale };
  let countryCode;
  if (null != arg1) {
    countryCode = arg1.countryCode;
  }
  if (null !== countryCode) {
    let countryCode1;
    if (null != arg1) {
      countryCode1 = arg1.countryCode;
    }
    tmp3.country_code = countryCode1;
  }
  let paymentGateway;
  if (null != arg1) {
    paymentGateway = arg1.paymentGateway;
  }
  if (null !== paymentGateway) {
    let paymentGateway1;
    if (null != arg1) {
      paymentGateway1 = arg1.paymentGateway;
    }
    tmp3.payment_gateway = paymentGateway1;
  }
  let includeBundles;
  if (null != arg1) {
    includeBundles = arg1.includeBundles;
  }
  if (null !== includeBundles) {
    let includeBundles1;
    if (null != arg1) {
      includeBundles1 = arg1.includeBundles;
    }
    tmp3.include_bundles = includeBundles1;
  }
  const HTTP = outer2_0(outer2_2[21]).HTTP;
  const obj1 = { url: outer2_16.COLLECTIBLES_PRODUCTS(arg0), rejectWithError: true, query: obj };
  const tmp21 = yield HTTP.get({ url: outer2_16.COLLECTIBLES_PRODUCTS(arg0), rejectWithError: true, query: obj });
  const obj5 = outer2_1(outer2_2[17]);
  obj5.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: arg0, product: outer2_12.fromServer(tmp21.body), endedAt: Date.now() });
}
async function _maybeFetchCollectiblesProduct(arg0, arg1, arg2) {
  let isFetchingProductResult = outer2_6.isFetchingProduct(arg0);
  if (!isFetchingProductResult) {
    isFetchingProductResult = outer2_6.isProductFetchBackedOff(arg0);
  }
  if (!isFetchingProductResult) {
    return yield outer2_25(arg0, arg1);
  }
}
function claimPremiumCollectiblesProduct(skuId) {
  return _claimPremiumCollectiblesProduct(...arguments);
}
async function _claimPremiumCollectiblesProduct(arg0, arg1) {
  let obj = outer2_1(outer2_2[17]);
  obj = { type: "COLLECTIBLES_CLAIM", skuId: arg0 };
  obj.dispatch(obj);
  const HTTP = outer2_0(outer2_2[21]).HTTP;
  obj = { url: outer2_16.COLLECTIBLES_CLAIM, body: obj1, rejectWithError: true };
  obj1 = { sku_id: arg0 };
  const tmp = arg0;
  const tmp3 = yield HTTP.put(obj);
  const obj2 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: tmp };
  const body = tmp3.body;
  let mapped;
  if (null != body) {
    mapped = body.map(outer2_13.fromServer);
  }
  obj2.purchases = mapped;
  outer2_1(outer2_2[17]).dispatch(obj2);
}
async function _validateCollectiblesRecipient(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[21]).HTTP;
  obj = { url: outer2_16.COLLECTIBLES_VALID_GIFT_RECIPIENT, query: obj, rejectWithError: true };
  obj = { sku_id: arg1, recipient_id: arg0 };
  return yield HTTP.get(obj).body.valid;
}
async function _validateCollectiblesRecipientsBatch(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[21]).HTTP;
  obj = { url: outer2_16.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH, query: obj, rejectWithError: true };
  obj = { sku_ids: arg1, recipient_id: arg0 };
  return yield HTTP.get(obj).body;
}
async function _fetchCollectiblesMarketings(arg0, arg1) {
  let iter = (function*(release) {
    let PROD = release.release;
    if (PROD === undefined) {
      PROD = outer2_0(outer2_2[26]).CollectiblesMarketingReleaseType.PROD;
    }
    yield undefined;
    let obj = outer2_1(outer2_2[17]);
    obj.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
    obj = { platform: outer2_0(outer2_2[27]).CollectiblesMarketingPlatform.MOBILE };
    if (PROD !== outer2_0(outer2_2[26]).CollectiblesMarketingReleaseType.PROD) {
      obj.release = PROD;
    }
    const HTTP = outer2_0(outer2_2[21]).HTTP;
    obj = { url: outer2_16.COLLECTIBLES_MARKETING, query: obj, rejectWithError: true };
    const tmp6 = yield HTTP.get(obj);
    const obj4 = outer2_1(outer2_2[17]);
    obj4.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: outer2_11.fromServer(tmp6.body) });
  })();
  iter.next();
  return iter;
}
async function _fetchCollectiblesShopHome(arg0, arg1, arg2, arg3) {
  let obj = outer2_1(outer2_2[17]);
  obj = { type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: arg0, options: null != arg1 ? arg1 : {} };
  obj.dispatch(obj);
  let obj2 = outer2_0(outer2_2[19]);
  let logPerf = null != tmp2;
  const fetchCollectiblesOptionsQuery = obj2.buildFetchCollectiblesOptionsQuery(tmp2, tmp);
  if (logPerf) {
    logPerf = tmp2.logPerf;
  }
  if (logPerf) {
    let obj3 = outer2_0(outer2_2[20]);
    obj = {};
    let sessionId;
    if (null != arg2) {
      sessionId = arg2.sessionId;
    }
    obj.sessionId = sessionId;
    obj.checkpoint = outer2_0(outer2_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_STARTED;
    let tab;
    if (null != arg2) {
      tab = arg2.tab;
    }
    obj.tab = tab;
    let includeUnpublished;
    if (null != tmp2) {
      includeUnpublished = tmp2.includeUnpublished;
    }
    obj.unpublishedCategoriesShown = includeUnpublished;
    let noCache;
    if (null != tmp2) {
      noCache = tmp2.noCache;
    }
    obj.cacheDisabled = noCache;
    obj3.trackShopPerf(obj);
  }
  const HTTP = outer2_0(outer2_2[21]).HTTP;
  let logPerf2 = tmp24;
  if (null != arg1) {
    logPerf2 = tmp2.logPerf;
  }
  if (logPerf2) {
    obj2 = {};
    let sessionId1;
    if (null != arg2) {
      sessionId1 = arg2.sessionId;
    }
    obj2.sessionId = sessionId1;
    obj2.checkpoint = outer2_0(outer2_2[20]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_COMPLETED;
    let tab1;
    if (null != arg2) {
      tab1 = arg2.tab;
    }
    obj2.tab = tab1;
    let includeUnpublished1;
    if (null != tmp2) {
      includeUnpublished1 = tmp2.includeUnpublished;
    }
    obj2.unpublishedCategoriesShown = includeUnpublished1;
    let noCache1;
    if (null != tmp2) {
      noCache1 = arg1.noCache;
    }
    obj2.cacheDisabled = noCache1;
    outer2_0(outer2_2[20]).trackShopPerf(obj2);
    const obj7 = outer2_0(outer2_2[20]);
  }
  const obj1 = { url: outer2_16.COLLECTIBLES_SHOP, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
  const tmp23 = yield HTTP.get({ url: outer2_16.COLLECTIBLES_SHOP, query: fetchCollectiblesOptionsQuery, rejectWithError: true });
  obj3 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: tmp, shopHome: outer2_14.fromServer(tmp23.body) };
  outer2_1(outer2_2[17]).dispatch(obj3);
}
async function _claimCollectiblesCategoryReward(arg0, arg1, arg2) {
  let obj = outer2_1(outer2_2[17]);
  obj = { type: "COLLECTIBLES_CLAIM", skuId: arg1 };
  obj.dispatch(obj);
  const HTTP = outer2_0(outer2_2[21]).HTTP;
  obj = { url: outer2_16.COLLECTIBLES_CLAIM_CATEGORY_REWARD, body: obj1, rejectWithError: true };
  obj1 = { category_id: arg0 };
  const tmp = arg1;
  const tmp3 = yield HTTP.put(obj);
  const obj2 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: tmp };
  const body = tmp3.body;
  let mapped;
  if (null != body) {
    mapped = body.map(outer2_13.fromServer);
  }
  obj2.purchases = mapped;
  outer2_1(outer2_2[17]).dispatch(obj2);
}
async function _maybeFetchCollectiblesShopTabLayout(arg0, arg1) {
  let iter = (function*(arg0) {
    let abortSignal;
    let tab;
    ({ tab, abortSignal } = arg0);
    yield undefined;
    if (!outer2_9.isFetchingLayout(tab)) {
      const layoutFetchError = outer2_9.getLayoutFetchError(tab);
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
          outer2_1(outer2_2[17]).dispatch(obj);
          const HTTP = outer2_0(outer2_2[21]).HTTP;
          obj = { url: outer2_16.COLLECTIBLES_SHOP_TAB_LAYOUT(tab), rejectWithError: true, signal: abortSignal };
          const obj3 = outer2_1(outer2_2[17]);
          obj = outer2_1(outer2_2[17]);
          const obj1 = { type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab, layoutId: yield HTTP.get(obj).body.layout_id };
          obj.dispatch(obj1);
          const tmp18 = yield HTTP.get(obj);
        }
      }
    }
  })();
  iter.next();
  return iter;
}
({ Endpoints: closure_16, Routes, UserSettingsSections: closure_17 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/CollectiblesActionCreators.tsx");

export default { openCollectiblesShop, closeCollectiblesShop, fetchCollectiblesPurchases, fetchCollectiblesProduct, claimPremiumCollectiblesProduct };
export { openCollectiblesShop };
export { openCollectiblesShopMobile };
export const isCollectiblesShopOpen = function isCollectiblesShopOpen() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  let tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = null != (function findExistingCollectiblesShopRoute(rootNavigationRef) {
      function isCollectiblesShopRoute(value) {
        let tmp = "settings" === value.name;
        if (tmp) {
          const params = value.params;
          let screen;
          if (null != params) {
            screen = params.screen;
          }
          tmp = screen === outer2_17.COLLECTIBLES_SHOP;
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
            const tmp = outer2_18(routes);
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
                tmp2 = tmp4;
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
    })(rootNavigationRef);
  }
  return tmp2;
};
export { dispatchOpenCollectiblesShop };
export { closeCollectiblesShop };
export const productDetailsOpened = function productDetailsOpened(skuId) {
  let obj = importDefault(686);
  obj = { type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId };
  obj.dispatch(obj);
};
export const areRequestOptionsEqual = function areRequestOptionsEqual(c7, c12) {
  let noCache;
  if (null != c7) {
    noCache = c7.noCache;
  }
  let noCache1;
  if (null != c12) {
    noCache1 = c12.noCache;
  }
  let tmp5Result = areOptionalBooleansEqual(noCache, noCache1);
  if (tmp5Result) {
    let includeUnpublished;
    if (null != c7) {
      includeUnpublished = c7.includeUnpublished;
    }
    let includeUnpublished1;
    if (null != c12) {
      includeUnpublished1 = c12.includeUnpublished;
    }
    tmp5Result = areOptionalBooleansEqual(includeUnpublished, includeUnpublished1);
    const tmp5 = areOptionalBooleansEqual;
  }
  if (tmp5Result) {
    let includeBundles;
    if (null != c7) {
      includeBundles = c7.includeBundles;
    }
    let includeBundles1;
    if (null != c12) {
      includeBundles1 = c12.includeBundles;
    }
    tmp5Result = areOptionalBooleansEqual(includeBundles, includeBundles1);
    const tmp8 = areOptionalBooleansEqual;
  }
  if (tmp5Result) {
    let includeDynamicBlocks;
    if (null != c7) {
      includeDynamicBlocks = c7.includeDynamicBlocks;
    }
    let includeDynamicBlocks1;
    if (null != c12) {
      includeDynamicBlocks1 = c12.includeDynamicBlocks;
    }
    tmp5Result = areOptionalBooleansEqual(includeDynamicBlocks, includeDynamicBlocks1);
    const tmp11 = areOptionalBooleansEqual;
  }
  if (tmp5Result) {
    let countryCode;
    if (null != c7) {
      countryCode = c7.countryCode;
    }
    let countryCode1;
    if (null != c12) {
      countryCode1 = c12.countryCode;
    }
    tmp5Result = countryCode === countryCode1;
  }
  if (tmp5Result) {
    let paymentGateway;
    if (null != c7) {
      paymentGateway = c7.paymentGateway;
    }
    let paymentGateway1;
    if (null != c12) {
      paymentGateway1 = c12.paymentGateway;
    }
    tmp5Result = paymentGateway === paymentGateway1;
  }
  if (tmp5Result) {
    let shopHomeConfig;
    if (null != c7) {
      shopHomeConfig = c7.shopHomeConfig;
    }
    let shopHomeConfig1;
    if (null != c12) {
      shopHomeConfig1 = c12.shopHomeConfig;
    }
    tmp5Result = shopHomeConfig === shopHomeConfig1;
  }
  if (tmp5Result) {
    let skipNumCategories;
    if (null != c7) {
      skipNumCategories = c7.skipNumCategories;
    }
    let skipNumCategories1;
    if (null != c12) {
      skipNumCategories1 = c12.skipNumCategories;
    }
    tmp5Result = skipNumCategories === skipNumCategories1;
  }
  return tmp5Result;
};
export const fetchCollectiblesCategories = function fetchCollectiblesCategories(arg0, closure_1, closure_2) {
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
  let obj = require(6786) /* getPriceForCollectiblesProduct */;
  const items = [arg0];
  const tmp2 = _createForOfIteratorHelperLoose(obj.extendVariantsProducts(items));
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp3 = product;
      if (null == product.getProduct(value.skuId)) {
        let tmp4 = importDefault;
        let tmp5 = dependencyMap;
        let obj2 = importDefault(686);
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
export const fetchCollectiblesShopHome = function fetchCollectiblesShopHome(closure_0, c12, closure_2) {
  return _fetchCollectiblesShopHome(...arguments);
};
export const setShopHomeConfigOverride = function setShopHomeConfigOverride(shopHomeConfigOverride) {
  let obj = importDefault(686);
  obj = { type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride };
  obj.dispatch(obj);
};
export const setShopLayoutUrlOverride = function setShopLayoutUrlOverride(shopLayoutUrlOverride) {
  let obj = importDefault(686);
  obj = { type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride };
  obj.dispatch(obj);
};
export const setSkipNumCategories = function setSkipNumCategories(skipNumCategories) {
  let obj = importDefault(686);
  obj = { type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories };
  obj.dispatch(obj);
};
export const claimCollectiblesCategoryReward = function claimCollectiblesCategoryReward() {
  return _claimCollectiblesCategoryReward(...arguments);
};
export const maybeFetchCollectiblesShopTabLayout = function maybeFetchCollectiblesShopTabLayout() {
  return _maybeFetchCollectiblesShopTabLayout(...arguments);
};
