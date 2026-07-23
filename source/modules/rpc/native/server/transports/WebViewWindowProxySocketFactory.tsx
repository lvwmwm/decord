// Module ID: 10504
// Function ID: 81989
// Name: logger
// Dependencies: [10505, 10493, 2]
// Exports: default

// Module 10504 (logger)
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
  let tmp = logger(10505);
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
