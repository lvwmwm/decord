// Module ID: 10713
// Function ID: 83378
// Name: getNoiseCancellationDeferredToSystem
// Dependencies: []
// Exports: useNoiseCancellationDeferredToSystem

// Module 10713 (getNoiseCancellationDeferredToSystem)
function getNoiseCancellationDeferredToSystem(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_3;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !importDefault(dependencyMap[1])(true, systemMicrophoneMode);
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export { getNoiseCancellationDeferredToSystem };
export const useNoiseCancellationDeferredToSystem = function useNoiseCancellationDeferredToSystem() {
  const items = [closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => callback(closure_3));
};
