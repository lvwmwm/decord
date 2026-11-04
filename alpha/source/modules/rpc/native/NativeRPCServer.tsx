// Module ID: 9474
// Function ID: 9475
// Name: NativeRPCServer
// Dependencies: [9475, 9476, 2]

// Module 9474 (NativeRPCServer)
import _mod9475 from "module_9475" /* 9475 */;
import RPCServerDefault from "RPCServer" /* 9476 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9475));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
