// Module ID: 14296
// Function ID: 14297
// Name: NativeRPCServer
// Dependencies: [8964, 14297, 2]

// Module 14296 (NativeRPCServer)
import root from "root" /* 8964 */;
import RPCServerDefault from "RPCServer" /* 14297 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
