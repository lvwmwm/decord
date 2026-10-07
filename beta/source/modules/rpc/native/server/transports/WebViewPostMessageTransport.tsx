// Module ID: 9022
// Function ID: 9023
// Name: WebViewPostMessageTransport
// Dependencies: [3, 9023, 9024, 9030, 9034, 2]

// Module 9022 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9023 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 9030 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 9034 */;
import PostMessageTransport from "PostMessageTransport" /* 9024 */;
import size from "module_2" /* 2 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const importDefaultResult1 = new PostMessageTransport(NativeRPCHelpers.validateSocketClient, tmp2, WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  info = info.info;
  const combined = "Socket Message: " + id.id;
  info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
