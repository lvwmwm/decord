// Module ID: 14088
// Function ID: 14089
// Name: NativeRPCServer
// Dependencies: [8772, 14089, 2]

// Module 14088 (NativeRPCServer)
import root from "root" /* 8772 */;
import RPCServerDefault from "RPCServer" /* 14089 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
