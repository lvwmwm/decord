// Module ID: 6644
// Function ID: 6645
// Name: useIsNewMember
// Dependencies: [2101, 2108, 4455, 1385, 1091, 504, 2]
// Exports: default, getIsNewMember

// Module 6644 (useIsNewMember)
import DurationsDefault from "Durations" /* 1091 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsNewMember.tsx");

export default function useIsNewMember(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [GuildMemberStore, ImpersonateStore];
  return obj.useStateFromStores(items, () => {
    let flag = true;
    if (!ImpersonateStore.isFullServerPreview(closure_0)) {
      const selfMember = obj.getSelfMember(tmp);
      flag = false;
      if (null != selfMember) {
        const selfMemberJoinedAt = obj.getSelfMemberJoinedAt(tmp);
        let tmp4 = null != selfMemberJoinedAt;
        if (tmp4) {
          let num = selfMember.flags;
          const hasFlag = FlagUtils.hasFlag;
          FlagUtils;
          if (num == null) {
            num = 0;
          }
          let tmp10 = !hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
          hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
          if (tmp10) {
            const _Date = Date;
            const timestamp = Date.now();
            const diff = timestamp - selfMemberJoinedAt.getTime();
            tmp10 = diff < DurationsDefault.Millis.WEEK;
          }
          tmp4 = tmp10;
        }
        flag = tmp4;
      }
    }
    return flag;
  });
};
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
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        let tmp9 = !hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        if (tmp9) {
          const _Date = Date;
          const timestamp = Date.now();
          const diff = timestamp - selfMemberJoinedAt.getTime();
          tmp9 = diff < DurationsDefault.Millis.WEEK;
        }
        tmp3 = tmp9;
      }
      flag = tmp3;
    }
  }
  return flag;
};
