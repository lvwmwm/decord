// Module ID: 17729
// Function ID: 17730
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [6527, 504, 2]
// Exports: useSubmittedGuildJoinRequestTotal

// Module 17729 (useSubmittedGuildJoinRequestTotal)
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6527 */;
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
