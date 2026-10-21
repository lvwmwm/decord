// Module ID: 19077
// Function ID: 19078
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 4843, 21, 558, 576, 504, 19039, 17814, 1128, 2]

// Module 19077 (GuildSettingsRoleSubscriptionsEnableMonetization)
import Fragment from "Fragment" /* 21 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 17814 */;
import PlaceholderDefault from "Placeholder" /* 19039 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4843 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSubscriptionEnableMonetization(guildId) {
  let first;
  let tmp6;
  let tmp7;
  const obj = guildId(576);
  const cResult = obj.c(5);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(504);
  if (null == tmpResult.useStateFromStores(first, tmp6)) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = jsx(PlaceholderDefault, {});
      cResult[3] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    tmp7 = tmp12;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      UnavailableNoticeDefault;
      const intl = tmp(1128).intl;
      const intl2 = tmp(1128).intl;
      const tmp11 = <tmp10 brightTitle title={intl.string(guildId(1128).t.KeeWp0)} description={intl2.string(guildId(1128).t["tJLG+L"])} />;
      cResult[4] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
  }
  return tmp7;
}) : (function GuildSubscriptionEnableMonetization(guildId) {
  let tmp5;
  guildId = guildId.guildId;
  const items = [GuildStore];
  const obj = guildId(504);
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    tmp5 = jsx(PlaceholderDefault, {});
  } else {
    UnavailableNoticeDefault;
    const intl = tmp(1128).intl;
    const intl2 = tmp(1128).intl;
    tmp5 = <tmp8 brightTitle title={intl.string(guildId(1128).t.KeeWp0)} description={intl2.string(guildId(1128).t["tJLG+L"])} />;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default tmp3;
