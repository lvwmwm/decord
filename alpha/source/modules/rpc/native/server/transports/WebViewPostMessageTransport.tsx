// Module ID: 11130
// Function ID: 11131
// Name: WebViewPostMessageTransport
// Dependencies: [3, 11131, 11132, 11141, 11145, 2]

// Module 11130 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 11131 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 11141 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 11145 */;
import PostMessageTransport from "PostMessageTransport" /* 11132 */;
import size from "module_2" /* 2 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const importDefaultResult1 = new PostMessageTransport(NativeRPCHelpers.validateSocketClient, tmp2, WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  info = info.info;
  const combined = "Socket Message: " + id.id;
  info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
