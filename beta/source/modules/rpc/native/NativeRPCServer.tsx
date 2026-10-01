// Module ID: 14087
// Function ID: 14088
// Name: NativeRPCServer
// Dependencies: [8772, 14088, 2]

// Module 14087 (NativeRPCServer)
import _mod8772 from "module_8772" /* 8772 */;
import RPCServerDefault from "RPCServer" /* 14088 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod8772));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
