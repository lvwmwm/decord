// Module ID: 6879
// Function ID: 6880
// Name: MonotonicClock
// Dependencies: [1353, 2]
// Exports: monotonicNowMs

// Module 6879 (MonotonicClock)
import clock from "clock" /* 1353 */;
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
