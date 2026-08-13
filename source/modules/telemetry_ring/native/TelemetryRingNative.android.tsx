// Module ID: 13518
// Function ID: 13519
// Name: TelemetryChannel
// Dependencies: [13519, 2]

// Module 13518 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13519).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13519).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13519).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
