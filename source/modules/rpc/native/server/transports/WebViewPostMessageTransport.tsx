// Module ID: 10492
// Function ID: 81260
// Name: importDefaultResult1
// Dependencies: [3, 10493, 10494, 10500, 10504, 2]

// Module 10492 (importDefaultResult1)
import importDefaultResult from "validateSocketClient";
import importDefaultResult1 from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult("RPCServer:PostMessage");
importDefaultResult1 = new importDefaultResult1(require("validateSocketClient").validateSocketClient, importDefaultResult, require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(10493)(arg0));
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
