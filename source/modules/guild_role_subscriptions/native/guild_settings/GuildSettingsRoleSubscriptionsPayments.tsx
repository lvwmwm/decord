// Module ID: 16583
// Function ID: 129052
// Dependencies: [31, 33, 15371, 1212, 2]

// Module 16583
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef(() => {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.qAMb9K);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.pRuzXJ);
  obj.brightTitle = true;
  return jsx(importDefault(15371), {});
});
const result = require("UnavailableNotice").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default forwardRefResult;
