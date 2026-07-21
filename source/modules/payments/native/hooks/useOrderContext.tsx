// Module ID: 8803
// Function ID: 69394
// Name: useOrderContext
// Dependencies: []
// Exports: useOrderContext

// Module 8803 (useOrderContext)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/payments/native/hooks/useOrderContext.tsx");

export const useOrderContext = function useOrderContext(initialOrder, NativeGiftContext) {
  const tmp = callback(React.useState(initialOrder), 2);
  const first = tmp[0];
  let callback = first;
  const React = tmp3;
  callback = React.useCallback((arg0) => {
    const first = arg0;
    tmp3((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["revision"] = arg0;
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const items = [first, tmp[1], callback];
  return React.useMemo(() => {
    const obj = { order: first, setOrder: tmp3, setRevision: callback };
    let id;
    if (null != first) {
      id = first.id;
    }
    obj.orderId = id;
    let id1;
    if (null != first) {
      const order_line_items = first.order_line_items;
      if (null != order_line_items) {
        const first = order_line_items[0];
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
