// Module ID: 12564
// Function ID: 97140
// Name: _isNativeReflectConstruct
// Dependencies: [57, 5, 6, 7, 15, 17, 18, 683, 653, 3, 12565, 12567, 664, 561, 12568, 12570, 12572, 12578, 12580, 12599, 20, 14, 4124, 12577, 477, 507, 675, 44, 566, 6892, 6896, 6899, 6897, 12600, 12601, 12583, 644, 6837, 6842, 1184, 686, 2]
// Exports: setAccountSwitchUserId

// Module 12564 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import CLOSED from "CLOSED";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "_defineProperties";
import importDefaultResult1 from "JSONEncoding";
import tmp7 from "_isNativeReflectConstruct";

let closure_12;
let closure_13;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function noop() {

}
function withGatewayCompressionHandler(dataReady) {
  let closure_0 = dataReady;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let c3 = 0;
  dataReady.dataReady((arg0) => {
    let c3 = 0;
    return callback(arg0, c3);
  });
  let c4 = false;
  return (data) => {
    data = data.data;
    if (null != data.raw_length) {
      closure_3 = closure_3 + data.raw_length;
    } else {
      closure_3 = closure_3 + outer1_24(data);
    }
    dataReady.feed(data);
  };
}
function byteSize(byteLength) {
  if (null == byteLength) {
    return 0;
  }
}
({ AnalyticEvents: closure_12, Endpoints: closure_13 } = ME);
importDefaultResult = new importDefaultResult("GatewaySocket");
importDefaultResult1 = new importDefaultResult1();
let c16 = null;
let closure_17 = 30 * require("set").Millis.SECOND;
let closure_18 = 3 * require("set").Millis.MINUTE;
const MINUTE = require("set").Millis.MINUTE;
let result = require("_classCallCheck").fileFinishedImporting("modules/gateway/GatewaySocket.tsx");

export default tmp7;
export function setAccountSwitchUserId(targetUserId) {
  let closure_16 = targetUserId;
}
