// Module ID: 7219
// Function ID: 58160
// Name: useIAP
// Dependencies: [5, 31, 7220, 7205]
// Exports: useIAP

// Module 7219 (useIAP)
import asyncGeneratorStep from "asyncGeneratorStep";
import result from "result";

let closure_3;
let closure_4;
const require = arg1;
({ useCallback: closure_3, useEffect: closure_4 } = result);

export const useIAP = function useIAP() {
  let availablePurchases;
  let asyncGeneratorStep;
  let connected;
  let initConnectionError;
  let products;
  let promotedProductsIOS;
  let purchaseHistory;
  let setProducts;
  let subscriptions;
  let obj = currentPurchase(currentPurchaseError[2]);
  const iAPContext = obj.useIAPContext();
  currentPurchase = iAPContext.currentPurchase;
  currentPurchaseError = iAPContext.currentPurchaseError;
  ({ setConnected: asyncGeneratorStep, setProducts } = iAPContext);
  const setSubscriptions = iAPContext.setSubscriptions;
  const setAvailablePurchases = iAPContext.setAvailablePurchases;
  const setPurchaseHistory = iAPContext.setPurchaseHistory;
  const setCurrentPurchase = iAPContext.setCurrentPurchase;
  const setCurrentPurchaseError = iAPContext.setCurrentPurchaseError;
  ({ connected, products, promotedProductsIOS, subscriptions, purchaseHistory, availablePurchases, initConnectionError } = iAPContext);
  const items = [setProducts];
  const items1 = [setSubscriptions];
  const tmp2 = setProducts;
  const tmp3 = setProducts((() => {
    let closure_0 = outer1_2(async (arg0) => {
      outer2_3(yield currentPurchase(currentPurchaseError[3]).getProducts({ skus: arg0.skus }));
    });
    return function(arg0) {
      return callback(...arguments);
    };
  })(), items);
  const items2 = [setAvailablePurchases];
  const tmp4 = setProducts((() => {
    let closure_0 = outer1_2(async (arg0) => {
      outer2_4(yield currentPurchase(currentPurchaseError[3]).getSubscriptions({ skus: arg0.skus }));
    });
    return function(arg0) {
      return callback(...arguments);
    };
  })(), items1);
  const items3 = [setPurchaseHistory];
  const tmp5 = setProducts(callback(async () => {
    outer1_5(yield currentPurchase(currentPurchaseError[3]).getAvailablePurchases());
  }), items2);
  let productId;
  const tmp6 = setProducts(callback(async () => {
    outer1_6(yield currentPurchase(currentPurchaseError[3]).getPurchaseHistory());
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
  const tmp7 = (() => {
    let closure_0 = outer1_2(async (arg0) => {
      let developerPayloadAndroid;
      let isConsumable;
      const purchase = arg0.purchase;
      ({ isConsumable, developerPayloadAndroid } = arg0);
      let productId;
      const obj = currentPurchase(currentPurchaseError[3]);
      if (null != productId) {
        productId = productId.productId;
      }
      if (purchase.productId === productId) {
        outer2_7(undefined);
      }
      let productId1;
      if (null != outer2_1) {
        productId1 = outer2_1.productId;
      }
      if (purchase.productId === productId1) {
        outer2_8(undefined);
      }
      return yield currentPurchase(currentPurchaseError[3]).finishTransaction({ purchase, isConsumable, developerPayloadAndroid });
    });
    return function(arg0) {
      return callback(...arguments);
    };
  })();
  setSubscriptions(() => {
    callback(true);
    return () => {
      outer1_2(false);
      outer1_8(undefined);
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
    finishTransaction: tmp2((() => {
      let closure_0 = outer1_2(async (arg0) => {
        let developerPayloadAndroid;
        let isConsumable;
        const purchase = arg0.purchase;
        ({ isConsumable, developerPayloadAndroid } = arg0);
        let productId;
        const obj = currentPurchase(currentPurchaseError[3]);
        if (null != productId) {
          productId = productId.productId;
        }
        if (purchase.productId === productId) {
          outer2_7(undefined);
        }
        let productId1;
        if (null != outer2_1) {
          productId1 = outer2_1.productId;
        }
        if (purchase.productId === productId1) {
          outer2_8(undefined);
        }
        return yield currentPurchase(currentPurchaseError[3]).finishTransaction({ purchase, isConsumable, developerPayloadAndroid });
      });
      return function(arg0) {
        return callback(...arguments);
      };
    })(), items4),
    getProducts: tmp3,
    getSubscriptions: tmp4,
    getAvailablePurchases: tmp5,
    getPurchaseHistory: tmp6,
    requestPurchase: currentPurchase(currentPurchaseError[3]).requestPurchase,
    requestSubscription: currentPurchase(currentPurchaseError[3]).requestSubscription
  };
  return obj;
};
