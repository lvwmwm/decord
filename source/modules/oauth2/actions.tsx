// Module ID: 9000
// Function ID: 70859
// Name: getLocationContextServer
// Dependencies: [5, 1348, 1906, 653, 507, 5588, 484, 2]
// Exports: acceptWhitelist, authorize, fetchAuthorization, fetchChannels, finishUserCode, finishUserCodeTwoWayLinkError, logoutWithRedirect, startSamsungAuthorization, verifyUserCode

// Module 9000 (getLocationContextServer)
import dispatchLogout from "dispatchLogout";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
function getLocationContextServer() {
  basicChannel = basicChannel.getBasicChannel(channelId.getChannelId());
  const obj = {};
  let guild_id;
  if (null != basicChannel) {
    guild_id = basicChannel.guild_id;
  }
  let str = "10000";
  let str2 = "10000";
  if (null != guild_id) {
    str2 = guild_id;
  }
  obj.guild_id = str2;
  let id;
  if (null != basicChannel) {
    id = basicChannel.id;
  }
  if (null != id) {
    str = id;
  }
  obj.channel_id = str;
  let type;
  if (null != basicChannel) {
    type = basicChannel.type;
  }
  if (null == type) {
    type = constants.UNKNOWN;
  }
  obj.channel_type = type;
  return obj;
}
function _authorize() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchAuthorization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _startSamsungAuthorization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchChannels() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _verifyUserCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _finishUserCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _finishUserCodeTwoWayLinkError() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ ChannelTypes: closure_6, Endpoints: closure_7 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/oauth2/actions.tsx");

export { getLocationContextServer };
export const acceptWhitelist = function acceptWhitelist(token) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: obj.OAUTH2_WHITELIST_ACCEPT, query: obj, oldFormErrors: true };
  obj = { token, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const authorize = function authorize() {
  return _authorize(...arguments);
};
export const fetchAuthorization = function fetchAuthorization(arg0) {
  return _fetchAuthorization(...arguments);
};
export const startSamsungAuthorization = function startSamsungAuthorization(closure_0, outer1_45, outer1_1, arg3, outer1_5) {
  return _startSamsungAuthorization(...arguments);
};
export const fetchChannels = function fetchChannels(guildId) {
  return _fetchChannels(...arguments);
};
export const logoutWithRedirect = function logoutWithRedirect(pathname, TTI_test) {
  const obj = importDefault(5588);
  obj.logout(TTI_test, require(484) /* getAuthenticationPath */.getLoginPath(pathname.pathname + pathname.search, false));
};
export const verifyUserCode = function verifyUserCode(arg0) {
  return _verifyUserCode(...arguments);
};
export const finishUserCode = function finishUserCode(userCode, denied) {
  return _finishUserCode(...arguments);
};
export const finishUserCodeTwoWayLinkError = function finishUserCodeTwoWayLinkError(arg0, arg1, arg2) {
  return _finishUserCodeTwoWayLinkError(...arguments);
};
