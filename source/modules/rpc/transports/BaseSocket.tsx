// Module ID: 10496
// Function ID: 81950
// Name: BaseSocket
// Dependencies: []

// Module 10496 (BaseSocket)
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
      obj = { 9223372036854775807: true, -9223372036854775808: true, 9223372036854775807: true };
      obj.scopes = [];
      date = new Date(0);
      obj.expires = date;
      this.authorization = obj;
      this.application = { 1527072082: "mn", 1689805058: "description", EMPTY_SEARCH_QUERY_STRING: "Array" };
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
