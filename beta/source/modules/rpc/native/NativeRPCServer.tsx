// Module ID: 14794
// Function ID: 14795
// Name: NativeRPCServer
// Dependencies: [10939, 14795, 2]

// Module 14794 (NativeRPCServer)
import _mod10939 from "module_10939" /* 10939 */;
import RPCServerDefault from "RPCServer" /* 14795 */;
import size from "module_2" /* 2 */;

const tmp2 = new RPCServerDefault(() => Promise.resolve(_mod10939));
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
