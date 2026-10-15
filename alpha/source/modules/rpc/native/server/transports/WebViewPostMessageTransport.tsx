// Module ID: 11230
// Function ID: 11231
// Name: WebViewPostMessageTransport
// Dependencies: [3, 11231, 11232, 11242, 11246, 2]

// Module 11230 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 11231 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 11242 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 11246 */;
import PostMessageTransport from "PostMessageTransport" /* 11232 */;
import size from "module_2" /* 2 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const importDefaultResult1 = new PostMessageTransport(NativeRPCHelpers.validateSocketClient, tmp2, WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  info = info.info;
  const combined = "Socket Message: " + id.id;
  info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
