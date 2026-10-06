// Module ID: 14386
// Function ID: 14387
// Name: NativeRPCServer
// Dependencies: [9061, 14387, 2]

// Module 14386 (NativeRPCServer)
import _mod9061 from "module_9061" /* 9061 */;
import RPCServerDefault from "RPCServer" /* 14387 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9061));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
