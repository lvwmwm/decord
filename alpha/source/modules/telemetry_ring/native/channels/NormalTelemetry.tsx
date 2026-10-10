// Module ID: 14367
// Function ID: 14368
// Name: NormalTelemetry
// Dependencies: [2006, 2007, 2]

// Module 14367 (NormalTelemetry)
import TelemetryRingNative2 from "TelemetryRingNative" /* 2007 */;
import BaseTelemetryChannel from "BaseTelemetryChannel" /* 2006 */;
import size from "module_2" /* 2 */;

const TelemetryRingNative = TelemetryRingNative2;

class NormalTelemetryImpl extends BaseTelemetryChannel {
  constructor() {
    const items = [];
    const tmp2 = TelemetryRingNative;
    items[0] = TelemetryRingNative2.TelemetryChannel.NORMAL;
    const tmp3 = new tmp(tmp2, items, importDefault, new.target);
    return tmp3;
  }
}
let items = [TelemetryRingNative2.TelemetryChannel.NORMAL];
const importDefaultResult2 = new BaseTelemetryChannel(TelemetryRingNative, items, tmp, Object, NormalTelemetryImpl, BaseTelemetryChannel, TelemetryRingNative);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/NormalTelemetry.tsx");

export default importDefaultResult2;
