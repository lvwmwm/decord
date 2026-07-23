// Module ID: 5627
// Function ID: 48011
// Name: _callSuper
// Dependencies: [5, 7, 6, 15, 17, 18, 653, 3, 3798, 507, 3791, 2]
// Exports: fetchOrderEntitlements, getOrder, signOrder

// Module 5627 (_callSuper)
import _inherits from "_inherits";
import timestamp from "timestamp";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_7 from "_inherits";
import { Endpoints } from "ME";
import importDefaultResult from "_possibleConstructorReturn";
import tmp4 from "_isNativeReflectConstruct";
import tmp5 from "_isNativeReflectConstruct";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
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
  let iter = (function*(orderId) {
    let expectedRevision;
    let loadId;
    ({ expectedRevision, loadId } = orderId);
    yield undefined;
    let obj = {};
    if (null != expectedRevision) {
      obj.expected_revision = expectedRevision;
    }
    const HTTP = outer2_0(outer2_1[9]).HTTP;
    obj = { url: outer2_8.ORDER_SIGN(orderId.orderId), body: obj };
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
  })();
  iter.next();
  return iter;
}
async function _getOrder(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[9]).HTTP;
  const body = yield HTTP.get({ url: outer2_8.ORDER_GET(arg0), rejectWithError: true }).body;
  let tmp = body;
  if (!body) {
    tmp = null;
  }
  return tmp;
}
async function _fetchOrderEntitlements(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[9]).HTTP;
  const tmp = yield HTTP.get({ url: outer2_8.ORDER_ENTITLEMENTS(arg0), rejectWithError: false });
  return null != tmp.body ? tmp.body : [];
}
importDefaultResult = new importDefaultResult("OrderActionCreators");
let closure_10 = tmp4;
let result = require("_classCallCheck").fileFinishedImporting("modules/payments/OrderActionCreators.tsx");

export const OrderSigningFailedWithConstraintsError = tmp4;
export const OrderProcessingPendingError = tmp5;
export const signOrder = function signOrder(arg0) {
  return _signOrder(...arguments);
};
export const getOrder = function getOrder(outer1_0) {
  return _getOrder(...arguments);
};
export const fetchOrderEntitlements = function fetchOrderEntitlements(id) {
  return _fetchOrderEntitlements(...arguments);
};
