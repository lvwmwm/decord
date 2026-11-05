// Module ID: 9481
// Function ID: 9482
// Name: NativeRPCServer
// Dependencies: [9482, 9483, 2]

// Module 9481 (NativeRPCServer)
import _mod9482 from "module_9482" /* 9482 */;
import RPCServerDefault from "RPCServer" /* 9483 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9482));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
