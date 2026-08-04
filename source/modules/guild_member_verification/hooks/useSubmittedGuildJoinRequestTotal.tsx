// Module ID: 15217
// Function ID: 15218
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [6827, 589, 2]
// Exports: useSubmittedGuildJoinRequestTotal

// Module 15217 (useSubmittedGuildJoinRequestTotal)
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
