// Module ID: 10726
// Function ID: 83390
// Name: getNoiseCancellationDeferredToSystem
// Dependencies: [4178, 10727, 566, 2]
// Exports: useNoiseCancellationDeferredToSystem

// Module 10726 (getNoiseCancellationDeferredToSystem)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getNoiseCancellationDeferredToSystem(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !importDefault(10727)(true, systemMicrophoneMode);
}
const result = require("initialize").fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export { getNoiseCancellationDeferredToSystem };
export const useNoiseCancellationDeferredToSystem = function useNoiseCancellationDeferredToSystem() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_4(outer1_3));
};
