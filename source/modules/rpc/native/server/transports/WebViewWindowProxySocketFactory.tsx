// Module ID: 10493
// Function ID: 81915
// Name: logger
// Dependencies: []
// Exports: default

// Module 10493 (logger)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  let encoding;
  let frameId;
  let origin;
  let postClose;
  let postMessageToRPCClient;
  let version;
  logger = logger.logger;
  const importDefault = logger;
  ({ origin, postMessageToRPCClient, frameId, version, encoding, postClose } = logger);
  let tmp = importDefault(dependencyMap[0]);
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
      logger.info(combined, logger(closure_1[1])(arg0));
    }
  });
  return tmp;
};
