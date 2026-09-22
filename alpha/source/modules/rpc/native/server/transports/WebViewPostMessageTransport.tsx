// Module ID: 9583
// Function ID: 9584
// Name: WebViewPostMessageTransport
// Dependencies: [3, 9584, 9585, 9591, 9595, 2]

// Module 9583 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9584 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 9595 */;
import PostMessageTransport from "PostMessageTransport" /* 9585 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default new PostMessageTransport(fn(9591).validateSocketClient, new LoggerDefault("RPCServer:PostMessage"), WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
