// Module ID: 5691
// Function ID: 49016
// Name: LoginHandoffSource
// Dependencies: []
// Exports: getLoginHandoffSourceFromRedirectTo

// Module 5691 (LoginHandoffSource)
const StaticChannelRoute = require(dependencyMap[0]).StaticChannelRoute;
const UserSettingsPath = require(dependencyMap[1]).UserSettingsPath;
const obj = { ROLE_SUBSCRIPTION: "role_subscription", ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting" };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

export const LoginHandoffSource = obj;
export const getLoginHandoffSourceFromRedirectTo = function getLoginHandoffSourceFromRedirectTo(arg0) {
  const str = decodeURIComponent(arg0);
  const obj = require(dependencyMap[2]);
  const tryParseChannelPathResult = obj.tryParseChannelPath(str);
  if (null != tryParseChannelPathResult) {
    if (tryParseChannelPathResult.channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
      let ROLE_SUBSCRIPTION_SETTING = obj.ROLE_SUBSCRIPTION;
    }
    return ROLE_SUBSCRIPTION_SETTING;
  }
  const formatted = str.toLowerCase();
  if (formatted === obj2.settingsPathToRoute(UserSettingsPath.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)) {
    ROLE_SUBSCRIPTION_SETTING = obj.ROLE_SUBSCRIPTION_SETTING;
  }
};
