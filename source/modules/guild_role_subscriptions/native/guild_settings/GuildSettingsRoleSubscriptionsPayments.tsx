// Module ID: 16543
// Function ID: 128891
// Dependencies: [31, 33, 15331, 1212, 2]

// Module 16543
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
  return jsx(importDefault(15331), {});
});
const result = require("UnavailableNotice").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default forwardRefResult;
