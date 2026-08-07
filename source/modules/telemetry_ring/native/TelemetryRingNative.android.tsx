// Module ID: 13389
// Function ID: 13390
// Name: TelemetryChannel
// Dependencies: [13390, 2]

// Module 13389 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13390).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13390).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13390).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
