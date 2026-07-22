// Module ID: 8844
// Function ID: 69810
// Name: _fetchVideoFilterAssets
// Dependencies: []
// Exports: applyMediaFilterSettings, deleteVideoFilterAsset, errorApplyingMediaFilterSettings, fetchVideoFilterAssets, startApplyMediaFilterSettings, uploadVideoFilterAsset

// Module 8844 (_fetchVideoFilterAssets)
function _fetchVideoFilterAssets() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchVideoFilterAssets = obj;
  return obj(...arguments);
}
function _uploadVideoFilterAsset() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _uploadVideoFilterAsset = obj;
  return obj(...arguments);
}
function _deleteVideoFilterAsset() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteVideoFilterAsset = obj;
  return obj(...arguments);
}
function saveLastUsedBackgroundOption() {
  return _saveLastUsedBackgroundOption(...arguments);
}
function _saveLastUsedBackgroundOption() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveLastUsedBackgroundOption = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/video_backgrounds/VideoBackgroundActionCreators.tsx");

export const fetchVideoFilterAssets = function fetchVideoFilterAssets() {
  return _fetchVideoFilterAssets(...arguments);
};
export const uploadVideoFilterAsset = function uploadVideoFilterAsset() {
  return _uploadVideoFilterAsset(...arguments);
};
export const deleteVideoFilterAsset = function deleteVideoFilterAsset() {
  return _deleteVideoFilterAsset(...arguments);
};
export { saveLastUsedBackgroundOption };
export const applyMediaFilterSettings = function applyMediaFilterSettings(settings) {
  if (closure_4.isSupported()) {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings };
    obj.dispatch(obj);
  }
};
export const startApplyMediaFilterSettings = function startApplyMediaFilterSettings() {
  if (closure_4.isSupported()) {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" };
    obj.dispatch(obj);
  }
};
export const errorApplyingMediaFilterSettings = function errorApplyingMediaFilterSettings() {
  importDefault(dependencyMap[5]).dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
};
