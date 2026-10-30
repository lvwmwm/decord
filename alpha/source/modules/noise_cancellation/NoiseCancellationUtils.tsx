// Module ID: 11918
// Function ID: 11919
// Name: NoiseCancellationUtils
// Dependencies: [2007, 11919, 504, 2]
// Exports: getNoiseCancellationDeferredToSystem, useNoiseCancellationDeferredToSystem

// Module 11918 (NoiseCancellationUtils)
import get_initialized from "get initialized" /* 504 */;
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation" /* 11919 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export function getNoiseCancellationDeferredToSystem(MediaEngineStore) {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
}
export function useNoiseCancellationDeferredToSystem() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
  });
}
