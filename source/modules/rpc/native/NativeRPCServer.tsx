// Module ID: 14179
// Function ID: 14180
// Dependencies: [9505, 14180, 2]

// Module 14179
import root from "root" /* 9505 */;
import registerTransportDefault from "registerTransport" /* 14180 */;

require = arg1;
const tmp2 = new registerTransportDefault(() => Promise.resolve(root));
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
