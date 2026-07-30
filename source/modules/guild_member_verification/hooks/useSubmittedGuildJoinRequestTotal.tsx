// Module ID: 15176
// Function ID: 15177
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [5714, 589, 2]
// Exports: useSubmittedGuildJoinRequestTotal

// Module 15176 (useSubmittedGuildJoinRequestTotal)
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useSubmittedGuildJoinRequestTotal.tsx");

export const useSubmittedGuildJoinRequestTotal = function useSubmittedGuildJoinRequestTotal(guildId) {
  guildId = guildId.guildId;
  const items = [updateSubmittedGuildJoinRequestTotal];
  const items1 = [guildId];
  return guildId(589).useStateFromStores(items, () => {
    let submittedGuildJoinRequestTotal;
    if (null != guildId) {
      submittedGuildJoinRequestTotal = outer1_2.getSubmittedGuildJoinRequestTotal(tmp);
    }
    return submittedGuildJoinRequestTotal;
  }, items1);
};
