// Module ID: 9456
// Function ID: 9457
// Name: NativeRPCServer
// Dependencies: [9457, 9458, 2]

// Module 9456 (NativeRPCServer)
import _mod9457 from "module_9457" /* 9457 */;
import RPCServerDefault from "RPCServer" /* 9458 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9457));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
