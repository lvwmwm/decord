// Module ID: 13845
// Function ID: 13846
// Name: NormalTelemetryImpl
// Dependencies: [13840, 13841, 2]

// Module 13845 (NormalTelemetryImpl)
import TelemetryChannel from "TelemetryChannel" /* 13841 */;
import importDefaultResult from "append" /* 13840 */;
import importDefaultResult1 from "TelemetryChannel" /* 13841 */;

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
