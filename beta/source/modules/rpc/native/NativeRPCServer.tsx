// Module ID: 7298
// Function ID: 7299
// Name: NativeRPCServer
// Dependencies: [7299, 7300, 2]

// Module 7298 (NativeRPCServer)
import _mod7299 from "module_7299" /* 7299 */;
import RPCServerDefault from "RPCServer" /* 7300 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod7299));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
