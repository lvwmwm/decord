// Module ID: 16550
// Function ID: 16551
// Name: NativeRPCServerManager
// Dependencies: [16551, 16566, 2]

// Module 16550 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 16566 */;
import RPCServerManager from "RPCServerManager" /* 16551 */;
import size from "module_2" /* 2 */;

const importDefaultResult1 = new RPCServerManager(NativeRPCImplementationDefault);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default importDefaultResult1;
