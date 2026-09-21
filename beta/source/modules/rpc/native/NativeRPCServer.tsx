// Module ID: 14809
// Function ID: 14810
// Name: NativeRPCServer
// Dependencies: [9579, 14810, 2]

// Module 14809 (NativeRPCServer)
import root from "root" /* 9579 */;
import RPCServerDefault from "RPCServer" /* 14810 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
