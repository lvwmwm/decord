// Module ID: 15874
// Function ID: 15875
// Name: ClipsDefaultSettingsUtils
// Dependencies: [8214, 2]
// Exports: applyClipsDefaultSettingsDecision

// Module 15874 (ClipsDefaultSettingsUtils)
import ClipsConstants from "ClipsConstants" /* 8214 */;
import size from "module_2" /* 2 */;

let ClipsEnabledSettingsSource;
let _window;
({ CLIPS_DEFAULT_SETTINGS_VERSION: _window, ClipsEnabledSettingsSource } = ClipsConstants);
const ClipsHardwareClassification = ClipsConstants.ClipsHardwareClassification;
let obj = { clipsEnabledSource: ClipsEnabledSettingsSource.UNSET, version: 0, enableAutoclipping: null };
const result = size.fileFinishedImporting("modules/clips/ClipsDefaultSettingsUtils.tsx");

export const INITIAL_CLIPS_DEFAULT_SETTINGS_STATE = obj;
export function applyClipsDefaultSettingsDecision(arg0) {
  let clipsEnabled;
  let decision;
  let defaultState;
  let previousHardwareClassification;
  let tmp2;
  ({ defaultState, clipsEnabled, decision, previousHardwareClassification } = arg0);
  const clipsEnabled2 = decision.clipsEnabled;
  const DEFAULT = ClipsEnabledSettingsSource.DEFAULT;
  if (defaultState.clipsEnabledSource === ClipsEnabledSettingsSource.USER) {
    let USER = tmp.USER;
    tmp2 = clipsEnabled;
  } else {
    USER = DEFAULT;
    tmp2 = clipsEnabled2;
    if (defaultState.clipsEnabledSource === ClipsEnabledSettingsSource.UNSET) {
      USER = DEFAULT;
      tmp2 = clipsEnabled2;
      if (null != previousHardwareClassification) {
        if (clipsEnabled !== (previousHardwareClassification === ClipsHardwareClassification.MEETS_AUTO_ENABLE)) {
          USER = tmp.USER;
          tmp2 = clipsEnabled;
        } else {
          tmp2 = clipsEnabled && decision.clipsEnabled;
          USER = DEFAULT;
        }
      }
    }
  }
  const obj = { clipsEnabled: tmp2, defaultState: obj2 };
  return obj;
}
