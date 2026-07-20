// Module ID: 12985
// Function ID: 98829
// Name: TelemetryChannel
// Dependencies: [0, 0]

// Module 12985 (TelemetryChannel)
import result from "result";

result = result.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

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
