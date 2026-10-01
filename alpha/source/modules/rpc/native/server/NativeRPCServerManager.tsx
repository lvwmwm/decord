// Module ID: 14227
// Function ID: 14228
// Name: NativeRPCServerManager
// Dependencies: [14228, 14235, 2]

// Module 14227 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14235 */;
import RPCServerManager from "RPCServerManager" /* 14228 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
