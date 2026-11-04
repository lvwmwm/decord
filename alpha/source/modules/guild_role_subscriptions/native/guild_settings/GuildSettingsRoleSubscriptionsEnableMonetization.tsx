// Module ID: 20205
// Function ID: 20206
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 5012, 21, 504, 20141, 18875, 1113, 2]
// Exports: default

// Module 20205 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18875 */;
import PlaceholderDefault from "Placeholder" /* 20141 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
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
    const intl = tmp(1113).intl;
    const intl2 = tmp(1113).intl;
    tmp5 = <tmp8 brightTitle title={intl.string(guildId(1113).t.KeeWp0)} description={intl2.string(guildId(1113).t["tJLG+L"])} />;
  }
  return tmp5;
};
