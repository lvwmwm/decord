// Module ID: 7220
// Function ID: 58209
// Name: useIAPContext
// Dependencies: [65, 5, 57, 31, 33, 7205, 7217]
// Exports: useIAPContext, withIAPContext

// Module 7220 (useIAPContext)
import _toConsumableArray from "_toConsumableArray";
import NativeModules from "NativeModules";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ useContext: closure_5, useEffect: closure_6, useMemo: closure_7, useState: closure_8 } = result);
const context = require("result").createContext(null);

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
  let closure_0 = arg0;
  return function WrapperComponent(arg0) {
    const tmp = outer1_4(outer1_8(false), 2);
    const first = tmp[0];
    let closure_1 = tmp3;
    const tmp4 = outer1_4(outer1_8([]), 2);
    const first1 = tmp4[0];
    let NativeModules = tmp6;
    const tmp7 = outer1_4(outer1_8([]), 2);
    const first2 = tmp7[0];
    let closure_5 = tmp7[1];
    const tmp9 = outer1_4(outer1_8([]), 2);
    const first3 = tmp9[0];
    let closure_7 = tmp11;
    const tmp12 = outer1_4(outer1_8([]), 2);
    const first4 = tmp12[0];
    let closure_9 = tmp14;
    const tmp15 = outer1_4(outer1_8([]), 2);
    const first5 = tmp15[0];
    let closure_11 = tmp17;
    const tmp18 = outer1_4(outer1_8(), 2);
    const first6 = tmp18[0];
    let closure_13 = tmp20;
    const tmp21 = outer1_4(outer1_8(), 2);
    const first7 = tmp21[0];
    let closure_15 = tmp21[1];
    const tmp23 = outer1_4(outer1_8(), 2);
    const first8 = tmp23[0];
    let closure_17 = tmp25;
    const tmp26 = outer1_4(outer1_8(), 2);
    const first9 = tmp26[0];
    let closure_19 = tmp26[1];
    let items = [first, first1, first3, first2, first4, first5, first6, first7, first8, first9, tmp[1], tmp4[1], tmp9[1], tmp12[1], tmp15[1], tmp18[1], tmp23[1]];
    outer1_6(() => {
      const connection = callback(outer2_1[5]).initConnection();
      const obj = callback(outer2_1[5]);
      connection.then((arg0) => {
        outer1_19(undefined);
        outer1_1(arg0);
      }).catch(closure_19);
    }, []);
    let items1 = [first];
    outer1_6(() => {
      if (callback) {
        callback = callback(outer2_1[6]).purchaseUpdatedListener((() => {
          let closure_0 = outer3_3(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              outer3_17(undefined);
              outer3_13(arg0);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
        const obj = callback(outer2_1[6]);
        let closure_1 = callback(outer2_1[6]).transactionListener((() => {
          let closure_0 = outer3_3(async (arg0) => {
            if (obj) {
              return obj.resume();
            } else {
              let error;
              if (null != arg0) {
                error = arg0.error;
              }
              outer3_17(error);
              let transaction;
              if (null != arg0) {
                transaction = arg0.transaction;
              }
              outer3_15(transaction);
            }
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
        const obj2 = callback(outer2_1[6]);
        let _toConsumableArray = callback(outer2_1[6]).purchaseErrorListener((arg0) => {
          outer1_13(undefined);
          outer1_17(arg0);
        });
        const obj3 = callback(outer2_1[6]);
        let NativeModules = callback(outer2_1[6]).promotedProductListener(outer2_3(async () => {
          let callback;
          const IapIos = callback(outer4_1[5]).IapIos;
          callback = yield IapIos.getPromotedProductIOS();
          outer2_5((arg0) => {
            const items = [];
            if (closure_0) {
              const items1 = [closure_0];
              let items2 = items1;
            } else {
              items2 = [];
            }
            return items.concat(outer5_2(arg0), outer5_2(items2));
          });
        }));
        return () => {
          closure_0.remove();
          _toConsumableArray.remove();
          if (null != NativeModules) {
            NativeModules.remove();
          }
          if (null != closure_1) {
            closure_1.remove();
          }
        };
      }
    }, items1);
    const tmp28 = outer1_7(() => ({ connected: first, products: first1, subscriptions: first3, promotedProductsIOS: first2, purchaseHistory: first4, availablePurchases: first5, currentPurchase: first6, currentTransaction: first7, currentPurchaseError: first8, initConnectionError: first9, setConnected: closure_1, setProducts: NativeModules, setSubscriptions: closure_7, setPurchaseHistory: closure_9, setAvailablePurchases: closure_11, setCurrentPurchase: closure_13, setCurrentPurchaseError: closure_17 }), items);
    return outer1_9(outer1_10.Provider, { value: outer1_7(() => ({ connected: first, products: first1, subscriptions: first3, promotedProductsIOS: first2, purchaseHistory: first4, availablePurchases: first5, currentPurchase: first6, currentTransaction: first7, currentPurchaseError: first8, initConnectionError: first9, setConnected: closure_1, setProducts: NativeModules, setSubscriptions: closure_7, setPurchaseHistory: closure_9, setAvailablePurchases: closure_11, setCurrentPurchase: closure_13, setCurrentPurchaseError: closure_17 }), items), children: outer1_9(first, Object.assign({}, arg0)) });
  };
}
