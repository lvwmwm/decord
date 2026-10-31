// Module ID: 7400
// Function ID: 7401
// Name: useIsNewMember
// Dependencies: [4919, 4926, 4932, 1396, 1089, 504, 2]
// Exports: default, getIsNewMember

// Module 7400 (useIsNewMember)
import DurationsDefault from "Durations" /* 1089 */;
import FlagUtils from "FlagUtils" /* 1396 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4932 */;
import ImpersonateStore from "ImpersonateStore" /* 4919 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
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
export function getIsNewMember(id) {
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
}
