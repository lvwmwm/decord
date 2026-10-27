// Module ID: 7575
// Function ID: 7576
// Name: MonotonicClock
// Dependencies: [565, 2]
// Exports: monotonicNowMs

// Module 7575 (MonotonicClock)
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
