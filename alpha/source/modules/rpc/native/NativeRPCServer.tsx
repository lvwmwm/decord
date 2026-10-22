// Module ID: 9235
// Function ID: 9236
// Name: NativeRPCServer
// Dependencies: [9236, 9237, 2]

// Module 9235 (NativeRPCServer)
import _mod9236 from "module_9236" /* 9236 */;
import RPCServerDefault from "RPCServer" /* 9237 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9236));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
