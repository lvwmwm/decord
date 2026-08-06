// Module ID: 13008
// Function ID: 13009
// Name: useIsSpatialAudioAvailable
// Dependencies: [4332, 4345, 13009, 589, 2]
// Exports: default, isSpatialAudioAvailable

// Module 13008 (useIsSpatialAudioAvailable)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { Features } from "DesktopSources";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/spatial_audio/useIsSpatialAudioAvailable.tsx");

export default function useIsSpatialAudioAvailable(location) {
  let obj = importDefault(13009);
  obj = { location };
  let enabled = obj.useConfig(obj).enabled;
  const items = [_detectH265HardwareDecode];
  if (enabled) {
    enabled = obj3.useStateFromStores(items, () => _detectH265HardwareDecode.supports(constants.SPATIAL_AUDIO));
  }
  return enabled;
};
export const isSpatialAudioAvailable = function isSpatialAudioAvailable(RTCConnectionStore) {
  let obj = importDefault(13009);
  obj = { location: RTCConnectionStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = _detectH265HardwareDecode.supports(Features.SPATIAL_AUDIO);
  }
  return enabled;
};
