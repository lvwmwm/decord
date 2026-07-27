// Module ID: 10550
// Function ID: 81586
// Name: importDefaultResult1
// Dependencies: [3, 10551, 10552, 10558, 10562, 2]

// Module 10550 (importDefaultResult1)
import importDefaultResult from "validateSocketClient";
import importDefaultResult1 from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult("RPCServer:PostMessage");
importDefaultResult1 = new importDefaultResult1(require("validateSocketClient").validateSocketClient, importDefaultResult, require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10551)(arg0));
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
