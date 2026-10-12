// Module ID: 14789
// Function ID: 14790
// Name: NativeRPCServer
// Dependencies: [10938, 14790, 2]

// Module 14789 (NativeRPCServer)
import _mod10938 from "module_10938" /* 10938 */;
import RPCServerDefault from "RPCServer" /* 14790 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod10938));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
