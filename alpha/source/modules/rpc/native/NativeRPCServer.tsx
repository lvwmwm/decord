// Module ID: 15444
// Function ID: 15445
// Name: NativeRPCServer
// Dependencies: [11236, 15445, 2]

// Module 15444 (NativeRPCServer)
import _mod11236 from "module_11236" /* 11236 */;
import RPCServerDefault from "RPCServer" /* 15445 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod11236));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
