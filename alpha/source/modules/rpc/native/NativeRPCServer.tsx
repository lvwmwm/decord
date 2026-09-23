// Module ID: 14892
// Function ID: 14893
// Name: NativeRPCServer
// Dependencies: [9662, 14893, 2]

// Module 14892 (NativeRPCServer)
import root from "root" /* 9662 */;
import RPCServerDefault from "RPCServer" /* 14893 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
