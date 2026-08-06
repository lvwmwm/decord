// Module ID: 10544
// Function ID: 10545
// Name: logger
// Dependencies: [10545, 10533, 2]
// Exports: default

// Module 10544 (logger)
const result = require("set").fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  let encoding;
  let postClose;
  let postMessageToRPCClient;
  let source;
  let version;
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(10545)({
    source,
    postMessageToRPCClient,
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
