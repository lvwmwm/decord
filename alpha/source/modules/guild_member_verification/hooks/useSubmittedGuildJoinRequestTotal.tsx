// Module ID: 16628
// Function ID: 16629
// Name: useSubmittedGuildJoinRequestTotal
// Dependencies: [6117, 558, 576, 504, 2]

// Module 16628 (useSubmittedGuildJoinRequestTotal)
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6117 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSubmittedGuildJoinRequestTotal(guildId) {
  let first;
  let tmp6;
  let tmp7;
  const tmp = guildId;
  const obj = guildId(576);
  const cResult = obj.c(4);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildJoinRequestStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      let submittedGuildJoinRequestTotal;
      if (null != guildId) {
        submittedGuildJoinRequestTotal = GuildJoinRequestStore.getSubmittedGuildJoinRequestTotal(tmp);
      }
      return submittedGuildJoinRequestTotal;
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useSubmittedGuildJoinRequestTotal(guildId) {
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
});
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useSubmittedGuildJoinRequestTotal.tsx");

export const useSubmittedGuildJoinRequestTotal = tmp2;
