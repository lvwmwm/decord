// Module ID: 11753
// Function ID: 91301
// Name: LoginHandoffSource
// Dependencies: [1355, 662, 4322, 4986, 2]
// Exports: getLoginHandoffSourceFromRedirectTo

// Module 11753 (LoginHandoffSource)
import { StaticChannelRoute } from "set";
import { UserSettingsPath } from "MAX_FAVORITES";

let obj = { ROLE_SUBSCRIPTION: "role_subscription", ROLE_SUBSCRIPTION_SETTING: "role_subscription_setting" };
const result = require("canViewChannel").fileFinishedImporting("modules/auth/LoginHandoffSource.tsx");

export const LoginHandoffSource = obj;
export const getLoginHandoffSourceFromRedirectTo = function getLoginHandoffSourceFromRedirectTo(arg0) {
  const str = decodeURIComponent(arg0);
  const obj = require(4322) /* canViewChannel */;
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
