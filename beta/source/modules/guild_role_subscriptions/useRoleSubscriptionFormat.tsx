// Module ID: 17548
// Function ID: 17549
// Name: useRoleSubscriptionFormat
// Dependencies: [19, 2103, 2102, 2067, 14750, 1074, 504, 2]
// Exports: default

// Module 17548 (useRoleSubscriptionFormat)
import Constants from "Constants" /* 1074 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2103 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const hasPermission = GuildRoleRecord.hasPermission;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionFormat;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const items = [GuildStore, GuildRoleStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let everyoneRole;
    if (null != guild) {
      everyoneRole = GuildRoleStore.getEveryoneRole(guild);
    }
    return everyoneRole;
  });
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    if (null != stateFromStores) {
      let SOME_CHANNELS;
      if (!hasPermission(tmp, Permissions.VIEW_CHANNEL)) {
        SOME_CHANNELS = constants.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = constants.SOME_CHANNELS;
  }, items1);
  return { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
};
