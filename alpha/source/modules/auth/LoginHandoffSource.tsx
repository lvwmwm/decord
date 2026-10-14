// Module ID: 7044
// Function ID: 7045
// Name: LoginHandoffSource
// Dependencies: [2072, 1095, 5427, 5987, 2]
// Exports: getLoginHandoffSourceFromRedirectTo

// Module 7044 (LoginHandoffSource)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import LinkUtils from "LinkUtils" /* 5427 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettingsURLUtils = tmp(5987);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const UserSettingsPath = UserSettingsConstants.UserSettingsPath;
const LoginHandoffSource = { ROLE_SUBSCRIPTION: "role_subscription", ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting", GUILD_ANALYTICS_SETTING: "guild_analytics_setting", GAME_CLAIM: "game_claim" };
const result = size.fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

export { LoginHandoffSource };
export const getLoginHandoffSourceFromRedirectTo = function getLoginHandoffSourceFromRedirectTo(arg0) {
  let ROLE_SUBSCRIPTION_SETTING;
  const str = decodeURIComponent(arg0);
  const obj = LinkUtils;
  const tryParseChannelPathResult = obj.tryParseChannelPath(str);
  if (null != tryParseChannelPathResult) {
    if (tryParseChannelPathResult.channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
      ROLE_SUBSCRIPTION_SETTING = obj.ROLE_SUBSCRIPTION;
    }
    return ROLE_SUBSCRIPTION_SETTING;
  }
  const formatted = str.toLowerCase();
  const tmpResult = UserSettingsURLUtils;
  if (formatted === tmpResult.settingsPathToRoute(UserSettingsPath.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)) {
    ROLE_SUBSCRIPTION_SETTING = obj.ROLE_SUBSCRIPTION_SETTING;
  }
};
