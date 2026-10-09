// Module ID: 16958
// Function ID: 16959
// Name: useOtherGuildJoinRequestsForUser
// Dependencies: [19, 6124, 558, 576, 504, 6123, 2]

// Module 16958 (useOtherGuildJoinRequestsForUser)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6123 */;
import react from "react" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6124 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOtherGuildJoinRequestsForUser(guildId) {
  let first;
  let selectedJoinRequestId;
  let obj = guildId(selectedJoinRequestId[3]);
  const cResult = obj.c(16);
  const tmp = guildId;
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const tmp2 = selectedJoinRequestId;
  selectedJoinRequestId = guildId.selectedJoinRequestId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildJoinRequestStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp6;
    let tmp7;
    if (cResult[2] === userId) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(tmp2[4]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] === guildId) {
      if (cResult[6] === stateFromStores) {
        let tmp9;
        let tmp10;
        let tmp14;
        let tmp15;
        if (cResult[7] === userId) {
          tmp9 = cResult[8];
          tmp10 = cResult[9];
        }
        const effect = stateFromStores.useEffect(tmp9, tmp10);
        if (cResult[10] === stateFromStores) {
          let tmp13;
          if (cResult[11] === selectedJoinRequestId) {
            tmp13 = cResult[12];
          }
          return tmp13;
        }
        if (cResult[13] !== selectedJoinRequestId) {
          const fn3 = function _(joinRequestId) {
            return joinRequestId.joinRequestId !== selectedJoinRequestId;
          };
          cResult[13] = selectedJoinRequestId;
          cResult[14] = fn3;
          tmp14 = fn3;
        } else {
          tmp14 = cResult[14];
        }
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(createdAt, createdAt2) {
              const date = new Date(createdAt2.createdAt);
              const time = date.getTime();
              const date1 = new Date(createdAt.createdAt);
              return time - date1.getTime();
            }
          }
          cResult[15] = I;
          tmp15 = I;
        } else {
          class I {
            constructor(createdAt, createdAt2) {
              const date = new Date(createdAt2.createdAt);
              const time = date.getTime();
              const date1 = new Date(createdAt.createdAt);
              return time - date1.getTime();
            }
          }
        }
        const arr4 = stateFromStores;
        if (stateFromStores == null) {
          class I {
            constructor(createdAt, createdAt2) {
              const date = new Date(createdAt2.createdAt);
              const time = date.getTime();
              const date1 = new Date(createdAt.createdAt);
              return time - date1.getTime();
            }
          }
        }
        const found = arr4.filter(tmp14);
        const substr = found.slice();
        const sorted = substr.sort(tmp15);
        cResult[10] = stateFromStores;
        cResult[11] = selectedJoinRequestId;
        cResult[12] = sorted;
        tmp13 = sorted;
      }
    }
    const fn2 = function q() {
      if (null == stateFromStores) {
        const obj = GuildJoinRequestActionCreatorsDefault;
        const guildJoinRequestsForUser = obj.fetchGuildJoinRequestsForUser(guildId, userId);
      }
    };
    const items1 = [guildId, userId, stateFromStores];
    cResult[5] = guildId;
    cResult[6] = stateFromStores;
    cResult[7] = userId;
    cResult[8] = fn2;
    cResult[9] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  }
  const fn = function n() {
    return GuildJoinRequestStore.getRequestsForUser(guildId, userId);
  };
  const items2 = [guildId, userId];
  cResult[1] = guildId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
}) : (function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  let obj = guildId(selectedJoinRequestId[4]);
  let items = [GuildJoinRequestStore];
  const items1 = [guildId, userId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildJoinRequestStore.getRequestsForUser(guildId, userId), items1);
  const items2 = [guildId, userId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const obj = GuildJoinRequestActionCreatorsDefault;
      const guildJoinRequestsForUser = obj.fetchGuildJoinRequestsForUser(guildId, userId);
    }
  }, items2);
  const items3 = [stateFromStores, selectedJoinRequestId];
  return stateFromStores.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const found = items.filter((joinRequestId) => joinRequestId.joinRequestId !== selectedJoinRequestId);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const date = new Date(createdAt2.createdAt);
      const time = date.getTime();
      const date1 = new Date(createdAt.createdAt);
      return time - date1.getTime();
    });
  }, items3);
});
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx");

export const useOtherGuildJoinRequestsForUser = tmp2;
