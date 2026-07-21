// Module ID: 5623
// Function ID: 47968
// Name: _callSuper
// Dependencies: []
// Exports: fetchOrderEntitlements, getOrder, signOrder

// Module 5623 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback3(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback3(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
async function _signOrder(arg0, arg1) {
  const fn = function*(orderId) {
    let expectedRevision;
    let loadId;
    ({ expectedRevision, loadId } = orderId);
    yield undefined;
    let obj = {};
    if (null != expectedRevision) {
      obj.expected_revision = expectedRevision;
    }
    const HTTP = callback(closure_1[9]).HTTP;
    obj = { url: closure_8.ORDER_SIGN(orderId.orderId), body: obj };
    let tmp3;
    if (null != loadId) {
      if ("" !== loadId) {
        obj = { load_id: loadId };
        tmp3 = obj;
      }
    }
    obj.context = tmp3;
    obj.rejectWithError = true;
    const tmp5 = yield HTTP.post(obj);
    if (null == tmp5.body) {
      const _Error = Error;
      const error = new Error("Invalid sign order response");
      throw error;
    } else {
      return tmp5.body;
    }
  };
  fn.next();
  return fn;
}
async function _getOrder(arg0, arg1) {
  const HTTP = callback(closure_1[9]).HTTP;
  const body = yield HTTP.get({ url: closure_8.ORDER_GET(arg0), rejectWithError: true }).body;
  let tmp = body;
  if (!body) {
    tmp = null;
  }
  return tmp;
}
async function _fetchOrderEntitlements(arg0, arg1) {
  const HTTP = callback(closure_1[9]).HTTP;
  const tmp = yield HTTP.get({ url: closure_8.ORDER_ENTITLEMENTS(arg0), rejectWithError: false });
  return null != tmp.body ? tmp.body : [];
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const Endpoints = arg1(dependencyMap[6]).Endpoints;
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("OrderActionCreators");
const tmp4 = (arg0) => {
  class OrderSigningFailedWithConstraintsError {
    constructor(arg0) {
      tmp = closure_4(this, OrderSigningFailedWithConstraintsError);
      tmp2 = closure_11(this, OrderSigningFailedWithConstraintsError, [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062063875336913]);
      tmp2.order = arg0;
      return tmp2;
    }
  }
  const arg1 = OrderSigningFailedWithConstraintsError;
  callback4(OrderSigningFailedWithConstraintsError, arg0);
  return callback2(OrderSigningFailedWithConstraintsError);
}(importDefault(dependencyMap[8]));
const tmp5 = (arg0) => {
  class OrderProcessingPendingError {
    constructor() {
      tmp = closure_4(this, OrderProcessingPendingError);
      return closure_11(this, OrderProcessingPendingError, ["constructor"]);
    }
  }
  const arg1 = OrderProcessingPendingError;
  callback4(OrderProcessingPendingError, arg0);
  return callback2(OrderProcessingPendingError);
}(importDefault(dependencyMap[8]));
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export const OrderSigningFailedWithConstraintsError = tmp4;
export const OrderProcessingPendingError = tmp5;
export const signOrder = function signOrder(arg0) {
  return _signOrder(...arguments);
};
export const getOrder = function getOrder(arg0) {
  return _getOrder(...arguments);
};
export const fetchOrderEntitlements = function fetchOrderEntitlements(id) {
  return _fetchOrderEntitlements(...arguments);
};
