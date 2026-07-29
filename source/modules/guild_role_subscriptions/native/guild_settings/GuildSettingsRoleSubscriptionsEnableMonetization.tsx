// Module ID: 16558
// Function ID: 16559
// Name: GuildSubscriptionEnableMonetization
// Dependencies: [19, 1862, 21, 589, 16520, 15404, 1236, 2]
// Exports: default

// Module 16558 (GuildSubscriptionEnableMonetization)
import "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  if (null == obj.useStateFromStores(items, () => outer1_3.getGuild(guildId))) {
    let tmp5 = jsx(importDefault(16520), {});
  } else {
    obj = { brightTitle: true, title: null, description: null };
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.KeeWp0);
    const intl2 = tmp(1236).intl;
    obj[2] = intl2.string(tmp(1236).t["tJLG+L"]);
    tmp5 = jsx(importDefault(15404), { brightTitle: true, title: null, description: null });
    const tmp8 = importDefault(15404);
  }
  return tmp5;
};
