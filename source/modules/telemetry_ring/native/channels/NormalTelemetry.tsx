// Module ID: 14068
// Function ID: 14069
// Name: NormalTelemetryImpl
// Dependencies: [14063, 14064, 2]

// Module 14068 (NormalTelemetryImpl)
import TelemetryChannel from "TelemetryChannel" /* 14064 */;
import importDefaultResult from "append" /* 14063 */;
import importDefaultResult1 from "TelemetryChannel" /* 14064 */;

require = arg1;
class NormalTelemetryImpl extends tmp3 {
  constructor() {
    tmp2 = require("TelemetryChannel");
    items = [];
    items[0] = require("TelemetryChannel").TelemetryChannel.NORMAL;
    tmp = new tmp(tmp2, items, closure_1, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let items = [require("TelemetryChannel").TelemetryChannel.NORMAL];
importDefaultResult = new importDefaultResult(importDefaultResult1, items, tmp, Object, NormalTelemetryImpl, importDefaultResult, importDefaultResult1);
// ThrowIfThisInitialized (0x7c)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/channels/NormalTelemetry.tsx");

export default importDefaultResult;
