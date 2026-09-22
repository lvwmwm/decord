// Module ID: 7567
// Function ID: 7568
// Name: MonotonicClock
// Dependencies: [1352, 2]
// Exports: monotonicNowMs

// Module 7567 (MonotonicClock)
import clock from "clock" /* 1352 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = clock.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
