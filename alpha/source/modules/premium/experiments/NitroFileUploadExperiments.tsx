// Module ID: 5075
// Function ID: 5076
// Name: NitroFileUploadExperiments
// Dependencies: [1385, 1447, 2]
// Exports: getNitroFileUploadLimitBytes, getNitroFileUploadRolloutConfig, getNitroFileUploadRolloutCopy, useNitroFileUploadRolloutEnabled, useNonNitroFileUploadMarketingEnabled

// Module 5075 (NitroFileUploadExperiments)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import ApexExperiment_mod from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let _window;
let map;
let obj2;
({ MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE: _window, MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE_1GB: map } = PremiumConstants);
const NitroFileUploadRollout = "NitroFileUploadRollout";
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-09-nitro-file-upload-rollout", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-09-non-nitro-file-upload-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_4 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/premium/experiments/NitroFileUploadExperiments.tsx");

export function getNitroFileUploadLimitBytes(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = { location: obj.location, autoTrackExposure: obj.autoTrackExposure };
  let _location = obj2.location;
  const autoTrackExposure = obj2.autoTrackExposure;
  const getConfig = closure_3.getConfig;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return getConfig({ location: _location }, { autoTrackExposure }).enabled ? map : React;
}
export function getNitroFileUploadRolloutConfig(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _location = obj.location;
  const autoTrackExposure = obj.autoTrackExposure;
  const getConfig = closure_3.getConfig;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return getConfig({ location: _location }, { autoTrackExposure });
}
export function getNitroFileUploadRolloutCopy(legacyCopy) {
  legacyCopy = legacyCopy.legacyCopy;
  const obj = {};
  let _location = obj.location;
  const rolloutCopy = legacyCopy.rolloutCopy;
  const autoTrackExposure = obj.autoTrackExposure;
  const getConfig = closure_3.getConfig;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  if (getConfig({ location: _location }, { autoTrackExposure }).enabled) {
    legacyCopy = rolloutCopy;
  }
  return legacyCopy;
}
export function useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets) {
  let _location = MainViewTooltipActionSheets;
  const useConfig = closure_3.useConfig;
  if (MainViewTooltipActionSheets == null) {
    _location = NitroFileUploadRollout;
  }
  return useConfig({ location: _location }).enabled;
}
export function useNonNitroFileUploadMarketingEnabled(location) {
  const obj = { location };
  return closure_4.useConfig(obj).enabled;
}
