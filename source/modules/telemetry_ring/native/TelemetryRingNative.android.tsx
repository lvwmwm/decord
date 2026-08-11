// Module ID: 13469
// Function ID: 13470
// Name: TelemetryChannel
// Dependencies: [13470, 2]

// Module 13469 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13470).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13470).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13470).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
