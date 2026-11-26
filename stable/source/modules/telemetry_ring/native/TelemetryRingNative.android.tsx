// Module ID: 2128
// Function ID: 2129
// Name: TelemetryRingNative
// Dependencies: [2129, 2]

// Module 2128 (TelemetryRingNative)
import react_nativeDefault from "react-native" /* 2129 */;
import size from "module_2" /* 2 */;

let obj = {
  append(arg0, arg1, arg2, arg3, arg4) {
    const obj = react_nativeDefault;
    obj.append(arg0, arg1, arg2, arg3, arg4);
  },
  snapshot(arg0, arg1, arg2, arg3) {
    const obj = react_nativeDefault;
    return obj.snapshot(arg0, arg1, arg2, arg3);
  },
  clear() {
    const obj = react_nativeDefault;
    obj.clear();
  }
};
const result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingNative.android.tsx");

export default obj;
export const TelemetryChannel = { SENTRY: "SENTRY", NORMAL: "NORMAL", ZOOMED: "ZOOMED" };
