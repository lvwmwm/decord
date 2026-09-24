// Module ID: 10289
// Function ID: 10290
// Name: WindowsEffectsExperiment
// Dependencies: [1239, 1438, 558, 568, 504, 2]
// Exports: getWindowsAudioEffectsExperimentConfig

// Module 10289 (WindowsEffectsExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1239 */;

const require = fn;
let obj = { preferSystemEffects: false };
const ApexExperiment = fn(1438);
const obj3 = { name: "2025-12-windows-audio-effects", kind: "user", defaultConfig: obj, variations: null };
const obj4 = { 1: null };
const obj5 = {};
const merged = Object.assign(obj);
obj5.preferSystemEffects = true;
obj4[1] = obj5;
obj3.variations = obj4;
const config = ApexExperiment.createApexExperiment(obj3);
const ReactCompilerGating = fn(558);
function getWindowsAudioEffectsExperimentConfig(location) {
  return config.getConfig({ location: location.location });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export { getWindowsAudioEffectsExperimentConfig };
export const useWindowsAudioEffectsExperimentConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = _location(568).c(3);
  _location = location.location;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== _location) {
    const fn = function f() {
      return config.getConfig({ location: _location });
    };
    cResult[1] = _location;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = _location(568);
  return _location(504).useStateFromStores(first, tmp6);
}) : ((location) => {
  location = location.location;
  const items = [ApexExperimentStore];
  return location(504).useStateFromStores(items, () => config.getConfig({ location }));
});
