// Module ID: 8484
// Function ID: 8485
// Name: CollectiblesActionCreators
// Dependencies: [5, 5932, 2189, 1388, 8485, 8499, 5986, 8500, 8501, 8505, 8487, 8511, 8512, 1074, 1072, 5990, 8525, 5493, 572, 8526, 8527, 8534, 1285, 6757, 7228, 8528, 8497, 8535, 8536, 8537, 2]
// Exports: areRequestOptionsEqual, claimPremiumCollectiblesProduct, closeCollectiblesShop, dispatchOpenCollectiblesShop, fetchCollectiblesCategories, fetchCollectiblesMarketings, fetchCollectiblesPurchases, fetchCollectiblesSequencedOffers, fetchCollectiblesShopHome, isCollectiblesShopOpen, maybeFetchCollectiblesProduct, openCollectiblesShop, productDetailsOpened, restoreCollectiblesMarketingsFromCache, revealCollectiblesSequencedOffer, seedCollectiblesProductFromStandaloneLoad, setShopHomeConfigOverride, setSkipNumCategories, validateCollectiblesRecipient, validateCollectiblesRecipientsBatch

// Module 8484 (CollectiblesActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import RootNavigationRef from "RootNavigationRef" /* 5493 */;
import CollectiblesUtils from "CollectiblesUtils" /* 8497 */;
import CollectiblesDebugStore from "CollectiblesDebugStore" /* 8499 */;
import CollectiblesCategoriesRecord from "CollectiblesCategoriesRecord" /* 8501 */;
import CollectiblesShopHomeRecord from "CollectiblesShopHomeRecord" /* 8512 */;
import LayerActionCreators from "LayerActionCreators" /* 8526 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 8527 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 8528 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 8534 */;
import CollectiblesMarketingReleaseType from "CollectiblesMarketingReleaseType" /* 8535 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 5932 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import UserStore from "UserStore" /* 1388 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8485 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 5986 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 8500 */;
import CollectiblesMarketingRecord from "CollectiblesMarketingRecord" /* 8505 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 8487 */;
import CollectiblesPurchaseRecord from "CollectiblesPurchaseRecord" /* 8511 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 5990 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 8525 */;
import size from "module_2" /* 2 */;

let c2, closure_4, closure_5, closure_6, options, recipient_id;

