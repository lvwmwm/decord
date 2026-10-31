// Module ID: 11816
// Function ID: 11817
// Name: WebViewWindowProxySocketFactory
// Dependencies: [11817, 11804, 2]
// Exports: default

// Module 11816 (WebViewWindowProxySocketFactory)
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 11804 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  let context;
  let encoding;
  let postClose;
  let postMessageToRPCClient;
  let source;
  let version;
  logger = logger.logger;
  ({ source, context, postMessageToRPCClient, version, encoding, postClose } = logger);
  const obj = {
    source,
    context,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const info = logger.info;
      const combined = "Socket Emit: " + id;
      info(combined, stripSensitiveLoggingDataDefault(arg0));
    }
  };
  const tmp = new logger(11817)(obj);
  return tmp;
};
