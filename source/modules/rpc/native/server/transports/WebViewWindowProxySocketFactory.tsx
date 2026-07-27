// Module ID: 10562
// Function ID: 82315
// Name: logger
// Dependencies: [10563, 10551, 2]
// Exports: default

// Module 10562 (logger)
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
  let tmp = logger(10563);
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
