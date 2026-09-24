// Module ID: 7502
// Function ID: 7503
// Name: useIsNewMember
// Dependencies: [2102, 2109, 4418, 1389, 1095, 558, 568, 504, 2]
// Exports: getIsNewMember

// Module 7502 (useIsNewMember)
import DurationsDefault from "Durations" /* 1095 */;
import FlagUtils from "FlagUtils" /* 1389 */;
import ImpersonateStore from "ImpersonateStore" /* 2102 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;

const require = globalThis.__r;

require = fn;
const GuildMemberFlags = fn(4418).GuildMemberFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, ImpersonateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let flag = true;
      if (!ImpersonateStore.isFullServerPreview(closure_0)) {
        const selfMember = obj.getSelfMember(tmp);
        flag = false;
        if (null != selfMember) {
          const selfMemberJoinedAt = obj.getSelfMemberJoinedAt(tmp);
          let tmp4 = null != selfMemberJoinedAt;
          if (tmp4) {
            let num = selfMember.flags;
            if (num == null) {
              num = 0;
            }
            const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
            let tmp9 = !hasFlagResult;
            if (!hasFlagResult) {
              const _Date = Date;
              const timestamp = Date.now();
              const diff = timestamp - selfMemberJoinedAt.getTime();
              tmp9 = diff < DurationsDefault.Millis.WEEK;
            }
            tmp4 = tmp9;
          }
          flag = tmp4;
        }
      }
      return flag;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildMemberStore, ImpersonateStore];
  return require("initialize").useStateFromStores(items, () => {
    let flag = true;
    if (!ImpersonateStore.isFullServerPreview(closure_0)) {
      const selfMember = obj.getSelfMember(tmp);
      flag = false;
      if (null != selfMember) {
        const selfMemberJoinedAt = obj.getSelfMemberJoinedAt(tmp);
        let tmp4 = null != selfMemberJoinedAt;
        if (tmp4) {
          let num = selfMember.flags;
          if (num == null) {
            num = 0;
          }
          const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
          let tmp9 = !hasFlagResult;
          if (!hasFlagResult) {
            const _Date = Date;
            const timestamp = Date.now();
            const diff = timestamp - selfMemberJoinedAt.getTime();
            tmp9 = diff < DurationsDefault.Millis.WEEK;
          }
          tmp4 = tmp9;
        }
        flag = tmp4;
      }
    }
    return flag;
  });
});
export const getIsNewMember = function getIsNewMember(id) {
  let flag = true;
  if (!ImpersonateStore.isFullServerPreview(id)) {
    const selfMember = obj.getSelfMember(id);
    flag = false;
    if (null != selfMember) {
      const selfMemberJoinedAt = obj.getSelfMemberJoinedAt(id);
      let tmp3 = null != selfMemberJoinedAt;
      if (tmp3) {
        let num = selfMember.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        let tmp8 = !hasFlagResult;
        if (!hasFlagResult) {
          const _Date = Date;
          const timestamp = Date.now();
          const diff = timestamp - selfMemberJoinedAt.getTime();
          tmp8 = diff < DurationsDefault.Millis.WEEK;
        }
        tmp3 = tmp8;
      }
      flag = tmp3;
    }
  }
  return flag;
};
