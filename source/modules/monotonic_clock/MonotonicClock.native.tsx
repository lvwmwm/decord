// Module ID: 7464
// Function ID: 7465
// Name: monotonicNowMs
// Dependencies: [1354, 2]
// Exports: monotonicNowMs

// Module 7464 (monotonicNowMs)
import set from "set" /* 2 */;
import monotonicNowMs from "monotonicNowMs" /* 1354 */;

const result = set.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = monotonicNowMs.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
