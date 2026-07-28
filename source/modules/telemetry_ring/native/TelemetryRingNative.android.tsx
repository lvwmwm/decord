// Module ID: 13224
// Function ID: 101695
// Name: TelemetryChannel
// Dependencies: [13225, 2]

// Module 13224 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13225).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13225).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13225).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
