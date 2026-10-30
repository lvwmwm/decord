// Module ID: 19875
// Function ID: 19876
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 4880, 21, 504, 19811, 18560, 1114, 2]
// Exports: default

// Module 19875 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18560 */;
import PlaceholderDefault from "Placeholder" /* 19811 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
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
    const intl = tmp(1114).intl;
    const intl2 = tmp(1114).intl;
    tmp5 = <tmp8 brightTitle title={intl.string(guildId(1114).t.KeeWp0)} description={intl2.string(guildId(1114).t["tJLG+L"])} />;
  }
  return tmp5;
};
