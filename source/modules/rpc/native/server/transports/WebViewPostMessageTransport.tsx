// Module ID: 10723
// Function ID: 10724
// Dependencies: [3, 10724, 10725, 10731, 10735, 2]

// Module 10723
import importDefaultResult from "map";

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new require("validateSocketClient")("RPCServer:PostMessage"), require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10724)(arg0));
});
const tmp2 = new require("validateSocketClient")("RPCServer:PostMessage");
const result = require("map").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;
