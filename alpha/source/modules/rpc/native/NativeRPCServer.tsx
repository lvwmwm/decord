// Module ID: 14612
// Function ID: 14613
// Name: NativeRPCServer
// Dependencies: [11136, 14613, 2]

// Module 14612 (NativeRPCServer)
import _mod11136 from "module_11136" /* 11136 */;
import RPCServerDefault from "RPCServer" /* 14613 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod11136));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
