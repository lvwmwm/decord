// Module ID: 13994
// Function ID: 13995
// Name: NativeRPCServerManager
// Dependencies: [13995, 14002, 2]

// Module 13994 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14002 */;
import RPCServerManager from "RPCServerManager" /* 13995 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
