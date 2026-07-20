// Module ID: 10924
// Function ID: 84945
// Name: _applyStaffBuildOverride
// Dependencies: []
// Exports: applyPublicBuildOverride, applyStaffBuildOverride, clearBuildOverride, getPublicBuildOverrideLink

// Module 10924 (_applyStaffBuildOverride)
function _applyStaffBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _applyStaffBuildOverride = obj;
  return obj(...arguments);
}
function _applyPublicBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _applyPublicBuildOverride = obj;
  return obj(...arguments);
}
function _clearBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _clearBuildOverride = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = "/__development/build_overrides";
let closure_2 = () => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/build_overrides/ApplyBuildOverrideUtils.tsx");

export const applyStaffBuildOverride = function applyStaffBuildOverride(arg0) {
  return _applyStaffBuildOverride(...arguments);
};
export const applyPublicBuildOverride = function applyPublicBuildOverride(payload) {
  return _applyPublicBuildOverride(...arguments);
};
export const clearBuildOverride = function clearBuildOverride() {
  return _clearBuildOverride(...arguments);
};
export const getPublicBuildOverrideLink = function getPublicBuildOverrideLink(body) {
  const HTTP = arg1(dependencyMap[3]).HTTP;
  let obj = { url: arg1(dependencyMap[4]).getAPIEndpoint("/__development/create_build_override_link"), body };
  obj = {};
  const token = token.getToken();
  let str = "";
  if (null != token) {
    str = token;
  }
  obj.Authorization = str;
  obj.headers = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = false;
  const obj2 = arg1(dependencyMap[4]);
  return HTTP.post(obj).then((body) => ({ url: body.body.url, error: false }), (status) => {
    if (400 === status.status) {
      let obj = { url: false, error: status.body };
    } else {
      obj = { url: false };
      const _HermesInternal = HermesInternal;
      obj.error = "Error making API request (" + status.status + ")";
    }
    return obj;
  });
};
