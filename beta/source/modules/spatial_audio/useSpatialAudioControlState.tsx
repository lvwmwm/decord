// Module ID: 13370
// Function ID: 13371
// Name: useSpatialAudioControlState
// Dependencies: [19, 1993, 4861, 13371, 504, 2]
// Exports: default, isSpatialAudioBlocked, isSpatialAudioEligible

// Module 13370 (useSpatialAudioControlState)
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 13371 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Constants from "Constants" /* 4861 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ Features: hasOwnProperty, SpatialAudioStatus: metroRequire } = Constants);
const SpatialAudioControlState = { HIDDEN: "HIDDEN", AVAILABLE: "AVAILABLE", BLOCKED_MONO_OUTPUT: "BLOCKED_MONO_OUTPUT", BLOCKED_INIT_FAILED: "BLOCKED_INIT_FAILED", BLOCKED_HRTF_FAILED: "BLOCKED_HRTF_FAILED" };
const result = size.fileFinishedImporting("modules/spatial_audio/useSpatialAudioControlState.tsx");

export default function useSpatialAudioControlState(location) {
  let status;
  let supported;
  let obj = supported(status[3]);
  const obj2 = { location };
  const enabled = obj.useConfig(obj2).enabled;
  const items = [MediaEngineStore];
  const obj3 = enabled(status[4]);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { supported: MediaEngineStore.supports(constants.SPATIAL_AUDIO), status: MediaEngineStore.getSpatialAudioStatus() };
    return obj;
  });
  supported = stateFromStoresObject.supported;
  status = stateFromStoresObject.status;
  const items1 = [enabled, supported, status];
  return react.useMemo(() => {
    let HIDDEN;
    const tmp = enabled && supported;
    if (tmp) {
      if (metroRequire.MONO_OUTPUT === status) {
        HIDDEN = obj.BLOCKED_MONO_OUTPUT;
      } else if (metroRequire.INIT_FAILED === status) {
        HIDDEN = obj.BLOCKED_INIT_FAILED;
      } else if (metroRequire.HRTF_FAILED === status) {
        HIDDEN = obj.BLOCKED_HRTF_FAILED;
      } else {
        HIDDEN = obj.AVAILABLE;
      }
    } else {
      HIDDEN = obj.HIDDEN;
    }
    return HIDDEN;
  }, items1);
};
export { SpatialAudioControlState };
export const isSpatialAudioBlocked = function isSpatialAudioBlocked(arg0) {
  const items = [, ];
  ({ HIDDEN: arr[0], AVAILABLE: arr[1] } = obj);
  return !items.includes(arg0);
};
export const isSpatialAudioEligible = function isSpatialAudioEligible(RTCConnectionStore) {
  const obj = SpatialAudioForVoiceExperimentDefault;
  const obj2 = { location: RTCConnectionStore };
  const enabled = obj.getConfig(obj2).enabled && MediaEngineStore.supports(hasOwnProperty.SPATIAL_AUDIO);
  return enabled;
};
