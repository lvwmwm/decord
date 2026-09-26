// Module ID: 17542
// Function ID: 17543
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 2067, 21, 504, 17504, 16189, 1115, 2]
// Exports: default

// Module 17542 (GuildSettingsRoleSubscriptionsEnableMonetization)
import UnavailableNoticeDefault from "UnavailableNotice" /* 16189 */;
import PlaceholderDefault from "Placeholder" /* 17504 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    const obj2 = { brightTitle: true, title: null, description: null };
    const intl = tmp(1115).intl;
    obj2.title = intl.string(tmp(1115).t.KeeWp0);
    const intl2 = tmp(1115).intl;
    obj2.description = intl2.string(tmp(1115).t["tJLG+L"]);
    tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
  }
  return tmp5;
};
