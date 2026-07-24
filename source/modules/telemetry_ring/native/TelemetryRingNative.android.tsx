// Module ID: 13168
// Function ID: 101390
// Name: TelemetryChannel
// Dependencies: [13169, 2]

// Module 13168 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13169).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13169).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13169).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
