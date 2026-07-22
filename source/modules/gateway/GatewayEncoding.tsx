// Module ID: 12451
// Function ID: 95070
// Name: JSONEncoding
// Dependencies: []

// Module 12451 (JSONEncoding)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const erlpackEncoding = arg1(dependencyMap[2]).getErlpackEncoding();
const tmp3 = () => {
  class JSONEncoding {
    constructor() {
      tmp = JSONEncoding(this, JSONEncoding);
      return;
    }
  }
  let closure_0 = JSONEncoding;
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
}();
let tmp4 = tmp3;
if (undefined !== erlpackEncoding) {
  tmp4 = erlpackEncoding;
}
const ProcessArgs = arg1(dependencyMap[3]).ProcessArgs;
if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
  tmp4 = tmp3;
}
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/gateway/GatewayEncoding.tsx");

export default tmp4;
