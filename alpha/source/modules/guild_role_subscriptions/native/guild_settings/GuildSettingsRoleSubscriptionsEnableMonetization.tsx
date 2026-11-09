// Module ID: 20344
// Function ID: 20345
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 5011, 21, 504, 20280, 18972, 1113, 2]
// Exports: default

// Module 20344 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 18972 */;
import PlaceholderDefault from "Placeholder" /* 20280 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5011 */;
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
