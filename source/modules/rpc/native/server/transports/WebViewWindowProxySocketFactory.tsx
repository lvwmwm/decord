// Module ID: 10648
// Function ID: 10649
// Name: logger
// Dependencies: [10649, 10637, 2]
// Exports: default

// Module 10648 (logger)
const result = require("set").fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  let encoding;
  let frameId;
  let origin;
  let postClose;
  let postMessageToRPCClient;
  let version;
  logger = logger.logger;
  ({ origin, postMessageToRPCClient, frameId, version, encoding, postClose } = logger);
  return new logger(10649)({
    origin,
    postMessageToRPCClient,
    frameId,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const combined = "Socket Emit: " + id;
      logger.info(combined, logger(outer1_1[1])(arg0));
    }
  });
};
