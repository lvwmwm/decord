// Module ID: 12994
// Function ID: 98874
// Name: TelemetryChannel
// Dependencies: []

// Module 12994 (TelemetryChannel)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default {
  append(arg0, arg1, arg2, arg3, arg4) {
    importDefault(dependencyMap[0]).append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    return importDefault(dependencyMap[0]).snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    importDefault(dependencyMap[0]).clear();
  }
};
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
