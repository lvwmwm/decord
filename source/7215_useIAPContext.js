// Module ID: 7215
// Function ID: 58135
// Name: useIAPContext
// Dependencies: []
// Exports: useIAPContext, withIAPContext

// Module 7215 (useIAPContext)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ useContext: closure_5, useEffect: closure_6, useMemo: closure_7, useState: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const context = importDefault(dependencyMap[3]).createContext(null);

export const useIAPContext = function useIAPContext() {
  const tmp = callback(closure_10);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const error = new Error("You need wrap your app with withIAPContext HOC");
    throw error;
  }
};
export function withIAPContext(arg0) {
  const arg1 = arg0;
  return function WrapperComponent(arg0) {
    const tmp = first2(first4(false), 2);
    const first = tmp[0];
    arg0 = first;
    const tmp3 = tmp[1];
    const tmp4 = first2(first4([]), 2);
    const first1 = tmp4[0];
    const tmp6 = tmp4[1];
    const tmp7 = first2(first4([]), 2);
    const first2 = tmp7[0];
    let closure_5 = tmp7[1];
    const tmp9 = first2(first4([]), 2);
    const first3 = tmp9[0];
    const tmp11 = tmp9[1];
    const tmp12 = first2(first4([]), 2);
    const first4 = tmp12[0];
    const tmp14 = tmp12[1];
    const tmp15 = first2(first4([]), 2);
    const first5 = tmp15[0];
    const tmp17 = tmp15[1];
    const tmp18 = first2(first4(), 2);
    const first6 = tmp18[0];
    const tmp20 = tmp18[1];
    const tmp21 = first2(first4(), 2);
    const first7 = tmp21[0];
    let closure_15 = tmp21[1];
    const tmp23 = first2(first4(), 2);
    const first8 = tmp23[0];
    const tmp25 = tmp23[1];
    const tmp26 = first2(first4(), 2);
    const first9 = tmp26[0];
    let closure_19 = tmp26[1];
    const items = [first, first1, first3, first2, first4, first5, first6, first7, first8, first9, tmp3, tmp6, tmp11, tmp14, tmp17, tmp20, tmp25];
    first3(() => {
      const connection = first(tmp3[5]).initConnection();
      const obj = first(tmp3[5]);
      connection.then((arg0) => {
        callback2(undefined);
        callback(arg0);
      }).catch(closure_19);
    }, []);
    const items1 = [first];
    first3(() => {
      if (callback) {
        const callback = callback(closure_1[6]).purchaseUpdatedListener(() => {
          let closure_0 = lib(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              callback2(undefined);
              callback(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        }());
        const obj = callback(closure_1[6]);
        closure_1 = callback(closure_1[6]).transactionListener(() => {
          let closure_0 = lib(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              let error;
              if (null != arg0) {
                error = arg0.error;
              }
              closure_17(error);
              let transaction;
              if (null != arg0) {
                transaction = arg0.transaction;
              }
              closure_15(transaction);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        }());
        const obj2 = callback(closure_1[6]);
        let closure_2 = callback(closure_1[6]).purchaseErrorListener((arg0) => {
          callback(undefined);
          callback2(arg0);
        });
        const obj3 = callback(closure_1[6]);
        const tmp6 = callback(closure_1[6]).promotedProductListener(tmp6(async () => {
          let callback;
          const IapIos = callback(closure_1[5]).IapIos;
          callback = yield IapIos.getPromotedProductIOS();
          callback2((arg0) => {
            const items = [];
            if (closure_0) {
              const items1 = [closure_0];
              let items2 = items1;
            } else {
              items2 = [];
            }
            return items.concat(callback(arg0), callback(items2));
          });
        }));
        return () => {
          closure_0.remove();
          closure_2.remove();
          if (null != lib) {
            lib.remove();
          }
          if (null != closure_1) {
            closure_1.remove();
          }
        };
      }
    }, items1);
    const tmp28 = tmp11(() => ({ connected: first, products: first1, subscriptions: first3, promotedProductsIOS: first2, purchaseHistory: first4, availablePurchases: first5, currentPurchase: first6, currentTransaction: first7, currentPurchaseError: first8, initConnectionError: first9, setConnected: tmp3, setProducts: tmp6, setSubscriptions: tmp11, setPurchaseHistory: tmp14, setAvailablePurchases: tmp17, setCurrentPurchase: tmp20, setCurrentPurchaseError: tmp25 }), items);
    return tmp14(first5.Provider, { value: tmp11(() => ({ connected: first, products: first1, subscriptions: first3, promotedProductsIOS: first2, purchaseHistory: first4, availablePurchases: first5, currentPurchase: first6, currentTransaction: first7, currentPurchaseError: first8, initConnectionError: first9, setConnected: tmp3, setProducts: tmp6, setSubscriptions: tmp11, setPurchaseHistory: tmp14, setAvailablePurchases: tmp17, setCurrentPurchase: tmp20, setCurrentPurchaseError: tmp25 }), items), children: tmp14(arg0, Object.assign({}, arg0)) });
  };
}
