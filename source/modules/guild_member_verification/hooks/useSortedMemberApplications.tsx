// Module ID: 15380
// Function ID: 117262
// Name: useSortedMemberApplications
// Dependencies: [31, 5686, 566, 3951, 2]
// Exports: useSortedMemberApplications

// Module 15380 (useSortedMemberApplications)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = function useSortedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  const sortOrder = guildId.sortOrder;
  let obj = guildId(applicationStatus[2]);
  let items = [stateFromStores];
  const items1 = [applicationStatus, guildId];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getRequests(guildId, applicationStatus), items1);
  obj = {
    guildJoinRequests: sortOrder.useMemo(() => {
      if (sortOrder === guildId(applicationStatus[3]).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
        const items = [];
        HermesBuiltin.arraySpread(stateFromStores, 0);
        let reversed = items.reverse();
      } else {
        reversed = stateFromStores;
      }
      return reversed;
    }, items2)
  };
  items2 = [sortOrder, stateFromStores];
  return obj;
};
