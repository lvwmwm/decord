// Module ID: 14837
// Function ID: 14838
// Name: NativeRPCServer
// Dependencies: [9615, 14838, 2]

// Module 14837 (NativeRPCServer)
import root from "root" /* 9615 */;
import RPCServerDefault from "RPCServer" /* 14838 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
