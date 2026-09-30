// Module ID: 14288
// Function ID: 14289
// Name: NativeRPCServer
// Dependencies: [8971, 14289, 2]

// Module 14288 (NativeRPCServer)
import root from "root" /* 8971 */;
import RPCServerDefault from "RPCServer" /* 14289 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
