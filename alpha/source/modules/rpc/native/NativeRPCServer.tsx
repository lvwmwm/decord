// Module ID: 7234
// Function ID: 7235
// Name: NativeRPCServer
// Dependencies: [7235, 7236, 2]

// Module 7234 (NativeRPCServer)
import _mod7235 from "module_7235" /* 7235 */;
import RPCServerDefault from "RPCServer" /* 7236 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod7235));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
