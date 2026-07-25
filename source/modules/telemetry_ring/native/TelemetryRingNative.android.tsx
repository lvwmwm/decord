// Module ID: 13179
// Function ID: 101517
// Name: TelemetryChannel
// Dependencies: [13180, 2]

// Module 13179 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13180).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13180).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13180).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
