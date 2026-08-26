// Module ID: 10904
// Function ID: 10905
// Name: logger
// Dependencies: [10905, 10893, 2]
// Exports: default

// Module 10904 (logger)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(10905)({
    source,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const combined = "Socket Emit: " + id;
      logger.info(combined, logger(closure_1_1[1])(arg0));
    }
  });
};
