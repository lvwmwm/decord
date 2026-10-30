// Module ID: 7637
// Function ID: 7638
// Name: MonotonicClock
// Dependencies: [1365, 2]
// Exports: monotonicNowMs

// Module 7637 (MonotonicClock)
import clock from "clock" /* 1365 */;
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
