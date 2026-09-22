// Module ID: 14743
// Function ID: 14744
// Name: NativeRPCServerManager
// Dependencies: [14744, 14751, 2]

// Module 14743 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14751 */;
import RPCServerManager from "RPCServerManager" /* 14744 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
