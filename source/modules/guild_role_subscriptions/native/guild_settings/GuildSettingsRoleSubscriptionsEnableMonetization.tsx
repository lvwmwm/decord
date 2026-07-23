// Module ID: 16413
// Function ID: 127935
// Name: GuildSubscriptionEnableMonetization
// Dependencies: [31, 1838, 33, 566, 16375, 15261, 1212, 2]
// Exports: default

// Module 16413 (GuildSubscriptionEnableMonetization)
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [_createForOfIteratorHelperLoose];
  if (null == obj.useStateFromStores(items, () => outer1_3.getGuild(guildId))) {
    let tmp4 = jsx(importDefault(16375), {});
  } else {
    obj = { brightTitle: true };
    const intl = guildId(1212).intl;
    obj.title = intl.string(guildId(1212).t.KeeWp0);
    const intl2 = guildId(1212).intl;
    obj.description = intl2.string(guildId(1212).t["tJLG+L"]);
    tmp4 = jsx(importDefault(15261), { brightTitle: true });
    const tmp8 = importDefault(15261);
  }
  return tmp4;
};
