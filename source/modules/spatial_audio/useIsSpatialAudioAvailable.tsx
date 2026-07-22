// Module ID: 12641
// Function ID: 97286
// Name: useIsSpatialAudioAvailable
// Dependencies: []
// Exports: default, isSpatialAudioAvailable

// Module 12641 (useIsSpatialAudioAvailable)
let closure_3 = importDefault(dependencyMap[0]);
const Features = arg1(dependencyMap[1]).Features;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/spatial_audio/useIsSpatialAudioAvailable.tsx");

export default function useIsSpatialAudioAvailable(location) {
  let obj = importDefault(dependencyMap[2]);
  obj = { location };
  let enabled = obj.useConfig(obj).enabled;
  const items = [closure_3];
  if (enabled) {
    enabled = obj3.useStateFromStores(items, () => closure_3.supports(constants.SPATIAL_AUDIO));
  }
  return enabled;
};
export const isSpatialAudioAvailable = function isSpatialAudioAvailable(MediaEngineStore) {
  let obj = importDefault(dependencyMap[2]);
  obj = { location: MediaEngineStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = closure_3.supports(Features.SPATIAL_AUDIO);
  }
  return enabled;
};
