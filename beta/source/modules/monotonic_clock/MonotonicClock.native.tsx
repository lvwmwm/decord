// Module ID: 7743
// Function ID: 7744
// Name: MonotonicClock
// Dependencies: [1357, 2]
// Exports: monotonicNowMs

// Module 7743 (MonotonicClock)
import clock from "clock" /* 1357 */;
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
