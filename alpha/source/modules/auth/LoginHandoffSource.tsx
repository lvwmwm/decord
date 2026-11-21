// Module ID: 9599
// Function ID: 9600
// Name: LoginHandoffSource
// Dependencies: [4769, 1081, 5536, 6568, 2]
// Exports: getLoginHandoffSourceFromRedirectTo

// Module 9599 (LoginHandoffSource)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import LinkUtils from "LinkUtils" /* 5536 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettingsURLUtils = tmp(6568);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const UserSettingsPath = UserSettingsConstants.UserSettingsPath;
const LoginHandoffSource = { ROLE_SUBSCRIPTION: "role_subscription", ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting", GUILD_ANALYTICS_SETTING: "guild_analytics_setting", GAME_CLAIM: "game_claim" };
const result = size.fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

export { LoginHandoffSource };
export function getLoginHandoffSourceFromRedirectTo(arg0) {
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
}
