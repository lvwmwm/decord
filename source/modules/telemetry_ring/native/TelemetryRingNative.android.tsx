// Module ID: 13246
// Function ID: 13247
// Name: TelemetryChannel
// Dependencies: [13247, 2]

// Module 13246 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13247).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13247).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13247).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
