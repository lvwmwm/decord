// Module ID: 9180
// Function ID: 9181
// Name: NativeRPCServer
// Dependencies: [9181, 9182, 2]

// Module 9180 (NativeRPCServer)
import _mod9181 from "module_9181" /* 9181 */;
import RPCServerDefault from "RPCServer" /* 9182 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9181));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
