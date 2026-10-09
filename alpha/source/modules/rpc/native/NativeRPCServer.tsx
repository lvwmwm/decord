// Module ID: 14711
// Function ID: 14712
// Name: NativeRPCServer
// Dependencies: [10898, 14712, 2]

// Module 14711 (NativeRPCServer)
import _mod10898 from "module_10898" /* 10898 */;
import RPCServerDefault from "RPCServer" /* 14712 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod10898));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
