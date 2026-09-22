// Module ID: 17837
// Function ID: 17838
// Name: useRoleSubscriptionFormat
// Dependencies: [19, 2016, 2015, 1979, 15289, 1074, 504, 2]
// Exports: default

// Module 17837 (useRoleSubscriptionFormat)
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = globalThis.__r;

const require = fn;
const hasPermission = fn(2016).hasPermission;
const constants = fn(15289).GuildRoleSubscriptionFormat;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  _require = arg0;
  const items = [GuildStore, GuildRoleStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let everyoneRole;
    if (null != guild) {
      everyoneRole = GuildRoleStore.getEveryoneRole(guild);
    }
    return everyoneRole;
  });
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    if (null != stateFromStores) {
      if (!hasPermission(tmp, Permissions.VIEW_CHANNEL)) {
        let SOME_CHANNELS = constants.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = constants.SOME_CHANNELS;
  }, items1);
  return { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
};
