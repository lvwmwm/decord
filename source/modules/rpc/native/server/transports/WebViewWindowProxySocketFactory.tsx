// Module ID: 9432
// Function ID: 9433
// Name: logger
// Dependencies: [9433, 9421, 2]
// Exports: default

// Module 9432 (logger)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(9433)({
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
