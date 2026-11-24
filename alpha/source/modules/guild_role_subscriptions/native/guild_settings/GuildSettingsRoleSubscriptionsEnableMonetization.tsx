// Module ID: 20040
// Function ID: 20041
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 4788, 21, 504, 19976, 18222, 1112, 2]
// Exports: default

// Module 20040 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18222 */;
import PlaceholderDefault from "Placeholder" /* 19976 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4788 */;
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
    const intl = tmp(1112).intl;
    const intl2 = tmp(1112).intl;
    tmp5 = <tmp8 brightTitle title={intl.string(guildId(1112).t.KeeWp0)} description={intl2.string(guildId(1112).t["tJLG+L"])} />;
  }
  return tmp5;
};
