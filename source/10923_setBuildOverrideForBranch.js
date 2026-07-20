// Module ID: 10923
// Function ID: 84925
// Name: setBuildOverrideForBranch
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0]
// Exports: refreshBuildOverride, setBuildOverrideForId, setBuildOverrideFromLink, toggleOverride

// Module 10923 (setBuildOverrideForBranch)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";

function setBuildOverrideForBranch(id) {
  setBuildOverride({ type: "branch", id });
}
function setBuildOverride(arg0) {
  return _setBuildOverride(...arguments);
}
function _setBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _setBuildOverride = obj;
  return obj(...arguments);
}
function clearBuildOverride() {
  return _clearBuildOverride(...arguments);
}
function _clearBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _clearBuildOverride = obj;
  return obj(...arguments);
}
function _toggleOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _toggleOverride = obj;
  return obj(...arguments);
}
function _setBuildOverrideFromLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _setBuildOverrideFromLink = obj;
  return obj(...arguments);
}
let str = "discord_ios";
if (obj.isAndroid()) {
  str = "discord_android";
}
result = result.fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

export const DEVICE_FIELD = str;
export { setBuildOverrideForBranch };
export const setBuildOverrideForId = function setBuildOverrideForId(id) {
  setBuildOverride({ type: "id", id });
};
export { setBuildOverride };
export const refreshBuildOverride = function refreshBuildOverride() {
  const result = importDefault(dependencyMap[4]).checkForUpdateAndReload();
};
export { clearBuildOverride };
export const toggleOverride = function toggleOverride(code) {
  return _toggleOverride(...arguments);
};
export const setBuildOverrideFromLink = function setBuildOverrideFromLink(arg0) {
  return _setBuildOverrideFromLink(...arguments);
};
