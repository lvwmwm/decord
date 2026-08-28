// Module ID: 7157
// Function ID: 7158
// Name: monotonicNowMs
// Dependencies: [1920, 2]
// Exports: monotonicNowMs

// Module 7157 (monotonicNowMs)
import set from "set" /* 2 */;
import monotonicNowMs from "monotonicNowMs" /* 1920 */;

const result = set.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = monotonicNowMs.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
