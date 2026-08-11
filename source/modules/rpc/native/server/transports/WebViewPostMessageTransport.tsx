// Module ID: 10738
// Function ID: 10739
// Dependencies: [3, 10739, 10740, 10746, 10750, 2]

// Module 10738
import importDefaultResult from "map";

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new require("validateSocketClient")("RPCServer:PostMessage"), require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10739)(arg0));
});
const tmp2 = new require("validateSocketClient")("RPCServer:PostMessage");
const result = require("map").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;
