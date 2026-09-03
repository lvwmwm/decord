// Module ID: 14418
// Function ID: 14419
// Dependencies: [9522, 14419, 2]

// Module 14418
import root from "root" /* 9522 */;
import registerTransportDefault from "registerTransport" /* 14419 */;

require = arg1;
const tmp2 = new registerTransportDefault(() => Promise.resolve(root));
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
