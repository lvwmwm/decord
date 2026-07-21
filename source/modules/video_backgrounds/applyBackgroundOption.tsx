// Module ID: 8840
// Function ID: 69741
// Name: _getFilterBlob
// Dependencies: []
// Exports: applyBackgroundOptionPreview, applyInitialVideoBackgroundOption

// Module 8840 (_getFilterBlob)
function _getFilterBlob() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getFilterBlob = obj;
  return obj(...arguments);
}
function applyBackgroundMediaFilterSettings(arg0, target, graph, image, blob) {
  let obj = target(dependencyMap[6]);
  obj = { graph, target, image, blob };
  const result = obj.applyMediaFilterSettings({ [arg0]: obj });
}
function applyBackgroundOption() {
  return _applyBackgroundOption(...arguments);
}
function _applyBackgroundOption() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _applyBackgroundOption = obj;
  return obj(...arguments);
}
function applyBackgroundOptionLive(lastUsedVideoBackgroundOption, arg1) {
  return _applyBackgroundOptionLive(...arguments);
}
function _applyBackgroundOptionLive() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _applyBackgroundOptionLive = obj;
  return obj(...arguments);
}
function _applyBackgroundOptionPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _applyBackgroundOptionPreview = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ BACKGROUND_REPLACEMENT_SIZE: closure_6, BLUR_BACKGROUND_OPTION: closure_7 } = arg1(dependencyMap[3]));
const NOOP = arg1(dependencyMap[4]).NOOP;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/video_backgrounds/applyBackgroundOption.tsx");

export { applyBackgroundOptionLive };
export const applyBackgroundOptionPreview = function applyBackgroundOptionPreview() {
  return _applyBackgroundOptionPreview(...arguments);
};
export const applyInitialVideoBackgroundOption = function applyInitialVideoBackgroundOption() {
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    let obj = arg1(dependencyMap[11]);
    const lastUsedVideoBackgroundOption = obj.getLastUsedVideoBackgroundOption(currentUser);
    let tmp6 = importDefault(dependencyMap[12])();
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
