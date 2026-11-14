// Module ID: 8668
// Function ID: 8669
// Name: MonotonicClock
// Dependencies: [1369, 2]
// Exports: monotonicNowMs

// Module 8668 (MonotonicClock)
import clock from "clock" /* 1369 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export function monotonicNowMs() {
  const obj = clock;
  let monotonicNowMsResult = obj.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
}