let Routes;
let closure_12;
let closure_18;
let closure_19;
let map1;
function openCollectiblesShop(arg0) {
  let initialCollectionId;
  let tab;
  ({ tab, initialCollectionId } = arg0);
  openCollectiblesShopMobile(Object.assign(arg0, Object.assign({ tab: 0, initialCollectionId: 0 })));
}
function openCollectiblesShopMobile(screen) {
  let obj4;
  const dispatch = DispatcherDefault.dispatch;
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  DispatcherDefault;
  const merged = Object.assign(screen);
  dispatch(obj);
  const obj2 = RootNavigationRef;
  const rootNavigationRef = obj2.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      screen = screen.screen;
      if (screen == null) {
        let FEATURED_PAGE;
        if (null != screen.initialProductSkuId) {
          FEATURED_PAGE = constants.SHOP_ALL;
        } else {
          FEATURED_PAGE = constants.FEATURED_PAGE;
        }
        screen = FEATURED_PAGE;
      }
      const currentRoute = rootNavigationRef.getCurrentRoute();
      let screen1;
      if (currentRoute != null) {
        const params = currentRoute.params;
        if (params != null) {
          screen1 = params.screen;
        }
      }
      if (screen1 !== screen) {
        const obj3 = { screen: constants2.COLLECTIBLES_SHOP, params: obj4 };
        obj4 = { analyticsSource: screen.analyticsSource, screen, onNavigateAway: screen.onNavigateAway };
        rootNavigationRef.navigate("settings", obj3);
      }
    }
  }
}
function closeCollectiblesShop() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "COLLECTIBLES_SHOP_CLOSE" });
  const obj2 = LayerActionCreators;
  obj2.popLayer();
}
let obj = function _fetchCollectiblesCategories() {
  obj = _asyncToGenerator(async (arg0, noOp, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2) {
      let includeUnpublished;
      let includeUnpublished1;
      let noCache;
      let noCache1;
      let tab;
      let tab1;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let c3;
          let aPIError;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              c3 = undefined;
              logPerf = undefined;
              aPIError = undefined;
              options = closure_0;
              const dispatch = DispatcherDefault.dispatch;
              DispatcherDefault;
              if (closure_0 == null) {
                options = {};
              }
              const obj3 = { type: "COLLECTIBLES_CATEGORIES_FETCH", options };
              dispatch(obj3);
              const obj9 = utils_CollectiblesUtils;
              const fetchCollectiblesOptionsQuery = obj9.buildFetchCollectiblesOptionsQuery(tmp85);
              value = DevSettingsStore.get("shop_show_debug_overlay");
              c3 = value;
              logPerf = undefined;
              if (closure_0 != null) {
                logPerf = tmp85.logPerf;
              }
              if (logPerf) {
                logPerf = tmp87 == null;
                let sessionId;
                const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
                CollectiblesPerfLogging;
                if (!logPerf) {
                  sessionId = tmp87.sessionId;
                }
                logPerf = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_STARTED, tab, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
                tab = undefined;
                if (closure_2 != null) {
                  tab = tmp87.tab;
                }
                includeUnpublished = undefined;
                if (closure_0 != null) {
                  includeUnpublished = tmp85.includeUnpublished;
                }
                noCache = undefined;
                if (closure_0 != null) {
                  noCache = tmp85.noCache;
                }
                logPerf = trackShopPerf(logPerf);
              }
              if (value) {
                logPerf = addDebugLog;
                const _JSON = JSON;
                const _HermesInternal3 = HermesInternal;
                addDebugLog("fetchCollectiblesCategories started: " + JSON.stringify(fetchCollectiblesOptionsQuery, null, 2));
              }
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_18.COLLECTIBLES_CATEGORIES_V2, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
              logPerf = HTTP.get(request);
              c8 = 2;
              c9 = 1;
              return { value: logPerf, done: false };
            }
          } else {
            if (1 === tmp4) {
              c7 = 0;
              const self = this;
              const self2 = this;
              aPIError = new closure_133_0(closure_133_2[23]).APIError(closure_6);
              const obj5 = closure_133_0(closure_133_2[24]);
              const result = obj5.captureOrIgnoreApiError(aPIError);
              const obj7 = { type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: aPIError };
              const obj6 = closure_133_1(closure_133_2[18]);
              logPerf = obj6.dispatch(obj7);
              const tmp51 = c3;
              if (tmp51) {
                logPerf = closure_133_8;
                const _HermesInternal2 = HermesInternal;
                closure_133_8("fetchCollectiblesCategories failed: " + aPIError.message);
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              logPerf = closure_0;
              let logPerf1;
              if (closure_0 != null) {
                logPerf1 = logPerf.logPerf;
              }
              if (logPerf1) {
                logPerf = closure_133_0(closure_133_2[21]).trackShopPerf;
                let sessionId1;
                closure_133_0(closure_133_2[21]);
                if (closure_2 != null) {
                  sessionId1 = closure_2.sessionId;
                }
                const obj10 = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[21]).CollectiblesShopPerfCheckpoint.CATEGORIES_FETCH_COMPLETED, tab: tab1, unpublishedCategoriesShown: includeUnpublished1, cacheDisabled: noCache1 };
                tab1 = undefined;
                if (closure_2 != null) {
                  tab1 = closure_2.tab;
                }
                includeUnpublished1 = undefined;
                if (closure_0 != null) {
                  includeUnpublished1 = closure_0.includeUnpublished;
                }
                noCache1 = undefined;
                if (closure_0 != null) {
                  noCache1 = closure_0.noCache;
                }
                logPerf(obj10);
              }
              logPerf = c3;
              if (logPerf) {
                logPerf = closure_133_8;
                const _HermesInternal = HermesInternal;
                closure_133_8("fetchCollectiblesCategories completed " + logPerf.body.categories.length + " categories");
              }
              logPerf = closure_133_1(closure_133_2[18]).dispatch;
              const obj11 = { type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: closure_133_11.fromServer(logPerf.body), noOp };
              closure_133_1(closure_133_2[18]);
              logPerf(obj11);
              c7 = 0;
            }
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp76) {
          closure_6 = tmp76;
          if (0 === c7) {
            c9 = 3;
            throw tmp76;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchCollectiblesPurchases() {
  return obj(...arguments);
}
obj = function _fetchCollectiblesPurchases() {
  let isFetching;
  obj = _asyncToGenerator(async function(arg0, value) {
    let body;
    let closure_1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let c0;
        let tmp;
        let aPIError;
        let obj3;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            c0 = undefined;
            tmp = undefined;
            aPIError = undefined;
            if (!isFetching.isFetching) {
              const obj7 = DispatcherDefault;
              obj7.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
              value = DevSettingsStore.get("shop_show_debug_overlay");
              c0 = value;
              if (c0) {
                obj3 = addDebugLog("fetchCollectiblesPurchases started");
              }
              c3 = 1;
              const request = { url: constants.COLLECTIBLES_PURCHASES, rejectWithError: true, query: obj3 };
              obj3 = { variants_return_style: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP };
              if (value) {
                obj3 = addDebugLog;
                const _JSON = JSON;
                const _HermesInternal3 = HermesInternal;
                addDebugLog("fetchCollectiblesPurchases request: " + JSON.stringify(request, null, 2));
              }
              const HTTP = HTTPUtils.HTTP;
              obj3 = HTTP.get(request);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: obj3, done: false };
              return obj6;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          let closure_3 = closure_2;
          const self = this;
          const self2 = this;
          aPIError = new closure_129_0(closure_129_2[23]).APIError(closure_3);
          const obj4 = closure_129_0(closure_129_2[24]);
          obj3 = obj4.captureOrIgnoreApiError(aPIError);
          const tmp28 = c0;
          if (tmp28) {
            obj3 = closure_129_8;
            const _HermesInternal2 = HermesInternal;
            closure_129_8("fetchCollectiblesPurchases failed: " + aPIError.message);
          }
          const obj8 = { type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: aPIError };
          const obj5 = closure_129_1(closure_129_2[18]);
          obj3 = obj5.dispatch(obj8);
          throw aPIError;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          tmp = value;
          obj3 = c0;
          if (obj3) {
            obj3 = closure_129_8;
            const _HermesInternal = HermesInternal;
            closure_129_8("fetchCollectiblesPurchases completed with " + tmp.body.length + " purchases");
          }
          obj3 = closure_129_1(closure_129_2[18]).dispatch;
          const obj10 = { type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: body.map(closure_129_15.fromServer) };
          body = tmp.body;
          const tmp12 = closure_129_1(closure_129_2[18]);
          obj3(obj10);
          c3 = 0;
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp51) {
        closure_2 = tmp51;
        if (0 === c3) {
          c5 = 3;
          throw tmp51;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function fetchCollectiblesProduct() {
  return obj(...arguments);
}
obj = function _fetchCollectiblesProduct() {
  let locale;
  obj = _asyncToGenerator(async (skuId, arg1) => {
    let body = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let aPIError;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              aPIError = undefined;
              const _Date3 = Date;
              const obj5 = { type: "COLLECTIBLES_PRODUCT_FETCH", skuId, startedAt: Date.now() };
              const dispatch3 = DispatcherDefault.dispatch;
              DispatcherDefault;
              dispatch3(obj5);
              c5 = 1;
              const obj6 = { locale: locale.locale };
              let paymentGateway;
              const tmp48 = skuId;
              if (body != null) {
                paymentGateway = tmp49.paymentGateway;
              }
              if (null !== paymentGateway) {
                let paymentGateway1;
                if (body != null) {
                  paymentGateway1 = tmp49.paymentGateway;
                }
                obj6.payment_gateway = paymentGateway1;
              }
              let includeBundles;
              if (body != null) {
                includeBundles = tmp49.includeBundles;
              }
              if (null !== includeBundles) {
                let includeBundles1;
                if (body != null) {
                  includeBundles1 = tmp49.includeBundles;
                }
                obj6.include_bundles = includeBundles1;
              }
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_18.COLLECTIBLES_PRODUCTS(tmp48), rejectWithError: true, query: obj6 };
              const get = HTTP.get;
              c6 = 2;
              c7 = 1;
              const obj7 = { value: get(request), done: false };
              return obj7;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              closure_3 = closure_4;
              const self = this;
              const self2 = this;
              aPIError = new closure_131_0(closure_131_2[23]).APIError(closure_3);
              const obj3 = closure_131_0(closure_131_2[24]);
              const result = obj3.captureOrIgnoreApiError(aPIError);
              const _Date2 = Date;
              const obj8 = { type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId, error: aPIError, endedAt: Date.now() };
              const dispatch2 = closure_131_1(closure_131_2[18]).dispatch;
              closure_131_1(closure_131_2[18]);
              dispatch2(obj8);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              body = value;
              obj = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId, product: closure_131_14.fromServer(body.body), endedAt: Date.now() };
              const dispatch = closure_131_1(closure_131_2[18]).dispatch;
              closure_131_1(closure_131_2[18]);
              const _Date = Date;
              dispatch(obj);
              c5 = 0;
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp40) {
          closure_4 = tmp40;
          if (0 === c5) {
            c7 = 3;
            throw tmp40;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _maybeFetchCollectiblesProduct() {
  let fetchingProduct;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let isFetchingProductResult = fetchingProduct.isFetchingProduct(closure_0);
            const obj2 = fetchingProduct;
            const tmp5 = closure_1;
            if (!isFetchingProductResult) {
              isFetchingProductResult = obj2.isProductFetchBackedOff(tmp4);
            }
            if (!isFetchingProductResult) {
              c3 = 1;
              c2 = 1;
              const obj5 = { value: fetchCollectiblesProduct(closure_0, tmp5), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
function claimPremiumCollectiblesProduct() {
  return obj(...arguments);
}
obj = function _claimPremiumCollectiblesProduct() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0;
    let mapped;
    let obj6;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let body;
        let aPIError;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            body = undefined;
            aPIError = undefined;
            const obj5 = { type: "COLLECTIBLES_CLAIM", skuId };
            const obj8 = DispatcherDefault;
            obj8.dispatch(obj5);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.COLLECTIBLES_CLAIM, body: obj6, rejectWithError: true };
            obj6 = { sku_id: skuId };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.put(request), done: false };
            return obj7;
          }
        } else if (1 === c5) {
          c4 = 0;
          const self = this;
          const self2 = this;
          aPIError = new closure_130_0(closure_130_2[23]).APIError(closure_3);
          const obj9 = { type: "COLLECTIBLES_CLAIM_FAILURE", skuId, error: aPIError };
          const obj2 = closure_130_1(closure_130_2[18]);
          obj2.dispatch(obj9);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value;
          const obj10 = { type: "COLLECTIBLES_CLAIM_SUCCESS", skuId, purchases: mapped };
          body = body.body;
          mapped = undefined;
          const dispatch = closure_130_1(closure_130_2[18]).dispatch;
          const tmp35 = closure_130_1(closure_130_2[18]);
          if (body != null) {
            mapped = body.map(closure_130_15.fromServer);
          }
          dispatch(obj10);
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp24) {
        closure_3 = tmp24;
        if (0 === c4) {
          c6 = 3;
          throw tmp24;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _validateCollectiblesRecipient() {
  obj = _asyncToGenerator(async (recipient_id, sku_id) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENT, query: obj4, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              obj4 = { sku_id, recipient_id };
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            recipient_id = closure_4;
            const captureOrIgnoreApiError = closure_131_0(closure_131_2[24]).captureOrIgnoreApiError;
            const self = this;
            const self2 = this;
            closure_131_0(closure_131_2[24]);
            const aPIError = new closure_131_0(closure_131_2[23]).APIError(recipient_id);
            const result = captureOrIgnoreApiError(aPIError);
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body.valid, done: true };
          }
        } catch (tmp18) {
          closure_4 = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _validateCollectiblesRecipientsBatch() {
  obj = _asyncToGenerator(async (recipient_id, sku_ids) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH, query: obj4, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              obj4 = { sku_ids, recipient_id };
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            recipient_id = closure_4;
            const captureOrIgnoreApiError = closure_131_0(closure_131_2[24]).captureOrIgnoreApiError;
            const self = this;
            const self2 = this;
            closure_131_0(closure_131_2[24]);
            const aPIError = new closure_131_0(closure_131_2[23]).APIError(recipient_id);
            const result = captureOrIgnoreApiError(aPIError);
            c7 = 3;
            return { value: {}, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp18) {
          closure_4 = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchCollectiblesMarketings() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_3;
    const release = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async function(arg0, value) {
      let PROD;
      const obj9 = closure_130_1(closure_130_2[18]);
      obj9.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
      const obj6 = { platform: closure_130_0(closure_130_2[28]).CollectiblesMarketingPlatform.MOBILE };
      if (PROD !== closure_130_0(closure_130_2[27]).CollectiblesMarketingReleaseType.PROD) {
        obj6.release = PROD;
      }
      const HTTP = closure_130_0(closure_130_2[22]).HTTP;
      const request = { url: closure_130_18.COLLECTIBLES_MARKETING, query: obj6, rejectWithError: true };
      await HTTP.get(request);
      if (2 === c5) {
        c4 = 0;
        const captureOrIgnoreApiError = closure_130_0(closure_130_2[24]).captureOrIgnoreApiError;
        const self = this;
        const self2 = this;
        closure_130_0(closure_130_2[24]);
        const aPIError = new closure_130_0(closure_130_2[23]).APIError(closure_3);
        const result = captureOrIgnoreApiError(aPIError);
        const obj3 = closure_130_1(closure_130_2[18]);
        obj3.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        return { value, done: true };
      } else {
        body = value;
        obj = { type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: closure_130_12.fromServer(body.body) };
        const dispatch = closure_130_1(closure_130_2[18]).dispatch;
        closure_130_1(closure_130_2[18]);
        dispatch(obj);
        c4 = 0;
      }
      await "HermesInternal";
      body = tmp;
      PROD = release.release ?? CollectiblesMarketingReleaseType.CollectiblesMarketingReleaseType.PROD;
      return "Path";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchCollectiblesSequencedOffers() {
  obj = _asyncToGenerator(async function(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp;
            body = undefined;
            const obj7 = DispatcherDefault;
            obj7.dispatch({ type: "COLLECTIBLES_SEQUENCED_OFFERS_FETCH" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.COLLECTIBLES_COLLECTION_SEQUENCED_OFFERS, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const captureOrIgnoreApiError = closure_129_0(closure_129_2[24]).captureOrIgnoreApiError;
            const self = this;
            const self2 = this;
            const tmp20 = closure_129_0(closure_129_2[24]);
            const aPIError = new closure_129_0(closure_129_2[23]).APIError(closure_1);
            const result = captureOrIgnoreApiError(aPIError);
            const obj3 = closure_129_1(closure_129_2[18]);
            obj3.dispatch({ type: "COLLECTIBLES_SEQUENCED_OFFERS_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            body = value;
            obj = { type: "COLLECTIBLES_SEQUENCED_OFFERS_FETCH_SUCCESS", sequencedOffers: closure_129_1(closure_129_2[29])(body.body) };
            const dispatch = closure_129_1(closure_129_2[18]).dispatch;
            const tmp9 = closure_129_1(closure_129_2[18]);
            dispatch(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp30) {
        closure_2 = tmp30;
        if (0 === c3) {
          c5 = 3;
          throw tmp30;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchCollectiblesShopHome() {
  obj = _asyncToGenerator(async (tab, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2) {
      let includeUnpublished;
      let includeUnpublished1;
      let noCache;
      let noCache1;
      let tab1;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let aPIError;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              options = undefined;
              aPIError = undefined;
              const obj6 = { type: "COLLECTIBLES_SHOP_HOME_FETCH", tab, options };
              options = closure_1;
              const dispatch2 = DispatcherDefault.dispatch;
              DispatcherDefault;
              const tmp76 = tab;
              if (closure_1 == null) {
                options = {};
              }
              dispatch2(obj6);
              let logPerf;
              const obj7 = utils_CollectiblesUtils;
              const fetchCollectiblesOptionsQuery = obj7.buildFetchCollectiblesOptionsQuery(tmp77, tmp76);
              if (closure_1 != null) {
                logPerf = tmp77.logPerf;
              }
              if (logPerf) {
                let sessionId;
                const trackShopPerf2 = CollectiblesPerfLogging.trackShopPerf;
                CollectiblesPerfLogging;
                if (closure_2 != null) {
                  sessionId = tmp78.sessionId;
                }
                const obj8 = { sessionId, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_STARTED, tab, unpublishedCategoriesShown: includeUnpublished, cacheDisabled: noCache };
                tab = undefined;
                if (closure_2 != null) {
                  tab = tmp78.tab;
                }
                includeUnpublished = undefined;
                if (closure_1 != null) {
                  includeUnpublished = tmp77.includeUnpublished;
                }
                noCache = undefined;
                if (closure_1 != null) {
                  noCache = tmp77.noCache;
                }
                trackShopPerf2(obj8);
              }
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.COLLECTIBLES_SHOP, query: fetchCollectiblesOptionsQuery, rejectWithError: true };
              c8 = 2;
              c9 = 1;
              const obj9 = { value: HTTP.get(request), done: false };
              return obj9;
            }
          } else {
            if (1 === c8) {
              c7 = 0;
              closure_5 = closure_6;
              const self = this;
              const self2 = this;
              aPIError = new closure_133_0(closure_133_2[23]).APIError(closure_5);
              const obj4 = closure_133_0(closure_133_2[24]);
              const result = obj4.captureOrIgnoreApiError(aPIError);
              const obj10 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab, error: aPIError };
              const obj5 = closure_133_1(closure_133_2[18]);
              obj5.dispatch(obj10);
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              options = value;
              let logPerf1;
              if (closure_1 != null) {
                logPerf1 = closure_1.logPerf;
              }
              if (logPerf1) {
                let sessionId1;
                const trackShopPerf = closure_133_0(closure_133_2[21]).trackShopPerf;
                closure_133_0(closure_133_2[21]);
                if (closure_2 != null) {
                  sessionId1 = closure_2.sessionId;
                }
                obj = { sessionId: sessionId1, checkpoint: closure_133_0(closure_133_2[21]).CollectiblesShopPerfCheckpoint.SHOP_HOME_FETCH_COMPLETED, tab: tab1, unpublishedCategoriesShown: includeUnpublished1, cacheDisabled: noCache1 };
                tab1 = undefined;
                if (closure_2 != null) {
                  tab1 = closure_2.tab;
                }
                includeUnpublished1 = undefined;
                if (closure_1 != null) {
                  includeUnpublished1 = closure_1.includeUnpublished;
                }
                noCache1 = undefined;
                if (closure_1 != null) {
                  noCache1 = closure_1.noCache;
                }
                trackShopPerf(obj);
              }
              const obj12 = { type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab, shopHome: closure_133_16.fromServer(options.body) };
              const dispatch = closure_133_1(closure_133_2[18]).dispatch;
              closure_133_1(closure_133_2[18]);
              dispatch(obj12);
              c7 = 0;
            }
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp68) {
          closure_6 = tmp68;
          if (0 === c7) {
            c9 = 3;
            throw tmp68;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const addDebugLog = CollectiblesDebugStore.addDebugLog;
let closure_11 = CollectiblesCategoriesRecord.CollectiblesCategoriesRecord;
({ CollectiblesMarketingsRecord: closure_12, rehydratePersistedMarketings: map1 } = CollectiblesMarketingRecord);
let closure_16 = CollectiblesShopHomeRecord.CollectiblesShopHomeRecord;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ Endpoints: closure_18, Routes, UserSettingsSections: closure_19 } = Constants);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesActionCreators.tsx");

export default { openCollectiblesShop, closeCollectiblesShop, fetchCollectiblesPurchases, fetchCollectiblesProduct, claimPremiumCollectiblesProduct };
export { openCollectiblesShop };
export { openCollectiblesShopMobile };
export function isCollectiblesShopOpen() {
  let isCollectiblesShopRoute;
  obj = isCollectiblesShopRoute(5493);
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  if (tmp2) {
    isCollectiblesShopRoute = function isCollectiblesShopRoute(dependencyMap) {
      let flag = "settings" !== dependencyMap.name;
      if (!flag) {
        const params = dependencyMap.params;
        let screen;
        if (params != null) {
          screen = params.screen;
        }
        flag = screen !== constants.COLLECTIBLES_SHOP;
      }
      if (!flag) {
        flag = false;
      }
      return !flag;
    };
    const rootState = rootNavigationRef.getRootState();
    let routes;
    if (rootState != null) {
      routes = rootState.routes;
    }
    let searchRoutesResult = null;
    if (routes) {
      function searchRoutes(routes) {
        const iter = routes[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if (isCollectiblesShopRoute(nextResult)) {
            iter.return();
            return tmp2;
          } else {
            let state = tmp2.state;
            routes = undefined;
            if (state != null) {
              routes = state.routes;
            }
            if (routes) {
              let tmp8 = searchRoutes(tmp2.state.routes);
              let tmp9 = tmp8;
              if (tmp9) {
                iter.return();
                return tmp8;
              }
            }
            continue;
          }
        }
        return null;
      }
      searchRoutesResult = searchRoutes(rootState.routes);
    }
    tmp2 = null != searchRoutesResult;
  }
  return tmp2;
}
export function dispatchOpenCollectiblesShop(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  obj = { type: "COLLECTIBLES_SHOP_OPEN" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
}
export { closeCollectiblesShop };
export function productDetailsOpened(skuId) {
  obj = DispatcherDefault;
  const obj2 = { type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId };
  obj.dispatch(obj2);
}
export function areRequestOptionsEqual(noCache, noCache2) {
  noCache = undefined;
  if (noCache != null) {
    noCache = noCache.noCache;
  }
  let noCache1;
  if (noCache2 != null) {
    noCache1 = noCache2.noCache;
  }
  const BooleanResult = Boolean(noCache);
  let tmp4 = BooleanResult === Boolean(noCache1);
  if (tmp4) {
    let includeUnpublished;
    if (noCache != null) {
      includeUnpublished = noCache.includeUnpublished;
    }
    let includeUnpublished1;
    if (noCache2 != null) {
      includeUnpublished1 = noCache2.includeUnpublished;
    }
    const _Boolean = Boolean;
    const _Boolean2 = Boolean;
    const BooleanResult1 = Boolean(includeUnpublished);
    tmp4 = BooleanResult1 === Boolean(includeUnpublished1);
  }
  if (tmp4) {
    let includeBundles;
    if (noCache != null) {
      includeBundles = noCache.includeBundles;
    }
    let includeBundles1;
    if (noCache2 != null) {
      includeBundles1 = noCache2.includeBundles;
    }
    const _Boolean3 = Boolean;
    const _Boolean4 = Boolean;
    const BooleanResult2 = Boolean(includeBundles);
    tmp4 = BooleanResult2 === Boolean(includeBundles1);
  }
  if (tmp4) {
    let includeDynamicBlocks;
    if (noCache != null) {
      includeDynamicBlocks = noCache.includeDynamicBlocks;
    }
    let includeDynamicBlocks1;
    if (noCache2 != null) {
      includeDynamicBlocks1 = noCache2.includeDynamicBlocks;
    }
    const _Boolean5 = Boolean;
    const _Boolean6 = Boolean;
    const BooleanResult3 = Boolean(includeDynamicBlocks);
    tmp4 = BooleanResult3 === Boolean(includeDynamicBlocks1);
  }
  if (tmp4) {
    let countryCode;
    if (noCache != null) {
      countryCode = noCache.countryCode;
    }
    let countryCode1;
    if (noCache2 != null) {
      countryCode1 = noCache2.countryCode;
    }
    tmp4 = countryCode === countryCode1;
  }
  if (tmp4) {
    let paymentGateway;
    if (noCache != null) {
      paymentGateway = noCache.paymentGateway;
    }
    let paymentGateway1;
    if (noCache2 != null) {
      paymentGateway1 = noCache2.paymentGateway;
    }
    tmp4 = paymentGateway === paymentGateway1;
  }
  if (tmp4) {
    let shopHomeConfig;
    if (noCache != null) {
      shopHomeConfig = noCache.shopHomeConfig;
    }
    let shopHomeConfig1;
    if (noCache2 != null) {
      shopHomeConfig1 = noCache2.shopHomeConfig;
    }
    tmp4 = shopHomeConfig === shopHomeConfig1;
  }
  if (tmp4) {
    let skipNumCategories;
    if (noCache != null) {
      skipNumCategories = noCache.skipNumCategories;
    }
    let skipNumCategories1;
    if (noCache2 != null) {
      skipNumCategories1 = noCache2.skipNumCategories;
    }
    tmp4 = skipNumCategories === skipNumCategories1;
  }
  return tmp4;
}
export function fetchCollectiblesCategories() {
  return obj(...arguments);
}
export { fetchCollectiblesPurchases };
export { fetchCollectiblesProduct };
export function maybeFetchCollectiblesProduct() {
  return obj(...arguments);
}
export function seedCollectiblesProductFromStandaloneLoad(memo) {
  const timestamp = Date.now();
  const items = [memo];
  obj = CollectiblesUtils;
  const result = obj.extendVariantsProducts(items);
  const iter = result[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (null == CollectiblesCategoryStore.getProduct(nextResult.skuId)) {
      let obj2 = DispatcherDefault;
      let obj3 = { type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: tmp4.skuId, product: tmp4, endedAt: timestamp };
      let dispatchResult = obj2.dispatch(obj3);
    }
    continue;
  }
}
export { claimPremiumCollectiblesProduct };
export function validateCollectiblesRecipient() {
  return obj(...arguments);
}
export function validateCollectiblesRecipientsBatch() {
  return obj(...arguments);
}
export function fetchCollectiblesMarketings() {
  return obj(...arguments);
}
export function fetchCollectiblesSequencedOffers() {
  return obj(...arguments);
}
export function revealCollectiblesSequencedOffer(collectionId, position) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    const obj2 = { type: "COLLECTIBLES_SEQUENCED_OFFER_REVEAL", userId: id, collectionId, position };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
export function restoreCollectiblesMarketingsFromCache(ttlMs) {
  const cachedMarketingsBySurfaces = CollectiblesMarketingsStore.getCachedMarketingsBySurfaces(ttlMs.ttlMs);
  let flag = null != cachedMarketingsBySurfaces;
  if (flag) {
    obj = { type: "COLLECTIBLES_MARKETING_CACHE_RESTORED", marketings: map1(cachedMarketingsBySurfaces) };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    dispatch(obj);
    flag = true;
  }
  return flag;
}
export function fetchCollectiblesShopHome() {
  return obj(...arguments);
}
export function setShopHomeConfigOverride(shopHomeConfigOverride) {
  obj = DispatcherDefault;
  const obj2 = { type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride };
  obj.dispatch(obj2);
}
export function setSkipNumCategories(skipNumCategories) {
  obj = DispatcherDefault;
  const obj2 = { type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories };
  obj.dispatch(obj2);
}
