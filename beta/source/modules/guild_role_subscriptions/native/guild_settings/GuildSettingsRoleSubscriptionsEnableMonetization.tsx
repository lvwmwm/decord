// Module ID: 18191
// Function ID: 18192
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 2067, 21, 558, 568, 504, 18153, 16897, 1119, 2]

// Module 18191 (GuildSettingsRoleSubscriptionsEnableMonetization)
import UnavailableNoticeDefault from "UnavailableNotice" /* 16897 */;
import PlaceholderDefault from "Placeholder" /* 18153 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp2 = dependencyMap;
  const cResult = guildId(568).c(5);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(568);
  if (null == tmpResult.useStateFromStores(first, tmp6)) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      tmp2 = jsx(PlaceholderDefault, {});
      cResult[3] = tmp2;
    }
  } else {
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { brightTitle: true, title: null, description: null };
      const intl = tmp(1119).intl;
      obj2.title = intl.string(tmp(1119).t.KeeWp0);
      const intl2 = tmp(1119).intl;
      obj2.description = intl2.string(tmp(1119).t["tJLG+L"]);
      const tmp11 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
      cResult[4] = tmp11;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [GuildStore];
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    const obj2 = { brightTitle: true, title: null, description: null };
    const intl = tmp(1119).intl;
    obj2.title = intl.string(tmp(1119).t.KeeWp0);
    const intl2 = tmp(1119).intl;
    obj2.description = intl2.string(tmp(1119).t["tJLG+L"]);
    tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
  }
  return tmp5;
});
