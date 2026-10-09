// Module ID: 11049
// Function ID: 11050
// Name: NoiseCancellationUtils
// Dependencies: [2012, 11050, 558, 576, 504, 2]
// Exports: getNoiseCancellationDeferredToSystem

// Module 11049 (NoiseCancellationUtils)
import react from "react" /* 576 */;
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation" /* 11050 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
function getNoiseCancellationDeferredToSystem(MediaEngineStore) {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNoiseCancellationDeferredToSystem() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
      return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useNoiseCancellationDeferredToSystem() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
  });
});
const result = size.fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export { getNoiseCancellationDeferredToSystem };
export const useNoiseCancellationDeferredToSystem = tmp2;
