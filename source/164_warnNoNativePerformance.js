// Module ID: 164
// Function ID: 165
// Name: warnNoNativePerformance
// Dependencies: [165, 154]
// Exports: warnNoNativePerformance

// Module 164 (warnNoNativePerformance)
import importDefaultResult from "NativePerformanceCxx";

let fn;
if (importDefaultResult != null) {
  fn = importDefaultResult.now;
}
if (fn == null) {
  fn = global.nativePerformanceNow;
}
if (fn == null) {
  fn = () => Date.now();
}

export const warnNoNativePerformance = function warnNoNativePerformance() {
  importDefault(165)("missing-native-performance", "Missing native implementation of Performance");
};
export const getCurrentTimeStamp = fn;
