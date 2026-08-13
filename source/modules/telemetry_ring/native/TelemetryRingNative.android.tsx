// Module ID: 13527
// Function ID: 13528
// Name: TelemetryChannel
// Dependencies: [13528, 2]

// Module 13527 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13528).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13528).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13528).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
