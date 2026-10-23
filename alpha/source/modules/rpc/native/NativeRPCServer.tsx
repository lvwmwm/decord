// Module ID: 9258
// Function ID: 9259
// Name: NativeRPCServer
// Dependencies: [9259, 9260, 2]

// Module 9258 (NativeRPCServer)
import _mod9259 from "module_9259" /* 9259 */;
import RPCServerDefault from "RPCServer" /* 9260 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9259));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
