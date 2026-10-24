// Module ID: 9259
// Function ID: 9260
// Name: NativeRPCServer
// Dependencies: [9260, 9261, 2]

// Module 9259 (NativeRPCServer)
import _mod9260 from "module_9260" /* 9260 */;
import RPCServerDefault from "RPCServer" /* 9261 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9260));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
