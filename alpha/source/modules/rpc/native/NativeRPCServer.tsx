// Module ID: 15490
// Function ID: 15491
// Name: NativeRPCServer
// Dependencies: [11249, 15491, 2]

// Module 15490 (NativeRPCServer)
import _mod11249 from "module_11249" /* 11249 */;
import RPCServerDefault from "RPCServer" /* 15491 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod11249));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
