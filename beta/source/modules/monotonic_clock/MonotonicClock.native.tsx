// Module ID: 7753
// Function ID: 7754
// Name: MonotonicClock
// Dependencies: [1366, 2]
// Exports: monotonicNowMs

// Module 7753 (MonotonicClock)
import clock from "clock" /* 1366 */;
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
