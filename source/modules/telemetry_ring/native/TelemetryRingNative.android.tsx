// Module ID: 13375
// Function ID: 13376
// Name: TelemetryChannel
// Dependencies: [13376, 2]

// Module 13375 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13376).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13376).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13376).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
