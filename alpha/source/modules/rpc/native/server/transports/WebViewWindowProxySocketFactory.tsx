// Module ID: 9595
// Function ID: 9596
// Name: WebViewWindowProxySocketFactory
// Dependencies: [9596, 9584, 2]
// Exports: default

// Module 9595 (WebViewWindowProxySocketFactory)
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(9596)({
    source,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const combined = "Socket Emit: " + id;
      logger.info(combined, stripSensitiveLoggingDataDefault(arg0));
    }
  });
};
