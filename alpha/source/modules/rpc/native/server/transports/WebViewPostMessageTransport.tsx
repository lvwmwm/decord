// Module ID: 11426
// Function ID: 11427
// Name: WebViewPostMessageTransport
// Dependencies: [3, 11427, 11428, 11434, 11439, 2]

// Module 11426 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 11427 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 11434 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 11439 */;
import PostMessageTransport from "PostMessageTransport" /* 11428 */;
import size from "module_2" /* 2 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const importDefaultResult1 = new PostMessageTransport(NativeRPCHelpers.validateSocketClient, tmp2, WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  info = info.info;
  const combined = "Socket Message: " + id.id;
  info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
