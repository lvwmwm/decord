// Module ID: 14778
// Function ID: 14779
// Name: NativeRPCServerManager
// Dependencies: [14779, 14786, 2]

// Module 14778 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14786 */;
import RPCServerManager from "RPCServerManager" /* 14779 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
