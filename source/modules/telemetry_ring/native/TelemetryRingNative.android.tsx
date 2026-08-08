// Module ID: 13459
// Function ID: 13460
// Name: TelemetryChannel
// Dependencies: [13460, 2]

// Module 13459 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13460).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13460).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13460).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
