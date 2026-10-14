// Module ID: 15148
// Function ID: 15149
// Name: NativeRPCServer
// Dependencies: [11012, 15149, 2]

// Module 15148 (NativeRPCServer)
import _mod11012 from "module_11012" /* 11012 */;
import RPCServerDefault from "RPCServer" /* 15149 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod11012));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
