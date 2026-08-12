// Module ID: 10919
// Function ID: 10920
// Name: getNoiseCancellationDeferredToSystem
// Dependencies: [4392, 10920, 589, 2]
// Exports: getNoiseCancellationDeferredToSystem, useNoiseCancellationDeferredToSystem

// Module 10919 (getNoiseCancellationDeferredToSystem)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export const getNoiseCancellationDeferredToSystem = function getNoiseCancellationDeferredToSystem(_detectH265HardwareDecode) {
  let obj = _detectH265HardwareDecode;
  if (_detectH265HardwareDecode === undefined) {
    obj = _detectH265HardwareDecode;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !importDefault(10920)(true, systemMicrophoneMode);
};
export const useNoiseCancellationDeferredToSystem = function useNoiseCancellationDeferredToSystem() {
  const items = [_detectH265HardwareDecode];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !callback(table[1])(true, systemMicrophoneMode);
  });
};
