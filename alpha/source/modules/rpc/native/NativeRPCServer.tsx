// Module ID: 15110
// Function ID: 15111
// Name: NativeRPCServer
// Dependencies: [10938, 15111, 2]

// Module 15110 (NativeRPCServer)
import _mod10938 from "module_10938" /* 10938 */;
import RPCServerDefault from "RPCServer" /* 15111 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod10938));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
