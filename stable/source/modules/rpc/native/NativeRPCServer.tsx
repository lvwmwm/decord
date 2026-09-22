// Module ID: 14614
// Function ID: 14615
// Name: NativeRPCServer
// Dependencies: [9686, 14615, 2]

// Module 14614 (NativeRPCServer)
import root from "root" /* 9686 */;
import RPCServerDefault from "RPCServer" /* 14615 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
