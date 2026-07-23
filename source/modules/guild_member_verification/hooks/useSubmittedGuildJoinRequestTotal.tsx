// Module ID: 15040
// Function ID: 114553
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [6692, 566, 2]
// Exports: useSubmittedGuildJoinRequestTotal

// Module 15040 (useSubmittedGuildJoinRequestTotal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useSubmittedGuildJoinRequestTotal.tsx");

export const useSubmittedGuildJoinRequestTotal = function useSubmittedGuildJoinRequestTotal(guildId) {
  guildId = guildId.guildId;
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  return guildId(566).useStateFromStores(items, () => {
    let submittedGuildJoinRequestTotal;
    if (null != guildId) {
      submittedGuildJoinRequestTotal = outer1_2.getSubmittedGuildJoinRequestTotal(guildId);
    }
    return submittedGuildJoinRequestTotal;
  }, items1);
};
