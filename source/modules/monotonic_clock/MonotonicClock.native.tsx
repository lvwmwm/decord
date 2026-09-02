// Module ID: 7219
// Function ID: 7220
// Name: monotonicNowMs
// Dependencies: [1918, 2]
// Exports: monotonicNowMs

// Module 7219 (monotonicNowMs)
import set from "set" /* 2 */;
import monotonicNowMs from "monotonicNowMs" /* 1918 */;

const result = set.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = monotonicNowMs.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
