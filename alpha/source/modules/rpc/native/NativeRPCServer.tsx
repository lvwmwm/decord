// Module ID: 9219
// Function ID: 9220
// Name: NativeRPCServer
// Dependencies: [9220, 9221, 2]

// Module 9219 (NativeRPCServer)
import _mod9220 from "module_9220" /* 9220 */;
import RPCServerDefault from "RPCServer" /* 9221 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9220));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
