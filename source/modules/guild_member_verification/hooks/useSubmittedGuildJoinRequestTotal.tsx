// Module ID: 16137
// Function ID: 16138
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [5497, 586, 2]
// Exports: useSubmittedGuildJoinRequestTotal

// Module 16137 (useSubmittedGuildJoinRequestTotal)
import closure_2 from "updateSubmittedGuildJoinRequestTotal" /* 5497 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useSubmittedGuildJoinRequestTotal.tsx");

export const useSubmittedGuildJoinRequestTotal = function useSubmittedGuildJoinRequestTotal(guildId) {
  guildId = guildId.guildId;
  const items = [closure_2];
  const items1 = [guildId];
  return guildId(586).useStateFromStores(items, () => {
    let submittedGuildJoinRequestTotal;
    if (null != guildId) {
      submittedGuildJoinRequestTotal = closure_1_2.getSubmittedGuildJoinRequestTotal(tmp);
    }
    return submittedGuildJoinRequestTotal;
  }, items1);
};
