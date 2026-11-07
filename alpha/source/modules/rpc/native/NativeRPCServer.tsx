// Module ID: 9409
// Function ID: 9410
// Name: NativeRPCServer
// Dependencies: [9410, 9411, 2]

// Module 9409 (NativeRPCServer)
import _mod9410 from "module_9410" /* 9410 */;
import RPCServerDefault from "RPCServer" /* 9411 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9410));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
