// Module ID: 9577
// Function ID: 9578
// Name: WebViewPostMessageTransport
// Dependencies: [3, 9578, 9579, 9585, 9589, 2]

// Module 9577 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9578 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 9589 */;
import PostMessageTransport from "PostMessageTransport" /* 9579 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default new PostMessageTransport(fn(9585).validateSocketClient, new LoggerDefault("RPCServer:PostMessage"), WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
