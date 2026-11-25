// Module ID: 7608
// Function ID: 7609
// Name: NativeRPCServer
// Dependencies: [7609, 7610, 2]

// Module 7608 (NativeRPCServer)
import _mod7609 from "module_7609" /* 7609 */;
import RPCServerDefault from "RPCServer" /* 7610 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod7609));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
