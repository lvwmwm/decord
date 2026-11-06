// Module ID: 20264
// Function ID: 20265
// Name: useRoleSubscriptionFormat
// Dependencies: [19, 5077, 5076, 5041, 17457, 1072, 504, 2]
// Exports: default

// Module 20264 (useRoleSubscriptionFormat)
import Constants from "Constants" /* 1072 */;
import GuildRoleRecord from "GuildRoleRecord" /* 5077 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17457 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 5076 */;
import GuildStore from "GuildStore" /* 5041 */;
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
