// Module ID: 12616
// Function ID: 97547
// Name: JSONEncoding
// Dependencies: [6, 7, 12617, 4677, 2]

// Module 12616 (JSONEncoding)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import getErlpackEncoding from "getErlpackEncoding";
import { ProcessArgs } from "ProcessArgs";

getErlpackEncoding = getErlpackEncoding.getErlpackEncoding();
const tmp3 = (() => {
  class JSONEncoding {
    constructor() {
      tmp = JSONEncoding(this, JSONEncoding);
      return;
    }
  }
  let obj = {
    key: "pack",
    value(arg0) {
      return JSON.stringify(arg0);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "unpack",
    value(arg0) {
      if ("string" !== typeof arg0) {
        let _Error = Error;
        let tmp4 = null;
        if (null != arg0) {
          tmp4 = tmp;
        }
        const _HermesInternal = HermesInternal;
        const prototype = _Error.prototype;
        _Error = new _Error("Expected a string to be passed to JSONEncoding.unpack, got " + tmp4);
        throw _Error;
      } else {
        const _JSON = JSON;
        return JSON.parse(arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getName",
    value() {
      return "json";
    }
  };
  items[2] = obj;
  items[3] = {
    key: "wantsString",
    value() {
      return true;
    }
  };
  return callback(JSONEncoding, items);
})();
let tmp4 = tmp3;
if (undefined !== getErlpackEncoding) {
  tmp4 = getErlpackEncoding;
}
if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
  tmp4 = tmp3;
}
const result = require("getErlpackEncoding").fileFinishedImporting("modules/gateway/GatewayEncoding.tsx");

export default tmp4;
