// Module ID: 7639
// Function ID: 7640
// Name: NativeRPCServer
// Dependencies: [7640, 7641, 2]

// Module 7639 (NativeRPCServer)
import _mod7640 from "module_7640" /* 7640 */;
import RPCServerDefault from "RPCServer" /* 7641 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod7640));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
