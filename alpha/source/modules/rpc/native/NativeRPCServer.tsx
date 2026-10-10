// Module ID: 14765
// Function ID: 14766
// Name: NativeRPCServer
// Dependencies: [10938, 14766, 2]

// Module 14765 (NativeRPCServer)
import _mod10938 from "module_10938" /* 10938 */;
import RPCServerDefault from "RPCServer" /* 14766 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod10938));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
