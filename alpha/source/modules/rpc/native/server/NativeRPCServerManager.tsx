// Module ID: 14018
// Function ID: 14019
// Name: NativeRPCServerManager
// Dependencies: [14019, 14026, 2]

// Module 14018 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14026 */;
import RPCServerManager from "RPCServerManager" /* 14019 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
