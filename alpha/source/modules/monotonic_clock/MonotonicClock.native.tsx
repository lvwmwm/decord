// Module ID: 14838
// Function ID: 14839
// Name: MonotonicClock
// Dependencies: [1368, 2]
// Exports: monotonicNowMs

// Module 14838 (MonotonicClock)
import clock from "clock" /* 1368 */;
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
