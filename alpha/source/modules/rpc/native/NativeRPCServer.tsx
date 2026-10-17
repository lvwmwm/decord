// Module ID: 9164
// Function ID: 9165
// Name: NativeRPCServer
// Dependencies: [9165, 9166, 2]

// Module 9164 (NativeRPCServer)
import _mod9165 from "module_9165" /* 9165 */;
import RPCServerDefault from "RPCServer" /* 9166 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9165));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
