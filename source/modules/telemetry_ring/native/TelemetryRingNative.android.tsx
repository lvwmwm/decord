// Module ID: 13333
// Function ID: 13334
// Name: TelemetryChannel
// Dependencies: [13334, 2]

// Module 13333 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13334).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13334).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13334).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
