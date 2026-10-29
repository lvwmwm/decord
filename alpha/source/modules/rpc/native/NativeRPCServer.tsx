// Module ID: 9295
// Function ID: 9296
// Name: NativeRPCServer
// Dependencies: [9296, 9297, 2]

// Module 9295 (NativeRPCServer)
import _mod9296 from "module_9296" /* 9296 */;
import RPCServerDefault from "RPCServer" /* 9297 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9296));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
