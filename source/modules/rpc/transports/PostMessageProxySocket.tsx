// Module ID: 10488
// Function ID: 81895
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10488 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const TransportTypes = arg1(dependencyMap[5]).TransportTypes;
const RPCCloseCodes = arg1(dependencyMap[6]).RPCCloseCodes;
const tmp2 = (arg0) => {
  class WindowProxySocket {
    constructor(arg0) {
      self = this;
      encoding = arg0.encoding;
      ({ origin, postMessageToRPCClient, frameId, version, logger, postClose, onSendingToRPCClient } = arg0);
      tmp = closure_2(this, WindowProxySocket);
      items = [, , ];
      items[0] = closure_7.POST_MESSAGE;
      items[1] = version;
      items[2] = encoding;
      obj = closure_5(WindowProxySocket);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      items1 = [null, null];
      if (-1 === items1.indexOf(encoding)) {
        tmp16 = WindowProxySocket;
        tmp17 = closure_1;
        num2 = 7;
        tmp18 = WindowProxySocket(closure_1[7]);
        obj = {};
        tmp19 = closure_8;
        obj.closeCode = closure_8.INVALID_ENCODING;
        tmp20 = globalThis;
        _HermesInternal = HermesInternal;
        str2 = "Invalid Encoding: ";
        prototype2 = tmp18.prototype;
        tmp21 = new.target;
        tmp22 = new.target;
        tmp23 = obj;
        tmp18 = new tmp18(obj, "Invalid Encoding: " + encoding);
        tmp25 = tmp18;
        throw tmp18;
      } else {
        str3 = "etf";
        if ("etf" === encoding) {
          tmp7 = WindowProxySocket;
          tmp8 = closure_1;
          num = 7;
          tmp9 = WindowProxySocket(closure_1[7]);
          obj1 = {};
          tmp10 = closure_8;
          obj1.closeCode = closure_8.INVALID_ENCODING;
          prototype = tmp9.prototype;
          tmp11 = new.target;
          str = "Erlpack cannot be used on this client";
          tmp12 = new.target;
          tmp13 = obj1;
          tmp9 = new tmp9(obj1, "Erlpack cannot be used on this client");
          tmp15 = tmp9;
          throw tmp9;
        } else {
          tmp2Result.origin = origin;
          tmp2Result.postMessageToRPCClient = postMessageToRPCClient;
          tmp2Result.frameId = frameId;
          tmp2Result.logger = logger;
          tmp2Result.postClose = postClose;
          tmp2Result.onSendingToRPCClient = onSendingToRPCClient;
          flag = false;
          tmp2Result.closed = false;
          return tmp2Result;
        }
      }
    }
  }
  const importDefault = WindowProxySocket;
  callback2(WindowProxySocket, arg0);
  let obj = {
    key: "send",
    value(arg0) {
      const self = this;
      const onSendingToRPCClient = this.onSendingToRPCClient;
      if (null != onSendingToRPCClient) {
        onSendingToRPCClient.call(self, arg0, self.id);
      }
      const items = [WindowProxySocket(closure_1[8]).FRAME, arg0];
      const result = self.postMessageToRPCClient(items, self.origin);
    }
  };
  const items = [obj, ];
  obj = {
    key: "close",
    value(code, message) {
      const self = this;
      if (!this.closed) {
        const obj = { code, message };
        self.postClose(self.origin, obj, self.postMessageToRPCClient);
      }
      self.closed = true;
    }
  };
  items[1] = obj;
  return callback(WindowProxySocket, items);
}(importDefault(dependencyMap[9]));
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/rpc/transports/PostMessageProxySocket.tsx");

export default tmp2;
