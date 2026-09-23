// Module ID: 14823
// Function ID: 14824
// Name: NativeRPCServerManager
// Dependencies: [14824, 14831, 2]

// Module 14823 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14831 */;
import RPCServerManager from "RPCServerManager" /* 14824 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
