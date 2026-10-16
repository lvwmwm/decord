// Module ID: 15480
// Function ID: 15481
// Name: NativeRPCServer
// Dependencies: [11252, 15481, 2]

// Module 15480 (NativeRPCServer)
import _mod11252 from "module_11252" /* 11252 */;
import RPCServerDefault from "RPCServer" /* 15481 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod11252));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
