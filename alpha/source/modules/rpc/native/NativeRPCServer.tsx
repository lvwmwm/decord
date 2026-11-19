// Module ID: 6785
// Function ID: 6786
// Name: NativeRPCServer
// Dependencies: [6786, 6787, 2]

// Module 6785 (NativeRPCServer)
import _mod6786 from "module_6786" /* 6786 */;
import RPCServerDefault from "RPCServer" /* 6787 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod6786));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
