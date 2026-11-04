// Module ID: 12014
// Function ID: 12015
// Name: WebViewWindowProxySocketFactory
// Dependencies: [12015, 12002, 2]
// Exports: default

// Module 12014 (WebViewWindowProxySocketFactory)
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 12002 */;
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
  const tmp = new logger(12015)(obj);
  return tmp;
};
