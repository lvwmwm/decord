// Module ID: 12817
// Function ID: 99890
// Name: useIsSpatialAudioAvailable
// Dependencies: [4178, 4192, 12818, 566, 2]
// Exports: default, isSpatialAudioAvailable

// Module 12817 (useIsSpatialAudioAvailable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Features } from "DesktopSources";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/spatial_audio/useIsSpatialAudioAvailable.tsx");

export default function useIsSpatialAudioAvailable(location) {
  let obj = importDefault(12818);
  obj = { location };
  let enabled = obj.useConfig(obj).enabled;
  const items = [_isNativeReflectConstruct];
  if (enabled) {
    enabled = obj3.useStateFromStores(items, () => outer1_3.supports(outer1_4.SPATIAL_AUDIO));
  }
  return enabled;
};
export const isSpatialAudioAvailable = function isSpatialAudioAvailable(RTCConnectionStore) {
  let obj = importDefault(12818);
  obj = { location: RTCConnectionStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = _isNativeReflectConstruct.supports(Features.SPATIAL_AUDIO);
  }
  return enabled;
};
