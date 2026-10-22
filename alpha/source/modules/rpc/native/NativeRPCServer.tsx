// Module ID: 9228
// Function ID: 9229
// Name: NativeRPCServer
// Dependencies: [9229, 9230, 2]

// Module 9228 (NativeRPCServer)
import _mod9229 from "module_9229" /* 9229 */;
import RPCServerDefault from "RPCServer" /* 9230 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9229));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
