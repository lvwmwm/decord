// Module ID: 9442
// Function ID: 9443
// Name: NativeRPCServer
// Dependencies: [9443, 9444, 2]

// Module 9442 (NativeRPCServer)
import _mod9443 from "module_9443" /* 9443 */;
import RPCServerDefault from "RPCServer" /* 9444 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod9443));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
