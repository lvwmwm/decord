// Module ID: 7706
// Function ID: 7707
// Name: MonotonicClock
// Dependencies: [1353, 2]
// Exports: monotonicNowMs

// Module 7706 (MonotonicClock)
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
