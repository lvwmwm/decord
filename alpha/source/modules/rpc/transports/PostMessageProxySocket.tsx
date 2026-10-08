// Module ID: 11146
// Function ID: 11147
// Name: PostMessageProxySocket
// Dependencies: [1085, 11147, 11134, 11133, 2]

// Module 11146 (PostMessageProxySocket)
import Constants from "Constants" /* 1085 */;
import RPCOpcodesDefault from "RPCOpcodes" /* 11133 */;
import RPCErrorDefault from "RPCError" /* 11134 */;
import BaseSocket from "BaseSocket" /* 11147 */;
import size from "module_2" /* 2 */;

const RPCCloseCodes = Constants.RPCCloseCodes;
class WindowProxySocket extends BaseSocket {
  constructor(source) {
    let context;
    let encoding;
    let logger;
    let onSendingToRPCClient;
    let postClose;
    let postMessageToRPCClient;
    ({ context, postMessageToRPCClient, encoding, logger } = source);
    ({ postClose, onSendingToRPCClient } = source);
    const tmp3 = new WindowProxySocket(source.source, source.version, encoding, tmp2, tmp, new.target, this, context, postMessageToRPCClient, logger);
    const items = ["etf", "json"];
    if (-1 === items.indexOf(encoding)) {
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const obj2 = { closeCode: RPCCloseCodes.INVALID_ENCODING };
      const tmp13 = RPCErrorDefault;
      const tmp132 = new tmp13(obj2, "Invalid Encoding: " + encoding);
      throw tmp132;
    } else if ("etf" === encoding) {
      const self = this;
      const self2 = this;
      const obj = { closeCode: RPCCloseCodes.INVALID_ENCODING };
      const tmp9 = new RPCErrorDefault(obj, "Erlpack cannot be used on this client");
      throw tmp9;
    } else {
      tmp3.context = context;
      tmp3.postMessageToRPCClient = postMessageToRPCClient;
      tmp3.logger = logger;
      tmp3.postClose = postClose;
      tmp3.onSendingToRPCClient = onSendingToRPCClient;
      tmp3.closed = false;
      return tmp3;
    }
  }
  send(arg0) {
    const self = this;
    const onSendingToRPCClient = this.onSendingToRPCClient;
    if (onSendingToRPCClient != null) {
      onSendingToRPCClient(arg0, self.id);
    }
    const postMessageToRPCClient = self.postMessageToRPCClient;
    const items = [RPCOpcodesDefault.FRAME, arg0];
    const result = postMessageToRPCClient(items, self.source.origin);
  }
  close(code, message) {
    const self = this;
    if (!this.closed) {
      const obj = { code, message };
      self.postClose(self.source, obj, self.postMessageToRPCClient);
    }
    self.closed = true;
  }
}
const prototype = WindowProxySocket.prototype;
let result = size.fileFinishedImporting("modules/rpc/transports/PostMessageProxySocket.tsx");

export default WindowProxySocket;
