// Module ID: 9308
// Function ID: 9309
// Name: NativeRPCServer
// Dependencies: [9309, 9310, 2]

// Module 9308 (NativeRPCServer)
import _mod9309 from "module_9309" /* 9309 */;
import RPCServerDefault from "RPCServer" /* 9310 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9309));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
