// Module ID: 17197
// Function ID: 17198
// Name: GuildPremiumRoleSubscribeButton
// Dependencies: [19, 21, 4444, 8901, 1236, 2]
// Exports: GuildPremiumRoleSubscribeButton

// Module 17197 (GuildPremiumRoleSubscribeButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CreatorRevenueButton from "CreatorRevenueButton" /* 8901 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ crButton: { marginVertical: 16 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = { text: null, onPress: null, style: null, disabled: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.BEeXib);
  obj[1] = onPress.onPress;
  obj[2] = callback().crButton;
  return jsx(CreatorRevenueButton.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
};
