// Module ID: 14087
// Function ID: 14088
// Name: NativeRPCServer
// Dependencies: [8772, 14088, 2]

// Module 14087 (NativeRPCServer)
import root from "root" /* 8772 */;
import RPCServerDefault from "RPCServer" /* 14088 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
