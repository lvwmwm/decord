// Module ID: 7644
// Function ID: 7645
// Name: MonotonicClock
// Dependencies: [1364, 2]
// Exports: monotonicNowMs

// Module 7644 (MonotonicClock)
import clock from "clock" /* 1364 */;
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
