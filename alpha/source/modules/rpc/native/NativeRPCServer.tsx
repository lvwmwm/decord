// Module ID: 14806
// Function ID: 14807
// Name: NativeRPCServer
// Dependencies: [9583, 14807, 2]

// Module 14806 (NativeRPCServer)
import root from "root" /* 9583 */;
import RPCServerDefault from "RPCServer" /* 14807 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
