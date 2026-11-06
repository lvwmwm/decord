// Module ID: 9427
// Function ID: 9428
// Name: NativeRPCServer
// Dependencies: [9428, 9429, 2]

// Module 9427 (NativeRPCServer)
import _mod9428 from "module_9428" /* 9428 */;
import RPCServerDefault from "RPCServer" /* 9429 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9428));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
