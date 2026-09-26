// Module ID: 14019
// Function ID: 14020
// Name: NativeRPCServerManager
// Dependencies: [14020, 14027, 2]

// Module 14019 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14027 */;
import RPCServerManager from "RPCServerManager" /* 14020 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
