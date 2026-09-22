// Module ID: 1352
// Function ID: 1353
// Name: clock
// Dependencies: [1351, 2]
// Exports: monotonicNowMs

// Module 1352 (clock)
import global_types from "global_types" /* 1351 */;
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
