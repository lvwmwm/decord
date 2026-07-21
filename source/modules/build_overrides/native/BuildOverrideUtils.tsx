// Module ID: 10928
// Function ID: 84946
// Name: setBuildOverrideForBranch
// Dependencies: []
// Exports: refreshBuildOverride, setBuildOverrideForId, setBuildOverrideFromLink, toggleOverride

// Module 10928 (setBuildOverrideForBranch)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let str = "discord_ios";
if (obj.isAndroid()) {
  str = "discord_android";
}
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

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
