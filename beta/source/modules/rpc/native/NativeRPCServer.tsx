// Module ID: 14847
// Function ID: 14848
// Name: NativeRPCServer
// Dependencies: [9611, 14848, 2]

// Module 14847 (NativeRPCServer)
import root from "root" /* 9611 */;
import RPCServerDefault from "RPCServer" /* 14848 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
