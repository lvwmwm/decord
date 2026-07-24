// Module ID: 10533
// Function ID: 82181
// Name: logger
// Dependencies: [10534, 10522, 2]
// Exports: default

// Module 10533 (logger)
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
  let tmp = logger(10534);
  tmp = new tmp({
    origin,
    postMessageToRPCClient,
    frameId,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, arg1) {
      const combined = "Socket Emit: " + arg1;
      logger.info(combined, logger(outer1_1[1])(arg0));
    }
  });
  return tmp;
};
