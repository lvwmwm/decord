// Module ID: 6813
// Function ID: 6814
// Name: NativeRPCServer
// Dependencies: [6814, 6815, 2]

// Module 6813 (NativeRPCServer)
import _mod6814 from "module_6814" /* 6814 */;
import RPCServerDefault from "RPCServer" /* 6815 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod6814));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
