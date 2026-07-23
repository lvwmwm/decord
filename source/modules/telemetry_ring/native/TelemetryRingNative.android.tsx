// Module ID: 13115
// Function ID: 101063
// Name: TelemetryChannel
// Dependencies: [13116, 2]

// Module 13115 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13116).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13116).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13116).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
