// Module ID: 19231
// Function ID: 19232
// Name: useSortedMemberApplications
// Dependencies: [19, 6870, 504, 5289, 2]
// Exports: useSortedMemberApplications

// Module 19231 (useSortedMemberApplications)
import MemberVerificationTypes from "MemberVerificationTypes" /* 5289 */;
import react from "react" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export function useSortedMemberApplications(guildId) {
  let items2;
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  const sortOrder = guildId.sortOrder;
  let stateFromStores;
  let items = [stateFromStores];
  const items1 = [applicationStatus, guildId];
  const obj = guildId(applicationStatus[2]);
  stateFromStores = obj.useStateFromStores(items, () => GuildJoinRequestStore.getRequests(guildId, applicationStatus), items1);
  const obj2 = {
    guildJoinRequests: sortOrder.useMemo(() => {
      let reversed;
      if (sortOrder === MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
        const items = [];
        HermesBuiltin.arraySpread(items, stateFromStores, 0);
        reversed = items.reverse();
      } else {
        reversed = stateFromStores;
      }
      return reversed;
    }, items2)
  };
  items2 = [sortOrder, stateFromStores];
  return obj2;
}
