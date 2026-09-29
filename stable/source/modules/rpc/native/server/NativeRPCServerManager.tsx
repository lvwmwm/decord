// Module ID: 14768
// Function ID: 14769
// Name: NativeRPCServerManager
// Dependencies: [14769, 14776, 2]

// Module 14768 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14776 */;
import RPCServerManager from "RPCServerManager" /* 14769 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
