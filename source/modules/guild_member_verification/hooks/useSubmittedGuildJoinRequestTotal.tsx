// Module ID: 14916
// Function ID: 112342
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: []
// Exports: useSubmittedGuildJoinRequestTotal

// Module 14916 (useSubmittedGuildJoinRequestTotal)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_member_verification/hooks/useSubmittedGuildJoinRequestTotal.tsx");

export const useSubmittedGuildJoinRequestTotal = function useSubmittedGuildJoinRequestTotal(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const items = [closure_2];
  const items1 = [guildId];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let submittedGuildJoinRequestTotal;
    if (null != guildId) {
      submittedGuildJoinRequestTotal = submittedGuildJoinRequestTotal.getSubmittedGuildJoinRequestTotal(guildId);
    }
    return submittedGuildJoinRequestTotal;
  }, items1);
};
