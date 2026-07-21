// Module ID: 7213
// Function ID: 58103
// Name: useIAP
// Dependencies: []
// Exports: useIAP

// Module 7213 (useIAP)
let closure_2 = importDefault(dependencyMap[0]);
({ useCallback: closure_3, useEffect: closure_4 } = arg1(dependencyMap[1]));

export const useIAP = function useIAP() {
  let availablePurchases;
  let connected;
  let initConnectionError;
  let products;
  let promotedProductsIOS;
  let purchaseHistory;
  let setProducts;
  let subscriptions;
  let obj = arg1(dependencyMap[2]);
  const iAPContext = obj.useIAPContext();
  const currentPurchase = iAPContext.currentPurchase;
  const arg1 = currentPurchase;
  const currentPurchaseError = iAPContext.currentPurchaseError;
  const dependencyMap = currentPurchaseError;
  ({ setConnected: closure_2, setProducts } = iAPContext);
  const setSubscriptions = iAPContext.setSubscriptions;
  const setAvailablePurchases = iAPContext.setAvailablePurchases;
  const setPurchaseHistory = iAPContext.setPurchaseHistory;
  const setCurrentPurchase = iAPContext.setCurrentPurchase;
  const setCurrentPurchaseError = iAPContext.setCurrentPurchaseError;
  ({ connected, products, promotedProductsIOS, subscriptions, purchaseHistory, availablePurchases, initConnectionError } = iAPContext);
  const items = [setProducts];
  const items1 = [setSubscriptions];
  const tmp2 = setProducts;
  const tmp3 = setProducts(() => {
    let closure_0 = callback(async (arg0) => {
      closure_3(yield callback(closure_1[3]).getProducts({ skus: arg0.skus }));
    });
    return function(arg0) {
      return callback(...arguments);
    };
  }(), items);
  const items2 = [setAvailablePurchases];
  const tmp4 = setProducts(() => {
    let closure_0 = callback(async (arg0) => {
      closure_4(yield callback(closure_1[3]).getSubscriptions({ skus: arg0.skus }));
    });
    return function(arg0) {
      return callback(...arguments);
    };
  }(), items1);
  const items3 = [setPurchaseHistory];
  const tmp5 = setProducts(callback(async () => {
    closure_5(yield callback(closure_1[3]).getAvailablePurchases());
  }), items2);
  let productId;
  const tmp6 = setProducts(callback(async () => {
    closure_6(yield callback(closure_1[3]).getPurchaseHistory());
  }), items3);
  if (null != currentPurchase) {
    productId = currentPurchase.productId;
  }
  const items4 = [productId, , , ];
  let productId1;
  if (null != currentPurchaseError) {
    productId1 = currentPurchaseError.productId;
  }
  items4[1] = productId1;
  items4[2] = setCurrentPurchase;
  items4[3] = setCurrentPurchaseError;
  const tmp7 = () => {
    let closure_0 = callback(async (arg0) => {
      let developerPayloadAndroid;
      let isConsumable;
      const purchase = arg0.purchase;
      ({ isConsumable, developerPayloadAndroid } = arg0);
      let productId;
      const obj = lib(productId[3]);
      if (null != lib) {
        productId = lib.productId;
      }
      if (purchase.productId === productId) {
        callback(undefined);
      }
      let productId1;
      if (null != productId) {
        productId1 = productId.productId;
      }
      if (purchase.productId === productId1) {
        callback2(undefined);
      }
      return yield lib(productId[3]).finishTransaction({ purchase, isConsumable, developerPayloadAndroid });
    });
    return function(arg0) {
      return callback(...arguments);
    };
  }();
  setSubscriptions(() => {
    callback(true);
    return () => {
      callback(false);
      callback2(undefined);
    };
  }, []);
  obj = {
    connected,
    products,
    promotedProductsIOS,
    subscriptions,
    purchaseHistory,
    availablePurchases,
    currentPurchase,
    currentPurchaseError,
    initConnectionError,
    finishTransaction: tmp2(() => {
      let closure_0 = callback(async (arg0) => {
        let developerPayloadAndroid;
        let isConsumable;
        const purchase = arg0.purchase;
        ({ isConsumable, developerPayloadAndroid } = arg0);
        let productId;
        const obj = lib(productId[3]);
        if (null != lib) {
          productId = lib.productId;
        }
        if (purchase.productId === productId) {
          callback(undefined);
        }
        let productId1;
        if (null != productId) {
          productId1 = productId.productId;
        }
        if (purchase.productId === productId1) {
          callback2(undefined);
        }
        return yield lib(productId[3]).finishTransaction({ purchase, isConsumable, developerPayloadAndroid });
      });
      return function(arg0) {
        return callback(...arguments);
      };
    }(), items4),
    getProducts: tmp3,
    getSubscriptions: tmp4,
    getAvailablePurchases: tmp5,
    getPurchaseHistory: tmp6,
    requestPurchase: arg1(dependencyMap[3]).requestPurchase,
    requestSubscription: arg1(dependencyMap[3]).requestSubscription
  };
  return obj;
};
