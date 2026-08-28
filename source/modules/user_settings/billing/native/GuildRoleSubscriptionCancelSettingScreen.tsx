// Module ID: 14754
// Function ID: 14755
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [19, 21, 7106, 14755, 2]
// Exports: default

// Module 14754 (GuildRoleSubscriptionCancelSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7106 */;
import WhatYouLoseDefault from "WhatYouLose" /* 14755 */;
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
