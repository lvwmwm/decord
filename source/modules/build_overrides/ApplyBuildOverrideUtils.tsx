// Module ID: 10967
// Function ID: 85228
// Name: _applyStaffBuildOverride
// Dependencies: [5, 1194, 10968, 507, 4046, 2]
// Exports: applyPublicBuildOverride, applyStaffBuildOverride, clearBuildOverride, getPublicBuildOverrideLink

// Module 10967 (_applyStaffBuildOverride)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _applyStaffBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _applyPublicBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _clearBuildOverride() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let c5 = "/__development/build_overrides";
let closure_2 = (() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
})();
const result = require("BundleUpdaterManager").fileFinishedImporting("modules/build_overrides/ApplyBuildOverrideUtils.tsx");

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
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: require(4046) /* getAPIEndpoint */.getAPIEndpoint("/__development/create_build_override_link"), body };
  obj = {};
  token = token.getToken();
  let str = "";
  if (null != token) {
    str = token;
  }
  obj.Authorization = str;
  obj.headers = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = false;
  const obj2 = require(4046) /* getAPIEndpoint */;
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
