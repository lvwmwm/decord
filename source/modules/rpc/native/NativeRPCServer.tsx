// Module ID: 14525
// Function ID: 14526
// Dependencies: [9556, 14526, 2]

// Module 14525
import root from "root" /* 9556 */;
import registerTransportDefault from "registerTransport" /* 14526 */;

require = arg1;
const tmp2 = new registerTransportDefault(() => Promise.resolve(root));
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
