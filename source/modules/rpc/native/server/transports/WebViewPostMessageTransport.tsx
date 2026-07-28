// Module ID: 10588
// Function ID: 81707
// Name: importDefaultResult1
// Dependencies: [3, 10589, 10590, 10596, 10600, 2]

// Module 10588 (importDefaultResult1)
import importDefaultResult from "validateSocketClient";
import importDefaultResult1 from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult("RPCServer:PostMessage");
importDefaultResult1 = new importDefaultResult1(require("validateSocketClient").validateSocketClient, importDefaultResult, require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10589)(arg0));
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
