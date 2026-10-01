// Module ID: 10166
// Function ID: 10167
// Name: useOrderContext
// Dependencies: [32, 19, 2]
// Exports: useOrderContext

// Module 10166 (useOrderContext)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let order;

const result = size.fileFinishedImporting("modules/payments/native/hooks/useOrderContext.tsx");

export const useOrderContext = function useOrderContext(initialOrder) {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(initialOrder);
  let closure_1 = tmp3;
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = setOrder((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        const obj = { revision };
        const merged = Object.assign(arg0);
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const items = [first, tmp3, callback];
  return react.useMemo(() => {
    let id;
    let id1;
    let revision;
    const obj = { order, setOrder, setRevision, orderId: id, orderLineItemId: id1, revision };
    id = undefined;
    if (order != null) {
      id = tmp.id;
    }
    id1 = undefined;
    if (order != null) {
      const order_line_items = tmp.order_line_items;
      if (order_line_items != null) {
        order = order_line_items[0];
        if (order != null) {
          id1 = order.id;
        }
      }
    }
    revision = undefined;
    if (order != null) {
      revision = tmp.revision;
    }
    return obj;
  }, items);
};
