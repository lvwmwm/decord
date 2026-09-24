// Module ID: 14832
// Function ID: 14833
// Name: NativeRPCServerManager
// Dependencies: [14833, 14840, 2]

// Module 14832 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14840 */;
import RPCServerManager from "RPCServerManager" /* 14833 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
