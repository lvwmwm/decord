// Module ID: 193
// Function ID: 2726
// Name: _callSuper
// Dependencies: [65, 102, 6, 7, 15, 17, 18, 194, 199, 200, 204, 44, 206, 203, 207, 208, 201]

// Module 193 (_callSuper)
import _toConsumableArray from "_toConsumableArray";
import _get from "_get";
import _inherits from "_inherits";
import BlobManager from "BlobManager";
import convertHeadersMapToArray from "convertHeadersMapToArray";
import _getPrototypeOf from "_getPrototypeOf";
import closure_9 from "_inherits";
import validateCallback from "validateCallback";
import tmp3 from "validateCallback";

const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return convertHeadersMapToArray(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
if (require("BlobManager").default.isAvailable) {
  require("BlobManager").default.addNetworkingHandler();
  let _default = require("BlobManager").default;
}
let obj = { arraybuffer: "function" === typeof global.ArrayBuffer, blob: "function" === typeof global.Blob, document: false, json: true, text: true, "": true };
tmp3.UNSENT = 0;
tmp3.OPENED = 1;
tmp3.HEADERS_RECEIVED = 2;
tmp3.LOADING = 3;
tmp3.DONE = 4;
tmp3._interceptor = null;
tmp3._profiling = false;

export default tmp3;
