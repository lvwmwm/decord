// Module ID: 11321
// Function ID: 11322
// Name: WebViewWindowProxySocketFactory
// Dependencies: [11322, 11309, 2]
// Exports: default

// Module 11321 (WebViewWindowProxySocketFactory)
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 11309 */;
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
  const tmp = new logger(11322)(obj);
  return tmp;
};
