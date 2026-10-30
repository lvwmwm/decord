// Module ID: 7501
// Function ID: 7502
// Name: LoginHandoffSource
// Dependencies: [4865, 1082, 5649, 6785, 2]
// Exports: getLoginHandoffSourceFromRedirectTo

// Module 7501 (LoginHandoffSource)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import LinkUtils from "LinkUtils" /* 5649 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettingsURLUtils = tmp(6785);
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
