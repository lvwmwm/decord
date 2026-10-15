// Module ID: 7403
// Function ID: 7404
// Name: MonotonicClock
// Dependencies: [565, 2]
// Exports: monotonicNowMs

// Module 7403 (MonotonicClock)
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
