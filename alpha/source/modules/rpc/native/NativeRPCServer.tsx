// Module ID: 9415
// Function ID: 9416
// Name: NativeRPCServer
// Dependencies: [9416, 9417, 2]

// Module 9415 (NativeRPCServer)
import _mod9416 from "module_9416" /* 9416 */;
import RPCServerDefault from "RPCServer" /* 9417 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9416));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
