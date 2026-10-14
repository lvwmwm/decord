// Module ID: 10541
// Function ID: 10542
// Name: OrderUtils
// Dependencies: [5, 4869, 6935, 2]
// Exports: discardDraftOrder

// Module 10541 (OrderUtils)
import PaymentConstants from "PaymentConstants" /* 4869 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _discardDraftOrder() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let closure_0 = arg0;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let status;
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
            c0 = undefined;
            status = undefined;
            ({ checkoutSucceeded: c0, order: c1 } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              status = c0;
              if (!status) {
                let id;
                if (status != null) {
                  id = status.id;
                }
                if (null != id) {
                  status = status.status;
                  if (status === closure_130_3.DRAFT) {
                    c4 = 1;
                    const obj2 = closure_130_0(closure_130_1[2]);
                    status = obj2.discardOrder(status.id);
                    c5 = 3;
                    c6 = 1;
                    const obj6 = { value: status, done: false };
                    return obj6;
                  }
                }
              }
            }
          } else if (2 === c5) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        let closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const OrderStatus = PaymentConstants.OrderStatus;
const result = size.fileFinishedImporting("modules/checkout/utils/OrderUtils.native.tsx");

export const discardDraftOrder = function discardDraftOrder() {
  return obj(...arguments);
};
