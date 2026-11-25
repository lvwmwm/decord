// Module ID: 20142
// Function ID: 20143
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 4883, 21, 504, 20078, 18334, 1112, 2]
// Exports: default

// Module 20142 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18334 */;
import PlaceholderDefault from "Placeholder" /* 20078 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;
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
