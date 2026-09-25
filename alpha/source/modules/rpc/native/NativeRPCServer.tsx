// Module ID: 14063
// Function ID: 14064
// Name: NativeRPCServer
// Dependencies: [8764, 14064, 2]

// Module 14063 (NativeRPCServer)
import root from "root" /* 8764 */;
import RPCServerDefault from "RPCServer" /* 14064 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
