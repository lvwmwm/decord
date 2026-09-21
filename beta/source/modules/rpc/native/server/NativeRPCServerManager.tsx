// Module ID: 14740
// Function ID: 14741
// Name: NativeRPCServerManager
// Dependencies: [14741, 14748, 2]

// Module 14740 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14748 */;
import RPCServerManager from "RPCServerManager" /* 14741 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
