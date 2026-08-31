// Module ID: 7178
// Function ID: 7179
// Name: monotonicNowMs
// Dependencies: [1919, 2]
// Exports: monotonicNowMs

// Module 7178 (monotonicNowMs)
import set from "set" /* 2 */;
import monotonicNowMs from "monotonicNowMs" /* 1919 */;

const result = set.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = monotonicNowMs.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
