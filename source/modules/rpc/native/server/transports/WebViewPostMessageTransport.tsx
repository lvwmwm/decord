// Module ID: 10549
// Function ID: 81581
// Name: importDefaultResult1
// Dependencies: [3, 10550, 10551, 10557, 10561, 2]

// Module 10549 (importDefaultResult1)
import importDefaultResult from "validateSocketClient";
import importDefaultResult1 from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult("RPCServer:PostMessage");
importDefaultResult1 = new importDefaultResult1(require("validateSocketClient").validateSocketClient, importDefaultResult, require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10550)(arg0));
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
