// Module ID: 9192
// Function ID: 9193
// Name: NativeRPCServer
// Dependencies: [9193, 9194, 2]

// Module 9192 (NativeRPCServer)
import _mod9193 from "module_9193" /* 9193 */;
import RPCServerDefault from "RPCServer" /* 9194 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9193));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
