// Module ID: 8887
// Function ID: 70010
// Name: _getFilterBlob
// Dependencies: [5, 1849, 8888, 7940, 653, 44, 8890, 4227, 8893, 1392, 8889, 8892, 8894, 2]
// Exports: applyBackgroundOptionPreview, applyInitialVideoBackgroundOption

// Module 8887 (_getFilterBlob)
import invariant from "invariant";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import VideoFilterType from "VideoFilterType";
import { NOOP } from "ME";

let closure_6;
let closure_7;
const require = arg1;
function _getFilterBlob() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function applyBackgroundMediaFilterSettings(arg0, target, graph, image, blob) {
  let obj = require(8890) /* _fetchVideoFilterAssets */;
  obj = { graph, target, image, blob };
  const result = obj.applyMediaFilterSettings({ [arg0]: obj });
}
function applyBackgroundOption() {
  return _applyBackgroundOption(...arguments);
}
function _applyBackgroundOption() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function applyBackgroundOptionLive(lastUsedVideoBackgroundOption, arg1) {
  return _applyBackgroundOptionLive(...arguments);
}
function _applyBackgroundOptionLive() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _applyBackgroundOptionPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ BACKGROUND_REPLACEMENT_SIZE: closure_6, BLUR_BACKGROUND_OPTION: closure_7 } = VideoFilterType);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_backgrounds/applyBackgroundOption.tsx");

export { applyBackgroundOptionLive };
export const applyBackgroundOptionPreview = function applyBackgroundOptionPreview() {
  return _applyBackgroundOptionPreview(...arguments);
};
export const applyInitialVideoBackgroundOption = function applyInitialVideoBackgroundOption() {
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    let obj = require(8892) /* getOptionFromSettingsFiltered */;
    const lastUsedVideoBackgroundOption = obj.getLastUsedVideoBackgroundOption(currentUser);
    let tmp6 = importDefault(8894)();
    if (tmp6) {
      tmp6 = !hasBeenApplied.hasBeenApplied;
    }
    if (tmp6) {
      tmp6 = null != lastUsedVideoBackgroundOption;
    }
    if (tmp6) {
      obj = { track: false };
      applyBackgroundOptionLive(lastUsedVideoBackgroundOption, obj).catch(NOOP);
      const promise = applyBackgroundOptionLive(lastUsedVideoBackgroundOption, obj);
    }
  }
};
