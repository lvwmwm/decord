// Module ID: 7308
// Function ID: 7309
// Name: NativeRPCServer
// Dependencies: [7309, 7310, 2]

// Module 7308 (NativeRPCServer)
import _mod7309 from "module_7309" /* 7309 */;
import RPCServerDefault from "RPCServer" /* 7310 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod7309));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
