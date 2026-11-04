// Module ID: 9291
// Function ID: 9292
// Name: NativeRPCServer
// Dependencies: [9292, 9293, 2]

// Module 9291 (NativeRPCServer)
import _mod9292 from "module_9292" /* 9292 */;
import RPCServerDefault from "RPCServer" /* 9293 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9292));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
