// Module ID: 8850
// Function ID: 69673
// Name: useOrderContext
// Dependencies: [57, 31, 2]
// Exports: useOrderContext

// Module 8850 (useOrderContext)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("set").fileFinishedImporting("modules/payments/native/hooks/useOrderContext.tsx");

export const useOrderContext = function useOrderContext(initialOrder, NativeGiftContext) {
  let tmp = first(React.useState(initialOrder), 2);
  first = tmp[0];
  React = tmp3;
  const callback = React.useCallback((arg0) => {
    let _slicedToArray = arg0;
    tmp3((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["revision"] = _slicedToArray;
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const items = [first, tmp[1], callback];
  return React.useMemo(() => {
    const obj = { order: first, setOrder: result, setRevision: callback };
    let id;
    if (null != first) {
      id = first.id;
    }
    obj.orderId = id;
    let id1;
    if (null != first) {
      const order_line_items = first.order_line_items;
      if (null != order_line_items) {
        first = order_line_items[0];
        if (null != first) {
          id1 = first.id;
        }
      }
    }
    obj.orderLineItemId = id1;
    let revision;
    if (null != first) {
      revision = first.revision;
    }
    obj.revision = revision;
    return obj;
  }, items);
};
