// Module ID: 14737
// Function ID: 14738
// Name: NativeRPCServerManager
// Dependencies: [14738, 14745, 2]

// Module 14737 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14745 */;
import RPCServerManager from "RPCServerManager" /* 14738 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
