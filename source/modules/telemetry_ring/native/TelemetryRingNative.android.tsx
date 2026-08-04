// Module ID: 13366
// Function ID: 13367
// Name: TelemetryChannel
// Dependencies: [13367, 2]

// Module 13366 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13367).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13367).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13367).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
