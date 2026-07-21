// Module ID: 8953
// Function ID: 70590
// Name: getLocationContextServer
// Dependencies: []
// Exports: acceptWhitelist, authorize, fetchAuthorization, fetchChannels, finishUserCode, finishUserCodeTwoWayLinkError, logoutWithRedirect, startSamsungAuthorization, verifyUserCode

// Module 8953 (getLocationContextServer)
function getLocationContextServer() {
  const basicChannel = basicChannel.getBasicChannel(channelId.getChannelId());
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
  const _authorize = obj;
  return obj(...arguments);
}
function _fetchAuthorization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchAuthorization = obj;
  return obj(...arguments);
}
function _startSamsungAuthorization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _startSamsungAuthorization = obj;
  return obj(...arguments);
}
function _fetchChannels() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchChannels = obj;
  return obj(...arguments);
}
function _verifyUserCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _verifyUserCode = obj;
  return obj(...arguments);
}
function _finishUserCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _finishUserCode = obj;
  return obj(...arguments);
}
function _finishUserCodeTwoWayLinkError() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _finishUserCodeTwoWayLinkError = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ ChannelTypes: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/oauth2/actions.tsx");

export { getLocationContextServer };
export const acceptWhitelist = function acceptWhitelist(token) {
  const HTTP = arg1(dependencyMap[4]).HTTP;
  let obj = { url: obj.OAUTH2_WHITELIST_ACCEPT, query: obj, oldFormErrors: true };
  obj = { token, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const authorize = function authorize() {
  return _authorize(...arguments);
};
export const fetchAuthorization = function fetchAuthorization(arg0) {
  return _fetchAuthorization(...arguments);
};
export const startSamsungAuthorization = function startSamsungAuthorization(arg0, closure_45, closure_1, arg3, closure_5) {
  return _startSamsungAuthorization(...arguments);
};
export const fetchChannels = function fetchChannels(guildId) {
  return _fetchChannels(...arguments);
};
export const logoutWithRedirect = function logoutWithRedirect(pathname, TTI_test) {
  const obj = importDefault(dependencyMap[5]);
  obj.logout(TTI_test, TTI_test(dependencyMap[6]).getLoginPath(pathname.pathname + pathname.search, false));
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
