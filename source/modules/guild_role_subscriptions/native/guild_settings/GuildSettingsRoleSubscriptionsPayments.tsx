// Module ID: 16618
// Function ID: 16619
// Dependencies: [19, 21, 15404, 1236, 2]

// Module 16618
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef(() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.qAMb9K);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.pRuzXJ);
  return jsx(importDefault(15404), { title: null, description: null, brightTitle: true });
});
const result = require("UnavailableNotice").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default forwardRefResult;
