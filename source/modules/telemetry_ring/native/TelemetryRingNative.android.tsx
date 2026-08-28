// Module ID: 13774
// Function ID: 13775
// Name: TelemetryChannel
// Dependencies: [13775, 2]

// Module 13774 (TelemetryChannel)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 13775 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    enforcingDefault.append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return enforcingDefault.snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    enforcingDefault.clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
