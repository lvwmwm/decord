// Module ID: 11147
// Function ID: 11148
// Name: BaseSocket
// Dependencies: [1085, 12, 11134, 2]

// Module 11147 (BaseSocket)
import _modDef12 from "module_12" /* 12 */;
import RPCErrorDefault from "RPCError" /* 11134 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ RPC_VERSION: c2, RPCCloseCodes: c3 } = Constants);
const result = size.fileFinishedImporting("modules/rpc/transports/BaseSocket.tsx");
class BaseSocket {
  constructor(source, version, encoding) {
    const merged = Object.assign({ id: null, authorization: null, application: null, abortController: null });
    const obj2 = _modDef12;
    merged[0] = obj2.uniqueId();
    const obj = { authing: false, scopes: new Set(), accessToken: null, expires: new Date(0) };
    new Set();
    merged[1] = obj;
    merged[2] = { id: null, name: null, icon: null };
    new Date(0);
    const abortController = new AbortController();
    merged[3] = abortController;
    merged.source = source;
    merged.version = version;
    merged.encoding = encoding;
    merged.checkRpcVersion(version);
    return merged;
  }
  checkRpcVersion(version) {
    const obj = { closeCode: constants.INVALID_VERSION };
    const tmp2 = RPCErrorDefault;
    const tmp22 = new tmp2(obj, "Invalid Version: " + version);
    throw tmp22;
  }
}
Object.defineProperty(BaseSocket.prototype, "transport", {
  get: function transport() {
    return this.source.type;
  },
  set: undefined
});

export default BaseSocket;
