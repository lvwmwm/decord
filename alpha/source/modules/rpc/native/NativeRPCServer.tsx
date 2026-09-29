// Module ID: 14259
// Function ID: 14260
// Name: NativeRPCServer
// Dependencies: [8937, 14260, 2]

// Module 14259 (NativeRPCServer)
import root from "root" /* 8937 */;
import RPCServerDefault from "RPCServer" /* 14260 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
