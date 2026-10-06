// Module ID: 6986
// Function ID: 6987
// Name: MonotonicClock
// Dependencies: [565, 2]
// Exports: monotonicNowMs

// Module 6986 (MonotonicClock)
import clock from "clock" /* 565 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  const obj = clock;
  let monotonicNowMsResult = obj.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
