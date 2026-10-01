// Module ID: 17546
// Function ID: 17547
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 2067, 21, 504, 17508, 16185, 1115, 2]
// Exports: default

// Module 17546 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16185 */;
import PlaceholderDefault from "Placeholder" /* 17508 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  let tmp5;
  guildId = guildId.guildId;
  const items = [GuildStore];
  const obj = guildId(504);
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    tmp5 = jsx(PlaceholderDefault, {});
  } else {
    UnavailableNoticeDefault;
    const intl = tmp(1115).intl;
    const intl2 = tmp(1115).intl;
    tmp5 = <tmp8 brightTitle title={intl.string(guildId(1115).t.KeeWp0)} description={intl2.string(guildId(1115).t["tJLG+L"])} />;
  }
  return tmp5;
};
