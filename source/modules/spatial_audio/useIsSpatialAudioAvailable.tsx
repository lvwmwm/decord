// Module ID: 12861
// Function ID: 100065
// Name: useIsSpatialAudioAvailable
// Dependencies: [4212, 4226, 12862, 566, 2]
// Exports: default, isSpatialAudioAvailable

// Module 12861 (useIsSpatialAudioAvailable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Features } from "DesktopSources";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/spatial_audio/useIsSpatialAudioAvailable.tsx");

export default function useIsSpatialAudioAvailable(location) {
  let obj = importDefault(12862);
  obj = { location };
  let enabled = obj.useConfig(obj).enabled;
  const items = [_isNativeReflectConstruct];
  if (enabled) {
    enabled = obj3.useStateFromStores(items, () => outer1_3.supports(outer1_4.SPATIAL_AUDIO));
  }
  return enabled;
};
export const isSpatialAudioAvailable = function isSpatialAudioAvailable(RTCConnectionStore) {
  let obj = importDefault(12862);
  obj = { location: RTCConnectionStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = _isNativeReflectConstruct.supports(Features.SPATIAL_AUDIO);
  }
  return enabled;
};
