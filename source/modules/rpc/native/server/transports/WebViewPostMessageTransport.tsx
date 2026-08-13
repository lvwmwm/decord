// Module ID: 10707
// Function ID: 10708
// Dependencies: [3, 10708, 10709, 10715, 10719, 2]

// Module 10707
import importDefaultResult from "map";

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new require("validateSocketClient")("RPCServer:PostMessage"), require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10708)(arg0));
});
const tmp2 = new require("validateSocketClient")("RPCServer:PostMessage");
const result = require("map").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;
