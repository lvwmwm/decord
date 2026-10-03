// Module ID: 14364
// Function ID: 14365
// Name: NativeRPCServer
// Dependencies: [9028, 14365, 2]

// Module 14364 (NativeRPCServer)
import _mod9028 from "module_9028" /* 9028 */;
import RPCServerDefault from "RPCServer" /* 14365 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9028));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
