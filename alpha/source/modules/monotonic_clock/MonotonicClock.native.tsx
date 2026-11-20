// Module ID: 8138
// Function ID: 8139
// Name: MonotonicClock
// Dependencies: [1367, 2]
// Exports: monotonicNowMs

// Module 8138 (MonotonicClock)
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
