// Module ID: 13338
// Function ID: 13339
// Name: TelemetryChannel
// Dependencies: [13339, 2]

// Module 13338 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13339).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13339).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13339).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
