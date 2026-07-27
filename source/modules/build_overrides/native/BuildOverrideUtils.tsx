// Module ID: 10918
// Function ID: 84805
// Name: setBuildOverrideForBranch
// Dependencies: [5, 10404, 477, 10919, 10920, 4472, 4047, 2]
// Exports: refreshBuildOverride, setBuildOverrideForId, setBuildOverrideFromLink, toggleOverride

// Module 10918 (setBuildOverrideForBranch)
import module_4472 from "module_4472";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import set from "set";

const require = arg1;
function setBuildOverrideForBranch(id) {
  setBuildOverride({ type: "branch", id });
}
function setBuildOverride(arg0) {
  return _setBuildOverride(...arguments);
}
function _setBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function clearBuildOverride() {
  return _clearBuildOverride(...arguments);
}
function _clearBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _toggleOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _setBuildOverrideFromLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let str = "discord_ios";
if (set.isAndroid()) {
  str = "discord_android";
}
let result = set.fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

export const DEVICE_FIELD = str;
export { setBuildOverrideForBranch };
export const setBuildOverrideForId = function setBuildOverrideForId(id) {
  setBuildOverride({ type: "id", id });
};
export { setBuildOverride };
export const refreshBuildOverride = function refreshBuildOverride() {
  const result = importDefault(10920).checkForUpdateAndReload();
};
export { clearBuildOverride };
export const toggleOverride = function toggleOverride(code) {
  return _toggleOverride(...arguments);
};
export const setBuildOverrideFromLink = function setBuildOverrideFromLink(arg0) {
  return _setBuildOverrideFromLink(...arguments);
};
