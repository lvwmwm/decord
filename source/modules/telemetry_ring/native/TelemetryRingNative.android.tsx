// Module ID: 13461
// Function ID: 13462
// Name: TelemetryChannel
// Dependencies: [13462, 2]

// Module 13461 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13462).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13462).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13462).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
