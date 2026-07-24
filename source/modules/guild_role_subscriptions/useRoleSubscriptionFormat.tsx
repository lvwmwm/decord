// Module ID: 16462
// Function ID: 128272
// Name: useRoleSubscriptionFormat
// Dependencies: [31, 1911, 1910, 1838, 14144, 653, 566, 2]
// Exports: default

// Module 16462 (useRoleSubscriptionFormat)
import result from "result";
import { hasPermission } from "GuildRoleRecordTypeTag";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import { GuildRoleSubscriptionFormat as closure_6 } from "MAX_SUBSCRIPTION_TIERS";
import { Permissions } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores[6]);
  const items = [closure_5, _createForOfIteratorHelperLoose];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    let everyoneRole;
    if (null != guild) {
      everyoneRole = outer1_4.getEveryoneRole(guild);
    }
    return everyoneRole;
  });
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      if (!outer1_3(stateFromStores, outer1_7.VIEW_CHANNEL)) {
        let SOME_CHANNELS = outer1_6.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = outer1_6.SOME_CHANNELS;
  }, items1);
  obj = { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
  return obj;
};
