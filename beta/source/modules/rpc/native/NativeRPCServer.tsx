// Module ID: 6904
// Function ID: 6905
// Name: NativeRPCServer
// Dependencies: [6905, 6906, 2]

// Module 6904 (NativeRPCServer)
import _mod6905 from "module_6905" /* 6905 */;
import RPCServerDefault from "RPCServer" /* 6906 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod6905));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
