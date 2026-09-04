// Module ID: 14450
// Function ID: 14451
// Dependencies: [9485, 14451, 2]

// Module 14450
import root from "root" /* 9485 */;
import registerTransportDefault from "registerTransport" /* 14451 */;

require = arg1;
const tmp2 = new registerTransportDefault(() => Promise.resolve(root));
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
