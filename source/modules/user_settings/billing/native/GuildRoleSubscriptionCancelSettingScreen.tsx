// Module ID: 15225
// Function ID: 15226
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [19, 21, 6994, 15226, 2]
// Exports: default

// Module 15225 (GuildRoleSubscriptionCancelSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6994 */;
import WhatYouLoseDefault from "WhatYouLose" /* 15226 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(WhatYouLoseDefault, {});
};
