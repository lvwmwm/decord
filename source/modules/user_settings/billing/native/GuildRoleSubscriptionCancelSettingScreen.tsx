// Module ID: 14669
// Function ID: 14670
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [19, 21, 7021, 14670, 2]
// Exports: default

// Module 14669 (GuildRoleSubscriptionCancelSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7021 */;
import WhatYouLoseDefault from "WhatYouLose" /* 14670 */;
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
