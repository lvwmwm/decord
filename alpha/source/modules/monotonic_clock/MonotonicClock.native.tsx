// Module ID: 14785
// Function ID: 14786
// Name: MonotonicClock
// Dependencies: [1367, 2]
// Exports: monotonicNowMs

// Module 14785 (MonotonicClock)
import clock from "clock" /* 1367 */;
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
