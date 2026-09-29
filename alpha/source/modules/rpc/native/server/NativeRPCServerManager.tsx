// Module ID: 14190
// Function ID: 14191
// Name: NativeRPCServerManager
// Dependencies: [14191, 14198, 2]

// Module 14190 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14198 */;
import RPCServerManager from "RPCServerManager" /* 14191 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
