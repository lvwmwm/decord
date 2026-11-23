// Module ID: 19997
// Function ID: 19998
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 4784, 21, 504, 19933, 18183, 1112, 2]
// Exports: default

// Module 19997 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18183 */;
import PlaceholderDefault from "Placeholder" /* 19933 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
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
