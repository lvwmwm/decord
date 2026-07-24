// Module ID: 8890
// Function ID: 70066
// Name: _fetchVideoFilterAssets
// Dependencies: [5, 4177, 1849, 653, 507, 686, 8891, 8892, 8889, 1331, 2]
// Exports: applyMediaFilterSettings, deleteVideoFilterAsset, errorApplyingMediaFilterSettings, fetchVideoFilterAssets, startApplyMediaFilterSettings, uploadVideoFilterAsset

// Module 8890 (_fetchVideoFilterAssets)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _fetchVideoFilterAssets() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _uploadVideoFilterAsset() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteVideoFilterAsset() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function saveLastUsedBackgroundOption() {
  return _saveLastUsedBackgroundOption(...arguments);
}
function _saveLastUsedBackgroundOption() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_backgrounds/VideoBackgroundActionCreators.tsx");

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
  if (_isNativeReflectConstruct.isSupported()) {
    let obj = importDefault(686);
    obj = { type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings };
    obj.dispatch(obj);
  }
};
export const startApplyMediaFilterSettings = function startApplyMediaFilterSettings() {
  if (_isNativeReflectConstruct.isSupported()) {
    let obj = importDefault(686);
    obj = { type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" };
    obj.dispatch(obj);
  }
};
export const errorApplyingMediaFilterSettings = function errorApplyingMediaFilterSettings() {
  importDefault(686).dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
};
