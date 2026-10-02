// Module ID: 565
// Function ID: 566
// Name: clock
// Dependencies: [564, 2]
// Exports: monotonicNowMs

// Module 565 (clock)
import global_types from "global_types" /* 564 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/clock.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  const LIBDISCORE_JSI = global_types.typedGlobal.LIBDISCORE_JSI;
  let monotonicNowMs;
  if (LIBDISCORE_JSI != null) {
    monotonicNowMs = LIBDISCORE_JSI.monotonicNowMs;
  }
  let monotonicNowMsResult = null;
  if (null != monotonicNowMs) {
    monotonicNowMsResult = LIBDISCORE_JSI.monotonicNowMs();
  }
  return monotonicNowMsResult;
};
