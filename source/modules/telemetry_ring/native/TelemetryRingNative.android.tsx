// Module ID: 13530
// Function ID: 13531
// Name: TelemetryChannel
// Dependencies: [13531, 2]

// Module 13530 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13531).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13531).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13531).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
