// Module ID: 15453
// Function ID: 15454
// Name: useSortedMemberApplications
// Dependencies: [19, 5714, 589, 4009, 2]
// Exports: useSortedMemberApplications

// Module 15453 (useSortedMemberApplications)
import noop from "noop";
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = function useSortedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  const sortOrder = guildId.sortOrder;
  let stateFromStores;
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
