// Module ID: 14812
// Function ID: 14813
// Name: NativeRPCServer
// Dependencies: [9589, 14813, 2]

// Module 14812 (NativeRPCServer)
import root from "root" /* 9589 */;
import RPCServerDefault from "RPCServer" /* 14813 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
