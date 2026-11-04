// Module ID: 18527
// Function ID: 18528
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [7052, 504, 2]
// Exports: useSubmittedGuildJoinRequestTotal

// Module 18527 (useSubmittedGuildJoinRequestTotal)
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 7052 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useSubmittedGuildJoinRequestTotal.tsx");

export function useSubmittedGuildJoinRequestTotal(guildId) {
  guildId = guildId.guildId;
  const items = [GuildJoinRequestStore];
  const items1 = [guildId];
  const obj = guildId(504);
  return obj.useStateFromStores(items, () => {
    let submittedGuildJoinRequestTotal;
    if (null != guildId) {
      submittedGuildJoinRequestTotal = GuildJoinRequestStore.getSubmittedGuildJoinRequestTotal(tmp);
    }
    return submittedGuildJoinRequestTotal;
  }, items1);
}
