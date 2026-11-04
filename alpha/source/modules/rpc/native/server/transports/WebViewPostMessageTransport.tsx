// Module ID: 12001
// Function ID: 12002
// Name: WebViewPostMessageTransport
// Dependencies: [3, 12002, 12003, 12009, 12014, 2]

// Module 12001 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 12002 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 12009 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 12014 */;
import PostMessageTransport from "PostMessageTransport" /* 12003 */;
import size from "module_2" /* 2 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const importDefaultResult1 = new PostMessageTransport(NativeRPCHelpers.validateSocketClient, tmp2, WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  info = info.info;
  const combined = "Socket Message: " + id.id;
  info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
