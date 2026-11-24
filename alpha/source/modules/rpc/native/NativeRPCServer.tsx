// Module ID: 7513
// Function ID: 7514
// Name: NativeRPCServer
// Dependencies: [7514, 7515, 2]

// Module 7513 (NativeRPCServer)
import _mod7514 from "module_7514" /* 7514 */;
import RPCServerDefault from "RPCServer" /* 7515 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod7514));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
