// Module ID: 10535
// Function ID: 82192
// Name: BaseSocket
// Dependencies: [6, 7, 653, 22, 10525, 2]

// Module 10535 (BaseSocket)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import ME from "ME";

let closure_4;
let closure_5;
({ RPC_VERSION: closure_4, RPCCloseCodes: closure_5 } = ME);
const tmp3 = (() => {
  class BaseSocket {
    constructor(arg0, arg1, arg2) {
      tmp = outer1_2(this, BaseSocket);
      this.transport = arg0;
      this.version = arg1;
      this.encoding = arg2;
      obj = BaseSocket(outer1_1[3]);
      this.id = obj.uniqueId();
      obj = { authing: false, scopes: null, accessToken: null };
      obj.scopes = [];
      date = new Date(0);
      obj.expires = date;
      this.authorization = obj;
      this.application = { id: null, name: null, icon: null };
      abortController = new AbortController();
      this.abortController = abortController;
      checkRpcVersionResult = this.checkRpcVersion(arg1);
      return;
    }
  }
  const items = [
    {
      key: "checkRpcVersion",
      value(arg0) {
        let tmp2 = BaseSocket(outer1_1[4]);
        tmp2 = new tmp2({ closeCode: outer1_5.INVALID_VERSION }, "Invalid Version: " + arg0);
        throw tmp2;
      }
    }
  ];
  return callback(BaseSocket, items);
})();
const result = require("ME").fileFinishedImporting("modules/rpc/transports/BaseSocket.tsx");

export default tmp3;
