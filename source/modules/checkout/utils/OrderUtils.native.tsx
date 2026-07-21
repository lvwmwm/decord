// Module ID: 7196
// Function ID: 57908
// Name: _discardDraftOrder
// Dependencies: []
// Exports: discardDraftOrder

// Module 7196 (_discardDraftOrder)
async function _discardDraftOrder(arg0, arg1) {
  const fn = function*(arg0) {
    let checkoutSucceeded;
    let order;
    ({ order, checkoutSucceeded } = arg0);
    yield undefined;
    if (!checkoutSucceeded) {
      let id;
      if (null != order) {
        id = order.id;
      }
      if (null != id) {
        if (order.status === constants.DRAFT) {
          yield callback(closure_1[2]).discardOrder(order.id);
          const obj = callback(closure_1[2]);
        }
      }
    }
  };
  fn.next();
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
const OrderStatus = arg1(dependencyMap[1]).OrderStatus;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/checkout/utils/OrderUtils.native.tsx");

export const discardDraftOrder = function discardDraftOrder(arg0) {
  return _discardDraftOrder(...arguments);
};
