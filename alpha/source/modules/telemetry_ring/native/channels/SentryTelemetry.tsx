// Module ID: 14366
// Function ID: 14367
// Name: SentryTelemetry
// Dependencies: [2006, 2007, 2]

// Module 14366 (SentryTelemetry)
import TelemetryRingNative2 from "TelemetryRingNative" /* 2007 */;
import BaseTelemetryChannel from "BaseTelemetryChannel" /* 2006 */;
import size from "module_2" /* 2 */;

const TelemetryRingNative = TelemetryRingNative2;

let closure_3 = { type: "BYTES", limit: 1048576 };
class SentryTelemetryImpl extends BaseTelemetryChannel {
  constructor() {
    const items = [];
    const tmp2 = TelemetryRingNative;
    items[0] = TelemetryRingNative2.TelemetryChannel.SENTRY;
    const tmp3 = new tmp(tmp2, items, importDefault, new.target);
    return tmp3;
  }
  snapshotForBreadcrumbs() {
    return this.snapshot(-1, closure_3);
  }
}
const prototype = SentryTelemetryImpl.prototype;
let items = [TelemetryRingNative2.TelemetryChannel.SENTRY];
const tmp5 = new "snapshotForBreadcrumbs"(TelemetryRingNative, items, tmp, prototype, SentryTelemetryImpl, "snapshotForBreadcrumbs", TelemetryRingNative);
const result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/SentryTelemetry.tsx");

export default tmp5;
