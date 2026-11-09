// Module ID: 18607
// Function ID: 18608
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [6972, 504, 2]
// Exports: useSubmittedGuildJoinRequestTotal

// Module 18607 (useSubmittedGuildJoinRequestTotal)
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6972 */;
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
