// Module ID: 14901
// Function ID: 14902
// Name: NativeRPCServer
// Dependencies: [9666, 14902, 2]

// Module 14901 (NativeRPCServer)
import root from "root" /* 9666 */;
import RPCServerDefault from "RPCServer" /* 14902 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
