// Module ID: 13180
// Function ID: 101522
// Name: TelemetryChannel
// Dependencies: [13181, 2]

// Module 13180 (TelemetryChannel)
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(13181).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(13181).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(13181).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
