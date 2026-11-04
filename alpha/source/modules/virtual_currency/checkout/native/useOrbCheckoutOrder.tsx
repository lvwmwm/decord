// Module ID: 15280
// Function ID: 15281
// Name: useOrbCheckoutOrder
// Dependencies: [5, 32, 19, 5881, 1083, 15281, 7754, 10857, 4954, 4961, 2]
// Exports: useOrbCheckoutOrder

// Module 15280 (useOrbCheckoutOrder)
import Constants from "Constants" /* 1083 */;
import PaymentConstants from "PaymentConstants" /* 5881 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ItemPurchaseType = PaymentConstants.ItemPurchaseType;
const PaymentGateways = Constants.PaymentGateways;
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/useOrbCheckoutOrder.tsx");

export function useOrbCheckoutOrder(skuId) {
  let _undefined;
  let c2;
  let c3;
  let closure_4;
  let createOrderError;
  let order;
  let ref;
  let tmp2;
  let tmp4;
  skuId = skuId.skuId;
  let isOrdersCheckout;
  dependencyMap = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let obj = isOrdersCheckout(15281);
  isOrdersCheckout = obj.useConfig({ location: "orb_checkout_modal" }).enabled;
  let tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, c2] = tmp;
  let tmp3 = _slicedToArray(react.useState(isOrdersCheckout), 2);
  [tmp4, c3] = tmp3;
  [createOrderError, _slicedToArray] = react.useState(null);
  react = react.useRef(false);
  let closure_6 = react.useRef(null);
  let closure_7 = react.useRef(false);
  let closure_8 = react.useRef(false);
  const onSignFailure = react.useCallback((current) => {
    closure_6.current = current;
    _undefined(current);
  }, []);
  let items = [isOrdersCheckout, skuId, onSignFailure];
  const markCheckoutSucceeded = react.useCallback(() => {
    closure_7.current = true;
  }, []);
  const effect = react.useEffect(() => {
    function createOrbOrder() {
      return obj(...arguments);
    }
    let obj = function _createOrbOrder() {
      let constants2;
      obj = _asyncToGenerator(async function(arg0, value) {
        let closure_0;
        let items;
        let obj11;
        let obj9;
        let v0;
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
          try {
            let closure_1;
            let order;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp;
                order = undefined;
                c3 = 2;
                const obj4 = { orderLineItems: items, paymentGateway: constants2.VIRTUAL_CURRENCY, isGift: false };
                const obj6 = { sku_id: order, quantity: 1, purchase_type: constants.ONE_TIME };
                items = [obj6];
                c4 = 3;
                c5 = 1;
                const obj7 = { value: obj11.createOrder(obj4), done: false };
                obj11 = closure_2_0(_undefined[6]);
                return obj7;
              }
            } else if (1 === c4) {
              c3 = 0;
              c3(false);
              throw closure_2;
            } else {
              if (2 === c4) {
                let tmp49;
                c3 = 1;
                closure_1 = closure_2;
                const obj5 = closure_2_0(_undefined[8]);
                if (!obj5.isExpectedHttpClientError(closure_1)) {
                  let error;
                  const _Error = Error;
                  const captureBillingException = closure_2_0(_undefined[8]).captureBillingException;
                  const tmp29 = closure_2_0(_undefined[8]);
                  if (closure_1 instanceof Error) {
                    error = closure_1;
                  } else {
                    const _Error2 = Error;
                    const _String = String;
                    const self = this;
                    const self2 = this;
                    error = new Error(String(closure_1));
                  }
                  const obj8 = { tags: { source: "create_order" }, extra: obj9 };
                  obj9 = { skuId: order, paymentGateway: String(constants2.VIRTUAL_CURRENCY) };
                  const _String2 = String;
                  const result = captureBillingException(error, obj8);
                }
                const tmp40 = c4;
                if (closure_1 instanceof isOrdersCheckout(_undefined[9])) {
                  tmp49 = closure_1;
                } else {
                  const self3 = this;
                  const self4 = this;
                  tmp49 = new isOrdersCheckout(_undefined[9])(closure_1);
                }
                tmp40(tmp49);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c3(false);
                c5 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                order = value;
                if (ref.current) {
                  const obj12 = { checkoutSucceeded: false, order };
                  obj = closure_2_0(_undefined[7]);
                  obj.discardDraftOrder(obj12);
                  c3 = 0;
                  c3(false);
                  c5 = 3;
                  const obj13 = { value: undefined, done: true };
                  return obj13;
                } else {
                  closure_1_9(order);
                  c3 = 1;
                }
              }
              c3 = 0;
              c3(false);
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp59) {
            closure_2 = tmp59;
            if (0 === c3) {
              c5 = 3;
              throw tmp59;
            } else if (1 === tmp61) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = isOrdersCheckout;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      const tmp3 = ref;
      ref.current = true;
      const tmp4 = createOrbOrder();
    }
  }, items);
  const effect1 = react.useEffect(() => {
    let ref2;
    closure_8.current = false;
    return () => {
      closure_1_8.current = true;
      const obj = skuId(c2[7]);
      const obj2 = { checkoutSucceeded: ref2.current, order: ref.current };
      obj.discardDraftOrder(obj2);
    };
  }, []);
  return { isOrdersCheckout, order, isCreatingOrder, createOrderError, onSignFailure, markCheckoutSucceeded };
}
