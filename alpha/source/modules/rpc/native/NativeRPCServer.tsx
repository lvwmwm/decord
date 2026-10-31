// Module ID: 9328
// Function ID: 9329
// Name: NativeRPCServer
// Dependencies: [9329, 9330, 2]

// Module 9328 (NativeRPCServer)
import _mod9329 from "module_9329" /* 9329 */;
import RPCServerDefault from "RPCServer" /* 9330 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9329));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
