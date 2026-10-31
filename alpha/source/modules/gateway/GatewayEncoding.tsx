// Module ID: 15524
// Function ID: 15525
// Name: GatewayEncoding
// Dependencies: [15525, 7383, 2]

// Module 15524 (GatewayEncoding)
import ProcessArgs2 from "ProcessArgs" /* 7383 */;
import GatewayEncodingErlpackEncoding_mod from "GatewayEncodingErlpackEncoding" /* 15525 */;
import size from "module_2" /* 2 */;

let GatewayEncodingErlpackEncoding = GatewayEncodingErlpackEncoding_mod;
GatewayEncodingErlpackEncoding = GatewayEncodingErlpackEncoding.getErlpackEncoding();
class JSONEncoding {
  pack(arg0) {
    return JSON.stringify(arg0);
  }
  unpack(str) {
    if (typeof str !== "string") {
      let tmp2 = null;
      const _Error = Error;
      if (null != str) {
        tmp2 = typeof str;
      }
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const _Error1 = new _Error("Expected a string to be passed to JSONEncoding.unpack, got " + tmp2);
      throw _Error1;
    } else {
      const _JSON = JSON;
      return JSON.parse(str);
    }
  }
  getName() {
    return "json";
  }
  wantsString() {
    return true;
  }
}
const prototype = JSONEncoding.prototype;
let tmp3 = JSONEncoding;
if (undefined !== GatewayEncodingErlpackEncoding) {
  tmp3 = GatewayEncodingErlpackEncoding;
}
const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
  tmp3 = JSONEncoding;
}
const result = size.fileFinishedImporting("modules/gateway/GatewayEncoding.tsx");

export default tmp3;
