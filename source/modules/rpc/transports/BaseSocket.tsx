// Module ID: 10489
// Function ID: 81903
// Name: BaseSocket
// Dependencies: []

// Module 10489 (BaseSocket)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ RPC_VERSION: closure_4, RPCCloseCodes: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const tmp3 = () => {
  class BaseSocket {
    constructor(arg0, arg1, arg2) {
      tmp = closure_2(this, BaseSocket);
      this.transport = arg0;
      this.version = arg1;
      this.encoding = arg2;
      obj = BaseSocket(closure_1[3]);
      this.id = obj.uniqueId();
      obj = { 9223372036854775807: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044245640687327334, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001732031649845995, 9223372036854775807: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001385258042816805 };
      obj.scopes = [];
      date = new Date(0);
      obj.expires = date;
      this.authorization = obj;
      this.application = { "Null": "Normal", "Null": true, "Null": "AbortSignal" };
      abortController = new AbortController();
      this.abortController = abortController;
      checkRpcVersionResult = this.checkRpcVersion(arg1);
      return;
    }
  }
  const importDefault = BaseSocket;
  const items = [
    {
      key: "checkRpcVersion",
      value(arg0) {
        let tmp2 = BaseSocket(closure_1[4]);
        tmp2 = new tmp2({ closeCode: constants.INVALID_VERSION }, "Invalid Version: " + arg0);
        throw tmp2;
      }
    }
  ];
  return callback(BaseSocket, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/rpc/transports/BaseSocket.tsx");

export default tmp3;
