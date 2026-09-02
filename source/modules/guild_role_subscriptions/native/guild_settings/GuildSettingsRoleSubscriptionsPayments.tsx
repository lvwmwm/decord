// Module ID: 17598
// Function ID: 17599
// Dependencies: [19, 21, 16353, 1233, 2]

// Module 17598
import getSystemLocale from "getSystemLocale" /* 1233 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16353 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef(() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.qAMb9K);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.pRuzXJ);
  return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
});
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default forwardRefResult;
