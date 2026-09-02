// Module ID: 14402
// Function ID: 14403
// Dependencies: [9518, 14403, 2]

// Module 14402
import root from "root" /* 9518 */;
import registerTransportDefault from "registerTransport" /* 14403 */;

require = arg1;
const tmp2 = new registerTransportDefault(() => Promise.resolve(root));
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
