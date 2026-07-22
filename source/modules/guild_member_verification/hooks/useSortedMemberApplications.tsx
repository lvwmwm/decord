// Module ID: 15194
// Function ID: 114593
// Name: useSortedMemberApplications
// Dependencies: []
// Exports: useSortedMemberApplications

// Module 15194 (useSortedMemberApplications)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_member_verification/hooks/useSortedMemberApplications.tsx");

export const useSortedMemberApplications = function useSortedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const applicationStatus = guildId.applicationStatus;
  const dependencyMap = applicationStatus;
  const sortOrder = guildId.sortOrder;
  const React = sortOrder;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const items1 = [applicationStatus, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getRequests(guildId, applicationStatus), items1);
  closure_3 = stateFromStores;
  obj = {
    guildJoinRequests: React.useMemo(() => {
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
  const items2 = [sortOrder, stateFromStores];
  return obj;
};
