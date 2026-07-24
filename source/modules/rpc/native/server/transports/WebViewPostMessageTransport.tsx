// Module ID: 10521
// Function ID: 81452
// Name: importDefaultResult1
// Dependencies: [3, 10522, 10523, 10529, 10533, 2]

// Module 10521 (importDefaultResult1)
import importDefaultResult from "validateSocketClient";
import importDefaultResult1 from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult("RPCServer:PostMessage");
importDefaultResult1 = new importDefaultResult1(require("validateSocketClient").validateSocketClient, importDefaultResult, require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10522)(arg0));
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
