// Module ID: 10511
// Function ID: 10512
// Dependencies: [3, 10512, 10513, 10519, 10523, 2]

// Module 10511
import importDefaultResult from "map";

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new require("validateSocketClient")("RPCServer:PostMessage"), require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10512)(arg0));
});
const tmp2 = new require("validateSocketClient")("RPCServer:PostMessage");
const result = require("map").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;
